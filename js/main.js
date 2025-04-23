$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: 'Insira seu nome, por favor!',
            email: 'Insira seu email, por favor!',
            telefone: 'Informe seu telefone, por favor!',
            endereco: 'Informe seu endereço, por favor!',
            cep: 'Insira seu cep, por favor!',
            cpf: 'Informe seu cpf, por favor!',
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})
