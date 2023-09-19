<script>
export default {
  data() {
    return {
      title: "Button",
      prova2: "fa-solid fa-star",
    };
  },

  props: {
    text: String,
    color: String,
    btnicon: String,
  },
};
</script>

<template>
  <button
    :class="
      color == 'gold'
        ? 'btn-secondary'
        : color == 'white'
        ? 'btn-white'
        : 'btn-primary'
    "
  >
    <font-awesome-icon v-show="btnicon" :icon="btnicon" class="me-2" />

    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
button {
  color: #fff;
  padding: 15px 35px 15px 35px !important;
  border-radius: 30px;
  border: none;
  font-weight: 600;
}
.btn-primary {
  background-color: var(--primary-color);
}

.btn-secondary {
  background-color: var(--secondary-color);
}

.btn-white {
  background-color: #fff;
  color: var(--primary-color);
}
</style>
