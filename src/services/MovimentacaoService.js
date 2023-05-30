import axios from 'axios';

const url = 'http://localhost:3000/api/movimentacao/';

class MovimentacaoService{

    static async getMovimentacoes(){
        try{
            return await axios.get(`${url}getmovimentacoes`);
        }catch(err){
            return err.response;
        }
    }
    static async deleteMovimentacao(cartaoId){
        try{
            return await axios.post(`${url}deletemovimentacao`,cartaoId);
        }catch(err){
            return err.response;
        }
    }
}
export default MovimentacaoService