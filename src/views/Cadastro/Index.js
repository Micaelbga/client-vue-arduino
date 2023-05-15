import UsuarioService from "@/services/UsuarioService";
import CartaoService from "@/services/CartaoService";

export default {
    data(){
        return{
            cartao: {
                id: null,
                userId: null   
            },
            user: {
                nome: null,
                matricula: null,
                email: null,
                telefone: null,
            }
        }
    },
    created(){
        this.cartao.id = this.$route.params.cartaoId
    },
    methods:{
        async createUser(){
            let response = await UsuarioService.postUsuario(this.user);
            switch(response.status){
                case 200:                    
                    let responseUserId = await UsuarioService.getUsuarioIdByEmail(this.user.email);
                    this.cartao.userId = responseUserId.data[0].id
                    console.log(this.cartao);
                    await CartaoService.updateCartao(this.cartao)
                    this.$router.push('/')
                    break;
                case 404:
                    console.log(response);
                    break;
                case 500:
                    console.log(response);
                    break;
            }
        }
    }
}