<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h1 class="my-5 bg-dark p-3 rounded d-flex align-items-center">
      <span class="mx-2">Welcome to BugHunter</span>
    </h1>
    <!-- <p v-if="!profile.name">
      Please log in to submit a bug report.
    </p>
    <p v-if="profile.name">
      Welcome back!
    </p> -->
  </div>
</template>

<script>
import AppState from '../AppState'
import { computed } from 'vue'
export default {
  name: 'Home',
  setup() {
    return {
      profile: computed(() => AppState.profile),
      user: computed(() => AppState.user)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
h1{
  color: rgba(255, 255, 255, 0.5);
}
</style>
