
var canvas=document.getElementsByTagName('canvas')[0];
var c=canvas.getContext('2d');
var width=canvas.width=window.innerWidth;
var height=canvas.height=window.innerHeight;
var points=[];
var circles=[];
for(var i4=0;i4<3;i4++){circles.push(new Constructor(20,"rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")",[Math.random()*width,Math.random()*height],[Math.random()*1000,Math.random()*1000,Math.random()*1000]));}
function Constructor(radius,color,cordinates,num){

this.radius=radius;
this.color=color;
this.cordinates=cordinates;
this.num=num;
}

//napraviti tacke-poene i dati im informacije:kordinate,boju
for(var i1=0;i1<20;i1++){

points.push({cordinates:[Math.random()*width,Math.random()*height],color:"rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"});

}

Constructor.prototype.bot=function(){

nearestCircles=[];
nearestPoints=[];
var a2=0;
var a3=0;
//krugovi u blizini
for(var i9=0;i9<circles.length;i9++){
if(this!=circles[i9]){

nearestCircles.push({vector:sub(circles[i9].cordinates,this.cordinates),magnitude:length(sub(circles[i9].cordinates,this.cordinates)),radius:circles[i9].radius,cordinates:circles[i9].cordinates,num:circles[i9].num});

}}

//koji krug je najblizi
var k3=0;
for(var i10=0;i10<nearestCircles.length;i10++){

if(nearestCircles[k3].magnitude>nearestCircles[i10].magnitude){k3=i10;}

}


//ako su u blizini
if(nearestCircles[k3].magnitude-(this.radius+nearestCircles[k3].radius)<=200){
//ODAVDE-------------------------------------------------------------------------------------------------------------------------
if(this.cordinates[0]+this.radius<0){this.cordinates[0]=width+this.radius;}
if(this.cordinates[0]-this.radius>width){this.cordinates[0]=-this.radius;}
if(this.cordinates[1]+this.radius<0){this.cordinates[1]=height+this.radius;}
if(this.cordinates[1]-this.radius>height){this.cordinates[1]=-this.radius;}

if(this.cordinates[1]+this.radius<0 || this.cordinates[1]-this.radius>height){this.cordinates[1]=-this.cordinates[1];}

if(this.radius>nearestCircles[k3].radius+3 || nearestCircles[k3].radius>this.radius+3){
if(this.radius>nearestCircles[k3].radius+3){
a3=1;
if(this.cordinates[0]>=nearestCircles[k3].cordinates[0]){this.cordinates[0]-=40/this.radius;}
if(this.cordinates[0]<nearestCircles[k3].cordinates[0]){this.cordinates[0]+=40/this.radius;}
if(this.cordinates[1]>=nearestCircles[k3].cordinates[1]){this.cordinates[1]-=40/this.radius;}
if(this.cordinates[1]<nearestCircles[k3].cordinates[1]){this.cordinates[1]+=40/this.radius;}


}
if(nearestCircles[k3].radius>this.radius+3){
	a3=1;
if(this.cordinates[0]>=nearestCircles[k3].cordinates[0]){this.cordinates[0]+=40/this.radius;}
if(this.cordinates[0]<nearestCircles[k3].cordinates[0]){this.cordinates[0]-=40/this.radius;}
if(this.cordinates[1]>=nearestCircles[k3].cordinates[1]){this.cordinates[1]+=40/this.radius;}
if(this.cordinates[1]<nearestCircles[k3].cordinates[1]){this.cordinates[1]-=40/this.radius;}


}

c.beginPath();
c.moveTo(this.cordinates[0],this.cordinates[1]);
c.lineTo(nearestCircles[k3].cordinates[0],nearestCircles[k3].cordinates[1]);
c.strokeStyle="blue";
c.stroke();

}else{
a2=1;	
}

}
if(nearestCircles[k3].magnitude-(this.radius+nearestCircles[k3].radius)>200 || a2==1 & a3==0){

//dodatne informacije o svakom poenu
for(var i5=0;i5<points.length;i5++){

nearestPoints.push({vector:sub(points[i5].cordinates,this.cordinates),magnitude:length(sub(points[i5].cordinates,this.cordinates)),radius:5});

}


//OVO NE DIRAM-----------------------------------------------------------------------------------------------------------------------
//trazimo poen koji ima najmanju magnitudu
var k1=0;
for(var i6=0;i6<nearestPoints.length;i6++){

if(nearestPoints[k1].magnitude>nearestPoints[i6].magnitude){k1=i6;}

}

if(Math.abs(nearestPoints[k1].vector[0])==nearestPoints[k1].vector[0]){this.cordinates[0]+=40/this.radius;}else{this.cordinates[0]-=40/this.radius;}
if(Math.abs(nearestPoints[k1].vector[1])==nearestPoints[k1].vector[1]){this.cordinates[1]+=40/this.radius;}else{this.cordinates[1]-=40/this.radius;}

if(nearestPoints[k1].magnitude<=this.radius+nearestPoints[k1].radius){points.splice(k1,1);points.push({cordinates:[Math.random()*width,Math.random()*height],color:"rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"});this.radius+=1;}

c.beginPath();
c.moveTo(this.cordinates[0],this.cordinates[1]);
c.lineTo(this.cordinates[0]+nearestPoints[k1].vector[0],this.cordinates[1]+nearestPoints[k1].vector[1]);
c.strokeStyle="black";
c.stroke();

}
a2=0;
a3=0;
for(var i10=0;i10<circles.length;i10++){

if(nearestCircles[k3].num[0]==circles[i10].num[0] & nearestCircles[k3].num[1]==circles[i10].num[1] & nearestCircles[k3].num[2]==circles[i10].num[2]){
	var t1=i10;
}
if(this.num[0]==circles[i10].num[0] & this.num[1]==circles[i10].num[1] & this.num[2]==circles[i10].num[2]){
	var t2=i10;
}

}

if(nearestCircles[k3].magnitude<=this.radius || nearestCircles[k3].magnitude<=nearestCircles[k3].radius){

if(this.radius>nearestCircles[k3].radius){circles[t2].radius+=circles[t1].radius/3;circles.splice(t1,1);circles.push(new Constructor(20,"rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")",[Math.random()*width,Math.random()*height],[Math.random()*1000,Math.random()*1000,Math.random()*1000]))}else{circles[t1].radius+=circles[t2].radius/3;circles.splice(t2,1);circles.push(new Constructor(20,"rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")",[Math.random()*width,Math.random()*height],[Math.random()*1000,Math.random()*1000,Math.random()*1000]))}

}
c.beginPath();
c.arc(this.cordinates[0],this.cordinates[1],this.radius,0,Math.PI*2,false);
c.fillStyle=this.color;
c.fill();


}





function sub(a,b){

return [a[0]-b[0],a[1]-b[1]];

}
function add(a,b){

return [a[0]+b[0],a[1]+b[1]];

}
function scale(a,c){

return [a[0]*c,a[1]*c]

}
function cross(a,b){

return a[0]*b[1]-b[0]*a[1];

}
function dot(a,b){

return a[0]*b[0]+a[1]*b[1];
}
function length(a){

return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2));

}

gameLoop();

function gameLoop(){

c.clearRect(0,0,width,height);


for(var i2=0;i2<points.length;i2++){

c.beginPath();
c.arc(points[i2].cordinates[0],points[i2].cordinates[1],5,0,Math.PI*2,false);
c.fillStyle=points[i2].color;
c.fill();

}
for(var i7=0;i7<circles.length;i7++){
circles[i7].bot();

}
requestAnimationFrame(gameLoop);
}