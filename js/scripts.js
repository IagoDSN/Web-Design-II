
// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Initialize popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

// verifica email
function verificaEmail() {
    const emailInput = document.getElementById('email');
    const resultado = document.getElementById('resultado1');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(emailInput.value)) {
        resultado.innerHTML = "Email válido";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Email inválido";
        resultado.style.color = "red";
    }
};

// mostrar senha
function mostraSenha(idCampoSenha) {
    const senhaInput = document.getElementById(idCampoSenha);
    const olhoIcone = document.getElementById(`olhoIcone${idCampoSenha.charAt(idCampoSenha.length - 1)}`);

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        olhoIcone.classList.remove('fa-eye');
        olhoIcone.classList.add('fa-eye-slash');
    } else {
        senhaInput.type = 'password';
        olhoIcone.classList.remove('fa-eye-slash');
        olhoIcone.classList.add('fa-eye');
    }
};


// valida senha
const comprimentoMinimo = 8; // Defina o comprimento mínimo desejado

function validaSenha1() {
    const senha1 = document.getElementById('senha1').value;
    const resultadoSenha1 = document.getElementById('resultado2');

    // Expressões regulares
    const temMaiuscula = /[A-Z]/.test(senha1);
    const temNumero = /[0-9]/.test(senha1);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha1);

    if (senha1.length < comprimentoMinimo) {
        resultadoSenha1.innerHTML = "A senha deve ter pelo menos " + comprimentoMinimo + " caracteres.";
        resultadoSenha1.style.color = "red";
    } else if (!temMaiuscula) {
        resultadoSenha1.innerHTML = "A senha deve conter pelo menos uma letra maiúscula.";
        resultadoSenha1.style.color = "red";
    } else if (!temNumero) {
        resultadoSenha1.innerHTML = "A senha deve conter pelo menos um número.";
        resultadoSenha1.style.color = "red";
    } else if (!temEspecial) {
        resultadoSenha1.innerHTML = "A senha deve conter pelo menos um caractere especial.";
        resultadoSenha1.style.color = "red";
    } else {
        resultadoSenha1.innerHTML = "Senha válida!";
        resultadoSenha1.style.color = "green";
    }
}

function validaSenha2() {
    const senha1 = document.getElementById('senha1').value;
    const senha2 = document.getElementById('senha2').value;
    const resultadoSenha2 = document.getElementById('resultado3');

    // Expressões regulares
    const temMaiuscula = /[A-Z]/.test(senha2);
    const temNumero = /[0-9]/.test(senha2);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha2);

    if (senha2.length < comprimentoMinimo) {
        resultadoSenha2.innerHTML = "A senha deve ter pelo menos " + comprimentoMinimo + " caracteres.";
        resultadoSenha2.style.color = "red";
    } else if (!temMaiuscula) {
        resultadoSenha2.innerHTML = "A senha deve conter pelo menos uma letra maiúscula.";
        resultadoSenha2.style.color = "red";
    } else if (!temNumero) {
        resultadoSenha2.innerHTML = "A senha deve conter pelo menos um número.";
        resultadoSenha2.style.color = "red";
    } else if (!temEspecial) {
        resultadoSenha2.innerHTML = "A senha deve conter pelo menos um caractere especial.";
        resultadoSenha2.style.color = "red";
    } else if (senha1 === senha2) {
        resultadoSenha2.innerHTML = "Senhas coincidem!";
        resultadoSenha2.style.color = "green";
    } else {
        resultadoSenha2.innerHTML = "Senhas não coincidem!";
        resultadoSenha2.style.color = "red";
    }
}

// máscaras para os campos
$(document).ready(function () {
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $("#cep").mask("99.999-999");
    $("#tel").mask("(99) 9999-9999");
    $("#cel").mask("(99) 99999-9999");
});

// valida cpf

function verificarCPF() {
    const cpfInput = document.getElementById('cpf');
    const resultado = document.getElementById('resultado4');
    const cpf = cpfInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (cpf.length !== 11 || !validarCPF(cpf)) {
        resultado.innerHTML = "CPF inválido";
        resultado.style.color = "red";
    } else {
        resultado.innerHTML = "CPF válido";
        resultado.style.color = "green";
    }
}

function validarCPF(cpf) {
    let soma = 0;
    let resto;

    if (cpf === '00000000000') return false;

    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
};

// consulta CEP
function consultarCEP() {
    const cepInput = document.getElementById('cep');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');
    const mensagemErro = document.getElementById('mensagemErro');

    const cep = cepInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (cep.length !== 8) {
        // CEP inválido
        cidadeInput.value = '';
        estadoInput.value = '';
        mensagemErro.textContent = 'CEP inválido';
        return;
    }

    // Limpa a mensagem de erro ao iniciar a consulta
    mensagemErro.textContent = '';

    // Faz a consulta na API (substitua pela sua própria API, se necessário)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                cidadeInput.value = data.localidade;
                estadoInput.value = data.uf;
            } else {
                cidadeInput.value = '';
                estadoInput.value = '';
                mensagemErro.textContent = 'CEP não encontrado';
            }
        })
        .catch(error => {
            console.error('Erro na consulta de CEP:', error);
            mensagemErro.textContent = 'Erro na consulta de CEP';
        });
};