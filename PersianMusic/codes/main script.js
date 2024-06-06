theme_mode = 'dark'
pause_mode = 'no'
menu_mode = 'no'
like_mode= 'no'
pf_mode = 'no'

left_side1 = $("#left-side1");
left_side2 = $("#left-side2");

r = document.querySelector(':root');
sun = document.getElementById("sun");
moon = document.getElementById("moon");

fill = document.getElementById("like-fill");
not_fill = document.getElementById("like-not-fill");

played = document.getElementById("played");
paused = document.getElementById("paused");

playlist = document.getElementById("add-playlist");

header = document.querySelector("header");

profile_dropbox = document.getElementById("profile-dropbox");
down = document.getElementById("down");
up = document.getElementById("up");

$(document).ready(function(){
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) { theme_mode = 'light', set_theme() }
    else { theme_mode = 'dark', set_theme() }

    $(".mode").click(function(){ set_theme() });

    function set_theme() {
        if (theme_mode == 'light'){
            sun.style.display = "block";
            moon.style.display = "none";
            $(":root").css({'--bg-color': '#181818','--second-bg-color': '#282828',
                            '--third-bg-color': '#383838','--text-color': '#fff'});
            theme_mode = 'dark'}
        else{
            sun.style.display = "none";
            moon.style.display = "block";
            $(":root").css({'--bg-color': 'whitesmoke','--second-bg-color': 'rgb(220, 220, 220)',
                            '--third-bg-color': 'rgb(200, 200, 200)','--text-color': 'black'});
            theme_mode = 'light'}
        }

    // ------------------

    $(".like-btn").click(function(){ liked() });
    function liked() {
        if (like_mode == 'yes'){
            not_fill.style.display = "block";
            fill.style.display = "none";
            like_mode = 'no'}
        else{
            not_fill.style.display = "none";
            fill.style.display = "block";
            like_mode = 'yes'}
    }
    
    // ------------------

    $(".play-btn").click(function(){ pause() });
    function pause() {
        if (pause_mode == 'yes'){
            played.style.display = "block";
            paused.style.display = "none";
            pause_mode = 'no'}
        else{
            played.style.display = "none";
            paused.style.display = "block";
            pause_mode = 'yes'}
    }

    // ------------------

    $(".add_btn").click(function() { playlist.style.display = "block"; });
    $(".close-add-playlist").click(function() { playlist.style.display = "none"; });

    // ------------------

    $(window).on( "resize", function() {
        resize()
    });
    resize()

    function resize(){
        if ($(window).width() > 1040) {
            left_side1.css("display", "flex");
            left_side2.css("display", "none");
            menu_mode = 'no'} 
        else if ($(window).width() > 440){
            left_side1.css("display", "none");
            left_side2.css("display", "flex");
            menu_mode = 'no'
            }
        else{
            left_side1.css("display", "none");
            left_side2.css("display", "none");}
    }

    // ------------------

    $(".left-arrow").click(function(){
        if (menu_mode == 'no'){
            left_side1.css("display", "flex");
            left_side2.css("display", "none");
            menu_mode = 'yes'}
        else{
            left_side1.css("display", "none");
            left_side2.css("display", "flex");
            menu_mode = 'no'}
    });

    // ------------------

    $(".dropbox-btn").click(function(){ pf_dropbox() });
    function pf_dropbox() {
        if (pf_mode == 'no'){
            profile_dropbox.style.display = "block";
            down.style.display = "none";
            up.style.display = "block";
            pf_mode = 'yes'}
        else{
            profile_dropbox.style.display = "none";
            down.style.display = "block";
            up.style.display = "none";
            pf_mode = 'no'}
        profile_dropbox.style.top = `${window.pageYOffset + header.offsetHeight - 10}px`;
    }

    // ------------------

    time_slider = document.querySelector(".time-slider input");
    time_slider.oninput = function() {
        time_progress_bar = document.querySelector(".time-slider progress");
        time_progress_bar.value = time_slider.value;
        time_slider_value = document.querySelector(".time-slider-value");
        time_slider_value.innerHTML = time_slider.value;
    }
    time_slider2 = document.querySelector(".time-slider2 input");
    time_slider2.oninput = function() {
        time_progress_bar2 = document.querySelector(".time-slider2 progress");
        time_progress_bar2.value = time_slider2.value;
        time_slider_value2 = document.querySelector(".time-slider-value2");
        time_slider_value2.innerHTML = time_slider2.value;
    }
    vol_slider = document.querySelector(".vol-slider input");
    vol_slider.oninput = function() {
        vol_progress_bar = document.querySelector(".vol-slider progress");
        vol_progress_bar.value = vol_slider.value;
        vol_slider_value = document.querySelector(".vol-slider-value");
        vol_slider_value.innerHTML = vol_slider.value;
    }

    // ------------------

    function reset_rc() {
        $(".playlist-wrapper").css("visibility", "hidden");
        $(".music-wrapper").css("visibility", "hidden");
        $(".video-wrapper").css("visibility", "hidden");
    }

    $("body").on("contextmenu", function(e) {
        reset_rc()
        if($(".artist:hover").length != 0 || $(".radio:hover").length != 0){
            $(".video-wrapper").css({
                visibility: "visible",
                left: e.pageX,
                top: e.pageY
            });
        }
        else if($(".music-box:hover").length != 0 || $(".music-row-box:hover").length != 0){
            $(".music-wrapper").css({
                visibility: "visible",
                left: e.pageX,
                top: e.pageY
            });
        }
        else if($(".playlist-menu-sub:hover").length != 0){
            $(".playlist-wrapper").css({
                visibility: "visible",
                left: e.pageX,
                top: e.pageY
            });
        }
        else if($(".video-list:hover").length != 0 || $(".music-box-long:hover").length != 0){
            $(".video-wrapper").css({
                visibility: "visible",
                left: e.pageX,
                top: e.pageY
            });
        }
        debugger;
        return false;
    });
    $("body").bind('contextmenu',function(){ return false; });
    $('html').click(function() { reset_rc() });

    var x = 0;
    setInterval(move_right, 4000);
    
	$('.btn-next').click(function(){
        move_right()
	});
    $('.btn-prev').click(function(){
        move_left()
    });

    function move_right(){
        x= (x<=300)?(x+100):0;
        $('.video-img-box').css('left', -x+'%');
    }
    function move_left(){
        x= (x>=100)?(x-100):400;
        $('.video-img-box').css('left', -x+'%');
    }
})