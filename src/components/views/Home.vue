<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <pesquisar-vaga/>
            </div>         
        </div>

        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col-md">
                <vaga v-bind="vaga"/>               
            </div>
            
        </div>

        <div class="row mt-5">
            <div class="col-md-4">
                <indicador titulo="Vagas Abertas" indicador="100" bg="bg-dark" color="text-white"/>
            </div>
            <div class="col-md-4">
                <indicador titulo="Profissionais cadastrados" indicador="225" bg="bg-dark" color="text-white" />
            </div>
            <div class="col-md-4">
               <indicador titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-dark" />
               
            </div>
        </div>
    </div>
</template>

<script>
import Indicador from '../comuns/Indicador.vue'
import PesquisarVaga from '../comuns/PesquisarVaga.vue'
import Vaga from '../comuns/Vaga.vue'

export default {
  components: { PesquisarVaga, Indicador, Vaga },
  name: 'HOME',
  data: ()=>({
    usuariosOnline: 10,
    vagas: []
  }),
  methods: {
    getUsuariosOnline(){
        this.usuariosOnline = Math.floor(Math.random() * 101)
    }
  },
  created() {
    setInterval(this.getUsuariosOnline, 60000)
  },
  activated(){
    this.vagas = JSON.parse(localStorage.getItem('vagas'))
  },
  mounted(){
    this.emitter.on('filtrarVagas', vaga =>{
        const vagas = JSON.parse(localStorage.getItem('vagas'))
       this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
    })
  }
}
</script>

<style scoped>
</style>