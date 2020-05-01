jQuery(document).ready(function($){
    $('#prepend-text').on('submit', function(event){
        event.preventDefault()
        var inputText = $('#input-text').val();
        $('#tasks').prepend('<p>' + inputText + '</p>');
    });
});