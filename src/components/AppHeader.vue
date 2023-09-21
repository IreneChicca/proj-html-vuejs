<script>
import Button from "./Button.vue";

export default {
  data() {
    return {
      title: "App Header",
      navText: [
        "Home",
        " Courses",
        "About Us",
        "News",
        "Pages",
        "Contact",
        "Purchase",
      ],
      btnText: "View Courses",
    };
  },

  components: { Button },
};
</script>

<template>
  <header class="d-flex container-flex justify-content-between p-4">
    <div>
      <img src="../assets/img/img/theme_eduprime_logo.png" alt="" class="" />
    </div>

    <ul class="d-flex align-items-center">
      <li v-for="option in navText" class="p-3">{{ option }}</li>
      <Button
        :text="btnText"
        color="gold"
        class="text-uppercase hover"
        btnicon=""
      ></Button>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #d96c6e;
  color: #fff;
  font-weight: 500;

  img {
    width: 200px;
  }

  li {
    list-style: none;
    cursor: pointer;

    &:hover {
      color: var(--secondary-color);
    }
  }
}
</style>
