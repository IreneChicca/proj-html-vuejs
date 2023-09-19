<script>
export default {
  data() {
    return {
      title: "Button",
    };
  },

  props: {
    text: String,
    color: String,
  },
};
</script>

<template>
  <button :class="color ? 'btn-secondary' : 'btn-primary'">{{ text }}</button>
</template>

<style lang="scss" scoped>
button {
  color: #fff;

  padding: 10px 30px 10px 30px !important;
  border-radius: 30px;
  border: none;
  font-weight: 500;
}
.btn-primary {
  background-color: var(--primary-color);
}

.btn-secondary {
  background-color: var(--secondary-color);
}
</style>
