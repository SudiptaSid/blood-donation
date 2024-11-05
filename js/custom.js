// Banner Slider
$('#banner_slider').owlCarousel({
    margin:0,
    items: 1,
    nav:false,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    dots:false,
    loop:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
})
// Save Live Slider
$('#save_slider').owlCarousel({ 
    dots:false, 
    nav:true, 
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    loop:true, 
    margin:20, 
    autoplay:true, 
    autoplayTimeout:5000, 
    autoplayHoverPause:true, 
    responsiveClass:true, 
    responsive:{ 
        320:{ 
            items:2,
        }, 
        414:{ 
            items:3, 
        },
        640:{ 
            items:4, 
        }, 
        1000:{ 
            items:4, 
        }, 
    } 
})
// Font Size
$(".btn_tog").click(function(){
    $(".btn_div").toggleClass("view");
});
$(document).ready(function() {
    $('.incr').click(function() {
        $('.chng').css("font-size", function() {
            return parseInt($(this).css('font-size')) + 1 + 'px';
        });
    });
    $('.decr').click(function() {
        $('.chng').css("font-size", function() {
            return parseInt($(this).css('font-size')) - 1 + 'px';
        });
    });
});
// Map
$(document).ready(function(){
    $("#map").TekMap();
    $("#map").TekMarker({lat:22.621027,lng:88.392818, draggable:true,infowindow:"Web Arbiter"});
    $("#map").TekMarker({lat:22.567332,lng:88.370862, draggable:true,infowindow:"Sealdha"});
    $("#map").TekMarker({lat:22.603158,lng:88.466058, draggable:true,infowindow:"Eco Park"});
    $("#map").TekMarker({lat:22.622848,lng:88.414418, draggable:true,infowindow:"Nager Bazar",});
});