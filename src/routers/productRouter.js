import express from 'express'
import remove from '../controllers/product/remove.js'
import create from '../controllers/product/create.js'
import listAll from '../controllers/product/listAll.js'
import edit from '../controllers/product/edit.js'


const router = express.Router()


router.delete('/', remove)
router.post('/', create)
router.get('/', listAll)
router.put('/', edit)


     
export default router