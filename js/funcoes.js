function mascara(mascara, documento) {
    let i = documento.value.length;
    let saida = mascara.substring(0,1)
    let texto = mascara.substring(i)

    if(texto.substring(0,1) != saida) {
        documento.value += texto.substring(0,1)
    }
}

function forcaSenha() {
    let senha = document.getElementById('inputPassword1').value
    let forca = 0;

    if((senha.length >= 4) && (senha.length <= 7)) {
       forca += 10;
    } else if(senha.length > 7) {
        forca += 25
    }

    if((senha.length >= 5) && (senha.match(/[a-z]+/))) {
        forca += 10
    }
    if((senha.length >= 6) && (senha.match(/[A-Z]+/)) ) {
        forca += 20 
    }
    if((senha.length >= 7) && (senha.match(/[!@#$%&*()+=|]+/)) ) {
        forca += 25
    }

    const resultado = forcadaSenha => {
        if(forcadaSenha < 30) {
            document.getElementById('imprimirForcaSenha').innerHTML = '<div class="progress">  <div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>  </div>'
        } else if(( forcadaSenha>= 30) && (forcadaSenha < 50)) {
            document.getElementById('imprimirForcaSenha').innerHTML = '<div class="progress"> <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div> </div>'
        } else if ((forcadaSenha >= 50) && ( forcadaSenha < 70)) {
            document.getElementById('imprimirForcaSenha').innerHTML = '<div class="progress"> <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> </div>'
        } else if((forcadaSenha >= 70) && ( forcadaSenha < 100)) {
            document.getElementById('imprimirForcaSenha').innerHTML = '<div class="progress"> <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div> </div>'
        }
    }

    resultado(forca)
     
}

function validarSenha() {
    let senha1 = document.getElementById('inputPassword1').value
    let senha2 = document.getElementById('inputPassword2').value 

    if(senha1 != senha2) {
      document.getElementById('senhasResultado').innerHTML = `<b style="color: red"> Senhas diferentes </b>` 
    } else {
        document.getElementById('senhasResultado').innerHTML = `<b style="color: green"> Senhas iguais </b>` 
    }
}
