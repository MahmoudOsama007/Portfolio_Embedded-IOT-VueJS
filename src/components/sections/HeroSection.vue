<template>
  <section class="hero">
    <div class="container">
      <!-- Main intro section -->
      <div class="row align-items-center hero-main" data-aos="fade-up">
        <div class="col-md-6 text-center text-md-start">
          <h1 class="display-4 fw-bold mb-4">Hi, I'm Mahmoud</h1>
          <p class="lead mb-4">
            Embedded Systems & IoT Engineer passionate about creating innovative
            solutions
          </p>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary me-3">Get In Touch</a>
            <a href="#projects" class="btn btn-outline-primary"
              >View Projects</a
            >
          </div>
        </div>
        <div
          class="col-md-6 text-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="https://avatars.githubusercontent.com/u/93498281?v=4"
            alt="Profile"
            class="hero-image"
          />
        </div>
      </div>

      <!-- Skills section -->
      <div class="row mt-5" data-aos="fade-up" data-aos-delay="400">
        <div class="col-12">
          <h2 class="text-center mb-4">Skills & Technologies</h2>
          <div class="skills-container">
            <div v-for="skill in skills" :key="skill.name" class="skill-item">
              <i :class="skill.icon"></i>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      skills: [
        { name: "Embedded C", icon: "fas fa-microchip" },
        { name: "IoT", icon: "fas fa-network-wired" },
        { name: "Arduino", icon: "fas fa-robot" },
        { name: "Python", icon: "fab fa-python" },
        { name: "PCB Design", icon: "fas fa-project-diagram" },
        { name: "RTOS", icon: "fas fa-clock" },
        // Add more skills as needed
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  padding: 5rem 0;
  background: linear-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.9)
  );
  position: relative;
  overflow: hidden;
}

.dark-mode .hero {
  background: linear-gradient(rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.9));
}

.hero-main {
  margin-bottom: 4rem;
}

.hero-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: translateY(-10px);
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
}

.skill-item i {
  font-size: 2rem;
  color: #007bff;
}

.dark-mode .skill-item i {
  color: #66b1ff;
}

/* Button hover effects */
.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dark-mode .btn-outline-primary {
  color: #66b1ff;
  border-color: #66b1ff;
}

.dark-mode .btn-outline-primary:hover {
  background-color: #66b1ff;
  color: #1a1a1a;
}
</style>
