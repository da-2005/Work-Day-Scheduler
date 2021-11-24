var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));

$(document).ready(function(){
    $('.saveBtn').on('click', function(){
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
})