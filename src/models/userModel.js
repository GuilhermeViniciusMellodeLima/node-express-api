import {users} from '../db-memory/user.js'
import { z } from 'zod'

const userSchema = z.object({
	id: z
    .number({
        required_error: "ID obrigatório",
        invalid_type_error: "ID deve ser um número"

    }),
	name: z
    
    .string({
        required_error:"Name obrigatório",
        invalid_type_error:"Name deve ser uma string"
    })
    .min(3, {message: 'O nome do usuário deve ter ao menos 3 lestras.'})
    .max(200, {message: 'O nome do usuário deve ter no máximo 200 caracteres.'}),
	email: z
    
    .string({
        required_error:"Email obrigatório",
        invalid_type_error:"Email deve ser uma string"

    }).email({message: 'Email inválido.'}),
    })

const validateCreate = (user) =>{
	const partialUserSchema = userSchema.partial({id: true})
	return partialUserSchema.safeParse(user)

}

const validadeEdit = (user) =>{
    return partialUserSchema.safeParse(user)
}

const validadeId = (id) =>{
    const partialUserSchema = userSchema.partial({
        name: true,
        email: true
    })


    return partialUserSchema.safeParse({id})
} 

const listAll = () => {
    return users
}

const create = (user) =>{
    user.id = users[users.length - 1].id + 1
	users.push(user)
    return users
}

const edit = (newUser) => {
    return users.map(user => {
		if (user.id === newUser.id) {
			return {
				id: user.id,
				name: newUser.name || user.name,
				email: newUser.email || user.email,
				avatar: newUser.avatar || user.avatar
			}
		}
		return user
	})
}

const remove = (id) => {
    return users.filter(user => user.id !== id)
}

export default {listAll, create, edit, remove, validateCreate, validadeEdit, validadeId} 