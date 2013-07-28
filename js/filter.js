$(document).ready(function() {
    if($('#fileList').length) {
        var uploadPosition = $('.actions #upload').position();
        $('.actions #upload').after($('<div id="filter">')
            .append($('<input type="text" placeholder="' + t('files_quicksearch', 'Filter') + '" />')
            .css({'margin-left': '3px'})
            .keyup(function(e) {
                var search = $(this).val().toLowerCase();
                $('#fileList>tr').hide().filter(function() {
                    return ($(this).attr('data-file').toLowerCase().indexOf(search) != -1);
                }).show();
            })));
        $('#select_all').click(function(event) {
            if($(this).attr('checked')){
                $('#fileList>tr:not(:hidden)').addClass('selected').find('td.filename input:checkbox').attr('checked', true);
                procesSelection();
                event.stopImmediatePropagation();
            }
        });
    }
});
