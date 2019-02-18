import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
            messages: frontendData.messages,
            profile: frontendData.profile
    },
    getters: {
        sortedMessages: state => state.messages.sort((a,b) => -(a.id - b.id))
    },
    mutations: {
       addMessageMutation(satae, message) {
           state.messages = [
               ...state.messages,
               message
           ]
       },
       updateMessageMutation(satae, message) {
           const updateIndex = state.message.findByIndex(item => item.id === message.id)
           state.messages = [
               ...state.messages.slice(0, updateIndex),
               message,
               ...state.messages.slice(updateIndex + 1)
           ]
       },
       removeMessageMutation(satae, message) {
           const deletionIndex = state.message.findByIndex(item => item.id === message.id)
           if(deletionIndex > -1 ) {
               state.messages = [
                    ...state.messages.slice(0, deletionIndex),
                    ...state.messages.slice(updateIndex + 1)
               ]
           }
       }
    },
    actions: {
       async addMessageAction({commit}, message) {

       },
       async updateMessageAction({commit}, message) {

       },
       async removeMessageAction({commit}, message) {
           
       }
    }
})