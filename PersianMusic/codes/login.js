$(document).ready(function(){
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) { theme_mode = 'light', set_theme() }
    else { theme_mode = 'dark', set_theme() }

    function set_theme() {
        if (theme_mode == 'light'){
            $(":root").css({'--bg-color': '#181818','--second-bg-color': '#282828',
                            '--third-bg-color': '#383838','--text-color': '#fff'});
            theme_mode = 'dark'}
        else{
            $(":root").css({'--bg-color': 'whitesmoke','--second-bg-color': 'rgb(220, 220, 220)',
                            '--third-bg-color': 'rgb(200, 200, 200)','--text-color': 'black'});
            theme_mode = 'light'}
    }

    
    $(".loading-wave").fadeIn(0);
    $(".signup-mode").click(function(){
        $(".loading-wave").css("z-index", "2");
        $(".loading-wave").fadeIn( 500 );
        $(".loading-wave").fadeOut( 500 );

        $(".signin-mode").css("border-color", "transparent");
        $(".signup-mode").css("border-color", "rgb(0, 89, 190)");
        $(".re-enter-pass").css("display", "block");

        $(".div-remember").css("display", "none");

        $(".signin-btn").css("display", "none");
        $(".signup-btn").css("display", "block");
        
        $(".forget-pass").css("display", "none");
    })


    $(".signin-mode").click(function(){
        $(".loading-wave").css("z-index", "2");
        $(".loading-wave").fadeIn( 500 );
        $(".loading-wave").fadeOut( 500 );
        
        $(".signup-mode").css("border-color", "transparent");
        $(".signin-mode").css("border-color", "rgb(0, 89, 190)");
        $(".re-enter-pass").css("display", "none");

        $(".div-remember").css("display", "flex");

        $(".signin-btn").css("display", "block");
        $(".signup-btn").css("display", "none");
        
        $(".forget-pass").css("display", "block");
    })
});