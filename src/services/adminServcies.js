const bcrypt = require("bcryptjs/dist/bcrypt");
const Admin = require("../models/admin");
const adminService = {
    create: async (admin) => {
        try {

            const senhaCripto = await bcrypt.hash(senha,10)

            return await Admin.create({...admin, senha:senhaCripto})
        } catch (error) {
            throw error("Ocorreu um erro ao criar admin.");
        }
    },
    update: async (id, adminToUpdate) => {
        try {
            const admin = await Admin.findByPk(id);

            if(!admin){
                return null;
            }
            await admin.update(adminToUpdate);
            await admin.save();
            return admin;
        } catch (error) {
            throw error("Ocorreu um erro ao atualizar admin.");
        }
    },
    getById:async (id) =>{
        try {
            const admin = await Admin.findByPk(id);
            if(!admin){
                return null;
            }

            return admin;
        } catch (error) {
            throw error("Ocorreu um erro ao buscar unico.");
        }
    },
    getAll: async() =>{
        try {
            return await Admin.findAll();
        } catch (error) {
            throw error("Ocorreu um erro ao buscar todos.");
        }
    },
    delete: async(id) =>{
        try {
            const admin = await Admin.findByPk(id);
            if(!admin){
                return null;
            }
           await admin.destroy();
           return admin;
        } catch (error) {
            throw error("Ocorreu um erro ao buscar todos.");
        }
    }
}


module.exports = adminService;