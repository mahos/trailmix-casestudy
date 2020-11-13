$(document).ready(function() {
    console.log('document ready pausing carousel')
    $('#trailmixStoryBoard').carousel({
        interval: 0
    });
    $('#designIterations').carousel({
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

$('#csModal').on('show.bs.modal', function (event) {
    if ($(window).width() < 576) {
        console.log('window size to small!')
        event.preventDefault();
    }
    console.log('modal stopped')
    var button = $(event.relatedTarget) // Button that triggered the modal
    var dataInfo = button.data('src');
    console.log(dataInfo)
    var modal = $(this)
    if (dataInfo.length > 1) {
        modal.find('.modal-body').html(`<iframe width=${dataInfo[1]} height=${dataInfo[2]} src=${dataInfo[0]} frameborder="0" allowfullscreen></iframe>`);
    } else {
        modal.find('.modal-body').html(`<img src=${dataInfo[0]} width="100%">`)
    }
  })

