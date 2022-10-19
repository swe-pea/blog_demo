import { createApp,h } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    //cache,
    uri: 'http://127.0.0.1:8000/graphql'
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

const app = createApp({
    render: () => h(App),
}).use(router)

app.user(router)
app.user(apolloProvider)
app.mount('#app')
