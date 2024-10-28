<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">Mahmoud Osama</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" active-class="active"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects" active-class="active"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <div class="theme-toggle ms-3">
              <button
                @click="toggleDarkMode"
                class="theme-toggle-btn"
                :class="{ 'theme-toggle-btn--dark': isDarkMode }"
                :title="
                  isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
                "
              >
                <span class="theme-toggle-icon">
                  <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapState(["isDarkMode"]),
  },
  methods: {
    ...mapActions(["toggleDarkMode"]),
  },
  mounted() {
    // Initialize dark mode from localStorage when component mounts
    this.$store.dispatch("initializeDarkMode");
  },
};
</script>

<style scoped>
.navbar {
  transition: all 0.3s ease;
  padding: 1rem 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: #2c3e50;
  transition: color 0.3s ease;
}

.nav-link {
  font-weight: 500;
  color: #2c3e50;
  margin: 0 10px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #007bff;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform-origin: right;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-link:hover {
  color: #007bff;
}

/* Dark mode styles */
:deep(.dark-mode) .navbar {
  background-color: rgba(45, 45, 45, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

:deep(.dark-mode) .navbar-brand {
  color: #ffffff;
}

:deep(.dark-mode) .nav-link {
  color: #ffffff;
}

:deep(.dark-mode) .nav-link:hover {
  color: #66b1ff;
}

:deep(.dark-mode) .nav-link::after {
  background: #66b1ff;
}

/* Theme Toggle Button */
.theme-toggle-btn {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  color: #2c3e50;
  border: 2px solid #e0e0e0;
}

.theme-toggle-btn:hover {
  transform: scale(1.1);
  color: #007bff;
  border-color: #007bff;
}

.theme-toggle-btn--dark {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.5);
}

.theme-toggle-btn--dark:hover {
  color: #ffd700;
  border-color: #ffd700;
}

.theme-toggle-icon {
  font-size: 1.2rem;
  line-height: 1;
  transition: transform 0.5s ease;
}

.theme-toggle-btn:hover .theme-toggle-icon {
  transform: rotate(360deg);
}

/* Dark mode specific styles */
:deep(.dark-mode) .navbar {
  background-color: #2d2d2d;
}

:deep(.dark-mode) .nav-link {
  color: #fff;
}

:deep(.dark-mode) .nav-link:hover {
  color: #007bff;
}

:deep(.dark-mode) .navbar-toggler {
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
