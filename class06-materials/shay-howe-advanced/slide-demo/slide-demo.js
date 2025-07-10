$('.panel-tab').on('click', function(event){
    event.preventDefault();
    $('.panel-stage').slideToggle('slow', function(event){
        if($(this).is(':visible')){
            $('.panel-tab').html('Close <span>&#9650;</span>');
        } else {
            $('.panel-tab').html('Open <span>&#9660;</span>');
        }
    });
});