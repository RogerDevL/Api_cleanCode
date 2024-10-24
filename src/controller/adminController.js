const bcrypt = require("bcryptjs/dist/bcrypt");
const Admin = require("../models/admin");
const adminService = require("../services/adminServcies")
const jwt = require("jsonwebtoken");

const adminController ={
    login: async (req, res) => {
        try {
          const { email, senha } = req.body;
    
          const admin = await Admin.findOne({ where: { email } });
    
          if (!admin) {
            return res.status(400).json({
              msg: "Email ou senha incorretos",
            });
          }
    
          const isValida = await bcrypt.compare(senha, admin.senha);
          if (!isValida) {
            return res.status(400).json({
              msg: "Email ou senha incorretos",
            });
          }
    
          const token = jwt.sign(
            { email: admin.email, senha: admin.senha },
            process.env.SECRET,
            { expiresIn: "1h" }
          );
    
          return res.status(200).json({
            msg: "Login realizado",
            token,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o suporte" });
        }
      },
      esqueciSenha: async(req, res) => {
        try {
            const admin = await adminService.esqueciSenha(req.params.id, req.body);
            if(!admin) {
                return res.status(400).json({
                    msg:"inexistente."
                });
            }
            return res.status(200).json({
                msg: "Senha do admin foi atualizada com sucesso",
                admin,
              });
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao alterar senha."
            })
        }
      },

    create: async(req, res) =>{
        try {
            const admin = await adminService.create(req.body);

            
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