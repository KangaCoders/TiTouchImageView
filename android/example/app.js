var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var TiTouchImageView = require('org.iotashan.TiTouchImageView');

var imageView = TiTouchImageView.createView({
	top:0,
	left:0,
	right:0,
	bottom:0,
	image:'demo3.jpg',
	zoom:1,
	maxZoom:10,
	minZoom:0.5,
});

// 2000 x 2079


win.add(imageView);

var view1 = Ti.UI.createView({
	width: 50 + "px",
	height: 50 + "px",
	gravityX: 25,
	gravityY: 50,
	l: 1650 / 4000 * Math.min(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight),
	t: 1047 / 4000 * Math.min(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight),
	backgroundColor: "red",
	opacity: 0.5
});

win.add(view1);

var view2 = Ti.UI.createView({
	width: 50 + "px",
	height: 50 + "px",
	gravityX: 25,
	gravityY: 50,
	l: 890 / 4000 * Math.min(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight),
	t: 3374 / 4000 * Math.min(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight),
	backgroundColor: "blue",
	opacity: 0.5
});

win.add(view2);

imageView.setMarkers([view1, view2]);

win.open();

imageView.addEventListener("scrolling", function(_e){
	console.log("Zoom: " + _e.zoom_scale);
});
