<!DOCTYPE html>
<html lang="en-US">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Idea 001</title>
<style>
.main
{

}
.container {
	font-family: "Lucida Console", Monaco, monospace;
	font-size: 12px;
	background-color: grey;
	text-align: center;
	margin: auto;

}
.mapspan {
	font-family:cursive;
	display: inline-block;
	
}
.btn {
	font-family:cursive;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
}
.btndis {
	font-family:cursive;
  padding: 10px;
  margin: 5px;
  border: none;
  pointer-events: none;
  user-select: none;
  background-color: #cccccc;
  color:#666666;
  border-radius: 4px;
}
.btnact {
	font-family:cursive;
	padding: 10px;
	margin: 5px;
	border: none;
	background-color:#ffee88;
	font-weight: bold;
	border-radius: 4px;
}
.btnavl {
	font-family:cursive;
  padding: 10px;
  margin: 5px;
  border: none;
  background-color:#88cccc;
  border-radius: 4px;
}
.nam {
	font-family:cursive;
	border: none;
	border-radius: 2px;
}
.namdis {
	font-family:cursive;
	border: none;
	pointer-events: none;
	user-select: none;
	background-color: #cccccc;
	color:#333333;
	border-radius: 2px;
}
.namact {
	font-family:cursive;
	border: none;
	background-color:#ffee88;
	font-weight: bold;
	border-radius: 2px;
}
.namavl {
	font-family:cursive;
	border: none;
	background-color:#88cccc;
	border-radius: 2px;
}
.mainspan1 {
	vertical-align: top;
	padding: 5px 5px 5px 5px;
	background-color: white;
	display: inline-block;
	width: 40%;
	text-align: left;
}
.mainspan2 {
	vertical-align: top;
	padding: 5px 5px 5px 5px;
	background-color: white;
	display: inline-block;
	width: 40%;
	text-align: right;
}
.log {
	letter-spacing: .5px;
	font-family: san-serif;
	font-size: 125%;
	padding: 5px 5px 5px 5px;
	background-color: LightGray;
	text-align: left;
}
.tags{
	 line-height: 175%;
}
.text {
   font-family:Courier New, sans-serif;
   position:  absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   text-align: center;
   font-size: 20px;
   color: white;
}
        </style>
</head>

<body>

<div id="content" class="container">
<div id="status">
status
</div>
<div id="map">
	<span id="west" class="mapspan" >west</span> <span id="cent" class="mapspan">cent</span> <span id="east" class="mapspan">east</span>
	
</div>
<div id="main">
<span id="Good" class="mainspan1" >GoodGoodGoodGoodGood</span> <span id="Food" class="mainspan2" >FoodFoodFoodFoodFood</span>
</div>
<div id="actions">
actions
</div>
<div id="log" class="log">
log
</div>
</div>
</body>
<script>
var prevInit = 1
var currInit = 1
var inits = []
var foodtaketurn = "";
var skiptaketurn = "";
var pick1 = -1;
var pick2 = -1;
var action = -1;
var Good = "";
var Food = "";
var Logbook = "";
var party = {};
var map = [];
var EventCountdown = 0;
var LogGameplay = false;
var lastMove=[];
var death = 0;
//document.getElementById("content").innerHTML = "404";


function GetMapTile(i,o){
	if(map[i][o].name == undefined){
		EventCountdown--;
		if(map[i][o] == 0){
			map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
		}
		if(map[i][o] == 1){
			map[i][o] = {tag:"Forest",name:randomEntry("Forest"),units:[],hostile:false,clr:"#77cc55"};
			SpawnMobs(i,o,"Forest");//will also change name of map tile
		}
		if(map[i][o] == 4){
			map[i][o] = {tag:"Plains",name:randomEntry("Plains"),units:[],hostile:false,clr:"#aaff77"};
			SpawnMobs(i,o,"Plains");//will also change name of map tile
		}
		if(map[i][o] == 7){//SAFE
			map[i][o] = {tag:"Trail",name:randomEntry("Trail"),units:[],hostile:false,clr:"#eeee88"};
		}
	}

return map[i][o].name;
}
//WALKMAIN--------------------------------------------------------------------
function Walk(i,o){
	death = 0;
	pick1 = -1
	pick2 = -1
	action = -1
	
	
	party.x += o;
	party.y += i
	GetMapTile(party.y,party.x)
	if(map[party.y][party.x].tag == "Trail"){//EVENTS CAN HAPPEN OFF OF TRAILS??
		if(EventCountdown <= 0 && Math.random()<.1){
			//MAKE AN EVENT
			LogEntry("An event could have fired now!")
			EventCountdown = (Math.round(Math.random()*100+50))
		}
	}
	if(map[party.y][party.x].tag == "Cliff" || map[party.y][party.x] == "Wall"){
		party.x -= o;
		party.y -= i;
		LogEntry(randomEntry("Cliffhit"));
	}else if(map[party.y][party.x].hostile){
		lastMove = [i,o]
		if(party.units.length == 1){
			if(map[party.y][party.x].units.length > 1){
			LogEntry("I traveled to"+N(map[party.y][party.x].name)+", and found a group of "+randomEntry("HostileDesc")+" "+map[party.y][party.x].units[0].Tags[0]+"s! They look ready for a fight!")
			}else{
			LogEntry("I traveled to"+N(map[party.y][party.x].name)+", where I ran into"+N(map[party.y][party.x].units[0].Name)+". She looks "+randomEntry("HostileDesc")+randomEntry("Hostile"+map[party.y][party.x].units[0].Tags[0]))
			}
		}else{
			if(map[party.y][party.x].units.length > 1){
			LogEntry("We traveled to"+N(map[party.y][party.x].name)+", and found a group of "+randomEntry("HostileDesc")+" "+map[party.y][party.x].units[0].Tags[0]+"s! They look ready for a fight!")
			}else{
			LogEntry("We traveled to"+N(map[party.y][party.x].name)+". We ran into"+N(map[party.y][party.x].units[0].Name)+" who looks "+randomEntry("HostileDesc")+randomEntry("Hostile"+map[party.y][party.x].units[0].Tags[0]))
			}
		}
		//unclickable buttons
		document.getElementById("west").innerHTML = 
		"<button id=\"NW\" class=\"btndis\">"+GetMapTile(party.y-1,party.x-1)+"</button><br><br>"+
		"<button id=\"CW\" class=\"btndis\">"+GetMapTile(party.y  ,party.x-1)+"</button><br><br>"+
		"<button id=\"SW\" class=\"btndis\">"+GetMapTile(party.y+1,party.x-1)+"</button><br><br>";
		document.getElementById("cent").innerHTML = 
		"<button id=\"NC\" class=\"btndis\">"+GetMapTile(party.y-1,party.x)+"</button><br><br>"+
		"<button id=\"CC\" class=\"btndis\">"+GetMapTile(party.y  ,party.x)+"</button><br><br>"+
		"<button id=\"SC\" class=\"btndis\">"+GetMapTile(party.y+1,party.x)+"</button><br><br>";
		document.getElementById("east").innerHTML = 
		"<button id=\"NE\" class=\"btndis\">"+GetMapTile(party.y-1,party.x+1)+"</button><br><br>"+
		"<button id=\"CE\" class=\"btndis\">"+GetMapTile(party.y  ,party.x+1)+"</button><br><br>"+
		"<button id=\"SE\" class=\"btndis\">"+GetMapTile(party.y+1,party.x+1)+"</button><br><br>";
		document.getElementById("CC").style.backgroundColor  = map[party.y  ][party.x  ].clr;
		document.getElementById("CC").style.color  = "#000000";
	}else{
		lastMove = [i,o]
		if(i != 0 || o != 0){
			if(party.units.length == 1){
				if(map[party.y][party.x].units.length > 1){
				LogEntry("I traveled to"+N(map[party.y][party.x].name)+". I met a group of "+map[party.y][party.x].units[0].Tags[0]+"s! They look friendly!")
				}else if(map[party.y][party.x].units.length == 1){
				LogEntry("I traveled to"+N(map[party.y][party.x].name)+", and met"+N(map[party.y][party.x].units[0].Name)+". "+randomEntry("Calm"+map[party.y][party.x].units[0].Tags[0]))
				}else{
					if(map[party.y][party.x].tag == "Trail"){
						LogEntry("I "+randomEntry("Walk")+" along"+N(map[party.y][party.x].name)+".")
					}else{
						LogEntry("I "+randomEntry("Walk")+" to"+N(map[party.y][party.x].name)+".")
					}
				}
			}else{
				if(map[party.y][party.x].units.length > 1){
				LogEntry("We traveled to"+N(map[party.y][party.x].name)+" where we met a group of "+map[party.y][party.x].units[0].Tags[0]+"s! They look friendly")
				}else if(map[party.y][party.x].units.length == 1){
				LogEntry("We traveled to"+N(map[party.y][party.x].name)+". We met"+N(map[party.y][party.x].units[0].Name)+". "+randomEntry("Calm"+map[party.y][party.x].units[0].Tags[0]))
				}else{
					if(map[party.y][party.x].tag == "Trail"){
						LogEntry("We "+randomEntry("Walk")+" together along"+N(map[party.y][party.x].name)+".")
					}else{
						LogEntry("We "+randomEntry("Walk")+" to"+N(map[party.y][party.x].name)+".")
					}
				
				}
			}
		}
		//clickable buttons
		document.getElementById("west").innerHTML = 
		"<button id=\"NW\" class=\"btn\" onclick=\"Walk(-1,-1)\">"+GetMapTile(party.y-1,party.x-1)+"</button><br><br>"+
		"<button id=\"CW\" class=\"btn\" onclick=\"Walk( 0,-1)\">"+GetMapTile(party.y  ,party.x-1)+"</button><br><br>"+
		"<button id=\"SW\" class=\"btn\" onclick=\"Walk(+1,-1)\">"+GetMapTile(party.y+1,party.x-1)+"</button><br><br>";
		document.getElementById("cent").innerHTML = 
		"<button id=\"NC\" class=\"btn\" onclick=\"Walk(-1,0)\">"+GetMapTile(party.y-1,party.x)+"</button><br><br>"+
		"<button id=\"CC\" class=\"btn\" onclick=\"Walk( 0,0)\">"+GetMapTile(party.y  ,party.x)+"</button><br><br>"+
		"<button id=\"SC\" class=\"btn\" onclick=\"Walk(+1,0)\">"+GetMapTile(party.y+1,party.x)+"</button><br><br>";
		document.getElementById("east").innerHTML = 
		"<button id=\"NE\" class=\"btn\" onclick=\"Walk(-1,+1)\">"+GetMapTile(party.y-1,party.x+1)+"</button><br><br>"+
		"<button id=\"CE\" class=\"btn\" onclick=\"Walk( 0,+1)\">"+GetMapTile(party.y  ,party.x+1)+"</button><br><br>"+
		"<button id=\"SE\" class=\"btn\" onclick=\"Walk(+1,+1)\">"+GetMapTile(party.y+1,party.x+1)+"</button><br><br>";
		document.getElementById("NW").style.backgroundColor = map[party.y-1][party.x-1].clr;
		document.getElementById("CW").style.backgroundColor = map[party.y  ][party.x-1].clr;
		document.getElementById("SW").style.backgroundColor = map[party.y+1][party.x-1].clr;
		document.getElementById("NC").style.backgroundColor = map[party.y-1][party.x  ].clr;
		document.getElementById("CC").style.backgroundColor = map[party.y  ][party.x  ].clr;
		document.getElementById("SC").style.backgroundColor = map[party.y+1][party.x  ].clr;
		document.getElementById("NE").style.backgroundColor = map[party.y-1][party.x+1].clr;
		document.getElementById("CE").style.backgroundColor = map[party.y  ][party.x+1].clr;
		document.getElementById("SE").style.backgroundColor = map[party.y+1][party.x+1].clr;
	}
	Status()
	Main()
	//<button onclick="myFunction()">Click me</button>
}
function Status(){
	prevInit = -1;
	currInit = -1;
	var e = 0;
	var a = 0;
	while(e < party.units.length){
		party.units[e].asleep = false;
		party.units[e].fled = false;
		party.units[e].flying = false;
		party.units[e].antiflying = false;
		party.units[e].swimming = false;
		party.units[e].antiswimming = false;
		party.units[e].cantwalk = false;
		party.units[e].entangler = false;
		party.units[e].eaten = null;
		party.units[e].willing = true;//REMOVE EVENTUALLY
		party.units[e].belly = 0;
		party.units[e].clumsy = false;
		party.units[e].Init = (e*100) + (party.units[e].Figh*1000) + (party.units[e].Flee*1000)
		if(currInit < unit(e).Init){currInit = unit(e).Init}
		party.units[e].Cond = [];
		a = 0;
		while(a < party.units[e].Tags.length){
			if( party.units[e].Tags[a] == "Tiny"){party.units[e].Cond.push(party.units[e].Tags[a]);party.units[e].Size = 1}
			if( party.units[e].Tags[a] == "Small"){party.units[e].Cond.push(party.units[e].Tags[a]);party.units[e].Size = 2}
			if( party.units[e].Tags[a] == "Medium"){party.units[e].Cond.push(party.units[e].Tags[a]);party.units[e].Size = 4}
			if( party.units[e].Tags[a] == "Big"){party.units[e].Cond.push(party.units[e].Tags[a]);party.units[e].Size = 8}
			if( party.units[e].Tags[a] == "Huge"){party.units[e].Cond.push(party.units[e].Tags[a]);party.units[e].Size = 16}
			if( party.units[e].Tags[a] == "Massive"){party.units[e].Cond.push(party.units[e].Tags[a]);party.units[e].Size = 32}
			party.units[e].appetite = (party.units[e].Size*2)-1;
			if( party.units[e].Tags[a] == "Passive"){party.units[e].Cond.push(party.units[e].Tags[a])}
			if( party.units[e].Tags[a] == "Flying"){party.units[e].flying = true;party.units[e].antiflying = true;party.units[e].Cond.push("Flying")}
			if( party.units[e].Tags[a] == "AntiFlying"){party.units[e].antiflying = true;}
			if( party.units[e].Tags[a] == "Swimming"){party.units[e].swimming = true;party.units[e].antiswimming = true;party.units[e].Cond.push("Swimming")}
			if( party.units[e].Tags[a] == "Antiswimming"){party.units[e].antiswimming = true;}
			a++
		}	
		a = 0;
		while(a < party.units[e].Cond.length){
			if( party.units[e].Cond[a] == "Tiny"){
				party.units[e].Size = 1
			}
			if( party.units[e].Cond[a] == "Small"){
				party.units[e].Size = 2
			}
			if( party.units[e].Cond[a] == "Medium"){
				party.units[e].Size = 4
			}
			if( party.units[e].Cond[a] == "Big"){
				party.units[e].Size = 8
			}
			if(party.units[e].Cond[a] == "Asleep" || party.units[e].Cond[a] == "Fled"){
				party.units[e].Cond.splice(a,1)
			}else{
			a++
			}
		}		
		e++;
	}
	
	e = 0;
	while(e < map[party.y][party.x].units.length){
		map[party.y][party.x].units[e].asleep = false;
		map[party.y][party.x].units[e].fled = false;
		map[party.y][party.x].units[e].flying = false;
		map[party.y][party.x].units[e].antiflying = false;
		map[party.y][party.x].units[e].swimming = false;
		map[party.y][party.x].units[e].antiswimming = false;
		map[party.y][party.x].units[e].cantwalk = false;
		map[party.y][party.x].units[e].entangler = false;
		map[party.y][party.x].units[e].passive = false;
		map[party.y][party.x].units[e].eaten = null;
		map[party.y][party.x].units[e].belly = 0;
		map[party.y][party.x].units[e].clumsy = false;

		map[party.y][party.x].units[e].Init = 1+(e*100)+(map[party.y][party.x].units[e].Figh*1000)+(map[party.y][party.x].units[e].Flee*1000)
		if(currInit < unit(e+100).Init){currInit = unit(e+100).Init}
		map[party.y][party.x].units[e].Cond = [];
		a = 0;
		
		if(map[party.y][party.x].units[e].willing == undefined){
			map[party.y][party.x].units[e].willing = (Math.random()<.5);
		}
		while(a < map[party.y][party.x].units[e].Tags.length){
			if( map[party.y][party.x].units[e].Tags[a] == "Passive" && !map[party.y][party.x].hostile){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].passive = true;}
			if( map[party.y][party.x].units[e].Tags[a] == "Tiny"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 1}
			if( map[party.y][party.x].units[e].Tags[a] == "Small"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 2}
			if( map[party.y][party.x].units[e].Tags[a] == "Medium"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 4}
			if( map[party.y][party.x].units[e].Tags[a] == "Big"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 16}
			if( map[party.y][party.x].units[e].Tags[a] == "Huge"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 64}
			if( map[party.y][party.x].units[e].Tags[a] == "Massive"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 256}
			map[party.y][party.x].units[e].appetite = (map[party.y][party.x].units[e].Size*2)-1;
			if( map[party.y][party.x].units[e].Tags[a] == "Flying"){map[party.y][party.x].units[e].flying = true;map[party.y][party.x].units[e].antiflying = true;map[party.y][party.x].units[e].Cond.push("Flying")}
			if( map[party.y][party.x].units[e].Tags[a] == "AntiFlying"){map[party.y][party.x].units[e].antiflying = true;}
			if( map[party.y][party.x].units[e].Tags[a] == "Swimming"){map[party.y][party.x].units[e].swimming = true;map[party.y][party.x].units[e].antiswimming = true;map[party.y][party.x].units[e].Cond.push("Swimming")}
			if( map[party.y][party.x].units[e].Tags[a] == "Antiswimming"){map[party.y][party.x].units[e].antiswimming = true;}
			a++
		}
		a = 0;
		while(a < map[party.y][party.x].units[e].Cond.length){
			
			
			
			a++
		}		

		e++;
	}
}
function Main(){
	
	//LogEntry(hero)
	Good = "";
	Food = "";
	//GOOD
	var e = 0;
	var a = 0;
	var Init = ""
	while(e < party.units.length){
		if(party.units[e].eaten == null){
			if(map[party.y][party.x].hostile){
				
				if(currInit == party.units[e].Init){
					Init = " - Active"
				}else{
					Init = ""
				}
				if(currInit == party.units[e].Init && party.units[e].asleep){
					//Init = " - Active - Asleep"
						skiptaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+" is asleep, Skip Turn</button>"
				}
				if(currInit == party.units[e].Init && party.units[e].fled){
					//Init = " - Active - Fled"
						skiptaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+" has fled, Skip Turn</button>"
				}
			}
			if(pick1 == -1 && pick2 == -1 && (!map[party.y][party.x].hostile || party.units[e].Init==currInit) && !party.units[e].asleep && !party.units[e].fled){//(No picks. not hostile, or current initiative)or someone else was picked and an action is picked
			Good += "<button class=\"namavl\" onclick=\"SelectDom("+e+")\">"+party.units[e].Name+Init+"</button>"
			}else if(pick1 == e){//pick one chosen, is hero.
			Good += "<button class=\"namact\" onclick=\"SelectDom(-1)\">"+party.units[e].Name+Init+"</button>"
			}else if(pick1 != e && action > -1 && action != 2 && !party.units[e].fled){//pick one chosen. action chosen
			Good += "<button class=\"namavl\" onclick=\"SelectSub("+e+")\">"+party.units[e].Name+Init+"</button>"
			}else{
			Good += "<button class=\"namdis\">"+party.units[e].Name+Init+"</button>"
			}
			if(e == 0){
				Good += "<BR>&nbsp&nbspPunishment: "+party.units[e].CPun+"/"+party.units[e].MPun+"<BR>"
				Good += "&nbsp&nbspHungry:"+stat(party.units[e].CPle)+"&nbspHorny:"+stat(party.units[e].MPle-party.units[e].CPle)+"<BR>"
			}else{
				Good += "<br>&nbsp&nbspPunishment: "+(party.units[e].CPun)+"/"+(party.units[e].MPun)+"&nbsp&nbsp<BR>"
				Good += "&nbsp&nbspPleasure: "+(party.units[e].CPle)+"/"+(party.units[e].MPle)+"&nbsp&nbsp<BR>"
			}
			
			//Good += "<center>"
			Good += "&nbsp<span class=\"tags\">"
			a = 0
			while(a < party.units[e].Cond.length){
				Good += "<i> "+party.units[e].Cond[a] + "</i>";
				
				if(a == 3 || a == 7 || a == 11){Good += "<br>"}else if(a < party.units[e].Cond.length-1){Good+=","}
				//if(a == 3 || a == 7 || a == 11){Good += "</center><center>"}else if(a < party.units[e].Cond.length-1){Good+=","}
				a++;
			}
			//Good += "</center><br>"
			Good += "</span><br>"
			
			Good += "&nbsp&nbspFight:"+stat(party.units[e].Figh)+"  Flirt:"+stat(party.units[e].Flir)+"  Flee:"+stat(party.units[e].Flee)+"<BR>"
			Good += "&nbsp&nbspFeast:"+stat(party.units[e].Feas)+"&nbsp; Fuck:"+stat(party.units[e].Fuck)+"  Feed:"+stat(party.units[e].Feed)+""
			
	
			//if(a > 0){Food += "<br>"}
			//Food += "<br><br>"
		}else if(currInit == party.units[e].Init){
			skiptaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+" is digesting, Skip Turn</button>"
		}
		e++;
	}
	//FOOD - all picks are +100
	e = 0;
	a = 0;
	while(e < map[party.y][party.x].units.length){
		if(map[party.y][party.x].units[e].eaten == null){
			if(map[party.y][party.x].hostile){
				if(currInit == map[party.y][party.x].units[e].Init && !map[party.y][party.x].units[e].asleep){
					foodtaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"FoodAction("+e+")\">"+map[party.y][party.x].units[e].Name+"'s Turn</button>"
				}else if(currInit == map[party.y][party.x].units[e].Init && map[party.y][party.x].units[e].asleep){
					foodtaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"FoodAction("+e+")\">"+map[party.y][party.x].units[e].Name+" is asleep, Skip Turn</button>"
				}
				if(currInit == unit(e+100).Init){
					Init = " - Active"
				}else{
					Init = ""
				}
				
			}
			if(pick1 != (e+100) && action > -1 && ((action != 1 && action != 4 && action != 5) || !map[party.y][party.x].units[e].asleep)){//pick one chosen, isnt hero. action chosen
			Food += "<button class=\"namavl\" onclick=\"SelectSub("+(e+100)+")\">"+map[party.y][party.x].units[e].Name+Init+"</button>"
			}else if(currInit == map[party.y][party.x].units[e].Init && map[party.y][party.x].hostile){
			Food += "<button class=\"namact\">"+map[party.y][party.x].units[e].Name+Init+"</button>"
			}else{
			Food += "<button class=\"namdis\">"+map[party.y][party.x].units[e].Name+Init+"</button>"
			}
			Food += "<br>&nbspPunishment: "+(map[party.y][party.x].units[e].CPun)+"/"+(map[party.y][party.x].units[e].MPun)+"&nbsp&nbsp<BR>"
			Food += "&nbspPleasure: "+stat2(map[party.y][party.x].units[e].CPle)+"/"+(map[party.y][party.x].units[e].MPle)+"&nbsp&nbsp<BR>"
			Food += "&nbsp&nbspFight:"+stat(map[party.y][party.x].units[e].Figh)+"  Flirt:"+stat(map[party.y][party.x].units[e].Flir)+"  Flee:"+stat(map[party.y][party.x].units[e].Flee)+"<BR>"
			Food += "&nbsp&nbspFeast:"+stat(map[party.y][party.x].units[e].Feas)+"&nbsp; Fuck:"+stat(map[party.y][party.x].units[e].Fuck)+"  Feed:"+stat(map[party.y][party.x].units[e].Feed)+""
			
			Food += "<center>"
			a = 0
			while(a < map[party.y][party.x].units[e].Cond.length){
				Food += "<i> "+map[party.y][party.x].units[e].Cond[a] + "</i>";
				if(a == 3 || a == 7 || a == 11){Food += "</center><center>"}else if(a < map[party.y][party.x].units[e].Cond.length-1){Food+=","}
				a++;
			}
			Food += "</center><br>"
			//if(a > 0){Food += "<br>"}
			//Food += "<br><br>"
		}else if (currInit == map[party.y][party.x].units[e].Init){
			foodtaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"FoodAction("+e+")\">"+map[party.y][party.x].units[e].Name+" is digesting, Skip Turn</button>"
		}
		e++;
	}

	document.getElementById("Good").innerHTML = Good;
	document.getElementById("Food").innerHTML = Food;
	if(skiptaketurn != ""){//use for sleeping/fled creatures
		document.getElementById("actions").innerHTML = skiptaketurn
	}else if(foodtaketurn != ""){
		document.getElementById("actions").innerHTML = foodtaketurn
	}else if((pick1 == -1 && action == -1) || (party.units.length == 1 && map[party.y][party.x].units.length == 0)){
	document.getElementById("actions").innerHTML = 
	"<button id=\"FIG\"class=\"btndis\" onclick=\"SelectAction(0)\">Fight</button><button id=\"FON\" class=\"btndis\" onclick=\"SelectAction(1)\">Flirt</button><button id=\"FLE\" class=\"btndis\" onclick=\"SelectAction(2)\">Flee</button><br>"+
	"<button id=\"FEA\"class=\"btndis\" onclick=\"SelectAction(3)\">Feast</button><button id=\"FUC\" class=\"btndis\" onclick=\"SelectAction(4)\"  >Fuck</button><button id=\"FEE\" class=\"btndis\" onclick=\"SelectAction(5)\">Feed</button>"
	}else{
	document.getElementById("actions").innerHTML = 
	"<button id=\"FIG\"class=\"btnavl\" onclick=\"SelectAction(0)\">Fight</button><button id=\"FON\" class=\"btnavl\" onclick=\"SelectAction(1)\">Flirt</button><button id=\"FLE\" class=\"btnavl\" onclick=\"SelectAction(2)\">Flee</button><br>"+
	"<button id=\"FEA\"class=\"btnavl\" onclick=\"SelectAction(3)\">Feast</button><button id=\"FUC\" class=\"btnavl\" onclick=\"SelectAction(4)\"  >Fuck</button><button id=\"FEE\" class=\"btnavl\" onclick=\"SelectAction(5)\">Feed</button>"
		if(action == 0){document.getElementById("FIG").style.backgroundColor = "#ffee88";document.getElementById("FIG").style.fontWeight = "bold"}
		if(action == 1){document.getElementById("FON").style.backgroundColor = "#ffee88";document.getElementById("FON").style.fontWeight = "bold"}
		if(action == 2){document.getElementById("FLE").style.backgroundColor = "#ffee88";document.getElementById("FLE").style.fontWeight = "bold"}
		if(action == 3){document.getElementById("FEA").style.backgroundColor = "#ffee88";document.getElementById("FEA").style.fontWeight = "bold"}
		if(action == 4){document.getElementById("FUC").style.backgroundColor = "#ffee88";document.getElementById("FUC").style.fontWeight = "bold"}
		if(action == 5){document.getElementById("FEE").style.backgroundColor = "#ffee88";document.getElementById("FEE").style.fontWeight = "bold"}	
	}


}
function SelectDom(Entry){
	if(Entry == -1){//deselect
		pick1 = -1;
		pick2 = -1;
		action = -1;
	}else{
		pick1 = Entry;
	}
	Main()
}
function SelectSub(Entry){
	pick2 = Entry;
	PerformAction();
}
function SelectAction(Entry){
	if(Entry == action){//deselect
		action = -1;
	}else{
		action = Entry;
	}
	Main()
}
function PerformAction(){//randomAction:[action,dom,sub,offence,defence,terrain]
	var domval = 0;
	var subval = 0
	var deadName = ""
	if(action == 0){//FIGHT
		if(pick2 < 100){//Making this passive, no damage done.
			domval = 0;//AR(party.units[pick1].Figh)
			//if(pick2 > 0){party.units[pick2].CPle = 0;}
			party.units[pick2].CPun += domval;
			subval = party.units[pick2].CPun/party.units[pick2].MPun;
		}else{
			domval = AR(party.units[pick1].Figh)
			if((map[party.y][party.x].units[pick2-100].flying) && Math.random()<.5 && !party.units[pick1].antiflying){//EVADE
				domval = 0;
			}
			map[party.y][party.x].units[pick2-100].CPle = 0;
			map[party.y][party.x].units[pick2-100].CPun += domval;
			subval = map[party.y][party.x].units[pick2-100].CPun/map[party.y][party.x].units[pick2-100].MPun;
		}
		LogEntry(randomAction([0,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
		if(subval >= 1){deadName=map[party.y][party.x].units[pick2-100].Name;Removal(pick2);fullPeace(deadName,-1,-1,pick1)}
		if(pick2 >= 100&& !map[party.y][party.x].hostile && map[party.y][party.x].units.length > 0){map[party.y][party.x].hostile = true;currInit=0}//attacking starts combat
	}
	if(action == 1){//FLIRT
		if(pick2 < 100){
			domval = AR(party.units[pick1].Flir)
			if(party.units[pick2].CPle<party.units[pick2].MPle){
			party.units[pick2].CPle = Math.min(party.units[pick2].CPle+domval,party.units[pick2].MPle-1);
			}
			subval = party.units[pick2].CPle/party.units[pick2].MPle;
		}else{
			domval = AR(party.units[pick1].Flir)
			if(map[party.y][party.x].units[pick2-100].CPle < 0){map[party.y][party.x].units[pick2-100].CPle=0}//secretly makes flirting required if fucking fails first time vs passive
			if(map[party.y][party.x].units[pick2-100].CPle< map[party.y][party.x].units[pick2-100].MPle){//keep pleasure from maxing without a fuck
				map[party.y][party.x].units[pick2-100].CPle = Math.min(map[party.y][party.x].units[pick2-100].CPle+domval,map[party.y][party.x].units[pick2-100].MPle-1);
			}
			subval = map[party.y][party.x].units[pick2-100].CPle/map[party.y][party.x].units[pick2-100].MPle;
		}
		LogEntry(randomAction([1,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
	}
	if(action == 2){//FLEE
		domval = AR(party.units[pick1].Flee)
		if(!map[party.y][party.x].hostile){
			domval = 0
		}else if(domval >= map[party.y][party.x].units[pick2-100].Flee){
			domval = 1
			party.units[pick1].fled = true;
			party.units[pick1].Cond[party.units[pick1].Cond.length] = "Fled";
		}else{
			domval = 0
		}
		LogEntry(randomAction([2,pick1,pick2,domval,subval,map[party.y][party.x].tag]) +" "+ fullEscape(""))
		
	}
	if(action == 3){//FEAST
		if(pick1 == 0 && party.units[0].Cple <= 0){
			subval = -1;
		}else{
			//subval == -2:SIZE -1:FULL 0:FAILED 1:UNDIGESTED 2:UNWILLING 3:WILLING
			if(pick2 < 100){
				subval = 3
				StatGain(pick1,pick2)
			}else if(map[party.y][party.x].hostile){
				domval = AR(party.units[pick1].Feas)
				if((map[party.y][party.x].units[pick2-100].flying) && !party.units[pick1].antiflying && Math.random()<.5){//EVADE
					subval = 0;
				}else if(domval >= map[party.y][party.x].units[pick2-100].MPun-map[party.y][party.x].units[pick2-100].CPun){
					if(map[party.y][party.x].units[pick2-100].Feed >= party.units[pick1].Feas){
						map[party.y][party.x].units[pick2-100].eaten = party.units[pick1];
						party.units[pick1].Cond.push("Digesting "+ map[party.y][party.x].units[pick2-100].Name)
						party.units[pick1].belly += map[party.y][party.x].units[pick2-100].Size;
						subval = 1;//SWALLOWED
						LogEntry("NOT DIGESTED")
					}else{
						subval = 2;
						StatGain(pick1,pick2)
					}
				}else{
					subval = 0;
				}
			}else{//PASSIVE. TEST VS PLE BEFORE PUN. DECIDES IF ITS WILLING/UNWILLING/UNSUCCESSFUL. ONLY WILLING VORE KEEPS HOSTILE:FALSE
				domval = AR(party.units[pick1].Feas)
				LogEntry(map[party.y][party.x].units[pick2-100].willing)
				if(domval >= map[party.y][party.x].units[pick2-100].MPle-map[party.y][party.x].units[pick2-100].CPle && map[party.y][party.x].units[pick2-100].willing){
					subval = 3;
					StatGain(pick1,pick2)
				}else if(domval >= map[party.y][party.x].units[pick2-100].MPun-map[party.y][party.x].units[pick2-100].CPun && (!map[party.y][party.x].units[pick2-100].flying ||  party.units[pick1].antiflying || Math.random()<.5)){
					if(map[party.y][party.x].units[pick2-100].Feed >= party.units[pick1].Feas){
						map[party.y][party.x].units[pick2-100].eaten = party.units[pick1];
						party.units[pick1].belly += map[party.y][party.x].units[pick2-100].Size;
						party.units[pick1].Cond.push("Digesting "+ map[party.y][party.x].units[pick2-100].Name)
						subval = 1;//SWALLOWED
						LogEntry("NOT DIGESTED")
					}else{
						subval = 2;
						StatGain(pick1,pick2)
					}
				}else{
					subval = 0;
				}
					
			}
			LogEntry(randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
			if(!map[party.y][party.x].hostile && map[party.y][party.x].units.length > 0 && (subval == 0 || subval == 1 || subval == 2) ){map[party.y][party.x].hostile = true;currInit=0}//attacking starts combat
			if(pick2 < 100){
				Removal(pick2)
			}else{
				if(subval >= 2){deadName=map[party.y][party.x].units[pick2-100].Name;Removal(pick2);fullPeace(-1,-1,deadName,pick1)}
			}
		}
	}
	if(action == 4){//FUCK
		if(pick1 == 0){
			if(party.units[0].CPle>=party.units[0].MPle){//not horny
				domval = -1;
			}else{
				if(pick2<100){
					domval = AR(party.units[0].Fuck)//HEAL BY BOTH FUCK VALUES
					if(party.units[pick2].CPle < party.units[pick2].MPle){
						party.units[0].CPun = Math.max(party.units[0].CPun-domval,0)
					}
					party.units[pick2].CPle = Math.min(party.units[pick2].CPle+AR(party.units[0].Fuck),party.units[pick2].MPle)
					party.units[pick2].CPun = Math.max(party.units[pick2].CPun-domval,0)
					party.units[0].CPle = Math.min(party.units[0].CPle+AR(party.units[pick2].Size),party.units[0].MPle)

					domval = 1
				}else{//FOOD
					if(AR(party.units[0].Fuck) >= map[party.y][party.x].units[pick2-100].MPle-map[party.y][party.x].units[pick2-100].CPle){
						domval = AR(party.units[0].Fuck)//HEAL BY BOTH FUCK VALUES
						
						if(map[party.y][party.x].units[pick2-100].CPle<map[party.y][party.x].units[pick2-100].MPle){
							party.units[0].CPun = Math.max(party.units[0].CPun-domval,0)
						}
						map[party.y][party.x].units[pick2-100].CPle = map[party.y][party.x].units[pick2-100].MPle
						map[party.y][party.x].units[pick2-100].CPun = Math.max(map[party.y][party.x].units[pick2-100].CPun-domval,0)
						if(map[party.y][party.x].hostile){
							map[party.y][party.x].units[pick2-100].Cond[map[party.y][party.x].units[pick2-100].Cond.length] = "Asleep"
							map[party.y][party.x].units[pick2-100].asleep = true;
						}
						party.units[0].CPle = Math.min(party.units[0].CPle+AR(map[party.y][party.x].units[pick2-100].Size),party.units[0].MPle)
						
						domval = 1
					}else if(!map[party.y][party.x].hostile && map[party.y][party.x].units[pick2-100].CPle == 0){//Secretly require flirting for nonhostile creatures with zero CPLE
						map[party.y][party.x].units[pick2-100].CPle = -5;
					}
				}
			}
		}else{
			if(pick2 == 0){
				if(party.units[0].CPle>=party.units[0].MPle){//not horny
					domval = -1;
				}else{
					if(party.units[pick1].CPle < party.units[pick1].MPle){
						party.units[0].CPun = Math.max(party.units[0].CPun-AR(party.units[0].Fuck),0)
					}
					party.units[pick1].CPle = Math.min(party.units[pick1].CPle+AR(party.units[0].Fuck),party.units[pick1].MPle)
					party.units[pick1].CPun = Math.max(party.units[pick1].CPun-AR(party.units[0].Fuck),0)
					party.units[0].CPle = Math.min(party.units[0].CPle+AR(party.units[pick1].Size),party.units[0].MPle)
					domval = 1
				}
			}else if(pick2<100){
					party.units[pick1].CPle = Math.min(party.units[pick1].CPle+AR(party.units[pick2].Fuck),party.units[pick1].MPle)
					party.units[pick2].CPle = Math.min(party.units[pick2].CPle+AR(party.units[pick1].Fuck),party.units[pick2].MPle)
					domval = 1
			}else{//GOOD FUCKING FOOD
				if(AR(party.units[pick1].Fuck) >= map[party.y][party.x].units[pick2-100].MPle-map[party.y][party.x].units[pick2-100].CPle){
					map[party.y][party.x].units[pick2-100].CPle = map[party.y][party.x].units[pick2-100].MPle
					party.units[pick1].CPle = Math.min(party.units[pick1].CPle+AR(map[party.y][party.x].units[pick2-100].Fuck),party.units[pick1].MPle)
					if(party.units[pick1].CPle >= party.units[pick1].MPle){subval=1}
					if(map[party.y][party.x].hostile){
						map[party.y][party.x].units[pick2-100].Cond.push("Asleep")
						map[party.y][party.x].units[pick2-100].asleep = true;
						if(subval == 1){party.units[pick1].asleep=true;party.units[pick1].Cond.push("Asleep")}
					}
					domval = 1
					//move sides
				}
			}
		}
		LogEntry(randomAction([4,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
		if(pick2 >= 100 && domval == 1){
			if(pick1 == 0){
				LogEntry("CHECKIT A: "+ map[party.y][party.x].units[pick2-100])
				if(map[party.y][party.x].units[pick2-100].belly > 0){
					Digest(map[party.y][party.x].units[pick2-100])
					Digest(party.units[0])
				}
				LogEntry("CHECKIT B: "+ map[party.y][party.x].units[pick2-100])
				party.units.push(map[party.y][party.x].units[pick2-100])
				map[party.y][party.x].units.splice(pick2-100,1);
				if(map[party.y][party.x].units.length == 0){
					fullPeace(-1,pick2-100,-1,pick1)
				}
			}else{//CHECK FOR PEACE
				fullPeace(-1,pick2,-1,pick1)
			}
		}
	}
	pick1	= -1;
	pick2	= -1;
	action	= -1;
	TimeFlow()
}
function FoodAction(Entry){
	//Check for Passive, Horny, Hungry, Asleep
	var u = Math.floor(Math.random()*party.units.length)
	if(map[party.y][party.x].units[Entry].asleep){
		LogEntry("The "+map[party.y][party.x].units[Entry].Name +" "+ randomEntry("Asleep"))
	}else if(map[party.y][party.x].units[Entry].eaten != null){
		if(map[party.y][party.x].units[Entry].eaten == party.units[0]){
			LogEntry("The "+map[party.y][party.x].units[Entry].Name + " struggles inside my stomach.")
		}else{
			LogEntry("The "+map[party.y][party.x].units[Entry].Name + " struggles inside my "+map[party.y][party.x].units[Entry].eaten.Name+"'s stomach.")
		}
	}else{
		if(party.units.length > 1 && Math.random()<.99){
			u = Math.floor(Math.random()*party.units.length-1)+1;//makes enemies focus on other girls
		}
		
		while(party.units[u].asleep || party.units[u].fled || party.units[u].eaten != null){
		if(party.units.length > 1 && Math.random()<.90){
			u = Math.floor(Math.random()*party.units.length-1)+1;//makes enemies focus on other girls
		}
			u = Math.floor(Math.random()*party.units.length)	
		}
		var domval = 0;
		var subval = 0



		domval = AR(map[party.y][party.x].units[Entry].Figh)

		if((party.units[u].flying) && Math.random()<.5 && !map[party.y][party.x].units[Entry].antiflying){
			LogEntry(randomAction([0,Entry+100,u,0,subval,map[party.y][party.x].tag]))
		}else{
			if(AR(map[party.y][party.x].units[Entry].Feas) > party.units[u].MPun-party.units[u].CPun && map[party.y][party.x].units[Entry].Size >= party.units[u].Size && Math.random()<.95){
				if(AR(map[party.y][party.x].units[Entry].Feas) > party.units[u].MPun-party.units[u].CPun && 2<4){//ADDS CHANCE FOR FAILURE
					if(map[party.y][party.x].units[Entry].Feas > party.units[u].MPun-party.units[u].feed){
						LogEntry(randomAction([3,Entry+100,u,domval,2,map[party.y][party.x].tag]))
						StatGain(Entry+100,u)
						Removal(u)
						death++
					}else{
						party.units[u].eaten = map[party.y][party.x].units[Entry];
						map[party.y][party.x].units[Entry].Cond.push("Digesting "+ party.units[u].Name)
						map[party.y][party.x].units[Entry].belly += party.units[u].Size
						LogEntry(randomAction([3,Entry+100,u,domval,1,map[party.y][party.x].tag]))
					}
				}else{//Almost eaten
					LogEntry(randomAction([3,Entry+100,u,domval,0,map[party.y][party.x].tag]))
				}
			}else{
				party.units[u].CPun += domval;
				if(u>0){party.units[u].CPle = 0;}
				subval = party.units[u].CPun/party.units[u].MPun;
				LogEntry(randomAction([0,Entry+100,u,domval,subval,map[party.y][party.x].tag]))
				if(subval >= 1){Removal(u);death++}
			}
		}
	}
	foodtaketurn = "";
	TimeFlow();
}
function SkipAction(Entry){	
	//Check for Passive, Horny, Hungry, Asleep
	if(party.units[Entry].eaten != null){
		LogEntry("My "+party.units[Entry].Name + " struggles inside the "+party.units[Entry].eaten.Name+"'s stomach!")
	}else if(party.units[Entry].asleep){
		LogEntry("My "+party.units[Entry].Name + randomEntry("Asleep"))
	}else if(party.units[Entry].fled){
		if(Entry == 0){
			if(party.units.length == 2){
				LogEntry("I feel like a coward for leaving my" + party.units[1].Name+" but I'm too afraid to go back!")
			}else{
				LogEntry("I feel like a coward for running away, but I'm too afraid to go back!")
			}
		}else{
			if(party.units[0].fled){
				if(party.units.length == 3 && Entry == 1){
					LogEntry("Away from the fighting, my "+party.units[Entry].Name+" holds me close as we both worry about " + party.units[2].Name+".")
				}else if(party.units.length == 3){
					LogEntry("Away from the fighting, my "+party.units[Entry].Name+" holds me close as we both worry about " + party.units[1].Name+".")
				}else{
					LogEntry("Away from the fighting, my "+party.units[Entry].Name+" holds me close as we continue to hide!")
				}
			}else{
				if(Math.random()<.20){
					LogEntry("I see my "+party.units[Entry].Name+" watching us at a safe distance from the fight.")
				}else if(Math.random()<.20 && party.units[Entry].CPun > 0){
					LogEntry("My "+party.units[Entry].Name+" was pretty hurt when she ran away, I hope she's ok!")
				}else{
					LogEntry("I hope my "+party.units[Entry].Name+" is safe whereever she ran away to.")
				}
			}
		}
	}
	skiptaketurn = "";
	TimeFlow();
}
function Digest(Entry){//ENTRY = OBJECT
	var i = 0;
	while(i < party.units.length){
		
		if(party.units[i].eaten == Entry){
			LogEntry(party.units[i].Name+" digests inside "+Entry.Name+"!")
			//Digest(party.units[i])
			Digest(party.units[i])
			Removal(i)
		}
		i++
	}
	var i = 0;
	while(i < map[party.y][party.x].units.length){
		
		//CANT DO DIGESTION STUFF UNTIL unit FUNCTION IS WORKING
		if(unit(i+100).eaten == Entry){
			LogEntry(unit(i+100).Name+"Digests inside "+Entry.Name+"!")
			//Digest(party.units[i])
			Digest(unit(i+100))
			Removal(i+100)
		}
		i++
	}
}
function Removal(Entry){
	var deadName = ""
	var deadtale = ""
	if(Entry == 0){
		StartTheGame()
		LogEntry("OH FUCK I DIED!")
		return;
	}else if (Entry < 100){
		deadName = unit(Entry).Name;
		party.units.splice(Entry,1);
	}else{
		deadName = unit(Entry).Name;
		map[party.y][party.x].units.splice(Entry-100,1);
	}
	//there is no fucking way this works perfectly on the first try, keep an eye on it!
	
	deadtale = fullEscape(deadName)
	if(deadtale != ""){
		LogEntry(deadtale);
	}
}
function fullPeace(defeatedOne,fuckedOne,eatenOne,Cause){//String, Number, String, Number
	var i = 0;
	var o = 0;
	var peace = true;
	var heroFled = false;
	while(i < map[party.y][party.x].units.length){
		if(!map[party.y][party.x].units[i].asleep && map[party.y][party.x].units[i].eaten == null){
			peace = false;
		}
		i++;
	}
	if(peace){
		map[party.y][party.x].hostile = false;
		i = 0;
		while(i < map[party.y][party.x].units.length){
			o = 0
			while(o < map[party.y][party.x].units[i].Tags.length){
				if(map[party.y][party.x].units[i].Tags[o] == "Passive"){
					map[party.y][party.x].units[i].Tags.splice(o,1);
				}else{
					o++;
				}
			}
			map[party.y][party.x].units[i].Tags.push("Passive")
			i++;
		}
		i = 0;//REMOVE FLED TAG
		while(i < party.units.length){
			o = 0
			while(o < party.units[i].Tags.length){
				if(party.units[i].Cond[o] == "Fled"){
					if(i == 0){heroFled = true}
					party.units[i].Cond.splice(o,1);
				}else{
					o++;
				}
			}
			i++;
		}
		
		if(defeatedOne != ""){
			if(heroFled){
				if(map[party.y][party.x].units.length > 1){
					LogEntry("With the fighting over, I sheepishly return to see my friends making peace with the other girls.")
				}else if(map[party.y][party.x].units.length > 0){
					LogEntry("With the fighting over, I sheepishly return to see my friends making peace with the "+map[party.y][party.x].units[0].Name+".")
				}else{
					LogEntry("With the fighting over, I sheepishly return to my friends.")
				}
			}else{
				if(map[party.y][party.x].units.length > 1){
					LogEntry("With the fighting over, we make peace with the other girls.")
				}else if(map[party.y][party.x].units.length > 0){
					LogEntry("We make peace with the "+map[party.y][party.x].units[0].Name+" once she wakes up, she smiles in her afterglow.")
				}
			}
		}else if(fuckedOne > -1){
			if(fuckedOne < 100 && map[party.y][party.x].units.length == 1){
				LogEntry("With the fighting over, my new "+party.units[fuckedOne].Name+" tells the "+map[party.y][party.x].units[0].Name+" that she's joining my adventure!")
			}
			if(fuckedOne < 100 && map[party.y][party.x].units.length > 1){
				LogEntry("With the fighting over, my new "+party.units[fuckedOne].Name+" announces that she's joining my adventure!")
			}
			if(Cause > 0){
				LogEntry("The fight is officially over when my "+party.units[Cause].Name +" and the "+map[party.y][party.x].units[fuckedOne-100].Name+" finish making love.")
			}
		}else if(eatenOne != ""){
			if(heroFled){
				if(map[party.y][party.x].units.length > 1){
					LogEntry("With the fighting over, I sheepishly return to see my friends making peace with the other girls.")
				}else if(map[party.y][party.x].units.length > 0){
					LogEntry("With the fighting over, I sheepishly return to see my friends making peace with the "+map[party.y][party.x].units[0].Name+".")
				}else{
					LogEntry("With the fighting over, I sheepishly return to my friends. My "+party.units[Cause].Name+" burps loudly before welcoming me back.")
				}
			}else{
				if(Cause == 0){
					if(map[party.y][party.x].units.length == 1){
						LogEntry("I wake the "+map[party.y][party.x].units[0].Name+" and help her up. She doesn't look like she wants to fight anymore. She asks where her "+eatenOne+" is. Her eyes grow wide in understanding when she sees my swollen belly, but she doesn't seem too upset.")
					}else if (map[party.y][party.x].units.length > 1){
						LogEntry("When the other girls wake up, they ask where the "+eatenOne+" went. I try telling them a lie, but a loud burp escapes me instead. They don't seem too bothered by the realization that I had eaten the "+eatenOne+".")
					}
				}else{
					if(map[party.y][party.x].units.length == 1){
						LogEntry("My "+party.units[Cause].Name+" helps wake up the"+map[party.y][party.x].units[0].Name+". She doesn't look like she wants to fight anymore. She asks where her "+eatenOne+" is. Her eyes grow wide in understanding when she sees the swollen belly, but she doesn't seem too upset.")
					}else if (map[party.y][party.x].units.length > 1){
						LogEntry("When the other girls wake up, they ask where the "+eatenOne+" went. I try telling them a lie, but my "+party.units[Cause].Name+" moans loudly as she rubs her swollen belly. The girls don't seem too bothered by the realization that the "+eatenOne+" had been eaten.")
					}
				}
			}
		}
		Walk(0,0);
	}
}
function fullEscape(defeatedOne){
	var escaped = 0;
	
	var losses = [];
	var i = 0;
	while(i < party.units.length){
		if(escaped >= 0){
			if(!party.units[i].asleep && !party.units[i].fled && party.units[i].eaten == null){escaped = -1;}
			if(party.units[i].fled){escaped = 1;}
		}
		i++
	}

	
	if(escaped == 1){
		i = 0
		while(i < party.units.length){
			//Only creatures of same type as first FOOD rejoin other side. the rest are spliced.
			if(!party.units[i].fled){
				
				if(party.units[i].Tags[0] == map[party.y][party.x].units[0].Tags[0]){
					losses.push(party.units[i].Name);
					map[party.y][party.x].units.push(party.units[i])
					party.units.splice(i,1);
				}else{
					losses.splice(0,0,party.units[i].Name);//THIS DOESNT REMOVE ANY ELEMENTS
					party.units.splice(i,1);
					death++
				}
			}else{
			i++
			}
		}

		party.y -= lastMove[0]
		party.x -= lastMove[1]
		Walk(0,0)
		
		if(defeatedOne == ""){
			if(party.units.length == 1){
				if(losses.length > 1 && death > 1){
					return String("I catch my breath back at the "+map[party.y][party.x].name+". I wonder what happened to the others...")
				}else if(death > 0){
					return String("I catch my breath back at the "+map[party.y][party.x].name+". I feel so alone in this terrifying world!")
				}else{
					return String("I hide back at the "+map[party.y][party.x].name+" and hope they don't come looking for me. After a long while I stand up and dust myself off. I'm lucky to have gotten away!")
				}
			}else if(party.units.length == 2){
				if(death > 0){
					return String("I find my "+party.units[1].Name+" back at the "+map[party.y][party.x].name+". I hug her tight as we still tremble, and whisper we're safe now.")
				}else{
					return String("I find my "+party.units[1].Name+" back at the "+map[party.y][party.x].name+". She hugs me tight as I still tremble, and reminds me that we're safe now.")
				}
			}else{
				if(death > 2){
					return String("I find the others back at the "+map[party.y][party.x].name+". My "+party.units[Math.floor(Math.random()*party.units.length-1)+1].Name+" asks me what happened to the others, tears run down everyones eyes as I hold her tight.")
				}else if(death > 0){
					return String("I find the others back at the "+map[party.y][party.x].name+". They look relieved to see I'm ok.")
				}else{
					return String("I catch my breath back at the "+map[party.y][party.x].name+". I'm relieved to see my new friends are safe!")
				}
			}
		}else{
			if(party.units.length == 1){
				return String("As I recover back at the "+map[party.y][party.x].name+", I hear my "+defeatedOne+" cry out in pain!")
			}else if(party.units.length == 2){
				return String(party.units[1].Name+" and I recover from the fight at the "+map[party.y][party.x].name+". We both start to cry when we hear "+defeatedOne+" scream out!")
			}else{
				return String("I rest with my surviving friends at the "+map[party.y][party.x].name+", we all feel aweful when we hear "+defeatedOne+" shriek in pain.")
			}
		}
	}else{
		return "";
	}
}
function LogEntry(Entry){
	Logbook = Entry + "<br><br>" + Logbook;
	document.getElementById("log").innerHTML = Logbook
}
//WALKMAIN-END----------------------------------------------------------------
window.addEventListener('load', function () {
	if(window.innerWidth < window.innerHeight){
	document.getElementById("content").style.width = window.innerWidth + "px";
	}else{
	document.getElementById("content").style.width = window.innerHeight + "px";
	}
	StartTheGame()
})
function StartTheGame(){
	
	currInit = 1
	inits = []
	foodtaketurn = "";
	skiptaketurn = "";
	pick1 = -1;
	pick2 = -1;
	action = -1;
	Good = "";
	Food = "";
	Logbook = "";
	EventCountdown = Math.round(Math.random()*50+100)
	party = {
	  x:12,
	  y:12,
	  units:[]
	};
	party.units.push({
		Name:"The Protagonist",
		CPun:0,
		MPun:300,
		CPle:5,
		MPle:10,
		Figh:5,//+Math.round(Math.random()*5),
		Feas:10,//+Math.round(Math.random()*5),
		Flir:5,//+Math.round(Math.random()*5),
		Fuck:10,//+Math.round(Math.random()*5),
		Flee:10,//+Math.round(Math.random()*5),
		Feed:5,//+Math.round(Math.random()*5),
		Init:0,
		Tags:["Medium"],
		Cond:["Medium"]
	})
	/*
	party.units.push({
		Name:"Slutty Bunny",
		CPun:0,
		MPun:5+Math.round(Math.random()*5),
		CPle:0,
		MPle:5+Math.round(Math.random()*5),
		Figh:1+Math.round(Math.random()*1),
		Feas:1+Math.round(Math.random()*4),
		Flir:1+Math.round(Math.random()*1),
		Fuck:1+Math.round(Math.random()*5),
		Flee:10+Math.round(Math.random()*10),
		Feed:1+Math.round(Math.random()*1),
		Init:0,
		Tags:["Bunnygirl"],
		Cond:["Small","Passive"]
	})
	*/
	

	/*
	0	Wall
	1	Forest	LIGHT
	2	Forest	MEDIUM
	3	Forest	DANGEROUS
	
	4	Plains	WILD
	5	Plains	HABITATED
	6	Plains	DANGEROUS
	
	7	Trail	SAFE
	8	Trail	LIGHT
	9	Trail	DANGEROUS
	
	10	Bridge	SAFE
	11	Bridge	LIGHT
	12	Bridge	MEDIUM
	
	13	River	SAFE
	14	River	MEDIUM
	15	River	DANGEROUS
	
	16	Lake	LIGHT
	17	Lake	MEDIUM
	18	Lake	DANGEROUS	
	
	19	Beach	SAFE
	20	Beach	MEDIUM
	21	Beach	DANGEROUS
	
	22	CAVERN	Entrance
	23	CAVERN	MEDIUM
	24	CAVERN	DANGEROUS
	-
	99	START	SAFE
	*/
	//Grid to pick unselected zones.
	var i = 0;
	var o = 0;
	var big_i = 0;
	var big_o = 0;
	var wallToggle = true;
	grid = [
		[false,false,false,false],
		[false,false,false,false],
		[false,false,false,false],
		[false,false,false,false]
	]
	tile_start = [
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 7, 7, 7, 4, 4, 1, 1, 7, 1, 1, 7, 7,99, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 7, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 7, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 1, 7, 1, 1, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 1, 1, 7, 7, 1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 4, 4, 4, 4, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
	]
	
	map = []
	i = 0;
	while(i < 102){
		map[i] = []
		o = 0;
		while(o < 102){
			map[i][o] = 0
			o++
		}
		i++
	}
	map = tile_start
		
	i = 0
	while(i < map.length){
		map[0][i] = 0
		map[i][0] = 0
		map[i][map.length-1] = 0
		map[map.length-1][i] = 0
		if(wallToggle){map[i][1] = 0}
		if(wallToggle){map[1][i] = 0}
		if(!wallToggle){map[i][map.length-2] = 0}
		if(!wallToggle){map[map.length-2][i] = 0}
		if(Math.random()<.3){wallToggle = !wallToggle;}
		i++
	}
		
	map[party.y][party.x] = {name:"Hut",units:[],hostile:false,clr:"#ccbb77",tag:"Indoors"};
	if(map[party.y+1][party.x+0] == 1){map[party.y+1][party.x+0] = {tag:"Forest",name:"Peaceful Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y+1][party.x+1] == 1){map[party.y+1][party.x+1] = {tag:"Forest",name:"Quiet Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y+0][party.x+1] == 1){map[party.y+0][party.x+1] = {tag:"Forest",name:"Pleasant Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y-1][party.x+1] == 1){map[party.y-1][party.x+1] = {tag:"Forest",name:"Peaceful Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y-1][party.x+0] == 1){map[party.y-1][party.x+0] = {tag:"Forest",name:"Quiet Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y-1][party.x-1] == 1){map[party.y-1][party.x-1] = {tag:"Forest",name:"Pleasant Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y+0][party.x-1] == 1){map[party.y+0][party.x-1] = {tag:"Forest",name:"Peaceful Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y+1][party.x-1] == 1){map[party.y+1][party.x-1] = {tag:"Forest",name:"Quiet Forest",units:[],hostile:false,clr:"#77cc55"};}
		
		//DELETE
	party.units.push({
		Name:randomEntry("FoxDesc"),
		CPun:0,
		CPle:0,
		MPun:20,
		MPle:25,
		Figh:SR(10),
		Feas:20,
		Flir:SR(5),
		Fuck:SR(3),
		Flee:SR(5),
		Feed:SR(10),
		Tags:["Foxgirl","Small"],
		Cond:[]
	})
	map[party.y][party.x].units.push({
		Name:randomEntry("FoxDesc"),
		CPun:5,
		CPle:0,
		MPun:5,
		MPle:1,
		Figh:SR(10),
		Feas:SR(55),
		Flir:SR(5),
		Fuck:SR(3),
		Flee:SR(5),
		Feed:25,
		Tags:["Foxgirl","Small"],
		Cond:[]
	})	
	map[party.y][party.x].units.push({
		Name:randomEntry("FoxDesc"),
		CPun:5,
		CPle:0,
		MPun:5,
		MPle:1,
		Figh:SR(10),
		Feas:SR(55),
		Flir:SR(5),
		Fuck:SR(3),
		Flee:SR(5),
		Feed:25,
		Tags:["Foxgirl","Small"],
		Cond:[]
	})
	map[party.y][party.x].hostile = true;
		
		
		
		
	Walk(0,0);
	Logbook = ""
	LogEntry("After being ran over by a truck isekai style, I woke up in a strange land full of monstergirls! I must start anew in this dangerous world and try to survive. I should find a way to make companions, and later get something to eat, or maybe someone to eat! As I look through a window at the trees outside I decide that my new quest in this world will be to gobble down the Demon Queen, the tastiest monstergirl of them all!")
		
}
//document.getElementById("content").innerHTML = "404";
//INIT-END--------------------------------------------------------------------


//TIME------------------------------------------------------------------------
function TimeFlow(){
	var i = 0;
	var highest = 0;
	prevInit = currInit
	currInit = 0
	while(i < party.units.length){
		LogEntry("i="+i)
		LogEntry("party.units.length="+party.units.length)
		LogEntry("party.unit="+party.units[i])
		if(unit(i).Init > currInit){
			if(unit(i).Init < prevInit){
				currInit = unit(i).Init
				//LogEntry("SETCURR:"+currInit)
			}
		}
		if(unit(i).Init > highest){
			highest = unit(i).Init
		}
		i++;
	}
	i = 0;
	while(i < map[party.y][party.x].units.length){
		if(unit(i+100).Init > currInit){
			if(unit(i+100).Init < prevInit){
				currInit = unit(i+100).Init
				//LogEntry("SETCURR:"+currInit)
			}
		}
		if(unit(i+100).Init > highest){
			highest = unit(i+100).Init
		}
		i++;
	}
	if(currInit == 0){
		currInit = highest
	}
	//Tick after action performed, or continue button pressed.
	//currInit++;if(currInit > party.units.length+map[party.y][party.x].units.length){currInit = 1;}
	foodtookturn = false;
	Main()
}

//TIME-END--------------------------------------------------------------------
//RAND------------------------------------------------------------------------
function randomEntry(Entry){
	var Entrys = ["No Entry Found"];
	     if(Entry == "Walk"){Entrys = ["traveled","traveled","traveled","traveled","traveled","hiked","hiked","walked","walked","skipped merrily","trekked","wandered","trudged","set forth", "meandered"]}
	else if(Entry == "Asleep"){Entrys = [" continues to sleep."," continues to sleep."," continues to sleep."," continues to sleep."," continues to sleep."," continues to sleep."," is to tired to move.","'s snoring is louder than the fight!"," doesn't look like she's waking up yet."," rolls over to her other side, drool is running down her face."," toots in her sleep, how embarrassing!"," is cuddling a pillow! Where the heck did she find that!"," mumbles in her sleep."," is pouting in her sleep, she looks too cute!","sleeps with her tongue sticking out."]}
	else if(Entry == "HostileDesc"){Entrys = ["angry","angry","angry","angry", "pissed off","hostile","grumpy","fierce","scary","terrifying","reasonably upset","outraged"]}
	else if(Entry == "Cliff"){Entrys = ["Steep Cliff","Muddy Cliff","Towering Cliff","Jagged Cliff"]}
	else if(Entry == "Cliffhit"){Entrys = ["Fuck climbing!","I'm afraid of heights!","It's too steep for me!","That cliff is too tall!","Lets go another way!","We should go somewhere else!"]}
	else if(Entry == "Forest"){Entrys = ["Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Peaceful Forest","Quiet Forest","Pleasant Forest","Sunny Forest"]}
	else if(Entry == "Plains"){Entrys = ["Grassy Plains","Peaceful Plains","Flowery Plains","Muddy Plains","Pleasant Plains","Sunny Plains","Quiet Plains","Hilly Plains"]}
	else if(Entry == "Trail"){Entrys = ["Dirt Trail","Dirt Trail","Dirt Trail","Dirt Trail","Muddy Trail","Rocky Trail","Worn Trail","Dusty Trail","Narrow Trail","Steep Trail","Faded Trail","Shabby Trail","Eroded Trail"]}
	else if(Entry == "BunnyForest"){Entrys = ["Sunny Forest","Sunny Forest","Small Cave", "Shady Clearing", "Sunny Clearing","Flowery Clearing", "Cozy Burrow", "Cozy Burrow", "Cozy Burrow", "Cozy Burrow"]}
	else if(Entry == "BunnyPlains"){Entrys = ["Sunny Forest","Sunny Forest","Small Cave","Cozy Burrow", "Cozy Burrow", "Cozy Burrow", "Cozy Burrow"]}
	else if(Entry == "BunnyDesc"){Entrys = ["Flat-Chested Bunnygirl","Stacked Bunnygirl","Busty Bunnygirl","Petite Bunnygirl","Perky Bunnygirl","Long-Eared Bunnygirl","Short-Eared Bunnygirl","Droopy-Eared Bunnygirl","Short Bunnygirl","Chubby Bunnygirl","Speckled Bunnygirl","Fat-Bottomed Bunnygirl","Curvy Bunnygirl","Pink Bunnygirl"]}
	else if(Entry == "CalmBunnygirl"){Entrys = ["She seems happy to see me!","She looks ready for a nap.", "She doesn't look like she wants to fight.","She waves at me with a smile on her face!","She looks like she just woke up.","She seems friendly.","She clearly doesn't want to fight.","She seems nice.","She's smiling, but she looks nervous.","She smiles when she sees me.","Her face looks so cute!","She looks like easy prey!","My mouth is watering at the sight of her!","I wonder if she's interested in a little fun?","She's looking at me with a naughty face!"]}
	else if(Entry == "CatForest"){Entrys = ["Blooming Forest","Blooming Forest","Flowery Clearing", "Treehouse", "Shady Clearing"]}
	else if(Entry == "CatDesc"){Entrys = ["Flat-Chested Catgirl","Stacked Catgirl","Busty Catgirl","Perky Catgirl","Long-Tailed Catgirl","Bushy-Tailed Catgirl","Fluffy-Eared Catgirl","Short Catgirl","Slender Catgirl","Pouty Catgirl","Curvy Catgirl","Blue Catgirl"]}
	else if(Entry == "HostileCatgirl"){Entrys = [", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and her claws are out!",", I don't think she's willing to talk!",", I think its too late to turn back!",", this is clearly her territory!",", I hope she doesn't bite!",", her tail is puffed out!",", her fangs look sharp!"]}
	else if(Entry == "FoxForest"){Entrys = ["Lush Forest","Lush Forest","Cozy Burrow","Small Cave", "Treehouse"]}
	else if(Entry == "FoxDesc"){Entrys = ["Flat-Chested Foxgirl","Busty Foxgirl","Stacked Foxgirl","Perky Foxgirl","White-Tailed Foxgirl","White-Eared Foxgirl","Dipstick-Tailed Foxgirl","Long-Eared Foxgirl","Short Foxgirl","Voluptuous Foxgirl","White-Eared Foxgirl","Curvy Foxgirl","Silver Foxgirl"]}
	else if(Entry == "HostileFoxgirl"){Entrys = [", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and her claws are out!",", I don't think she's willing to talk!",", I think its too late to turn back!",", this is clearly her territory!",", I hope she doesn't bite!",", her hackles are raised!",", her fangs look sharp!"]}
	else if(Entry == "FrogForest"){Entrys = ["Muddy Forest","Muddy Forest","Small Cave", "Murky Pond", "Bubbling Spring"]}
	else if(Entry == "FrogDesc"){Entrys = ["Flat-Chested Froggirl","Perky Froggirl","Pale Froggirl", "Glistening Froggirl", "Slick Froggirl","Slimy Froggirl","Spotted Froggirl","Striped Froggirl","Slim Froggirl","Slender Froggirl","Petite Froggirl","Short Froggirl","Fat-Bottomed Froggirl", "Chubby Froggirl","Purple Froggirl"]}
	else if(Entry == "HostileFroggirl"){Entrys = [", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and her long tongue is out!",", I don't think she's willing to talk!",", I think its too late to turn back!",", this is clearly her territory!",", her tongue flings out at me, and I barely dodge it!",", she's hopping this way!",", she's hopping my way!"]}
	else if(Entry == "BatForest"){Entrys = ["Gloomy Forest","Gloomy Forest","Small Cave", "Shady Clearing"]}
	else if(Entry == "BatDesc"){Entrys = ["Flat-Chested Batgirl","Busty Batgirl","Perky Batgirl","Swift Batgirl","Agile Batgirl","Fluffy-Eared Batgirl","Fuzzy Batgirl","Slender Batgirl","Snarky Batgirl","Curvy Batgirl","White Batgirl"]}
	else if(Entry == "HostileBatgirl"){Entrys = [", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready to swoop down!",", I don't think she's willing to talk!",", I think its too late to turn back!",", this is clearly her territory!",", she swoops down, and I barely duck in time!",", she's flying this way!",", she's flying my way!"]}
	return Entrys[Math.floor(Math.random()*Entrys.length)];
}
function randomAction(s){//randomAction:[action,dom,sub,offence,defence,terrain]
	var Entrys = ["not available yet"];
	var Entry = ""
	 if(s[0]==0){//FIGHT------------------------------------------------------------------------------------------------------------------------------
		if(s[4] < 1){
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					if(party.units[s[2]].asleep){
						Entrys = ["I should let her sleep, she looks tired."]
					}else{
						Entrys = ["I roughly spank GOODSUB's behind, she pouts as she rubs where my hand left its mark."]
					}
				}else{
					if(s[5]=="Indoors" && Math.random()<.25){
						Entrys = ["I shove FOODSUB into a wall.","I throw a chair at FOODSUB, it breaks into pieces against her!"]
					}else{
						if(map[party.y][party.x].units[s[2]-100].flying && s[3] == 0){
							Entrys = ["I swing my fist at FOODSUB, but she's flying to high to hit!","I kick at FOODSUB, but she flies away too quick","I try headbutting FOODSUB, but she's too swift while airborne!"]
						}else{
							Entrys = ["I swing my fist at FOODSUB!","I kick the FOODSUB!","I headbutt FOODSUB, she stumbles back!"]
						}
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
				//DOUBLE CHECK WHAT HAPPENS WHEN ATTACKING PROTAG
					Entrys = ["CGOODDOM tries to attack GOODSUB, but I quickly get between them and stop her!"]
				}else{
					if(map[party.y][party.x].units[s[2]-100].flying && s[3] == 0){
						Entrys = ["CGOODDOM shakes her fist at FOODSUB as she flies above safely.","CGOODDOM tries attacking FOODSUB, but she flies away too quickly."]
					}else{
						if(party.units[s[1]].Tags[0] == "Catgirl" && Math.random()<.25){
							if(s[4] < .5){
								Entrys = ["CGOODDOM's claw slashes at FOODSUB, leaving scratchmarks!","CGOODDOM reveals her fangs before biting FOODSUB!"]
							}else{
								Entrys = ["CGOODDOM's claw slashes at FOODSUB, leaving bloody streaks!","CGOODDOM reveals her fangs before biting FOODSUB. She pulls away to reveal a bloody wound"]
							}
						}else if(party.units[s[1]].Tags[0] == "Foxgirl" && Math.random()<.25){
							Entrys = ["CGOODDOM sneaks behind FOODSUB and sweeps out her leg, cleverly tripping FOODSUB!","CGOODDOM leaps into the air and slams FOODSUB into the ground!","CGOODDOM bites down on FOODSUB, she doen't let go until she's hit on the snout!"]
						}else if(party.units[s[1]].Tags[0] == "Froggirl" && Math.random()<.25){
							if(s[4] < .5){
								Entrys = ["CGOODDOM's tongue flings out at FOODSUB and latches on! FOODSUB is almost pulled to the ground before pulling it off!"]
							}else{
								Entrys = ["CGOODDOM's tongue flings out at FOODSUB and latches on! FOODSUB falls over and is dragged along the ground before she's able to pull it off!"]
							}
						}else{
							Entrys = ["CGOODDOM attacks FOODSUB!"]
						}
					}
				}
			}else{//dom=food
				if(s[5]=="Indoors" && s[2]==0 && Math.random()<.25){
					Entrys = ["CFOODDOM shoves me into the door, she screams that I better leave now while I still can!","With no regard for her own furnature, FOODDOM throws a chair, it hits GOODSUB right in the face!","With a running start, FOODDOM uses her shoulder to slam GOODSUB into a wall!"]
				}else{
					if(party.units[s[2]].flying && s[3] == 0){
						Entrys = ["CFOODDOM shakes her fist at GOODSUB as she flies above safely.","CFOODDOM tries attacking GOODSUB, but she flies away too quickly."]
					}else{
						if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Catgirl" && Math.random()<.25){
							if(s[4] < .5){
								Entrys = ["CFOODDOM's claw slashes at GOODSUB, leaving scratchmarks!","CFOODDOM reveals her fangs before biting GOODSUB!"]
							}else{
								Entrys = ["CFOODDOM's claw slashes at GOODSUB, leaving bloody streaks!","CFOODDOM reveals her fangs before biting GOODSUB. She pulls away to reveal a bloody wound"]
							}
						}else if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Foxgirl" && Math.random()<.25){
							if(s[2] == 0){
								Entrys = ["I lose sight of FOODDOM until I feel her leg sweep into mine, knocking me to the ground!","CFOODDOM leaps into the air and slams GOODSUB into the ground!","CFOODDOM bites down on GOODSUB, she doen't let go until I hit her snout!"]
							}else{
								Entrys = ["CFOODDOM sneaks behind GOODSUB and sweeps out her leg, cleverly tripping her!","CFOODDOM's leaps into the air and slams GOODSUB into the ground!","CFOODDOM bites down on GOODSUB, she doen't let go until she's hit on the snout!"]
							}
						}else if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Froggirl" && Math.random()<.25){
							if(s[2] == 0){
								Entrys = ["CFOODDOM's tongue flings out at me, it hits like a fist!"]
							}else{
								if(s[4] < .5){
									Entrys = ["CFOODDOM's tongue flings out at GOODSUB and latches on! GOODSUB is almost pulled to the ground before pulling it off!"]
								}else{
									Entrys = ["CFOODDOM's tongue flings out at GOODSUB and latches on! GOODSUB falls over and is dragged along the ground before she's able to pull it off!"]
								}
							}
						}else{
							Entrys = ["CFOODDOM attacks GOODSUB!"]
						}
					}
				}
			}
		}else{
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					Entrys = ["I lose my temper and kill GOODSUB, I feel fucking horrible afterwards!","I kill GOODSUB for no reason at all!"]
				}else{
					if(s[5]=="Indoors" && Math.random()<.5){
						Entrys = ["I shove FOODSUB into a wall, she crumbles to the ground in defeat!","I throw a chair at FOODSUB, it breaks against her face! She falls to the floor defeated!"]
					}else{
						Entrys = ["I swing my fist at FOODSUB, she falls in defeat!","I kick the FOODSUB, she falls down in defeat!","I headbutt FOODSUB, she stumbles back before falling over in defeat!"]
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
					Entrys = ["We are supposed to be a team but GOODDOM just killed GOODSUB!"]
				}else{
					Entrys = ["CGOODDOM kills FOODSUB!"]
				}
			}else{//dom=food
				Entrys = ["CFOODDOM kills GOODSUB!"]
			}
		}
	 }		
	if(s[0]==1){//FLIRT------------------------------------------------------------------------------------------------------------------------------
		if(s[4] < .5+(Math.random()*.5)){//NOT HORNY
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					Entrys = ["I pat GOODSUB's head, she looks comforted by my touch.","I give GOODSUB's cute butt a squeeze, her face is so cute when she's embarrased.","I sneak up behind GOODSUB, and cup her breasts. She wiggles out of my touch, telling me to stay focused on my quest."]
				}else if(map[party.y][party.x].hostile){
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["I blow FOODSUB a kiss, she's bewildered by the gesture.","I tell FOODSUB how adorable her face is when she's flying.","I wave at FOODSUB, and tell her how cute she looks."]
					}else{
						if(s[5]=="Indoors" && Math.random()<.25){
							Entrys = ["I push FOODSUB until her back is against the wall, she braces for an attack, but I only kiss her cheek.","I press FOODSUB against the table, I give her ass a smack before backing away."]
						}else{
							if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
								Entrys = ["I grapple FOODSUB, with one hand I rub her inner ear. She pushes me away confused, her face looks flustered.","I give FOODSUB's tail a playful tug. She looks indignant, and keeps fighting."]
							}else{
								Entrys = ["I blow FOODSUB a kiss, she's bewildered by the gesture.","I playfully spank FOODSUB's behind and leap out of her reach.","Instead of fighing FOODSUB, I keep my distance, telling her how cute she looks.","While avoiding her attacks, I tell FOODSUB how adorable her face is while she's fighting."]
							}
						}
					}
				}else{//PASSIVE 
					if(s[5]=="Indoors" && Math.random()<.25){
						Entrys = ["I sit down at the table, and have some tea with FOODSUB","I help FOODSUB with cleaning the place, we make idle chitchat as we work together","I sit down across from FOODSUB as she sips from a cup and tell her how cute she is. she says I'm exaggerating before returning to her drink."]
					}else{
						Entrys = ["I wave at FOODSUB, and she waves back before remembering this is a fight.","I blow FOODSUB a kiss, she smiles at the gesture.","I put a flower behind FOODSUB's ear, she giggles from the ticklish stem.","I tell FOODSUB that her eyes are beautiful, she thanks me for the complement."]
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
					Entrys = ["We are supposed to stay focused, but GOODDOM keeps kissing GOODSUB!"]
				}else{
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["CGOODDOM blows FOODSUB a kiss, she's bewildered by the gesture.","CGOODDOM tells FOODSUB how adorable her face is when she's flying.","CGOODDOM waves at FOODSUB, and tells her how cute she looks."]
					}else{
						Entrys = ["CGOODDOM gives FOODSUB a hug, before being pushed away.","CGOODDOM gives FOODSUB's breast a squeese, before being pushed away.","CGOODDOM kisses FOODSUB, before being pushed away."]
					}
				}
			}else{//dom=food
				Entrys = ["Surprisingly, FOODDOM hugs GOODSUB!"]
			}
		}else{//VERY HORNY
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					Entrys = ["I use two fingers to rub GOODSUB's bean, she moans as she grinds against my hand!","I sneak up behind GOODSUB, and give both nipples a squeese, she pushes against me as she gasps for air!"]
				}else if(map[party.y][party.x].hostile){
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["I blow FOODSUB a kiss, she's bewildered by the gesture.","I tell FOODSUB how sexy she looks when she's flying.","I tell FOODSUB all the naughty things I want to do to her when she lands."]
					}else{
						if(s[5]=="Indoors" && Math.random()<.25){
							Entrys = ["I push FOODSUB until her back is against the wall, she braces for my fist, but instead feels my lips against hers.","I press FOODSUB against the table, and grind against her before letting go."]
						}else{
							if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
								Entrys = ["I call FOODSUB a naughty kitty. She bites her lip, looking flustered.","I pin FOODSUB's arms up, with both hands I massage her furry ears. Her body goes slack against mine until she remembers she was fighting me!","I give FOODSUB's tail a playful tug. She moans under her breath!"]
							}else{																																																												
								Entrys = ["I embrace FOODSUB, and whisper sweet nothings into her ear, she hesitates a moment before pushing me away.","I playfully spank FOODSUB's behind and slip out of her reach, she rubs where my hand left its mark, her face looks flushed.","Instead of fighing FOODSUB, I keep my distance, telling her all the naughty things I want to do to her. She tries to look focused, but she's breathing heavily!","While avoiding her attacks, I ask FOODSUB if she's this passionate in bed."]
							}
						}
					}
				}else{//PASSIVE
					if(s[5]=="Indoors" && Math.random()<.25){
						Entrys = ["I sit down at the table, and share a drink with FOODSUB, the booze makes us both open up.","I help FOODSUB with cleaning the place, we keep finding excuses to rub against each-other.","I tell FOODSUB how sexy she looks, she spills her drink in surprise."]
					}else{
						Entrys = ["I blow FOODSUB a kiss, she smiles at the gesture.","I put a flower behind FOODSUB's ear, she gives me a hug in return.","I tell FOODSUB that her eyes are beautiful, she thanks me for the complement."]
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
					Entrys = ["We are supposed to stay focused, but GOODDOM keeps making out with GOODSUB."]
				}else{
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["CGOODSUB pumps her hips at FOODSUB, she's flustered by the gesture.","CGOODSUB tells FOODSUB how sexy her body looks when she's flying.","CGOODSUB tells FOODSUB all the naughty things she plans to do to her when she lands.","CGOODSUB says she saw FOODSUB's lust when she flies by, FOODSUB tells her to shutup!"]
					}else{
						Entrys = ["CFOODSUB screams out as GOODDOM pinches down hard on both of her exposed nipples! CGOODDOM asks if FOODSUB is going to be a good girl, and releases the sore nipples when FOODSUB whimpers that she will!","CGOODDOM grabs FOODSUB's head and pulls her into a passionate kiss. CFOODSUB struggles to escape, but her eyes are rolled back. All fighting stops as the two make out. Eventually GOODDOM breaks the kiss and steps back.","CGOODDOM slips her hand between FOODSUB's legs, she moans before shoving GOODDOM away."]
					}
				}
			}else{//dom=food
				Entrys = ["Surprisingly, FOODDOM kisses GOODSUB!"]
			}
		}
	 }
	if(s[0]==2){//FLEE------------------------------------------------------------------------------------------------------------------------------
		if(s[3] == 1){//Successfully fled!
			if(s[1] == 0){
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["I sneak under the table, and slip out the door before FOODSUB can stop me!"]
				}else{
					Entrys = ["I slip past FOODSUB and keep running! I successfully escape the fight!"]
				}
			}else{
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["CGOODDOM sneaks under the table, and slips through the doorway before FOODSUB can stop her!"]
				}else{
					Entrys = ["CGOODDOM slips past FOODSUB and keeps running! She got away!"]
				}
			 }
		}else if(map[party.y][party.x].hostile){
			if(s[1] == 0){
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["I try to escape, but FOODSUB throws a chair at me, knocking me away from the door! Tears start to run down my face as I realize FOODSUB has me right where she wants me!"]
				}else{
					Entrys = ["I try to escape, but FOODSUB blocks my way. Sweat starts to pour down my face as I worry this fight might be my last!"]
				 }
			}else{
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["CGOODDOM tries to escape, but FOODSUB quickly blocks the door! Tears start to run down her face as FOODSUB laughs!"]
				}else{
					Entrys = ["CGOODDOM tries to run away, but she's blocked by FOODSUB! She looks panicked as the other girl laughs at the failed escape attempt!"]
				}
			}
		}else{//NOT HOSTILE, FUNNY
			if(s[1] == 0){
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["I try to leave, but FOODSUB offers me a warm cookie from a plate! I sit at the table with FOODSUB and munch down the tasty treat. If her cooking is this good, I wonder how great she tastes!"]
				}else{
					Entrys = ["I turn to leave, but FOODSUB grabs my hand. I look back and she pulls me into a kiss! I guess I can stay a little longer."]
				 }
			}else{
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["CGOODDOM tries to leave, but FOODSUB offers her a warm cookie from a plate! CGOODDOM sits at the table with FOODSUB and munches down her tasty treat!"]
				}else{
					Entrys = ["CGOODDOM turns to leave, but FOODSUB asks if she will stay a little longer. They walk back to us holding hands."]
				}
			}
		}
	}
	if(s[0]==3){//FEAST------------------------------------------------------------------------------------------------------------------------------
		if(s[1] == 0){
			if(s[4] == -1){//not hungry
				Entrys = ["Oh geeze, I couldn't eat another bite!","I'm too horny to eat right now!","My stomach already feels like its going to burst!","I need to work off my last meal before I can eat another girl!"]
			}else{
				if(s[2]<100){
					if(s[5]=="Forest"&& Math.random()<.25 && (party.units[s[2]].Tags[0] == "Bunnygirl" || party.units[s[2]].Tags[0] == "Catgirl" || party.units[s[2]] == "Foxgirl")){
						Entrys = ["I tell GOODSUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose before finishing her descent. I feel my belly shudder as she cums!"]
					
					}else{
						Entrys = ["I ask GOODSUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She giggles as my tongue plays with her breasts, and says it's about time I ate her! She plays with herself as I finish swallowing her down!","I grab GOODSUB by the hips, and swallow her down!","I ask FOODSUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise as she stops being my lover and becomes my meal. She asks if I wouldnt rather fuck her instead as I get to her waist. When I start swallowing her hips, she tells me to enjoy her properly at least! My tongue finds her slit and starts getting her off as her rump hangs out of my mouth. I give GOODSUB one last orgasm before fully gulping her down!"]
					}
				}else{//FOOD
					if(s[4] == 3){//WILLING
						if(s[5]=="Indoors" && Math.random()<.25 && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
							Entrys = ["My stomach growls loudly. I ask FOODSUB if theres any food left. She smiles before saying she has an idea. I watch FOODSUB hop onto the table and offer me her legs, I start by sucking on her feet before swallowing down to her hips. My tongue finds her slit and I give her one last orgasm before gulping the rest of her down!","I watch FOODSUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too delicious not to eat! I start swallowing one cheek, and eventually get both into my maw. CFOODSUB looks back and sees her behind completely engulfed. Her smile widens, and she says she hopes I enjoy my tasty bunny snack. She yelps when I gulp her down to her breasts. My tongue teases her nipples until she cums, and I gobble the rest of her down!"]
						}else{
							if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
								Entrys = ["I tell FOODSUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose as I finish my meal. I feel my belly shudder as she cums!","I call FOODSUB a cute bunny snack. She says if she's just a snack, I should eat her! My hands wrap around her waist and I lift her into a kiss before swallowing her head and shoulders. She cums before I even reach her hips, and I gulp down her still quivering legs!"]
							}else if(party.units.length == 2 && Math.random()<.50){
								Entrys = [String("My "+party.units[1].Name +" watches as I start swallowing FOODSUB head first! As I get to FOODSUB's waist, I see that my "+party.units[1].Name+" has started fingering herself as she watches me taste FOODSUB's lower lips. After I finish eating FOODSUB, I watch as my "+party.units[1].Name +" orgasms loudly. Panting, she asks when I'm going to eat her!"),String("I grab FOODSUB by her feet and start swallowing them down. My "+party.units[1].Name+" approaches and starts making out with FOODSUB! As I continue up my tasty meal they keep at it until I swallow FOODSUB's head. I lock lips with my "+party.units[1].Name+" to continue the kiss. Eventually we break away as a strand of saliva droops between us. She feels my belly with her hand, and a handprint emerges from inside to match hers.")]
							}else{		
								Entrys = ["I ask FOODSUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. Instead of struggling she only says it's about time somebody ate her! She plays with herself as I finish swallowing her down!","I gulp down FOODSUB, I feel her masturbate inside me until she passes out!"]
							}
						}
						
					}else if(s[4] == 2){//UNWILLING
						if(!map[party.y][party.x].hostile){//NOT HOSTILE
							if(map[party.y][party.x].units.length == 1){//Alone
								if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
									Entrys = ["I call FOODSUB a cute bunny snack. Her eyes grow wide, and she tries to run away! I leap at her and barely grab her ankles. As she struggles, I shove her feet into my mouth and start swallowing. She stops squirming, and just looks back at me upset. I swallow her quickly, but try to be gentle. She tucks her arms into my maw and soon she's in my belly."]
								}else{		
									Entrys = ["I ask FOODSUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise at suddenly becoming food! She begs for me not to eat her while I swallow down the rest of her.","I gulp down FOODSUB, I feel her struggle inside me until she passes out!"]
								}
							}else if(map[party.y][party.x].units.length == 2 && s[2]==100){
								Entrys = ["I gulp down FOODSUB's head and shoulders! The "+map[party.y][party.x].units[101].Name+" looks pissed and tries to pull FOODSUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The" +map[party.y][party.x].units[101].Name+" says she's not going down without a fight!"]
							}else if(map[party.y][party.x].units.length == 2){
								Entrys = ["I gulp down FOODSUB's head and shoulders! The "+map[party.y][party.x].units[100].Name+" looks pissed and tries to pull FOODSUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The" +map[party.y][party.x].units[100].Name+" says she's not going down without a fight!"]
							}else{//Larger group
								Entrys = ["I gulp down FOODSUB's head and shoulders! The other girls look in horror as I keep swallowing until she's gone. I look at the remaining girl and lick my lips! They all look ready for a fight!"]
							}
						}else if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
							Entrys = ["CFOODSUB swipes a claw at me as I shove her feet inside my mouth! She hisses and struggles the whole way down!"]
						}else{
							Entrys = ["I gulp down FOODSUB, I feel her struggle inside me until she passes out!"]
						}
					}else if(s[4] == 1){//UNDIGESTED
						if(!map[party.y][party.x].hostile){//NOT HOSTILE
							if(map[party.y][party.x].units.length == 1){//Alone	
								Entrys = ["I ask FOODSUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise at suddenly becoming food! She begs for me not to eat her while I swallow down the rest of her. I feel her continue to struggle in my belly! She refuses to digest easy!","I gulp down FOODSUB, I feel her struggle inside me, she seems unaffected by my digestive juices!","I swallow FOODSUB quickly! Inside my belly I hear her screaming at me, it looks like my stomach is struggling to digest her!"]
							}else if(map[party.y][party.x].units.length == 2 && s[2]==100){
								Entrys = ["I gulp down FOODSUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" looks pissed and tries to pull FOODSUB out, but I keep swallowing until she's gone. Desperate crys for help come from my stomach, it looks like she refuses to digest! The" +map[party.y][party.x].units[1].Name+" says she'll free the other girl!"]
							}else if(map[party.y][party.x].units.length == 2){
								Entrys = ["I gulp down FOODSUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull FOODSUB out, but I keep swallowing until she's gone. Desperate crys for help come from my stomach, it looks like she refuses to digest! The" +map[party.y][party.x].units[0].Name+" says she'll free the other girl!"]
							}else{//Larger group
								Entrys = ["I gulp down FOODSUB's head and shoulders! The other girls look in horror as I keep swallowing until she's gone. Desperate crys for help come from my stomach, it looks like she refuses to digest! The other girls look determined to free the helpless meal!"]
							}
						}else if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
							Entrys = ["CFOODSUB swipes a claw at me as I shove her feet inside my mouth! She hisses and struggles the whole way down! Even inside she continues to struggle! "]
						}else{
							Entrys = ["I gulp down FOODSUB, I feel her struggle inside me, she seems unaffected by my digestive juices!","I swallow FOODSUB quickly! Inside my belly I hear her screaming at me, it looks like my stomach is struggling to digest her!"]
						}
					}else{//UNSUCCESSFUL
						if(map[party.y][party.x].hostile){
							if(map[party.y][party.x].units[s[2]-100].flying){
								Entrys = ["My poor stomach grumbles as FOODSUB flies above me.","I leap at FOODSUB, but she's too high up.","I try catching FOODSUB as she flies by, but she's just too quick."]
							}else{
								Entrys = ["I try to eat FOODSUB, but she fights back, and wiggles out of my grasp."]
							}
						}else{
							if(map[party.y][party.x].units.length == 1 || Math.random()<.5){
								Entrys = ["I try to eat FOODSUB, but she wiggles out of my grasp. She looks pissed at my betrayal, and ready for a fight!"]
							}else{
								Entrys = ["I gulp down FOODSUB's head and shoulders, but another girl quickly pushes me over and pulls FOODSUB back out. It looks I'll have to fight for my dinner this time!"]
							}
						}
					}
				}
			}
		}else if(s[1] < 100){
			if(s[2] == 0){
				Entrys = ["Oh FUCK, GOODDOM just ate me!"]
			}else if(s[2]<100){
				Entrys = ["CGOODDOM just ate GOODSUB!"]
			}else{
				if(s[4] == 3){//WILLING
					if(party.units[s[1]].Tags[0] == "Froggirl"){//
						Entrys = ["CGOODDOM's tongue flings out at FOODSUB and latches on! She pulls back sharply, and FOODSUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside GOODDOM! I press my ear to her bloated belly, and hear FOODSUB moan as she fingers herself one last time!","CGOODDOM's tongue flings out at FOODSUB and latches on! FOODSUB grabs the tongue and pulls GOODDOM over to her. FOODSUB says she'd be glad to be a snack and lets GOODDOM swallow her down!"]
					}else{
						Entrys = ["Oh my, FOODSUB just let GOODDOM eat her!"]
					}
				}else if(s[4] == 2){
					if(map[party.y][party.x].hostile){//HOSTILE
						if(party.units[s[1]].Tags[0] == "Froggirl"){//
							Entrys = ["CGOODDOM's tongue flings out at FOODSUB and latches on! She pulls back sharply, and FOODSUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside GOODDOM!","CGOODDOM's tongue flings out at FOODSUB and latches on! FOODSUB falls down and is dragged along the ground towards GOODDOM. FOODSUB cries out before she's devoured in one massive gulp!"]
						}else{
							Entrys = ["CGOODDOM just ate FOODSUB!"]
						}
					}else{//NONHOSTILE
						if(map[party.y][party.x].units.length == 1){
						Entrys = ["CGOODDOM eats FOODSUB!"]
						}else if(map[party.y][party.x].units.length == 2 && s[2]==100){
								Entrys = ["CGOODDOM gulps down FOODSUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" looks pissed and tries to pull FOODSUB out, but GOODDOM just keep swallowing until she's gone. The" +map[party.y][party.x].units[1].Name+" says she's not going down without a fight!"]
						}else if(map[party.y][party.x].units.length == 2){
								Entrys = ["CGOODDOM gulps down FOODSUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull FOODSUB out, but GOODDOM just keep swallowing until she's gone. The" +map[party.y][party.x].units[0].Name+" says she's not going down without a fight!"]
						}else{//Larger group
								Entrys = ["CGOODDOM gulps down FOODSUB's head and shoulders! The other girls look in horror as she keep swallowing until she's gone. I try to say something to keep the peace, but they all look ready for a fight!"]
						}
					}
				}else if(s[4] == 1){//UNDIGESTED
					if(map[party.y][party.x].hostile){//HOSTILE
						if(party.units[s[1]].Tags[0] == "Froggirl"){//
							Entrys = ["CGOODDOM's tongue flings out at FOODSUB and latches on! She pulls back sharply, and FOODSUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside GOODDOM! CFOODSUB keeps struggling even after being devoured, it looks like she refuses to digest!","CGOODDOM's tongue flings out at FOODSUB and latches on! FOODSUB falls down and is dragged along the ground towards GOODDOM. FOODSUB cries out before she's devoured in one massive gulp! CFOODSUB keeps struggling even after being eaten, it looks like she refuses to digest!"]
						}else{
							Entrys = ["CGOODDOM just ate FOODSUB! Surprisingly, she keeps struggling even after being devoured. It looks like she refuses to digest quickly!"]
						}
					}else{
						if(map[party.y][party.x].units.length == 1){
						Entrys = ["CGOODDOM eats FOODSUB! Surprisingly, she keeps struggling even after being devoured. It looks like she refuses to digest quickly!"]
						}else if(map[party.y][party.x].units.length == 2 && s[2]==100){
								Entrys = ["CGOODDOM gulps down FOODSUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" looks pissed and tries to pull FOODSUB out, but GOODDOM just keep swallowing until she's gone. Desperate crys for help come from GOODDOM's stomach, it looks like her prey refuses to digest! The" +map[party.y][party.x].units[1].Name+" says she'll free the other girl!"]
						}else if(map[party.y][party.x].units.length == 2){
								Entrys = ["CGOODDOM gulps down FOODSUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull FOODSUB out, but GOODDOM just keep swallowing until she's gone. Desperate crys for help come from GOODDOM's stomach, it looks like her prey refuses to digest! The" +map[party.y][party.x].units[0].Name+" says she'll free the other girl!"]
						}else{//Larger group
								Entrys = ["CGOODDOM gulps down FOODSUB's head and shoulders! The other girls look in horror as she keep swallowing until she's gone. Surprisingly, FOODSUB keeps struggling even after being devoured. It looks like she refuses to digest quickly! The remaining girls all look ready for a fight!"]
						}
					}
				}else{
					if(map[party.y][party.x].hostile){
						if(map[party.y][party.x].units[s[2]-100].flying){
							Entrys = ["I hear GOODDOM's stomach grumble as FOODSUB flies above her.","CGOODDOM leaps at FOODSUB, but she's too high up.","CGOODDOM tries catching FOODSUB as she flies by, but isn't fast enough."]
						}else{
							Entrys = ["CGOODDOM just tried to eat FOODSUB, but she wiggled out of her grasp."]
						}
					}else{
						if(map[party.y][party.x].units.length == 1 || Math.random()<.5){
							Entrys = ["CGOODDOM tries to eat FOODSUB, but she wiggles out of her grasp. She looks pissed at GOODDOM's betrayal, and ready for a fight!"]
						}else{
							Entrys = ["CGOODDOM gulps down FOODSUB's head and shoulders, but another girl quickly pushes her over and pulls FOODSUB back out. It looks we'll have to fight for our dinner this time!"]
						}
					}
				}
			}
		}else{//FOOD EATING GOOD
			if(s[2] == 0 && party.units.length>1){
				if(s[4] == 2){
					Entrys = ["Oh FUCK, FOODDOM just ate me! I'm not digesting yet, if the others defeat her I might survive!"]
				}else{
					Entrys = ["CFOODDOM just tried to eat me! Luckily my "+party.units[Math.floor(Math.random()*party.units.length-1)+1].Name+" was able to stop her!"]
				}
			}else if(s[2] == 0){
				if(s[4] == 1){
					Entrys = ["Oh FUCK, FOODDOM just ate me! I'm totally going to digest in here!"]
				}else{
					Entrys = ["CFOODDOM just tried to eat me! Luckily I escaped from her hungry maw. I need to be more careful!"]
				}
			}else{
				if(s[4] == 2){
					if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Froggirl"){//
						Entrys = ["CFOODDOM's tongue flings out at GOODSUB and latches on! She pulls back sharply, and GOODSUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside FOODDOM.!","CFOODDOM's tongue flings out at GOODSUB and latches on! GOODSUB falls down and is dragged along the ground towards FOODDOM. GOODSUB cries out before she's devoured in one massive gulp!"]
					}else{
						Entrys = ["CFOODDOM just ate GOODSUB!"]
					}
				}else if(s[4] == 1){
					if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Froggirl"){//
						Entrys = ["CFOODDOM's tongue flings out at GOODSUB and latches on! She pulls back sharply, and GOODSUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside FOODDOM! CGOODSUB keeps struggling even after being devoured, it looks like she refuses to digest!","CFOODDOM's tongue flings out at GOODSUB and latches on! GOODSUB falls down and is dragged along the ground towards FOODDOM. GOODSUB cries out before she's devoured in one massive gulp! CGOODSUB keeps struggling even after being eaten, it looks like she refuses to digest!"]
					}else{
						Entrys = ["CFOODDOM just ate GOODSUB! Surprisingly, she keeps struggling even after being devoured. It looks like she refuses to digest quickly!"]
					}
				}else{
					Entrys = ["CFOODDOM just tried to eat GOODSUB, but she wiggled out of her grasp."]
				}
			}
		}
	 }	 
	if(s[0]==4){//FUCK------------------------------------------------------------------------------------------------------------------------------
		if(s[1] == 0){
			if(s[3] == -1){//not horny
				Entrys = ["Oh no, I can't get it up!","I'm too hungry to fuck right now!","I need to eat before I'm ready again!"]
			}else{
				if(s[2]<100){
					if(s[5]=="Forest"&& Math.random()<.25 && (party.units[s[2]].Tags[0] == "Bunnygirl" || party.units[s[2]].Tags[0] == "Catgirl" || party.units[s[2]].Tags[0] == "Foxgirl")){
						Entrys = ["I tell GOODSUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her bean. She grinds her hips together as her lower lips become soaked. Her legs buckle, and she falls into the grass. I straddle her legs and start to pound her from behind! She moans for more, and I dont stop until she shudders under me. As we both lie in the grass afterward, she says she really though I was going to eat her this time!"]
					}else{
						Entrys = ["I grab GOODSUB by the hips, and thrust until we both cum!"]
					}
				}else{//FOOD
					if(s[3] == 1){
						if(map[party.y][party.x].hostile){//HOSTILE
							if(map[party.y][party.x].units[s[2]-100].flying){//THIS WONT WORK FOR FAERIES!!!
								Entrys = ["I ask FOODSUB if she's interested in a good time down here, she swoops down and tackles me to the ground. As I regain my senses I feel her guiding my member into herself. She moans when I start thrusting, and soon we both cum together!","I ask FOODSUB if she's interested in a good time down here, she swoops down and kisses me. I grab her by the hips, and start thrusting! She's timid at first, but soon she's crying for more!","I ask FOODSUB if she's interested in a good time down here, she swoops by and knocks me to the ground. She quickly lands and straddles me. I hold her hips as she rides me, she wraps her wings around me as we both cum!"]
							}else if(s[5]=="Indoors" && Math.random()<.25){
								Entrys = ["I push FOODSUB's back against the wall. She hesitates before lifting her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","I bend FOODSUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture."]
							}else{
								if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.25){
									Entrys = ["I call FOODSUB a naughty kitty. She tells me to shut up and fuck her! My hands wrap around her waist and I lift her over my member. She purrs as I slowly lower her down. Once I'm fully in her, she wraps her arms and tail around me and starts moving her hips. She bounces on my cock as I thrust into her! Soon we are both covered in sweat as we cum together!","I start caressing FOODSUB's furry ears. I watch as all the anger drains from her face at my touch, I have definitly found her weak spot! She moves closer to rest her head against my chest, but looks down in surprise when she bumps my erection. She makes a naughty grin as she gets an idea. CFOODSUB lowers herself to my member and starts to blow me while I continue to stimulate her with my massage. She orgasms from me rubbing her ears before her blowjob makes me cum too!","I lift FOODSUB's tail and thrust myself inside from behind. She looks bewildered at first, but after a moment her body starts moving with mine. Soon I firmly grip both of her hips and fill her with my seed as she cries out in ecstasy!"]
								}else if((map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl") && Math.random()<.25){
									//Has Legs
									Entrys = ["I tackle FOODSUB, and ask if she really wants to fight. She responds with a kiss. We lock lips as she guides my member into her. She moans as I start thrusting, and soon we both cum together!","I start kissing FOODSUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me, she leans in for another kiss as we both cum!","I grab FOODSUB by the hips, and start thrusting! She's timid at first, but soon she's crying for more!","I turn FOODSUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We make love until she cries out in bliss!"]
								}else{		
									Entrys = ["I tackle FOODSUB, and ask if she really wants to fight. She responds with a kiss. We lock lips as she guides my member into her. She moans as I start thrusting, and soon we both cum together!","I grab FOODSUB by the hips, and start thrusting! She's timid at first, but soon she's crying for more!"]
								}
							}
						}else{//NOT HOSTILE		VERY PASSIVE
							if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
									if(Math.random()<.90){
										Entrys = ["I watch FOODSUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I plunge myself inside her, and she arches her back. I continue to thrust until we both cum!"]
									}else{
										Entrys = ["I watch FOODSUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I get a different idea however, and ram myself into her other hole! She yelps at the intrusion and looks back in shock. I continue to pump her asshole as she wiggles and writhes under me. she starts to scream out, first in pain, but then in pleasure. CFOODSUBs soon crying me to fuck her harder, and a few deep thrusts later she's cumming as I fill her behind!"]
									}
							}else if(s[5]=="Indoors" && Math.random()<.25){
								Entrys = ["I gently push FOODSUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","Without a word, I bend FOODSUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture."]
							}else{
								if(s[5]=="Forest"&& Math.random()<.5 && (map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl")){
									Entrys = ["I approach FOODSUB while she's leaning against a large tree. She bites her lip as I lift her leg. She gives me a nod and I plunge myself deep inside her! She moans as she's fucked in the middle of the forest!","I tell FOODSUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her bean. She grinds her hips together as her lower lips become soaked. Her legs buckle, and she drops onto the grass. I straddle her legs and start to pound her from behind! She moans for more, and I dont stop until she shudders under me. As we both lie in the grass afterward, she says I can eat her next time if I want!"]
								}else{		
									Entrys = ["I start kissing FOODSUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me, she leans in for another kiss as we both cum!","I grab FOODSUB by the hips, and start thrusting! She's timid at first, but soon she's crying for more!","I turn FOODSUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We mate until she cries out in bliss!"]
								}
							}
						}
					}else{
						if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
							Entrys = ["Hissing, FOODSUB swipes a claw at me as I try to make a move."]
						}else{
							if(map[party.y][party.x].units[s[2]-100].flying){
								Entrys = ["I ask FOODSUB if she's interested in a good time down here, she says at her altitude my prick looks tiny. Ouch that hurt!","I ask FOODSUB if she's interested in a good time down here, she shakes her tush and says maybe another time.","I ask FOODSUB if she's interested in a good time down here, she sticks out her tongue and says she's not falling for any of my tricks.","I ask FOODSUB if she's interested in a good time down here, she blows me a kiss and says she'll think about it."]
							}else{
								Entrys = ["I try to make a move on FOODSUB, but she's not in the mood."]
							}
						}
					}
				}
			}
		}else{
			if(pick2 == 0){
				if(s[3] == -1){//not horny
					Entrys = ["[CGOODDOM] just straddled me, but I can't get it up!","Sad days, GOODDOM said she needs me, but I'm too hungry to fuck right now!","How embarrassing, GOODDOM started to stroke me, but it stayed limp, I need to eat before I'm ready again!"]
				}else{
					Entrys = ["Oh god, GOODDOM just fucked my brains out!"]
				}
			}else if(s[2]<100){
				Entrys = ["Oh wow, GOODDOM just fucked GOODSUB in front of me!"]
			}else{
				if(map[party.y][party.x].hostile){
					if(s[3] == 1){
						if(s[4] == 0){
							Entrys = ["Oh wow, GOODDOM just fucked FOODSUB until she was exhausted, she's out like a light!"]
						}else{//both fall asleep
							Entrys = ["Oh wow, GOODDOM and FOODSUB just made love! Now they're cuddling while they sleep."]
						}
					}else{
						Entrys = ["GOODDOM trys to make a move on FOODSUB but she's not in the mood."]
					}
				}else{//FRIENDLY AKA NO SLEEPING
					if(s[3] == 1){
						if(s[4] == 0){
							Entrys = ["CGOODDOM just ate out FOODSUB until she was screaming! Afterwards she asked if FOODSUB wanted to join our adventure!"]
						}else{//both fall asleep
							Entrys = ["Oh wow, GOODDOM and FOODSUB just made love!"]
						}
					}else{
						Entrys = ["GOODDOM trys to make a move on FOODSUB but got rejected."]
					}
				}
			}
		}
	 }	
	 
	 Entry = Entrys[Math.floor(Math.random()*Entrys.length)]
	 //REPLACE
	 if(s[1] == 0){
		Entry = Entry.replace(/GOODDOM/g, "me");
	 }else if(s[1] < 100){
		Entry = Entry.replace(/CGOODDOM/g, "My "+party.units[s[1]].Name);
		Entry = Entry.replace(/GOODDOM/g, "my "+party.units[s[1]].Name);
	 }else{
		Entry = Entry.replace(/CFOODDOM/g, "The "+map[party.y][party.x].units[s[1]-100].Name); 
		Entry = Entry.replace(/FOODDOM/g, "the "+map[party.y][party.x].units[s[1]-100].Name); 
	 }
	 if(s[2] == 0){
		Entry = Entry.replace(/GOODSUB/g, "me");
	 }else if(s[2] < 100){
		Entry = Entry.replace(/CGOODSUB/g, "My "+party.units[s[2]].Name);
		Entry = Entry.replace(/GOODSUB/g, "my "+party.units[s[2]].Name);
	 }else{
		Entry = Entry.replace(/CFOODSUB/g, "The "+map[party.y][party.x].units[s[2]-100].Name);
		Entry = Entry.replace(/FOODSUB/g, "the "+map[party.y][party.x].units[s[2]-100].Name);
	 }
	 //
	return Entry;
}
function AR(Entry){// ACTION RANDOMIZER
	return Math.round((Entry*.75)+(Math.random()*Entry)*.50)
}
function SR(Entry){// STAT RANDOMIZER 7 = 5-9
	return Math.max(Math.round(Entry + (Math.random()*4) - (Math.random()*4)),1)
}
function stat(num){
	if(num < 0){
	return "0&nbsp&nbsp"
	}else if(num < 10){
	return num+"&nbsp&nbsp"
	}else if(num < 100){
	return num+"&nbsp"
	}else{
	return num
	}
}
function stat2(num){
	if(num < 0){
	return "0"
	}else{
	return num
	}
}
function SpawnMobs(i,o,land){	//Stat Increments 1 3 5 10 15 20 etc - MPun/MPle always end in _2 or _7
	var dice = (Math.floor(Math.random()*1000))/10//0-99.9
	if(land == "Forest"){
		if(dice > 99.75){//BunnyGirls
			map[i][o] = {tag:"Forest",name:"Cozy Burrow",units:[],hostile:false};
			map[i][o].units.push({
				Name:"Momma Bunny",
				CPun:0,
				MPun:15,
				CPle:0,
				MPle:15,
				Figh:SR(5),
				Feas:SR(1),
				Flir:SR(5),
				Fuck:SR(3),
				Flee:SR(5),
				Feed:SR(3),
				Tags:["Bunnygirl","Small","Passive"],
				Cond:[]
			})
			map[i][o].units.push({
				Name:randomEntry("BunnyDesc"),
				CPun:0,
				MPun:5,
				CPle:0,
				MPle:10,
				Figh:SR(3),
				Feas:SR(1),
				Flir:SR(5),
				Fuck:SR(3),
				Flee:SR(15),
				Feed:SR(3),
				Tags:["Bunnygirl","Small","Passive"],
				Cond:[]
			})
			map[i][o].units.push({
				Name:randomEntry("BunnyDesc"),
				CPun:0,
				MPun:5,
				CPle:0,
				MPle:10,
				Figh:SR(3),
				Feas:SR(1),
				Flir:SR(5),
				Fuck:SR(3),
				Flee:SR(15),
				Feed:SR(3),
				Tags:["Bunnygirl","Small","Passive"],
				Cond:[]
			})
		}else if(dice > 95){
			map[i][o] = {tag:"Forest",name:randomEntry("BunnyForest"),units:[],hostile:false};
			map[i][o].units.push({
				Name:randomEntry("BunnyDesc"),
				CPun:0,
				MPun:5,
				CPle:0,
				MPle:10,
				Figh:SR(3),
				Feas:SR(1),
				Flir:SR(5),
				Fuck:SR(3),
				Flee:SR(15),
				Feed:SR(3),
				Tags:["Bunnygirl","Small","Passive"],
				Cond:[]
			})
			if(Math.random()<.1){
				map[i][o].units.push({
					Name:randomEntry("BunnyDesc"),
					CPun:0,
					MPun:5,
					CPle:0,
					MPle:10,
					Figh:SR(3),
					Feas:SR(1),
					Flir:SR(5),
					Fuck:SR(3),
					Flee:SR(15),
					Feed:SR(3),
					Tags:["Bunnygirl","Small","Passive"],
					Cond:[]
				})
			}
		}else if(dice > 94.75){
			map[i][o] = {tag:"Forest",name:randomEntry("CatForest"),units:[],hostile:true};
			map[i][o].units.push({
				Name:"Twin Catgirl",
				CPun:0,
				CPle:0,
				MPun:20,
				MPle:10,
				Figh:SR(10),
				Feas:SR(3),
				Flir:SR(5),
				Fuck:SR(5),
				Flee:SR(5),
				Feed:SR(5),
				Tags:["Catgirl","Small"],
				Cond:[]
			})
			map[i][o].units.push({
				Name:"Twin Catgirl",
				CPun:0,
				MPun:map[i][o].units[0].MPun,
				CPle:0,
				MPle:map[i][o].units[0].MPle,
				Figh:map[i][o].units[0].Figh,
				Feas:map[i][o].units[0].Feas,
				Flir:map[i][o].units[0].Flir,
				Fuck:map[i][o].units[0].Fuck,
				Flee:map[i][o].units[0].Flee,
				Feed:map[i][o].units[0].Feed,
				Tags:["Catgirl","Small"],
				Cond:[]
			})
		
		}else if(dice > 90){
			map[i][o] = {tag:"Forest",name:randomEntry("CatForest"),units:[],hostile:true};
			map[i][o].units.push({
				Name:randomEntry("CatDesc"),
				CPun:0,
				CPle:0,
				MPun:20,
				MPle:10,
				Figh:SR(10),
				Feas:SR(3),//3
				Flir:SR(5),
				Fuck:SR(5),
				Flee:SR(5),
				Feed:SR(3),
				Tags:["Catgirl","Small"],
				Cond:[]
			})
		}else if(dice > 89.75){
			map[i][o] = {tag:"Forest",name:"Strange Temple",units:[],hostile:true};
			map[i][o].units.push({
				Name:"Nine-Tailed Foxgirl",
				CPun:0,
				CPle:0,
				MPun:40,
				MPle:25,
				Figh:SR(10),
				Feas:SR(5),
				Flir:SR(5),
				Fuck:SR(3),
				Flee:SR(5),
				Feed:SR(10),
				Tags:["Foxgirl","Small"],
				Cond:[]
			})
			if(Math.random()<.50){
				map[i][o].units.push({
					Name:randomEntry("FoxDesc"),
					CPun:0,
					CPle:0,
					MPun:20,
					MPle:25,
					Figh:SR(10),
					Feas:SR(5),
					Flir:SR(5),
					Fuck:SR(3),
					Flee:SR(5),
					Feed:SR(10),
					Tags:["Foxgirl","Small"],
					Cond:[]
				})
			}
			if(Math.random()<.50){
				map[i][o].units.push({
					Name:randomEntry("FoxDesc"),
					CPun:0,
					CPle:0,
					MPun:20,
					MPle:25,
					Figh:SR(10),
					Feas:SR(5),
					Flir:SR(5),
					Fuck:SR(3),
					Flee:SR(5),
					Feed:SR(10),
					Tags:["Foxgirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 85){//5 chance
			map[i][o] = {tag:"Forest",name:randomEntry("FoxForest"),units:[],hostile:true};
			map[i][o].units.push({
				Name:randomEntry("FoxDesc"),
				CPun:0,
				CPle:0,
				MPun:20,
				MPle:25,
				Figh:SR(10),
				Feas:SR(5),
				Flir:SR(5),
				Fuck:SR(3),
				Flee:SR(5),
				Feed:SR(10),
				Tags:["Foxgirl","Small"],
				Cond:[]
			})
			if(Math.random()<.10){
				map[i][o].units.push({
					Name:randomEntry("FoxDesc"),
					CPun:0,
					CPle:0,
					MPun:20,
					MPle:25,
					Figh:SR(10),
					Feas:SR(5),
					Flir:SR(5),
					Fuck:SR(3),
					Flee:SR(5),
					Feed:SR(10),
					Tags:["Foxgirl","Small"],
					Cond:[]
				})
			}
			if(Math.random()<.10){
				map[i][o].units.push({
					Name:randomEntry("FoxDesc"),
					CPun:0,
					CPle:0,
					MPun:20,
					MPle:25,
					Figh:SR(10),
					Feas:SR(5),
					Flir:SR(5),
					Fuck:SR(3),
					Flee:SR(5),
					Feed:SR(10),
					Tags:["Foxgirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 82.5){//2.5 chance
			map[i][o] = {tag:"Forest",name:randomEntry("FrogForest"),units:[],hostile:true};
			map[i][o].units.push({
				Name:randomEntry("FrogDesc"),
				CPun:0,
				CPle:0,
				MPun:20,
				MPle:25,
				Figh:SR(5),
				Feas:SR(15),
				Flir:SR(10),
				Fuck:SR(5),
				Flee:SR(3),
				Feed:SR(5),
				Tags:["Froggirl","Small","AntiFlying"],
				Cond:[]
			})
		}else if(dice > 80){//2.5 chance
			map[i][o] = {tag:"Forest",name:randomEntry("BatForest"),units:[],hostile:true};
			map[i][o].units.push({
				Name:randomEntry("BatDesc"),
				CPun:0,
				CPle:0,
				MPun:10,
				MPle:20,
				Figh:SR(10),
				Feas:SR(3),
				Flir:SR(3),
				Fuck:SR(5),
				Flee:SR(10),
				Feed:SR(5),
				Tags:["Batgirl","Small","Flying"],
				Cond:[]
			})
		}
		
	}else if(land == "Plains"){
		 if(dice > 98){
			map[i][o] = {tag:"Plains",name:randomEntry("BunnyPlains"),units:[],hostile:false};
			map[i][o].units.push({
				Name:randomEntry("BunnyDesc"),
				CPun:0,
				MPun:5,
				CPle:0,
				MPle:10,
				Figh:SR(3),
				Feas:SR(1),
				Flir:SR(5),
				Fuck:SR(3),
				Flee:SR(15),
				Feed:SR(3),
				Tags:["Bunnygirl","Small","Passive"],
				Cond:[]
			})
			if(Math.random()<.1){
				map[i][o].units.push({
					Name:randomEntry("BunnyDesc"),
					CPun:0,
					MPun:5,
					CPle:0,
					MPle:10,
					Figh:SR(3),
					Feas:SR(1),
					Flir:SR(5),
					Fuck:SR(3),
					Flee:SR(15),
					Feed:SR(3),
					Tags:["Bunnygirl","Small","Passive"],
					Cond:[]
				})
			}
		 }
	}
	//--------------------

	
//SET UNIQUE LAND
	if(map[i][o].name == "Small Cave"){
		map[i][o].clr="#999977";
		map[i][o].tag="Underground"
	}else if(map[i][o].name == "Sunny Clearing"){
		map[i][o].clr="#55ee88";
	}else if(map[i][o].name == "Shady Clearing"){
		map[i][o].clr="#22bb55";
	}else if(map[i][o].name == "Flowery Clearing"){
		map[i][o].clr="#cc88cc";
	}else if(map[i][o].name == "Murky Pond"){//["Gloomy Forest","Gloomy Forest","Gloomy Forest","Small Cave","Small Cave", "Shady Clearing"]}
		map[i][o].clr="#66bbaa";
	}else if(map[i][o].name == "Bubbling Spring"){
		map[i][o].clr="#77bbdd";
	}else if(map[i][o].name == "Cozy Burrow" || map[i][o].name == "Treehouse" || map[i][o].name == "Strange Temple" ){
		map[i][o].clr="#bbaa66";
		map[i][o].tag="Indoors"
	}else if(map[i][o].name == "Sunny Forest"){
		map[i][o].clr="#88ff55";
		map[i][o].clr="#77cc55";//Making Forests Monocolored
	}else if(map[i][o].name == "Lush Forest"){
		map[i][o].clr="#55cc55";
		map[i][o].clr="#77cc55";//Making Forests Monocolored
	}else if(map[i][o].name == "Muddy Forest"){
		map[i][o].clr="#558855";
		map[i][o].clr="#77cc55";//Making Forests Monocolored
	}else if(map[i][o].name == "Overgrown Forest"){//NEED TO ASSIGN A CREATURE TO THIS
		map[i][o].clr="#33dd33";
		map[i][o].clr="#77cc55";//Making Forests Monocolored
	}else if(map[i][o].name == "Gloomy Forest"){
		map[i][o].clr="#449944";
		map[i][o].clr="#77cc55";//Making Forests Monocolored
	}else if(map[i][o].name == "Blooming Forest"){
		map[i][o].clr="#55ee66";
		map[i][o].clr="#77cc55";//Making Forests Monocolored
	}
}
function N(noun){
	if(noun.charAt(0) == "A" || noun.charAt(0) == "E" || noun.charAt(0) == "I" || noun.charAt(0) == "O" || noun.charAt(0) == "U" || noun.charAt(0) == "a" || noun.charAt(0) == "e" || noun.charAt(0) == "i" || noun.charAt(0) == "o" || noun.charAt(0) == "u"){
		return " an "+noun
	}else{
		return " a "+noun
	}
}

//
function StatGain(i,o){
	var u = 0
	var increases = 0;
	var increaseValue = 0;
	var eatValue = 2;//Used to tweek gameplay.
	if(o < 100){
		increaseValue = party.units[o].Size;
	}else{
		increaseValue = map[party.y][party.x].units[o-100].Size;
	}
	if(i == 0){//HERO
		if(o < 100){
			party.units[0].CPle = Math.max(party.units[0].CPle-AR(party.units[o].Size*eatValue),0)
			increaseValue = party.units[o].Size
		}else{
			party.units[0].CPle = Math.max(party.units[0].CPle-AR(map[party.y][party.x].units[o-100].Size*eatValue),0)
			increaseValue = map[party.y][party.x].units[o-100].Size
		}
	}else if(i < 100){//GOOD
		if(o < 100 && party.units[i].CPle < party.units[i].MPle){
			party.units[i].CPle = Math.max(party.units[i].CPle-AR(party.units[o].Size*eatValue),party.units[0].MPle-1)
		}else if(party.units[i].CPle < party.units[i].MPle){
			party.units[i].CPle = Math.max(party.units[i].CPle-AR(map[party.y][party.x].units[o-100].Size*eatValue),party.units[i].MPle-1)
		}
	}else{
		if(o < 100 && map[party.y][party.x].units[i-100].CPle<map[party.y][party.x].units[i-100].MPle){
			map[party.y][party.x].units[i-100].CPle = Math.max(map[party.y][party.x].units[i-100].CPle+AR(party.units[o].Size*eatValue),map[party.y][party.x].units[i-100].MPle-1)
		}else if(map[party.y][party.x].units[i-100].CPle<map[party.y][party.x].units[i-100].MPle){
			map[party.y][party.x].units[i-100].CPle = Math.max(map[party.y][party.x].units[i-100].CPle+AR(map[party.y][party.x].units[o-100].Size*eatValue),map[party.y][party.x].units[i-100].MPle-1)
		}
	}
	if(i < 100 && o < 100){//GOOD+HERO
		if(party.units[i].Figh < party.units[o].Figh){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Figh+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Flir < party.units[o].Flir){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Flir+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Flee < party.units[o].Flee){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Flee+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Feas < party.units[o].Feas){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Feas+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Fuck < party.units[o].Fuck){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Fuck+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Feed < party.units[o].Feed){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Feed+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
	}
	if(i < 100 && o >= 100){//GOOD+HERO ate FOOD-------------------------------------------------------------------------------------------------------------------------
		if(party.units[i].Figh < map[party.y][party.x].units[o-100].Figh){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Figh+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Flir < map[party.y][party.x].units[o-100].Flir){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Flir+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Flee < map[party.y][party.x].units[o-100].Flee){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Flee+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Feas < map[party.y][party.x].units[o-100].Feas){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Feas+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Fuck < map[party.y][party.x].units[o-100].Fuck){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Fuck+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
		if(party.units[i].Feed < map[party.y][party.x].units[o-100].Feed){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				party.units[i].Feed+=increaseValue;
			}else if(u == 0){
				party.units[i].Figh+=increaseValue;
			}else if(u == 1){
				party.units[i].Flir+=increaseValue;
			}else if(u == 2){
				party.units[i].Flee+=increaseValue;
			}else if(u == 3){
				party.units[i].Feas+=increaseValue;
			}else if(u == 4){
				party.units[i].Fuck+=increaseValue;
			}else{
				party.units[i].Feed+=increaseValue;
			}
		}
	}	
	if(i >= 100){//FOOD ate GOOD-------------------------------------------------------------------------------------------------------------------------
		if(map[party.y][party.x].units[i-100].Figh < party.units[o].Figh){
			increases+=increaseValue;

			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				map[party.y][party.x].units[i-100].Figh+=increaseValue;
			}else if(u == 0){
				map[party.y][party.x].units[i-100].Figh+=increaseValue;
			}else if(u == 1){
				map[party.y][party.x].units[i-100].Flir+=increaseValue;
			}else if(u == 2){
				map[party.y][party.x].units[i-100].Flee+=increaseValue;
			}else if(u == 3){
				map[party.y][party.x].units[i-100].Feas+=increaseValue;
			}else if(u == 4){
				map[party.y][party.x].units[i-100].Fuck+=increaseValue;
			}else{
				map[party.y][party.x].units[i-100].Feed+=increaseValue;
			}
		}
		if(map[party.y][party.x].units[i-100].Flir < party.units[o].Flir){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				map[party.y][party.x].units[i-100].Flir+=increaseValue;
			}else if(u == 0){
				map[party.y][party.x].units[i-100].Figh+=increaseValue;
			}else if(u == 1){
				map[party.y][party.x].units[i-100].Flir+=increaseValue;
			}else if(u == 2){
				map[party.y][party.x].units[i-100].Flee+=increaseValue;
			}else if(u == 3){
				map[party.y][party.x].units[i-100].Feas+=increaseValue;
			}else if(u == 4){
				map[party.y][party.x].units[i-100].Fuck+=increaseValue;
			}else{
				map[party.y][party.x].units[i-100].Feed+=increaseValue;
			}
		}
		if(map[party.y][party.x].units[i-100].Flee < party.units[o].Flee){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				map[party.y][party.x].units[i-100].Flee+=increaseValue;
			}else if(u == 0){
				map[party.y][party.x].units[i-100].Figh+=increaseValue;
			}else if(u == 1){
				map[party.y][party.x].units[i-100].Flir+=increaseValue;
			}else if(u == 2){
				map[party.y][party.x].units[i-100].Flee+=increaseValue;
			}else if(u == 3){
				map[party.y][party.x].units[i-100].Feas+=increaseValue;
			}else if(u == 4){
				map[party.y][party.x].units[i-100].Fuck+=increaseValue;
			}else{
				map[party.y][party.x].units[i-100].Feed+=increaseValue;
			}
		}
		if(map[party.y][party.x].units[i-100].Feas < party.units[o].Feas){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				map[party.y][party.x].units[i-100].Feas+=increaseValue;
			}else if(u == 0){
				map[party.y][party.x].units[i-100].Figh+=increaseValue;
			}else if(u == 1){
				map[party.y][party.x].units[i-100].Flir+=increaseValue;
			}else if(u == 2){
				map[party.y][party.x].units[i-100].Flee+=increaseValue;
			}else if(u == 3){
				map[party.y][party.x].units[i-100].Feas+=increaseValue;
			}else if(u == 4){
				map[party.y][party.x].units[i-100].Fuck+=increaseValue;
			}else{
				map[party.y][party.x].units[i-100].Feed+=increaseValue;
			}
		}
		if(map[party.y][party.x].units[i-100].Fuck < party.units[o].Fuck){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				map[party.y][party.x].units[i-100].Fuck+=increaseValue;
			}else if(u == 0){
				map[party.y][party.x].units[i-100].Figh+=increaseValue;
			}else if(u == 1){
				map[party.y][party.x].units[i-100].Flir+=increaseValue;
			}else if(u == 2){
				map[party.y][party.x].units[i-100].Flee+=increaseValue;
			}else if(u == 3){
				map[party.y][party.x].units[i-100].Feas+=increaseValue;
			}else if(u == 4){
				map[party.y][party.x].units[i-100].Fuck+=increaseValue;
			}else{
				map[party.y][party.x].units[i-100].Feed+=increaseValue;
			}
		}
		if(map[party.y][party.x].units[i-100].Feed < party.units[o].Feed){
			increases+=increaseValue;
			u = Math.floor(Math.random()*6)
			if(Math.random()<.50){
				map[party.y][party.x].units[i-100].Feed+=increaseValue;
			}else if(u == 0){
				map[party.y][party.x].units[i-100].Figh+=increaseValue;
			}else if(u == 1){
				map[party.y][party.x].units[i-100].Flir+=increaseValue;
			}else if(u == 2){
				map[party.y][party.x].units[i-100].Flee+=increaseValue;
			}else if(u == 3){
				map[party.y][party.x].units[i-100].Feas+=increaseValue;
			}else if(u == 4){
				map[party.y][party.x].units[i-100].Fuck+=increaseValue;
			}else{
				map[party.y][party.x].units[i-100].Feed+=increaseValue;
			}
		}
	}
	
	LogEntry("Stats increased by:"+increases)
}
function unit (Entry){
	if(Entry<100){
		return party.units[Entry];
	}else{
		return map[party.y][party.x].units[Entry-100];
	}
}
//RAND-END--------------------------------------------------------------------
</script>
</html>
