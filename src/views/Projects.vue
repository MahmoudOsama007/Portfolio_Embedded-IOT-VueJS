<template>
  <div class="projects">
    <div class="container py-5">
      <h1 class="text-center mb-5" data-aos="fade-up">My Projects</h1>
      <div class="row g-4">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-md-6 col-lg-4"
          data-aos="fade-up"
          :data-aos-delay="project.id * 100"
        >
          <project-card :project="project" class="project-card-animate" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/sections/ProjectCard.vue";

export default {
  name: "ProjectsView",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Smart Home System",
          description:
            "IoT-based home automation system using ESP32 and MQTT protocol",
          image:
            "https://a1garage.com/wp-content/uploads/2023/11/The-Evolution-of-Smart-Homes-copy.jpg",
          technologies: ["ESP32", "MQTT", "Arduino", "Node.js"],
          github: "https://github.com/username/smart-home",
        },
        {
          id: 2,
          title: "Industrial Monitoring System",
          description: "Real-time monitoring system for industrial equipment",
          image:
            "https://media.istockphoto.com/id/582256640/photo/oil-refinery-chemical-petrochemical-plant.jpg?s=612x612&w=0&k=20&c=BEdsHVe2vUfzRTb9KcsCS_tCH6_R_nKLKkOQCht8AKo=",
          technologies: ["STM32", "FreeRTOS", "LoRaWAN"],
          github: "https://github.com/username/industrial-monitoring",
        },
        // Add more projects as needed
      ],
    };
  },
};
</script>

<style scoped>
.project-card-animate {
  transition: transform 0.3s ease-in-out;
}

.project-card-animate:hover {
  transform: translateY(-10px);
}

/* Optional: Add a smooth transition for dark mode */
.projects {
  transition: background-color 0.3s ease;
}
</style>
