<template>
  <section class="hero">
    <img src="/ejemplo/home_compressed.png" alt="Hero Section" class="hero-image" />
    <div class="hero-content">
      <h1>Explore <br> Mexico City <br> on <span>Two Wheels</span></h1>
      <p>Urban motorcycle rides through iconic landmarks, architecture, green areas, and local spots in CDMX.</p>
      <div class="cta-buttons">
        <a href="#book" class="btn primary">Book a Ride</a>
        <a href="#route" class="btn secondary">View Route</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero {
  position: relative;
  text-align: center;
  color: white;
}

.hero-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  line-height: 1.2;
  margin: 0;
}

.hero-content h1 span {
  color: #7cb342;
}

.hero-content p {
  margin: 20px 0;
  font-size: 1.2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}

.btn.primary {
  background-color: #7cb342;
  color: white;
}

.btn.secondary {
  border: 2px solid white;
  color: white;
}
</style>