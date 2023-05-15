import MovimentacaoService from "@/services/MovimentacaoService";

export default {
    data(){
        return {
            headers:[
                {
                    title: 'Cartão',
                    key: 'id'
                },
                {
                    title: 'Movimentação',
                    key: 'data_movimentacao'
                },
                {
                    title: 'Usuário',
                    key: 'nome'
                },
            ],
            movimentacoes: []
        }
    },
    async created(){
        let response = await MovimentacaoService.getMovimentacoes();
        this.movimentacoes = response.data;
    }
}