


function Image(url, tags) {
	this.url = url;
	this.tags = tags;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.addClass("images")

		var url = "";
		url += "<img src="+ this.url + ">";

		container.html(url)
		$(".images").prepend(container)
	}
}

var images = [
	new Image("imgs/Draven.jpg", ["painting", "mistakes"]),
]

//global taglist
var tagList = []
images.forEach(function(quote){
	quote.display();
	quote.tags.forEach(function(tag){
		// check to see if tag has been added to taglist
			if(!tagList.includes(tag)){
				// if it isnt added, add it
				tagList.push(tag);
				// and also make a button for it.
				$(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>")
			}
	})
})
console.log(tagList);

$(".filter").on("click", function(){
	var tag = $(this).attr("id");
	console.log(tag)

	$(".images").not("." + tag).hide();
	$("." + tag).fadeIn();

	$("filter").removeClass("active")
	$(this).addClass("active")
})
