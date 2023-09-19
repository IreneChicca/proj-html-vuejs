<script>
import Button from "./Button.vue";

export default {
  data() {
    return {
      title: "App Main",
      btnText: ["Search courses", "Apply for university",'Browse through courses'],
    };
  },

  components: { Button },
};
</script>

<template>
  <main>
    <!-- section I - Jumbo -->
    <section class="jumbo text-center container-fluid pb-5">
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
    </section>

    <!-- section II - Thousands courses -->
    <section class="courses container m-auto d-flex justify-content-evenly align-items-center">
      <div class="col-5">
        <img src="../assets/img/img/Books-icon.png" alt="" class="i-book pb-3">
        <h2>Thousands of courses for any type of student</h2>
        <p class="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          laborum numquam ex quod, eligendi, exercitationem mollitia nihil error
          illo dolore voluptatem nulla obcaecati dicta eum? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Molestiae, sint.
         <div class="pt-5"><Button :text="btnText[2]" color="gold"></Button></div> 
        </p>
      </div>
      <div class="col-5"> <img src="../assets/img/img/Graduation-Illustration.png" alt=""></div>
    </section>

    <!-- -->
    <!-- -->
    <!-- -->

    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </main>
</template>

<style lang="scss">
// section I - Jumbo

.jumbo {
  background-color: var(--primary-color);
  color: #fff;
  h1 {
    font-weight: 700;
  }
  p {
    width: 600px;
    padding: 35px 0 !important;
  }
}

// section II - Courses

.courses{
    height: 600px;

    .i-book{width: 50px;
    }

    h2{font-weight: 700;}
}
</style>
