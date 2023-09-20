<script>
import Button from "./Button.vue";

export default {
  data() {
    return {
      title: "App Main",
      btnText: [
        "Search courses",
        "Apply for university",
        "Browse through courses",
        "Read More",
      ],
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
    <section
      class="courses container m-auto d-flex justify-content-evenly align-items-center"
    >
      <div class="col-5">
        <img
          src="../assets/img/img/Books-icon.png"
          alt=""
          class="icon-img pb-3"
        />
        <h2>Thousands of courses for any type of student</h2>
        <p class="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          laborum numquam ex quod, eligendi, exercitationem mollitia nihil error
          illo dolore voluptatem nulla obcaecati dicta eum? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Molestiae, sint.
          <span class="pt-5"
            ><Button :text="btnText[2]" color="gold"></Button
          ></span>
        </p>
      </div>
      <div class="col-5">
        <img src="../assets/img/img/Graduation-Illustration.png" alt="" />
      </div>
    </section>

    <!-- section III - faculties -->
    <section class="faculties mt-5">
      <div class="text-center">
        <h2>Faculties available at EduPrime</h2>
        <p class="p-4 m-auto">
          A single univeristy with a load of courses, tailored to satisfy any
          student's needs.
        </p>
      </div>

      <!-- qui si potrebbe pensare di usare un v-for se rimane tempo-->
      <div class="d-flex justify-content-center m-auto faculties-opz">
        <div
          class="col-2 d-flex flex-column justify-content-evenly align-items-center"
        >
          <img src="../assets/img/img/Gavel-v2.png" alt="" />
          <h6>Law Faculty</h6>
        </div>
        <div
          class="col-2 d-flex flex-column justify-content-evenly align-items-center"
        >
          <img src="../assets/img/img/Coins-tabs-v2.png" alt="" />
          <h6>Economy</h6>
        </div>
        <div
          class="col-2 d-flex flex-column justify-content-evenly align-items-center"
        >
          <img src="../assets/img/img/Medicine-tabs-v2.png" alt="" />
          <h6>Medicine</h6>
        </div>
        <div
          class="col-2 d-flex flex-column justify-content-evenly align-items-center"
        >
          <img src="../assets/img/img/Computer-tabs-v2.png" alt="" />
          <h6>Computer Science</h6>
        </div>
        <div
          class="col-2 d-flex flex-column justify-content-evenly align-items-center"
        >
          <img src="../assets/img/img/Palette-tabs-v2.png" alt="" />
          <h6>Graphic Design</h6>
        </div>
      </div>
    </section>

    <!-- section IV - Law -->

    <section class="p-5 d-flex justify-content-center align-items-center">
      <div class="col-3 me-5 pb-5 pt-4">
        <img
          src="../assets/img/img/Gavel-Illustration-e1556884768193.png"
          alt=""
        />
      </div>
      <div class="col-3 ms-5 law-text">
        <h2>Law Faculty</h2>
        <p>
          Learning from world-learning academy and practitioners, you'll not
          only receive an outstanding groundind in the theory of law, but you
          will be able to understand how those principles are applied in
          practice through a range of student-led activities and competitions.
        </p>
        <Button :text="btnText[3]" color=""></Button>
      </div>
    </section>

    <!-- -->

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
// GENERAL

main {
  h1,
  h2 {
    font-weight: 700;
  }
}

.debug {
  border: 1px solid red;
}

// section I - Jumbo

.jumbo {
  background-color: var(--primary-color);
  color: #fff;

  p {
    width: 600px;
    padding: 35px 0 !important;
  }
}

// section II - Courses

.courses {
  height: 600px;

  .icon-img {
    width: 50px;
  }
}

// section III - Faculties

.faculties {
  p {
    width: 420px;

    padding: 60px 0 60px !important ;
  }

  .faculties-opz {
    color: var(--primary-color);
    border: 1px solid #dddddd;
    box-shadow: 1px 1px 20px #dddddd;

    img {
      width: 80px;
    }

    div {
      border-left: 1px solid #dddddd;
      aspect-ratio: 1/1;
      width: 250px;
    }

    div:last-child {
      border-right: 1px solid #dddddd;
    }

    div:hover {
      background-color: #e56767a1;
    }
  }
}

// section IV - Law

.law-text {
  p {
    padding: 30px 0 !important;
  }
}
</style>
