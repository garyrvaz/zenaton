<template>
  <div class="ze-speed-container d-flex-jc-ai-center row">
    <div
      v-for="speed in speeds"
      :class="`ze-speed ${activeSpeed === speed.speed ? 'active' : ''}`"
      :key="speed.label"
      @click="() => setSpeed(speed.speed)"
    >{{ speed.label }}</div>
  </div>
</template>

<script>
import { speeds } from "../utils"
export default {
  props: {
    setSpeed: Function,
    activeSpeed: Number,
  },
  data() {
    return {
      speeds,
    }
  },
}
</script>
<style lang="sass" scoped src="../assets/sass/Speed.sass">
</style>
