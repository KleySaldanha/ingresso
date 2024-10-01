function comprar(){
    let qtdIngresso = parseInt(document.getElementById('qtd').value);
    
    if(qtdIngresso <= 0 || isNaN(qtdIngresso)){
        alert('Por favor, adicione uma quantidade válida do ingresso');
        return;
    }

    comprarIngresso(qtdIngresso);

}

function comprarIngresso(qtdIngresso){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(tipoIngresso == 'inferior'){
        if(qtdInferior <= 0 || isNaN(qtdInferior)){
            alert('Esgotaram os ingressos inferior');
        } else{
            if(qtdIngresso > qtdInferior){
                alert('Quantidade indisponível!');
            } else{
            qtdInferior = qtdInferior - qtdIngresso;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert(`${qtdIngresso} ingresso${qtdIngresso > 1 ? 's' : ''} comprado${qtdIngresso > 1 ? 's' : ''} com sucesso!`);
            }
        }
        return;
    }

    if(tipoIngresso == 'superior'){
        if(qtdSuperior <= 0 || isNaN(qtdSuperior)){
            alert('Esgotaram os ingressos superior');
        } else{
            if(qtdIngresso > qtdSuperior){
                alert('Quantidade indisponível!');
            } else{
                qtdSuperior = qtdSuperior - qtdIngresso;
                document.getElementById('qtd-superior').textContent = qtdSuperior;
                alert(`${qtdIngresso} ingresso${qtdIngresso > 1 ? 's' : ''} comprado${qtdIngresso > 1 ? 's' : ''} com sucesso!`);
            }
        }
        return;
    }

    if(tipoIngresso == 'pista'){
        if(qtdPista <= 0 || isNaN(qtdPista)){
            alert('Esgotaram os ingressos pista');
        } else{
            if(qtdIngresso > qtdPista){
                alert('Quantidade indisponível!');
            } else{
                qtdPista = qtdPista - qtdIngresso;
                document.getElementById('qtd-pista').textContent = qtdPista;
                alert(`${qtdIngresso} ingresso${qtdIngresso > 1 ? 's' : ''} comprado${qtdIngresso > 1 ? 's' : ''} com sucesso!`);
            }
        }       
        return;
    }

}