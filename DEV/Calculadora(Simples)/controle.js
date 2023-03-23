function inserir(num)
{    
    let resultado = document.getElementById('resultado').innerHTML;
    

    if (num > 999999999999999){
        document.getElementById('resultado').innerHTML = "Valor excedido!"
    }
    else{
        document.getElementById('resultado').innerHTML = resultado + num;
    }
    
}
function limpar()
{
    document.getElementById('resultado').innerHTML = "";
}
function voltar()
{
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}