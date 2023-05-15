<template>
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
            <v-btn @click="($event) => deletarCartao(item.raw.id, $event)">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </template>
        </v-data-table>
    </v-container>
</template>

<script src="./Index.js"></script>

<style>
.container{
    margin-top: 150px;
}
</style>