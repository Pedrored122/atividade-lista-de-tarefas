$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#cTexto').val().trim();

        if (tarefa !== '') {
            const novaTarefa = $(`
                <li class="com-borda">
                    <div class="tarefas-add">
                        ${tarefa}
                    </div>
                </li>
            `);

            $('#lista-tarefas').append(novaTarefa);
            $('#cTexto').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function(){
        $(this).toggleClass('feito');
    });
});
