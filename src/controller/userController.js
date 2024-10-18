const bcrypt = require("bcryptjs/dist/bcrypt");
const userService = require("../services/userServices")

const userController = {
    create: async (req, res) =>{
        try {
            const user = await userService.create(req.body);
            return res.status(200).json({
                msg:"User criado com sucesso.",
                user
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg:"Erro ao tentar criar user"
            })
        }
    },
    update: async (req, res) => {
        try {
            const user = await userService.update(req.params.id, req.body);
            if(!user){
                return res.status(400).json({
                    msg:"User não encontrado"
                })
            }
            return res.status(200).json({
                msg:"User atualizado com sucesso!",
                user
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao tentar criar user"
            });
        }
    },
    getAll:async(req, res) =>{
        try {
            const users = await userService.getAll();

            return res.status(200).json({
                msg:"Todos os usuarios",
                users
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Ocorreu um erro no servidor!"
            });
        }
    },
    getOne: async(req, res) =>{
        try {
            const user = await userService.getById(req.params.id)

            if(!user){
                return res.status(400).json({
                    msg:"User nao encontrado"
                })
            }

            return res.status(200).json({
                msg:"usuario encontrado",
                user
            });



        } catch (error) {
            return res.status(500).json({
                msg:"Ocorreu um erro no servidor!"
            });
        }
    },
    delete: async(req,res) =>{
        try {
            const user = await userService.delete(req.params.id)

            if(!user){
                return res.status(400).json({
                    msg:"Usuario nao encontrado!"
                });
            }

            return res.status(200).json({
                msg:"usuario deletado com sucesso"
            });

        } catch (error) {
            return res.status(500).json({
                msg:"ocorreu um erro no servidor"
            })
        }
    },
}

module.exports = userController;