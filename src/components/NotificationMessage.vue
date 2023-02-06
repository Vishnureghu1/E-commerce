<template>
  <b-alert variant="success" show
    >Success Alert
    <div
      :class="typeClass"
      class="alert alert-sucess alert-dismissible fade show"
      role="alert"
    >
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-labelledby="close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      {{ notification.message }}
    </div>
  </b-alert>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "notification-message",
  props: ["notification"],
  data() {
    return {
      timeout: null,
    };
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },

  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
  },
  methods: mapActions(["removeNotification"]),
};
</script>

<style></style>
