$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();  // Impede o envio do formulário

        const novaTarefa = $('#tarefas').val();

        if (novaTarefa.trim() !== '') {
            const novoItem = $(`
                <li>
                    ${novaTarefa}
                    <button class="remover">X</button>
                </li>
            `);
            
            $('#lista-de-tarefas').append(novoItem);
            $('#tarefas').val('');
        }
    });

    // Riscado ao clicar na tarefa (li)
    $('#lista-de-tarefas').on('click', 'li', function(e) {
        // Evita riscar ao clicar no botão de remover
        if (!$(e.target).hasClass('remover')) {
            $(this).toggleClass('riscado');
        }
    });

    // Remover tarefa ao clicar no botão X
    $('#lista-de-tarefas').on('click', '.remover', function(e) {
        e.stopPropagation(); // Evita ativar o riscado ao apagar
        $(this).parent().remove(); // Remove o <li> inteiro
    });
});