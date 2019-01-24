<template>
  <div class="ze-countdown-container">
    <div class="d-flex-jc-ai-center row">
      <div>Countdown:</div>
      <input type="number" v-model="minutes" @input="formatter" max="99" min="1">
      <button class="ze-btn-primary" @click="startCountdown">{{ showPlay ? 'Restart' : 'Start' }}</button>
    </div>
  </div>
</template>

<script>
import { messages } from '@/utils'
export default {
  props: {
    startCountdown: Function,
    setMessage: Function,
    showPlay: Boolean,
  },
  data() {
    return {
      minutes: null,
    }
  },
  methods: {
    formatter(e) {
      const { value } = e.target
      if (value <= 99 && value > 0) {
        this.minutes = Math.floor(value)
      }

      if (value > 99) {
        this.minutes = Math.floor(Number(value.toString().substring(0, 2)))
        this.setMessage(messages.tooHigh)
      }

      if (value <= 0) {
        this.minutes = null
        this.setMessage(messages.required)
      }

      this.$emit('minutes', this.minutes * 60)
    },
  },
}
</script>

<style lang="sass" src="../assets/sass/Countdown.sass">

</style>
