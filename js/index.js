$(document).ready(function() {
    console.log('document ready pausing carousel')
    $('#trailmixStoryBoard').carousel({
        interval: 0
    });
})

$('.card').click(function() {
    $(this).find('.rotation-plane').toggleClass('flip')


    if ($(this).find($('.rotation-plane')).hasClass('flip')) {
        $(this).find($('.frontside')).addClass('hideMe').css({transition: 'visibility 0.2s ease-in'});
    } else {
        $(this).find($('.frontside')).removeClass('hideMe');
    }
})

