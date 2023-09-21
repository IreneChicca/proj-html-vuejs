<script>
import Button from "./Button.vue";
import EventCard from "./EventCard.vue";

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
      eventDate: ["20 May 21:30 PM", "24 Mar 18:00 PM", " 12 Feb 13:30 PM"],
    };
  },

  components: { Button, EventCard },
};
</script>

<template>
  <main>
    <!-- section I - Jumbo -->
    <section class="jumbo text-center container-fluid">
      <div>
        <h1 class="pt-5">Key to your success</h1>
        <p class="m-auto">
          EduPrime is the most versatile Word Press theme for educational
          purposes, shocasing universities, courses, secondary schools etc.
        </p>
        <div class="d-flex justify-content-center m-auto pb-5">
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
      <div>
        <img src="../assets/img/img/Wave-1.png" alt="" />
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

    <section class="p-4 mt-5 d-flex justify-content-center align-items-center">
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
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="2954.667"
      height="186.667"
      viewBox="0 0 2216 140"
    >
      <path
        class="st0"
        d="M324.7 34.8c-76.4 51.8-134.1 82-177.2 92.8-12.2 3.1-33.8 4.3-42.8 2.5-8.1-1.7-18.5-7.2-24.2-12.8-5.7-5.7-10.1-12.2-17.4-26.1C57 79.6 52.6 75 47.7 75c-7.9 0-21.2 9.9-37.9 28.3L0 114v26h1105.2c729.3 0 1104.9-.3 1104.2-1-2.6-2.6-29.5-18-42.9-24.5-46.4-22.7-82.1-27.7-122.7-17.5-4.6 1.2-19.1 5.5-32.3 9.5-40.2 12.4-58.5 16.1-85.5 17.2-33.9 1.3-73.5-5.3-117.9-19.9-14.8-4.8-48.5-17.8-59.7-23l-5.2-2.4-16.3 1.8c-125.9 13.6-219.6 20.5-324.9 23.9-40.1 1.3-166.2.6-196-1-71.9-4-119.7-8.4-173.5-16.2-26.8-3.8-69.6-11.2-83.1-14.4-5-1.1-8-1.3-13.2-.5-3.7.5-18.8 2.3-33.7 3.9C793 88.1 702 89.1 622 79c-51.2-6.5-89.6-15.2-150.5-34-35.4-10.9-84.3-20.7-121.8-24.3-3.5-.3-5.6.9-25 14.1z"
        fill="#e56768"
      />
    </svg>

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
    <section class="events text-center pb-5">
      <div class="container m-auto">
        <img
          src="../assets/img/img/upcoming-events-calendar-icon.png"
          class="icon-img"
        />
        <h2>Upcoming Events</h2>
      </div>
      <div class="event-box container m-auto">
        <EventCard v-for="(date, i) in eventDate" :date="eventDate[i]" />
      </div>
      <Button :text="btnText[4]" color="gold"></Button>
    </section>

    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="2821.333"
      height="177.333"
      viewBox="0 0 2116 133"
    >
      <path
        class="st0"
        d="M6 .4c0 .8 22.8 14.1 35.5 20.7 35.6 18.6 68.6 26.7 96.8 23.9 15.1-1.5 29.4-4.8 54.3-12.6 40-12.5 57.6-16.1 84.4-17.1 45.6-1.6 98.7 10.6 160.6 37.1 7.1 3.1 14.2 5.6 15.8 5.6 1.5 0 17.3-1.6 35-3.5 85-9.2 166.6-15.4 259.1-19.7 36.9-1.7 181.6-1.7 215 0 89.4 4.7 163.2 12.9 226.5 25.4 13.3 2.6 24.2 4.3 28.5 4.2 3.9 0 19.4-1.4 34.5-3.2 60.9-7 102.4-9.6 157-9.6 94.2 0 162.8 9.8 244 34.9 44.3 13.6 79.7 21.3 119.4 25.9l13 1.5 30.5-20.3c85.2-56.8 141.9-83.5 181.6-85.3 28.4-1.3 43 7.9 57 35.7 7.9 15.7 12 19.4 19.5 17.1 6.8-2 15.6-8.9 28.9-22.7l13.1-13.6V0H1061C480.8 0 6 .2 6 .4z"
        fill="#e56768"
      />
    </svg>

    <!-- section VII - Latest -->

    <section class="latest container m-auto pt-5 pb-5">
      <h2 class="ms-5">Latest Courses</h2>
      <div class="container m-auto d-flex text-center p-4">
        <!-- card I -->
        <div class="ccard m-4 p-4">
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
        <div class="ccard m-4 p-4">
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
        <div class="ccard m-4 p-4">
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
        <div class="ccard m-4 p-4">
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

    <!-- section VIII - Exams -->

    <section class="exams container m-auto p-5">
      <!-- Methods -->
      <div class="methods d-flex justify-content-between align-items-center">
        <div class="col-5">
          <div>
            <img
              src="../assets/img/img/Exam-icon.png"
              alt=""
              class="icon-img"
            />
          </div>
          <h1>The most efficient examination method</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            quidem natus eligendi accusamus cupiditate eum enim quaerat magni
            maxime consequatur eveniet inventore nostrum temporibus fugiat,
            nulla nemo assumenda quas! Repellat, repellendus expedita! Tempora
            dolorem nulla ex.
          </p>
          <Button :text="btnText[7]"></Button>
        </div>

        <div class="col-5 me-5">
          <img src="../assets/img/img/Exam-Illustration.png" alt="" />
        </div>
      </div>

      <!-- Fees -->
      <div class="fees d-flex justify-content-between align-items-center pb-5">
        <div class="col-5 me-5">
          <img src="../assets/img/img/Girl-Illustration.png" alt="" />
        </div>
        <div class="col-5">
          <div>
            <img
              src="../assets/img/img/Exam-icon-1.png"
              alt=""
              class="icon-img"
            />
          </div>
          <h1>Variable fees for international students</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            quidem natus eligendi accusamus cupiditate eum enim quaerat magni
            maxime consequatur eveniet inventore nostrum temporibus fugiat,
            nulla nemo assumenda quas! Repellat, repellendus expedita! Tempora
            dolorem nulla ex.
          </p>
          <Button :text="btnText[8]"></Button>
        </div>
      </div>
    </section>

    <!-- fixed objects -->

    <div class="fixed-icons">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="ico" />
      <font-awesome-icon icon="fa-solid fa-book-open-reader" class="ico" />
      <font-awesome-icon icon="fa-regular fa-life-ring" class="ico" />
    </div>

    <div class="fixed-backtop">
      <font-awesome-icon icon="fa-solid fa-chevron-up" class="ico" />
    </div>
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
    width: 60px;
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
  padding: 50px 0 100px !important;
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

  .event-box {
    display: flex;
    justify-content: space-evenly;
    padding: 50px 0 90px !important;
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

// section VIII - Exams

.exams {
  p {
    padding: 40px 0 !important;
  }

  .fees {
    margin-top: 150px !important;
  }
}

// fixed objects

.fixed-icons {
  position: fixed;
  top: 220px;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 0 5% 5% 0;
  font-size: 37px;
  box-shadow: 1px 1px 12px #666666bc;
  .ico {
    padding: 10px !important;
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
  }
}

.fixed-backtop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 50%;
  font-size: 35px;

  .ico {
    padding: 10px !important;

    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
