<template>
  <nav>
    <form @submit.prevent="$emit('handle-submit')">
      <input
        name="channel"
        type="text"
        :value="channel"
        @input="$emit('update:channel', $event.target.value)"
        placeholder="🔍 Search by channel name"
      />
      <button>Search</button>
    </form>
    <button class="clear" @click="$emit('toggle-chat')">
      {{ chatHidden ? "Show Chat" : "Hide Chat" }}
    </button>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: {
    channel: String,
    chatHidden: Boolean
  },
  emits: ["toggle-chat", "update:channel", "handle-submit"]
});
</script>
