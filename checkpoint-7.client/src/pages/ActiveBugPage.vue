<template>
  <div class="ActiveBug container-fluid">
    <div class="row justify-content-center">
      <div class="col-12">
        <h2 class="mt-3 align-self-center text-center">
          {{ bug.title }}
        </h2>
      </div>
    </div>
    <div class="row flex-column justify-content-center align-items-center">
      <div class="col-10 border-top border-bottom mt-4">
        <div class="col-8">
          <p class="py-4">
            {{ bug.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="row py-3 justify-content-between">
      <div class="col ml-4">
        <p class="ml-5 pl-1">
          Open: {{ bug.status }}
        </p>
      </div>
      <div class="col d-flex justify-content-end mr-5">
        <button class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#addNoteModal">
          Add Note
        </button>
        <button class="btn btn-sm btn-outline-secondary ml-2" data-toggle="modal" data-target="#editBugModal">
          Edit Bug
        </button>
        <button class="btn btn-sm btn-outline-secondary ml-2 mr-4" @click="deleteBug()">
          Close Bug
        </button>
      </div>
      <!-- Edit Modal -->
      <div class="modal fade" id="editBugModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Bug
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="color">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="editBug()">
                <input type="text" v-model="state.editedBug.title" placeholder="Bug Title" class="my-2">
                <textarea v-model="state.editedBug.description" cols="35" rows="10" placeholder="Bug Description" class="my-2"></textarea>
                <button type="submit" class="btn btn-outline-secondary my-2">
                  Submit Bug
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Note Modal -->
      <div class="modal fade" id="addNoteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Note
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="color">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addNote(profile.name)">
                <textarea v-model="state.newNote.body" cols="35" rows="10" placeholder="Note" class="my-2"></textarea>
                <button type="submit" class="btn btn-outline-secondary my-2">
                  Submit Note
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NoteComponent v-for="note in notes" :note-prop="note" :bug-prop="bug" :key="note._id" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { bugService } from '../services/BugService'
import { noteService } from '../services/NoteService'
import { useRoute } from 'vue-router'

export default {
  name: 'ActiveBug',
  setup() {
    const state = reactive({
      editedBug: {},
      deletedBug: {},
      newNote: {}
    })
    const route = useRoute()
    onMounted(async() => {
      await bugService.getActiveBug(route.params.bugId)
      await noteService.getBugNotes(route.params.bugId)
    })
    return {
      state,
      bug: computed(() => AppState.activeBug),
      profile: computed(() => AppState.profile),
      notes: computed(() => AppState.notes),
      editBug() {
        bugService.editBug(route.params.bugId, state.editedBug)
        state.editedBug = {}
      },
      deleteBug() {
        state.deletedBug.status = true
        bugService.deleteBug(route.params.bugId, state.deletedBug)
      },
      addNote(profileName) {
        state.newNote.creatorName = profileName
        noteService.addNote(route.params.bugId, state.newNote)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.modal-content {
  background-color: #0d0208;
}
.color{
  color: #00ff41;
}
</style>
