$(document).ready(function(e) {

    $('[data-launch-view]').click(function(e) {
        e.preventDefault();
        var viewName = $(this).attr('data-launch-view');
        showView(viewName);
    });

    function showView(viewName) {
        $('.page').hide();
        $('#' + viewName).show();
    }

});