<template>
  <div class="ze-countdown-container">
    <div class="d-flex-jc-ai-center row">
      <div>Countdown:</div>
      <input type="number" v-model="minutes" @input="formatter" max="999">
      <button v-show="showStart" class="ze-btn-primary" @click="startCountdown">Start</button>
    </div>
  </div>
</template>

<script>
import { messages } from "../utils"
export default {
  props: {
    startCountdown: Function,
    setMessage: Function,
    showStart: Boolean,
  },
  data() {
    return {
      minutes: null,
    }
  },
  methods: {
    formatter(e) {
      const { value } = e.target
      if (value <= 999 && value > 0) {
        this.minutes = value
      }

      if (value > 999) {
        this.minutes = Number(value.toString().substring(0, 3))
      }

      if (value <= 0) {
        this.minutes = null
        this.setMessage(messages.required)
      }

      this.$emit("minutes", this.minutes * 60)
    },
  },
}
</script>

<style lang="sass" src="../assets/sass/Countdown.sass">

</style>
