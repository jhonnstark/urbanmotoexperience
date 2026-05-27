<template>
  <section id="socials" class="socials-section" aria-labelledby="socials-title">
    <div class="socials-shell">
      <p class="eyebrow reveal s1">{{ $t('socials.header.subtitle') }}</p>
      <div class="line reveal s2" aria-hidden="true"></div>
      <h2 id="socials-title" class="title reveal s3">{{ $t('socials.header.title') }}</h2>
      <p class="subtitle reveal s4">{{ $t('socials.header.description') }}</p>

      <div class="social-grid">
        <article
          v-for="(post, index) in posts"
          :key="post.src"
          class="post"
          :style="{ '--delay': `${420 + index * 90}ms` }"
        >
          <div class="post-placeholder"></div>
          <div v-if="post.video" class="play" aria-hidden="true">▶</div>
          <div v-if="post.video" class="video-text">Ride Through <em>CDMX</em></div>
        </article>
      </div>

      <div class="follow-card reveal s5">
        <div class="ig-icon">◎</div>
        <strong>@urbanmotoexperiencecdmx</strong>
        <a href="https://instagram.com/urbanmotoexperiencecdmx" target="_blank" rel="noreferrer"
          >▣ Follow On Instagram</a
        >
      </div>

      <div class="story-row" aria-label="Instagram highlight categories">
        <article
          v-for="(story, index) in stories"
          :key="story.label"
          class="story"
          :style="{ '--delay': `${920 + index * 80}ms` }"
        >
          <div class="story-thumb"></div>
          <strong>{{ story.label }}</strong>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = Array.from({ length: 6 }, (_, index) => ({
  src: `/images/social-${index + 1}.png`,
  video: index === 5,
}))
const stories = [
  { label: 'Routes', file: 'routes' },
  { label: 'Riders', file: 'riders' },
  { label: 'Reviews', file: 'reviews' },
  { label: 'CDMX', file: 'cdmx' },
  { label: 'Safety', file: 'safety' },
  { label: 'Night Ride', file: 'night' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');
.socials-section {
  --dark: #071a2c;
  --green: #79b83f;
  background: #fff;
  color: var(--dark);
  font-family: 'Oswald', system-ui, sans-serif;
  padding: 52px 58px 50px;
  overflow: hidden;
}
.socials-shell {
  width: min(1380px, 100%);
  margin: 0 auto;
  text-align: center;
}
.eyebrow {
  margin: 0;
  color: var(--green);
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
}
.line {
  width: 38px;
  height: 2px;
  background: var(--green);
  margin: 18px auto 22px;
}
.title {
  margin: 0;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: clamp(72px, 6.4vw, 112px);
  line-height: 0.92;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}
.subtitle {
  margin: 18px 0 32px;
  font: 23px system-ui, sans-serif;
  color: #1d2939;
}
.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.post {
  height: 285px;
  position: relative;
  margin: 0;
  border-radius: 6px;
  overflow: hidden;
  background: #e8efe2;
  opacity: 0;
  transform: translateY(22px) scale(0.98);
  animation: itemIn 0.68s ease forwards;
  animation-delay: var(--delay);
}
.post-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #dce9f4, #567655 55%, #243b2e);
  transition: transform 0.5s ease;
}
.post:hover .post-placeholder {
  transform: scale(1.04);
}
.play {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 90px;
  height: 90px;
  border: 6px solid white;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: white;
  font-size: 42px;
  background: rgba(255, 255, 255, 0.08);
  text-indent: 6px;
}
.video-text {
  position: absolute;
  right: 30px;
  bottom: 26px;
  color: white;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: 36px;
  line-height: 0.9;
  text-align: right;
  text-transform: uppercase;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.45);
}
.video-text em {
  display: block;
  color: var(--green);
  font-style: normal;
  font-size: 56px;
}
.follow-card {
  display: grid;
  place-items: center;
  gap: 10px;
  margin: 24px auto 34px;
}
.ig-icon {
  font-size: 34px;
}
.follow-card strong {
  font-size: 21px;
}
.follow-card a {
  height: 42px;
  padding: 0 24px;
  border-radius: 4px;
  background: var(--green);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
}
.story-row {
  display: flex;
  justify-content: center;
  gap: 56px;
  overflow-x: auto;
  padding: 8px 0 0;
}
.story {
  min-width: 92px;
  display: grid;
  place-items: center;
  gap: 8px;
  opacity: 0;
  transform: translateY(18px) scale(0.95);
  animation: itemIn 0.55s ease forwards;
  animation-delay: var(--delay);
}
.story-thumb {
  width: 68px;
  height: 68px;
  border-radius: 999px;
  border: 2px solid var(--green);
  padding: 2px;
  background: linear-gradient(135deg, #c9d8e8, #7aa665);
}
.story strong {
  text-transform: uppercase;
  font-size: 13px;
}
.reveal {
  opacity: 0;
  transform: translateY(22px);
  animation: fadeUp 0.7s ease forwards;
}
.s1 {
  animation-delay: 60ms;
}
.s2 {
  animation-delay: 140ms;
}
.s3 {
  animation-delay: 220ms;
}
.s4 {
  animation-delay: 320ms;
}
.s5 {
  animation-delay: 760ms;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes itemIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 950px) {
  .social-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .socials-section {
    padding: 56px 24px;
  }
  .post {
    height: 250px;
  }
  .story-row {
    justify-content: flex-start;
  }
}
@media (max-width: 620px) {
  .social-grid {
    grid-template-columns: 1fr;
  }
  .post {
    height: 240px;
  }
  .subtitle {
    font-size: 18px;
  }
  .story-row {
    gap: 24px;
  }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
