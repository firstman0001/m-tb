$(document).ready(function () {
    $(document).on("click",
        'form .kessel-flush',
        function (event) {
            event.preventDefault();
            cdApi.client.flush();
            $(this).submit();
        });
    //end of ready
});