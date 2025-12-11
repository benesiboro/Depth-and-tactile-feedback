var c1 : GameObject;
var c2 : GameObject;
var c3 : GameObject;
var c4 : GameObject;
var c5 : GameObject;
var c6 : GameObject;
var c7 : GameObject;
var c8 : GameObject;
//var c9 : GameObject;
//var c10 : GameObject;
//var c11 : GameObject;
//var c12 : GameObject;

function Start(){
c1=GameObject.Find("Cube2");
c1.renderer.enabled= false;
c2=GameObject.Find("Cube2-2");
c2.renderer.enabled= false;
c3=GameObject.Find("Cube2-3");
c3.renderer.enabled= false;
c4=GameObject.Find("Cube2-4");
c4.renderer.enabled= false;
c5=GameObject.Find("Cube3");
c5.renderer.enabled= false;
c6=GameObject.Find("Cube3-2");
c6.renderer.enabled= false;
c7=GameObject.Find("Cube3-3");
c7.renderer.enabled= false;
c8=GameObject.Find("Cube3-4");
c8.renderer.enabled= false;

}


function OnMouseDown(){
c1=GameObject.Find("Cube2");
c1.renderer.enabled= true;
c2=GameObject.Find("Cube2-2");
c2.renderer.enabled= true;
c3=GameObject.Find("Cube2-3");
c3.renderer.enabled= true;
c4=GameObject.Find("Cube2-4");
c4.renderer.enabled= true;
}