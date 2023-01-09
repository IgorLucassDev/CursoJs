function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('{ERRO} Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var pnm = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            pnm = 'um'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src' , 'bebe2.png')
            }else if(idade < 21)
            {
                //Jovem
                img.setAttribute('src', 'jovem2.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto2.png')
            }else{
                img.setAttribute('src' ,'idoso2.png')
                //Idoso
            }
        }else{
            genero = 'mulher'
            pnm = 'uma'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe1.png')
            }else if(idade < 21)
            {
                //Jovem
                img.setAttribute('src', 'jovem1.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto1.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso1.png')
            }
        }
        
        
        res.innerHTML = `Detectamos ${pnm} ${genero} de ${idade} anos. `
        res.appendChild(img)
    }
} 