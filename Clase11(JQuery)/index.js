var hierros = $("#hierros");
var bolsas = $("#bolsas");
var elementos = $(".dropdown");
elementos.hide();

hierros.click(function(){
	$(this).toggleClass("onclick");
	$(this).children("ul").toggle();
});

bolsas.click(function(){
	$(this).toggleClass("onclick");
	$(this).children("ul").toggle();
});