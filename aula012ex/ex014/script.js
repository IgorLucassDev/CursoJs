function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 6){
        //Nightmare
        img.src = 'imgs/foto-noite.png'
        document.body.style.backgroundColor = '#20289c'
    }else if (hora >= 0 && hora < 12){
        //Good Morning
        img.src = 'imgs/foto-manha.png'
        document.body.style.backgroundColor = '#ebe189'
    }else if (hora >=12 && hora < 18){
        //Good Afternoon
        img.src = 'imgs/foto-tarde.png'
        document.body.style.backgroundColor = '#e6a721'
    }else{
        //Good Night
        img.src = 'imgs/foto-noite.png'
        document.body.style.backgroundColor = '#20289c'
    }
  
}