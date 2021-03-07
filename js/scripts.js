


function Image(url, tags) {
	this.urlimg = url;
	this.tags = tags;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.addClass("urlimg")

		var urlasdf = "";
		urlasdf += "<img src="+ this.urlimg + ">";

		container.html(urlasdf)
		$(".imagesSkins").prepend(container)
	}
}

var imagesSkins = [
	new Image("imgs/Draven.jpg", ["Mecha Kingdoms", "Marksman"]),
	new Image("imgs/Jax.jpg", ["Mecha Kingdoms", "Fighter"]),
	new Image("imgs/Sett.jpg", ["Mecha Kingdoms", "Fighter"])
]

//global taglist
var tagList = []

imagesSkins.forEach(function(urlimg){
	urlimg.display();
	urlimg.tags.forEach(function(tag){
		// check to see if tag has been added to taglist
			if(!tagList.includes(tag)){
				// if it isnt added, add it
				tagList.push(tag);
				// and also make a button for it.
				$(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>")
			}
	})
})
console.log(tagList)

$(".filter").on("click", function(){
	var tag = $(this).attr("id");
	console.log(tag)

	$(".urlimg").not("." + tag).hide();
	$("." + tag).fadeIn();

	$(".filter").removeClass("active")
	$(this).addClass("active")
})
