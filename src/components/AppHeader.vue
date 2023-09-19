<script>
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
    };
  },
};
</script>

<template>
  <header class="d-flex container-flex justify-content-between p-4">
    <div>
      <img src="../assets/img/img/theme_eduprime_logo.png" alt="" class="" />
    </div>

    <ul class="d-flex align-items-center">
      <li v-for="option in navText" class="p-3">{{ option }}</li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--primary-color);
  font-family: "Fredoka", sans-serif;
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
