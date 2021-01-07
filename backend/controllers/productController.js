import Product from '../models/productModel.js'

const getproducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.error(error)
  }
}
const getproduct = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id)
    res.json(products)
  } catch (error) {
    res.send(error)
  }
}

export { getproducts, getproduct }
