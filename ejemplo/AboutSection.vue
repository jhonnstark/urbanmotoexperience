<template>
  <section id="about" class="about-section" aria-labelledby="about-title">
    <div class="about-shell">
      <div class="about-copy">
        <p class="eyebrow reveal r1">{{ $t?.('about.eyebrow') || 'About the experience' }}</p>
        <div class="eyebrow-line reveal r2" aria-hidden="true"></div>

        <h2 id="about-title" class="about-title reveal r3">
          <span>A Different Way</span>
          <span>To Explore <em>CDMX</em></span>
        </h2>

        <p class="about-text reveal r4">
          Small-group urban motorcycle experiences through the most iconic parts of Mexico City.
          Ride through Reforma, Chapultepec, Bellas Artes, and historic streets while discovering
          the city from a local perspective.
        </p>

        <div class="feature-grid" aria-label="Experience highlights">
          <article v-for="(feature, index) in features" :key="feature.label" class="feature-card" :style="{ '--delay': `${520 + index * 90}ms` }">
            <span class="feature-icon" aria-hidden="true" v-html="feature.icon"></span>
            <strong>{{ feature.label }}</strong>
          </article>
        </div>

        <button class="learn-btn reveal r5" type="button" @click="scrollToExperience">
          Learn More <span>→</span>
        </button>
      </div>

      <div class="about-image-wrap" aria-hidden="true">
        <div class="about-image"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Feature = { label: string; icon: string }

const features: Feature[] = [
  { label: 'Local Guides', icon: '☘' },
  { label: 'Helmets Included', icon: '◖' },
  { label: 'Photo Stops', icon: '▣' },
  { label: 'Small Groups', icon: '♙' },
  { label: 'Flexible Private Rides', icon: '⌖' },
]

const scrollToExperience = () => {
  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');

.about-section {
  --dark: #071a2c;
  --text: #172234;
  --green: #79b83f;
  --line: rgba(7, 26, 44, 0.15);
  background: #fff;
  color: var(--text);
  font-family: 'Oswald', system-ui, sans-serif;
  overflow: hidden;
}

.about-shell {
  width: min(1500px, 100%);
  margin: 0 auto;
  padding: 86px 64px;
  display: grid;
  grid-template-columns: 0.43fr 0.57fr;
  gap: 88px;
  align-items: center;
}

.eyebrow { margin: 0; color: var(--green); font-size: 20px; font-weight: 800; text-transform: uppercase; }
.eyebrow-line { width: 43px; height: 2px; margin: 20px 0 44px; background: var(--green); }

.about-title {
  margin: 0;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: clamp(74px, 6.6vw, 118px);
  line-height: 0.92;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: var(--dark);
}
.about-title span { display: block; }
.about-title em { color: var(--green); font-style: normal; }

.about-text {
  max-width: 580px;
  margin: 34px 0 44px;
  font-family: system-ui, sans-serif;
  font-size: 22px;
  line-height: 1.45;
}

.feature-grid {
  width: min(560px, 100%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid var(--line);
}

.feature-card {
  min-height: 118px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 12px;
  border-right: 1px solid var(--line);
  opacity: 0;
  transform: translateY(20px) scale(0.97);
  animation: popIn 0.62s ease forwards;
  animation-delay: var(--delay);
}
.feature-card:nth-child(3), .feature-card:nth-child(5) { border-right: 0; }
.feature-card:nth-child(n + 4) { border-top: 1px solid var(--line); }
.feature-card:nth-child(4) { grid-column: 1 / 2; }
.feature-card:nth-child(5) { grid-column: 2 / 4; }

.feature-icon { color: var(--green); font-size: 50px; line-height: 1; text-shadow: 0 0 0 #071a2c; }
.feature-card strong { color: var(--dark); font-size: 16px; line-height: 1.1; text-align: center; text-transform: uppercase; }

.learn-btn {
  width: 235px;
  height: 56px;
  margin-top: 56px;
  border: 2px solid var(--green);
  border-radius: 6px;
  background: white;
  color: var(--green);
  font: 800 18px 'Oswald', sans-serif;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  cursor: pointer;
}

.about-image-wrap { opacity: 0; transform: translateX(36px); animation: fadeLeft 0.9s ease forwards 360ms; }
.about-image {
  min-height: 890px;
  border-radius: 22px;
  background-image: url('/images/about-main.png'), linear-gradient(135deg, #8db7d8, #243b2e);
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 52px rgba(7, 26, 44, 0.12);
}

.reveal { opacity: 0; transform: translateY(24px); animation: fadeUp 0.72s ease forwards; }
.r1 { animation-delay: 60ms; } .r2 { animation-delay: 140ms; } .r3 { animation-delay: 220ms; } .r4 { animation-delay: 320ms; } .r5 { animation-delay: 740ms; }
@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
@keyframes fadeLeft { to { opacity: 1; transform: translateX(0); } }
@keyframes popIn { to { opacity: 1; transform: translateY(0) scale(1); } }

@media (max-width: 1050px) { .about-shell { grid-template-columns: 1fr; gap: 44px; padding: 70px 28px; } .about-image { min-height: 560px; } }
@media (max-width: 620px) { .feature-grid { grid-template-columns: 1fr 1fr; } .feature-card, .feature-card:nth-child(3), .feature-card:nth-child(5) { grid-column: auto; border-right: 0; border-top: 1px solid var(--line); } .feature-card:nth-child(1), .feature-card:nth-child(2) { border-top: 0; } .about-text { font-size: 18px; } }
@media (prefers-reduced-motion: reduce) { *,*::before,*::after{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;} }
</style>
