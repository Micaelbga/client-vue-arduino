import CartaoService from "@/services/CartaoService";

export default {
    data(){
        return {
            cartoes:[],
            headers:[
                {
                    title:"Código cartão",
                    key:"id",
                    //value:"id"
                },
                {
                    title:"Usuário",
                    key:"nome",
                    //value:"usuario_id"
                },
                {
                    title:"Ações",
                    key:"action",
                    //value:"action"
                }
            ]
        }
    },
    async created(){
        let response = await CartaoService.getCartoes();
        switch(response.status){
            case 200:
                this.cartoes = response.data
                break;
            case 404:
                console.log(response);
                break;
            case 500:
                console.log(response);
                break;
            default:
                break;
        }
    },
    methods:{
        editarCartao(idCartao){
            this.$router.push(`/cadastro/${idCartao}`)
            
        },
        deletarCartao(idCartao){
            
        }
    }
}