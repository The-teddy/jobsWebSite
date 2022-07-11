<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md">
                <h4>Apresente a vaga para milhares de profissionais</h4>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md">
                <label class="form-label">Título da vaga</label>
                <input type="text" class="form-control" v-model="titulo">
                <div class="form-text"> Por exemplo: Programador Web Jr</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md">
                <label class="form-label">Descrição da vaga</label>
                <textarea type="text" class="form-control" v-model="descricao"> </textarea>
                <div class="form-text">Informe os detalhes da vaga</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md">
                <label class="form-label">Salário</label>
                <input type="number" class="form-control" v-model="salario">
                <div class="form-text">Informe o salário </div>
            </div>
      
        
            <div class="col-md">
                <label class="form-label">Modalidade</label>
                <select class="form-select" v-model="modalidade"> 
                    <option value="" disabled>--Selecione--</option>
                    <option value="1" class="form-option" >Home Office</option>
                    <option value="2" class="form-option" >Hibrido</option>
                    <option value="3" class="form-option" >Presencial</option>
                </select>
                <div class="form-text">Informe aonde as atividades serão realizadas</div>
            </div>

            <div class="col-md">
                <label class="form-label">Tipo de contrato</label>
                <select class="form-select" v-model="tipo" > 
                    <option value="" disabled>--Selecione--</option>
                    <option value="1" class="form-option" >Free Lancer</option>
                    <option value="2" class="form-option" >PJ</option>
                    <option value="3" class="form-option" >CLT</option>
                </select>
                <div class="form-text">Informe aonde as atividades serão realizadas</div>
            </div>
            
        </div>
         <div class="row mt-3">
            <div class="col-md">
                <button type="submit" class="btn btn-outline-dark btn-lg" @click="salvarVaga()">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
 name: 'PUBLICAR VAGA',
 data:()=>({
    titulo: '',
    descricao: '',
    salario: '',
    modalidade: '',
    tipo: '',
    alerta: 'Por favor, Preencha os campos'
 }),
 methods: {
    salvarVaga(){

        let tempoDecorrido = Date.now()
        let dataAtual = new Date(tempoDecorrido)
       
        let vagas = JSON.parse(localStorage.getItem('vagas'))

        if(!vagas) vagas = []

        vagas.push({
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo ,
        publicacao:  dataAtual.toISOString()

        })
        


        if(this.validaFormulario()){
            localStorage.setItem('vagas', JSON.stringify(vagas))

            this.emitter.emit('alerta', {
                tipo: 'sucesso',
                titulo: 'Á vaga '+this.titulo+' foi cadastrada com sucesso!',
                descricao: 'Parabéns, a vaga foi cadastrada e poderá ser consultada por milhares de profissionais'
            })
            this.resetaFormularioCadastroVaga()
        }else{
            this.emitter.emit('alerta', {
                tipo: 'erro',
                titulo: 'Não foi possível realizar o cadastro',
                descricao: 'Parece que você esqueceu de preencher alguma informação. Preencha e tente novamente'
            })
        }

        
        
    },
    resetaFormularioCadastroVaga(){
        this.titulo= '',
        this.descricao= '',
        this.salario = '',
        this.modalidade= '',
        this.tipo =''
    },
    validaFormulario(){
        let valido = true

        if(this.titulo === '') valido = false
        if(this.descricao === '') valido = false
        if(this.salario === '') valido = false
        if(this.modalidade === '') valido = false
        if(this.tipo === '') valido = false

        return valido
    }
 }
    
}
</script>

<style>

</style>