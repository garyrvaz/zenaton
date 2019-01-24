<template>
  <div :class="`ze-timer-container d-flex-jc-ai-center ${timerState}`">
    <div class="ze-time">{{RemainingMinutesTenth}}{{RemainingMinutesUnit}}</div>
    <div>:</div>
    <div class="ze-time">{{RemainingSecondsTenth}}{{RemainingSecondsUnit}}</div>
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
        return 'red'
      }
      if (this.seconds <= 10 && this.seconds > 0) {
        return 'alert'
      }
      return ''
    },
    RemainingMinutes() {
      return Math.floor(this.seconds / 60)
    },
    RemainingMinutesTenth() {
      return Math.floor(this.RemainingMinutes / 10)
    },
    RemainingMinutesUnit() {
      return this.RemainingMinutes - this.RemainingMinutesTenth * 10
    },
    RemainingSeconds() {
      return Math.floor(this.seconds - this.RemainingMinutes * 60)
    },
    RemainingSecondsTenth() {
      return Math.floor(this.RemainingSeconds / 10)
    },
    RemainingSecondsUnit() {
      return this.RemainingSeconds - this.RemainingSecondsTenth * 10
    },
  },
}
</script>

<style lang="sass" scoped src="../assets/sass/Timer.sass">
</style>
