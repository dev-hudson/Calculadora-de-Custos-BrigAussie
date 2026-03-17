let listaIngredientes = [];
let custoTotalMassa = 0;

function pegarIngrediente(event) {
    event.preventDefault();
    
    let ingrediente = document.getElementById('txtIngrediente').value;
    let precoTotal = Number(document.getElementById('numberPrecoTotal').value);
    let quantidadeTotalIngredientes = Number(document.getElementById('numberQuantidadeTotal').value);
    let quantidadeUsada = Number(document.getElementById('numberQuantidadeUsada').value);
    
    let custoIngredientes = (precoTotal / quantidadeTotalIngredientes) * quantidadeUsada;

    let ingredienteCalculado = {
        nome: ingrediente,
        peso: quantidadeUsada,
        custo: custoIngredientes
    };
       
    listaIngredientes.push(ingredienteCalculado);
    
    document.getElementById('lista-ingredientes').innerHTML = "";
    let custoTotal = 0;
    
    listaIngredientes.forEach(function(ingredienteAtual) {
        
        let itemLista = document.createElement('li');
        itemLista.innerText = `${ingredienteAtual.nome} - R$ ${ingredienteAtual.custo.toFixed(2)}`;
        document.getElementById('lista-ingredientes').appendChild(itemLista);

        custoTotal += ingredienteAtual.custo;
    });
    custoTotalMassa = custoTotal;
    document.getElementById('custoTotalIngredientesSomados').innerText = `Custo total da receita: R$ ${custoTotal.toFixed(2)}`;
}

function limpar() {
    document.getElementById('txtIngrediente').value = "";
    document.getElementById('numberPrecoTotal').value = "";
    document.getElementById('numberQuantidadeTotal').value = "";
    document.getElementById('numberQuantidadeUsada').value = "";
    document.getElementById('numberMargem').value = "";

    document.getElementById('resultadoUnidade').innerText = "O custo será: R$ 0,00";
    document.getElementById('res-sugestão').innerText = "Preço de venda sugerido: R$ 0,00";
}

function calcular() {
    let pesoTotalMassa = Number(document.getElementById('numberPesoMassa').value);
    let pesoPorUnidade = Number(document.getElementById('numberPesoUnidade').value);
    let margem = Number(document.getElementById('numberMargem').value);

    let rendimento = pesoTotalMassa / pesoPorUnidade;
    let custoUnidade = custoTotalMassa / rendimento;
    let precoSugerido = custoUnidade + (custoUnidade * (margem / 100));

    document.getElementById('resultadoRendimento').innerText = rendimento.toFixed(1);
    document.getElementById('resultadoUnidade').innerText = `O custo por unidade será: R$ ${custoUnidade.toFixed(2)}`;
    document.getElementById('res-sugestão').innerText = `Preço de venda sugerido: R$ ${precoSugerido.toFixed(2)}`;
}