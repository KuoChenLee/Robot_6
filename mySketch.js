var colors="d496a7--dbf9f4-e6fdff-d9d7dd-b07bac-5f7367-564787-dbcbd8-f2fdff-9ad4d6-101935-c1aba6-533b4d-f564a9-faa4bd-fae3c6-bbdbb4-fcf0cc-4392f1-ece8ef-e3ebff-e7f0ff-dc493a-d496a7-9d695a-78e0dc-8eedf7-2f2504-594e36-7e846b-a5ae9e-d0ddd7".split("-").map(a=>"#"+a)
let particles=[]

function firework({p,fireR,particleR}){
	push()
	let baseHue=random(300)
	
	
	colorMode(HSB)
	for(let i=0;i<100;i++){
		let hue=random(0,120)
		let objParticle=new Particle({
				p:(p&&p.copy())||createVector(width/2,height/2),
				v:p5.Vector.random2D().mult(random(1,fireR||5)),
				a:createVector(0,0.1),
				r:particleR||random(40),
				color: color((baseHue+hue)%360,360,360)

		})
		particles.push(objParticle)
	}
	pop()
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	changeLightColor()
	
	fill(0)
	rect(0,0,width,height)
	firework({})
	
}


function draw() {
	translate(width/2,height/2);
	rectMode(CENTER);
	background("#95B8D1")
	// noStroke()
	// strokeWeight(5)
	

	fill(colors[0])
	//head
	rect(0,-200,150,130,20);
	//eyes
	
	fill(0)
	rect(0,-210,100,35,10)
	push()
	noStroke()
	fill(255)
	circle(-40+mouseX/13.5,-220+mouseY/50,20)
	pop()
// 	fill(0)
// 	rect(-40,-200,50,30)
// 	rect(40,-200,50,30)
// 	push()
// 	drawingContext.shadowColor=lightColor;
// 	drawingContext.shadowBlur=30;
// 	fill(lightColor)
	
// 	rect(-40,-200,30,15)
// 	rect(40,-200,30,15)
// 	pop()
// 	rect(0,-220,160,5)
	// circle(-30,-200,25)
	// circle(30,-200,25)
	// fill(255)
	// circle(-30,-200,15)
	// circle(30,-200,15)
	//眉毛

	push()
			fill(colors[16])
		rotate(0.3+sin(frameCount/30)/10)
		rect(-30,-250,50,10);
	pop()
	push()
			fill(colors[17])
		rotate(-0.25+sin(frameCount/50)/10)
		rect(30,-250,50,10);
	pop()
	//mouth
	// fill(colors[3])
	// rect(0,-150,50,20)
	//ears
	fill(colors[18])
	rect(-85,-200,20,60,10)
	
	rect(85,-200,20,60,10)
	
	//neck
	fill(colors[5])
	rect(0,-130,20,10)
	fill(colors[6])
	rect(0,-115,20,15)
	//equipment
	fill(255)
	rect(40,-30,40,180,20)	
	rect(40,-10,40,180)
	rect(40,90,20,10)
	rect(-40,-30,40,180,20)
	rect(-40,-10,40,180)
	rect(-40,90,20,10)
	quad(30,95,50,95,60,105,20,105)
	quad(-30,95,-50,95,-60,105,-20,105)
	//body
	fill(colors[8])
	rect(0,-30,150,150,20)
	//shoulder
	// push()
// 		fill(colors[8])
// 		rotate(0.01+sin(frameCount/50)/10)
			// rotateY(millis() / 1000);
// 		rect(-85,-80,40,10)
// 		fill(colors[9])
// 		circle(-100,-80,25)
// 		fill(colors[10])
// 		circle(-100,-80,15)	
// 		fill(colors[11])
// 		rect(-100,-60,10,20)
// 	fill(colors[12])
// 	rect(-100,-15,20,80,5)
// 	fill(colors[13])
// 	rect(-100,30,10,10)
// 	fill(colors[14])
// 	rect(-90,30,10,10)
// 	rect(-110,30,10,10)
// 	fill(colors[15])
// 	rect(-90,40,10,20)
// 	rect(-110,40,10,20)
		
// 	pop()
// 	push()
// 	fill(colors[8])
// 	rect(85,-80,20,10)
// 	fill(colors[9])
// 	circle(100,-80,25)
// 	pop()
	fill(colors[8])
	rect(-85,-80,20,10)
	rect(85,-80,20,10)
	fill(colors[9])
	rect(100,-80,25,25,5)
	rect(-100,-80,25,25,5)
	fill(lightColor)
	circle(-100,-80,15)
	circle(100,-80,15)
	fill(colors[11])
	rect(-100,-60,10,20)
	rect(100,-60,10,20)
	fill(colors[12])
	rect(-100,-15,20,80,5)
	rect(100,-15,20,80,5)
	fill(colors[13])
	rect(-100,30,10,10)
	rect(100,30,10,10)
	fill(colors[14])
	rect(-90,30,10,10)
	rect(-110,30,10,10)
	fill(colors[15])
	rect(-90,40,10,20)
	rect(-110,40,10,20)
	fill(colors[14])
	rect(90,30,10,10)
	rect(110,30,10,10)
	fill(colors[15])
	rect(90,40,10,20)
	rect(110,40,10,20)
	//leg
	fill(colors[16])
	rect(-25,55,10,20)
	rect(25,55,10,20)
	fill(colors[17])
	rect(-25,130,40,150,10)
	rect(25,130,40,150,10)
	fill(colors[18])
	rect(-25,210,20,10)
	rect(25,210,20,10)
	fill(colors[19])
	rect(-25,230,50,30,10)
	rect(25,230,50,30,10)
	
	//mouth
	stroke(0)
	strokeWeight(5);
	// curve(-80,-200,-30,-170,-30,-140,-80,-110)
	// stroke(0)
	// strokeWeight(5);
	// curve(-80,-180,-20,-150,30,-150,80,-180)
	fill(220)
	rect(0,-160,80,20,10)
	line(25,-170,25,-150)
	line(-25,-170,-25,-150)
	line(10,-170,10,-150)
	line(-10,-170,-10,-150)
	//heart
	
	fill(lightColor)
	circle(0,-70,20)
	
	//equipment
	fill(colors[25])
	rect(0,-270,40,10,5)
	rect(0,-300,10,50)
	circle(0,-330,30)
	push()
	noStroke()
	fill(255)
	circle(5,-335,10)
	pop()
	
	
	if(frameCount%5==0){
		changeLightColor()
	}
	
	
	
	
	
	
	
	
	
	
	fill(0,8)
	rect(0,0,width,height)
	for(let objParticle of particles){
		objParticle.update()
		objParticle.draw()
	}
	// if(frameCount%100==0){
	// 	firework()
	// }
	
	particles=particles.filter(obj=>obj.p.y<height)//留下畫面中的煙火，其餘收回

	
	
	
	
	
	
	
	
	
	
}


function mousePressed(){
	changeLightColor()
	firework({
		p:createVector(mouseX-500,mouseY-500),
		fireR:random(0.1,5),
		particleR:random(1,8)
	})
}
function changeLightColor(){
	lightColor=color(random([
		"#7FFFD4",
		"#7FFF00",
		"#008B8B",
		"#9932CC",
		"#FFB6C1",
		"#000080",
		"#8B4513"
	]))
}

class Particle{
	constructor(args){
		let def={
			p:createVector(0,0),
			v:createVector(0,0),
			a:createVector(0,0)
		}
		Object.assign(def,args)
		Object.assign(this,def)
	}
	draw(){
		//顯示
		push()
			noStroke()
			translate(this.p)
			fill(this.color)
			circle(0,0,this.r)
		pop()
	}
	update(){
	//資料更新
		
		this.p.add(this.v)
		this.v.add(this.a)
		this.r*=0.99//讓煙火粒子最後越來越小
	}
}

