$(document).ready(function() {
    console.log('document ready pausing carousel')
    $('#trailmixStoryBoard').carousel({
        interval: 0
    });
    $('#designIterations').carousel({
        interval: 0
    });
    console.log('listening to slider drag')
    activateSlider();
});

$('.card').click(function() {
    $(this).find('.rotation-plane').toggleClass('flip')


    if ($(this).find($('.rotation-plane')).hasClass('flip')) {
        $(this).find($('.frontside')).addClass('hideMe').css({transition: 'visibility 0.2s ease-in'});
    } else {
        $(this).find($('.frontside')).removeClass('hideMe');
    }
});

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
});


var xs = window.matchMedia("(max-width: 575px)")
var sm = window.matchMedia("(max-width: 767px)")
var md = window.matchMedia("(max-width: 991px)")
var lg = window.matchMedia("(min-width: 1200px)")
xs.addEventListener('change', function() {
    activateSlider();
});
sm.addEventListener('change', function() {
    activateSlider();
});
md.addEventListener('change', function() {
    activateSlider();
});
lg.addEventListener('change', function() {
    activateSlider();
});




function activateSlider() {
    var sheet = $('.taggables-tile .overlay')
    sheet.css({'width': '100%', 'height':'100%'}) // reseting the overlay width
    var clicked;
    var overlayW = sheet.outerWidth();
    var overlayH = sheet.outerHeight();
    console.log('sheetW:', overlayW, ' sheetH: ', overlayH);
    sheet.css('width', `${overlayW/8}px`) // set a small peak
    expandIcon = `<svg width="24px" height="30px" style="transform:rotate(90deg);color:rgba(255,255,255,0.7)" viewBox="0 0 16 16" class="bi bi-chevron-expand" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/></svg>`

    // expandIcon = `<svg width="30px" height="30px" style="transform:rotate(90deg);color:rgba(255,255,255,0.7)" viewBox="0 0 16 16" class="bi bi-chevron-bar-expand" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.646 10.146a.5.5 0 0 1 .708 0L8 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-4.292a.5.5 0 0 0 .708 0L8 2.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z"/></svg>`
    sheet.parent().prepend("<div class='slider-handle'>" + expandIcon + "</div>")
    $('.slider-handle').css({
        // 'top': `${overlayH/2 - $(this).outerHeight/2}px`, 
        // 'left': `${overlayW/2 - $(this).outerWidth/2}px`
        'top': `${overlayH/2 - ($('.slider-handle').outerHeight()/2)}px`, 
        'left': `${overlayW/8 - ($('.slider-handle').outerWidth()/2)}px`
    });
    
    $('.slider-handle').on('mousedown', sliderReady);
    $('.slider-handle').on('touchstart', sliderReady);
    $(window).on('mouseup', sliderDone);
    $(window).on('touchend', sliderDone);

    function getCursorXpos(e) {
        e = e || window.event;
        // console.log('sheet.left pos: ', sheet.offset().left)
        // console.log('mouse X: ', e.pageX);
        var relX = e.pageX - sheet.offset().left - window.pageXOffset;
        // console.log('scroll amount: ', window.pageXOffset)
        // console.log('relX: ', relX);
        return relX;
    }

    function moveSlider(e) {
        if (clicked == 0) return false;
        var cursorPos = getCursorXpos(e);
        if (cursorPos < 0) pos = 0;
        if (cursorPos > overlayW) cursorPos = overlayW;

        sheet.css('width', `${cursorPos}px`);
        $('.slider-handle').css('left', `${sheet.outerWidth() - ($('.slider-handle').outerWidth()/2)}px`)
    }

    function sliderReady(e) {
        e.preventDefault();
        clicked = 1;
        $(window).on('mousemove', moveSlider);
        $(window).on('touchmove', moveSlider);
    }

    function sliderDone() {
        clicked = 0;
    }
}

