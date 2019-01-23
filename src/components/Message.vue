<template>
  <div class="ze-message-container d-flex-jc-ai-center">
    <div class="ze-message-person">
      <img src="@/assets/louis.png">
    </div>
    <div class="ze-message">
      <i>{{message}}</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
}
</script>

<style lang="sass" scoped src="../assets/sass/Message.sass">
</style>
