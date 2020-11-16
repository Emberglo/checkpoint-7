<template>
  <div class="NoteComponent">
    <div class="row justify-content-center align-items-center mt-3">
      <div class="col-10 my-4">
        <p class="ml-5 pl-4">
          {{ note.creatorName }}
        </p>
        <div class="col-10 offset-1 border-top border-bottom mt-2">
          <p class="py-4">
            {{ note.body }}
          </p>
        </div>
        <div class="py-4 d-flex justify-content-end mr-4">
          <!-- <button class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="{{note.id}}">
            Edit Note
          </button> -->
          <button class="btn btn-sm btn-outline-secondary mr-5" @click="deleteNote(note.id)">
            Remove Note
          </button>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="{{note.id}}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <textarea v-model="state.editedNote.body" cols="35" rows="10" placeholder="Bug Description" class="my-2"></textarea>
                <button type="submit" class="btn btn-outline-secondary my-2">
                  Submit Note
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { noteService } from '../services/NoteService'
import { useRoute } from 'vue-router'
export default {
  name: 'NoteComponent',
  props: {
    noteProp: Object,
    bugProp: Object
  },
  setup(props) {
    const state = reactive({
      editedNote: {}
    })
    const route = useRoute()
    return {
      state,
      note: computed(() => props.noteProp),
      bug: computed(() => props.bugProp),
      profile: computed(() => AppState.profile),
      deleteNote(noteId) {
        noteService.deleteNote(noteId, route.params.bugId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
