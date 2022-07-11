<template>
 <div>
 
  <vagas-favoritas/>
  <topo @navegar="componente = $event"/>
  <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
        <template v-slot:titulo>
          <h5>{{alerta.titulo}}</h5>
        </template>
        <p>{{alerta.descricao}}</p>      
  </alerta>
  <conteudo :conteudo="componente" />
  <div class="card-footer bg-dark mt-5 p-1 text-center">
    <p class="text-white mt-4">Desenvolvido por <strong><a href="https://www.linkedin.com/in/marcio-santos-901730223/">Marcio Augusto</a></strong></p>
  </div>
 </div>
</template>

<script>

import VagasFavoritas from './components/comuns/VagasFavoritas.vue'

import Conteudo from './components/layouts/Conteudo.vue'
import Topo from './components/layouts/Topo.vue'
import Alerta from './components/comuns/Alerta.vue'

export default {
  name: 'App',
   data: ()=>({
    visibilidade: true,
    componente: 'home',
    exibirAlerta: false,
    alerta: {alerta: '', descricao: '', tipo: ''}
  }),
  components: {
    Conteudo,
    Topo,
    VagasFavoritas,
    Alerta
},
  mounted(){
    this.emitter.on('alerta', 
    (a)=>{
      this.alerta = a
      this.exibirAlerta = true
      setTimeout(() => {
        this.exibirAlerta = false
      }, 5000);
      })
  }
  

}
</script>

<style>
</style>
