import userModel from "../../models/userModel.js"

const listAll = (res, res) => {
    res.json({
        sucess: "Usuário listado com sucesso",
        users: userModel.listAll()
    })
}

export default listAll