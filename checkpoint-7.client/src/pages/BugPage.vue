<template>
  <div class="BugPage container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <h2 class="pl-3 mt-3">
          Bugs
        </h2>
        <i class="far fa-plus-square pr-3 mt-3" data-toggle="modal" data-target="#addBugModal"></i>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="addBugModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add A Bug
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="color">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="createBug(profile.name)">
                <input type="text" v-model="state.newBug.title" placeholder="Bug Title" class="my-2">
                <textarea v-model="state.newBug.description" cols="35" rows="10" placeholder="Bug Description" class="my-2"></textarea>
                <button type="submit" class="btn btn-outline-secondary my-2">
                  Submit Bug
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text p-2 my-3 mx-2">
      <div class="col-3 text-center p-2 d-flex align-items-center justify-content-center">
        <h5 class="mb-0">
          Bug Title
        </h5>
      </div>
      <div class="col-3 text-center p-2 d-flex align-items-center justify-content-center">
        <h5 class="mb-0">
          Reported By
        </h5>
      </div>
      <div class="col-3 text-center p-2 d-flex align-items-center justify-content-center">
        <h5 class="mb-0">
          Status
        </h5>
      </div>
      <div class="col-3 text-center p-2 d-flex align-items-center justify-content-center">
        <h5 class="mb-0">
          Last Modified
        </h5>
      </div>
    </div>
    <BugComponent v-for="bug in bugs" :bug-prop="bug" :key="bug._id" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { bugService } from '../services/BugService'

export default {
  name: 'BugPage',
  setup() {
    const state = reactive({
      newBug: {}
    })
    onMounted(() => {
      bugService.getAllBugs()
    })
    return {
      state,
      bugs: computed(() => AppState.bugs),
      profile: computed(() => AppState.profile),
      createBug(profileName) {
        state.newBug.reportedBy = profileName
        bugService.createBug(state.newBug)
        state.newBug = {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
i {
  font-size: 2em;
}
.modal-content {
  background-color: #0d0208;
}
.color{
  color: #00ff41;
}
</style>
