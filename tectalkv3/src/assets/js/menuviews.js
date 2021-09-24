$(document).ready(function(e) {

    /*$('[data-launch-view]').click(function(e) {
        e.preventDefault();
        var viewName = $(this).attr('data-launch-view');
        showView(viewName);
    });

    function showView(viewName) {
        $('.page').hide();
        $('#' + viewName).show();
    }*/

    $("#about").on('click', function() {
        $("#about").toggleClass('active');
        $("#about-box").toggleClass('show');
        $("#files").removeClass('active');
        $("#files-box").removeClass('show');
    });

    $("#files").on('click', function() {
        $("#files").toggleClass('active');
        $("#about").removeClass('active');
        $("#about-box").removeClass('show');
        $("#files-box").toggleClass('show');
    });

});