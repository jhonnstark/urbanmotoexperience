<template>
  <div class="urban-page">
    <header class="topbar">
      <a class="brand" href="#" aria-label="Urban Moto Experience CDMX home">
        <div class="brand-shield">
          <span class="shield-city">▴▴</span>
          <span class="shield-road"></span>
        </div>
        <div class="brand-copy">
          <span class="brand-title">Urban Moto</span>
          <span class="brand-sub">✦ Experience ✦</span>
          <span class="brand-city">CDMX</span>
        </div>
      </a>

      <nav class="nav-links" aria-label="Main navigation">
        <a href="#experience">Experience</a>
        <a href="#route">Route</a>
        <a href="#about">About us</a>
        <a href="#faq">FAQ</a>
        <a class="nav-cta" href="#book">Book a ride</a>
      </nav>
    </header>

    <main class="hero" aria-label="Explore Mexico City on two wheels">
      <div class="hero-overlay"></div>

      <section class="hero-content">
        <h1>
          <span>Explore</span>
          <span>Mexico City</span>
          <span>On <strong>Two Wheels</strong></span>
        </h1>

        <div class="accent-line" aria-hidden="true"></div>

        <p>
          Urban motorcycle rides through iconic landmarks, architecture, green
          areas, and local spots in CDMX.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="#book">Book a ride <span>→</span></a>
          <a class="btn btn-secondary" href="#route">View route <span>→</span></a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// Static landing page mock based on the supplied Urban Moto reference.
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&display=swap');

.urban-page {
  --green: #8cc63f;
  --dark-green: #06240f;
  --text-dark: #0e2230;
  --white: #ffffff;
  min-height: 100vh;
  overflow-x: hidden;
  background: #111;
  font-family: 'Oswald', system-ui, sans-serif;
}

.topbar {
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px 0 46px;
  background: var(--white);
  color: var(--text-dark);
  position: relative;
  z-index: 5;
}

.brand {
  display: flex;
  align-items: center;
  gap: 18px;
  text-decoration: none;
  color: inherit;
}

.brand-shield {
  width: 84px;
  height: 88px;
  clip-path: polygon(50% 0, 96% 18%, 86% 76%, 50% 100%, 14% 76%, 4% 18%);
  border: 3px solid #0e2230;
  background: linear-gradient(145deg, #eaf0ef 0%, #0a2530 48%, #07150d 100%);
  position: relative;
  box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.45);
}

.shield-city {
  position: absolute;
  top: 18px;
  left: 18px;
  color: white;
  font-size: 20px;
  letter-spacing: -8px;
  opacity: 0.9;
}

.shield-road {
  position: absolute;
  left: 33px;
  bottom: 11px;
  width: 14px;
  height: 56px;
  border-radius: 999px;
  background: linear-gradient(#94c943, #eaf3d2);
  transform: rotate(-32deg);
  opacity: 0.9;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  text-transform: uppercase;
}

.brand-title {
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 3px;
}

.brand-sub {
  margin-top: 6px;
  color: var(--green);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 6px;
}

.brand-city {
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 8px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 54px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.6px;
}

.nav-links a {
  color: #101820;
  text-decoration: none;
}

.nav-cta {
  margin-left: 6px;
  padding: 18px 28px;
  color: white !important;
  background: var(--dark-green);
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
}

.hero {
  min-height: calc(100vh - 118px);
  position: relative;
  display: flex;
  align-items: center;
  background-image: url('/images/urban-moto-hero.png');
  background-size: cover;
  background-position: center 52%;
  color: white;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.62) 31%, rgba(0, 0, 0, 0.1) 65%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.08) 55%);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(720px, calc(100% - 80px));
  margin-left: 64px;
  padding-top: 26px;
}

.hero h1 {
  margin: 0;
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: clamp(74px, 7.2vw, 112px);
  line-height: 0.92;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.25);
}

.hero h1 span {
  display: block;
}

.hero h1 strong {
  color: var(--green);
  font-weight: inherit;
}

.accent-line {
  width: 92px;
  height: 4px;
  margin: 34px 0 22px;
  background: var(--green);
  border-radius: 999px;
}

.hero p {
  max-width: 650px;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(20px, 1.7vw, 28px);
  line-height: 1.42;
  color: rgba(255, 255, 255, 0.94);
}

.hero-actions {
  display: flex;
  gap: 28px;
  margin-top: 46px;
}

.btn {
  width: 242px;
  height: 68px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  border-radius: 8px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.7px;
}

.btn-primary {
  background: var(--green);
  color: white;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
}

.btn-secondary {
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.18);
}

.btn span {
  font-size: 35px;
  line-height: 1;
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .topbar {
    height: auto;
    min-height: 96px;
    padding: 18px 22px;
  }

  .brand-title {
    font-size: 28px;
  }

  .brand-shield {
    width: 64px;
    height: 68px;
  }

  .nav-links a:not(.nav-cta) {
    display: none;
  }

  .nav-links {
    gap: 0;
  }

  .hero {
    min-height: calc(100vh - 96px);
    background-position: 62% center;
  }

  .hero-content {
    margin-left: 28px;
    width: calc(100% - 56px);
  }

  .hero-actions {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
