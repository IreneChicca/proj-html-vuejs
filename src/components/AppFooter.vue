<script>
export default {
  data() {
    return {
      title: "App Footer",
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
    <section></section>
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

  .debug {
    border: 1px solid red;
  }
}
</style>
