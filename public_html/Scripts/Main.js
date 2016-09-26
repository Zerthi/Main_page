$(document).ready(function(){
    $("#Main_Image").attr({
        src: "/images/jquery.jpg",
        title: "jQuery",
        alt: "jQuery Logo"
    });
    $("#Main_Menu_Li_1").click(function(){
        $("#Main_Sub_Menu_1").css("display", "block");
            $("#Main_Menu_Li_1").addClass("Main_Menu_Li_active");
            $("#Main_Menu_Li_2").removeClass("Main_Menu_Li_active");
            $("#Main_Menu_Li_3").removeClass("Main_Menu_Li_active");
            $("#Main_Menu_Li_4").removeClass("Main_Menu_Li_active");
            $("#Main_Menu_Li_5").removeClass("Main_Menu_Li_active");
            $("#Main_Page_Game-Cornel").css("display", "none");
    });
    $("#Main_Menu_Li_4").click(function(){
        $("#Main_Page_Game-Cornel").css("display", "block");
            $("#Main_Menu_Li_1").removeClass("Main_Menu_Li_active");
            $("#Main_Menu_Li_2").removeClass("Main_Menu_Li_active");
            $("#Main_Menu_Li_3").removeClass("Main_Menu_Li_active");
            $("#Main_Menu_Li_4").addClass("Main_Menu_Li_active");
            $("#Main_Menu_Li_5").removeClass("Main_Menu_Li_active");
    });
    
 });