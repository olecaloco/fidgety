<template>
  <main class="app">
    <Navbar
      :channel="channel"
      :chatHidden="chatHidden"
      @update:channel="channel = $event"
      @toggle-chat="toggleChat"
      @handle-submit="handleSubmit"
    />
    <div class="player-wrap">
      <Player :playerSource="playerSource" />
      <Chat :chatHidden="chatHidden" :chatSource="chatSource" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import Player from "./components/Player.vue";
import Chat from "./components/Chat.vue";

const parent = process.env.VUE_APP_PARENT;

export default defineComponent({
  name: "Fidgety",
  components: {
    Navbar,
    Player,
    Chat
  },
  data() {
    return {
      channel: "",
      chatHidden: false,
      playerSource: "",
      chatSource: ""
    };
  },
  methods: {
    toggleChat() {
      this.chatHidden = !this.chatHidden;

      if (this.chatHidden) {
        this.chatSource = "";
      } else {
        if (this.channel)
          this.chatSource = `https://www.twitch.tv/embed/${this.channel}/chat?parent=${parent}&darkpopout`;
      }
    },
    handleSubmit() {
      if (!this.channel) return;

      this.playerSource = `https://player.twitch.tv/?channel=${this.channel}&parent=${parent}`;
      this.chatSource = `https://www.twitch.tv/embed/${this.channel}/chat?parent=${parent}&darkpopout`;
    }
  }
});
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
