import productModel from '../../models/productModel.js'

const listAll = (req, res) => {
    res.json({
      success: "Usuários listados com sucesso!",
      products: productModel.listAll
    })
  }

export default listAll