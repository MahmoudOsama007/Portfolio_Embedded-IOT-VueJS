<template>
  <div class="card h-100">
    <div class="card-img-wrapper">
      <img
        :src="project.image"
        class="card-img-top"
        :alt="project.title"
        loading="lazy"
      />
      <div class="overlay">
        <a :href="project.github" target="_blank" class="overlay-link">
          <i class="fab fa-github"></i>
          View Project
        </a>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.description }}</p>
      <div class="technologies">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="badge me-2 mb-2"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: none;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transform-origin: center;
  will-change: transform, box-shadow;
}

.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: -1;
}

.card:hover {
  transform: translateY(-8px);
  transition: 3s;
}

.card:hover::after {
  opacity: 1;
  transition: 3s;
}

.card-img-wrapper {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: transform;
}

.card:hover .card-img-top {
  transform: scale(1.08);
}

/* Overlay Effect */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 123, 255, 0),
    rgba(0, 123, 255, 0.486)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translateY(10px);
  will-change: transform, opacity;
}

.card:hover .overlay {
  opacity: 1;
  transform: translateY(0);
}

.overlay-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid white;
  border-radius: 25px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: transparent;
}

.overlay-link:hover {
  background: white;
  color: #007bff;
  transform: scale(1.05);
}

.card-body {
  padding: 1.5rem;
  transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: #ffffff;
}

.card:hover .card-body {
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
  transition: color 0.3s ease;
}

.card-text {
  color: #6c757d;
  line-height: 1.6;
  transition: color 0.5s ease;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.badge {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 123, 255, 0.1);
  color: #007bff;
  font-weight: 500;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;
}

.badge:hover {
  transform: translateY(-3px) scale(1.1);
  background-color: rgba(0, 123, 255, 0.2);
}

/* Dark Mode Styles with smooth transitions */
:deep(.dark-mode) .card {
  background-color: #2d2d2d;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

:deep(.dark-mode) .card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

:deep(.dark-mode) .card-title {
  color: #e0e0e0;
}

:deep(.dark-mode) .card-text {
  color: #b0b0b0;
}

:deep(.dark-mode) .badge {
  background-color: rgba(102, 177, 255, 0.15);
  color: #66b1ff;
}

:deep(.dark-mode) .badge:hover {
  background-color: rgba(102, 177, 255, 0.25);
}

:deep(.dark-mode) .overlay {
  background: rgba(102, 177, 255, 0.95);
}

:deep(.dark-mode) .overlay-link:hover {
  color: #2d2d2d;
}

/* Gradient border effect */
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #007bff, #00ff88);
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: scaleX(0.8);
  will-change: opacity, transform;
}

.card:hover::before {
  opacity: 1;
  transform: scaleX(1);
}

:deep(.dark-mode) .card::before {
  background: linear-gradient(to right, #66b1ff, #00ff88);
}

/* Responsive Adjustments with smooth transitions */
@media (max-width: 768px) {
  .card-img-wrapper {
    height: 180px;
  }

  .card:hover {
    transform: translateY(-8px) scale(1.01);
  }
}

/* Optional: Add subtle animation on mount */
@keyframes cardMount {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: cardMount 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
