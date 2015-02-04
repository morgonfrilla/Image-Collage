$(function() {

	console.log("Width: "+$("#collage").width()+", Height: "+$("#collage").height());

	// dimensions of the container
	var collage_width = $("#collage").width();
	var collage_height = $("#collage").height();
	var images = 3;


	// total dimension that the pictures share
	var grid_height = collage_height*0.9;
	var grid_width = collage_width/images*0.9;

	// margin between images
	var margin_height = collage_height*0.1/2;
	var margin_width = collage_width*0.1/(images+1);

	for (var i = images - 1; i >= 0; i--) {
		$("#collage").append("<div class=\"image\" style=\"width:"+grid_width+"px; height:"+grid_height+"px; margin-top:"+margin_height+"px; margin-left:"+margin_width+"px\"></div>");
	};

});