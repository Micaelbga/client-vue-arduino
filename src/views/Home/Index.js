import CartaoService from "@/services/CartaoService";
import MovimentacaoService from "@/services/MovimentacaoService";

export default {
    data(){
        return {
            cartoes:[],
            dialogDelete:false,
            idCartaoDelete: null,
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
        dialogShow(idCartao){
            this.dialogDelete = true;
            this.idCartaoDelete = idCartao;
        },
        async deletarCartao(){
            this.dialogDelete = false;
            let response = await MovimentacaoService.deleteMovimentacao(this.idCartaoDelete);
            switch(response.status){
                case 200:
                    await CartaoService.deletarCartao(this.idCartaoDelete);
                    location.reload();
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
        }
    }
}