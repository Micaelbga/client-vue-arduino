import axios from 'axios';

const url = 'http://localhost:3000/api/cartao/'

class CartaoService {

    static async getCartoes(){
        try{
            return await axios.get(`${url}getcartoes`);
        }catch(err){
            return err.response;
        }

    }

    static async updateCartao(cartao){
        try{
            return await axios.put(`${url}updatecartao`,cartao)
        }catch(err){
            return err.response;
        }
    }
}
export default CartaoService