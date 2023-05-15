import axios from 'axios';

const url = 'http://localhost:3000/api/usuario/'

class UsuarioService{

    static async postUsuario(user){
        try{
            return await axios.post(`${url}postusuario`,user);
        }catch(err){
            return err.response;
        }
    }
    
    static async getUsuarioIdByEmail(email){
        try{
            return axios.post(`${url}getusuario`,email)
        }catch(err){
            return err.response;
        }
    }

}
export default UsuarioService