import express from 'express'
import { getproducts, getproduct } from '../controllers/productController.js'

const router = express.Router()
router.route('/').get(getproducts)
router.route('/:id').get(getproduct)
export default router
