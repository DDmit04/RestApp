<template>
	<v-app>
        <v-toolbar app>
            <v-toolbar-title>Sarafan</v-toolbar-title>
            <v-spacer></v-spacer>
            <span v-if="profile">{{profile.name}}</span>
            <v-btn v-if="profile" icon href="/logout">
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container v-if="!profile">
			    need autorize <a href="/login">Google</a>
		    </v-container>
            <v-container v-if="profile">
		    	<messages-list/>
		    </v-container>
        </v-content>
	</v-app>
</template>

<script>

    import { mapState, mapMutations } from 'vuex'
    import MessagesList from 'components/messages/MessageList.vue'
    import { addHandler } from 'util/ws'
    
    export default {
    	components: {
    		MessagesList
        },
        methods: mapMutations( ['addMessageMutation', 'updateMessageMutation', 'removeMessageMutation'] ),
        computed: mapState(['profile']),
        created() {
        	addHandler(data => {
                if(data.objectType === 'MESSAGE') {
                    switch(data.eventType) {
                        case 'CREATE':
                            this.addMessageMutation(data.body)
                            break
                        case 'UPDATE':
                            this.updateMessageMutation(data.body)
                            break
                        case 'REMOVE':
                            this.removeMessageMutation(data.body)
                            break
                        default: consile.error('uknown event type "${data.eventType}"')
                    }
                } else {
                    consile.error('uknown object type "${data.objectType}"')
                }
        	})
        }
    }
</script>

<style>
	
</style>