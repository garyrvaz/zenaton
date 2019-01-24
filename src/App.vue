<template>
  <div id="app">
    <Countdown
      @minutes="updateMinutes"
      :setMessage="setMessage"
      :startCountdown="startCountdown"
      :showPlay="showPlay"
    />
    <transition name="slide-fade">
      <Message v-show="message" :message="message"/>
    </transition>
    <Timer :seconds="totalSeconds"/>
    <PlayPauseButton
      v-show="showPlay"
      :toggleCountdown="toggleCountdown"
      :continueCounting="continueCounting"
    />
    <Speed :setSpeed="setSpeed" :active-speed="speed"/>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown.vue'
import Timer from '@/components/Timer.vue'
import Speed from '@/components/Speed.vue'
import Message from '@/components/Message.vue'
import PlayPauseButton from '@/components/PlayPauseButton.vue'

import { messages } from '@/utils'

export default {
  name: 'app',
  components: {
    Countdown,
    Timer,
    Speed,
    Message,
    PlayPauseButton,
  },
  data() {
    return {
      initialSeconds: 0,
      totalSeconds: 0,
      timeMinutes: 0,
      speed: 1,
      continueCounting: false,
      showPlay: false,
      message: '',
      timedOutCountdown: '',
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
      this.showPlay = false
      this.continueCounting = false
      this.initialSeconds = value
      this.totalSeconds = value
    },
    setMessage(message) {
      this.message = message
      setTimeout(() => {
        this.message = ''
      }, 2000)
    },
    startCountdown() {
      if (this.timedOutCountdown) {
        clearTimeout(this.timedOutCountdown)
        this.updateMinutes(this.initialSeconds)
      }

      if (this.totalSeconds > 0) {
        this.continueCounting = true
        this.showPlay = true
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
        this.timedOutCountdown = setTimeout(() => {
          if (this.continueCounting) {
            this.totalSeconds -= 1
            this.countdown()
          }
        }, Math.floor(1000 / this.speed))
      }

      if (this.totalSeconds === 0) {
        this.setMessage(messages.timeUp)
        this.continueCounting = false
        this.showPlay = false
        this.totalSeconds = this.initialSeconds
      }
    },
  },
}
</script>

<style lang="sass" src="./assets/sass/App.sass">
</style>
