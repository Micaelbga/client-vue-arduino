<template>
    <div>
        <v-dialog v-model="dialogDelete">
            <div
            style="
                margin: 0 auto;
                width: 650px;
                height: 250px;
                background-color: white;
                display: flex;
                flex-wrap: wrap;
                align-content: space-around;
                justify-content: center;
            ">
                <h1>Deseja apagar esse cartão do banco?</h1>
                <div>
                    <v-btn @click="dialogDelete = false">
                        Cancelar
                    </v-btn>
                    <v-btn @click="deletarCartao()">
                        Confirmar
                    </v-btn>
                </div>
            </div>
        </v-dialog>
        <v-container class="container">
            <v-data-table
            :headers="headers"
            :items="cartoes"
            item-key="id"
            class="elevation-1"
            >
            <template v-slot:item.action="{ item }">
                <v-btn @click="($event) => editarCartao(item.raw.id, $event)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn @click="($event) => dialogShow(item.raw.id, $event)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
            </v-data-table>   
        </v-container>
    </div>
</template>

<script src="./Index.js"></script>

<style scoped>
.container{
    margin-top: 150px;
}
</style>