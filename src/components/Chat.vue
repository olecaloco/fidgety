<template>
  <iframe :class="{hidden: chatHidden}" :src="chatSource" frameborder="0" />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Chat',
  props: {
    chatHidden: Boolean,
    chatSource: String,
  }
})
</script>