import express from 'express'
import listAll from '../../controllers/user/listAll.js'
import create from '../../controllers/user/create.js'
import remove from '../../controllers/user/remove.js'
import edit from '../../controllers/user/edit.js'

const router = express.Router()


router.get('/', listAll)
router.put('/', edit)
router.delete('/', remove)
router.post('/', create)



export default router