<template>
  <div id="app">
    <Countdown
      @minutes="updateMinutes"
      :showStart="showStart"
      :setMessage="setMessage"
      :startCountdown="startCountdown"
    />
    <transition name="slide-fade">
      <Message v-show="message" :message="message"/>
    </transition>
    <Timer :seconds="totalSeconds"/>
    <div class="ze-play-pause-btn-container d-flex-jc-ai-center" v-show="!showStart">
      <div class="ze-play-pause-btn d-flex-jc-ai-center" @click="toggleCountdown">
        <div v-show="!continueCounting" class="ze-play"></div>
        <div v-show="continueCounting" class="ze-pause"></div>
      </div>
    </div>
    <Speed :setSpeed="setSpeed" :active-speed="speed"/>
  </div>
</template>

<script>
import Countdown from "./components/Countdown.vue"
import Timer from "./components/Timer.vue"
import Speed from "./components/Speed.vue"
import Message from "./components/Message.vue"

import { messages } from "./utils"

export default {
  name: "app",
  components: {
    Countdown,
    Timer,
    Speed,
    Message,
  },
  data() {
    return {
      initialSeconds: 0,
      totalSeconds: 0,
      timeMinutes: 0,
      speed: 1,
      continueCounting: false,
      showStart: true,
      message: "",
    }
  },
  methods: {
    setSpeed(speed) {
      this.speed = speed
    },
    toggleCountdown() {
      this.continueCounting = !this.continueCounting
      if (this.continueCounting) {
        this.countdown()
      }
    },
    updateMinutes(value) {
      this.showStart = true
      this.continueCounting = false
      this.initialSeconds = value
      this.totalSeconds = value
    },
    setMessage(message) {
      this.message = message
      setTimeout(() => {
        this.message = ""
      }, 4000)
    },
    startCountdown() {
      if (this.totalSeconds > 0) {
        this.continueCounting = true
        this.showStart = false
        this.countdown()
      } else {
        this.setMessage(messages.zero)
      }
    },
    countdown() {
      if (this.totalSeconds > 0 && this.continueCounting) {
        if (this.totalSeconds === this.initialSeconds / 2) {
          this.setMessage(messages.halfway)
        }
        this.totalSeconds -= 1
        setTimeout(() => {
          this.countdown()
        }, Math.floor(1000 / this.speed))
      }

      if (this.totalSeconds === 0) {
        this.continueCounting = false
        this.showStart = true
      }
    },
  },
}
</script>

<style lang="sass" src="./assets/sass/App.sass">
</style>
