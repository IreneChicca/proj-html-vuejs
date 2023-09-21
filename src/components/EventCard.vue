<script>
import Button from "./Button.vue";

export default {
  data() {
    return {
      title: "Event Card",
    };
  },

  components: { Button },
  props: { date: String },
};
</script>
<template>
  <div class="event-card text-center">
    <h4>Coaching Sessions</h4>
    <div class="p-2 time">
      <font-awesome-icon icon="fa-regular fa-calendar-days" />
      <p class="ms-2">{{ date }}</p>
    </div>
    <P
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed eiusmod
      tempor[...]</P
    >
    <div class="btn">
      <Button text="+ Find More" class="shadow"></Button>
    </div>
  </div>
</template>
<style type="scss" scoped>
.debug {
  border: 1px solid rgba(0, 0, 0, 0.312);
}

.event-card {
  width: 400px;
  background-color: #fff;
  border-radius: 8%;
  padding: 50px 6px 20px !important;
  box-shadow: 1px 1px 8px #828282;
}

.shadow {
  box-shadow: 1px 1px 8px #828282;
}
.time {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(135, 134, 134);
}
p {
  color: rgb(135, 134, 134);
}
h4 {
  font-weight: 700;
}
</style>
