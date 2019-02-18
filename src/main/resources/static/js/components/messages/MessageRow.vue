<template>
    <v-card class="my-2">
        <v-card-text primary-titile>
            <i>({{ message.id }})</i> 
            {{ message.text }}
        </v-card-text>
        <v-card-action>
            <v-btn @click="edit" small flat>
                Edit
            </v-btn>
            <v-btn icon @click="del" small flat round>
                <v-icon>delete</v-icon>
            </v-btn>
        </v-card-action>
    </v-card>    
</template>

<script>
export default {
    props: ['message', 'editMessage', 'deleteMessage', 'messages'],
    methods: {
        edit() {
            this.editMessage(this.message)
        },
        del() {
           this.deleteMessage(this.message)
        }
    }
}
</script>

<style>

</style>
