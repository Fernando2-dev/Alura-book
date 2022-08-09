async function buscarEndereco(cep){
     var mensagemError = document.getElementById('error')
     mensagemError.innerHTML = ""

    try{
    var consultaCEP =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertido = await consultaCEP.json()
    if (consultaCEPConvertido.error) { 
      throw Error ('CEP não existente !')
    }
    var cidade = document.getElementById('cidade')
    var estado = document.getElementById('estado')
    var logradouro = document.getElementById('endereco')
    
    cidade.value = consultaCEPConvertido.localidade 
    logradouro.value = consultaCEPConvertido.logradouro
    estado.value =  consultaCEPConvertido.uf

    console.log(consultaCEPConvertido) 
    return consultaCEPConvertido
    
} catch(error) {
       mensagemError.innerHTML = `<p> CEP invalido, pfvr tente novamente. </p> `
   }
}

var cep  = document.getElementById("cep")
cep.addEventListener("focusout", () => buscarEndereco(cep.value)) 
