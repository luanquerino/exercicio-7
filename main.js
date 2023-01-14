const form = document.getElementById('form-number');
const inputCampoA = document.getElementById('campo-a');
const inputCampoB = document.getElementById('campo-b');
let formEValido = false;


function validaCampo(campoA) {
    const numeroComoArrey = campoA.value;
    return numeroComoArrey.length < inputCampoB.value;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `O formulário foi enviado com sucesso`;

formEValido = validaCampo(campoB.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        inputCampoA.value = '';
        inputCampoB.value = '';

    }  else {
        inputCampoA.border = '2px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

    inputCampoA.value = '';
    inputCampoB.value = '';
})


