import userModel from "../../models/userModel.js"

const listAll = (req, res) => {
	res.json({
		success: "Usuários listados com sucesso!",
		users: userModel.listAll()
	})
}

export default listAll