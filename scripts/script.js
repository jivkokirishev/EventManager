/**
 * Created by princ on 18.9.2016 г..
 */

//Changing Background Images( too heavy )
/*    $(function ($) {
 var images = [
 '../images/background0.jpg',
 '../images/background1.jpg',
 '../images/background2.jpg',
 '../images/background3.jpg'
 ],
 amountOfImages = images.length,
 tempR = 0,
 $bg = $('#bg');

 for (let i = 0; i < amountOfImages; i++) {
 var img = new Image(),src = images[i];
 }

 function fader(){
 let r = Math.floor(Math.random()*amountOfImages);
 $('#bg').fadeOut(500, function(){
 $bg.attr('src', images[r]); //TODO: Animate the transition
 $('#bg').fadeIn(500);
 tempR = r;
 })
 }
 fader();

 setInterval(fader, 5000);
 });*/

//Background Shrink Properties
$(window).on("load", function () {
    let theWindow = $(window),
        $bg = $("#bg"),
        aspectRatio = $bg.width() / $bg.height();

    function resizeBg() {
        if ((theWindow.width() / theWindow.height()) < aspectRatio) {
            $bg.removeClass()
                .addClass('bgheight');
        } else {
            $bg.removeClass()
                .addClass('bgwidth');
        }
    }

    theWindow.resize(resizeBg).trigger("resize");
});


//Dropdown settings
function Dropdowner(idOfWrapper, idOfDropdowner, idOfContent) {
    let $userDrop = $('#' + idOfDropdowner),
        $userWrapper = $('#' + idOfWrapper),
        $dropdownMenu = $('#' + idOfContent);

    if ($('.dropdownToggle').length == 0) {
        $userDrop.show('slow', function () {
            $dropdownMenu.animate({opacity: 1}, 200);
            $dropdownMenu.show('slow');
        });
        $userWrapper.attr('class', 'buttonHeader selectedHeaderButton');
        $userDrop.attr('class', 'dropdownToggle');

    } else {
        $dropdownMenu.animate({opacity: 0}, 300, function () {
            $userDrop.hide('slow');
        });
        $userDrop.removeAttr('class', 'dropdownToggle');
        $userWrapper.removeAttr('class', 'selectedHeaderButton');
        $userWrapper.attr('class', 'buttonHeader');
    }
}

//Home Page Views
// TODO: Shorten the code by making the views in functions and using "this" as a tool
// TODO: Make escaping and add regular expressions
function loginFormView() {
    let $homeBtn = $('#homeButton'),
        $loginBtn = $('#loginButton'),
        $registerBtn = $('#registerButton'),
        $loginForm = $('#loginForm'),
        $registerForm = $('#registerForm');
    if($homeBtn.hasClass('selectedHeaderButton')) {
        $homeBtn.removeAttr('class', 'selectedHeaderButton');
        $homeBtn.attr('class', 'buttonHeader');
        $loginBtn.attr('class', 'selectedHeaderButton buttonHeader');
        $('#mainCenterText').hide('slow');
        $loginForm.show('slow');
    } else if($registerBtn.hasClass('selectedHeaderButton')) {
        $registerBtn.removeAttr('class', 'selectedHeaderButton');
        $registerBtn.attr('class', 'buttonHeader');
        $loginBtn.attr('class', 'selectedHeaderButton buttonHeader');
        $('#registerFormContent').animate({opacity: 0}, 200, function () {
            $registerForm.hide('slow', function () {
                $loginForm.show('slow');
                $('#registerFormContent').css({opacity: 1});

            });
        });
    }
}

function registerFormView() {
    let $homeBtn = $('#homeButton'),
        $loginBtn = $('#loginButton'),
        $registerBtn = $('#registerButton'),
        $loginForm = $('#loginForm'),
        $registerForm = $('#registerForm');
    if($homeBtn.hasClass('selectedHeaderButton')) {
        $homeBtn.removeAttr('class', 'selectedHeaderButton');
        $homeBtn.attr('class', 'buttonHeader');
        $registerBtn.attr('class', 'selectedHeaderButton buttonHeader');
        $('#mainCenterText').hide('slow');
        $registerForm.show('slow');
    } else if($loginBtn.hasClass('selectedHeaderButton')) {
        $loginBtn.removeAttr('class', 'selectedHeaderButton');
        $loginBtn.attr('class', 'buttonHeader');
        $registerBtn.attr('class', 'selectedHeaderButton buttonHeader');
        $('#loginFormContent').animate({opacity: 0}, 200, function () {
            $loginForm.hide('slow', function () {
                $registerForm.show('slow');
                $('#loginFormContent').css({opacity: 1});
            });
        });
    }
}

function homeView() {

    let $homeBtn = $('#homeButton'),
        $loginBtn = $('#loginButton'),
        $registerBtn = $('#registerButton'),
        $loginForm = $('#loginForm'),
        $registerForm = $('#registerForm');
    if ($loginBtn.hasClass('selectedHeaderButton')) {
        $loginBtn.removeAttr('class', 'selectedHeaderButton');
        $loginBtn.attr('class', 'buttonHeader');
        $homeBtn.attr('class', 'selectedHeaderButton buttonHeader');
        $('#loginFormContent').animate({opacity: 0}, 200, function () {
            $loginForm.hide('slow', function () {
                $('#mainCenterText').show('slow');
                $('#loginFormContent').css({opacity: 1});
            });
        });
    } else if ($registerBtn.hasClass('selectedHeaderButton')) {
        $registerBtn.removeAttr('class', 'selectedHeaderButton');
        $registerBtn.attr('class', 'buttonHeader');
        $homeBtn.attr('class', 'selectedHeaderButton buttonHeader');
        $('#registerFormContent').animate({opacity: 0}, 200, function () {
            $registerForm.hide('slow', function () {
                $('#mainCenterText').show('slow');
                $('#registerFormContent').css({opacity: 1});

            });
        });
    }
}