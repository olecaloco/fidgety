<template>
  <main class="app">
    <Navbar
      :channel="channel"
      :chatHidden="chatHidden"
      @update:channel="channel = $event"
      @toggle-chat="toggleChat"
      @handle-submit="handleSubmit"
    />
    <div id="embed"></div>
  </main>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

const parent = process.env.VUE_APP_PARENT;

export default defineComponent({
  name: "Fidgety",
  components: {
    Navbar
  },
  data() {
    return {
      // twitch: null,
      channel: "xqcow",
      chatHidden: false
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.setAttribute("src", "https://embed.twitch.tv/embed/v1.js");
    script.addEventListener("load", this.initTwitch);
    document.body.appendChild(script);
  },
  methods: {
    initTwitch() {
      if (this.twitch) {
        this.twitch.destroy();
      }

      this.twitch = new window.Twitch.Embed("embed", {
        channel: this.channel,
        width: "100%",
        height: "100%",
        parent: parent,
        layout: this.chatHidden ? "video" : "video-with-chat"
      });
    },
    toggleChat() {
      this.chatHidden = !this.chatHidden;
      this.initTwitch();
    },
    handleSubmit() {
      if (!this.channel || !this.twitch) return;
      this.twitch.setChannel(this.channel);
    }
  }
});
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
