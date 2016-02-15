
// JavaScript Document

// $('.btn-subjects').on('click', function(){
//    alert($(this).find('input').attr('subjects-select'));
// });

 $('[data-toggle="price-buttons"]').change(function(event) {
        if ($(this).is(":checked")) {
             $(this).addClass('btn-subjects-select');
        }
        else {
             $(this).removeClass('btn-subjects-select');
        }
    });