<template>
    <v-container class="container">
        <v-data-table
        :headers="headers"
        :items="movimentacoes"
        item-key="id"
        class="elevation-1"
        >
        </v-data-table>
    </v-container>
</template>

<script src="./Index.js"></script>