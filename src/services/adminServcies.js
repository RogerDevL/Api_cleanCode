const bcrypt = require("bcryptjs/dist/bcrypt");
const Admin = require("../models/admin");
const adminService = {
    esqueciSenha: async (id) =>{
        try {
            
        } catch (error) {
            
        }
    },
  create: async (admin) => {
    try {
      // admin.password || admin.senha
      const senhaCripto = await bcrypt.hash(admin.senha, 10);

      return await Admin.create({
        nome: admin.nome,
        email: admin.email,
        senha: senhaCripto,
      });
    } catch (error) {
      throw error("Ocorreu um erro ao criar admin.");
    }
  },
  update: async (id, adminToUpdate) => {
    try {
      const admin = await Admin.findByPk(id);

      const senhaCripto = await bcrypt.hash(admin.senha, 10);

      if (!admin) {
        return null;
      }

      await admin.update({
        nome: admin.nome,
        email: admin.email,
        senha: senhaCripto,
      });

      return await admin.save();
    } catch (error) {
      throw error("Ocorreu um erro ao atualizar admin.");
    }
  },
  login: async(admin) =>{
    try {
        const admin = await Admin.findOne({where: { email }});

        if(!admin){
            return null;
        }

        const validate = await bcrypt.compare(senha, admin.senha);
        if(validate) {
            return res.status(404).json({
                msg:"Email ou senha incorretos!"
            })
        }

        const token = jwt.sign({
            email: admin.email,
            senha: admin.senha
        }, process.env.SECRET, { expiresIn: '1h'})

        return res.status(200).json({
            msg:"Login realizado.",
            token
        })

    } catch (error) {
        throw error("Ocorreu um erro ao atualizar admin.");
    }
  },
  getById: async (id) => {
    try {
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return null;
      }

      return admin;
    } catch (error) {
      throw error("Ocorreu um erro ao buscar unico.");
    }
  },
  getAll: async () => {
    try {
      return await Admin.findAll();
    } catch (error) {
      throw error("Ocorreu um erro ao buscar todos.");
    }
  },
  delete: async (id) => {
    try {
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return null;
      }
      await admin.destroy();
      return admin;
    } catch (error) {
      throw error("Ocorreu um erro ao buscar todos.");
    }
  },
};

module.exports = adminService;
