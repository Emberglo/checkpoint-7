import express from 'express'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugService } from '../services/BugService'
import BaseController from '../utils/BaseController'

export class BugController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllBugs)
      // .get('/:bugId', this.getActiveBug)
      // .post('', this.create)
      // .put('/:bugId', this.edit)
      // .delete('/:bugId', this.delete)
  }

  // async delete(req, res, next) {
  //   try {
  //     const currentUser = req.userInfo.id
  //     res.send(await bugService.delete(req.params.bugId, currentUser))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // async edit(req, res, next) {
  //   try {
  //     const currentUser = req.userInfo.id
  //     res.sent(await bugService.edit(req.body, req.params.bugId, currentUser))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // async create(req, res, next) {
  //   try {
  //     req.body.creatorId = req.userInfo.id
  //     res.send(await bugService.create(req.body))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // async getActiveBug(req, res, next) {
  //   try {
  //     req.send(await bugService.getActiveBug(req.params.bugId, req.userInfo.id))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async getAllBugs(req, res, next) {
    try {
      res.send(await bugService.getAllBugs(req))
    } catch (error) {
      next(error)
    }
  }
}
