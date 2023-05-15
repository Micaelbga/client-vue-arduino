<template>
    <v-container class="container">
        <v-form>
            <v-container>
                <v-col>
                    <v-row>
                        <v-text-field v-model="user.nome" label="Nome" required>

                        </v-text-field>
                        <v-text-field v-model="user.matricula" label="Matricula" required>

                        </v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field v-model="user.email" label="Email" required>

                        </v-text-field>
                        <v-text-field v-model="user.telefone" label="Telefone" required>

                        </v-text-field>
                    </v-row>
                    <v-btn @click="createUser">
                        Cadastrar
                    </v-btn>
                </v-col>
            </v-container>
        </v-form>
    </v-container>
</template>

<script src="./Index.js"></script>

<style scoped>

.container{
    margin-top: 150px;
}
.column{
    display:flex;
}
</style>