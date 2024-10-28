<template>
  <div
    class="section-transition"
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ObserveVisibility } from "vue-observe-visibility";

export default {
  name: "SectionTransition",
  directives: {
    ObserveVisibility,
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) {
        this.$el.classList.add("is-visible");
      }
    },
  },
};
</script>

<style scoped>
.section-transition {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-transition.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
