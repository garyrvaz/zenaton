<template>
  <div class="ze-timer-container">
    <p :class="timerState">{{RemainingMinutes}}:{{RemainingSeconds}}</p>
  </div>
</template>

<script>
export default {
  props: {
    seconds: {
      type: Number,
      default() {
        return 0
      },
    },
  },
  computed: {
    timerState() {
      if (this.seconds > 10 && this.seconds < 20) {
        return "red"
      }
      if (this.seconds <= 10 && this.seconds > 0) {
        return "alert"
      }
      return ""
    },
    RemainingMinutes() {
      return Math.floor(this.seconds / 60)
    },
    RemainingSeconds() {
      return Math.floor(this.seconds - this.RemainingMinutes * 60)
    },
  },
}
</script>

<style lang="sass" scoped src="../assets/sass/Timer.sass">
</style>
