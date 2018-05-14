WebFont.load({
    google: {
        families: ['Gothic A1:400,700']
    }
});

// Sidebar random background colors

$(document).ready(function(){
  var colors = ["#EF5350","#EC407A","#AB47BC","#7E57C2","#5C6BC0","#42A5F5","#29B6F6","#26C6DA","#26A69A","#66BB6A","#9CCC65","#D4E157","#FFEE58","#FFCA28","#FFA726","#FF7043"];  
  $(".nav-item").each(function() {
  	var rand = Math.floor(Math.random()*colors.length);
  	$(this).css("background-color", colors[rand]);

  });
  });             















