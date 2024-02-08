
function comprar(){
    let tipoIngresso = document.getElementById ('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let campoNome = document.querySelector('input').value;
    campoNome.value  = '';
    //Tipo Pista
    if(tipoIngresso.value == 'pista'){
        if(campoNome == ''){
            alert ('Você não informou quantos ingressos deseja comprar')
            return;
        }
        if (qtd <= 0){
            alert ('Digite uma quantidade válida')
            document.querySelector('input').value = '';
            return;
        }
        if(qtd > qtdPista){
            alert ('Quantidade indisponível')
            document.querySelector('input').value = '';
            return;
        } else{
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            document.querySelector('input').value = '';
            alert ('Compra Realizada com sucesso')
        }
    }
    //Tipo Superior
    if(tipoIngresso.value == 'superior'){
        if(campoNome == ''){
            alert ('Você não informou quantos ingressos deseja comprar')
            return;
        }
        if (qtd <= 0){
            alert ('Digite uma quantidade válida')
            document.querySelector('input').value = '';
            return;
        }
        if(qtd > qtdSuperior){
            alert ('Quantidade indisponível')
            document.querySelector('input').value = '';
            return;
        } else{
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            document.querySelector('input').value = '';
            alert ('Compra Realizada com sucesso')
        }
    }
    //Tipo Inferior
    if(tipoIngresso.value == 'inferior'){

        if(campoNome == ''){
            alert ('Você não informou quantos ingressos deseja comprar')
            return;
        }
        if (qtd <= 0){
            alert ('Digite uma quantidade válida')
            document.querySelector('input').value = '';
            return;
        }
        if(qtd > qtdInferior){
            alert ('Quantidade indisponível')
            document.querySelector('input').value = '';
            return;
        } else{
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            document.querySelector('input').value = '';
            alert ('Compra Realizada com sucesso')
        }
    }
}