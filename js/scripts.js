


function Image(url, tags, author, title) {
	this.urlimg = url;
	this.tags = tags;
	this.author = author;
	this.title = title;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.addClass("urlimg")

		var urlasdf = "";
		urlasdf += "<img src="+ this.urlimg + " alt= League>";
		urlasdf += "<p>" + this.title + "</p>";
		urlasdf += "<cite>" + this.author + "</cite";

		container.html(urlasdf)
		console.log(urlasdf)
		$(".imagesSkins").prepend(container)
	}
}

var imagesSkins = [
	new Image("imgs/Draven.jpg", ["Mecha-Kingdoms", "Marksman", "All"], "Sean \"Raiko\" Tay", "Mecha Kingdoms Draven"),
	new Image("imgs/Jax.jpg", ["Mecha-Kingdoms", "Fighter", "All"], "Sean \"Raiko\" Tay", "Mecha Kingdoms Jax"),
	new Image("imgs/Sett.jpg", ["Mecha-Kingdoms", "Fighter", "All"], "Sean \"Raiko\" Tay", "Mecha Kingdoms Sett"),
	new Image("imgs/Ezreal.jpg", ["Battle-Academia", "Marksman", "All"], "Chengwei Pan", "Battle Academia Ezreal"),
	new Image("imgs/Graves.jpg", ["Battle-Academia", "Marksman", "All"], "Chengwei Pan", "Battle Academia Graves"),
	new Image("imgs/Lux.jpg", ["Battle-Academia", "Mage", "All"], "Chengwei Pan", "Battle Academia Lux"),
	new Image("imgs/Irelia.jpg", ["High-Noon", "Fighter", "All"], "Kelly Aleshire", "High Noon Irelia"),
	new Image("imgs/Lucian.jpg", ["High-Noon", "Marksman", "All"], "Kelly Aleshire", "High Noon Lucian"),
	new Image("imgs/Senna.jpg", ["High-Noon", "Marksman", "All"], "Kelly Aleshire", "High Noon Senna"),
	new Image("imgs/Karma.jpg", ["Dark-Star", "Mage", "All"], "Bo Chen", "Dark Cosmic Karma"),
	new Image("imgs/Jhin.jpg", ["Dark-Star", "Marksman", "All"], "Bo Chen", "Dark Star Jhin"),
	new Image("imgs/Mord.jpg", ["Dark-Star", "Fighter", "All"], "Bo Chen", "Dark Star Mordekaiser")
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
