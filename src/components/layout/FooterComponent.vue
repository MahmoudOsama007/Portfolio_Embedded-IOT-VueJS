<template>
  <footer class="footer mt-auto py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4" data-aos="fade-up">
          <h5>Contact</h5>
          <p>Email: Mahmoudo.mahmoud007@gmail.com</p>
          <p>Location: Cairo, Egypt</p>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <h5>Social Links</h5>
          <div class="social-links">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
          </ul>
        </div>
      </div>
      <hr class="mt-4" />
      <div class="text-center py-2">
        <p class="mb-0">
          &copy; {{ currentYear }} Your Name. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 2rem 0;
  margin-top: 3rem;
}

.dark-mode .footer {
  background-color: #2d2d2d;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  font-size: 1.5rem;
  color: #6c757d;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #007bff;
}

.dark-mode .social-links a {
  color: #ffffff;
}

.dark-mode .social-links a:hover {
  color: #66b1ff;
}

h5 {
  margin-bottom: 1rem;
  font-weight: 600;
}

ul li {
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
  color: #6c757d;
  transition: color 0.3s ease;
}

a:hover {
  color: #007bff;
}

.dark-mode a {
  color: #ffffff;
}

.dark-mode a:hover {
  color: #66b1ff;
}

hr {
  border-color: rgba(0, 0, 0, 0.1);
}

.dark-mode hr {
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
