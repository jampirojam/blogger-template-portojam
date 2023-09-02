// jQuery
$(function() {
    $('.show-menu').click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $('.show').not('#show-' + $(this).attr('target')).hide();
        $('#show-' + $(this).attr('target')).show();
        $('.main').hide();
    });

    $('#header').click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $('.main').show();
        $('.show').hide();
        $('.curriculum-vitae').hide();
    });

    $("#reset-button").click(function(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
		$("textarea").val("");
        $(".whatsapp-preview").html("");
	});

    $('#whatsapp').on('keydown, keyup', function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var texInputValue = $('#whatsapp').val();
        
        texInputValue = texInputValue
            .replace(/\r\n|\r|\n/g,"<br/>")
            .replace(/b>>/g,"<b>")
            .replace(/\*>/g,"</b>")
            .replace(/i>>/g,"<i>")
            .replace(/_>/g,"</i>");

        $('.whatsapp-preview').html(texInputValue);
    });
    
    var projectCount = $('.project-list').length;
    if (projectCount < 3) {
        $('.project-wrapper').css('justify-content', 'space-evenly');
    }
});

// Pure JS
function getWhatsAppUrl() {
    var whatsAppText = document.getElementById('whatsapp').value;
 
    whatsAppText = whatsAppText
        .replace(/\r\n|\r|\n/g,"%0A")
        .replaceAll('b>>',"*")
        .replaceAll('*>',"*")
        .replaceAll('i>>',"_")
        .replaceAll('_>',"_");

    window.open('https://api.whatsapp.com/send?phone=628388886086&text=' + whatsAppText, '_blank');
}