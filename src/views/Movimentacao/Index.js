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
        for(var i = 0; i< response.data.length; i++){
            let date = new Date(response.data[i].data_movimentacao);
            response.data[i].data_movimentacao = `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')}/${date.getFullYear()} - ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}`
        }
        this.movimentacoes = response.data;
    }
}