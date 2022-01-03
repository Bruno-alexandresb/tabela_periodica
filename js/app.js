function expoElemento(n, l, nome, grupo){
    
    /*
     * n = número atômico
     * l = sigla
     * nome = elemento
     * grupo = a qual grupo pertence
    */
    this.n = n
    this.l = l
    this.nome = nome
    this.grupo = grupo

    this.criaElemento = function (){

        //saber a qual grupo o elemento pertence para usar a class respectiva ao css
        if(grupo === "nao-metal"){
            document.getElementById('section').className = "nao-metal"
        }else if(grupo === "gas-nobre"){
            document.getElementById('section').className = "gas-nobre"
        }else if(grupo === "metal-alcalino"){
            document.getElementById('section').className = "metal-alcalino"
        }else if(grupo === "metal-alcalino-terroso"){
            document.getElementById('section').className = "metal-alcalino-terroso"
        }else if(grupo === "semimetal"){
            document.getElementById('section').className = "semimetal"
        }else if(grupo === "halogenio"){
            document.getElementById('section').className = "halogenio"
        }else if(grupo === "outros-metais"){
            document.getElementById('section').className = "outros-metais"
        }else if(grupo === "metal-transicao"){
            document.getElementById('section').className = "metal-transicao"
        }else if(grupo === "lantanideo"){
            document.getElementById('section').className = "lantanideo"
        }else if(grupo === "actinidio"){
            document.getElementById('section').className = "actinidio"
        }
        //trabalhando com o dom
        document.getElementById('span').innerHTML = n
        document.getElementById('elemento').innerHTML = l
        document.getElementById('nome').innerHTML = nome
        document.getElementById('grupo').innerHTML = grupo
    }
}

//recebendo parâmetros do index
function elem(n, l , nome, grupo){
    
    let novo = new expoElemento(n, l, nome, grupo)

    novo.criaElemento()
}