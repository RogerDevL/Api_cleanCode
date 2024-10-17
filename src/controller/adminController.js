const adminService = require("../services/adminServcies")

const adminController ={
    create: async(req, res) =>{
        try {
            const {nome, email, senha} = req.body;
            const admin = await adminService.create(req.body);

            if(!nome || !email || !senha){
                return res.status(400).json({
                    msg:"Dados inválidos."
                })
            }

            return res.status(200).json({
                msg:"Admin Criado",
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao criar admin."
            })
        }
    },
    update: async (req, res) =>{
        try {
            const admin = await adminService.update(req.params.id, req.body);
            if(!admin){
                return res.status(400).json({
                    msg:"Admin inexistente."
                })
            }
            return res.status(200).json({
                msg:"Atualizado com sucesso.",
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao atualizar admin."
            })
        }
    },
    getOne: async(req, res) =>{
        try {
            const admin = await adminService.getById(req.params.id);
            if(!admin){
                return res.status(400).json({
                    msg:"Admin inexistente."
                })
            }

            return res.status(200).json({
                msg:"Admin encontrado",
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao buscar unico."
            })
        }
    },

    getAll: async(req, res) =>{
        try {
            const admin = await adminService.getAll();
            return res.status(200).json({
                msg:"Admins:",
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao buscar todos."
            })
        }
    },
    delete: async(req, res) =>{
        try {
            const admin = await adminService.delete(req.params.id);
            if(!admin){
                return res.status(400).json({
                    msg:"Admin inexistente."
                })
            }
            return res.status(200).json({
                msg:"Deletado com sucesso.",
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao deletar admin."
            })
        }
    }
    
}

module.exports = adminController;