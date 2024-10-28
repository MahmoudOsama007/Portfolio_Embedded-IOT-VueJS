import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 800,
  offset: 100,
  once: true,
  easing: "ease-in-out",
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
