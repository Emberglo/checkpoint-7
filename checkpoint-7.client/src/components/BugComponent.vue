<template>
  <div class="BugComponent">
    <div class="row text border-top border-bottom p-2 my-3 mx-2 pointer" @click="getActiveBug(bug._id)">
      <div class="col-3 text-center p-2 d-flex align-items-center justify-content-center">
        <p class="mb-0">
          {{ bug.title }}
        </p>
      </div>
      <div class="col-3 text-center p-2 d-flex align-items-center justify-content-center">
        <p class="mb-0">
          {{ bug.reportedBy }}
        </p>
      </div>
      <div class="col-3 text-center p-2 d-flex align-items-center justify-content-center">
        <p class="mb-0">
          {{ bug.status }}
        </p>
      </div>
      <div class="col-3 text-center p-2 d-flex align-items-center justify-content-center">
        <p class="mb-0">
          <!-- eslint-disable-next-line vue/no-deprecated-filter -->
          {{ bug.updatedAt | moment('MMMM Do YYYY, h:mm:ss a') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'

export default {
  name: 'BugComponent',
  props: {
    bugProp: Object
  },
  setup(props) {
    const router = useRouter()
    return {
      bug: computed(() => props.bugProp),
      profile: computed(() => AppState.profile),
      getActiveBug(bugId) {
        router.push({ name: 'ActiveBug', params: { bugId: bugId } })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
