$(document).ready(function(){992>$(window).width()&&$(".header-list-item").click(function(e){e.preventDefault(),$(this).hasClass("opened")?$(this).removeClass("opened"):($(".header-list-item").removeClass("opened"),$(this).addClass("opened"))}),$(".header-arrow").click(function(e){e.preventDefault(),$("body").animate({scrollTop:$(".concept").offset().top})}),$("#header .button").click(function(e){e.preventDefault(),$("body").animate({scrollTop:$("#newsletter").offset().top})}),$("#header .apple").click(function(){$(".messageMicrosoft").hide(),$(".messageApple").show()}),$("#header .microsoft").click(function(){$(".messageApple").hide(),$(".messageMicrosoft").show()})});