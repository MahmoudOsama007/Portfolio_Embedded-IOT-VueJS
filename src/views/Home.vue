<template>
  <div class="home">
    <!-- Hero Section -->
    <div class="container">
      <div class="row align-items-center py-5">
        <!-- Text Content -->
        <div class="col-md-6 text-center text-md-start content-section">
          <h1 class="display-4 fw-bold mb-4 slide-in">Hi, I'm Mahmoud Osama</h1>
          <p class="lead mb-4 slide-in-delay-1">
            Embedded Systems & IoT Engineer passionate about creating innovative
            solutions
          </p>
          <div class="d-flex gap-3 slide-in-delay-2">
            <router-link to="/projects" class="btn btn-primary btn-hover">
              <i class="fas fa-project-diagram me-2"></i>View Projects
            </router-link>
            <router-link to="/about" class="btn btn-outline-primary btn-hover">
              <i class="fas fa-user me-2"></i>About Me
            </router-link>
          </div>

          <!-- Social Links -->
          <div class="social-links mt-4 slide-in-delay-3">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              class="social-icon"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              class="social-icon"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:your.email@example.com" class="social-icon">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="col-md-6 text-center mt-4 mt-md-0 image-section">
          <div class="image-container">
            <img
              src="https://avatars.githubusercontent.com/u/93498281?v=4"
              alt="Profile"
              class="profile-image floating"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Projects Section -->
    <section class="featured-projects py-5 mt-4">
      <div class="container">
        <h2 class="text-center mb-5 slide-in">Featured Projects</h2>
        <div class="row g-4">
          <div
            v-for="project in featuredProjects"
            :key="project.id"
            class="col-md-4"
          >
            <project-card :project="project" />
          </div>
        </div>

        <div class="text-center mt-5">
          <router-link
            to="/projects"
            class="btn btn-primary btn-lg see-more-btn slide-in-delay-2"
          >
            <i class="fas fa-project-diagram me-2"></i>
            See More Projects
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from "@/components/sections/ProjectCard.vue";

export default {
  name: "HomeView",
  components: {
    ProjectCard,
  },
  data() {
    return {
      featuredProjects: [
        {
          id: 1,
          title: "Smart Home System",
          description:
            "IoT-based home automation system with remote monitoring and control capabilities.",
          image: "https://picsum.photos/seed/smart-home/800/600",
          technologies: ["ESP32", "MQTT", "C++", "IoT"],
          github: "https://github.com/yourusername/smart-home",
        },
        {
          id: 2,
          title: "Weather Station",
          description:
            "Wireless weather monitoring station with multiple sensor integration and data logging.",
          image: "https://picsum.photos/seed/weather/800/600",
          technologies: ["Arduino", "IoT", "Sensors", "WiFi"],
          github: "https://github.com/yourusername/weather-station",
        },
        {
          id: 3,
          title: "Robot Controller",
          description:
            "Real-time robot control system with advanced motion planning algorithms.",
          image: "https://picsum.photos/seed/robot/800/600",
          technologies: ["STM32", "RTOS", "C", "Motors"],
          github: "https://github.com/yourusername/robot-controller",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  padding: 2rem 0;
  overflow-x: hidden;
}

/* Profile Image Styles */
.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.floating {
  animation: floating 6s ease-in-out infinite;
}

/* Smooth Animations */
@keyframes floating {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(2deg);
  }
  75% {
    transform: translateY(10px) rotate(-2deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

/* Content Animations */
.slide-in {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.slide-in-delay-1 {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 0.2s;
}

.slide-in-delay-2 {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 0.4s;
}

.slide-in-delay-3 {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 0.6s;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Featured Projects Section */
.featured-projects {
  background-color: rgba(0, 123, 255, 0.05);
}

:deep(.dark-mode) .featured-projects {
  background-color: rgba(255, 255, 255, 0.05);
}

.see-more-btn {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border-radius: 30px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.see-more-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 123, 255, 0.2);
}

:deep(.dark-mode) .see-more-btn:hover {
  box-shadow: 0 8px 15px rgba(255, 255, 255, 0.1);
}

h2 {
  font-weight: 600;
  margin-bottom: 2rem;
}

:deep(.dark-mode) h2 {
  color: #ffffff;
}

/* Optional: Add fade-in animation for cards */
.col-md-4 {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
}

.col-md-4:nth-child(1) {
  animation-delay: 0.2s;
}
.col-md-4:nth-child(2) {
  animation-delay: 0.4s;
}
.col-md-4:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Social Links Styles */
.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f8f9fa;
  color: #007bff;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

/* Create shadow element */
.social-icon::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 123, 255, 0.2);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: -1;
}

.social-icon:hover {
  transform: translateY(-8px);
  background-color: #007bff;
  color: #ffffff;
}

.social-icon:hover::after {
  opacity: 1;
}

/* Dark Mode Styles */
:deep(.dark-mode) .social-icon {
  background-color: #2d2d2d;
  color: #66b1ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

:deep(.dark-mode) .social-icon::after {
  box-shadow: 0 15px 35px rgba(102, 177, 255, 0.2);
}

:deep(.dark-mode) .social-icon:hover {
  background-color: #66b1ff;
  color: #1a1a1a;
}

/* Mount Animation */
@keyframes iconMount {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.social-icon {
  animation: iconMount 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Stagger the animations */
.social-links a:nth-child(1) {
  animation-delay: 0.1s;
}
.social-links a:nth-child(2) {
  animation-delay: 0.2s;
}
.social-links a:nth-child(3) {
  animation-delay: 0.3s;
}

/* Optional: Add gradient border on hover */
.social-icon::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  background: linear-gradient(to right, #007bff, #00ff88);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.social-icon:hover::before {
  opacity: 1;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .social-links {
    justify-content: center;
    gap: 1.2rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }

  .social-icon:hover {
    transform: translateY(-5px);
  }
}
</style>
