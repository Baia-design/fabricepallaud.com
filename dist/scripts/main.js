jQuery(document).ready(function(n){var i=1030;n("body").prepend("<div style='z-index: 99999; display: none; font-size: 14px; position: fixed; color: #fff !important; background: rgba(0,0,0,0.85) !important; bottom: 0; padding: 4px 8px;' id='dimensions'></div>"),n("#dimensions").html(window.innerWidth),n(window).resize(function(){n("#dimensions").html(window.innerWidth)}),-1!==document.location.href.indexOf("localhost")&&n("#dimensions").show(),n(".mobile_menu_link").click(function(){n(".mobile_menu").css("display","flex").hide().fadeIn()}),n(".mobile_menu_close").click(function(){n(".mobile_menu").fadeOut()});var e=n(".nav_primary").offset().top;function a(){n("body").width()>i?n(window).scrollTop()>e?(n(".nav_primary").addClass("nav_primary_fixed").removeClass("nav_primary_regular"),n(".nav_primary .menu_home").addClass("menu_home--sticky")):(n(".nav_primary").addClass("nav_primary_regular").removeClass("nav_primary_fixed"),n(".nav_primary .menu_home").removeClass("menu_home--sticky")):(n(".nav_primary").addClass("nav_primary_regular").removeClass("nav_primary_fixed"),n(".nav_primary .menu_home").removeClass("menu_home--sticky"))}if(a(),n(window).on("resize",a),n(window).scroll(function(){a()}),n(".wrap--single header, .wrap--single p, .wrap--single h3, .wrap--single ul:not(.picture)").each(function(){n(this).addClass("container")}),n("body").hasClass("single-project")){var o=n(".banner").height();n("html, body").animate({scrollTop:o},200)}});