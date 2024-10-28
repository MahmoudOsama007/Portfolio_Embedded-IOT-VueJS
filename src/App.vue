<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <nav-bar />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
  },
  computed: {
    ...mapState(["isDarkMode"]),
  },
};
</script>

<style>
/* General Styles */
body {
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;
}

/* Dark Mode Styles */
.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}

.dark-mode nav {
  background-color: #2c2c2c;
}

.dark-mode .navbar-brand,
.dark-mode .nav-link {
  color: #ffffff !important;
}

/* Make navbar fixed if needed */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Add transitions for smooth theme switching */
#app,
#app * {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Additional dark mode styles */
.dark-mode .card {
  background-color: #2d2d2d;
  border-color: #404040;
}

/* Add more dark mode styles as needed */

/* Prevent content jump during transition */
#app {
  position: relative;
  min-height: 100vh;
}

/* Optional: Add smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Ensure transitions work smoothly */
.router-view-wrapper {
  position: relative;
  width: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.3s ease;
    transform: none;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: none;
  }
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Ensure all content transitions smoothly */
#app * {
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Dark Mode Styles */
.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}

/* Ensure all content transitions smoothly */
#app * {
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Additional dark mode styles */
.dark-mode .card {
  background-color: #2d2d2d;
  border-color: #404040;
}

.dark-mode .navbar {
  background-color: #2d2d2d;
  border-bottom: 1px solid #404040;
}

.dark-mode .footer {
  background-color: #2d2d2d;
  border-top: 1px solid #404040;
}

/* Optional: Add smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Ensure transitions work smoothly */
.router-view-wrapper {
  position: relative;
  width: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.3s ease;
    transform: none;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: none;
  }
}
</style>
