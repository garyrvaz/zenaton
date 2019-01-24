<template>
  <div class="ze-play-pause-btn-container d-flex-jc-ai-center">
    <div class="ze-play-pause-btn d-flex-jc-ai-center" @click="toggleCountdown">
      <div v-show="!continueCounting" class="ze-play"></div>
      <div v-show="continueCounting" class="ze-pause"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggleCountdown: Function,
    continueCounting: Boolean,
  },
}
</script>

<style lang="sass" src="../assets/sass/PlayPauseButton.sass">
</style>
