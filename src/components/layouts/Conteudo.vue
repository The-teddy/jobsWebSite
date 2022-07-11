<template>
    <div>      
        <keep-alive>
        <component :is="conteudo"></component>
        </keep-alive>       
    </div>
</template>

<script>
import Home from '../views/Home.vue'
import PublicarVaga from '../views/PublicarVaga.vue'

export default {
  props: {
    conteudo: {
    type: String,
    required: true
    }
  },
  components: { Home, PublicarVaga },
  name: 'CONTEUDO'
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
 body{
    padding-top: 20px;
 }
}   
</style>