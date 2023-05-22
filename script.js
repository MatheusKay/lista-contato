const form = document.getElementById("form-contatos")
const contatos = []
const numero = []

let linhas = ""

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizarTabela();
})

function adicionaLinha() {
    const nomeContato = document.getElementById("nome-contato")
    const numeroContato = document.getElementById("numero-contato")

    if(contatos.includes(nomeContato.value)){
        alert(`O Contato: ${nomeContato.value} ja foi adicionado. Por favor confira na Lista de Contatos`)
    }else if (numero.includes(parseInt(numeroContato.value))){
        alert(`O Numero: ${numeroContato.value} ja foi adicionado. Por favor confira na Lista de Contatos`)
    }else{
        contatos.push(nomeContato.value)
        numero.push(parseInt(numeroContato.value))
        
        let linha = `<tr>`
        linha += `<td>${nomeContato.value}</td>`
        linha += `<td> ${numeroContato.value}</td>`
        linha += `<tr>`

        linhas += linha
    }
    nomeContato.value = ""
    numeroContato.value = ""
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
    $('#telefone').mask('(00) 00000-0000')
}

