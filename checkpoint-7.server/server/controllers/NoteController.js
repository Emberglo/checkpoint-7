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

  async deleteNote(req, res, next) {
    try {
      res.send(await noteService.deleteNote(req.params.noteId))
    } catch (error) {
      next(error)
    }
  }

  async editNote(req, res, next) {
    try {
      res.send(await noteService.editNote(req.body))
    } catch (error) {
      next(error)
    }
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.bug = req.params.bugId
      res.send(await noteService.createNote(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getBugNotes(req, res, next) {
    try {
      res.send(await noteService.getBugNotes(req.params.bugId))
    } catch (error) {
      next(error)
    }
  }
}
