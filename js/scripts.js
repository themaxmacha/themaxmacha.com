$(window).on("load", function(){
    "use strict";
    $(".loader").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        }, 500);
        contanimshow();
    });
});
function initFirenze() {
    "use strict";
	// intense ------------------
    function d() {
        var a = document.querySelectorAll(".intense");
        Intense(a);
    }
    d();
	// magnificPopup ------------------
    $(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: false,
        removalDelay: 600,
        fixedContentPos: true,
        fixedBgPos: true,
        mainClass: "my-mfp-slide-bottom",
        image: {
            verticalFit: false
        }
    });
    $(".popup-youtube, .popup-vimeo , .show-map").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        fixedContentPos: true,
        fixedBgPos: true,
        tLoading: "Loading image #%curr%...",
        removalDelay: 600,
        closeBtnInside: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [ 0, 1 ]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    var mc = new Hammer(document.body);
    mc.on("swipeleft", function() {
        $(".mfp-arrow-left").magnificPopup("prev");
    });
    mc.on("swiperight", function() {
        $(".mfp-arrow-right").magnificPopup("next");
    });
	// appear ------------------
    var i = 1;
    $(document.body).on("appear", ".stats", function(a) {
        if (1 === i) k(2600);
        i++;
    });
    function j(a, b, c, d) {
        if (d) {
            var e = 0;
            var f = parseInt(d / a);
            var g = setInterval(function() {
                if (e - 1 < a) c.html(e); else {
                    c.html(b);
                    clearInterval(g);
                }
                e++;
            }, f);
        } else c.html(b);
    }
    function k(a) {
        $(".stats .num").each(function() {
            var b = $(this);
            var c = b.attr("data-num");
            var d = b.attr("data-content");
            j(c, d, b, a);
        });
    }
    $(document.body).on("appear", ".skillbar-box", function() {
        $(this).find("div.skillbar-bg").each(function() {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });
    $(".animaper").appear();
	// Services ------------------
    $(document).on("click", ".serv-item", function(a) {
        var b = $(this);
        a.preventDefault();
        $(".serv-item").removeClass("act-ser");
        b.addClass("act-ser");
			$("html, body").animate({
				scrollTop: $(".serv-post").offset().top - 120
			}, {
				queue: false,
				duration: 1200,
				easing: "easeInOutExpo"
			});

        $(".serv-details").stop(true, true).css("display", "none");
        $(b.attr("href")).stop(true, true).fadeIn(500);
		  return false;
    });
	// background youtube ------------------
    var s = $(".background-youtube").data("vid");
    var t = $(".background-youtube").data("mv");
    $(".background-youtube").YTPlayer({
        fitToBackground: true,
        videoId: s,
        pauseOnScroll: false,
        mute: t,
        width: $(".media-container"),
        callback: function() {
            var a = $(".background-youtube").data("ytPlayer").player;
        }
    });
	// isotope ------------------
    function nsd() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
            a.isotope("on", "layoutComplete", function(a, b) {
                var c = b.length;
                $(".num-album").html(c);
            });
        }
    }
    var m = $(".gallery-item").length;
    $(".all-album , .num-album").html(m);
    nsd();
    $(window).on("load", function(){
        nsd();
    });
    $(".filter-button").on("click", function() {
        $(".gallery-filters").slideToggle(600);
        return false;
    });
	// team hover ------------------
// team hover ------------------
    $(".team-box").hover(function() {
        $(this).find("ul.team-social").fadeIn();
        $(this).find(".team-social a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 1,
                    top: "0"
                }, 400);
            }, 150 * a);
        });
    }, function() {
        $(this).find(".team-social a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 0,
                    top: "50px"
                }, 400);
            }, 150 * a);
        });
        setTimeout(function() {
            $(this).find("ul.team-social").fadeOut();
        }, 150);
    });
	//  to top ------------------
    $(".to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, {
            queue: false,
            duration: 1200
        });
		  return false;
    });
	// resume ------------------
    $(".show-hidden-info").on("click", function() {
        $(this).toggleClass("vhi");
        $(this).closest(".resume-box").find(".hidden-info").slideToggle(500);
		  return false;
    });
	//  map  ------------------
    $("#map-canvas").gmap3({
        action: "init",
        marker: {
            values: [ {
                latLng: [ 40.7143528, -74.0059731 ],
                data: "Our office  - New York City",
                options: {
                    icon: "images/marker.png"
                }
            } ],
            options: {
                draggable: false
            },
            events: {
                mouseover: function(a, b, c) {
                    var d = $(this).gmap3("get"), e = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (e) {
                        e.open(d, a);
                        e.setContent(c.data);
                    } else $(this).gmap3({
                        infowindow: {
                            anchor: a,
                            options: {
                                content: c.data
                            }
                        }
                    });
                },
                mouseout: function() {
                    var a = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (a) a.close();
                }
            }
        },
        map: {
            options: {
                zoom: 14,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                scrollwheel: false,
                streetViewControl: true,
                draggable: true,
                styles: [ {
                    featureType: "landscape",
                    stylers: [ {
                        saturation: -100
                    }, {
                        lightness: 65
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "poi",
                    stylers: [ {
                        saturation: -100
                    }, {
                        lightness: 51
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road.highway",
                    stylers: [ {
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road.arterial",
                    stylers: [ {
                        saturation: -100
                    }, {
                        lightness: 30
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "road.local",
                    stylers: [ {
                        saturation: -100
                    }, {
                        lightness: 40
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "transit",
                    stylers: [ {
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "administrative.province",
                    stylers: [ {
                        visibility: "off"
                    } ]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [ {
                        visibility: "on"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -100
                    } ]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [ {
                        hue: "#ffff00"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -97
                    } ]
                } ]
            }
        }
    });
	// contactform ------------------
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                comments: $("#comments").val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message").slideUp(1500);
    });
	// owlCarousel ------------------
    var heroslides = $(".hero-slider");
    heroslides.each(function(index) {
        var auttime = eval($(this).data("attime"));
        var rtlt = eval($(this).data("rtlt"));
        $(this).owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoHeight: false,
            autoplay: true,
            autoplayTimeout: auttime,
            autoplayHoverPause: false,
            autoplaySpeed: 1600,
            rtl: rtlt,
            dots: false
        });
    });
    var slsl = $(".slideshow-item");
    slsl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoHeight: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        autoplaySpeed: 3600
    });
    var fhcr = $(".fullheight-carousel");
    fhcr.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 3,
        dots: false,
        center: true,
        autoHeight: false,
        smartSpeed: 1500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            764: {
                items: 3
            }
        }
    });
    $(".fullheight-carousel-holder a.next-slide").on("click", function() {
        $(".fullheight-carousel-holder").find(fhcr).trigger("next.owl.carousel");
        return false;
    });
    $(".fullheight-carousel-holder a.prev-slide").on("click", function() {
        $(".fullheight-carousel-holder").find(fhcr).trigger("prev.owl.carousel");
        return false;
    });
    var fss = $(".full-screen-slider"), flag = false, duration = 1300;
    fss.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        dotsContainer: ".panel-dots",
        onInitialized: function(a) {
            dotswidth();
            $(".num-holder").text("1" + " / " + this.items().length);
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        $(".num-holder").text((1 > b ? b + a : b > a ? b - a : b) + " / " + a);
    });
    $(".full-screen-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".full-screen-slider-holder").find(fss).trigger("next.owl.carousel");
        return false;
    });
    $(".full-screen-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".full-screen-slider-holder").find(fss).trigger("prev.owl.carousel");
        return false;
    });
    var csi = $(".custom-slider");
    csi.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        dotsContainer: ".panel-dots",
        onInitialized: function(a) {
            dotswidth();
        }
    });
    $(".custom-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".custom-slider-holder").find(csi).trigger("next.owl.carousel");
        return false;
    });
    $(".custom-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".custom-slider-holder").find(csi).trigger("prev.owl.carousel");
        return false;
    });
    function dotswidth() {
        var a = $(".panel-dots .owl-dot").length;
        var b = $(".panel-dots").width();
        $(".panel-dots .owl-dot").css({
            width: b / a
        });
    }
    var gR = $(".gallery_horizontal"), w = $(window), cf = $(".gallery_horizontal").data("cen");
    function initGalleryhorizontal() {
        var gww = $(window).outerHeight();
        $(".gallery_horizontal img ").css({
            height: gww / 2
        });
        if (gR.find(".owl-stage-outer").length) {
            gR.trigger("destroy.owl.carousel");
            gR.find(".horizontal_item").unwrap();
        }
        if (w.width() > 756) gR.owlCarousel({
            autoWidth: true,
            margin: 10,
            items: 1,
            smartSpeed: 1300,
            loop: true,
            center: cf,
            nav: false,
            onInitialized: function() {
                gR.find(".owl-stage").css({
                    height: gww / 2,
                    overflow: "hidden"
                });
				  $(".num-holder2").text("1" + " / " + this.items().length);
                var a = $(".owl-carousel").find(".active").find(".horizontal_item");
                var b = a.data("phdesc");
                var c = a.data("phname");
                if (b) $(".caption").html("<h4>" + c + "</h4><p>" + b + "</p>");
            }
        }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        $(".num-holder2").text((1 > b ? b + a : b > a ? b - a : b) + " / " + a);
    });
    }
    if (gR.length) {
        initGalleryhorizontal();
        w.on("resize.destroyhorizontal", function() {
            setTimeout(initGalleryhorizontal, 150);
        });
    }
    gR.on("translated.owl.carousel", function(a) {
        var b = $(this).find(".active").find(".horizontal_item").data("phdesc");
        var c = $(this).find(".active").find(".horizontal_item").data("phname");
        if (b) {
            $(".caption").html("<h4>" + c + "</h4><p>" + b + "</p>");
            $(".caption h4 , .caption p").addClass("remcap");
            setTimeout(function() {
                $(".caption h4 , .caption p").removeClass("remcap");
            }, 200);
        }
    });
    $(".resize-carousel-holder a.next-slide").on("click", function() {
        $(".resize-carousel-holder").find(gR).trigger("next.owl.carousel");
        return false;
    });
    $(".resize-carousel-holder a.prev-slide").on("click", function() {
        $(".resize-carousel-holder").find(gR).trigger("prev.owl.carousel");
        return false;
    });
	//  other functions  ------------------
    var n = $(".bg");
    n.each(function(a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    var shrcn = $(".share-container");
    function showShare() {
        shrcn.animate({
            top: 0
        }, 550);
    }
    function hideShare() {
        shrcn.animate({
            top: -50 + "px"
        }, 550);
    }
    $(".show-share").on("click", function(a) {
        showShare();
		  return false;
    });
    $(".closeshare").on("click", function(a) {
        a.preventDefault();
        hideShare();
		  return false;
    });
    $(".custom-scroll-link").on("click", function() {
        var a = 80;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1600,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    function aht() {
        $(".hero-wrap-image-slider .item").css({
            height: $(".hero-wrap-image-slider").outerHeight(true)
        });
        $(".full-height-wrap").css({
            height: $(window).outerHeight(true)
        });

        $(".full-screen-item , .slideshow-item .item").css({
            height: $(".hero-wrap").outerHeight(true)
        });
        $(".almt").css({
            "margin-top": -1 * $(".almt").height() / 2 + "px"
        });
        $(".fullheight-carousel .item").css({
            height: $(".fullheight-carousel-holder").outerHeight(true)
        });
        var a = $("header").height(), b = $(".header-footer").height();
        $(".scroll-holder").css({
            height: a - b + "px"
        });
        $(".hero-grid .item").css({
            height: $(".hero-grid").outerHeight(true)
        });
    }
    aht();
    $(window).resize(function() {
        aht();
        dotswidth();
        var b = $(window).width();
        if (b > 1056) {$(".main-header").css({
            left: 0 + "px"
        });
		}
		else if (b < 1056){
			$(".main-header").css({
            left:- $(".main-header").width()
        });
			}
    });
        var a = window.location.href.split("#")[1];
        var b = 70;
        if (a && $("#" + a).length) setTimeout(function() {
            $("html,body").animate({
                scrollTop: $("#" + a).offset().top - b
            }, {
                queue: false,
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }, 750);
    var shs = eval($(".share-container").attr("data-share"));
    $(".share-container").share({
        networks: shs
    });
	var mobileHover = function () {
		$('.box-item , .gallery-item').on('touchstart', function () {
			$(this).trigger('hover');
		}).on('touchend', function () {
			$(this).trigger('hover');
		});
	};
	mobileHover();
	//  IMPORTANT add your functions here ------------------


}
// remove  parallax and video  on mobile  ------------------
function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
            s = skrollr.init();
            s.destroy();
            $(window).resize(function() {
                var a = $(window).width();
                if (a < 1036) s.destroy(); else skrollr.init({
                    forceHeight: !1,
                    mobileCheck: function() {
                        return !1;
                    }
                });
            });
            skrollr.init({
                forceHeight: !1,
                mobileCheck: function() {
                    return !1;
                }
            });
        var c = $(window).width();
        if (c < 1036) {
            s = skrollr.init();
            s.destroy();
        }
    }
    if (trueMobile) $(".background-youtube").remove();
}
// animation transitions  ------------------
$("body").append('<div class="l-line"><span></span></div>');
$("#main").append('<div class="preload-bg" data-ran="28"></div>');
$.fn.duplicate = function(a, b) {
    var c = [];
    for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
    return this.pushStack(c);
};

$("<div class='preload-bg-item'></div>").duplicate(200).appendTo(".preload-bg");

function contanimshow() {
    $(".content-holder").removeClass("scale-bg2");
    setTimeout(function() {
        $(".preload-bg-item").removeClass("vis-load");
        $(".preload-bg").fadeOut();
    }, 550);
    $(".loader").addClass("pg-load");
}

function contanimhide() {
    $(".preload-bg").fadeIn();
    function a(a) {
        var b = a.length, c, d;
        while (b) {
            d = Math.floor(Math.random() * b--);
            c = a[b];
            a[b] = a[d];
            a[d] = c;
        }
        return a;
    }
    var b = $(".preload-bg-item");
    $(a(b).slice(0, $(".preload-bg").data("ran"))).each(function(a) {
        var b = $(this);
        setTimeout(function() {
            b.addClass("vis-load");
        }, 80 * a);
    });
    setTimeout(function() {
        $(".content-holder").addClass("scale-bg2");
    }, 650);
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 90) $(".to-top").fadeIn(500); else $(".to-top").fadeOut(500);
});
//  menu  ------------------
var mhw = $(".main-header").width();

function hideMenu() {
    $(".main-header").animate({
        left: -mhw + "px"
    }, 550);
}
function showMenu() {
    $(".main-header").animate({
        left: 0
    }, 550);
}
$(".nav-button").on("click", function(a) {
    showMenu();
	  return false;
});
$(".close-menu").on("click", function(a) {
    hideMenu();
	  return false;
});
$(".nav-holder nav li ul").parent("li").append('<span class="nav-dec"></span>');
$(".scroll-holder").scrollbar();
$(".nav-holder nav li").on("mouseenter", function() {
   $(this).find("ul").stop().slideDown();
});
$(".nav-holder nav li").on("mouseleave", function() {
   $(this).find("ul").stop().slideUp();
});
//  Init core ------------------
$(function() {
    $.coretemp({
        reloadbox: "#wrapper",
        loadErrorMessage: "<h2>404</h2> <br> page not found.",
        loadErrorBacklinkText: "Back to the last page",
        outDuration: 250,
        inDuration: 650
    });
    readyFunctions();
    $(document).on({
        ksctbCallback: function() {
            readyFunctions();
        }
    });
});
//  Init all functions ------------------
function readyFunctions() {
    initFirenze();
    initparallax();
}