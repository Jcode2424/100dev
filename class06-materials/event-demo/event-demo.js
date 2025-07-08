/* $('.notice-close').on('click', function(event){
    $('.notice-warning').remove();
}); */
$('.notice-close').on('click', function(event){
    $('.notice-warning').fadeOut('slow', function(event) {
        $(this).remove();
    });
});