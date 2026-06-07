import { expect, test } from '@playwright/test'

function unique(values: string[]) {
  return Array.from(new Set(values))
}

test.describe('Page assets', () => {
  test('should not render broken images or load broken same-origin image assets', async ({
    page,
    baseURL,
  }) => {
    const failedImageResponses: string[] = []

    page.on('response', (response) => {
      const request = response.request()
      const resourceType = request.resourceType()
      const url = response.url()

      if (resourceType === 'image' && response.status() >= 400 && url.startsWith(baseURL ?? '')) {
        failedImageResponses.push(`${response.status()} ${url}`)
      }
    })

    await page.goto('/')

    const sectionIds = ['about', 'route', 'experience', 'gallery', 'socials', 'contact']
    for (const sectionId of sectionIds) {
      await page.locator(`#${sectionId}`).scrollIntoViewIfNeeded()
      await page.waitForTimeout(120)
    }

    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForLoadState('networkidle')

    const brokenImages = await page.locator('img').evaluateAll((images) =>
      images
        .filter((image) => !image.complete || image.naturalWidth === 0 || image.naturalHeight === 0)
        .map((image) => ({
          alt: image.alt,
          currentSrc: image.currentSrc,
          src: image.getAttribute('src'),
        })),
    )

    expect(brokenImages).toEqual([])
    expect(failedImageResponses).toEqual([])

    const sameOriginAssetUrls = await page.evaluate(() => {
      const urls: string[] = []

      document.querySelectorAll('img').forEach((image) => {
        const src = image.currentSrc || image.src
        if (src) {
          urls.push(src)
        }
      })

      document.querySelectorAll<HTMLElement>('*').forEach((element) => {
        const backgroundImage = window.getComputedStyle(element).backgroundImage
        const matches = backgroundImage.matchAll(/url\(["']?([^"')]+)["']?\)/g)
        for (const match of matches) {
          urls.push(new URL(match[1], window.location.href).href)
        }
      })

      return urls.filter((url) => url.startsWith(window.location.origin))
    })

    const checkedUrls = unique(sameOriginAssetUrls)
    expect(checkedUrls.length).toBeGreaterThan(0)

    const failedChecks: string[] = []
    for (const url of checkedUrls) {
      const response = await page.request.get(url)
      if (!response.ok()) {
        failedChecks.push(`${response.status()} ${url}`)
      }
    }

    expect(failedChecks).toEqual([])
  })
})
