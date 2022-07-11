<template l>
    <div class="card">
            <div class="card-header bg-dark text-white">
                <div class="row">
                    <div class="col d-flex justify-content-between">
                        <div>
                            {{titulo}}
                        </div>
                        <div>
                            <div class="form-check form-switch">
                                <input type="checkbox" class="form-check-input" v-model="favoritada">
                                <label class="form-check-label">Favoritar</label>
                            </div>
                        </div>
                    </div>
                </div>


                </div>
            <div class="card-body">
                <p>{{descricao}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">
                    Salário: {{salario}} | Modalidade: {{getModalidade}} | Tipo: {{getTipo}} | Publicação: {{getPublicacao}}
                </small>
            </div>
    </div>

</template>
<script>
export default {
    name: 'VAGA',
    data:()=>({
        favoritada: false
    }),
    watch: {
        favoritada(valorNovo){
            if(valorNovo){
                this.emitter.emit('favoritarVaga', this.titulo)
            }else{
                this.emitter.emit('desFavoritarVaga', this.titulo)
            }
        }
    }, 
    // props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao']
    props:{
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        salario: {
            type: Number,
            required: true
        },
        modalidade: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        publicacao: {
            type: String,
            required: true
        },
    },
    computed:{
        getModalidade(){
            switch(this.modalidade){
                case '1': return 'Home Office'
                case '2': return 'Hibrido'
                case '3': return 'Presencial'
            }
            return ''           
        },
        getTipo(){
            switch(this.tipo){
                case '1': return 'Free Lancer'
                case '2': return 'PJ'
                case '3': return 'CLT'
            }
            return ''
        },
        getPublicacao(){
            let dataPublicacao = new Date(this.publicacao)
            return dataPublicacao.toLocaleString('pt-BR')
        }
    }
}
</script>
<style lang="">
    
</style>