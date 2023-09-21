<script>
export default {
  data() {
    return {
      title: "App Footer",

      footerLinks: {
        getEduPrime: [
          "Request a website",
          "Browse Theme",
          " Payment Options",
          "Support System",
          " Checkuot",
          "Purchase Theme",
        ],
        networking: [
          "Purchase Theme",
          "Our Benefits",
          " Our Team",
          " Our Services",
          "Other Products",
          "My account",
        ],
        categories: [
          "economy",
          "design",
          "coaching",
          "business",
          "medicine",
          "law",
          "fitness",
        ],
      },
    };
  },
};
</script>

<template>
  <footer>
    <!-- Newsletter -->
    <section class="newsletter">
      <div
        class="p-5 container m-auto d-flex justify-content-evenly align-items-center"
      >
        <h2>Subscribe Now to Our Newsletter!</h2>

        <div class="w-50">
          <div class="input-group">
            <input
              type="text"
              class="form-control p-3"
              placeholder="Email Address..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="input-btn p-3" type="button">
              <font-awesome-icon icon="fa-solid fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Partners -->
    <section class="partners text-center p-5">
      <h2>Partners</h2>
      <p class="col-5 m-auto p-4">
        Levage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy.
      </p>

      <div class="d-flex justify-content-evenly container m-auto pt-5">
        <img src="../assets/img/img/partner-2.png" />
        <img src="../assets/img/img/partner-3.png" />
        <img src="../assets/img/img/partner-4.png" />
        <img src="../assets/img/img/partner-5.png" />
        <img src="../assets/img/img/partner-6.png" />
        <img src="../assets/img/img/partner-1.png" />
        <img src="../assets/img/img/partner-7.png" />
      </div>
    </section>

    <!-- contacts -->
    <section class="contacts pt-5">
      <div class="container d-flex m-auto p-5 justify-content-evenly">
        <!-- col 1 -->
        <div class="col-4">
          <div class="w-50">
            <img src="../assets/img/img/theme_eduprime_logo.png" alt="" />
          </div>
          <p class="pt-4">
            EduPrime si the most versatile WordPress theme for educational
            purposes, showcasing universities, courses, secondary schools etc.
          </p>
          <div class="pt-5">
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="ico" />
            <font-awesome-icon icon="fa-brands fa-twitter" class="ico" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="ico" />
          </div>
        </div>
        <!-- col 2 -->
        <div class="col-3 d-flex">
          <div class="col-6">
            <h5 class="pb-4">Get EduPrime</h5>
            <ul>
              <li v-for="link in footerLinks.getEduPrime" class="pb-3">
                {{ link }}
              </li>
            </ul>
          </div>
          <div class="col-6">
            <h5 class="pb-4">Networking</h5>
            <ul>
              <li v-for="link in footerLinks.networking" class="pb-3">
                {{ link }}
              </li>
            </ul>
          </div>
        </div>
        <!-- col 3 -->
        <div class="col-3">
          <div class="pb-5">
            <div class="input-group">
              <input
                type="text"
                class="form-control p-3"
                placeholder="Search..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button class="input-btn p-3" type="button">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
          <h6 class="text-end">Search categories</h6>
          <div class="pt-4">
            <p v-for="link in footerLinks.categories" class="category">
              {{ link }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 500px;

  h2 {
    font-weight: 600;
  }
  .newsletter {
    background-color: var(--primary-color);
    color: #fff;
  }
  input {
    border-radius: 50px;
  }

  .input-btn {
    background-color: var(--secondary-color);
    border-radius: 50%;
    border: none;
    margin-left: 40px;
    color: #fff;
  }

  .partners {
    height: 600px;
    img {
      width: 90px;
      filter: invert(85%);
    }
  }

  .contacts {
    background-color: var(--primary-color);
    color: #fff;

    .ico {
      border: 3px solid var(--secondary-color);
      font-size: 50px;
      padding: 15px !important;
      border-radius: 50%;
      margin-right: 15px !important;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: var(--primary-color);
        border: 3px solid var(--primary-color);
      }
    }

    li {
      list-style: none;
      font-weight: 100;
    }

    .category {
      text-transform: uppercase;
      padding: 8px 13px !important;
      border: 1px solid #fff;
      border-radius: 40px;
      font-size: 11px;
      margin: 5px 6px 10px 0 !important;
      cursor: pointer;
      float: right;

      &:hover {
        background-color: #fff;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
      }
    }
  }
}
</style>
