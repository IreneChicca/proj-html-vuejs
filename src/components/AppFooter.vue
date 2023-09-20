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
    <section></section>
    <section></section>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 500px;
  background-color: bisque;

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

  .debug {
    border: 1px solid red;
  }
}
</style>
