<template>
  <div class="about">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6" data-aos="fade-right">
          <h1 class="mb-4">About Me</h1>
          <p class="lead">
            I'm a passionate Embedded Systems and IoT Engineer with expertise in
            developing innovative solutions for complex technical challenges.
          </p>
          <div class="skills mt-4">
            <h3>Technical Skills</h3>
            <div class="skill-tags">
              <span v-for="skill in skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-left">
          <div class="experience-timeline">
            <h3>Experience</h3>
            <div v-for="exp in experience" :key="exp.id" class="timeline-item">
              <h4>{{ exp.role }}</h4>
              <h5>{{ exp.company }}</h5>
              <p class="text-muted">{{ exp.period }}</p>
              <p>{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      skills: [
        "Embedded C/C++",
        "ARM Microcontrollers",
        "IoT Protocols",
        "RTOS",
        "PCB Design",
        "Python",
        "MQTT",
        "Arduino",
        "ESP32",
        "Raspberry Pi",
      ],
      experience: [
        {
          id: 1,
          role: "Senior IoT Engineer",
          company: "Tech Solutions Inc.",
          period: "2020 - Present",
          description:
            "Leading IoT projects and developing embedded systems solutions.",
        },
        {
          id: 2,
          role: "Embedded Systems Developer",
          company: "Smart Systems Ltd.",
          period: "2018 - 2020",
          description:
            "Developed firmware for various microcontroller-based products.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
}

.skill-tag {
  background-color: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.timeline-item {
  border-left: 3px solid #42b983;
  padding-left: 20px;
  margin-bottom: 30px;
  position: relative;
}

.timeline-item::before {
  content: "";
  width: 12px;
  height: 12px;
  background: #42b983;
  position: absolute;
  left: -7px;
  top: 5px;
  border-radius: 50%;
}
</style>
