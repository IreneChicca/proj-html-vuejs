<script>
import Button from "./Button.vue";

export default {
  data() {
    return {
      title: "App Main",
      btnText: ["Search courses", "Apply for university"],
    };
  },

  components: { Button },
};
</script>

<template>
  <main>
    <!-- section I - Jumbo -->
    <div class="jumbo text-center pb-5">
      <div>
        <h1 class="pt-5">Key to your success</h1>
        <p class="m-auto">
          EduPrime is the most versatile Word Press theme for educational
          purposes, shocasing universities, courses, secondary schools etc.
        </p>
        <div class="d-flex justify-content-center m-auto">
          <div class="p-2">
            <Button
              :text="btnText[0]"
              color="gold"
              btnicon="fa-solid fa-magnifying-glass"
            ></Button>
          </div>
          <div class="p-2">
            <Button
              :text="btnText[1]"
              color="white"
              btnicon="fa-solid fa-user-plus"
            ></Button>
          </div>
        </div>
      </div>
    </div>

    <!-- -->
    <!-- -->
    <!-- -->
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
  </main>
</template>

<style lang="scss">
// section I - Jumbo

.jumbo {
  background-color: var(--primary-color);
  color: #fff;
  h1 {
    font-weight: 600;
  }
  p {
    width: 600px;
    padding: 35px 0 !important;
  }
}
</style>
