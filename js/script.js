$('#aboutme').hide();

$('#li1').click(function () {
    $('#myarticles').show();
    $('#aboutme').hide();
    $('#li1').css('text-decoration', 'underline');
    $('#li2').css('text-decoration', 'none');
});

$('#li2').click(function () {
    $('#myarticles').hide();
    $('#aboutme').show();
    $('#li1').css('text-decoration', 'none');
    $('#li2').css('text-decoration', 'underline');
});
