export function image1x(src: string): string {
  return src.replace(/(\.[a-zA-Z0-9]+)$/, '-1x$1')
}

export function retinaSrcSet(src: string): string {
  return `${image1x(src)} 1x, ${src} 2x`
}
