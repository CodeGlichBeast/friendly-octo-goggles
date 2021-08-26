
var canvas= new fabric.Canvas('myCanvas');

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=800;

hole_obj="";
ball_obj="";

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromUrl("golf-h.png", function (Img) {
		hole_obj = Img;
		hole_obj.scaletoWidth(50);
		hole_obj.scaletoHeight(50);
		hole_obj.set({
			top=hole_x,
			left=hole_y
		})
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromUrl("ball.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaletoWidth(50);
		ball_obj.scaletoHeight(50);
		ball_obj.set({
			top=ball_x,
			left=ball_y
		})
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((hole_x == ball_x)&&(hole_y == ball_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You won!!!!"
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y >= 50)
		{
         ball_y = ball_y - block_image_height;
		canvas.remove(ball_obj);
		new_image()
		}
	}

	function down()
	{
		if (ball_y >= 450)
		{
		 ball_y = ball_y + block_image_height;
			canvas.remove(ball_obj);
			new_image()
		}
	}

	function left()
	{
		if (ball_x >= 50)
		{
         ball_x = ball_x + block_image_width;
		canvas.remove(ball_obj);
		new_image()
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			canvas.remove(ball_obj);
			new_image()
		}
	}
	
}

