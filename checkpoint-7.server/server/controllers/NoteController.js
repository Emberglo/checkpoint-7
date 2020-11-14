import { Auth0Provider } from '@bcwdev/auth0provider'
import { noteService } from '../services/NoteService'
import BaseController from '../utils/BaseController'

export class NoteController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:bugId', this.getBugNotes)
      .post('/:bugId', this.createNote)
      .put('/:noteId', this.editNote)
      .delete('/:noteId', this.deleteNote)
  }
}
