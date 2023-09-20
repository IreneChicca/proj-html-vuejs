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
        "View All Events",
        "Find More",
        "View Course",
        "Discover the Method",
        "List of Fees",
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
        <img src="../assets/img/img/Books-icon.png" alt="" class="icon-img" />
        <h2>Thousands of courses for any type of student</h2>
        <p class="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          laborum numquam ex quod, eligendi, exercitationem mollitia nihil error
          illo dolore voluptatem nulla obcaecati dicta eum? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Molestiae, sint.
          <span class="d-block pt-5"
            ><Button :text="btnText[2]" color="gold"></Button
          ></span>
        </p>
      </div>
      <div class="col-5">
        <img src="../assets/img/img/Graduation-Illustration.png" alt="" />
      </div>
    </section>

    <!-- section III - Faculties -->
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

    <!-- section V - University -->

    <section class="uni">
      <div class="container m-auto text-center p-5">
        <div>
          <img src="../assets/img/img/Clock-and-Bell.png" class="icon-img" />
        </div>
        <h2>University Year</h2>
        <div class="timeline">
          <div class="d-flex justify-content-end me-5">
            <div class="col-4 me-5">
              <h6>Demo Classes</h6>
              <p>
                In the first week, students try to accomodate with teaching
                style and choose their optional classes.
              </p>
            </div>
            <div class="col-4 me-5">
              <h6>Graduation Day</h6>
              <p>
                On the day of graduation, all students gather for the ceremony
                and the networking and party among others.
              </p>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-start ms-5">
          <div class="col-4 ms-4">
            <h6>Demo Classes</h6>
            <p>
              In the first week, students try to accomodate with teaching style
              and choose their optional classes.
            </p>
          </div>

          <div class="col-4 ms-5 ps-4">
            <h6>Demo Classes</h6>
            <p>
              In the first week, students try to accomodate with teaching style
              and choose their optional classes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- section VI - Events -->
    <section class="events text-center">
      <div class="container m-auto">
        <img
          src="../assets/img/img/upcoming-events-calendar-icon.png"
          class="icon-img"
        />
        <h2>Upcoming Events</h2>
      </div>
      <div><!-- inserisci card con v-for --></div>
      <Button :text="btnText[4]" color="gold"></Button>
    </section>
    <!-- section VII - Latest -->

    <section class="latest container m-auto pt-5 pb-5">
      <h2 class="ms-5">Latest Courses</h2>
      <div class="container m-auto d-flex text-center p-4">
        <!-- card I -->
        <div class="col-3 ccard m-4 p-4">
          <div class="p-4">
            <img src="../assets/img/img/Decisions-icon.png" alt="" />
          </div>
          <h5 class="p-2">Make Better Decisions</h5>
          <p class="p-2">
            <font-awesome-icon icon="fa-solid fa-user" class="me-2" />Teacher:
            <span>James Colins</span>
          </p>
          <p class="p-1">
            <font-awesome-icon
              icon="fa-solid fa-money-bill-1"
              class="me-2"
            />Price:
            <span> $21.00</span>
          </p>
          <div class="btn">
            <Button :text="btnText[6]" btnicon="fa-solid fa-eye"></Button>
          </div>
        </div>
        <!-- card II -->
        <div class="col-3 ccard m-4 p-4">
          <div class="p-4">
            <img src="../assets/img/img/Speaker-icon.png" alt="" />
          </div>
          <h5 class="p-2">How to be a speaker</h5>
          <p class="p-2">
            <font-awesome-icon icon="fa-solid fa-user" class="me-2" />Teacher:
            <span>James Colins</span>
          </p>
          <p class="p-1">
            <font-awesome-icon
              icon="fa-solid fa-money-bill-1"
              class="me-2"
            />Price:
            <span> Free</span>
          </p>
          <div class="btn">
            <Button :text="btnText[6]" btnicon="fa-solid fa-eye"></Button>
          </div>
        </div>
        <!-- card III -->
        <div class="col-3 ccard m-4 p-4">
          <div class="p-4">
            <img src="../assets/img/img/Network-icon.png" alt="" />
          </div>
          <h5 class="p-2">Network Introductions</h5>
          <p class="p-2">
            <font-awesome-icon icon="fa-solid fa-user" class="me-2" />Teacher:
            <span>James Colins</span>
          </p>
          <p class="p-1">
            <font-awesome-icon
              icon="fa-solid fa-money-bill-1"
              class="me-2"
            />Price:
            <span> Free</span>
          </p>
          <div class="btn">
            <Button :text="btnText[6]" btnicon="fa-solid fa-eye"></Button>
          </div>
        </div>
        <!-- card IV -->
        <div class="col-3 ccard m-4 p-4">
          <div class="p-4">
            <img src="../assets/img/img/Brand-icon.png" alt="" />
          </div>
          <h5 class="p-2">Brand Management</h5>
          <p class="p-2">
            <font-awesome-icon icon="fa-solid fa-user" class="me-2" />Teacher:
            <span>James Colins</span>
          </p>
          <p class="p-1">
            <font-awesome-icon
              icon="fa-solid fa-money-bill-1"
              class="me-2"
            />Price:
            <span> Free</span>
          </p>
          <div class="btn">
            <Button :text="btnText[6]" btnicon="fa-solid fa-eye"></Button>
          </div>
        </div>
      </div>
    </section>

    <!-- -->
    <!-- -->

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
  .icon-img {
    width: 50px;
    padding-bottom: 30px !important;
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

// section V - University

.uni {
  background-color: var(--primary-color);
  padding: 100px 0 !important;
  color: #fff;

  h2 {
    background-color: red;
    display: inline;
  }

  .timeline {
    background-image: url(../assets/img/img/Timeline-Item.png);
    background-repeat: no-repeat;
    background-position: bottom;
    height: 300px;
    margin: 80px 0 50px !important;

    p {
      font-weight: 100;
      padding: 10px 0 !important;
    }
  }
}

// section VI - Events

.events {
  background-color: var(--primary-color);
  h2 {
    color: #fff;
  }
}

// section VII - Latest

.ccard {
  box-shadow: 2px 2px 20px #dddddd;

  img {
    width: 100px;
  }
  h5 {
    font-weight: 700;
  }

  span {
    font-weight: 500;
  }
}

.btn {
  margin-bottom: -65px !important;
}
</style>
