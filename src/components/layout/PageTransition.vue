<template>
  <transition :name="transitionName" mode="out-in">
    <slot />
  </transition>
</template>

<script>
export default {
  name: "PageTransition",
  data() {
    return {
      transitionName: "page",
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "page-back" : "page";
    },
  },
};
</script>

<style>
/* Forward transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Backward transition */
.page-back-enter-active,
.page-back-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-back-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.page-back-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Add some perspective for 3D effect */
#app {
  perspective: 1000px;
}
</style>
