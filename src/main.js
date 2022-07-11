import { createApp } from 'vue'
import App from './App.vue'

//importa o mitt
import mitt from 'mitt'

//criar uma instância do mitt
const emitter = mitt()

//iniciar a instância do vue com base no componente
// createApp(App).mount('#app')

const app = createApp(App);

//configurar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponível para todas as intâncias de componente dentro do app
app.config.globalProperties.emitter = emitter

//associar a instância do vue com o elementro html pelo id #app
app.mount('#app');