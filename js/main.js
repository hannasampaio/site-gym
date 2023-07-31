$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(__) _____-____'
    })

    $('form').validate({
        rules:{
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: false,
            },
            mensagem: {
                required: true,
            },
        },
        messages:{
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu e-mail.',
            mensagem: 'Por favor, insira sua mensagem.',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existe(m) ${camposIncorretos} campo(s) incorreto(s)`)
            }
        }
    })
})

