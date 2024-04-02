function buscaCep(){
    let cep = document.getElementById("cep").value;

    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

        let req = new XMLHttpRequest();
        req.open ("GET", url);
        req.send ();

        //trata resposta

        req.onload = function(){
            if(req.status === 200){
                let endereco = JSON.parse(req.response);

                document.getElementById("rua").value = endereco.street;
                document.getElementById("bairro").value = endereco.neighborhood;
                document.getElementById("city").value = endereco.city;
            }else if(req.status = 404){
                alert("CEP inválido");
            }else{
                alert("Erro de requisição com API");
            }
        }

    }

}

window.onload = function() {
    let newcep = document.getElementById("cep");
    newcep.addEventListener("blur", buscaCep);
}