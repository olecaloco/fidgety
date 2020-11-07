<template>
  <iframe
    id="player"
    :src="playerSource"
    width="400"
    height="300"
    scrolling="no"
    frameborder="0"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Player",
  props: {
    playerSource: String
  }
});
</script>
