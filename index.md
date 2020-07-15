<html lang="en-US">

<head>
	<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;800&display=swap" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Londrina+Solid&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Londrina+Outline|Londrina+Solid&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet">
	
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>F6</title>
<style>
body{
margin:0px;
}
button:focus {outline:0;}
h1{
display: none;
}
.bod {
	background-color: #2e4052;
	margin:0px;
	animation-name: animation_bod;
	animation-duration: 2s;
}
@keyframes animation_bod{
	  0%  {opacity: 0.0;background-color: #2e4052;}
	 50%  {opacity: 0.0;background-color: #172028;}
	100%  {opacity: 1.0;background-color: #2e4052;}
}
.main
{
user-select: none;
}
.grid-container {
	border-radius: 15px 15px 15px 15px;
	background-color:#363635;
	border-color:#b5a886;
	border-style: solid;
	border-width: 30px;
	box-shadow: 2px 4px 8px #666;
	display: inline-grid;
	text-align: center;
	grid-template-columns: 5px auto auto auto 5px;
	grid-template-rows: 5px auto auto auto 5px;
	padding: 0px;
	margin: 10px 10px -15px 10px;
	padding:1px;
}
.grid-edge {
}
.grid-item {

  padding: 10px;
  font-family: 'Love Ya Like A Sister', cursive;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  user-select: none; 
}
.container {
	box-shadow: 0px 0px 200px #172028;
	font-family: 'PT Mono', monospace;
	font-size: 12px;
	background-color: #a69f98;
	text-align: center;
	margin: auto

}
.mapspan {
	font-family: 'Permanent Marker', cursive;
	display: inline-block;
	user-select: none; 
	
}
.land {
	font-family: 'Permanent Marker', cursive;
  padding: 10px;
  margin: 0px;
  border: none;
  border-radius: 4px;
}
.landdis {
	font-family: 'Permanent Marker', cursive;
	
  padding: 10px;
  margin: 0px;
  border: none;
  pointer-events: none;
  user-select: none;
  background-color: #cccccc;
  color:#666666;
  border-radius: 4px;
}
.landact {
	font-family: 'Permanent Marker', cursive;
	
	font-size: 14px;
	padding: 10px;
	margin: 0px;
	border: none;
	background-color:#ffee88;
	
	font-weight: bold;
	border-radius: 4px;
}
.landactdis {
	font-family: 'Permanent Marker', cursive;
	
	font-size: 14px;
	padding: 10px;
	margin: 0px;
	border: none;
	pointer-events: none;
	user-select: none;
	background-color: #cccccc;
	color:#666666;
	border-radius: 4px;
}
.landavl {
	font-family: 'Permanent Marker', cursive;
	
  padding: 10px;
  margin: 0px;
  border: none;
  background-color:#88cccc;
  border-radius: 4px;
}
.landavl:hover {
	animation-name: animation_landavl_hover;
	animation-duration: .5s;
}
@keyframes animation_landavl_hover {
	  0%  {transform: translate(0px,  0px) scale(.95, 1.105);}
	 20%  {transform: translate(0px, 2px) scale(1.05, .95);}
	100%  {transform: translate(0px,-4px) scale(1, 1);}
}
.btn {
	box-shadow: 2px 4px 8px #000;
	user-select: none;
	font-family: 'Luckiest Guy', cursive;
	font-size: 12px;
	letter-spacing: .5px;
  padding: 10px;
  margin: 15px 5px 5px 5px;
  border: none;
  border-radius: 4px;
}
.btndis {
	box-shadow: 1px 2px 4px #000;
	user-select: none;
	font-family: 'Luckiest Guy', cursive;
	font-size: 18px;
  padding: 10px;
  margin: 15px 5px 5px 5px;
  border: none;
  pointer-events: none;
  user-select: none;
  background-color: #cccccc;
  color:#666666;
  border-radius: 4px;
}
.btnact {
	box-shadow: 1px 2px 2px #000;
	user-select: none;
	font-family: 'Luckiest Guy', cursive;
	font-size: 18px;
	letter-spacing: 2px;
	margin: 15px 5px 5px 5px;
	padding: 8px 12px 8px 12px;
	border: none;
	background-color:#ffee88;
	font-weight: 800;
	border-radius: 4px;
	animation-name: animation_btnact;
	animation-duration: .5s;
	animation-fill-mode: forwards;
	/*animation-delay: -1s;*/
	/*animation-iteration-count: infinite;*/
	/*animation-timing-function: linear;*/
}

@keyframes animation_btnact {
	  0%  {transform: translate(0px,  0px) scale(.95, 1.105);}
	 20%  {transform: translate(0px, 2px) scale(1.05, .95);}
	100%  {transform: translate(0px,-4px) scale(1, 1);}
}
.btnavl {
	box-shadow: 2px 4px 8px #000;
	user-select: none;
	cursor: pointer;
	font-family: 'Luckiest Guy', cursive;
	font-size: 18px;
	letter-spacing: .5px;
  padding: 10px;
  margin: 15px 5px 5px 5px;
  border: none;
  background-color:#88cccc;
  border-radius: 4px;
}
.btnext {
	box-shadow: 2px 4px 8px #000;
	user-select: none;
	cursor: pointer;
	font-family: 'Luckiest Guy', cursive;
	font-size: 18px;
	letter-spacing: .5px;
  padding: 10px;
  margin: 15px 5px 5px 5px;
  border: none;
  background-color:#88cccc;
  border-radius: 4px;
	animation-name: animation_btnext;
	animation-duration: .5s;
	animation-fill-mode: forwards;
}
@keyframes animation_btnext {
	  0%  {background-color:#88cccc;transform: translate(0px,0px) scale(1.01, .96);}
	 20%  {background-color:#91D8D8;transform: translate(0px,1px) scale(.98, 1.02);}
	100%  {background-color:#88cccc;transform: translate(0px,0px) scale(1, 1);}
}
.nam {
	margin-bottom:3px;
	box-shadow: 0px 1px 2px #999;
	user-select: none;
	font-family: 'Londrina Solid', cursive;
	letter-spacing: .5px;
	font-size: 18px;
	font-weight: 100;
	border: none;
	border-radius: 5px 5px 0px 0px;
}
.namdis { 
	margin-bottom:3px;
	box-shadow: 0px 1px 2px #999;
	user-select: none;
	font-family: 'Londrina Solid', cursive;
	letter-spacing: .5px;
	font-size: 18px;
	font-weight: 100;
	border: none;
	pointer-events: none;
	user-select: none;
	background-color: #cccccc;
	color:#333333;
	border-radius: 10px 10px 0px 0px;
}
.namsleep { 
	margin-bottom:3px;
	box-shadow: 0px 1px 2px #999;
	user-select: none;
	font-family: 'Londrina Solid', cursive;
	letter-spacing: .5px;
	font-size: 18px;
	font-weight: 100;
	border: none;
	pointer-events: none;
	user-select: none;
	background-color: #cccccc;
	color:#883399;
	border-radius: 10px 10px 0px 0px;
}
.namout { 
	margin-bottom:3px;
	user-select: none;
	font-family: 'Londrina Solid', cursive;
	letter-spacing: .5px;
	font-size: 18px;
	font-weight: 100;
	border: none;
	pointer-events: none;
	user-select: none;
	background: none;
	color:#bbbbbb;
	border-radius: 10px 10px 0px 0px;
}
.namact {
	margin-top:1px;
	box-shadow: 0px 1px 2px #999;
	user-select: none;
	font-family: 'Londrina Solid', cursive;
	font-size: 18px;
	font-weight: 300;
	border: none;
	background-color:#ffee88;
	border-radius: 10px 10px 0px 0px;
}
.namact_animate {
	margin-top:1px;
	box-shadow: 0px 1px 2px #999;
	user-select: none;
	font-family: 'Londrina Solid', cursive;
	font-size: 18px;
	font-weight: 300;
	border: none;
	background-color:#ffee88;
	border-radius: 10px 10px 0px 0px;
	animation-name: animation_namact;
	animation-duration: .5s;
	animation-fill-mode: forwards;
}
@keyframes animation_namact {
	  0%  {transform: rotate(0deg);}
	 20%  {transform: rotate(-.5deg);} 
	 50%  {transform: rotate(1deg);}
	100%  {transform: rotate(0deg);}
}


.namavl { 
	margin-bottom:3px;
	box-shadow: 1px 2px 2px #999;
	user-select: none;
	cursor: pointer;
	font-family: 'Londrina Solid', cursive;
	letter-spacing: .5px;
	font-size: 18px;
	font-weight: 100;
	border: none;
	background-color:#88cccc;
	border-radius: 10px 10px 0px 0px;
}
.namavl_animate { 
	margin-bottom:3px;
	box-shadow: 1px 2px 2px #999;
	user-select: none;
	cursor: pointer;
	font-family: 'Londrina Solid', cursive;
	letter-spacing: .5px;
	font-size: 18px;
	font-weight: 100;
	border: none;
	background-color:#88cccc;
	border-radius: 10px 10px 0px 0px;
	animation-name: animation_namavl;
	animation-timing-function: linear;
	animation-duration: .5s;
	animation-fill-mode: forwards;
}
@keyframes animation_namavl {
	  0%  {background-color:#cccccc;color:#333333;} 
	 50%  {color:#333333;} 
	100%  {background-color:#88cccc;color:#000000;}
}
.mainspan1 {
	box-shadow: 2px 1px 8px #333;
	user-select: none;
	vertical-align: top;
	padding: 5px 5px 5px 5px;
	margin-right:2.5%;
	background-color: white;
	display: inline-block;
	width: 40%;
	text-align: left;
	border-radius: 15px 0px 0px 0px;
}
.mainspan2 {
	box-shadow: 2px 1px 8px #333;
	user-select: none;
	vertical-align: top;
	padding: 5px 5px 5px 5px;
	margin-left:2.5%;
	background-color: white;
	display: inline-block;
	width: 40%;
	text-align: right;
	border-radius: 0px 15px 0px 0px;
}
.mainspan2_animate {
	box-shadow: 2px 1px 8px #333;
	user-select: none;
	vertical-align: top;
	padding: 5px 5px 5px 5px;
	margin-left:2.5%;
	background-color: white;
	display: inline-block;
	width: 40%;
	text-align: right;
	border-radius: 0px 15px 0px 0px;
	animation-name: animation_mainspan2;
	animation-timing-function: ease;
	animation-duration: .25s;
	animation-fill-mode: forwards;
}
@keyframes animation_mainspan2{
	  0%  {opacity: 0.0;transform: scale(.98, 1.02);}
	  50%  {opacity: 1.0;transform: scale(1.02, .98);}
	100%  {opacity: 1.0;transform: scale(1, 1);}
}
.log {
	min-height: 1080px;
	box-shadow: inset 40px 20px 80px #282828;
	margin-top:-18px; 
	border-left: 30px solid #a69f98;
	border-right: 30px solid #a69f98;
	color:#b5a886;
	font-family: 'EB Garamond', serif;
	font-size: 150%;
	padding: 20px 30px 30px 30px;
	background-color: #363635;
	text-align: left;
}
.logDeets {
	text-align: right;
	font-family: 'PT Mono', monospace;
	font-weight: 800;
	font-size: 55%;
	color: #a69f98;
	font-style: italic;
	margin-top:-1.25px;
	margin-bottom:1.25px;
}
.tags{
	 line-height: 175%;
	 margin:-2px;
	 
}
.text {
   font-family: 'PT Mono', monospace;
   position:  absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   text-align: center;
   font-size: 20px;
   color: white;
}
.caveText {
	color:#FFFFFF;
}
.GreyText {
	color:#666666;
}
.BoldText {
	font-weight: 800;
}
        </style>
</head>

<body class="bod">

<div id="content" class="container">
<div id="status">
[Put a status and menu bar here someday!]
</div>
<div id="map">
	
	<div class="grid-container">
	  <div id="map_top1" class="grid-edge"></div>
	  <div id="map_top2" class="grid-edge"></div>
	  <div id="map_top3" class="grid-edge"></div>  
	  <div id="map_top4" class="grid-edge"></div>
	  <div id="map_top5" class="grid-edge"></div>
	  <div id="map_left1" class="grid-edge"></div>  
	  <div id="map_northwest" class="grid-item" onclick="Walk(-1,-1)"></div>
	  <div id="map_north" class="grid-item" onclick="Walk(-1,0)"></div>
	  <div id="map_northeast" class="grid-item" onclick="Walk(-1,1)"></div>  
	  <div id="map_right1" class="grid-edge"></div>  
	  <div id="map_left2" class="grid-edge"></div>
	  <div id="map_west" class="grid-item" onclick="Walk(0,-1)"></div>
	  <div id="map_center" class="grid-item"></div>  
	  <div id="map_east" class="grid-item" onclick="Walk(0,1)"></div>
	  <div id="map_right2" class="grid-edge"></div>
	  <div id="map_left3" class="grid-edge"></div>  
	  <div id="map_southwest" class="grid-item" onclick="Walk(+1,-1)"></div>
	  <div id="map_south" class="grid-item" onclick="Walk(+1,0)"></div>  
	  <div id="map_southeast" class="grid-item" onclick="Walk(+1,+1)"></div>  
	  <div id="map_right3" class="grid-edge"></div>
	  <div id="map_bottom1" class="grid-edge" ></div>
	  <div id="map_bottom2" class="grid-edge"></div>  
	  <div id="map_bottom3" class="grid-edge"></div>
	  <div id="map_bottom4" class="grid-edge"></div>
	  <div id="map_bottom5" class="grid-edge"></div>  
	</div>
</div>
<div id="main">
<span id="Good" class="mainspan1" >GoodGoodGoodGoodGood</span> <span id="Food" class="mainspan2" >FoodFoodFoodFoodFood</span>
</div>
<div id="actions" >
actions
</div>
<div id="log" class="log">
log
</div>
</div>
</body>
<script>
//style="border-radius: 0px 0px 5px 0px;"
var storedRandomEntry = {};
var tempInits = []
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
var TravelDialogCountdown = 10;
var EventCountdown = 0;
var LogGameplay = false;
var lastMove=[];
var death = 0;
var CavePath = Math.floor(Math.random()*3)//Used for probability. 2/3 of being open
var Cocked = null;
var travel
var farmRatio = 0;
//document.getElementById("content").innerHTML = "404";
var riverName = ""
function GetMap(i,o){ 
	if(i < 0){i += map.length;}
	if(i >= map.length){i -= map.length;}
	if(o < 0){o += map.length;}
	if(o >= map[0].length){o -= map.length;}
	return map[i][o];
}
function GetMapCrossroad(i,o){
	if(i < 0){i += map.length;}
	if(i >= map.length){i -= map.length;}
	if(o < 0){o += map.length;}
	if(o >= map[0].length){o -= map.length;}
	
	if(map[i][o].name == undefined){
		if(map[i][o] == 7){
			return true;
		}
		if(map[i][o] == 8){
			return true;
		}
		return false;
	}else{
		if(map[i][o].tag == "Road"){
			return true;
		}
		if(map[i][o].tag == "Trail"){
			return true;
		}
		return false;
	}
}
function GetMapTag(i,o){
	if(i < 0){i += map.length;}
	if(i >= map.length){i -= map.length;}
	if(o < 0){o += map.length;}
	if(o >= map[0].length){o -= map.length;}
	
	if(map[i][o].name == undefined){
		return "none";
	}else{
		return map[i][o].tag;
	}
}
function GetMapTagCanMake(i,o){
	if(i < 0){i += map.length;}
	if(i >= map.length){i -= map.length;}
	if(o < 0){o += map.length;}
	if(o >= map[0].length){o -= map.length;}
	
	if(map[i][o].name == undefined){
		MakeMapTile(i,o)
	}
		return map[i][o].tag;
}
function GetMapName(i,o){
	if(i < 0){i += map.length;}
	if(i >= map.length){i -= map.length;}
	if(o < 0){o += map.length;}
	if(o >= map[0].length){o -= map.length;}
	
	if(map[i][o].name == undefined){
		return "none";
	}else{
		return map[i][o].name;
	}
}
function GetMapObject(i,o){
	if(i < 0){i += map.length;}
	if(i >= map.length){i -= map.length;}
	if(o < 0){o += map.length;}
	if(o >= map[0].length){o -= map.length;}
	
	if(map[i][o].name == undefined){
		MakeMapTile(i,o)
	}
	return map[i][o]; 
}
function GetMapTile(i,o){//NEW TILES TO MAKE 5,16,19
	var namestring = ""
	if(i < 0){i += map.length;}
	if(i >= map.length){i -= map.length;}
	if(o < 0){o += map.length;}
	if(o >= map[0].length){o -= map.length;}
	
	if(map[i][o].name == undefined){
		MakeMapTile(i,o)
	}
	
	//---------------------------------------------------------------------------------------------------------------------
	if(party.y == i && party.x == o){
		namestring = map[i][o].name.toUpperCase()
	}else{
		namestring = map[i][o].name
	}
	if(map[party.y][party.x].tag == "Entrance"){ 
		if(map[i][o].tag == "Entrance"){ 
			return "<span class=\"caveText\">"+namestring+"</span>";
		}else if(map[i][o].tag == "Cave"){
			return "<span class=\"caveText\">"+namestring+"</span>";
		}else if(map[i][o].tag == "Cliff"){
			return "<span class=\"caveText\">. . . . . .</span>";
		}else{
			return map[i][o].name;
		}
	}else if(map[party.y][party.x].tag == "Cave"){
		if(map[i][o] == map[party.y][party.x]){
			return "<span class=\"caveText\">"+namestring+"</span>";
		}else if(map[i][o].tag == "Cave" || map[i][o].tag == "Entrance"){
			if(FindPersonality("Drowgirl") != null || FindPersonality("Mousegirl") != null || FindPersonality("Batgirl") != null || FindPersonality("Spidergirl") != null){
				return "<span class=\"caveText\">"+namestring+"</span>";
			}else{
				return "<span class=\"caveText\">? ? ? ?</span>";
			}
		}else if(map[i][o].tag == "Dungeon"){
			if(map[i][o].altname == "Door"){
				if(FindPersonality("Drowgirl") != null || FindPersonality("Mousegirl") != null || FindPersonality("Batgirl") != null || FindPersonality("Spidergirl") != null){
					return "<span class=\"caveText\">Underground Castle</span>";
				}else{
					return "<span class=\"caveText\">? ? ? ?</span>";
				}
			}else{
				return "<span class=\"caveText\">. . . .</span>";
			}
		}else{
			return "<span class=\"caveText\">. . . .</span>";
		}
	}else if(map[party.y][party.x].tag == "Dungeon"){
		if((i-party.y == -1 && o-party.x == 0 && map[party.y][party.x].north)||(i-party.y == 1 && o-party.x == 0 && map[party.y][party.x].south)||(i-party.y == 0 && o-party.x == -1 && map[party.y][party.x].west)||(i-party.y == 0 && o-party.x == 1 && map[party.y][party.x].east)){
			if(map[i][o].name == "Boss" ){
				return "Boss"
			}else if(map[i][o].altname == "Door"){
				return "Hall"
			}else if(map[i][o].tag == "Dungeon"){
				return "Room"
			}else{
				return "=<span class=\"caveText\">Exit</span>"
			}
		}else if(i-party.y == 0 && o-party.x == 0){
			if(map[i][o].name == "Boss" ){
				return "BOSS"
			}else if(map[i][o].altname == "Door"){
				return "HALL"
			}else{
				return "ROOM"
			}
		}else{
			return "....";//use this to find tiles you can't travel to!
		}
		
		
		
		
		
		
		
		if(map[i][o].tag == "Dungeon"){
			return namestring;
		}else if(map[i][o].tag == "Cave"){
			return map[i][o].altname;
		}else{
			return namestring;
		}
	}else{
		if(map[i][o].tag == "Entrance"){
			return namestring;
		}else if(map[i][o].tag == "Cave"){
			return map[i][o].altname;
		}else if(map[i][o].tag == "Dungeon"){
			if(map[i][o].altname == "Door"){
				return "Grand Hall";
			}else{
				return "Castle Wall";
			}
		}else{
			return namestring;
		}
	}
}
function GetMapTileColor(i,o){
	if(i < 0){i += map.length;}
	if(i >= map.length){i -= map.length;}
	if(o < 0){o += map.length;}
	if(o >= map[0].length){o -= map.length;}
	
	if(map[i][o].name == undefined){
		MakeMapTile(i,o)
	} 
	if(map[party.y][party.x].tag == "Dungeon"){
		if(Math.abs(party.y-i)==2 || Math.abs(party.x-o)==2 ){
			return "#000"
		}else if(map[i][o].tag == "Dungeon"){
			return "#999999"
		}else{
			return "#000"
		}
	}if(map[party.y][party.x].tag == "Entrance"){
		if(Math.abs(party.y-i)==2 || Math.abs(party.x-o)==2 ){
			return "#b5a886"
		}else if(map[i][o].tag == "Cave" || map[i][o].tag == "Entrance"){
			return "#000000"
		}else if(map[i][o].tag == "Cliff"){
			return "#000000"
		}else{
			return map[i][o].clr
		}
	}else if(map[party.y][party.x].tag == "Cave"){
		if(map[i][o] == map[party.y][party.x]){
			return "#000000"
		}else if(map[i][o].tag == "Cave" || map[i][o].tag == "Entrance"){
			return "#000000"
		}else{
			return "#000000"
		}
	}else{
		return map[i][o].clr
	}
}
//TODO:MakeMapTile
function MakeMapTile(i,o){
	var caveCount = 0;
		EventCountdown--;
		if(map[i][o] == 0){
			map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
		}
		if(map[i][o] == 1){
			map[i][o] = {tag:"Forest",name:randomEntry("Forest"),units:[],hostile:false,clr:"#77cc55"};
			SpawnMobs(i,o,"Forest");//will also change name of map tile
		}
		if(map[i][o] == 2){
			map[i][o] = {tag:"Forest",name:randomEntry("ForestWolf"),units:[],hostile:false,clr:"#77cc55"}; 
			SpawnMobs(i,o,"ForestWolf");//will also change name of map tile
			if(map[i][o].name == "Logged Cutover"){ 
				map[i][o].clr="#99d681";
				map[i][o].tag="Clearing";
			}
		}
		if(map[i][o] == 4){
			map[i][o] = {tag:"Plains",name:randomEntry("Plains"),units:[],hostile:false,clr:"#99dd88"};
			SpawnMobs(i,o,"Plains");//will also change name of map tile
		}
		if(map[i][o] == 5){
			map[i][o] = {tag:"Farm",name:randomEntry("Farm"),units:[],hostile:false,clr:"#88cc22"};
			SpawnMobs(i,o,"Farm");//will also change name of map tile
		}
		if(map[i][o] == 7){//SAFE
			var tcons = 0//trail connections 3+ == crossroads
			var trailName = ""
			//if(trailName == ""){trailName=randomEntry("TrailMain")}
			if(Math.random()<.90){
				if(GetMapCrossroad(i+1,o+1)){tcons++;if(GetMapName(i+1,o+1) != "none" && GetMapTag(i+1,o+1) == "Trail"){trailName=map[i+1][o+1].name;}}
				if(GetMapCrossroad(i+1,o  )){tcons++;if(GetMapName(i+1,o  ) != "none" && GetMapTag(i+1,o  ) == "Trail"){trailName=map[i+1][o  ].name;}}
				if(GetMapCrossroad(i+1,o-1)){tcons++;if(GetMapName(i+1,o-1) != "none" && GetMapTag(i+1,o-1) == "Trail"){trailName=map[i+1][o-1].name;}}
				if(GetMapCrossroad(i,o+1  )){tcons++;if(GetMapName(i,o+1  ) != "none" && GetMapTag(i,o+1  ) == "Trail"){trailName=map[i  ][o+1].name;}}
				if(GetMapCrossroad(i,o-1  )){tcons++;if(GetMapName(i,o-1  ) != "none" && GetMapTag(i,o-1  ) == "Trail"){trailName=map[i  ][o-1].name;}}
				if(GetMapCrossroad(i-1,o+1)){tcons++;if(GetMapName(i-1,o+1) != "none" && GetMapTag(i-1,o+1) == "Trail"){trailName=map[i-1][o+1].name;}}
				if(GetMapCrossroad(i-1,o  )){tcons++;if(GetMapName(i-1,o  ) != "none" && GetMapTag(i-1,o  ) == "Trail"){trailName=map[i-1][o  ].name;}}
				if(GetMapCrossroad(i-1,o-1)){tcons++;if(GetMapName(i-1,o-1) != "none" && GetMapTag(i-1,o-1) == "Trail"){trailName=map[i-1][o-1].name;}}
				if(trailName == "Crossroads" || trailName == ""){trailName = randomEntry("TrailMain")}
				if(tcons >= 3){trailName = "Crossroads"}
				map[i][o] = {tag:"Trail",name:trailName,units:[],hostile:false,clr:"#eeee88"};
			}else{
				map[i][o] = {tag:"Trail",name:randomEntry("TrailMain"),units:[],hostile:false,clr:"#eeee88"};
			}
		}
		if(map[i][o] == 8){//SAFE
			var rcons = 0//trail connections 3+ == crossroads
			var roadName = ""
			//if(trailName == ""){trailName=randomEntry("TrailMain")}
			if(Math.random()<.95){
				if(GetMapCrossroad(i+1,o+1)){rcons++;if(GetMapName(i+1,o+1) != "none" && GetMapTag(i+1,o+1) == "Road"){roadName=map[i+1][o+1].name;}}
				if(GetMapCrossroad(i+1,o  )){rcons++;if(GetMapName(i+1,o  ) != "none" && GetMapTag(i+1,o  ) == "Road"){roadName=map[i+1][o  ].name;}}
				if(GetMapCrossroad(i+1,o-1)){rcons++;if(GetMapName(i+1,o-1) != "none" && GetMapTag(i+1,o-1) == "Road"){roadName=map[i+1][o-1].name;}}
				if(GetMapCrossroad(i,o+1  )){rcons++;if(GetMapName(i,o+1  ) != "none" && GetMapTag(i,o+1  ) == "Road"){roadName=map[i  ][o+1].name;}}
				if(GetMapCrossroad(i,o-1  )){rcons++;if(GetMapName(i,o-1  ) != "none" && GetMapTag(i,o-1  ) == "Road"){roadName=map[i  ][o-1].name;}}
				if(GetMapCrossroad(i-1,o+1)){rcons++;if(GetMapName(i-1,o+1) != "none" && GetMapTag(i-1,o+1) == "Road"){roadName=map[i-1][o+1].name;}}
				if(GetMapCrossroad(i-1,o  )){rcons++;if(GetMapName(i-1,o  ) != "none" && GetMapTag(i-1,o  ) == "Road"){roadName=map[i-1][o  ].name;}}
				if(GetMapCrossroad(i-1,o-1)){rcons++;if(GetMapName(i-1,o-1) != "none" && GetMapTag(i-1,o-1) == "Road"){roadName=map[i-1][o-1].name;}}
				if(roadName == "Crossroads" || roadName == ""){roadName = randomEntry("RoadMain")}
				if(rcons >= 3){roadName = "Crossroads"}
				map[i][o] = {tag:"Road",name:roadName,units:[],hostile:false,clr:"#cccc77"};
			}else{
				map[i][o] = {tag:"Road",name:randomEntry("RoadMain"),units:[],hostile:false,clr:"#cccc77"};
			}
		}
		if(map[i][o] == 10){//SAFE
			map[i][o] = {tag:"Bridge",name:"Bridge",units:[],hostile:false,clr:"#888866"};
		}
		if(map[i][o] == 13){//Mundane*
			//map[i][o] = {tag:"Water",name:randomEntry("River"),units:[],hostile:false,clr:"#77bbdd"};
			
			var riverName = ""
			//if(trailName == ""){trailName=randomEntry("TrailMain")}
			if(Math.random()<.95){
				//LogEntry("a "+riverName)
				if(GetMapTag(i+1,o+1) == "Water"){riverName=map[i+1][o+1].name;}
				if(GetMapTag(i+1,o  ) == "Water"){riverName=map[i+1][o  ].name;}
				if(GetMapTag(i+1,o-1) == "Water"){riverName=map[i+1][o-1].name;}
				if(GetMapTag(i,o+1  ) == "Water"){riverName=map[i  ][o+1].name;}
				if(GetMapTag(i,o-1  ) == "Water"){riverName=map[i  ][o-1].name;}
				if(GetMapTag(i-1,o+1) == "Water"){riverName=map[i-1][o+1].name;}
				if(GetMapTag(i-1,o  ) == "Water"){riverName=map[i-1][o  ].name;}
				if(GetMapTag(i-1,o-1) == "Water"){riverName=map[i-1][o-1].name;}
				//LogEntry("b "+riverName)
				if(GetMapTag(i-1,o) == "Bridge" && GetMapTag(i-2,o) == "Water" ){riverName=GetMapName(i-2,o);}
				if(GetMapTag(i+1,o) == "Bridge" && GetMapTag(i+2,o) == "Water" ){riverName=GetMapName(i+2,o);}
				if(GetMapTag(i,o-1) == "Bridge" && GetMapTag(i,o-2) == "Water" ){riverName=GetMapName(i,o-2);}
				if(GetMapTag(i,o+1) == "Bridge" && GetMapTag(i,o+2) == "Water" ){riverName=GetMapName(i,o+2);}
				//LogEntry("c "+riverName)
				if(!riverName.includes("River")){riverName=randomEntry("River")}
				//LogEntry("d "+riverName)
				map[i][o] = {tag:"Water",name:riverName,units:[],hostile:false,clr:"#77bbdd"};
				
			}else{
				map[i][o] = {tag:"Water",name:randomEntry("River"),units:[],hostile:false,clr:"#77bbdd"};
				//LogEntry("Bravo")
			}
			//LogEntry(map[i][o].name)
			SpawnMobs(i,o,"RiverMundane");//will also change name of map tile
		}
		if(map[i][o] == 16){//LakeFresh
			map[i][o] = {tag:"Water",name:"Freshwater Lake",units:[],hostile:false,clr:"#77bbdd"};
			SpawnMobs(i,o,"LakeFresh");//will also change name of map tile
		}
		if(map[i][o] == 19){//SAFE
			map[i][o] = {tag:"Beach",name:"Sandy Beach",units:[],hostile:false,clr:"#ff9"};
		}
		if(map[i][o] == 22){//Cave Entrance 
			map[i][o] = {tag:"Entrance",name:"Cave Opening",altname:"Cave Opening",units:[],hostile:false,clr:"#999977"};
		}
		if(map[i][o] == 23){//Cave Entrance LIGHT
			if(Math.random()<.50){
				map[i][o] = {tag:"Entrance",name:"Cave Opening",altname:"Cave Opening",units:[],hostile:false,clr:"#999977"};
			}else{
				map[i][o] = 28;
			}
		}
		if(map[i][o] == 24){//Cave Entrance BOSS
			if(Math.random()<.25){
				map[i][o] = {tag:"Entrance",name:"Cave Opening",altname:"Cave Opening",units:[],hostile:false,clr:"#999977"};
			}else{
				map[i][o] = 28;
				//Spawn Light Boss Fight
			}
		}
		if(map[i][o] == 25){//Cave Entrance BOSS
			if(CavePath != 0){
				map[i][o] = 28;
			}else{
				map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
			}
		}
		if(map[i][o] == 26){//Cave Entrance BOSS
			if(CavePath != 1){
				map[i][o] = 28;
			}else{
				map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
			}
		}
		if(map[i][o] == 27){//Cave Entrance BOSS
			if(CavePath != 2){
				map[i][o] = 28;
			}else{
				map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
			}
		}
		if(map[i][o] == 28){//Cave LIGHT
			map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
			caveCount = 0;
			if(GetMapTagCanMake(i,o+1)   == "Cave" || GetMapTagCanMake(i,o+1)   == "Entrance"){caveCount++}
			if(GetMapTagCanMake(i,o-1)   == "Cave" || GetMapTagCanMake(i,o-1)   == "Entrance"){caveCount++}
			if(GetMapTagCanMake(i+1,o)   == "Cave" || GetMapTagCanMake(i+1,o)   == "Entrance"){caveCount++}
			if(GetMapTagCanMake(i-1,o)   == "Cave" || GetMapTagCanMake(i-1,o)   == "Entrance"){caveCount++}
			if(caveCount >= 3){//Don't Check Diagonals At First
				SpawnMobs(i,o,"Cave");//will also change name of map tile
				map[i][o].name = "Open Cavern";
				if(GetMapTagCanMake(i,o+1)   == "Cave"){GetMapObject(i,o+1).name = "Open Cavern";}
				if(GetMapTagCanMake(i,o-1)   == "Cave"){GetMapObject(i,o-1).name = "Open Cavern";}
				if(GetMapTagCanMake(i+1,o)   == "Cave"){GetMapObject(i+1,o).name = "Open Cavern";}
				if(GetMapTagCanMake(i-1,o)   == "Cave"){GetMapObject(i-1,o).name = "Open Cavern";}
			}
			if(GetMapTagCanMake(i+1,o+1) == "Cave" || GetMapTagCanMake(i+1,o+1) == "Entrance"){caveCount++}
			if(GetMapTagCanMake(i-1,o+1) == "Cave" || GetMapTagCanMake(i-1,o+1) == "Entrance"){caveCount++}
			if(GetMapTagCanMake(i+1,o-1) == "Cave" || GetMapTagCanMake(i+1,o-1) == "Entrance"){caveCount++}
			if(GetMapTagCanMake(i-1,o-1) == "Cave" || GetMapTagCanMake(i-1,o-1) == "Entrance"){caveCount++}
			if(caveCount > 1){
				SpawnMobs(i,o,"Cave");//will also change name of map tile
				//map[i][o].name = caveCount+" test"+GetMapTag(i,o);
			}else{ 
				SpawnMobs(i,o,"CaveEnd")
				map[i][o].name = choose(["Big"],["Collapsed","Blocked","Dead End"])+" Cave";
				//map[i][o].name = caveCount+" "+GetMapTag(i,o);
			}
		}
		if(map[i][o] == 29){//Cave LIGHT
			map[i][o] = {tag:"Cave",altname:"Cliff",name:"CaveDrowMain",units:[],hostile:false,clr:"#cccccc"};//rewrite later
			caveCount = 0
			if(GetMapTagCanMake(i+1,o+1) == "Cave"){caveCount++}
			if(GetMapTagCanMake(i-1,o+1) == "Cave"){caveCount++}
			if(GetMapTagCanMake(i,o+1)   == "Cave"){caveCount++}
			if(GetMapTagCanMake(i+1,o-1) == "Cave"){caveCount++}
			if(GetMapTagCanMake(i-1,o-1) == "Cave"){caveCount++}
			if(GetMapTagCanMake(i,o-1)   == "Cave"){caveCount++}
			if(GetMapTagCanMake(i+1,o)   == "Cave"){caveCount++}
			if(GetMapTagCanMake(i-1,o)   == "Cave"){caveCount++}
			if(caveCount >= 6){//5 with diag
				map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("CaveDrowMain"),units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"CaveDrowMain");//will also change name of map tile
			}else if(caveCount >= 3){//3 with diag
				map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("CaveDrowSecondary"),units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"CaveDrowSecondary");//will also change name of map tile
			}else{
				map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("CaveDrowSmall"),units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"CaveDrowSmall");//will also change name of map tile
			}
			
		}
		if(map[i][o] == 31){//NEED TO MAKE LIGHT BOSS SETUP
			map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:"Large "+randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
			SpawnMobs(i,o,"CaveEnd");//will also change name of map tile
		}
		if(map[i][o] == 32){//NEED TO MAKE LIGHT BOSS SETUP
			map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:"Huge "+randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
			SpawnMobs(i,o,"CaveEnd2");//will also change name of map tile
		}
		if(map[i][o] == 37){
			map[i][o] = {tag:"Indoors",name:"Guard Tower",units:[],hostile:true,clr:"#aaaa66"};
			SpawnMobs(i,o,"FortWolf");//will also change name of map tile
		}
		if(map[i][o] == 96){
			map[i][o] = {tag:"Canyon",name:randomEntry("Canyon"),units:[],hostile:false,clr:"#dd7"};
			SpawnMobs(i,o,"Canyon");//will also change name of map tile
		}
		if(map[i][o] == 97){//
			map[i][o] = {tag:"Water",name:"Waterfall",units:[],hostile:false,clr:"#4488aa"};
		}
		//WOLF DUNGEON----------------------------------------------------------------------------------------------------------
		if(map[i][o] == 40){
			map[i][o] = {tag:"Dungeon",name:"Door",altname:"DoorUnfinished1",units:[],hostile:false,clr:"#888888"};
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
			if(map[i-1][o].tag != "Dungeon"){map[i][o].north = true;}else{map[i][o].north = false;}
			if(map[i+1][o].tag != "Dungeon"){map[i][o].south = true;}else{map[i][o].south = false;}
			if(map[i][o-1].tag != "Dungeon"){map[i][o].west  = true;}else{map[i][o].west  = false;}
			if(map[i][o+1].tag != "Dungeon"){map[i][o].east  = true;}else{map[i][o].east  = false;}
			while(map[i][o].altname == "DoorUnfinished1"){
				     if(map[i-1][o].name == "Hall" && Math.random()<.2){map[i][o].north = true;map[i][o].altname = "DoorUnfinished2";}
				else if(map[i+1][o].name == "Hall" && Math.random()<.2){map[i][o].south = true;map[i][o].altname = "DoorUnfinished2";}
				else if(map[i][o-1].name == "Hall" && Math.random()<.2){map[i][o].west  = true;map[i][o].altname = "DoorUnfinished2";}
				else if(map[i][o+1].name == "Hall" && Math.random()<.2){map[i][o].east  = true;map[i][o].altname = "DoorUnfinished2";}
			}
			while(map[i][o].altname == "DoorUnfinished2"){
				     if(map[i-1][o].name == "Hall" && Math.random()<.2 && map[i][o].north == false){map[i-1][o].south = true;map[i][o].altname = "Door";}
				else if(map[i+1][o].name == "Hall" && Math.random()<.2 && map[i][o].south == false){map[i+1][o].north = true;map[i][o].altname = "Door";}
				else if(map[i][o-1].name == "Hall" && Math.random()<.2 && map[i][o].west  == false){map[i][o-1].east  = true;map[i][o].altname = "Door";}
				else if(map[i][o+1].name == "Hall" && Math.random()<.2 && map[i][o].east  == false){map[i][o+1].west  = true;map[i][o].altname = "Door";}
			}
			map[i][o].owner = "Wolf"
		}
		if(map[i][o] == 41){
			map[i][o] = {tag:"Dungeon",name:"Hall",altname:"Dungeon",units:[],hostile:false,clr:"#666666"};
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
			if(map[i-1][o].name == "Hall"){map[i][o].north = true;}else if(map[i][o].north == undefined){map[i][o].north = false;}
			if(map[i+1][o].name == "Hall"){map[i][o].south = true;}else if(map[i][o].south == undefined){map[i][o].south = false;}
			if(map[i][o-1].name == "Hall"){map[i][o].west  = true;}else if(map[i][o].west == undefined){map[i][o].west  = false;}
			if(map[i][o+1].name == "Hall"){map[i][o].east  = true;}else if(map[i][o].east == undefined){map[i][o].east  = false;}
			SpawnMobs(i,o,"DungeonWolf"); 
			map[i][o].owner = "Wolf"
		}
		if(map[i][o] == 42){
			map[i][o] = {tag:"Dungeon",name:"Boss",altname:"BossUnfinished",units:[],hostile:false,clr:"#666666"};//BossWolf
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
			map[i][o].north = false;
			map[i][o].south = false;
			map[i][o].west = false;
			map[i][o].east = false;
			while(map[i][o].altname == "BossUnfinished"){
				     if(map[i-1][o].name == "Hall" && Math.random()<.2){map[i][o].north = true;map[i-1][o].south = true;map[i][o].altname = "Dungeon";}
				else if(map[i+1][o].name == "Hall" && Math.random()<.2){map[i][o].south = true;map[i+1][o].north = true;map[i][o].altname = "Dungeon";}
				else if(map[i][o-1].name == "Hall" && Math.random()<.2){map[i][o].west  = true;map[i][o-1].east  = true;map[i][o].altname = "Dungeon";}
				else if(map[i][o+1].name == "Hall" && Math.random()<.2){map[i][o].east  = true;map[i][o+1].west  = true;map[i][o].altname = "Dungeon";}
			}
			SpawnMobs(i,o,"BossWolf"); 
			map[i][o].owner = "Wolf"
		}
		//------------------------------------
		//DROW DUNGEON----------------------------------------------------------------------------------------------------------
		if(map[i][o] == 43){
			map[i][o] = {tag:"Dungeon",name:"Door",altname:"DoorUnfinished1",units:[],hostile:false,clr:"#888888"};
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
			if(map[i-1][o].tag != "Dungeon"){map[i][o].north = true;}else{map[i][o].north = false;}
			if(map[i+1][o].tag != "Dungeon"){map[i][o].south = true;}else{map[i][o].south = false;}
			if(map[i][o-1].tag != "Dungeon"){map[i][o].west  = true;}else{map[i][o].west  = false;}
			if(map[i][o+1].tag != "Dungeon"){map[i][o].east  = true;}else{map[i][o].east  = false;}
			while(map[i][o].altname == "DoorUnfinished1"){
				     if(map[i-1][o].name == "Hall" && Math.random()<.2){map[i][o].north = true;map[i][o].altname = "DoorUnfinished2";}
				else if(map[i+1][o].name == "Hall" && Math.random()<.2){map[i][o].south = true;map[i][o].altname = "DoorUnfinished2";}
				else if(map[i][o-1].name == "Hall" && Math.random()<.2){map[i][o].west  = true;map[i][o].altname = "DoorUnfinished2";}
				else if(map[i][o+1].name == "Hall" && Math.random()<.2){map[i][o].east  = true;map[i][o].altname = "DoorUnfinished2";}
			}
			while(map[i][o].altname == "DoorUnfinished2"){
				     if(map[i-1][o].name == "Hall" && Math.random()<.2 && map[i][o].north == false){map[i-1][o].south = true;map[i][o].altname = "Door";}
				else if(map[i+1][o].name == "Hall" && Math.random()<.2 && map[i][o].south == false){map[i+1][o].north = true;map[i][o].altname = "Door";}
				else if(map[i][o-1].name == "Hall" && Math.random()<.2 && map[i][o].west  == false){map[i][o-1].east  = true;map[i][o].altname = "Door";}
				else if(map[i][o+1].name == "Hall" && Math.random()<.2 && map[i][o].east  == false){map[i][o+1].west  = true;map[i][o].altname = "Door";}
			}
			map[i][o].owner = "Drow"
		}
		if(map[i][o] == 44){
			map[i][o] = {tag:"Dungeon",name:"Hall",altname:"Dungeon",units:[],hostile:false,clr:"#666666"};
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
			if(map[i-1][o].name == "Hall"){map[i][o].north = true;}else if(map[i][o].north == undefined){map[i][o].north = false;}
			if(map[i+1][o].name == "Hall"){map[i][o].south = true;}else if(map[i][o].south == undefined){map[i][o].south = false;}
			if(map[i][o-1].name == "Hall"){map[i][o].west  = true;}else if(map[i][o].west == undefined){map[i][o].west  = false;}
			if(map[i][o+1].name == "Hall"){map[i][o].east  = true;}else if(map[i][o].east == undefined){map[i][o].east  = false;}
			SpawnMobs(i,o,"DungeonDrow"); 
			map[i][o].owner = "Drow"
		}
		if(map[i][o] == 45){
			map[i][o] = {tag:"Dungeon",name:"Boss",altname:"BossUnfinished",units:[],hostile:false,clr:"#666666"};//BossWolf
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
			map[i][o].north = false;
			map[i][o].south = false;
			map[i][o].west = false;
			map[i][o].east = false;
			while(map[i][o].altname == "BossUnfinished"){
				     if(map[i-1][o].name == "Hall" && Math.random()<.2){map[i][o].north = true;map[i-1][o].south = true;map[i][o].altname = "Dungeon";}
				else if(map[i+1][o].name == "Hall" && Math.random()<.2){map[i][o].south = true;map[i+1][o].north = true;map[i][o].altname = "Dungeon";}
				else if(map[i][o-1].name == "Hall" && Math.random()<.2){map[i][o].west  = true;map[i][o-1].east  = true;map[i][o].altname = "Dungeon";}
				else if(map[i][o+1].name == "Hall" && Math.random()<.2){map[i][o].east  = true;map[i][o+1].west  = true;map[i][o].altname = "Dungeon";}
			}
			SpawnMobs(i,o,"BossDrow");  
			map[i][o].owner = "Drow"
		}
		//------------------------------------
		//HARPY DUNGEON----------------------------------------------------------------------------------------------------------
		if(map[i][o] == 46){
			map[i][o] = {tag:"Dungeon",name:"Door",altname:"DoorUnfinished1",units:[],hostile:false,clr:"#888888"};
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
			if(map[i-1][o].tag != "Dungeon"){map[i][o].north = true;}else{map[i][o].north = false;}
			if(map[i+1][o].tag != "Dungeon"){map[i][o].south = true;}else{map[i][o].south = false;}
			if(map[i][o-1].tag != "Dungeon"){map[i][o].west  = true;}else{map[i][o].west  = false;}
			if(map[i][o+1].tag != "Dungeon"){map[i][o].east  = true;}else{map[i][o].east  = false;}
			while(map[i][o].altname == "DoorUnfinished1"){
				     if(map[i-1][o].name == "Hall" && Math.random()<.2){map[i][o].north = true;map[i][o].altname = "DoorUnfinished2";}
				else if(map[i+1][o].name == "Hall" && Math.random()<.2){map[i][o].south = true;map[i][o].altname = "DoorUnfinished2";}
				else if(map[i][o-1].name == "Hall" && Math.random()<.2){map[i][o].west  = true;map[i][o].altname = "DoorUnfinished2";}
				else if(map[i][o+1].name == "Hall" && Math.random()<.2){map[i][o].east  = true;map[i][o].altname = "DoorUnfinished2";}
			}
			while(map[i][o].altname == "DoorUnfinished2"){
				     if(map[i-1][o].name == "Hall" && Math.random()<.2 && map[i][o].north == false){map[i-1][o].south = true;map[i][o].altname = "Door";}
				else if(map[i+1][o].name == "Hall" && Math.random()<.2 && map[i][o].south == false){map[i+1][o].north = true;map[i][o].altname = "Door";}
				else if(map[i][o-1].name == "Hall" && Math.random()<.2 && map[i][o].west  == false){map[i][o-1].east  = true;map[i][o].altname = "Door";}
				else if(map[i][o+1].name == "Hall" && Math.random()<.2 && map[i][o].east  == false){map[i][o+1].west  = true;map[i][o].altname = "Door";}
			}
			map[i][o].owner = "Harpy"
		}
		if(map[i][o] == 47){
			map[i][o] = {tag:"Dungeon",name:"Hall",altname:"Dungeon",units:[],hostile:false,clr:"#666666"};
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
			if(map[i-1][o].name == "Hall"){map[i][o].north = true;}else if(map[i][o].north == undefined){map[i][o].north = false;}
			if(map[i+1][o].name == "Hall"){map[i][o].south = true;}else if(map[i][o].south == undefined){map[i][o].south = false;}
			if(map[i][o-1].name == "Hall"){map[i][o].west  = true;}else if(map[i][o].west == undefined){map[i][o].west  = false;}
			if(map[i][o+1].name == "Hall"){map[i][o].east  = true;}else if(map[i][o].east == undefined){map[i][o].east  = false;}
			SpawnMobs(i,o,"DungeonHarpy"); 
			map[i][o].owner = "Harpy"
		}
		if(map[i][o] == 48){
			map[i][o] = {tag:"Dungeon",name:"Boss",altname:"BossUnfinished",units:[],hostile:false,clr:"#666666"};//BossWolf
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
			map[i][o].north = false;
			map[i][o].south = false;
			map[i][o].west = false;
			map[i][o].east = false;
			while(map[i][o].altname == "BossUnfinished"){
				     if(map[i-1][o].name == "Hall" && Math.random()<.2){map[i][o].north = true;map[i-1][o].south = true;map[i][o].altname = "Dungeon";}
				else if(map[i+1][o].name == "Hall" && Math.random()<.2){map[i][o].south = true;map[i+1][o].north = true;map[i][o].altname = "Dungeon";}
				else if(map[i][o-1].name == "Hall" && Math.random()<.2){map[i][o].west  = true;map[i][o-1].east  = true;map[i][o].altname = "Dungeon";}
				else if(map[i][o+1].name == "Hall" && Math.random()<.2){map[i][o].east  = true;map[i][o+1].west  = true;map[i][o].altname = "Dungeon";}
			}
			SpawnMobs(i,o,"BossHarpy"); 
			map[i][o].owner = "Harpy"
		}
		//------------------------------------
		map[i][o].travel = -1
}
//WALKMAIN--------------------------------------------------------------------
//TODO:Walk
function Walk(i,o){
	party.lastAction = [-1,-1,-1]
	//LogEntry("-------------------------------------------------------------------------------------------------------")
	//LogEntry("OLD POSITION:"+party.y+"/"+party.x)
	if(map[party.y][party.x].tag == "Dungeon"){
		//LogEntry("  [OLD] north:"+map[party.y][party.x].north+"  south:"+map[party.y][party.x].south+"  west:"+map[party.y][party.x].west+"  east:"+map[party.y][party.x].east);
	}
	if(GetMap(party.y+i,party.x+o).tag == "Dungeon"){
		//LogEntry("  [NEW] north:"+map[party.y+i][party.x+o].north+"  south:"+map[party.y+i][party.x+o].south+"  west:"+map[party.y+i][party.x+o].west+"  east:"+map[party.y+i][party.x+o].east);
	}
	if(map[party.y][party.x].tag == "Dungeon" && (GetMapTile(party.y+i,party.x+o) == "....")){
		LogEntry("It's solid stone, I can't get through.");
		return;
	}
	if(map[party.y][party.x].hostile){//OR OTHER REASON TO BLOCK WALKING
		return
	}
	death = 0;
	pick1 = -1
	pick2 = -1
	action = -1
	
	
	//Change I/O if past map border
	if(party.y+i < 0){i += map.length;}
	if(party.y+i >= map.length){i -= map.length;}
	if(party.x+o < 0){o += map.length;}
	if(party.x+o >= map[0].length){o -= map.length;}

	
	
	party.x += o;
	party.y += i;
	GetMapTile(party.y,party.x)
	if(map[party.y][party.x].tag == "Trail"){//EVENTS CAN HAPPEN OFF OF TRAILS??
		if(EventCountdown <= 0 && Math.random()<.1){
			//MAKE AN EVENT
			//LogEntry("[An event could have fired now!]")
			EventCountdown = (Math.round(Math.random()*100+50))
		}
	}
	if((map[party.y][party.x].tag == "Canyon" && map[party.y-i][party.x-o].tag  == "Canyon" && map[party.y][party.x].units.length > 0 && map[party.y-i][party.x-o].units.length == 0) && Math.random()<.5){
		map[party.y-i][party.x-o].units = [...map[party.y][party.x].units]
		map[party.y][party.x].units = []
		
		map[party.y-i][party.x-o].hostile = true;
		map[party.y][party.x].hostile = false;
		
		//LogEntry("DEBUG PREV:"+map[party.y-i][party.x-o].units)
		//LogEntry("DEBUG HERE:"+map[party.y][party.x].units)
	}
	if((map[party.y-i][party.x-o].tag == "Dungeon") && map[party.y][party.x].tag == "Dungeon" && map[party.y][party.x].name == "Door"){
		map[party.y][party.x].north = false;map[party.y][party.x].south = false;map[party.y][party.x].east = false;map[party.y][party.x].west = false;
		if((map[party.y-1][party.x].tag == "Dungeon" && map[party.y-1][party.x].south)||map[party.y-1][party.x].tag != "Dungeon"){	map[party.y][party.x].north = true	}
		if((map[party.y+1][party.x].tag == "Dungeon" && map[party.y+1][party.x].north)||map[party.y+1][party.x].tag != "Dungeon"){	map[party.y][party.x].south = true	}
		if((map[party.y][party.x-1].tag == "Dungeon" && map[party.y][party.x-1].east )||map[party.y][party.x-1].tag != "Dungeon"){	map[party.y][party.x].west  = true	}
		if((map[party.y][party.x+1].tag == "Dungeon" && map[party.y][party.x+1].west )||map[party.y][party.x+1].tag != "Dungeon"){	map[party.y][party.x].east  = true	}
	}
	if((i != 0 || o != 0) && map[party.y][party.x].tag == "Water" && unit(0).CPle < unit(0).MPle){ unit(0).CPle++;}
	Status()//NOT SURE THIS CAN BE HERE
	
	if(map[party.y][party.x].tag == "Cliff"){
		party.x -= o;
		party.y -= i;
		if(map[party.y][party.x].tag != "Entrance" && map[party.y][party.x].tag != "Cave"){
			LogEntry(randomEntry("Cliffhit"));
		}else{
			LogEntry("There doesn't seem to be anything this way. I hope I'm not getting lost in here...");
		}
	}else if((map[party.y-i][party.x-o].tag != "Dungeon") && map[party.y][party.x].tag == "Dungeon" && map[party.y][party.x].name != "Door"){
		
		party.x -= o;
		party.y -= i;
		LogEntry("The castle wall seems impenetrable, I should look for a door...");
	}else if((map[party.y-i][party.x-o].tag != "Cave" && map[party.y-i][party.x-o].tag != "Entrance" && map[party.y-i][party.x-o].altname != "Door") && map[party.y][party.x].tag == "Cave"){
		party.x -= o;
		party.y -= i;
		LogEntry(randomEntry("Cliffhit"));
	}else if(map[party.y-i][party.x-o].tag == "Cave" && (map[party.y][party.x].tag != "Cave" && map[party.y][party.x].tag != "Entrance" && map[party.y][party.x].altname != "Door")){//this will glitch the game someday with map edges
		party.x -= o;
		party.y -= i;
		LogEntry("There doesn't seem to be anything this way. I hope I'm not getting lost in here...");
	}else if(map[party.y][party.x].hostile && (map[party.y][party.x].units.length > 1 || party.units.length < 5 || map[party.y][party.x].units[0].Tags[1] != "Small")){
		lastMove = [i,o]
		

		if(map[party.y][party.x].travel == -1){
			map[party.y][party.x].travel = travel
		}
		LogEntry(randomTravel(1));travel++
		//unclickable buttons     style="border-radius: 0px 0px 5px 0px;"
		//document.getElementById("map_top1").style.borderRadius  = "5px 0px 0px 0px";
		//document.getElementById("map_top5").style.borderRadius  = "0px 5px 0px 0px";
		//document.getElementById("map_bottom1").style.borderRadius  = "0px 0px 0px 5px";
		//document.getElementById("map_bottom5").style.borderRadius  = "0px 0px 5px 0px";
		
		
		
		document.getElementById("map_top1").style.backgroundColor  = GetMapTileColor(party.y-2,party.x-2);
		document.getElementById("map_top2").style.backgroundColor  = GetMapTileColor(party.y-2,party.x-1);
		document.getElementById("map_top3").style.backgroundColor  = GetMapTileColor(party.y-2,party.x);
		document.getElementById("map_top4").style.backgroundColor  = GetMapTileColor(party.y-2,party.x+1);
		document.getElementById("map_top5").style.backgroundColor  = GetMapTileColor(party.y-2,party.x+2);
		
		document.getElementById("map_left1").style.backgroundColor  = GetMapTileColor(party.y-1,party.x-2);
		document.getElementById("map_left2").style.backgroundColor  = GetMapTileColor(party.y,party.x-2);
		document.getElementById("map_left3").style.backgroundColor  = GetMapTileColor(party.y+1,party.x-2);
		
		document.getElementById("map_right1").style.backgroundColor  = GetMapTileColor(party.y-1,party.x+2);
		document.getElementById("map_right2").style.backgroundColor  = GetMapTileColor(party.y,party.x+2);
		document.getElementById("map_right3").style.backgroundColor  = GetMapTileColor(party.y+1,party.x+2);
		
		document.getElementById("map_bottom1").style.backgroundColor  = GetMapTileColor(party.y+2,party.x-2);
		document.getElementById("map_bottom2").style.backgroundColor  = GetMapTileColor(party.y+2,party.x-1);
		document.getElementById("map_bottom3").style.backgroundColor  = GetMapTileColor(party.y+2,party.x);
		document.getElementById("map_bottom4").style.backgroundColor  = GetMapTileColor(party.y+2,party.x+1);
		document.getElementById("map_bottom5").style.backgroundColor  = GetMapTileColor(party.y+2,party.x+2);
		
		document.getElementById("map_northwest").innerHTML = "<span class=\"GreyText\">"+GetMapTile(party.y-1,party.x-1)+"</span>"
		document.getElementById("map_northwest").style.backgroundColor = GetMapTileColor(party.y-1,party.x-1)
		//document.getElementById("map_northwest").style.color  = "#666666";
		document.getElementById("map_northwest").style.cursor  = "default";//pointer
		
		document.getElementById("map_north").innerHTML = "<span class=\"GreyText\">"+GetMapTile(party.y-1,party.x)+"</span>"
		document.getElementById("map_north").style.backgroundColor = GetMapTileColor(party.y-1,party.x)
		//document.getElementById("map_north").style.color  = "#666666";
		document.getElementById("map_north").style.cursor  = "default";//pointer
		
		document.getElementById("map_northeast").innerHTML = "<span class=\"GreyText\">"+GetMapTile(party.y-1,party.x+1)+"</span>"
		document.getElementById("map_northeast").style.backgroundColor = GetMapTileColor(party.y-1,party.x+1)
		//document.getElementById("map_northeast").style.color  = "#666666";
		document.getElementById("map_northeast").style.cursor  = "default";//pointer
		
		document.getElementById("map_west").innerHTML = "<span class=\"GreyText\">"+GetMapTile(party.y,party.x-1)+"</span>"
		document.getElementById("map_west").style.backgroundColor = GetMapTileColor(party.y,party.x-1)
		//document.getElementById("map_west").style.color  = "#666666";
		document.getElementById("map_west").style.cursor  = "default";//pointer
		
		document.getElementById("map_center").innerHTML = "<span class=\"BoldText\">"+GetMapTile(party.y,party.x)+"</span>";
		document.getElementById("map_center").style.backgroundColor = GetMapTileColor(party.y,party.x)
		//document.getElementById("map_center").style.color  = txtclr;
		document.getElementById("map_center").style.cursor  = "default";//pointer
		
		document.getElementById("map_east").innerHTML = "<span class=\"GreyText\">"+GetMapTile(party.y,party.x+1)+"</span>"
		document.getElementById("map_east").style.backgroundColor = GetMapTileColor(party.y,party.x+1)
		//document.getElementById("map_east").style.color  = "#666666";
		document.getElementById("map_east").style.cursor  = "default";//pointer
		
		document.getElementById("map_southwest").innerHTML = "<span class=\"GreyText\">"+GetMapTile(party.y+1,party.x-1)+"</span>"
		document.getElementById("map_southwest").style.backgroundColor = GetMapTileColor(party.y+1,party.x-1)
		//document.getElementById("map_southwest").style.color  = "#666666";
		document.getElementById("map_southwest").style.cursor  = "default";//pointer
		
		document.getElementById("map_south").innerHTML = "<span class=\"GreyText\">"+GetMapTile(party.y+1,party.x)+"</span>"
		document.getElementById("map_south").style.backgroundColor = GetMapTileColor(party.y+1,party.x)
		//document.getElementById("map_south").style.color  = "#666666";
		document.getElementById("map_south").style.cursor  = "default";//pointer
		
		document.getElementById("map_southeast").innerHTML = "<span class=\"GreyText\">"+GetMapTile(party.y+1,party.x+1)+"</span>"
		document.getElementById("map_southeast").style.backgroundColor = GetMapTileColor(party.y+1,party.x+1)
		//document.getElementById("map_southeast").style.color  = "#666666";
		document.getElementById("map_southeast").style.cursor  = "default";//not-allowed
		

		
	}else{
		
		if(i != 0 || o != 0){
			lastMove = [i,o]
			
			if(map[party.y][party.x].hostile){	
				LogEntry(randomTravel(4));travel++
				Removal(100)
				map[party.y][party.x].hostile = false;
			}else if(map[party.y][party.x].units.length > 0){
				if(map[party.y][party.x].travel == -1){
					LogEntry(randomTravel(2));travel++
				}else{
					LogEntry(randomTravel(5));travel++
				}
			}else{
				LogEntry(randomTravel(3));travel++
			}
			
		}
		if(map[party.y][party.x].travel == -1 || map[party.y][party.x].travel == undefined){
		   map[party.y][party.x].travel = travel
		}
		
		//clickable buttons
		
		//document.getElementById("map_top1").style.borderRadius  = "5px 0px 0px 0px";
		//document.getElementById("map_top5").style.borderRadius  = "0px 5px 0px 0px";
		//document.getElementById("map_bottom1").style.borderRadius  = "0px 0px 0px 5px";
		//document.getElementById("map_bottom5").style.borderRadius  = "0px 0px 5px 0px";
		
		
		document.getElementById("map_top1").style.backgroundColor  = GetMapTileColor(party.y-2,party.x-2);
		document.getElementById("map_top2").style.backgroundColor  = GetMapTileColor(party.y-2,party.x-1);
		document.getElementById("map_top3").style.backgroundColor  = GetMapTileColor(party.y-2,party.x);
		document.getElementById("map_top4").style.backgroundColor  = GetMapTileColor(party.y-2,party.x+1);
		document.getElementById("map_top5").style.backgroundColor  = GetMapTileColor(party.y-2,party.x+2);
		
		document.getElementById("map_left1").style.backgroundColor  = GetMapTileColor(party.y-1,party.x-2);
		document.getElementById("map_left2").style.backgroundColor  = GetMapTileColor(party.y,party.x-2);
		document.getElementById("map_left3").style.backgroundColor  = GetMapTileColor(party.y+1,party.x-2);
		
		document.getElementById("map_right1").style.backgroundColor  = GetMapTileColor(party.y-1,party.x+2);
		document.getElementById("map_right2").style.backgroundColor  = GetMapTileColor(party.y,party.x+2);
		document.getElementById("map_right3").style.backgroundColor  = GetMapTileColor(party.y+1,party.x+2);
		
		document.getElementById("map_bottom1").style.backgroundColor  = GetMapTileColor(party.y+2,party.x-2);
		document.getElementById("map_bottom2").style.backgroundColor  = GetMapTileColor(party.y+2,party.x-1);
		document.getElementById("map_bottom3").style.backgroundColor  = GetMapTileColor(party.y+2,party.x);
		document.getElementById("map_bottom4").style.backgroundColor  = GetMapTileColor(party.y+2,party.x+1);
		document.getElementById("map_bottom5").style.backgroundColor  = GetMapTileColor(party.y+2,party.x+2);
		
		document.getElementById("map_northwest").innerHTML = GetMapTile(party.y-1,party.x-1)
		document.getElementById("map_northwest").style.backgroundColor = GetMapTileColor(party.y-1,party.x-1)
		//document.getElementById("map_northwest").style.color  = txtclr
		document.getElementById("map_northwest").style.cursor  = "pointer";//pointer
		
		document.getElementById("map_north").innerHTML = GetMapTile(party.y-1,party.x)
		document.getElementById("map_north").style.backgroundColor = GetMapTileColor(party.y-1,party.x)
		//document.getElementById("map_north").style.color  = txtclr
		document.getElementById("map_north").style.cursor  = "pointer";//pointer
		
		document.getElementById("map_northeast").innerHTML = GetMapTile(party.y-1,party.x+1)
		document.getElementById("map_northeast").style.backgroundColor = GetMapTileColor(party.y-1,party.x+1)
		//document.getElementById("map_northeast").style.color  = txtclr
		document.getElementById("map_northeast").style.cursor  = "pointer";//pointer
		
		document.getElementById("map_west").innerHTML = GetMapTile(party.y,party.x-1)
		document.getElementById("map_west").style.backgroundColor = GetMapTileColor(party.y,party.x-1)
		//document.getElementById("map_west").style.color  = txtclr
		document.getElementById("map_west").style.cursor  = "pointer";//pointer
		
		document.getElementById("map_center").innerHTML = "<span class=\"BoldText\">"+GetMapTile(party.y,party.x)+"</span>";
		document.getElementById("map_center").style.backgroundColor = GetMapTileColor(party.y,party.x)
		//document.getElementById("map_center").style.color  = txtclr
		document.getElementById("map_center").style.cursor  = "default";//pointer
		
		document.getElementById("map_east").innerHTML = GetMapTile(party.y,party.x+1)
		document.getElementById("map_east").style.backgroundColor = GetMapTileColor(party.y,party.x+1)
		//document.getElementById("map_east").style.color  = txtclr
		document.getElementById("map_east").style.cursor  = "pointer";//pointer
		
		document.getElementById("map_southwest").innerHTML = GetMapTile(party.y+1,party.x-1)
		document.getElementById("map_southwest").style.backgroundColor = GetMapTileColor(party.y+1,party.x-1)
		//document.getElementById("map_southwest").style.color  = txtclr
		document.getElementById("map_southwest").style.cursor  = "pointer";//pointer
		
		document.getElementById("map_south").innerHTML = GetMapTile(party.y+1,party.x)
		document.getElementById("map_south").style.backgroundColor = GetMapTileColor(party.y+1,party.x)
		//document.getElementById("map_south").style.color  = txtclr
		document.getElementById("map_south").style.cursor  = "pointer";//pointer
		
		document.getElementById("map_southeast").innerHTML = GetMapTile(party.y+1,party.x+1)
		document.getElementById("map_southeast").style.backgroundColor = GetMapTileColor(party.y+1,party.x+1)
		//document.getElementById("map_southeast").style.color  = txtclr
		document.getElementById("map_southeast").style.cursor  = "pointer";//not-allowed
		
	}
	
	Main()
	//<button onclick="myFunction()">Click me</button>
}
//TODO:Status
function Status(){
	tempInits = []
	prevInit = -1;
	currInit = -1;
	var e = 0;
	var a = 0;
	var personality = 0;
	while(e < party.units.length){
		if(e > 0 && map[party.y][party.x].units.length == 0){party.units[e].CPle = 0}
		party.units[e].asleep = false;
		party.units[e].fled = false;
		party.units[e].flying = false;
		party.units[e].antiflying = false;
		party.units[e].swimming = false;
		party.units[e].antiswimming = false;
		party.units[e].cantwalk = false;
		party.units[e].entangler = false;
		party.units[e].belly = 0;
		party.units[e].clumsy = false;
		if(party.units.length > 7){
			party.units[e].Init = (e*100) + (AR(party.units[e].Flee/party.units.length)*1000)
		}else if(party.units.length > 5){
			party.units[e].Init = (e*100) + (AR(party.units[e].Flee/2)*1000)
		}else if(party.units.length > 4){
			party.units[e].Init = (e*100) + (AR(party.units[e].Flee/1.5)*1000)
		}else{
			party.units[e].Init = (e*100) + (AR(party.units[e].Flee)*1000)
		}
		tempInits.push(party.units[e].Init)
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
			
			if( party.units[e].Tags[a] == "Passive"){party.units[e].Cond.push(party.units[e].Tags[a])}
			if( party.units[e].Tags[a] == "Flying" && map[party.y][party.x].tag != "Indoors"){party.units[e].flying = true;party.units[e].antiflying = true;party.units[e].Cond.push("Flying")}
			if( party.units[e].Tags[a] == "AntiFlying"){party.units[e].antiflying = true;}
			if( party.units[e].Tags[a] == "Swimming" && map[party.y][party.x].tag == "Water"){party.units[e].swimming = true;party.units[e].antiswimming = true;party.units[e].Cond.push("Swimming")}
			if( party.units[e].Tags[a] == "Antiswimming"){party.units[e].antiswimming = true;}
			a++
		}
		if(party.units[e].appetite == undefined){
			party.units[e].appetite = 0;
		}		
		a = 0;
		while(a < party.units[e].Cond.length){
			if(party.units[e].Cond[a] == "Asleep" || party.units[e].Cond[a] == "Fled" || party.units[e].Cond[a] == "Watching"){
				party.units[e].Cond.splice(a,1)
			}else{
			a++
			}
		}	
		if(e > 0 && map[party.y][party.x].name == "Boss" && map[party.y][party.x].hostile){
			party.units[e].fled = true;
			party.units[e].Cond[party.units[e].Cond.length] = "Watching";
		}
		e++;
	}
	
	e = 0;
	while(e < map[party.y][party.x].units.length){
		//if(map[party.y][party.x].hostile && unit(e+100).CPle > unit(e+100).MPle/2){unit(e+100).CPle = unit(e+100).MPle/2};
		map[party.y][party.x].units[e].asleep = false;
		map[party.y][party.x].units[e].fled = false;
		map[party.y][party.x].units[e].flying = false;
		map[party.y][party.x].units[e].antiflying = false;
		map[party.y][party.x].units[e].swimming = false;
		map[party.y][party.x].units[e].antiswimming = false;
		map[party.y][party.x].units[e].cantwalk = false;
		map[party.y][party.x].units[e].entangler = false;
		map[party.y][party.x].units[e].passive = false;
		map[party.y][party.x].units[e].belly = 0;
		map[party.y][party.x].units[e].clumsy = false;
		map[party.y][party.x].units[e].Init = 1+(e*100)+(AR(map[party.y][party.x].units[e].Flee)*1000)
		tempInits.push(map[party.y][party.x].units[e].Init)
		if(currInit < unit(e+100).Init){currInit = unit(e+100).Init}
		map[party.y][party.x].units[e].Cond = [];
		a = 0;
		
		
		map[party.y][party.x].units[e].Clothing = map[party.y][party.x].units[e].Clothing || "None"; 
		if(map[party.y][party.x].units[e].Name.includes("Queen")){
			map[party.y][party.x].units[e].Positive = false
			map[party.y][party.x].units[e].Negative = false
			map[party.y][party.x].units[e].Funny = false
			map[party.y][party.x].units[e].Slutty = false
			map[party.y][party.x].units[e].Hungry = false
			map[party.y][party.x].units[e].Vanilla = false
			map[party.y][party.x].units[e].willing = false
		}
		if(map[party.y][party.x].units[e].willing == undefined){
			personality = Math.random()*100
			map[party.y][party.x].units[e].Positive = false
			map[party.y][party.x].units[e].Negative = false
			map[party.y][party.x].units[e].Funny = false
			map[party.y][party.x].units[e].Slutty = false
			map[party.y][party.x].units[e].Hungry = false
			map[party.y][party.x].units[e].Vanilla = false
			map[party.y][party.x].units[e].willing = (Math.random()<.5);
			if(map[party.y][party.x].units.length == 1){
				if(personality > 85  && FindPersonality("Slutty") == null){ 
					map[party.y][party.x].units[e].Slutty = true
					map[party.y][party.x].units[e].Fuck += Math.round(Math.random()*5)
					if(randomEntry("Slutty"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Slutty"+map[party.y][party.x].units[e].Tags[0])
					} 
				}else if(personality > 70  && FindPersonality("Hungry") == null){ 
					map[party.y][party.x].units[e].Hungry = true
					map[party.y][party.x].units[e].Feast += Math.round(Math.random()*5)
					if(randomEntry("Hungry"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Hungry"+map[party.y][party.x].units[e].Tags[0]) 
					}
				}else if(personality > 55  && FindPersonality("Funny") == null){ 
					map[party.y][party.x].units[e].Funny = true
					map[party.y][party.x].units[e].Flirt += Math.round(Math.random()*5)
					if(randomEntry("Funny"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Funny"+map[party.y][party.x].units[e].Tags[0])
					}
				}else if(personality > 40  && FindPersonality("Negative") == null){ 
					map[party.y][party.x].units[e].Negative = true
					map[party.y][party.x].units[e].Flee += Math.round(Math.random()*5)
					if(randomEntry("Negative"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Negative"+map[party.y][party.x].units[e].Tags[0])
						//map[party.y][party.x].units[e].MPle += 5;
					}
				}else if(personality > 35  && FindPersonality("Positive") == null){ 
					map[party.y][party.x].units[e].Positive = true
					map[party.y][party.x].units[e].Figh += Math.round(Math.random()*5)
					if(randomEntry("Positive"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Positive"+map[party.y][party.x].units[e].Tags[0])
						//map[party.y][party.x].units[e].MPle += 5;
					}
				}else{
					map[party.y][party.x].units[e].Vanilla = true
				}
			}
		}
		if(map[party.y][party.x].units[e].appetite == undefined){
			if(map[party.y][party.x].units[e].Tags[0] == "Harpygirl"){
				map[party.y][party.x].units[e].arms = false;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Batgirl"){
				map[party.y][party.x].units[e].appetite = 12;
				map[party.y][party.x].units[e].arms = false;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Bunnygirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = true;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Froggirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = true;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Catgirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = true;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Foxgirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = true;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Wolfgirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = true;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Mousegirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = false;
				map[party.y][party.x].units[e].legs = false;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Slimegirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = false;
				map[party.y][party.x].units[e].legs = false;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Deergirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = true;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Drowgirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = true;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Tags[0] == "Goblingirl"){
				map[party.y][party.x].units[e].appetite = 0;
				map[party.y][party.x].units[e].arms = true;
				map[party.y][party.x].units[e].legs = true;
			}
			if(map[party.y][party.x].units[e].Name == "Wolf Queen"){
				map[party.y][party.x].units[e].appetite = 4;
				map[party.y][party.x].units[e].bust = 1;
				map[party.y][party.x].units[e].butt = 1;
				map[party.y][party.x].units[e].Positive = false
				map[party.y][party.x].units[e].Negative = false
				map[party.y][party.x].units[e].Funny = false
				map[party.y][party.x].units[e].Slutty = false
				map[party.y][party.x].units[e].Hungry = false
				map[party.y][party.x].units[e].Vanilla = false//?
			}
			if(map[party.y][party.x].units[e].Name == "Drow Queen"){
				map[party.y][party.x].units[e].appetite = 4;
				map[party.y][party.x].units[e].bust = 1;
				map[party.y][party.x].units[e].butt = 1;
				map[party.y][party.x].units[e].Positive = false
				map[party.y][party.x].units[e].Negative = false
				map[party.y][party.x].units[e].Funny = false
				map[party.y][party.x].units[e].Slutty = false
				map[party.y][party.x].units[e].Hungry = false
				map[party.y][party.x].units[e].Vanilla = false//?
			}
			if(map[party.y][party.x].units[e].Name == "Harpy Queen"){
				map[party.y][party.x].units[e].appetite = 4;
				map[party.y][party.x].units[e].bust = 1;
				map[party.y][party.x].units[e].butt = 1;
				map[party.y][party.x].units[e].Positive = false
				map[party.y][party.x].units[e].Negative = false
				map[party.y][party.x].units[e].Funny = false
				map[party.y][party.x].units[e].Slutty = false
				map[party.y][party.x].units[e].Hungry = false
				map[party.y][party.x].units[e].Vanilla = false//?
			}
		}
		
		if(map[party.y][party.x].units[e].travel == undefined){
			map[party.y][party.x].units[e].travel = travel
			map[party.y][party.x].units[e].bust = 0//-1:flat _ 0:normal _ 1:perky _ 2:Large
			map[party.y][party.x].units[e].butt = 0//-1:slim _ 0:normal _ 1:toned _ 2:heavy
			if(map[party.y][party.x].units[e].Name.includes("Flat-Chested")){
				map[party.y][party.x].units[e].bust = -1
				if(Math.random()<.5){
					map[party.y][party.x].units[e].butt = -1
				}else{
					map[party.y][party.x].units[e].butt = 1
				}
			}
			/*
				

		else if(Entry == "GoblinDesc"){Entrys = ["Pudgy Goblingirl","Plump Goblingirl","Fat Goblingirl","Chubby Goblingirl","Unappealing Goblingirl","Smelly Goblingirl","Dirty Goblingirl","Wart-Covered Goblingirl","Slim Goblingirl","Slender Goblingirl","Petite Goblingirl","Short Goblingirl","Fit Goblingirl","Lithe Goblingirl","Lean Goblingirl","Flat-Chested Goblingirl","Busty Goblingirl","Stacked Goblingirl","Perky Goblingirl","Muscular Goblingirl","Curvy Goblingirl","Ugly Goblingirl","Toned Goblingirl"]}
		
			//*/
			if(map[party.y][party.x].units[e].Name.includes("Short") || map[party.y][party.x].units[e].Name.includes("Tall")){
				map[party.y][party.x].units[e].bust = Number(choose([-1,0,1]))
				map[party.y][party.x].units[e].butt = Number(choose([-1,0]))
			}
			if(map[party.y][party.x].units[e].Name.includes("Lithe") || map[party.y][party.x].units[e].Name.includes("Petite")){
				map[party.y][party.x].units[e].bust = -1
				map[party.y][party.x].units[e].butt = -1
			}
			if(map[party.y][party.x].units[e].Name.includes("Voluptuous") || map[party.y][party.x].units[e].Name.includes("Curvy") || map[party.y][party.x].units[e].Name.includes("Busty") || map[party.y][party.x].units[e].Name.includes("Perky")){
				map[party.y][party.x].units[e].bust = 1
				
			}
			if(map[party.y][party.x].units[e].Name.includes("Handsome") || map[party.y][party.x].units[e].Name.includes("Fit") || map[party.y][party.x].units[e].Name.includes("Muscular") || map[party.y][party.x].units[e].Name.includes("Toned") || map[party.y][party.x].units[e].Name.includes("Muscular")){
				map[party.y][party.x].units[e].bust = Number(choose([-1,0,1]))
				map[party.y][party.x].units[e].butt = 1
			}
			if(map[party.y][party.x].units[e].Name.includes("Stacked")){
				map[party.y][party.x].units[e].bust = 2
			}
			if(map[party.y][party.x].units[e].Name.includes("Fat") || map[party.y][party.x].units[e].Name.includes("Plump") || map[party.y][party.x].units[e].Name.includes("Curvy") || map[party.y][party.x].units[e].Name.includes("Gross") || map[party.y][party.x].units[e].Name.includes("Plump") || map[party.y][party.x].units[e].Name.includes("Fat-Bottomed") || map[party.y][party.x].units[e].Name.includes("Thick") || map[party.y][party.x].units[e].Name.includes("Chubby") || map[party.y][party.x].units[e].Name.includes("Voluptuous") || map[party.y][party.x].units[e].Name.includes("Fat") || map[party.y][party.x].units[e].Name.includes("Pudgy")){
				map[party.y][party.x].units[e].butt = 2
				if(Math.random()<.5){
					map[party.y][party.x].units[e].bust = 2
				}
			}
			if(map[party.y][party.x].units[e].Name.includes("Slim") || map[party.y][party.x].units[e].Name.includes("Slender") || map[party.y][party.x].units[e].Name.includes("Lean")){//Lithe Drowgirl","Lean
				map[party.y][party.x].units[e].bust = Number(choose([-1,1]))
				map[party.y][party.x].units[e].butt = Number(choose([-1,1]))
			}
		}
		while(a < map[party.y][party.x].units[e].Tags.length){
			if( map[party.y][party.x].units[e].Tags[a] == "Passive" && !map[party.y][party.x].hostile){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].passive = true;}
			if( map[party.y][party.x].units[e].Tags[a] == "Tiny"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 1}
			if( map[party.y][party.x].units[e].Tags[a] == "Small"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 2}
			if( map[party.y][party.x].units[e].Tags[a] == "Medium"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 4}
			if( map[party.y][party.x].units[e].Tags[a] == "Big"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 16}
			if( map[party.y][party.x].units[e].Tags[a] == "Huge"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 64}
			if( map[party.y][party.x].units[e].Tags[a] == "Massive"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);map[party.y][party.x].units[e].Size = 256}
			//map[party.y][party.x].units[e].appetite = (map[party.y][party.x].units[e].Size*2)-1;
			if( map[party.y][party.x].units[e].Tags[a] == "Flying" && map[party.y][party.x].tag != "Indoors"){map[party.y][party.x].units[e].flying = true;map[party.y][party.x].units[e].antiflying = true;map[party.y][party.x].units[e].Cond.push("Flying")}
			if( map[party.y][party.x].units[e].Tags[a] == "AntiFlying"){map[party.y][party.x].units[e].antiflying = true;}
			if( map[party.y][party.x].units[e].Tags[a] == "Swimming" && map[party.y][party.x].tag == "Water"){map[party.y][party.x].units[e].swimming = true;map[party.y][party.x].units[e].antiswimming = true;map[party.y][party.x].units[e].Cond.push("Swimming")}
			if( map[party.y][party.x].units[e].Tags[a] == "Antiswimming"){map[party.y][party.x].units[e].antiswimming = true;}
			if( map[party.y][party.x].units[e].Tags[a] == "Royal"){map[party.y][party.x].units[e].Cond.push(map[party.y][party.x].units[e].Tags[a]);}
			a++
		}
		
		a = 0;
		while(a < map[party.y][party.x].units[e].Cond.length){
			
			
			
			a++
		}		

		e++;
	}
	tempInits.sort(function(aa, bb){return aa-bb});
	currInit = tempInits.length
	e = 0 
	while(e < party.units.length){
		a = 0
		while(a < tempInits.length){
			if(party.units[e].Init == tempInits[a]){
				party.units[e].Init = a+1;
			}
			a++;
		}
		e++;
	}
	e = 0 
	while(e < map[party.y][party.x].units.length){
		a = 0
		while(a < tempInits.length){
			if(map[party.y][party.x].units[e].Init == tempInits[a]){
				map[party.y][party.x].units[e].Init = a+1;
			}
			a++;
		}
		e++;
	}
	
}
//TODO:Main
function Main(){
	
	//LogEntry(hero)
	Good = "";
	Food = ""; 
	//GOOD
	var e = 0;
	var a = 0;
	var Init = ""
	var showstats = false;
	var goodbrbr = true;
	var foodbrbr = true;
	var fstats = ["","","","","",""]
	while(e < party.units.length){
		showstats = false;
		if(party.units.length < 5){
			showstats = true;
		}
		if(map[party.y][party.x].hostile){
			
			if(currInit == party.units[e].Init){
				Init = ": "+Math.abs(party.units[e].Init-tempInits.length-1)
				showstats = true;
				pick1 = e//TESTING
			}else{
				Init = ": "+Math.abs(party.units[e].Init-tempInits.length-1)
			}
			if(currInit == party.units[e].Init && party.units[e].asleep){
				//Init = " - Active - Asleep"
					skiptaketurn= "<button id=\"CON\"class=\"btnext\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+" is asleep, Skip Turn</button>"
					showstats = true;
			}
			if(currInit == party.units[e].Init && party.units[e].fled){
				//Init = " - Active - Fled"
				if(map[party.y][party.x].name == "Boss"){
					skiptaketurn= "<button id=\"CON\"class=\"btnext\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+
					choose([" spectates"])
					", Skip Turn</button>"
				}else{
					skiptaketurn= "<button id=\"CON\"class=\"btnext\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+" has fled, Skip Turn</button>"
				}
				showstats = true;
			}
		}
		if(pick1 == -1 && pick2 == -1 && (!map[party.y][party.x].hostile || party.units[e].Init==currInit) && !party.units[e].asleep && !party.units[e].fled){//(No picks. not hostile, or current initiative)or someone else was picked and an action is picked
		Good += "<button class=\"namavl\" onclick=\"SelectDom("+e+")\">"+party.units[e].Name.replace("girl", "")+Init+"</button>"
		}else if(pick1 == e && !party.units[e].fled && !party.units[e].asleep && action == -1){//pick one chosen, is hero.
		Good += "<button class=\"namact_animate\" onclick=\"SelectDom(-1)\">"+String(party.units[e].Name.replace("girl", "")).toUpperCase()+Init+"</button>"
		showstats = true;
		}else if(pick1 == e && !party.units[e].fled && !party.units[e].asleep){//pick one chosen, is hero.
		Good += "<button class=\"namact\" onclick=\"SelectDom(-1)\">"+String(party.units[e].Name.replace("girl", "")).toUpperCase()+Init+"</button>"
		showstats = true;
		}else if(pick1 != e && action > -1 && action != 2 && !party.units[e].fled && (!party.units[e].asleep || (action == 3)) && (e > 0 || action != 3)){//pick one chosen. action chosen
		Good += "<button class=\"namavl_animate\" onclick=\"SelectSub("+e+")\">"+party.units[e].Name.replace("girl", "")+Init+"</button>"
		}else if (party.units[e].fled){
		Good += "<button class=\"namout\">"+party.units[e].Name.replace("girl", "")+Init+"</button>"
		}else if (party.units[e].asleep){
		Good += "<button class=\"namsleep\">"+party.units[e].Name.replace("girl", "")+Init+"</button>"
		}else{
		Good += "<button class=\"namdis\">"+party.units[e].Name.replace("girl", "")+Init+"</button>"
		}
		
		Good += "&nbsp<span class=\"tags\">"
		a = 0
		//while(a < party.units[e].Cond.length){
		while(a < 2 && a < party.units[e].Cond.length){
			Good += "<i> "+party.units[e].Cond[a] + "</i>";
			if(a == 3 || a == 7 || a == 11){Good += "<br>"}else if(a < party.units[e].Cond.length-1){Good+=","}
			a++;
		}
		Good += "</span><BR>"
		Good += "<b>"
		
		if(e == 0){
			if(true || unit(e).CPun > 0){Good += "&nbsp&nbspHurt:"+party.units[e].CPun+"/"+party.units[e].MPun+""}//showstats
			if(true || unit(e).CPle > 0){Good += "&nbsp&nbspHungry:"+party.units[e].CPle+"/"+(party.units[e].MPle)+"&nbsp&nbsp"}
		}else{
			if(true || unit(e).CPun > 0){Good += "&nbsp&nbspHurt:"+(party.units[e].CPun)+"/"+(party.units[e].MPun)+"&nbsp"}
			if(true || unit(e).CPle > 0){Good += "&nbsp&nbspHorny:"+(party.units[e].CPle)+"/"+(party.units[e].MPle)+"&nbsp&nbsp"}
		}
		Good += "<BR>"
		//Good += "<center>"

		//Good += "</center><br>"
		
		if(showstats){
			Good += "&nbsp&nbspFight:"+stat(party.units[e].Figh)+"&nbsp Flirt:"+stat(party.units[e].Flir)+"&nbsp Flee:"+stat(party.units[e].Flee)+"<BR>"
			Good += "&nbsp&nbspFeast:"+stat(party.units[e].Feas)+"&nbsp Fuck:"+stat(party.units[e].Fuck)+"&nbsp&nbsp Feed:"+stat(party.units[e].Feed)+"<br>"
			Good += "</b>"
			goodbrbr = false
			if(pick1 == e){
				fstats = [party.units[e].Figh,party.units[e].Flir,party.units[e].Flee,party.units[e].Feas,party.units[e].Fuck,party.units[e].Feed]
			}
			
		}

		//if(a > 0){Food += "<br>"}
		//Food += "<br><br>"

		e++;
	}
	if(goodbrbr){
		Good += "<br><br>"
	}
	//FOOD - all picks are +100
	e = 0;
	a = 0;
	while(e < map[party.y][party.x].units.length){
		showstats = false;
		if(map[party.y][party.x].units.length < 5){
			showstats = true;
		}
		if(map[party.y][party.x].hostile){
			if(currInit == map[party.y][party.x].units[e].Init && !map[party.y][party.x].units[e].asleep){
				foodtaketurn= "<button id=\"CON\"class=\"btnext\" onclick=\"FoodAction("+e+")\">"+map[party.y][party.x].units[e].Name+"'s Turn</button>"
				showstats = true;
			}else if(currInit == map[party.y][party.x].units[e].Init && map[party.y][party.x].units[e].asleep){
				foodtaketurn= "<button id=\"CON\"class=\"btnext\" onclick=\"FoodAction("+e+")\">"+map[party.y][party.x].units[e].Name+" is asleep, Skip Turn</button>"
				showstats = true;
			}
			if(currInit == unit(e+100).Init){
				showstats = true;
				Init = ": "+Math.abs(map[party.y][party.x].units[e].Init-tempInits.length-1)
			}else{
				Init = ": "+Math.abs(map[party.y][party.x].units[e].Init-tempInits.length-1)
			}
			
		}
		
		Food += "&nbsp<span class=\"tags\">"
		a = 0
		//while(a < map[party.y][party.x].units[e].Cond.length){
		while(a < 2 && a < map[party.y][party.x].units[e].Cond.length){
			Food += "<i> "+map[party.y][party.x].units[e].Cond[a] + "</i>";
			if(a == 3 || a == 7 || a == 11){Food += "<br>"}else if(a < map[party.y][party.x].units[e].Cond.length-1){Food+=","}
			a++;
		}
		if(!map[party.y][party.x].hostile){Food+=", Passive"}
		Food += "</span>&nbsp&nbsp"
		
		if(pick1 != (e+100) && action > -1 && ((action == 2 || action == 3) || !map[party.y][party.x].units[e].asleep)){//pick one chosen, isnt hero. action chosen
			Food += "<button class=\"namavl_animate\" onclick=\"SelectSub("+(e+100)+")\">"+map[party.y][party.x].units[e].Name.replace("girl", "")+Init+"</button>"
		}else if(currInit == map[party.y][party.x].units[e].Init && map[party.y][party.x].hostile){
			Food += "<button class=\"namact_animate\">"+String(map[party.y][party.x].units[e].Name.replace("girl", "")).toUpperCase()+Init+"</button>"
			showstats = true;
		}else if(map[party.y][party.x].units[e].asleep){
			Food += "<button class=\"namsleep\">"+map[party.y][party.x].units[e].Name.replace("girl", "")+Init+"</button>"
		}else{
			Food += "<button class=\"namdis\">"+map[party.y][party.x].units[e].Name.replace("girl", "")+Init+"</button>"
		}
		Food += "<br>"
		Food += "<b>"
		if(true || unit(e+100).CPun > 0){Food += "&nbspHurt: "+(map[party.y][party.x].units[e].CPun)+"/"+(map[party.y][party.x].units[e].MPun)+"&nbsp&nbsp"}
		if(true || unit(e+100).CPle > 0){Food += "&nbspHorny: "+stat2(map[party.y][party.x].units[e].CPle)+"/"+(map[party.y][party.x].units[e].MPle)+"&nbsp&nbsp"}
		
		Food += "<br>"
		if(showstats){
			foodbrbr = false
			Food += "&nbsp&nbspFight:"+stat(map[party.y][party.x].units[e].Figh)+"  Flirt:"+stat(map[party.y][party.x].units[e].Flir)+"  Flee:"+stat(map[party.y][party.x].units[e].Flee)+"<BR>"
			Food += "&nbsp&nbspFeast:"+stat(map[party.y][party.x].units[e].Feas)+"&nbsp; Fuck:"+stat(map[party.y][party.x].units[e].Fuck)+"  Feed:"+stat(map[party.y][party.x].units[e].Feed)+"<br>"
			//fstats = [map[party.y][party.x].units[e].Figh,map[party.y][party.x].units[e].Flir,map[party.y][party.x].units[e].Flee,map[party.y][party.x].units[e].Feas,map[party.y][party.x].units[e].Fuck,map[party.y][party.x].units[e].Feed]
		}
		Food += "</b>"
		//if(a > 0){Food += "<br>"}
		//Food += "<br><br>"

		e++;
	}
	if(foodbrbr){
		Food += "<br><br>"
	}
	document.getElementById("Good").innerHTML = Good;
	document.getElementById("Food").innerHTML = Food;
	if(map[party.y][party.x].units.length == 0){
		document.getElementById("Food").style.visibility = "hidden";
		document.getElementById("Food").className = "mainspan2";
	}else{
		if(document.getElementById("Food").style.visibility == "visible"){
			document.getElementById("Food").className = "mainspan2";
		}else{
			document.getElementById("Food").className = "mainspan2_animate";
			document.getElementById("Food").style.visibility = "visible";
		}
	}//animation_mainspan2
	if(skiptaketurn != ""){//use for sleeping/fled creatures
		document.getElementById("actions").innerHTML = skiptaketurn
	}else if(foodtaketurn != ""){
		document.getElementById("actions").innerHTML = foodtaketurn
	}else if((pick1 == -1 && action == -1) || (party.units.length == 1 && map[party.y][party.x].units.length == 0)){
	document.getElementById("actions").innerHTML = 
	"<button id=\"FIG\"class=\"btndis\" onclick=\"SelectAction(0)\">Fight "+fstats[0]+"</button><button id=\"FON\" class=\"btndis\" onclick=\"SelectAction(1)\">Flirt "+fstats[1]+"</button><button id=\"FLE\" class=\"btndis\" onclick=\"SelectAction(2)\">Flee "+fstats[2]+"</button>"+
	"<button id=\"FEA\"class=\"btndis\" onclick=\"SelectAction(3)\">Feast "+fstats[3]+"</button><button id=\"FUC\" class=\"btndis\" onclick=\"SelectAction(4)\"  >Fuck "+fstats[4]+"</button><button id=\"FEE\" class=\"btndis\" onclick=\"SelectAction(5)\">Feed "+fstats[5]+"</button>"
	}else{
	/*
	document.getElementById("actions").innerHTML = 
	"<button id=\"FIG\"class=\"btnavl\" onclick=\"SelectAction(0)\">Fight "+fstats[0]+"</button><button id=\"FON\" class=\"btnavl\" onclick=\"SelectAction(1)\">Flirt "+fstats[1]+"</button><button id=\"FLE\" class=\"btnavl\" onclick=\"SelectAction(2)\">Flee "+fstats[2]+"</button>"+
	"<button id=\"FEA\"class=\"btnavl\" onclick=\"SelectAction(3)\">Feast "+fstats[3]+"</button><button id=\"FUC\" class=\"btnavl\" onclick=\"SelectAction(4)\"  >Fuck "+fstats[4]+"</button><button id=\"FEE\" class=\"btnavl\" onclick=\"SelectAction(5)\">Feed "+fstats[5]+"</button>"
		if(action == 0){document.getElementById("FIG").style.color = "#ffee88";document.getElementById("FIG").style.backgroundColor = "#000000";document.getElementById("FIG").style.fontWeight = "100"}
		if(action == 1){document.getElementById("FON").style.color = "#ffee88";document.getElementById("FON").style.backgroundColor = "#000000";document.getElementById("FON").style.fontWeight = "100"}
		if(action == 2){document.getElementById("FLE").style.color = "#ffee88";document.getElementById("FLE").style.backgroundColor = "#000000";document.getElementById("FLE").style.fontWeight = "100"}
		if(action == 3){document.getElementById("FEA").style.color = "#ffee88";document.getElementById("FEA").style.backgroundColor = "#000000";document.getElementById("FEA").style.fontWeight = "100"}
		if(action == 4){document.getElementById("FUC").style.color = "#ffee88";document.getElementById("FUC").style.backgroundColor = "#000000";document.getElementById("FUC").style.fontWeight = "100"}
		if(action == 5){document.getElementById("FEE").style.color = "#ffee88";document.getElementById("FEE").style.backgroundColor = "#000000";document.getElementById("FEE").style.fontWeight = "100"}	
		//*/
		Good = "";
		if(action == 0){
			Good+="<button id=\"FIG\"class=\"btnact\" onclick=\"SelectAction(0)\">Fight "+fstats[0]+"</button>"
		}else{
			Good+="<button id=\"FIG\"class=\"btnavl\" onclick=\"SelectAction(0)\">Fight "+fstats[0]+"</button>"
		}
		if(action == 1){
			Good+="<button id=\"FON\"class=\"btnact\" onclick=\"SelectAction(1)\">Flirt "+fstats[1]+"</button>"
		}else{
			Good+="<button id=\"FON\"class=\"btnavl\" onclick=\"SelectAction(1)\">Flirt "+fstats[1]+"</button>"
		}
		if(action == 2){
			Good+="<button id=\"FLE\"class=\"btnact\" onclick=\"SelectAction(2)\">Flee "+fstats[2]+"</button>"
		}else{
			Good+="<button id=\"FLE\"class=\"btnavl\" onclick=\"SelectAction(2)\">Flee "+fstats[2]+"</button>"
		}
		if(action == 3){
			Good+="<button id=\"FEA\"class=\"btnact\" onclick=\"SelectAction(3)\">Feast "+fstats[3]+"</button>"
		}else{
			Good+="<button id=\"FEA\"class=\"btnavl\" onclick=\"SelectAction(3)\">Feast "+fstats[3]+"</button>"
		}
		if(action == 4){
			Good+="<button id=\"FUC\"class=\"btnact\" onclick=\"SelectAction(4)\">Fuck "+fstats[4]+"</button>"
		}else{
			Good+="<button id=\"FUC\"class=\"btnavl\" onclick=\"SelectAction(4)\">Fuck "+fstats[4]+"</button>"
		}
		if(action == 5){
			Good+="<button id=\"FEE\"class=\"btnact\" onclick=\"SelectAction(5)\">Feed "+fstats[5]+"</button>"
		}else{
			Good+="<button id=\"FEE\"class=\"btnavl\" onclick=\"SelectAction(5)\">Feed "+fstats[5]+"</button>"
		}
		document.getElementById("actions").innerHTML = Good
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
//TODO:PerformAction
function PerformAction(){//randomAction:[action,dom,sub,offence,defence,terrain]
	var domval = 0;
	var subval = 0
	var stats = ""
	var story = ""
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
				stats = "Evaded"
			}
			if((map[party.y][party.x].units[pick2-100].swimming) && Math.random()<.5 && !party.units[pick1].antiswimming){//EVADE
				domval = 0;
				stats = "Evaded"
			}
			map[party.y][party.x].units[pick2-100].CPle = 0;
			
			if(unit(pick2).CPun+1 == unit(pick2).MPun){
				unit(pick2).CPun += domval;
			}else if(unit(pick2).CPun+domval >= unit(pick2).MPun && (unit(pick1).Tags[0] != "Drowgirl" && unit(pick1).Tags[0] != "Goblingirl")){
				unit(pick2).CPun = unit(pick2).MPun-1
			}else{
				unit(pick2).CPun += domval;
			}
					
			subval = map[party.y][party.x].units[pick2-100].CPun/map[party.y][party.x].units[pick2-100].MPun;
		}
		//LogEntry(randomAction([0,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
		if(stats == ""){
			DetailedEntry(randomAction([0,pick1,pick2,domval,subval,map[party.y][party.x].tag]),"Fight for "+domval)
		}else{
			DetailedEntry(randomAction([0,pick1,pick2,domval,subval,map[party.y][party.x].tag]),"Evaded")
		}
		if(subval >= 1){deadName=map[party.y][party.x].units[pick2-100].Name;Removal(pick2);fullPeace(deadName,-1,-1,pick1)}
		if(pick2 >= 100 && !map[party.y][party.x].hostile && map[party.y][party.x].units.length > 0){map[party.y][party.x].hostile = true;currInit=0}//attacking starts combat. DOUBLE CHECK INT IS RIGHT
	}
	if(action == 1){//FLIRT
		if(pick2 < 100){
			if(pick2>0){
				domval = AR(party.units[pick1].Flir)
				if(party.units[pick2].CPle<party.units[pick2].MPle){
				party.units[pick2].CPle = Math.min(party.units[pick2].CPle+domval,party.units[pick2].MPle-1);
				}
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
		//LogEntry(randomAction([1,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
		DetailedEntry(randomAction([1,pick1,pick2,domval,subval,map[party.y][party.x].tag]),"Flirt for "+domval)
	}
	if(action == 2){//FLEE
		domval = AR(party.units[pick1].Flee)
		if(!map[party.y][party.x].hostile || map[party.y][party.x].tag == "Dungeon"){
			domval = 0
		}else if(domval >= AR(map[party.y][party.x].units[pick2-100].Flee)){
			domval = 1
			party.units[pick1].fled = true;
			party.units[pick1].Cond[party.units[pick1].Cond.length] = "Fled";
		}else{
			domval = 0
		}
		LogEntry(randomAction([2,pick1,pick2,domval,subval,map[party.y][party.x].tag]) +" "+ fullEscape(""))
		
	}
	if(action == 3){//FEAST
		if(pick1 == 0 && unit(0).CPle <= 0){
			subval = -1;
			DetailedEntry(randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag]),"TOO FULL")
		}else if(unit(pick1).Size + unit(pick1).appetite < unit(pick2).Size){//change "0" to the modifier for eating bigger prey????
			subval = -2;
			DetailedEntry(randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag]),"TOO SMALL")
		}else{
			//subval == -2:SIZE -1:FULL 0:FAILED 1:ASLEEP 2:UNWILLING 3:WILLING
			if(pick2 < 100){
				subval = 3
				domval = unit(pick2).MPle
						if(pick1 == 0 && Cocked == null && subval >= 1 && unit(pick2).Size==1){Cocked = unit(pick2)}
				story=randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag])
				stats = StatGain(pick1,pick2)
			}else if(map[party.y][party.x].hostile){
				if(unit(pick2).asleep){
					subval = 1;
							if(pick1 == 0 && Cocked == null && subval >= 1 && unit(pick2).Size==1){Cocked = unit(pick2)}
					story=randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag])
					stats = StatGain(pick1,pick2)
				}else{
					domval = AR(party.units[pick1].Feas)
					if((map[party.y][party.x].units[pick2-100].flying) && !party.units[pick1].antiflying && Math.random()<.5){//EVADE
						subval = 0;
						stats = "Evaded"
						story=randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag])
					}else if((map[party.y][party.x].units[pick2-100].swimming) && !party.units[pick1].antiswimming && Math.random()<.5){//EVADE
						subval = 0;
						stats = "Evaded"
						story=randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag])
					}else if(domval >= map[party.y][party.x].units[pick2-100].MPun-map[party.y][party.x].units[pick2-100].CPun){
						subval = 2;
								if(pick1 == 0 && Cocked == null && subval >= 1 && unit(pick2).Size==1){Cocked = unit(pick2)}
						story=randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag])
						stats = StatGain(pick1,pick2)

					}else{
						stats = "Resisted"
						subval = 0;
						story=randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag])
						if(!unit(pick2).willing){
							unit(pick2).CPle = 0;
						}
					}
				}
			}else{//PASSIVE. TEST VS PLE BEFORE PUN. DECIDES IF ITS WILLING/UNWILLING/UNSUCCESSFUL. ONLY WILLING VORE KEEPS HOSTILE:FALSE
				domval = AR(party.units[pick1].Feas)
				if(domval >= map[party.y][party.x].units[pick2-100].MPle-map[party.y][party.x].units[pick2-100].CPle && map[party.y][party.x].units[pick2-100].willing){
					subval = 3;
							if(pick1 == 0 && Cocked == null && subval >= 1 && unit(pick2).Size==1){Cocked = unit(pick2)}
					story=randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag])
					stats = StatGain(pick1,pick2)
				}else if(domval >= map[party.y][party.x].units[pick2-100].MPun-map[party.y][party.x].units[pick2-100].CPun && (!map[party.y][party.x].units[pick2-100].flying ||  party.units[pick1].antiflying || Math.random()<.5) && (!map[party.y][party.x].units[pick2-100].swimming ||  party.units[pick1].swimming || Math.random()<.5)){
					subval = 2;
							if(pick1 == 0 && Cocked == null && subval >= 1 && unit(pick2).Size==1){Cocked = unit(pick2)}
					story=randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag])
					stats = StatGain(pick1,pick2)
				}else{
					stats = "Resisted"
					subval = 0;
					story=randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag])
					if(!unit(pick2).willing){
						unit(pick2).CPle = 0;
					}
				}
					//
			}// domval >= unit(pick2).MPle-unit(pick2).CPle
			
			//LogEntry(randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
			DetailedEntry(story,stats)
			if(!map[party.y][party.x].hostile && map[party.y][party.x].units.length > 0 && (subval == 0 || subval == 2) ){map[party.y][party.x].hostile = true;currInit=0}//attacking starts combat
			
			
			if(pick2 < 100){
				Removal(pick2)
			}else if(subval >= 1){
			deadName=map[party.y][party.x].units[pick2-100].Name;
			Removal(pick2);
			fullPeace(-1,-1,deadName,pick1)
			}
		}
	}
	if(action == 4){//FUCK
		if(pick1 == 0){
			if(party.units[0].CPle>=party.units[0].MPle){//not horny
				domval = -1;
				stats = "Too Hungry"
			}else{
				if(pick2<100){
					domval = AR(party.units[0].Fuck)//HEAL BY BOTH FUCK VALUES
					stats = "Got Some"
					if(map[party.y][party.x].hostile){
						unit(pick2).Cond[unit(pick2).Cond.length] = "Asleep"
						unit(pick2).asleep = true;
						stats = "She's asleep"
					}
					if(party.units[pick2].CPun+party.units[0].CPun > 0){
						stats = "Fully Healed"
					}
					//party.units[0].CPun = 0
					if(unit(pick2).MPun < defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck){
						unit(pick2).MPun = Math.min(unit(pick2).MPun+unit(pick1).Size+unit(pick2).Size,defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck)
						stats = "Hurt Threshold Increased"
					}
					if(unit(pick1).MPun < defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck){
						unit(pick1).MPun = Math.min(unit(pick1).MPun+unit(pick1).Size+unit(pick2).Size,defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck)
						stats = "Hurt Threshold Increased"
					}
					
					
					party.units[pick2].CPle = unit(pick2).MPle
					//party.units[pick2].CPun = 0
					party.units[0].CPle = Math.min(party.units[0].CPle+AR(party.units[pick2].Size),party.units[0].MPle)

					domval = 1
				}else{//FOOD
					domval = AR(party.units[0].Fuck)//HEAL BY BOTH FUCK VALUES
					if(domval >= map[party.y][party.x].units[pick2-100].MPle-map[party.y][party.x].units[pick2-100].CPle){
						
						stats = "New Companion"
						
						//party.units[0].CPun = 0
						
						map[party.y][party.x].units[pick2-100].CPle = map[party.y][party.x].units[pick2-100].MPle
						map[party.y][party.x].units[pick2-100].CPun = 0
						if(unit(pick2).MPun < defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck){
							//unit(pick2).MPun = Math.min(unit(pick2).MPun+unit(pick2).Size,defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck)
						}
						if(unit(pick1).MPun < defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck){
							//unit(pick1).MPun = Math.min(unit(pick1).MPun+1,defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck)
						}
						if(map[party.y][party.x].hostile){
							unit(pick2).Cond[unit(pick2).Cond.length] = "Asleep"
							unit(pick2).asleep = true;
						}
						party.units[0].CPle = Math.min(party.units[0].CPle+AR(map[party.y][party.x].units[pick2-100].Size),party.units[0].MPle)
						
						domval = 1
					}else if(!map[party.y][party.x].hostile && map[party.y][party.x].units[pick2-100].CPle == 0){//Secretly require flirting for nonhostile creatures with zero CPLE
						stats = "Rejected"
						domval = 0
						map[party.y][party.x].units[pick2-100].CPle = -5;
					}else{
						stats = "Rejected"
						domval = 0
					}
				}
			}
		}else{
			if(pick2 == 0){
				stats = "Got Some"
				if(unit(pick2).MPun < defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck){
						unit(pick2).MPun = Math.min(unit(pick2).MPun+unit(pick1).Size+unit(pick2).Size,defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck)
						stats = "Hurt Threshold Increased"
					}
					if(unit(pick1).MPun < defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck){
						unit(pick1).MPun = Math.min(unit(pick1).MPun+unit(pick1).Size+unit(pick2).Size,defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck)
						stats = "Hurt Threshold Increased"
					}
				if(party.units[0].CPle>=party.units[0].MPle){//not horny
					domval = -1;
				}else{
					if(map[party.y][party.x].hostile){
						unit(pick1).Cond.push("Asleep")
						unit(pick1).asleep=true;
						stats = "Asleep"
					}
					//party.units[0].CPun = 0
					party.units[pick1].CPle = party.units[pick1].MPle
					
					party.units[0].CPle = Math.min(party.units[0].CPle+AR(party.units[pick1].Size),party.units[0].MPle)
					domval = 1
				}
			}else if(pick2<100){
				stats = "They Got Some"
					if(unit(pick2).MPun < defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck){
						unit(pick2).MPun = Math.min(unit(pick2).MPun+unit(pick1).Size+unit(pick2).Size,defaultstat(unit(pick2).Tags[0],"MPun")+unit(pick1).Fuck)
						stats = "Hurt Threshold Increased"
					}
					if(unit(pick1).MPun < defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck){
						unit(pick1).MPun = Math.min(unit(pick1).MPun+unit(pick1).Size+unit(pick2).Size,defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck)
						stats = "Hurt Threshold Increased"
					}
				unit(pick2).CPle = unit(pick2).MPle
				unit(pick1).CPle = unit(pick1).MPle
				domval = 1
				if(map[party.y][party.x].hostile){
					unit(pick2).Cond.push("Asleep")
					unit(pick2).asleep = true; 
					unit(pick1).Cond.push("Asleep")
					unit(pick1).asleep=true;
				}
			}else{//GOOD FUCKING FOOD
				domval = AR(party.units[pick1].Fuck)
				stats = "They Got Some"
				if(domval >= map[party.y][party.x].units[pick2-100].MPle-map[party.y][party.x].units[pick2-100].CPle){
					unit(pick2).CPle = unit(pick2).MPle
					unit(pick1).CPle = unit(pick1).MPle
					if(map[party.y][party.x].hostile){
						unit(pick2).Cond.push("Asleep")
						unit(pick2).asleep = true; 
						unit(pick1).Cond.push("Asleep")
						unit(pick1).asleep=true;
						stats = "Asleep"
					}
					domval = 1
					//move sides
				}else{
					stats = "Rejected"
					domval = 0;
				}
			}
		}
		if(pick1 == 0 && Cocked != null && domval == 1){
			map[party.y][party.x].units.push(Cocked)
			stats = StatGain(pick2,map[party.y][party.x].units.length+99)
			map[party.y][party.x].units.pop();
			DetailedEntry(randomAction([4,pick1,pick2,domval,subval,map[party.y][party.x].tag]),stats)
			Cocked = null;
			
		}else if(pick2 == 0 && Cocked != null && domval == 1){
			map[party.y][party.x].units.push(Cocked)
			stats = StatGain(pick1,map[party.y][party.x].units.length+99)
			map[party.y][party.x].units.pop();
			DetailedEntry(randomAction([4,pick1,pick2,domval,subval,map[party.y][party.x].tag]),stats)
			Cocked = null;
			
		}else{
			DetailedEntry(randomAction([4,pick1,pick2,domval,subval,map[party.y][party.x].tag]),stats)
		}
		if((pick1 == 0 || pick2 == 0) && domval == 1){
			unit(pick1).CPun = 0
			unit(pick2).CPun = 0
		}
		if(unit(pick2).asleep){ 
			unit(pick2).Clothing = "None";
		}
		if(pick2 >= 100 && domval == 1){
			if(pick1 == 0){
				party.units.push(map[party.y][party.x].units[pick2-100])
				map[party.y][party.x].units.splice(pick2-100,1);
				
				fullPeace(-1,pick2-100,-1,pick1)
				
			}else{//CHECK FOR PEACE
				fullPeace(-1,pick2,-1,pick1)
			}
		}
	}
	if(action == 5){//FEED
		
		if(pick2 == 0 && unit(0).CPle <= 0){
			LogEntry(randomAction([5,pick1,pick2,-1,-1,map[party.y][party.x].tag]))
		}else if(unit(pick2).Size + 0 < unit(pick1).Size){//change "0" to the modifier for eating bigger prey????
			LogEntry(randomAction([5,pick1,pick2,-2,-2,map[party.y][party.x].tag]))
		}else if(unit(pick1).willing == false){
			LogEntry(randomAction([5,pick1,pick2,-3,-3,map[party.y][party.x].tag]))
		}else{
			subval = unit(pick2).CPle/unit(pick2).MPle;
			stats = StatGain(pick2,pick1)
			DetailedEntry(randomAction([5,pick1,pick2,domval,subval,map[party.y][party.x].tag]),stats)
			deadName=unit(pick1).Name;
			
			Removal(pick1);
			
			fullPeace(-1,-1,deadName,pick1)
			
		}
	}
	party.lastAction = [action,pick1,pick2]
	pick1	= -1;
	pick2	= -1;
	action	= -1;
	TimeFlow()
}
//TODO:FoodAction
function FoodAction(Entry){
	//Check for Passive, Horny, Hungry, Asleep
	var u = Math.floor(Math.random()*party.units.length)
	var stats = ""
	if(map[party.y][party.x].name == "Boss"){
		u = 0//haha it u, as in she's coming after you!
	}else{
		if(map[party.y][party.x].units[Entry].Tags[0] == "Drowgirl" && Math.random()<.75){
			u = 0;
		}else if(party.units.length > 1 && Math.random()<.9){
			u = Math.floor(Math.random()*(party.units.length-1))+1;//makes enemies focus on other girls
		}
		while(party.units[u].asleep || party.units[u].fled){
		//LogEntry(u+ ":"+party.units[u].asleep + " " + party.units[u].fled)
			if(party.units.length > 1 && Math.random()<.90){
				u = Math.floor(Math.random()*party.units.length-1)+1;//makes enemies focus on other girls
			}
			u = Math.floor(Math.random()*party.units.length)	
		}
	
	}
	if(map[party.y][party.x].units[Entry].asleep){
		LogEntry("The "+map[party.y][party.x].units[Entry].Name +" "+ randomEntry("Asleep"))
	}else{
		if(party.units.length > 3 && map[party.y][party.x].units.length == 1 && map[party.y][party.x].units[Entry].Size < 4 && Math.random()*(party.units.length-3) > .95 && party.units[u].Flee <= map[party.y][party.x].units[Entry].Flee+1){
				if(u == 0){
					if(map[party.y][party.x].units[Entry].flying){
						LogEntry("The "+map[party.y][party.x].units[Entry].Name + " flies right over me to escape!")
					}else{
						LogEntry("The "+map[party.y][party.x].units[Entry].Name + " slips past me and runs away!")
					}
				}else{
					if(map[party.y][party.x].units[Entry].flying){
						LogEntry("The "+map[party.y][party.x].units[Entry].Name + " flies right over my "+party.units[u].Name +" to escape!")
					}else{
						LogEntry("The "+map[party.y][party.x].units[Entry].Name + " slips past my "+party.units[u].Name +" and runs away!")
					}
				}
				Removal(Entry+100)
				map[party.y][party.x].hostile = false;
				Walk(0,0);
		}else if(unit(100).Tags[0] == "Bunnygirl" && Math.random() < .8 && party.units[u].Flee <= map[party.y][party.x].units[Entry].Flee+1){
				if(u == 0){
					LogEntry("The "+map[party.y][party.x].units[Entry].Name + choose([" hops over my head, and skips away laughing!"," hops over my head, shakes her cute tail, and skips away laughing!"]))
				}else{
					LogEntry("The "+map[party.y][party.x].units[Entry].Name + " hops over my "+party.units[u].Name.toLowerCase() +"'s head, and skips away laughing!")
				}
				Removal(Entry+100)
				map[party.y][party.x].hostile = false;
				Walk(0,0);
		}else if(unit(100).Tags[0] == "Deergirl" && Math.random() < .8 && party.units[u].Flee <= map[party.y][party.x].units[Entry].Flee+1){
				if(u == 0){
					LogEntry("The "+map[party.y][party.x].units[Entry].Name + choose([" leaps over my head, and quickly dashes away!"," leaps over my head, shakes her cute tail, and quickly dashes away!"]))
				}else{
					LogEntry("The "+map[party.y][party.x].units[Entry].Name + " leaps over my "+party.units[u].Name.toLowerCase() +"'s head, and dashes away!")
				}
				Removal(Entry+100)
				map[party.y][party.x].hostile = false;
				Walk(0,0);
		}else{
			var domval = 0;
			var subval = 0



			domval = AR(map[party.y][party.x].units[Entry].Figh)

			if((party.units[u].flying) && Math.random()<.5 && !map[party.y][party.x].units[Entry].antiflying){
				   //LogEntry(randomAction([0,Entry+100,u,0,subval,map[party.y][party.x].tag]))
				DetailedEntry(randomAction([0,Entry+100,u,0,subval,map[party.y][party.x].tag]),"Evaded")
			}else if((party.units[u].swimming) && Math.random()<.5 && !map[party.y][party.x].units[Entry].antiswimming){
				DetailedEntry(randomAction([0,Entry+100,u,0,subval,map[party.y][party.x].tag]),"Evaded")
			}else{
				if(AR(map[party.y][party.x].units[Entry].Feas) > party.units[u].MPun-party.units[u].CPun && map[party.y][party.x].units[Entry].Size >= party.units[u].Size && Math.random()<.95){
					if(AR(map[party.y][party.x].units[Entry].Feas) > party.units[u].MPun-party.units[u].CPun && 2<4){//ADDS CHANCE FOR FAILURE
						//LogEntry(randomAction([3,Entry+100,u,domval,2,map[party.y][party.x].tag]))
						stats = StatGain(Entry+100,u)
						DetailedEntry(randomAction([3,Entry+100,u,domval,2,map[party.y][party.x].tag]),stats)
						
						if(u == 0){
							if(map[party.y][party.x].units[Entry].Name == "Wolf Queen"){
								stats = "The queen laughs as she shoves me to the ground. I try to get up, but she slams a paw onto my back. She presses down hard and I struggle for breath. Once she's had her fun, she grabs my calves and starts eating. I can only watch as I slowly slides further inside. She fondles my balls for a moment before swallowing the rest of me down. I lay in the pool of rising fluids while listening to her monolog about how superiour she is to me."+
								choose([" My dissolving body slumps deeper into the acids, ending my journey before it ever really started."," My dissolving body slips further into the acids. As I start to fade, I think back fondly of the little hut I woke up in, and wonder what kind of life I would have lived if I had just stayed there."])
							}else if(map[party.y][party.x].units[Entry].Name == "Harpy Queen"){
								stats = "The queen flings her crown at me, making contact with my skull!"+
								choose([" I fall to the ground, and she quickly swallows me down."," Before I hit the ground, she scoops me into the air and gobbles me up from a chandelier."," While I'm stunned, she lands and quickly swallows me down."])+
								choose([" My senses return too late, and I thrash around her belly until tiring."," She laughs as I struggle to keep my head above her acids, my efforts are short lived and soon the lack of air forces me to stop."])+
								choose([" My dissolving body slumps deeper into the acids, ending my journey before it ever really started."," My dissolving body slips further into the acids. As I start to fade, I think back fondly of the little hut I woke up in, and wonder what kind of life I would have lived if I had just stayed there."])
							}else if(map[party.y][party.x].units[Entry].Name == "Drow Queen"){
								stats = choose([
									"Just when the fight starts looking bad, she makes it worse by grabbing a second sword. The Queen uses both blades to shred me to ribbons. I quickly fall into a puddle of my own blood. She looks down and spits on my ruined carcass before everything goes black.",
									"I manage to kick her blade out of her hand. I get in close, but stop when I feel a sharp sting of pain. I look down and see a dagger poking into my chest. I try questioning her on where the blade came from, but all I can do is spit up blood. Woozily, I stumble towards a table and she kindly pulls out a chair for me to collapse on. She grins at me as she leans against the table and watches as the life slowly seeps out of me....",
									"Her blade swings high and I try to duck under it. My perspective lurches to the floor and a man’s ass fills my vision. It takes me a moment to realize that I'm looking at my own headless body. The Queen pushes it aside and walks over to me. Fortunately, I fade from consciousness before she reaches me",
									"The Queen showers me in a slew of swift slashes. I cry out in pain as both of my arms tumble to the floor. Desperate, I try to headbutt her, but she casually moves aside and guts me. I fall over my useless limbs and quickly bleed out.",
									"The Queen flings a tiny dagger and it pierces my arm. The pain barely even registers against my other wounds. I shrug and laugh as I pull it free. She laughs too as she reveals a tiny emerald vial from her pocket. I try to ask her what it is, but a green ooze froths and overflows from my mouth. It trickles down my body and pools between my feet as I lose balance. Her laughter rings in my ears as everything goes black...",
									"The Queen slices her blade through me. I almost think she missed until I see a thin veil of blood seeping from my waist and running down my legs. Gravity shifts as my torso slides and flops on the floor, leaving my legs standing in front of me. She kicks them and I see my ass falling nearer. I die with my nose burried between my own cheeks!"
								])
							}else if(map[party.y][party.x].units[Entry].Tags[0] == "Wolfgirl"){
								stats = "The wolf laughs as she shoves me to the ground. I try to get up, but she slams a paw onto my back. She presses down hard and I struggle for breath. Once she's had her fun, she shoves my head into her mouth. My back contorts awkwardly as she peels me away from the ground."+
								choose([" When I'm halfway devoured, her tongue plays with my shaft until she gets bored and swallows the rest of me. I struggle inside as fluids start to fill the cramped chamber. I fade out as the acids rise above my head."," When I'm halfway devoured, her tongue plays with my shaft until I cum. She enjoys the flavor of my seed for a moment before gulping the rest of me down. I thank her for getting me off before I pass out."])
							}else if(map[party.y][party.x].units[Entry].Tags[0] == "Slimegirl"){
								stats = "Everything turns "+(map[party.y][party.x].units[Entry].Name.replace(" Slimegirl"," ")).toLowerCase()+"as I'm suspended within the slimegirl. A surge of "+DescWord(unit(Entry+100),"slime",100)+" flavor overwhelms my senses as I struggle to escape."+
								choose([" I feel strangely at peace as I melt away..."," I stroke myself trying to get one last orgasm, but melt away too soon..."," I stroke myself trying to get one last orgasm, and cum just before melting away."])
							}else if(map[party.y][party.x].units[Entry].Tags[0] == "Batgirl"){
								stats = "The batgirl sinks her teeth into my neck. I try pushing her off, but my muscles feel cold and weak."+
								choose([" She drinks her fill, then gives me a bloody kiss. With a finger, she pushes me over. Everything gets dark as she flies back into the air."," She pats my head as she gets her fill. Everything fades to black as I feel my heartbeat slowly come to a stop."])
							}else if(map[party.y][party.x].units[Entry].Tags[0] == "Harpygirl"){
								stats = choose([
									"The Harpy's talons wrap around my shoulders and she flies back into the air. I scream for her to let go and she does. I look down as the ground rushes closer. I pray to wake up before I hit, but recieve no such reprieve...",
									"The Harpy's talons wrap around my shoulders and she flies back into the air. Once we break above the clouds, she somersaults me above her and swallows me down. Its strangely calming to feel her glide away with me...",
									"The Harpy's talons wrap around my shoulders and she flies back into the air. I struggle and manage to free myself. My efforts are too late, and I crash back to earth with a sickening crunch. At first I'm surprised by the lack of pain, but soon realize I can't move my limbs. I fade out as she lands on top of me.",
								]) 
							}else if(map[party.y][party.x].units[Entry].Tags[0] == "Drowgirl"){
								stats = choose([
									"The drow slips from my sight, and I wonder where she is until a sharp pain emanates from my chest. I look down and see the bloody tip of the drow's blade poking out of me. Everything starts fading out as it retracts.",
									"The drow looks at my bleeding body and smirks. I start telling her how she'll never overcome my plot armor when she flings her blade at me. Blood splatters on it's impact, and the pain in unimaginable! She casually walks over and gently wraps her fingers around the hilt. I try to speak but blood gushes from my mouth. She rips the blade free, and everything fades to black as I fall.",
									"The drow swings her blade at me, and I foolishly try to block it. My forearm falls to the ground as blood gushes out of my stump. I try backing away, but she rushes me. Her blade aims lower this time, and my thigh is cut through cleanly. I fall, and try to scramble back with my two remaining limbs as she approaches again. She grimaces as if bothered by the sight of me, and slashes my throat to end my suffering.",
								]) 
							}
							Removal(u)
							LogEntry(stats)
						}else{
							Removal(u)
							death++
						}
						
						
					}else{//Almost eaten
						LogEntry(randomAction([3,Entry+100,u,domval,0,map[party.y][party.x].tag]))
					}
				}else{
					
					if(u>0){party.units[u].CPle = 0;}
					if(party.units[u].CPun+1 == party.units[u].MPun){
						party.units[u].CPun += domval;
					}else if(party.units[u].CPun+domval >= party.units[u].MPun && (map[party.y][party.x].units[Entry].Tags[0] != "Goblingirl" && map[party.y][party.x].units[Entry].Tags[0] != "Drowgirl" )){
						party.units[u].CPun = party.units[u].MPun-1
					}else{
						party.units[u].CPun += domval;
					}
					subval = party.units[u].CPun/party.units[u].MPun;
					
					//LogEntry(randomAction([0,Entry+100,u,domval,subval,map[party.y][party.x].tag]))
					DetailedEntry(randomAction([0,Entry+100,u,domval,subval,map[party.y][party.x].tag]),"Fight for "+domval)
					if(subval >= 1){ 
						if(u == 0){
							stats = choose([
								"I'm defeated by the "+map[party.y][party.x].units[Entry].Name,
								"The "+map[party.y][party.x].units[Entry].Name+" strikes my chest. I try to hit her back, but my legs give out. I fall on my back, and can't seem to get up",
								"The "+map[party.y][party.x].units[Entry].Name+" shoves me to the ground. I try to get back up, but my body won't seem to listen"
							])+choose([
								". She laughs as I look up at her. Everything fades to black as her laughter sounds further and further away...",
								". She takes one last look at me before walking away. I try to watch her leave, but my neck won't move. I lie there until everything goes black...",
								". As I look up at her, she spits on me. Everything fades to black as I hear her walk away...",
								". As I look up at her, she crouches besides me. She frowns as she closes my eyes. I try telling her I'm fine, but the words fail to come as I fade away...",
								". As I look up to her, she apologises. I try replying, but only caugh up blood. My vision fades with her still looking down at me..."
							])
							Removal(u);
							LogEntry(stats)
						}else{
						Removal(u);death++
						}
					}
				}
			}
		}
	}
	foodtaketurn = "";
	TimeFlow();
}
function SkipAction(Entry){	
	var messageToLog = ""
	//Check for Passive, Horny, Hungry, Asleep
	if(party.units[Entry].asleep){
		LogEntry("My "+party.units[Entry].Name.toLowerCase() + randomEntry("Asleep"))
	}else if(party.units[Entry].fled){
		if(Entry == 0){
			if(party.units.length == 2){
				LogEntry("I feel like a coward for leaving my" + party.units[1].Name+" but I'm too afraid to go back!")
			}else{
				LogEntry("I feel like a coward for running away, but I'm too afraid to go back!")
			}
		}else{
			if(map[party.y][party.x].name == "Boss"){
				if(party.units[Entry].willing && Math.random() < .2){
					messageToLog = choose([
						choose([
							"My ","My ",choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From across the throneroom, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "])
						])+party.units[Entry].Name.toLowerCase()+choose([
							" says I can eat her next if I win.",
							" says she's next if I manage to eat the queen.",
							" asks the queen if she can be eaten next if I lose."
						])
					])
				}else if(party.units[Entry].Positive && Math.random() < .5){
					messageToLog = choose([
						choose([
							"My ","My ",choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "])
						])+party.units[Entry].Name.toLowerCase()+choose([
							" screams out that she believes in me.",
							" strikes a pose, giving me a thumbs up. I feel inspired to win the fight!",
							" tells me to believe in the her that believes in me."
						])
					])
				}else if(party.units[Entry].Negative && Math.random() < .5){
					messageToLog = choose([
						choose([
							"My ","My ",choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my ",
							"While laying on a long bench, my "])
						])+party.units[Entry].Name.toLowerCase()+choose([
							" covers her eyes, she's too afraid to watch!",
							" reminds me it won't hurt too much if I lose and get eaten.",
							" tells me not to feel bad if I lose.",
							" reminds me its ok to be scared, but to do my best anyway."
						])
					])
				}else if(party.units[Entry].Funny && Math.random() < .5){
					messageToLog = choose([
						choose([
							"My ","My ",choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "])
						])+party.units[Entry].Name.toLowerCase()+choose([
							" asks if she can have my hut when I get eaten. She winks when I look back bewildered!",
							" tells me to do more than my best, since my best isn't very good.",
							" asks the queen if she can stay in the castle if I get eaten. I hope she's joking...",
							" reminds me not to get eaten.",
							" asks if I'm scared.",
							" reminds me to punch with my fist, and kick with my legs. I don't know what else she expects me to do..."
						])
					])
				}else if(party.units[Entry].Slutty && Math.random() < .5){
					messageToLog = choose([
						choose([
							"My ","My ",choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "])
						])+party.units[Entry].Name.toLowerCase()+choose([
							" fingers herself as she watches us duel.",
							" pinches her nipples while watching us duel.",
							" has her hands between her thighs as she watches us duel.",
							" asks the queen to eat me slowly if I lose.",
							" tells me to eat the queen slowly if I win.",
							" tells me to stick my butt out further while I duel. I question her priorities..."
						])
					])
				}else if(party.units[Entry].Hungry && Math.random() < .5){
					messageToLog = choose([
						choose([
							"My ","My ",choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "])
						])+party.units[Entry].Name.toLowerCase()+choose([
							" licks her lips as she watches us duel.",
							" drools while she watches us duel.",
							" asks if she can taste the queen before I swallow her.",
							"'s stomach growls loudly. We better get something to eat after this fight...",
						])
					])
				}else if(party.units[Entry].Tags[0] == "Slimegirl"){
					messageToLog = choose([
						choose([
							"My ","My ",choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From across the throneroom, my ",
							"While shaped like a slug, my ",
							"While in her spherical form, my ",
							"From a safe distance, my ",
							"While dripping all over the furnature, my ",
							"While leaving a puddle on the floor"])
						])+party.units[Entry].Name.toLowerCase()+choose([
							" makes her weird whale noises at me. "+choose(["","","Even the Queen looks over questioningly."]),
							" waves her arms frantically above her head!",
							" does a little dance to motivate me.",
							" morphs her body to vaguely resemble the queen.",
							" expands her hand to give me a massive thumbs up!"
						])
					])
				}else{
					messageToLog = choose([
						choose([
							"My ","My ",choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "])
						])+party.units[Entry].Name.toLowerCase()+choose([
							" cheers me on.",
							" tells me to do my best.",
							" says she believes in me.",
							" chants my name.",
							" does a little dance to motivate me.",
							" is biting her lip, maybe she doesn't think I'll survive.",
							" shouts encouragements.",
							" encourages me to keep do my best.",
						])
					])
				}
				LogEntry(messageToLog)
			}else if(party.units[0].fled){
				if(party.units.length == 3 && Entry == 1){
					LogEntry("Away from the fighting, my "+party.units[Entry].Name.toLowerCase()+" holds me close as we both worry about " + party.units[2].Name.toLowerCase()+".")
				}else if(party.units.length == 3){
					LogEntry("Away from the fighting, my "+party.units[Entry].Name.toLowerCase()+" holds me close as we both worry about " + party.units[1].Name.toLowerCase()+".")
				}else{
					LogEntry("Away from the fighting, my "+party.units[Entry].Name.toLowerCase()+" holds me close as we continue to hide!")
				}
			}else{
				if(Math.random()<.20){
					LogEntry("I see my "+party.units[Entry].Name.toLowerCase()+" watching us at a safe distance from the fight.")
				}else if(Math.random()<.20 && party.units[Entry].CPun > 0){
					LogEntry("My "+party.units[Entry].Name.toLowerCase()+" was pretty hurt when she ran away, I hope she's ok!")
				}else{
					LogEntry("I hope my "+party.units[Entry].Name.toLowerCase()+" is safe whereever she ran away to.")
				}
			}
		}
	}
	skiptaketurn = "";
	TimeFlow();
}
function Removal(Entry){
	var deadName = ""
	var deadtale = ""
	if(Entry == 0){
		StartTheGame()
		//LogEntry("OH FUCK I DIED!")
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

//fix with sleeping enemies and fucking another enemy!
	var i = 0;
	var o = 0;
	var peace = true;
	var heroFled = false;
	while(i < map[party.y][party.x].units.length){
		if(!map[party.y][party.x].units[i].asleep){
			peace = false;
		}
		i++;
	}
	if(peace){
		map[party.y][party.x].hostile = false;
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
			if(!party.units[i].asleep && !party.units[i].fled){escaped = -1;}
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
					return String("I hide back at the "+map[party.y][party.x].name+" and hope they don't come looking for me. After a long while. I stand up and dust myself off. I'm lucky to have gotten away!")
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
				return String(party.units[1].Name+" and I recover from the fight at the "+map[party.y][party.x].name+". We both start to cry when we hear our "+defeatedOne+" scream out!")
			}else{
				return String("I rest with my surviving friends at the "+map[party.y][party.x].name+", we all feel aweful when we hear our "+defeatedOne+" shriek in pain.")
			}
		}
	}else{
		return "";
	}
}
function LogEntry(Entry){
	Logbook = Entry + "<br><br>" + Logbook;
	//Logbook = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+Entry + "<br><br>" + Logbook;
	document.getElementById("log").innerHTML = Logbook
}
function DetailedEntry(Entry,Deets){
	Deets = String(Deets).toUpperCase()
	Logbook = Entry +"&nbsp<div class=\"logDeets\">"+Deets+" </div>" +Logbook;
	//Logbook = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+Entry +"&nbsp<span class=\"logDeets\">"+Deets+" </span><br><br>" +Logbook;
	document.getElementById("log").innerHTML = Logbook
}
//WALKMAIN-END----------------------------------------------------------------
window.addEventListener('load', function () {
	if(window.innerWidth < window.innerHeight){
	document.getElementById("content").style.width = window.innerWidth + "px";
	}else{
	document.getElementById("content").style.width = window.innerHeight + "px";
	}
	document.getElementById("content").style.width = "800px"
	StartTheGame()
})
//TODO:StartTheGame
function StartTheGame(){
	CavePath = Math.floor(Math.random()*3)//Used for probability. 2/3 of being open
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
	EventCountdown = Math.round(Math.random()*20+20)
	travel = 0
	farmRatio = 0;
	party = {
	  x:12,
	  y:12,
	  units:[],
	  lastAction:[-1,-1,-1]
	};
	party.units.push({
		Name:"Protagonist",
		CPun:0,
		MPun:defaultstat("Human","MPun"),
		CPle:defaultstat("Human","MPle")/2,
		MPle:defaultstat("Human","MPle"),
		Figh:defaultstat("Human","Figh")-5,//+Math.round(Math.random()*5),
		Feas:defaultstat("Human","Feas")-5,//+Math.round(Math.random()*5),
		Flir:defaultstat("Human","Flir")-5,//+Math.round(Math.random()*5),
		Fuck:defaultstat("Human","Fuck")-5,//+Math.round(Math.random()*5),
		Flee:defaultstat("Human","Flee")-5,//+Math.round(Math.random()*5),
		Feed:defaultstat("Human","Feed")-5,//+Math.round(Math.random()*5),
		Init:0,
		willing:false,
		Tags:["Human","Medium"],
		Cond:["Medium"]
	})
	/*
	0	Wall
	1	Forest	STARTER
	2	Forest	WOLF
	3	Forest	???
	
	4	Plains	WILD
	5	Plains	FARM
	6	Plains	???
	
	7	Trail	TRAIL
	8	Trail	ROAD
	9	Trail	DANGEROUS
	
	10	Bridge	SAFE
	11	Bridge	LIGHT
	12	Bridge	MEDIUM
	
	13	River	SAFE
	14	River	MEDIUM
	15	River	DANGEROUS
	
	16	Lake	SAFE
	17	Lake	SALTY - SHARK
	18	Lake	MURKY - SQUID	
	
	19	Beach	SAFE
	20	Beach	MEDIUM
	21	Beach	DANGEROUS
	
	22	CAVERN	Entrance	100		SAFE
	23	CAVERN	Entrance	050		SAFE		LIGHT	
	24	CAVERN	Entrance	025		SAFE/BOSS	MEDIUM
	
	25	CAVERN	RANDOM		AB/3	LIGHT
	26	CAVERN	RANDOM		AC/3	LIGHT
	27	CAVERN	RANDOM		BC/3	LIGHT
	
	28	CAVERN	LIGHT
	29	CAVERN	DROW
	30	CAVERN	SPIDER
	
	31	CAVERN	BOSS	LIGHT
	32	CAVERN	BOSS	MEDIUM
	33	CAVERN	BOSS	DANGEROUS
	
	34	COVE	SHARK	
	35	COVE	SQUID
	36	COVE	BOSS	DANGEROUS
	
	37	CAMP	WOLF	
	38	CAMP	?
	39	CAMP	?
	
	40	DUNG	WOLF	Entrance	
	41	DUNG	WOLF	Hallway
	42	DUNG	WOLF	BOSS
	
	43	DUNG	DROW	Entrance
	44	DUNG	DROW	Hallway
	45	DUNG	DROW	BOSS
	
	46	DUNG	HARP	Entrance
	47	DUNG	HARP	Hallway
	48	DUNG	HARP	BOSS
	-
	96	CANYON	HARPY
	97	WATERFALL
	98	
	99	START	SAFE
	*/
	//Grid to pick unselected zones.
	var i = 0;
	var o = 0;
	var i2 = 0;
	var o2 = 0;
	var wallToggle = true;

	var tile_temp = []
	var tile_wolf_old = [//NEW TILES TO MAKE 5,16,19
		//IS THE PATH BORDER SUPPOSED TO BE FOREST OR PLAINS??
		[ 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[ 1, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7,37, 7, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[ 1, 1, 4, 4, 4, 4, 7, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 5, 5, 5, 5, 5, 4],
		[ 1, 1, 4, 4, 4, 7, 4, 4, 4,28,28, 0, 0, 4, 4, 7, 4, 4, 4, 5, 5, 5, 5, 5, 4],
		[ 1, 1, 1, 4, 4, 7, 4, 4,28, 0, 0,28, 0, 0, 4, 4, 7, 4, 4, 5, 5, 8, 5, 5, 4],
		[ 1, 1, 1, 4, 4, 7, 4, 4,31, 0, 0,24, 0, 0, 4, 4, 7, 4, 4, 4, 4, 8, 4, 4, 4],
		[ 1, 1, 1, 4, 4, 4, 7, 4, 4, 0, 0,97, 0, 4, 4, 4, 7, 4, 4, 4, 4, 8, 4, 4, 4],
		[ 1, 1, 1, 4, 4, 4, 7, 4, 4, 4, 4,13, 4, 4, 4, 4, 4, 8, 8, 8, 8,37, 4, 4, 4],
		[ 1, 1, 1, 1, 4, 4, 4, 7, 4, 4, 4,13, 4, 4, 4, 4, 8, 4, 4, 4, 4, 8, 4, 4, 4],
		[ 1, 1, 1, 1, 4, 4, 4, 7, 4, 4, 4,13, 4, 4, 4, 4, 8, 4, 4, 4, 4, 8, 4, 4, 4],
		[ 1, 1, 1, 1, 4, 4, 4, 7, 0, 0, 4, 4,13,13, 4, 4, 8, 4,16,16,16,19, 8, 4, 4],
		[ 1, 1, 1, 1, 4, 7, 7, 0, 0, 0, 0, 0, 0, 2,13,13, 9,13,16,16,16,19, 4, 8, 4],
		[ 7, 7, 7, 7, 7, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 8, 2,16,16,16,19, 4,37, 8],
		[ 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 8, 2, 2,19,19,19, 4, 8, 4],
		[ 1, 1, 1, 1, 0, 0, 0, 2, 2, 8, 8, 2, 2, 2, 8, 8,37, 2, 2, 4, 4, 4, 8, 4, 4],
		[ 1, 1, 0, 0, 0, 0, 2, 2, 8, 2, 2, 8, 8, 8, 2, 2, 2, 2, 2, 4, 4, 8, 4, 4, 4],
		[ 1, 0, 0, 0, 0, 2, 2, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 8, 4, 4, 4],
		[ 1, 0,23, 2, 2, 2, 2,41,40,41, 2, 2, 2, 2, 2, 0,23, 0, 0, 4, 5, 5, 5, 4, 4],
		[ 1,28, 0, 2, 2, 2, 2,41,41,41, 2, 2, 2, 2, 2, 0,28, 0, 0, 4, 5, 5, 5, 4, 4],
		[ 1, 0,28,28, 2, 2, 2,41,42,41, 2, 2, 2, 2,28, 0,26, 0, 0, 4, 4, 7, 4, 4, 4],
		[ 1, 0, 0, 0,28,26, 2, 2, 2, 2, 2, 0,27,27, 0,28, 0, 0, 4, 4, 4, 7, 4, 4, 4],
		[ 1, 1,23,28, 0, 0,26, 0,23, 0,28,28, 0, 0, 0,22, 0, 4, 4, 7, 7, 4, 4, 4, 4],
		[ 1, 1, 0, 0,25, 0,28, 0, 0,28, 0, 0, 1, 1, 1, 7, 7, 7, 7, 1, 1, 4, 4, 4, 4],
		[ 1, 1, 1,27, 0,27, 0,28,28, 0,25, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	]
	var tile_wolf_v2_backup = [//NEW TILES TO MAKE 5,16,19
		//IS THE PATH BORDER SUPPOSED TO BE FOREST OR PLAINS??
		[ 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1], 
		[ 4, 4, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2,37, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
		[ 4, 4, 4, 0,28,28, 0,28,28, 2, 2, 2, 2, 2, 2, 2, 2, 2,41,41,41, 2, 2, 2, 2], 
		[ 4, 4, 4,28, 0, 0,28, 0, 0,25, 0, 2, 2, 2, 2, 2, 2, 2,41,42,41, 2, 2, 2, 2], 
		[ 4, 4,26, 0, 0, 0,25, 0,28, 0,26, 2, 2, 2, 2, 2, 2, 2,41,41,41, 2, 2, 2, 2], 
		[ 4, 4, 0,28,28,27, 0,26, 0,27, 2, 2, 2, 2, 2, 2, 2, 2,41,40,41, 2, 2, 2, 2], 
		[ 4, 4,25, 0, 0, 0,23, 0, 0,27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2], 
		[ 4, 4, 4, 4, 0, 0,97, 0,27, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2,37], 
		[ 4, 4, 4, 4, 4, 4,13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 2, 2, 2, 2], 
		[ 4, 4, 4,37, 4,13, 2, 2, 2, 2, 7, 7, 7, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2, 2, 2], 
		[ 4, 4, 4, 4, 4,13, 2, 2, 2, 7, 2, 2, 2, 7, 7, 7, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
		[ 4, 4, 7, 7, 7,10, 7, 7, 7, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2, 2, 1], 
		[ 7, 7, 4, 4, 4,13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2, 1, 1], 
		[ 4, 4, 4, 4, 4,13, 2, 2, 2, 2,28, 0, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2,37, 1, 1], 
		[ 4, 4, 4, 4, 4, 4,13, 2, 2,28, 0,28, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 1, 1, 1], 
		[ 4, 4, 4, 4, 4, 4,13, 2, 2, 0,28, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2, 1, 1, 1], 
		[ 4, 4, 4, 4,19,19,13,19,19,24, 0, 2, 2, 7, 7, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1], 
		[ 4, 4, 4,19,19,16,16,16,16, 0, 0, 2, 7, 2, 2, 2, 2, 2, 2, 0,28,24, 1, 1, 1], 
		[ 4, 4, 4,19,16,16,16,16,16, 0, 0, 2, 7, 2, 2, 0, 0, 0,23, 0, 0, 0, 1, 1, 1], 
		[ 4, 4, 4,19,16,16,16,16,16, 0, 0, 0,22, 0, 0,26,26,28, 0, 0, 0, 4, 1, 1, 1], 
		[ 4, 4, 4,19,16,16,16,19,19, 0, 0, 0, 0,28,26, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1], 
		[ 4, 4, 4,19,19,16,16,19, 4, 0, 0, 0,22, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
		[ 4, 4, 4, 4,19,19,19,19, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
	]
	var tile_wolf = [//NEW TILES TO MAKE 5,16,19
		//IS THE PATH BORDER SUPPOSED TO BE FOREST OR PLAINS??
		[ 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1], 
		[ 4, 4, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2,37, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
		[ 4, 4, 4, 0,28,28, 0,28,28, 2, 2, 2, 7, 2, 2, 2, 2, 2,41,41,41, 2, 2, 2, 2], 
		[ 4, 4, 4,28, 0, 0,28, 0, 0,25, 0, 7, 2, 2, 2, 2, 2, 2,41,42,41, 2, 2, 2, 2], 
		[ 4, 4,26, 0, 0, 0,25, 0,28, 0,26, 7, 2, 2, 2, 2, 2, 2,41,41,41, 2, 2, 2, 2], 
		[ 4, 4, 0,28,28,27, 0,26, 0,27, 2, 2, 7, 2, 2, 2, 2, 2,41,40,41, 2, 2, 2, 2], 
		[ 4, 4,25, 0, 0, 0,23, 0, 0,27, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2], 
		[ 4, 4, 4, 4, 0, 0,97, 0,27, 0, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 7, 7,37], 
		[ 4, 4, 4, 4, 4, 4,13, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 7, 7, 2, 7, 7, 2, 2, 2], 
		[ 4, 4, 4,37, 4,13, 2, 2, 2, 2, 7, 7, 7, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2, 2, 2], 
		[ 4, 4, 4, 7, 4,13, 2, 2, 2, 7, 2, 2, 2, 7, 7, 7, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
		[ 4, 4, 7, 4, 7,10, 7, 7, 7, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2, 2, 1], 
		[ 7, 7, 4, 4, 4,13, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2, 1, 1], 
		[ 4, 4, 4, 4, 4,13, 2, 2, 2, 7, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 7, 7,37, 1, 1], 
		[ 4, 4, 4, 4, 4, 4,13, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 7, 7, 2, 2, 1, 1, 1], 
		[ 4, 4, 4, 4, 4, 4,13, 2, 2, 2, 2, 7, 2, 2, 2, 7, 2, 7, 2, 2, 2, 2, 1, 1, 1], 
		[ 4, 4, 4, 4,19,19,13,19,19,19,19, 7, 2, 7, 7, 2, 0, 0, 2, 2, 0, 0, 1, 1, 1], 
		[ 4, 4, 4,19,19,16,16,16,16,16,19,37, 7, 2, 2, 2, 0, 0,23, 0, 0,24, 1, 1, 1], 
		[ 4, 4, 4,19,16,16,16,16,16,16,19, 7, 0, 0,23, 0, 0, 0,28, 0,28, 0, 1, 1, 1], 
		[ 4, 4, 4,19,16,16,16,16,16,19,19, 7, 0, 0, 0,28,28,28, 0,28, 0, 4, 1, 1, 1], 
		[ 4, 4, 4,19,16,16,16,19,19,19, 4, 7,23,28,28, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1], 
		[ 4, 4, 4,19,19,16,16,19, 4, 4, 4, 7, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], 
		[ 4, 4, 4, 4,19,19,19,19, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
	]
	var tile_start = [
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 1, 1, 1, 1, 1, 1, 1, 0,26, 0,25, 0, 0,23, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 0,23, 0,26, 0,28, 0,25, 0,28, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1,31, 0,28, 0,28, 0,22, 0,25,28, 0, 0,23, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1,27, 0, 0,28, 1, 1, 1, 1, 0, 0,28,28, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1,27,25, 1, 1, 1, 1, 1, 1,23, 0,26, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,28, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 7, 7, 1, 1, 1, 1, 1, 1, 1, 0,27, 0,23, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 7, 7, 1, 1, 7, 1, 1, 1, 1, 1, 1,27, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 7, 7, 7, 4, 4, 1, 1, 1, 7, 7, 7, 7,99, 1,27, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1,26,28,23, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1,26, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1,26, 0,26, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 1, 7, 1, 1, 1, 0, 0,26, 0,26, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 0,23, 0, 1, 7, 1, 1, 1,26,26, 0,26, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4,27,26,28,28, 0, 7, 1, 1, 7, 7, 7,26, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 0,28,28,25,27, 1, 7, 7, 1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 0,23, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 4, 4, 4, 4, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 7, 7, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
	]
	var tile_placeholder_easy = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1],
		[7,4,4,4,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1],
		[4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1],
		[4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,4,4,4,4,4,4,4,7,7,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,1]
	]
	var tile_placeholder_medium = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1],
		[7,4,4,4,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1],
		[4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1],
		[4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1],
		[4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,4,4,4,4,4,4,4,7,7,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,1,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,1,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,1,1],
		[4,4,4,4,4,4,4,4,4,4,4,4,7,4,4,4,4,4,4,4,4,4,4,4,1]
	]
	var tile_harpy_old = [
		[ 4, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1],
		[ 4, 4, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4		, 0, 0, 1, 1, 1		, 1, 1, 1, 0, 0		, 0, 0, 0, 0, 0		, 0, 0, 1, 1, 1],
		[ 4, 4, 4, 4, 4		, 0, 0, 0,96, 0		, 0, 0, 0, 0, 0		, 0, 0, 0, 0, 0		, 0, 0, 0, 1, 1],
		[ 4, 4, 4, 4, 4		, 0, 0, 0,96, 0		, 0, 0, 0, 0, 0		,96,96, 0, 0, 0		, 0, 0, 0, 1, 1],
		
		[ 4, 4, 4, 4, 4		, 0, 0, 0,96,96		,96,96,96, 0, 0		,96,96, 0, 0, 0		,96,96,96, 1, 1],
		[ 4, 4, 4, 4, 4		, 0, 0, 0,96,96		, 0, 0,96, 0, 0		,96,96,96,96,96		,96, 0, 0, 1, 1],
		[ 4, 4, 4, 4, 4		, 4, 0, 0,96, 0		, 0, 0,96,96,96		,96,96, 0, 0,96		, 0, 0, 0, 1, 1],
		[ 4, 4, 4, 4, 7		, 7,96,96,96, 0		, 0,96,96,96, 0		, 0,96, 0, 0,96		, 0, 0, 0, 1, 1],
		[ 4, 4, 4, 7, 0		,28, 0,96,96,96		,96,96,96,96, 0		, 0,96,96,96,96		, 0, 0, 1, 1, 1],
		
		[ 4, 4, 4, 7, 0		, 0, 0, 0,28,28		,28, 0, 0,96,96		,96,96, 0, 0,96		, 0, 0, 1, 1, 1],
		[ 4, 7, 7, 0, 0		, 0, 0,22, 0, 0		, 0,28, 0,96, 0		, 0, 0, 0, 0,96		, 0, 0, 1, 1, 1],
		[ 7, 4, 4, 0, 0		, 0,96,96,96,96		, 0,28, 0,96, 0		, 0, 0, 0, 0,96		, 0, 0, 1, 1, 1],
		[ 4, 7, 4, 0, 0		,96,96, 0, 0,96		,28, 0,96,96,96		, 0, 0, 0,96,96		,96,96, 1, 1, 1],
		[ 4, 7, 4, 0,22		,96,96, 0, 0,96		, 0,22,96,96,96		,96,96,96,96,96		, 0, 0, 1, 1, 1],
		
		[ 4, 7, 4,28, 0		,96,96,96,96,96		, 0, 0,96,96,96		,96, 0, 0, 0,96		, 0, 0, 1, 1, 1],
		[ 4, 4, 7,28, 0		,96,96,96,96,96		, 0, 0, 0,96, 0		, 0, 0, 0, 0,96		, 0, 0, 0, 1, 1],
		[ 4, 4, 7,28, 0		,96,96,96,96,96		, 0, 0, 0,96, 0		, 0, 0, 0, 0,96		, 0, 0, 0, 1, 1],
		[ 4, 4, 4, 7,28		,96,47,46,47,96		,22, 0,96,96,96		, 0, 0, 0, 4, 7		, 4, 0, 0, 1, 1],
		[ 4, 4, 4, 7,28		, 0,47,47,47,96		, 0, 0,96,96,96		,96, 0, 0, 4, 7		, 4, 0, 0, 1, 1],
		
		[ 4, 4, 4, 7, 0		,28,47,48,47, 0		, 0, 0,96, 0, 0		,96, 0, 0, 4, 7		, 4, 0, 0, 1, 1], 
		[ 4, 4, 4, 4, 7		, 0,23, 0, 0, 0		, 0, 4, 4, 0, 0		,96, 0, 0, 4, 7		, 4, 4, 4, 1, 1],
		[ 4, 4, 4, 4, 4		, 7, 7, 7, 7, 4		, 4, 4, 4, 4, 4		, 4, 0, 0, 4, 7		, 4, 4, 4, 4, 1],
		[ 4, 4, 4, 4, 4		, 4, 4, 4, 4, 7		, 7, 7, 4, 7, 7		, 7, 7, 7, 7, 4		, 4, 4, 4, 4, 1],
		[ 4, 4, 4, 4, 4		, 4, 4, 4, 4, 4		, 4, 4, 7, 4, 4		, 4, 4, 4, 4, 4		, 4, 4, 4, 4, 4],
	]
	
	var tile_harpy = [
		[ 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1],
		[ 4, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1		, 1, 1, 1, 1, 1],
		[ 4, 4, 1, 0, 0		, 0, 0, 0, 0, 1		, 0, 0, 0, 0, 0		, 0, 0, 0, 0, 0		, 0, 0, 1, 1, 1],
		[ 4, 4,28,28, 0		, 0, 0, 0, 0,96		, 0, 0, 0, 0, 0		, 0, 0, 0, 0, 0		, 0, 0, 0, 1, 1],
		[ 4, 4,28,28,23		,96,96,96,96,96		,96,96,96, 0, 0		,96,96,47,47,47		, 0, 0, 0, 1, 1],
		
		[ 4, 4,28,28, 0		, 0, 0,96, 0, 0		, 0, 0,96, 0, 0		,96,96,47,46,47		,48, 0, 0, 1, 1],
		[ 4, 4, 0, 0, 0		, 0, 0,96, 0, 0		, 0, 0,96,96,96		,96,96,96,96,47		,47, 0, 0, 1, 1],
		[ 4, 4, 0, 0, 0		, 0,96,96,96,96		, 0, 0,96, 0, 0		,96,96,96, 0, 0		, 0, 0, 0, 1, 1],
		[ 4, 4, 4, 4, 0		, 0,96, 0, 0,96		, 0, 0,96, 0, 0		, 0, 0,96, 0, 0		, 0, 0, 0, 1, 1],
		[ 4, 4, 7, 7,96		,96,96, 0, 0,96		, 0, 0,96, 0, 0		, 0, 0,96,96,96		,96, 0, 0, 1, 1],
		
		[ 4, 7, 4, 4,28		,28,96, 0, 0,96		,96,96,96,96,96		, 0, 0, 0, 0, 0		,96, 0, 0, 1, 1],
		[ 4, 7, 0, 0,28		,28,96, 0, 0,96		, 0, 0, 0, 0,96		, 0, 0, 0, 0, 0		,96, 0, 0, 1, 1],
		[ 7, 4, 0,28,28		,28,96, 0, 0,96		, 0, 0, 0, 0,96		,96,96,96,96,96		,96, 0, 0, 1, 1],
		[ 4, 4,23,28,28		,28,96, 0, 0,96		,96,96,96,96,96		, 0, 0,96, 0, 0		, 0, 0, 0, 1, 1],
		[ 4, 4, 0,28,28		,96,96,96,96,96		, 0, 0, 0,96, 0		, 0, 0,96, 0, 0		, 0, 0, 0, 1, 1],
		
		[ 4, 4, 0,28,28		,96, 0, 0, 0,96		, 0, 0, 0,96, 0		, 0, 0,96,96,96		,96, 0, 0, 1, 1],
		[ 4, 4, 4, 0, 0		,96, 0, 0, 0,96		,96,96,96,96,96		,96,96,96, 0, 0		,96, 0, 0, 1, 1],
		[ 4, 4, 4, 0, 0		,96,96,96,96,96		, 0, 0, 0, 0, 0		,96, 0, 0, 0, 0		,96,96,96, 1, 1],
		[ 4, 4, 4, 0, 0		, 0,96, 0, 0, 0		, 0, 0, 0, 0, 0		,96, 0, 0, 0, 0		,96, 0, 0, 1, 1],
		[ 4, 4, 4, 0, 0		, 0,96, 0, 0, 0		, 0, 0,96,96,96		,96,96, 0, 0,96		,96, 0, 0, 1, 1],
		
		[ 4, 4, 4, 4, 0		, 0,96,96,96,96		,96,96,96, 0, 0		, 0,96,96,96,96		, 0, 0, 0, 1, 1], 
		[ 4, 4, 4, 4, 0		, 0, 0, 0, 0, 0		, 0, 0,96, 0, 0		, 0, 0, 0, 0, 0		, 0, 0, 0, 1, 1],
		[ 4, 4, 4, 4, 0		, 0, 0, 0, 0, 0		, 0, 0,96, 0, 0		, 0, 0, 0, 0, 0		, 0, 0, 4, 4, 1],
		[ 4, 4, 4, 4, 4		, 4, 4, 4, 4, 4		, 4, 4, 7, 4, 4		, 4, 4, 4, 4, 4		, 4, 4, 4, 4, 4],
		[ 4, 4, 4, 4, 4		, 4, 4, 4, 4, 4		, 4, 4, 7, 4, 4		, 4, 4, 4, 4, 4		, 4, 4, 4, 4, 4],
	]
	var tile_drow = [
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 1, 1, 1, 1, 1, 1, 1, 1,29,29, 1, 1, 1, 1, 1, 0,29,29, 1, 1, 1, 1, 1, 1],
		[ 4, 1, 1, 1, 1, 1, 1,29,29, 0, 0,29, 1, 1, 1, 0,29, 0, 0,29, 1, 1, 1, 1, 1],
		[ 4, 4, 1,29,29,29,29, 0, 0,29, 0,29, 0,23, 0, 0,29, 0,29, 0,29,29,29, 1, 1],
		[ 4, 4,29,29,29,29,29, 0, 0,29, 0,29, 0,28, 0,29, 0, 0,29, 0, 0,29,29, 1, 1],
		[ 4, 4,29,29,29,29,29, 0, 0, 0,29, 0,29,29,29, 0, 0,29, 0,29, 0,29,29, 1, 1],
		[ 4, 4,29,29,29,29,29,29,29,29, 0, 0,29,29,29, 0, 0,29, 0, 0,29, 0, 1, 1, 1],
		[ 4, 4,29,29,29,29,29, 0, 0, 0, 0, 0,29,29,29, 0,29, 0, 0,29, 0, 0, 1, 1, 1],
		[ 4, 4,29,29,29,29,29, 0, 0, 0, 0,29, 0, 0, 0,29, 0,29, 0, 0,29,23, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 4,29,29,29, 0, 0,29,29, 0, 0,29, 0,29,29, 0, 0, 1, 1, 1],
		[ 4, 7, 7, 7, 7, 7, 4, 4, 0, 0,29, 0, 0, 0,29, 0, 0,29, 0, 0, 0, 0, 1, 1, 1],
		[ 7, 4, 4, 4, 4, 4, 7, 4, 0,25, 0, 0, 0,29, 0, 0, 0,29, 0, 0,29,29, 0, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 7, 4, 0,28, 0,28,27, 0, 0,29,29, 0,29,29, 0, 0,29, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 7, 4, 0, 0,28, 0, 0, 0,27, 0, 0,29, 0, 0,29,29,29, 1, 1],
		[ 4, 4,25, 0,26, 0,22, 0, 0,26, 0,26, 0,25, 0, 0,44,43,44, 0, 0,29,29, 1, 1],
		[ 4, 4,28, 0,28, 0,28, 0,28, 0, 0, 0,28, 0,28, 0,44,44,44,44, 0,29,29, 1, 1],
		[ 4, 4, 0,28, 0,28, 0,28, 0, 0, 0,28, 0,28, 0, 0,44,44,45,44, 0,29, 1, 1, 1],
		[ 4,31,28, 0,28, 0, 0,28, 0,28,28, 0, 0,28, 0, 0, 0,44,44, 0, 0,29, 1, 1, 1],
		[ 4, 0, 0, 0,28, 0,28, 0,28, 0, 0,28, 0,22, 0, 0, 0, 0, 0, 0, 0,29, 1, 1, 1],
		[ 4,23,28,28, 0, 0,28, 0, 0,28,28, 0, 4, 7, 4, 0,29,29,29,29,29, 1, 1, 1, 1],
		[ 4, 0, 0, 0,28,28, 0,28,28, 0, 4, 4, 4, 7, 4, 0,29,29,29, 4, 4, 1, 1, 1, 1],
		[ 4, 0, 0,28, 0, 0,23, 0, 0, 4, 4, 4, 4, 7, 4, 4, 0, 0, 4, 4, 4, 1, 1, 1, 1],
		[ 4, 0, 0,31, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1]
	]
	var tile_start_TESTING = [
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 1, 1, 1, 1, 1, 1, 1, 1,29,29, 1, 1, 1, 1, 1, 0,29,29, 1, 1, 1, 1, 1, 1],
		[ 4, 1, 1, 1, 1, 1, 1,29,29, 0, 0,29, 1, 1, 1, 0,29, 0, 0,29, 1, 1, 1, 1, 1],
		[ 4, 4, 1,29,29,29,29, 0, 0,29, 0,29, 0,23, 0, 0,29, 0,29, 0,29,29,29, 1, 1],
		[ 4, 4,29,29,29,29,29, 0, 0,29, 0,29, 0,29, 0,29, 0, 0,29, 0, 0,29,29, 1, 1],
		[ 4, 4,29,29,29,29,29, 0, 0, 0,29, 0,29,29,29, 0, 0,29, 0,29, 0,29,29, 1, 1],
		[ 4, 4,29,29,29,29,29,29,29,29, 0, 0,29,29,29, 0, 0,29, 0, 0,29, 0, 1, 1, 1],
		[ 4, 4,29,29,29,29,29, 0, 0, 0, 0, 0,29,29,29, 0,29, 0, 0,29, 0, 0, 1, 1, 1],
		[ 4, 4,29,29,29,29,29, 0, 0, 0, 0, 0, 0, 0, 0,29, 0,29, 0, 0,29,23, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 4,29,29,29, 0, 0,29,29, 0, 0,29, 0,29,29, 0, 0, 1, 1, 1],
		[ 4, 7, 7, 7, 7, 7, 4, 4, 0, 0,29, 0,22, 0,29, 0, 0,29, 0, 0, 0, 0, 1, 1, 1],
		[ 7, 4, 4, 4, 4, 4, 7, 4, 0,25, 0, 0,99,29,29, 0, 0, 0,29, 0,29,29, 0, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 7, 4, 0,28, 0, 0, 0, 0, 0,29,29, 0,29,29, 0, 0,29, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 7, 4, 0, 0,28, 0, 0, 0, 0, 0, 0,29, 0, 0,29,29,29, 1, 1],
		[ 4, 4,25, 0,26, 0,22, 0, 0,26, 0,26, 0,25, 0, 0,44,43,44, 0, 0,29,29, 1, 1],
		[ 4, 4,28, 0,28, 0,28, 0,28, 0, 0, 0,28, 0,28, 0,44,44,44,44, 0,29,29, 1, 1],
		[ 4, 4, 0,28, 0,28, 0,28, 0, 0, 0,28, 0,28, 0, 0,44,44,45,44, 0,29, 1, 1, 1],
		[ 4,31,28, 0,28, 0, 0,28, 0,28,28, 0, 0,28, 0, 0, 0,44,44, 0, 0,29, 1, 1, 1],
		[ 4, 0, 0, 0,28, 0,28, 0,28, 0, 0,28, 0,22, 0, 0, 0, 0, 0, 0, 0,29, 1, 1, 1],
		[ 4,23,28,28, 0, 0,28, 0, 0,28,28, 0, 4, 7, 4, 0,29,29,29,29,29, 1, 1, 1, 1],
		[ 4, 0, 0, 0,28,28, 0,28,28, 0, 4, 4, 4, 7, 4, 0,29,29,29, 4, 4, 1, 1, 1, 1],
		[ 4, 0, 0,28, 0, 0,23, 0, 0, 4, 4, 4, 4, 7, 4, 4, 0, 0, 4, 4, 4, 1, 1, 1, 1],
		[ 4, 0, 0,31, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1]
	]
	/*
	GRID VALUES
	//MUST STAY IN CENTER. TRACK LOCATION TO AVOID MID BOSSES
	0:START		
	
	1:WOLF		2:SPIDER	3:HARPY
	4:DROW		5:PLANT		6:SQUID		7:FAIRY		
	
	//CANT BE ADJACENT TO START
	8:SHARK		9:CENTAUR	10:NAGA		11:Tiger		
	
	//CORNER
	12:DRAGON	13:KRAKEN	14:ANGEL	15:DEMON
	
	
	//*/
	var Tier1 = shuffle([1,2,3,4,5,6,7])
	var Tier2 = shuffle([8,9,10,11])
	var Tier3 = shuffle([12,13,14,15])
	
	Tier1 = [9,9,9,3,9,4,1]
	
	var grid = [
		[Tier3[0],Tier1[0],Tier1[1],Tier3[1]],
		[Tier1[2],       0,Tier1[3],Tier2[0]],
		[Tier1[4],Tier1[5],Tier1[6],Tier2[1]],
		[Tier3[3],Tier2[2],Tier2[3],Tier3[2]]
	]
	
	
	grid = [
		[9,9,9,9],
		[9,0,1,9],
		[9,4,3,9],
		[9,9,9,9]
	]
	//LogEntry(shuffle([1,2,3,4,5,6,7,8,9,10]))
	//RANDOMIZE grid HERE. Tiles can only swap with EQUAL VALUE tiles
	//Randomize 1-7		8-11	12-15
	const mapSize = 100//100
	
	
	map = []
	i = 0;
	while(i < mapSize){//100
		map[i] = []
		o = 0;
		while(o < mapSize){//100
			map[i][o] = 0
			o++
		}
		i++
	}
	//map = tile_start
		
	i2 = 0;
	while(i2 < grid.length){
		o2 = 0
		while(o2 < grid.length){
			tile_temp = []
			if(grid[i2][o2] == 0){
				tile_temp = tile_start;party.y = (i2*25)+12;party.x = (o2*25)+12;
				//tile_temp = tile_start_TESTING;party.y = (i2*25)+12;party.x = (o2*25)+12;
			}
			if(grid[i2][o2] == 1){
				tile_temp = tile_wolf
				//tile_temp = tile_drow
			}
			if(grid[i2][o2] == 3){
				tile_temp = tile_harpy
				//tile_temp = tile_drow
			}
			if(grid[i2][o2] == 4){
				tile_temp = tile_drow
				//tile_temp = tile_placeholder_easy
			}
			
			/*//THIS IS THE REAL ONE WHEN MAP IS NORMAL SIZED!!!
			if(tile_temp.length > 0){
				if((i2==1&&o2===1)||(i2==2&&o2===3)||(i2==3&&o2===2)){
					tile_temp = TileRotate(tile_temp,1)
				}
				if((i2==1&&o2===2)||(i2==2&&o2===0)||(i2==3&&o2===1)){
					tile_temp = TileRotate(tile_temp,2)
				}
				if((i2==0&&o2===1)||(i2==1&&o2===0)||(i2==2&&o2===2)){
					tile_temp = TileRotate(tile_temp,3)
				}
				if((i2==0&&o2===2)||(i2==1&&o2===3)||(i2==2&&o2===1)){
					tile_temp = TileRotate(tile_temp,4)
				}
			}
			//*/
			if(tile_temp.length > 0){//THIS IS JUST FOR THE SMALLER MAP!!!!!
				if((i2==1&&o2===1)){
					tile_temp = TileRotate(tile_temp,3)
				}
				if((i2==1&&o2===2)){
					tile_temp = TileRotate(tile_temp,4)
				}
				if((i2==2&&o2===2)){
					tile_temp = TileRotate(tile_temp,1)
				}
				if((i2==2&&o2===1)){
					tile_temp = TileRotate(tile_temp,2)
				}
			}
			i = 0
			while(i < 25){
				o = 0
				while(o < 25){
					if(tile_temp.length > 0){
						map[(i2*25)+i][(o2*25)+o] = tile_temp[i][o]
						//Logbook += "<br>"+map[(i2*25)+i][(o2*25)+o]
						//LogEntry("MAPCHANGE: "+)
					}
					o++
				}
				i++
			}
		
		o2++
		}
		i2++
	}
	if(Math.random()<.5){
		map.reverse()
		party.y += 25;
	}
	if(Math.random()<.5){ 
		i = 0
		while(i < map.length){
			map[i].reverse()  
			i++;
		}
		party.x += 25;
	}
	
	
	i = 0
	while(i<100){
		o=0
		while(o<100){
			if(map[i][o]<10){
			Logbook+="_"
			}
			Logbook+=(map[i][o]+"")
			o++
		}
		Logbook+="<br>"
		i++
	}
	map[party.y][party.x] = {name:"My Hut",units:[],hostile:false,clr:"#ccbb77",tag:"Indoors"};
	if(map[party.y+1][party.x+0] == 1){map[party.y+1][party.x+0] = {tag:"Forest",name:"Peaceful Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y+1][party.x+1] == 1){map[party.y+1][party.x+1] = {tag:"Forest",name:"Quiet Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y+0][party.x+1] == 1){map[party.y+0][party.x+1] = {tag:"Forest",name:"Pleasant Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y-1][party.x+1] == 1){map[party.y-1][party.x+1] = {tag:"Forest",name:"Peaceful Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y-1][party.x+0] == 1){map[party.y-1][party.x+0] = {tag:"Forest",name:"Quiet Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y-1][party.x-1] == 1){map[party.y-1][party.x-1] = {tag:"Forest",name:"Pleasant Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y+0][party.x-1] == 1){map[party.y+0][party.x-1] = {tag:"Forest",name:"Peaceful Forest",units:[],hostile:false,clr:"#77cc55"};}
	if(map[party.y+1][party.x-1] == 1){map[party.y+1][party.x-1] = {tag:"Forest",name:"Quiet Forest",units:[],hostile:false,clr:"#77cc55"};}
	
	Logbook = ""//remove to debug map!
	Walk(0,0);
	LogEntry("<b><u><div style='font-size:150%;'>INTRODUCTION</div></u></b>I woke up in a strange land full of monstergirls. I must start anew in this dangerous world and try to survive. Maybe I should find a way to make companions, and later get something to eat. Or, maybe, <i>someone</i> to eat! Either way, I can't stay in this tiny hut forever..."
	+"<b><u><br><br><div style='font-size:150%;'>WARNING</div></u></b>This game's focus is on eating and fucking monster-girls, but it also contains some gore and cruel deaths. Proceed only if you are willing and legal to!"
	// As I look through a window at the trees outside I decide that my new quest in this world will be to gobble down the Demon Queen, the tastiest monstergirl of them all!
	+"<br><br><div style='font-size:150%;'><b><u>QUICK GUIDE</u></b></div>"
	+"Select a character you control, select an action, select a target. During combat, characters go in an initiative order."
	+"<br><br>Fight: Hurt a character."
	+"<br>Flirt: Make a character horny."
	+"<br>Flee: Attempt to escape the fight through a hostile character. Stat is also used for combat initiative."
	+"<br>Feast: Attempt to feast on a character. Stats increase based on preys Feed stat."
	+"<br>Fuck: Attempt to fuck a character. Girls fucked by the protagonist become loyal. Sex with protagonist heals both."
	+"<br>Feed: Willing character will feed another. Stat increases are based on Feed stat of consumed character."
	+"<br><br>Hurt: How easy the character is to eat/kill. Threshold increased by fucking allies."
	+"<br>Horny: How interested the character is in sex, even while hostile."
	+"<br>Hungry: Protagonist only. Can't Fuck when its full, can't Feast when its empty."
	+"<br><br>Navigation: click on any of the <i>eight</i> surrounding locations on the top map."
	+"<br><br><b><u>VERSION .4</u></b>"
	+"<br>Four of sixteen zones currently available.<br>Latest addition: Drow Caves."
	)	
}
function TileRotate(tile_temp,Direction){
	var i = 0
	var o = 0;
	var tile_new = []
	
	if(Math.random()<.5){//NOT SURE THIS IS WORKING RIGHT??
		while(i < 25){
			tile_new[i] = [];
			o = 0
			while(o < 25){
				tile_new[i][o] = tile_temp[o][i]	
				o++;
			}
			i++
		}
		tile_new.reverse()  
		i = 0
		while(i < 25){
			tile_new[i].reverse()  
			i++;
		}
	}else{
		tile_new = tile_temp
	}
	if(Direction == 1){
		tile_new.reverse()  
	}
	if(Direction == 2){
		tile_new.reverse()  
		i = 0
		while(i < 25){
			tile_new[i].reverse()  
			i++;
		}
	}
	if(Direction == 3){ 
		i = 0
		while(i < 25){
			tile_new[i].reverse()  
			i++;
		}
	}
	//4 can stay the same!!
	
	
	return tile_new.splice(0)
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
//TODO:randomEntry
function randomEntry(Entry){
	//REBUILD THIS TO AVOID DUPLICATES SOMEHOW
	var Entrys = [];
	
	
	if(storedRandomEntry[Entry] != undefined){
		if(storedRandomEntry[Entry].length > 0){
			Entrys = storedRandomEntry[Entry].splice(Math.floor(Math.random()*storedRandomEntry[Entry].length),1)
			//LogEntry("Remaining Entries:"+storedRandomEntry[Entry])
		}
	}
	if(Entrys.length == 0){
		if(Entry == "Backstory"){
			Entrys.push("I wake up in a strange land full of monstergirls! I must start anew in this dangerous world and try to survive. I should find a way to make companions, and later get something to eat, or maybe someone to eat! As I look through a window at the trees outside I decide that my new quest in this world will be to gobble down the Demon Queen, the tastiest monstergirl of them all!")
		}
		else if(Entry == "Walk"){Entrys = ["traveled","traveled","traveled","traveled","traveled","hiked","hiked","walked","walked","skipped merrily","trekked","wandered","trudged","set forth", "meandered"]}
		else if(Entry == "WalkInside"){Entrys = ["explored","wandered","walked slowly","crept","lurked","creeped","tiptoed","cautiously walked","spelunked","delved","dredged"]}
		else if(Entry == "Asleep"){Entrys = [" continues to sleep."," continues to sleep."," continues to sleep."," continues to sleep."," continues to sleep."," continues to sleep."," is too tired to move.","'s snoring is louder than the fight!"," doesn't look like she's waking up yet."," rolls over to her other side, drool is running down her face."," toots in her sleep, how embarrassing!"," is cuddling a pillow! Where the heck did she find that!"," mumbles in her sleep."," is pouting in her sleep, she looks too cute!"," sleeps with her tongue lolled out."]}
		else if(Entry == "HostileDesc"){Entrys = ["angry","angry","angry","angry", "pissed off","hostile","grumpy","fierce","scary","terrifying","reasonably upset","outraged"]}
		else if(Entry == "River"){Entrys = ["Rushing River","Slow River","Shallow River","Deep River","Meandering River","Murky River","Bubbling River"]}
		else if(Entry == "Cliff"){Entrys = ["Steep Cliff","Muddy Cliff","Towering Cliff","Jagged Cliff"]}
		//else if(Entry == "Cliffhit" && party.units.length > 1){Entrys = ["My ANY looks at me as if I'm an idiot when I fail to climb the cliff.","I fail to climb the cliff while my ANY rolls on the ground laughing at me.","My ANY catches me when I fall after trying to climb the cliff.","My ANY tells me we should go a different way when I point up the cliff."]}
		else if(Entry == "Canyon"){Entrys = ["Shady Canyon","Sunny Canyon","Dry Canyon","Crumbling Canyon","Muddy Canyon","Rocky Canyon","Eroded Canyon","Dusty Canyon","Narrow Canyon","Steep Canyon","Overgrown Canyon"]}
		else if(Entry == "Cliffhit"){Entrys = ["The game designer laughs from above as I fail to climb a simple cliff!","Fuck climbing!","I'm afraid of heights!","It's too steep for me!","That cliff is too tall!","I should go another way!","Theres no way I can climb that!","I look around for some rope and pitons, and don't find either. I guess I better try another way.","My health insurance doesn't cover climbing related incidents, I better try another way!"]}
		else if(Entry == "Forest"){Entrys = ["Misty Forest", "Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Peaceful Forest","Quiet Forest","Pleasant Forest","Sunny Forest"]}
		else if(Entry == "ForestWolf"){Entrys = ["Logged Cutover","Logged Cutover","Logged Cutover","Logged Cutover","Misty Forest", "Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Peaceful Forest","Quiet Forest","Pleasant Forest","Sunny Forest"]}
		else if(Entry == "Plains"){Entrys = ["Grassy Plains","Grassy Plains","Peaceful Plains","Muddy Plains","Pleasant Plains","Hilly Plains"]}
		else if(Entry == "Cave"){Entrys = ["Cold Cave","Chilly Cave","Muddy Cave","Dirty Cave","Narrow Cave","Grimy Cave","Grubby Cave","Warm Cave","Misty Cave","Jagged Cave","Crumbling Cave","Overgrown Cave","Cozy Cave","Eroded Cave","Quiet Cave","Twisting Cave","Echoing Cave","Mossy Cave","Stuffy Cave","Creepy Cave ","Spooky Cave","Gloomy Cave"]}
		
		else if(Entry == "CaveDrowSmall"){Entrys = ["Carved Tunnel","Stone Tunnel","Smooth Tunnel","Muddy Tunnel","Grimy Tunnel","Crumbling Tunnel","Carved Tunnel","Crumbling Stairway","Carved Stairway"]}
		else if(Entry == "CaveDrowSecondary"){Entrys = ["Stone Hallway","Stone Chamber","Carved Hallway","Carved Chamber","Ruined Shrine","Dusty Alter","Crumbling Statue","Headless Statue","Maze of Catacombs","Abandoned Mine","Crumbling Mine","Bloody Mine","Spacious Cavern","Ransacked Library","Dusty Library","Charred Library","Unmarked Tomb","Ransacked Crypt","Dusty Courtyard"]}
		else if(Entry == "CaveDrowSecondaryOccupied"){Entrys = ["Stone Hallway","Stone Chamber","Carved Hallway","Carved Chamber","Pristine Shrine","Bloody Alter","Unfinished Statue","Onyx Statue","Maze of Catacombs","Crystal Mine","Gem Mine","Ore Mine","Spacious Cavern","Elegant Library","Spacious Library","Ornate Tomb","Unfinished Crypt","Guardpost","Marble Courtyard"]}
		else if(Entry == "CaveDrowMain"){Entrys = ["Underground City","Underground City","Underground City","Underground City","Underground City","Underground Farm","Underground Fortress","Underground Stronghold","Underground Monument","Underground Ruins","Underground Temple"]}

		else if(Entry == "TrailMain"){Entrys = ["Dirt Trail","Dirt Trail","Muddy Trail","Rocky Trail","Worn Trail","Dusty Trail","Narrow Trail","Wide Trail","Faded Trail","Rutted Trail","Overgrown Trail"]}
		else if(Entry == "TrailExtra"){Entrys = ["Eroded Trail","Muddy Trail","Steep Trail"]}
		else if(Entry == "RoadMain"){Entrys = ["Cobblestone Road","Cobblestone Road","Brick Road","Smooth Road","Fence-Lined Road","Crumbling Road","Muddy Road","Narrow Road","Wide Road"]}
		else if(Entry == "RoadExtra"){Entrys = ["Crumbling Road","Muddy Road","Steep Road"]}
		else if(Entry == "Road"){Entrys = ["Cobblestone Road","Cobblestone Road","Cobblestone Road","Cobblestone Road","Fencelined Road","Crumbling Road","Muddy Road","Narrow Road"]}
		
		
		else if(Entry == "BunnyForest"){Entrys = ["Sunny Forest","Sunny Forest","Sunny Forest","Sunny Forest","Sunny Forest","Sunny Forest","Bubbling Spring", "Shady Clearing", "Sunny Clearing","Flowery Clearing", "Cozy Burrow","Cozy Burrow",(choose(["Rundown ","Shabby ","Tidy ","Sturdy ","Log ","Brick ","Stone ","Old "])+choose(["Cottage","Cabin","Hut","House"])),(choose(["Giant ","Towering ","Massive ","Colossal ","Great "])+choose(["Oak","Pine","Maple","Cedar","Birch","Redwood","Apple-Tree"]))]}
		else if(Entry == "BunnyDesc"){Entrys = ["Perky Bunnygirl","Buck-toothed Bunnygirl","Green-Eyed Bunnygirl","Blue-Eyed Bunnygirl","Flat-Chested Bunnygirl","Stacked Bunnygirl","Busty Bunnygirl","Petite Bunnygirl","Long-Eared Bunnygirl","Short-Eared Bunnygirl","Droopy-Eared Bunnygirl","Short Bunnygirl","Speckled Bunnygirl","Pink Bunnygirl","Black-Pawed Bunnygirl"]}
		else if(Entry == "NegativeBunnygirl"){Entrys = ["Pudgy Bunnygirl","Sleepy Bunnygirl","Chubby Bunnygirl","Fat-Bottomed Bunnygirl","Thick Bunnygirl"]}
		else if(Entry == "FunnyBunnygirl"){Entrys = ["Fat-Bottomed Bunnygirl","Flat-Chested Bunnygirl","Notch-Eared Bunnygirl","Droopy-Eared Bunnygirl","Buck-toothed Bunnygirl"]} 
		else if(Entry == "HungryBunnygirl"){Entrys = ["Pudgy Bunnygirl","Chubby Bunnygirl","Fat-Bottomed Bunnygirl","Curvy Bunnygirl","Thick Bunnygirl","Stacked Bunnygirl"]}
		
		else if(Entry == "DeerForest"){Entrys = ["Sunny Forest","Sunny Forest","Sunny Forest","Sunny Forest","Sunny Forest","Sunny Forest","Bubbling Spring", "Shady Clearing", "Sunny Clearing","Flowery Clearing",(choose(["Giant ","Towering ","Massive ","Colossal ","Great "])+choose(["Oak","Pine","Maple","Cedar","Birch","Redwood","Apple-Tree"]))]}
		else if(Entry == "DeerDesc"){Entrys = ["Perky Deergirl","Green-Eyed Deergirl","Blue-Eyed Deergirl","Flat-Chested Deergirl","Stacked Deergirl","Busty Deergirl","Petite Deergirl","Long-Eared Deergirl","Short-Eared Deergirl","Tall Deergirl","Speckled Deergirl","Black-Pawed Deergirl"]}
		else if(Entry == "NegativeDeergirl"){Entrys = ["Pudgy Deergirl","Chubby Deergirl","Fat-Bottomed Deergirl","Thick Deergirl"]}
		else if(Entry == "FunnyDeergirl"){Entrys = ["Fat-Bottomed Deergirl","Flat-Chested Deergirl"]} 
		else if(Entry == "HungryDeergirl"){Entrys = ["Pudgy Deergirl","Chubby Deergirl","Fat-Bottomed Deergirl","Curvy Deergirl","Thick Deergirl","Stacked Deergirl"]}
		
		else if(Entry == "MouseDesc"){Entrys = ["Perky Mousegirl","Curvy Mousegirl","Buck-toothed Mousegirl","Hairless Mousegirl","Flat-Chested Mousegirl","Petite Mousegirl","Big-Eared Mousegirl","Small-Eared Mousegirl","Short-Tailed Mousegirl","Speckled Mousegirl","Pale Mousegirl","Slim Mousegirl","Slender Mousegirl","Skittish Mousegirl","Fanged Mousegirl"]}
		else if(Entry == "NegativeMousegirl"){Entrys = ["Skittish Mousegirl","Timid Mousegirl","Nervous Mousegirl","Dirty Mousegirl"]}
		else if(Entry == "HungryMousegirl"){Entrys = ["Fat Mousegirl","Chubby Mousegirl","Fat-Bottomed Mousegirl","Curvy Mousegirl"]}
		
		else if(Entry == "CatForest"){Entrys = ["Blooming Forest","Blooming Forest","Blooming Forest","Blooming Forest","Blooming Forest","Blooming Forest","Flowery Clearing", "Treehouse", "Shady Clearing",(choose(["Giant ","Towering ","Massive ","Colossal ","Great "])+choose(["Oak","Pine","Maple","Cedar","Birch","Redwood","Apple-Tree"]))]}
		else if(Entry == "CatDesc"){Entrys = ["Green-Eyed Catgirl","Blue-Eyed Catgirl","Purple-Eyed Catgirl","Flat-Chested Catgirl","Stacked Catgirl","Busty Catgirl","Perky Catgirl","Long-Tailed Catgirl","Bushy-Tailed Catgirl","Fluffy-Eared Catgirl","Short Catgirl","Slender Catgirl","Curvy Catgirl","Blue Catgirl"]}
		else if(Entry == "SluttyCatgirl"){Entrys = ["Perky Catgirl","Busty Catgirl","Naughty Catgirl"]}
		else if(Entry == "HungryCatgirl"){Entrys = ["Sabre-Toothed Catgirl","Stacked Catgirl","Long-Fanged Catgirl"]}
		
		else if(Entry == "FoxForest"){Entrys = ["Lush Forest","Lush Forest","Lush Forest","Lush Forest","Lush Forest","Lush Forest", "Sunny Pond","Bubbling Spring","Treehouse",(choose(["Rundown ","Shabby ","Tidy ","Sturdy ","Log ","Brick ","Stone ","Old "])+choose(["Cottage","Cabin","Hut","House"])), "Shady Clearing",(choose(["Giant ","Towering ","Massive ","Colossal ","Great "])+choose(["Oak","Pine","Maple","Cedar","Birch","Redwood","Apple-Tree"]))]}
		else if(Entry == "FoxDesc"){Entrys = ["Silver-Eyed Foxgirl","Blue-Eyed Foxgirl","Gold-Eyed Foxgirl","Flat-Chested Foxgirl","Busty Foxgirl","Stacked Foxgirl","Perky Foxgirl","White-Tailed Foxgirl","White-Eared Foxgirl","Black-Eared Foxgirl","Long-Eared Foxgirl","Short Foxgirl","Voluptuous Foxgirl","Curvy Foxgirl","Silver Foxgirl"]}
		else if(Entry == "HungryFoxgirl"){Entrys = ["Stacked Foxgirl","Chubby Foxgirl","Long-Fanged Foxgirl","Voluptuous Foxgirl","Curvy Foxgirl"]}
		else if(Entry == "PositiveFoxgirl"){Entrys = ["Alpha Foxgirl","Long-Fanged Foxgirl"]}
		
		else if(Entry == "WolfForest"){Entrys = [choose(["Misty Forest", "Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Quiet Forest", "Sunny Pond","Bubbling Spring","Shady Clearing"]),(choose(["Rundown ","Shabby ","Tidy ","Sturdy ","Log ","Brick ","Stone ","Old "])+choose(["Cottage","Cabin","Hut","House"]))]}
		else if(Entry == "WolfDesc"){Entrys = ["Red-Eyed Wolfgirl","Grey-Eyed Wolfgirl","Black-Eyed Wolfgirl","Flat-Chested Wolfgirl","Busty Wolfgirl","Stacked Wolfgirl","Perky Wolfgirl","Black-Tailed Wolfgirl","White-Eared Wolfgirl","Black-Eared Wolfgirl","Long-Fanged Wolfgirl","Muscular Wolfgirl","Tough Wolfgirl","Stern Wolfgirl","Curvy Wolfgirl","Pitch-Black Wolfgirl","Tall Wolfgirl","Buff Wolfgirl"]}
		else if(Entry == "PositiveWolfgirl"){Entrys = ["Alpha Wolfgirl","Scarred Wolfgirl"]}
		
		else if(Entry == "FrogForest"){Entrys = ["Muddy Forest","Muddy Forest","Muddy Forest", "Murky Pond", "Sunny Pond", "Bubbling Spring", "Shady Clearing"]}
		else if(Entry == "FrogDesc"){Entrys = ["Orange-Eyed Froggirl","Blue-Eyed Froggirl","Purple-Eyed Froggirl","Flat-Chested Froggirl","Perky Froggirl","Pale Froggirl", "Glistening Froggirl", "Slick Froggirl","Slimy Froggirl","Spotted Froggirl","Striped Froggirl","Slim Froggirl","Slender Froggirl","Petite Froggirl","Short Froggirl","Fat-Bottomed Froggirl", "Chubby Froggirl","Purple Froggirl"]}
		else if(Entry == "HungryFroggirl"){Entrys = ["Plump Froggirl","Fat-Bottomed Froggirl","Curvy Froggirl","Thick Froggirl","Stacked Froggirl"]}
		else if(Entry == "PositiveFroggirl"){Entrys = ["Muscular Froggirl","Fit Froggirl"]}
		
		else if(Entry == "BatForest"){Entrys = ["Gloomy Forest","Gloomy Forest","Gloomy Forest","Gloomy Forest","Gloomy Forest","Gloomy Forest", "Shady Clearing"]}
		else if(Entry == "BatDesc"){Entrys = ["Green-Eyed Batgirl","Blue-Eyed Batgirl","Purple-Eyed Batgirl","Flat-Chested Batgirl","Busty Batgirl","Perky Batgirl","Swift Batgirl","Agile Batgirl","Fluffy-Eared Batgirl","Fuzzy Batgirl","Slender Batgirl","Curvy Batgirl","Pale Batgirl"]}
		//else if(Entry == "FunnyBatgirl"){Entrys = ["Snarky Batgirl","Cruel Batgirl","Sneaky Batgirl","Clever Batgirl"]}
		else if(Entry == "SluttyBatgirl"){Entrys = ["Perky Batgirl","Busty Batgirl"]}
		else if(Entry == "HungryBatgirl"){Entrys = ["Long-Fanged Batgirl"]}
		else if(Entry == "PositiveBatgirl"){Entrys = ["Long-Fanged Batgirl","Fit Batgirl"]}
		
		else if(Entry == "HarpyCanyon"){Entrys = ["Sunny Canyon","Dry Canyon","Crumbling Canyon","Rocky Canyon","Dusty Canyon","Steep Canyon"]}
		else if(Entry == "HarpyDesc"){Entrys = ["Green-Eyed Harpygirl","Blue-Eyed Harpygirl","Purple-Eyed Harpygirl","Flat-Chested Harpygirl","Busty Harpygirl","Perky Harpygirl","Swift Harpygirl","Agile Harpygirl","Long-Feathered Harpygirl","Short-Feathered Harpygirl","Slender Harpygirl","Curvy Harpygirl","Voluptuous Harpygirl"]}
		else if(Entry == "SluttyHarpygirl"){Entrys = ["Perky Harpygirl","Busty Harpygirl"]}
		else if(Entry == "PositiveHarpygirl"){Entrys = ["Muscular Harpygirl","Fit Harpygirl"]}
		
		else if(Entry == "SlimeDesc"){Entrys = ["Red Slimegirl","Blue Slimegirl","Yellow Slimegirl","Green Slimegirl","Purple Slimegirl","Orange Slimegirl"]}
		
		else if(Entry == "DrowDesc"){Entrys = ["Mohawked Drowgirl","Braided Drowgirl","Wavy-Haired Drowgirl","Spiky-Haired Drowgirl","Short-Haired Drowgirl","Silver-Haired Drowgirl","Curly-Haired Drowgirl","Long-Haired Drowgirl","Bald Drowgirl","Scarred Drowgirl","Slim Drowgirl","Slender Drowgirl","Petite Drowgirl","Short Drowgirl","Fit Drowgirl","Lithe Drowgirl","Lean Drowgirl","Flat-Chested Drowgirl","Busty Drowgirl","Stacked Drowgirl","Muscular Drowgirl","Curvy Drowgirl","Tall Drowgirl","Toned Drowgirl"]}
		else if(Entry == "PositiveDrowgirl"){Entrys = ["Handsome Drowgirl","White-Eyed Drowgirl","Silver-Eyed Drowgirl","Gold-Eyed Drowgirl","Tattooed Drowgirl"]}
		else if(Entry == "NegativeDrowgirl"){Entrys = ["Pudgy Drowgirl","Chubby Drowgirl","Tattooed Drowgirl","Thick Drowgirl"]}
		else if(Entry == "FunnyDrowgirl"){Entrys = ["Messy-Haired Drowgirl","Twintailed Drowgirl","Scarred Drowgirl","Notch-Eared Drowgirl","Tattooed Drowgirl"]}
		else if(Entry == "SluttyDrowgirl"){Entrys = ["Handsome Drowgirl","Perky Drowgirl","Tattooed Drowgirl"]}
		else if(Entry == "HungryDrowgirl"){Entrys = ["Pudgy Drowgirl","Chubby Drowgirl","Fat-Bottomed Drowgirl","Thick Drowgirl","Tattooed Drowgirl"]}
		
		else if(Entry == "GoblinDesc"){Entrys = ["Mohawked Goblingirl","Spiky-Haired Goblingirl","Bald Goblingirl","Big-Eared Goblingirl","Short-Eared Goblingirl","Long-Eared Goblingirl","Big-Nosed Goblingirl","Flat-Nosed Goblingirl","Long-Nosed Goblingirl","Fat-Bottomed Goblingirl","Thick Goblingirl","Busty Goblingirl","Gross Goblingirl","Pudgy Goblingirl","Plump Goblingirl","Fat Goblingirl","Chubby Goblingirl","Unappealing Goblingirl","Smelly Goblingirl","Dirty Goblingirl","Wart-Covered Goblingirl","Slim Goblingirl","Slender Goblingirl","Petite Goblingirl","Short Goblingirl","Fit Goblingirl","Lithe Goblingirl","Lean Goblingirl","Flat-Chested Goblingirl","Busty Goblingirl","Stacked Goblingirl","Perky Goblingirl","Muscular Goblingirl","Curvy Goblingirl","Ugly Goblingirl","Toned Goblingirl"]}
		
		else if(Entry == "ClothingSoloSkirts"){Entrys = [
			"dressed in frayed skirts with a tight tubetop",
			"dressed in simple skirts with a band of fabric across her chest",
			"wearing a strip of cloth across her chest and a tattered skirt",
			"wearing a bandeau across her chest and a pleated skirt",
			"wearing only a tubetop and a threadbare skirt",
			"wearing only a skimpy tubetop and a tight skirt"
		]}
		else if(Entry == "ClothingGroupSkirts"){Entrys = [
			"dressed in frayed skirts and tight tubetops",
			"dressed in tattered skirts with only scraps of cloth across their chests",
			"wearing tattered skirts and strips of cloth across their chests",
			"wearing pleated skirts and bandeaus across their chests",
			"in skirts and tubetops",
			"in skimpy tubetops and tight skirts"
		]}
		else if(Entry == "ClothingSoloLeathers"){Entrys = [
			"donned in leather armor",
			"donned in skin-tight leather",
			"wearing form-fitting leather armor",
			"wearing leather armor covered in straps",
			"well prepared in sturdy leather armor",
			"well prepared in studded leather armor"
		]}
		else if(Entry == "ClothingGroupLeathers"){Entrys = [
			"donned in studded leather armor",
			"donned in skin-tight leather",
			"wearing form-fitting leather armor",
			"wearing leather armor covered in straps",
			"well prepared in sturdy leather armor",
			"well prepared in tight leather armor"
		]}
		else if(Entry == "ClothingSoloDress"){Entrys = [
			"dressed in a loose gown",
			"dressed in a fine gown",
			"dressed in a formal gown",
			"wearing a frilly dress",
			"wearing a silky dress",
			"draped in a beautiful dress",
			"draped in a dark frock"
		]}
		else if(Entry == "ClothingGroupDress"){Entrys = [
			"dressed in loose gowns",
			"dressed in fine gowns",
			"dressed in formal gowns",
			"wearing frilly dresses",
			"wearing silky dresses",
			"in beautiful dresses",
			"in dark dresses"
		]}
		//"Tattooed Scarred"
		
		else if(Entry == "DrowTunnelWithDrow"){ 
			Entrys = [
				" Unusual runes mar the walls. My ANY touches one, and the colors shift to pure white.",
				" Humanoid bones litter the edges of our path. My ANY doesn't pay them any mind.",
				" Old rusted weapons are heaped in a pile against a wall. My ANY sifts through it a moment before finding a blade in better condition than her own.",
				" My ANY finds a burnt book lying on the ground. She looks at the cover and snarls.",
				" We find a bedroll hidden behind a boulder. My ANY searches it for anything useful. She finds some small black pebbles, and eats a few. I refuse when she offers me one.",
				" Splotches of dried slime coat the walls. My ANY looks concerned when she spots them.",
				" Water drips down from the ceiling. My ANY gets below it to drink, and I do the same after.",
				" A pickaxe sticks out of the stone wall. My ANY looks at it with distain.",
				" My ANY finds a small cloth doll. She smiles for a moment before noticing my gaze. Her face turns to a scowl as she tosses it aside like trash.",
				" A broken cart blocks our way. Its filled with raw ore waiting to be smelted. My ANY grimaces as we walk past it.",
				" A large web used to block the way, but its already been ripped in half. My ANY slashes at it until the path is wide open.",
				" My ANY spots a tripwire, and quickly disarms it before we pass.", 
				" My ANY finds a large sack hidden under a flat stone. We open it up and find its full of gold coins. She's surprised when I don't show any interest in the treasure. I give her a peck on the cheek and tell her she's worth more than all the coins in the world. She blushes and looks away as we keep walking.",
				" A low fog hangs around our ankles.",
				" A gust of warm air rushes by. My ANY tells me its just harmless gasses trapped in underground vents.",
				" The smooth stone floor is covered in veins of glittering emerald. My ANY walks around the gemstone, and seems to be uncomfortable.", 
				" I try getting my ANY to talk about her life before meeting me, but she seems hesitant to open up.",
				
				" My ANY holds me close while we walk, and asks me about where I'm from. I try my best to explain, but I only confuse her.",
				" My ANY nervously grabs my hand, and we walk together the rest of the way.",
				" My ANY seems to know the area, and guides us along.",
				" My ANY swings her blade around for practice.",
				" My ANY walks awkwardly, she still isn't used to being naked like this.",
				" My ANY shivers from her nudeness. She smiles when I hug her close until she's warm again.",
				" My ANY gives me a huge smile as we walk, she seems pretty excited to be with me.",
				" My ANY walks behind me and stares curiously at my butt. She looks away every time I peek back.",
				" As we walk, my ANY tells me about the time her sister was eaten by a slime while they were mining.",
				" As we walk, my ANY tells me about the time she got in trouble for stealing a bottle of shroomshine.",
				" As we walk, my ANY tells me about the time her sister was banished for stealing food."
			]}
		else if(Entry == "DrowTunnel"){ 
			//LogEntry("DrowTunnel")
			Entrys = [
				" Unusual runes mar the walls. They seem to glow when we get near.",
				" Humanoid bones litter the edges of our path. My ANY looks at them with concern.",
				" Old rusted weapons are heaped in a pile against a wall."," My ANY finds a burnt book lying on the ground.",
				" We find a bedroll hidden behind a boulder. Its in pretty poor condition.",
				" Splotches of dried slime coat the walls.",
				" Water drips down from the ceiling, I wonder if its safe to drink.",
				" A pickaxe sticks out of the stone wall. My ANY tries to free it, but the tool is lodged too tight.",
				" My ANY finds a small cloth doll. It's pretty tattered, and an arm falls off when she puts it back.",
				" A broken cart blocks our way. Its filled with raw ore waiting to be smelted. My ANY examines a chunk before tossing it back.",
				" A large web used to block the way, but its already been ripped in half.",
				" My ANY spots a tripwire, and we carefully avoid it as we pass.",
				" My ANY finds a large sack hidden under a flat stone. We open it up and find its full of gold coins. She puts the stone back over the hidden treasure when noone offers to carry it.",
				" A low fog hangs around our ankles.",
				" A gust of warm air rushes by. My ANY asks me what it was, but I can only shrug.",
				" The smooth stone floor is covered in veins of glittering emerald. My ANY is utterly fascinated by the natural beauty of the green rock."
				]}
					
					
		else if(Entry == "Farm"){
			if(farmRatio > 2){
				farmRatio--;
				Entrys = ["Fenced Pasture","Grassy Pasture","Corn Field","Corn Field","Overgrown Field","Muddy Field","Apple Orchard","Vegetable Garden","Wheat Field","Cabbage Patch","Cabbage Patch"]
			}else if(farmRatio < -2){
				farmRatio++;
				Entrys = ["Cozy Farmhouse","Small Shack","Red Barn","Rundown Barn","Old Shed","Canvas Windmill"]
			}else if (Math.random()<.5){
				farmRatio--;
				Entrys = ["Fenced Pasture","Grassy Pasture","Corn Field","Corn Field","Overgrown Field","Muddy Field","Quiet Field","Cabbage Patch","Cabbage Patch"]
			}else{
				farmRatio++;
				Entrys = ["Cozy Farmhouse","Small Shack","Red Barn","Rundown Barn","Old Shed","Canvas Windmill"]
			}
			
		}
		storedRandomEntry[Entry] = [...Entrys]
		Entrys = storedRandomEntry[Entry].splice(Math.floor(Math.random()*storedRandomEntry[Entry].length))
	}
	
	if(Entrys.length == 0){Entrys = ["No Entry Found"];console.log("No Entry Found:"+Entry)}
	
	//if(Entrys.length == 0){Entrys = ["ERROR(No Entry Found For "+Entry+")"]}
	return Entrys[Math.floor(Math.random()*Entrys.length)];
}
//###########################################################################################################################################################################
//###########################################################################################################################################################################
//###########################################################################################################################################################################
function randomAction(s){//randomAction:[action,dom,sub,offence,defence,terrain]
	var Entrys = [];
	var Entry = ""
	
	var AnyUnit =	 	FindPersonality("Any")
	var PositiveUnit =	FindPersonality("Positive")
	var NegativeUnit =	FindPersonality("Negative")
	var FunnyUnit =		FindPersonality("Funny")
	var SluttyUnit =	FindPersonality("Slutty")
	var HungryUnit =	FindPersonality("Hungry")
	var WillingUnit =	FindPersonality("Willing")
	var VanillaUnit =	FindPersonality("Vanilla")
	//TODO:       FIGHT
	if(s[0]==0){//FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT - FIGHT
		if(s[1]==0 && s[2] < 100 && !map[party.y][party.x].hostile){
		// HERO GOOD PEACE
			Entrys.push("I roughly spank SUB's behind, she pouts as she rubs where my hand left its mark.")
		}else if(s[1]==0 && s[2] < 100 && map[party.y][party.x].hostile){
		// HERO GOOD HOSTILE
			Entrys.push("I roughly spank SUB's behind, she tells me to focus on the fight!")
		}else if(s[1]==0 && s[2] >=99 && !map[party.y][party.x].hostile){
		// HERO FOOD PEACE
			Entrys.push("I sucker punch SUB in the face! The fight is on!")
		}else if(s[1]==0 && s[2] >=99 && map[party.y][party.x].hostile){
		// HERO FOOD HOSTILE
			if(s[3] == 0){
				if(unit(s[2]).Tags[0] == "Batgirl" || unit(s[2]).Tags[0] == "Harpygirl"){
					if(unit(s[2]).Funny){
						Entrys.push("I grab SUB, but she deftly slips out of my grip. She quickly kisses my forehead before flapping back to safety.")
						Entrys.push("I grab SUB, but she bites down on my hand with her long fangs. I let go instantly, and she flys away. She laughs, and says I taste horrible.")
						Entrys.push("I grab SUB, but she easily slips out and escapes. She shakes her tush at me once at a safe altitude.")
						Entrys.push("I swing my fist at SUB, but she's flying to high to hit. She laughs at my frustration!")
						Entrys.push("I kick at SUB, but she flies away too quick. She asks if I'm even trying!")
						Entrys.push("I try headbutting SUB, but she's too swift while flying around. She giggles as she soars through the air.")
						Entrys.push("I fling a rock up at SUB but it misses her. She giggles at my poor aim.")
						Entrys.push("I fling a rock up at SUB but she catches it!")
					}else{
						Entrys.push("I grab SUB, but she deftly slips out of my grip.")
						Entrys.push("I grab SUB, but she bites down on my hand with her long fangs. I let go instantly, and she flys away.")
						Entrys.push("I grab SUB, but she easily slips out and escapes.")
						Entrys.push("I swing my fist at SUB, but she's flying to high to hit.")
						Entrys.push("I kick at SUB, but she flies away too quick.")
						Entrys.push("I try headbutting SUB, but she's too swift while flying around.")
						Entrys.push("I fling a rock up at SUB but it misses her.")
					}
				}
				if(unit(s[2]).swimming){
					if(unit(s[2]).Funny){
						Entrys.push("I swing my fist at SUB, but she dives underwater too fast. When she surfaces she laughs at my frustration!")
						Entrys.push("I kick at SUB, but she swims away too quick. She asks if I'm even trying!")
						Entrys.push("I try headbutting SUB, but she's too swift while swimming around. She giggles as I caugh up water.")
					}else{
						Entrys.push("I swing my fist at SUB, but she dives underwater too fast.")
						Entrys.push("I kick at SUB, but she swims away too quick.")
						Entrys.push("I try headbutting SUB, but she's too swift while swimming around.")
					}
				}
			}else if(s[4] < .5){//Healthy
					if(s[5]=="Indoors"){
						Entrys.push("I shove SUB into a wall.")
						Entrys.push("I throw a chair at SUB. It breaks into pieces against her!")
					}
				Entrys.push("I swing my fist at SUB!")
				Entrys.push("I kick SUB!")
				Entrys.push("I headbutt SUB!")
				if(unit(s[2]).Clothing != "None"){
					if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("I "+choose(["kick","hit","punch","strike"])+" SUB in her exposed "+DescWord(unit(s[2]),"belly_noun",100)+"!")
					}else if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("I try "+choose(["attacking","hitting","punching","kicking"])+" SUB, but her leather armor takes most of the impact!")
					}else if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("I "+choose(["kick","hit","punch","attack"])+" SUB, and her dress flutters as she's pushed back.")
					}
				}
			}else if(s[4] < 1){//Hurt
				Entrys.push("I swing my fist at SUB, giving her a bloody nose!")
				Entrys.push("I kick SUB in the stomach, and she grimaces in pain!")
				Entrys.push("I headbutt SUB, forcing her to stumble back!")
				if(unit(s[2]).Clothing != "None"){
					if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("I "+choose(["kick","hit","punch","strike"])+" SUB in her exposed "+DescWord(unit(s[2]),"belly_noun",100)+", and she recoils from the blow!")
					}else if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("I "+choose(["kick","hit","punch","strike at"])+" SUB, and she recoils from the blow dispite her armor!")
					}else if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("I "+choose(["kick","hit","punch","attack"])+" SUB, and her dress rips as she's pushed back.")
					}
				}
				if((unit(s[2]).Tags[0] == "Batgirl" || unit(s[2]).Tags[0] == "Harpygirl") && unit(s[2]).flying){
					Entrys = []
					Entrys.push("I fling a rock up at SUB and it hits her"+choose([""," as she flies by"," wing", " forehead"," square in the chin", " right in the gut"])+". "+choose(["She winces in pain!", "She almost falls out of the air.", "she flaps frantically to stay airborne."]))
					if(Math.random()<.25){
						Entrys.push("I punch SUB"+ choose(["","",""," in the face"," 's gut"," right in her jaw"]) +choose([".","!"," as she swoops down to bite me!"," before she can bite me."," as she flies low to attack me."]))
					}else if(AnyUnit != null){
						Entrys.push("I punch SUB"+ choose(["","",""," in the face "," 's gut "," right in her jaw "]) +"as she swoops down to bite my ANY!")
					}
					
					Entrys.push(
						"I grab SUB"+
						choose(["",""," as she swoops down"," when she flies by"," when she's right above me"," as she glides too low"])+
						choose([", and pull her into an overly-tight embrace",", and wrap my arms around her middle",". I wrap an arm around her neck",". I squish her wings tightly against her body with both of my arms"])+
						choose([", taking the wind out of her lungs. ",", making her back loudly pop. ",", her eyes bulge from the pressure. ",". She struggles to breath when I squeeze harder. "," her face slowly turns blue. "," as I inhale her rich scent. She barely manages to breath while I continue to squeeze tighter and tighter. ",". My tongue explores her flavor as I continue to squeeze tighter and tighter. ",". I nibble on her neck while continuing to squeeze.",". Her initial struggling is in vain, and I assume I have her trapped until she slams her head into my nose, the pain is intense! "])+
						choose(["She kicks wildly, and soon slips out of my arms, flapping frantically to get airborne.","She bites down on my hand, and leaps into the air when my grip loosens."," She eventually frees herself and gets back into the air."])+
						choose(["","","","",""," She glances back down at me, her face looks traumatized from the close call."," She looks determined not to get caught again."," She calls me a jerk from a safe distance above."])+
						choose(["","","","",""," I look up at her, determined to see those wings in a belly before the fight is over."," I dare her to try coming down again."," I tell her she should fly away if she doesn't want to end up dinner."])
					)
					
					
				}
			}else{//Dead
				if(s[5]=="Indoors"){
					Entrys.push("I shove SUB into a wall, she crumbles to the ground in defeat!")
					Entrys.push("I throw a chair at SUB, it breaks against her face! She falls to the floor defeated!")
				}
				Entrys.push("I swing my fist at SUB, she collapses in defeat!")
				Entrys.push("I kick  SUB, she falls down in defeat!")
				Entrys.push("I headbutt SUB, she stumbles back before falling over in defeat!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){//SUB IS ASDF
					Entrys = ["I punt SUB off into the distance!"]
				}
			}
		}else
		//------------------------------------------------------------------------------------------
		if(s[1] < 100 && s[2] == 0 && !map[party.y][party.x].hostile){
		// GOOD HERO PEACE
			Entrys.push("CDOM roughly spanks my ass, she looks pleased as I rub where her hand left its mark.")
		}else if(s[1] < 100 && s[2] == 0 && map[party.y][party.x].hostile){
		// GOOD HERO HOSTILE
			Entrys.push("CDOM roughly spanks my ass! Who's side is she on?")
		}else if(s[1] >=99 && s[2] == 0 && !map[party.y][party.x].hostile){
		// FOOD HERO PEACE
			Entrys.push("CDOM roughly spanks my ass, she looks pleased as I rub where her hand left its mark.")
		}else if(s[1] >=99 && s[2] == 0 && map[party.y][party.x].hostile){
		// FOOD HERO HOSTILE
			if(s[4] < .5){//Healthy
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM shoves me into the door, she screams that I better leave now while I still can!")
					Entrys.push("With no regard for her own furnature, DOM throws a chair, it crashes into my face!")
					Entrys.push("With a running start, DOM tackles me into a wall!")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM's claws slash out, leaving scratchmarks in my chest!")
					Entrys.push("CDOM reveals her fangs before biting my arm!")		
					Entrys.push("CDOM reveals her fangs before biting down on my hand!")		
				}
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on my shoulder. She doesn't let go until I hit her nose!")
					Entrys.push("I lose track of DOM until I feel her elbow strike between my shoulder blades, knocking the breath out of me!")
					Entrys.push("CDOM leaps into the air and knees me in the face! I barely manage to keep standing.") 
					Entrys.push("CDOM spins in the air before slamming her foot into my face! I'm lucky to still be standing.")
				}
				if(unit(s[1]).Tags[0] == "Froggirl" || unit(s[1]).Tags[0] == "BunnyGirl"){
					Entrys.push("CDOM hops towards me and plants both feet into my chest before kicking away to safety.")
					Entrys.push("CDOM hops toward me and delivers a two-legged kick.")
					Entrys.push("CDOM hops at me before kicking away with both legs.")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(
						choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
						"tongue "+choose(["flings","shoots","slings","launches","darts"])+
						choose([" out"," out in my direction"," straight toward me"," straight at me"])+
						choose([" hitting"," striking"," whalloping"," to smash into"," slamming into"])+
						choose([" me"," my shoulder"," my chest"," my gut"])+
						choose(["!","!","!","!"," like a fist!",", leaving a bruise!",". I almost fall over from the pain!",". A welt starts to form where she hit."])
					)
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys.push("CDOM lets go of a rock while flying above me, it crashes into my shoulder!") 
					Entrys.push("CDOM swoops down and attacks me, the pain is unbearable!")
					Entrys.push("CDOM flies by and kicks me in the head!")
				} 
				if(unit(s[1]).Tags[0] == "Harpygirl"){
					Entrys.push("CDOM lets go of a rock while flying above me, it crashes into my shoulder!") 
					Entrys.push("CDOM swoops down and lashes out with her talons, the pain is unbearable!")
					Entrys.push("CDOM flies by and slashes me with her talons!")
				}
				if(unit(s[1]).Tags[0] == "Drowgirl"){
					Entrys.push("CDOM cuts me with her sharp blade!") 
					Entrys.push("CDOM slashes out at me!")
					Entrys.push("CDOM swings at me and draws blood.")
					Entrys.push("CDOM rolls to the side of me before swinging her blade. The strike leaves a small cut on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					Entrys.push("CDOM leaps into the air before slicing down with her blade. The strike leaves a small cut on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					Entrys.push("CDOM twirls her blade around herself before attacking. The strike leaves a small cut on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
				}
				if(unit(s[1]).Tags[0] == "Goblingirl"){
					Entrys.push("CDOM stabs me with her sharp spear!") 
					Entrys.push("CDOM wounds me with her spear!") 
					Entrys.push("CDOM wildly slashes out at me. Her spear draws blood from a few tiny cuts!") 
					Entrys.push("CDOM dives at me spear first. She gives me a small wound on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					Entrys.push("CDOM slashes out with her spear. Her strike leaves me a small cut on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					Entrys.push("CDOM jabs at me with her spear. Her strike leaves a small wound on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
				}
				if(unit(s[1]).MPle < unit(s[1]).CPle*1.8){
					Entrys.push("CDOM still attacks me, but I think she's starting to hold back.");
					Entrys.push("CDOM still attacks me, but she doesn't seem as committed to fighting as before.");
					Entrys.push("CDOM hesitates before she attacks me.");
					Entrys.push("CDOM thinks for a moment before attacking me.");
					Entrys.push("CDOM looks conflicted as she attacks me.");
				}
				if(Entrys.length == 0 || Math.random()<.05){
					Entrys.push("CDOM attacks me!");
				}
				
			}else if(s[4] < 1){//Hurt
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM smashes my head into the table, I see a bloody spot is left behind!")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM's claws slash out, leaving bloody streaks across my chest!")
					Entrys.push("CDOM reveals her fangs before biting my shoulder. I grimace at the nasty wound she leaves behind.")		
					Entrys.push("CDOM reveals her fangs before biting down on my hand. Her teeth leave long gashes when I pull it free.")		
				}
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on my shoulder, she doesn't let go until I fall to my knees in pain!")
					Entrys.push("I lose track of DOM until I feel her elbow strike between my shoulder blades, knocking me to my knees!")
					Entrys.push("CDOM leaps into the air and knees me in the face! My head spins while I see little stars everywhere!")
					Entrys.push("CDOM spins in the air before slamming her foot into my face! Everything looks blurry for a moment.")
				}
				if(unit(s[1]).Tags[0] == "Froggirl" || unit(s[1]).Tags[0] == "BunnyGirl"){
					Entrys.push("CDOM hops towards me and plants both feet into my chest before kicking away to safety.")
					Entrys.push("CDOM hops toward me and delivers a two-legged kick.")
					Entrys.push("CDOM hops at me before kicking away with both legs.")
					Entrys[Entrys.length-1] += choose([" I stumble backwards in pain."," I crumple to the ground in pain, it takes me a moment to get back up."," I find myself flat on the ground. I barely manage to get back up."])
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(
						choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
						"tongue "+choose(["flings","shoots","slings","launches","darts"])+
						choose([" out at me"," out toward me"," straight toward me"," straight at me"])+
						choose([" hitting"," striking"," whalloping"," to smash into"," slamming into"])+
						choose([" my face"," my head"," my nose"])+
						choose([". a high pitched whine is all I can hear as I stumble to keep my balance!","! I struggle to stand as my vision fades in and out.",", knocking me to the ground! I struggle to stand again as the world spins under my feet."])
					)
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys.push("CDOM lets go of a rock while flying above me, it crashes into my head!")
				}
				if(unit(s[1]).Tags[0] == "Harpygirl"){
					Entrys.push("CDOM dives down and guts me with her talons! Blood gushes out between my fingers as I struggle to stand!")
					Entrys.push("CDOM dives down and slashes my forehead with her talons! Blood gushes out between my fingers as I struggle to see!")
				}
				if(unit(s[1]).Tags[0] == "Drowgirl"){
					Entrys.push("CDOM cuts me with her sharp blade, and blood drips onto the GROUND!") 
					Entrys.push("CDOM slashes out at me, and blood mars the ground between us.")
					Entrys.push("CDOM swings at me and draws blood. Tears run down my face as panick starts setting in.")
					Entrys.push("CDOM rolls to the side of me before swinging her blade. Her strike leaves a small cut on my"+choose([" forehead!"," neck!"," chest!"," face!"]))
					Entrys.push("CDOM leaps into the air before slicing down with her blade. The strike leaves a small cut on my"+choose([" forehead!"," neck!"," chest!"," face!"]))
					Entrys.push("CDOM twirls her blade around herself before attacking. The strike leaves a small cut on my"+choose([" forehead!"," neck!"," chest!"," face!"]))
					Entrys.push("CDOM skillfully rolls to the side of me before swinging her blade. The strike leaves a deep wound on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					Entrys.push("CDOM aggressivly leaps into the air before slicing down with her blade. The strike leaves a deep wound on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					Entrys.push("CDOM expertly twirls her blade around herself before attacking. The strike leaves a deep laceration on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
				}
				if(unit(s[1]).Tags[0] == "Goblingirl"){
					Entrys.push("CDOM stabs me with her sharp spear, and blood splurts out when she pulls back!") 
					Entrys.push("CDOM wounds me with multiple thrusts of her spear!") 
					Entrys.push("CDOM wildly slashes out at me. Her spear draws blood from a dozen deep cuts!") 
					Entrys.push("CDOM dives at me spear first. The sharp point grazes my"+choose([" forehead!"," neck!"," chest!"," face!"]))
					Entrys.push("CDOM slashes out with her spear. She makes a small cut on my"+choose([" forehead!"," neck!"," chest!"," face!"]))
					Entrys.push("CDOM jabs at me with her spear. It makes contact with my"+choose([" forehead!"," neck!"," chest!"," face!"]))
					Entrys.push("CDOM dives at me spear first. She gives me a deep gash on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					Entrys.push("CDOM slashes out with her spear. She makes a deep laceration on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					Entrys.push("CDOM jabs at me with her spear. She makes a deep gash on my"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
				}
				if(unit(s[1]).MPle < unit(s[1]).CPle*1.8){
					Entrys.push("CDOM still attacks me, but I think she's starting to hold back.");
					Entrys.push("CDOM still attacks me, but she doesn't seem as committed to fighting as before.");
					Entrys.push("CDOM hesitates before she attacks me.");
					Entrys.push("CDOM thinks for a moment before attacking me.");
					Entrys.push("CDOM looks conflicted as she attacks me.");
				}
				if(Entrys.length == 0 || Math.random()<.05){
					Entrys.push("CDOM attacks me. I hold back tears from the pain!");
				}
			}
		}else
		//------------------------------------------------------------------------------------------
		if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && !map[party.y][party.x].hostile){
		// SAME PEACE
			Entrys = ["CDOM roughly spanks SUB's behind."]
		}else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && map[party.y][party.x].hostile){
		// SAME HOSTILE
			Entrys = ["CDOM roughly spanks SUB's behind. I wish they would focus on the fight!"]
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && !map[party.y][party.x].hostile){
		// DIFF PEACE
			Entrys.push("CDOM sucker punchs SUB in the face! The fight is on!")
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		//TODO:       _D   H
		// DIFF HOSTILE
			if(s[3] == 0){//DODGE
				if(unit(s[2]).flying){
					if(unit(s[2]).Funny){
						Entrys.push("CDOM shakes her fist at SUB as she flies above safely. CSUB giggles as she soars through the air out of reach.")
						Entrys.push("CDOM tries attacking SUB, but she flies away too quickly. CSUB asks DOM if she's even trying!")
					}else{
						Entrys.push("CDOM shakes her fist at SUB as she flies above safely.")
						Entrys.push("CDOM tries attacking SUB, but she flies away too quickly.")
					}
				}else if(unit(s[2]).swimming){
					if(unit(s[2]).Funny){
						Entrys.push("CDOM shakes her fist at SUB as she swims away safely. CSUB giggles as she breaches the surface well away from DOM.")
						Entrys.push("CDOM tries attacking SUB, but she swims away too quickly. CSUB asks DOM if she's even trying!")
					}else{
						Entrys.push("CDOM shakes her fist at SUB as she swims away safely.")
						Entrys.push("CDOM tries attacking SUB, but she swims away too quickly.")
					}
				}
			}else if(s[4] < .5){//Healthy
				if(unit(s[1]).Positive){
					Entrys.push(choose(["CDOM carefully blocks SUB's attack before striking back!","CDOM carefully avoids SUB's attack, then swiftly strikes back!"]))
				}
				if(unit(s[1]).Negative){
					Entrys.push(choose(["CDOM barely blocks SUB's attack before retaliating!","CDOM barely avoids SUB's attack before striking back!"]))
				}
				if(unit(s[1]).Funny){
					Entrys.push(choose(["CDOM attacks SUB with a smile plastered across her face!","CDOM strikes DOM while sporting a wicked grin!"]))
				}
				if(unit(s[1]).Slutty){
					Entrys.push(choose(["CDOM easily dodges SUB's attack before striking back!","CDOM easily dodges SUB's attack, then swiftly retaliates!"]))
				}
				if(unit(s[1]).Hungry){
					Entrys.push(choose(["CDOM slams into SUB!","CDOM bites SUB!"]))
				}
				if(unit(s[2]).Positive){
					Entrys.push(choose(["CDOM attacks SUB! CSUBSHORT still looks committed to winning the fight.","CDOM attacks SUB! CSUBSHORT still looks determined to win the fight.","CDOM attacks SUB! CSUBSHORT's determination doesn't faulter."]))
				}
				if(unit(s[2]).Negative){
					Entrys.push(choose(["CDOM attacks SUB! CSUBSHORT winces in pain.","CDOM attacks SUB! CSUBSHORT shrinks away from the other girl."]))
				}
				if(unit(s[2]).Funny){
					Entrys.push(choose(["CDOM attacks SUB! CSUBSHORT grits her teeth and smiles back.","CDOM attacks SUB! CSUBSHORT sticks her tongue out at her attacker."]))
				}
				if(unit(s[2]).Slutty){
					Entrys.push(choose(["CDOM attacks SUB! CSUBSHORT pouts at her attacker.","CDOM attacks SUB! CSUBSHORT asks her to hit harder next time."]))
				}
				if(unit(s[2]).Hungry){
					Entrys.push(choose(["CDOM attacks SUB. CSUBSHORT shouts profanity at DOMSHORT!","CDOM attacks SUB. CSUBSHORT looks pissed off!"]))
				}
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM shoves SUB into the door, she screams that we better leave now while we still can!")
					Entrys.push("With no regard for her own furnature, DOM throws a chair, it crashes into SUB's face!")
					Entrys.push("With a running start, DOM tackles SUB into a wall!")
					Entrys.push("DOM slams SUB into a wall!")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM's claws slash out at SUB, leaving scratchmarks!")
					Entrys.push("CDOM reveals her fangs before biting SUB's arm!")		
				}
				if(unit(s[1]).Tags[0] == "Foxgirl" || unit(s[1]).Tags[0] == "Wolfirl"){
					Entrys.push("CDOM bites down on SUB's shoulder!")
					Entrys.push("CDOM bites down on SUB's shoulder, she doesn't let go until hit on the nose!")
					Entrys.push("CDOM sneaks behind SUB and slams her elbow between SUBSHORT's shoulder blades!")
					Entrys.push("CDOM leaps into the air and knees SUB in the face!")
					Entrys.push("CDOM spins in the air before slamming her foot into SUB's face!")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(
						choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
						"tongue "+choose(["flings","shoots","slings","launches","darts"])+
						choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
						choose([" hitting"," striking"," whalloping"," to smash into"," slamming into"])+
						choose([" her"," her shoulder"," her chest"," her gut"])+
						choose(["!","!","!","!"," like a fist!",", leaving a bruise!",". She almost falls over from the pain!",". A welt starts to form where she was hit."])
					)
				}
				if(unit(s[1]).Tags[0] == "Froggirl" || unit(s[1]).Tags[0] == "BunnyGirl"){
					Entrys.push("CDOM hops toward SUB and plants both feet into her chest before kicking away to safety.")
					Entrys.push("CDOM hops toward SUB and delivers a two-legged kick.")
					Entrys.push("CDOM hops onto SUB before kicking away with both legs.")
				}
				if(unit(s[1]).Tags[0] == "Froggirl" && unit(s[1]).Size >= unit(s[2]).Size){
					if(unit(s[1]).Hungry){
						Entrys.push(
							choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
							"tongue "+choose(["flings","shoots","slings","launches","darts"])+
							choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
							choose([", wrapping around her neck!"," to wrap around her neck.",". It "+choose(["","","","","quickly ","suddenly ","easily ","skillfully ","nimbly ","swiftly ","forcefully "])+"wraps around her neck"+choose([".",".",".",". A cruel tug pulls her to the ground."," and yanks her to the ground."," to pull her to the ground."])])+
							choose([" CSUB's eyes bulge as she struggles against the constricting tongue"," CSUB starts turning blue"," CSUB gags"," CDOM laughs at SUB. She struggles her hardest","CSUB squirms on the ground"," CDOM drags SUB closer as she struggles"])+
							choose([" before she can break away"," until she can slip out",", desperate for air. She barely manages to get free",". It takes a long moment until she can get free"])+
							choose([".",".",".",". CDOM laughs at SUB as she tries to catch her breath."," of the fleshy noose."," from DOM's fleshy grip."," and rub her sore neck from a safe distance."," and catch her breath."])
						)
					}
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUBSHORT is almost pulled to the ground before breaking free!")		
				}
				if(unit(s[1]).Tags[0] == "Batgirl" && unit(s[1]).flying){
					Entrys.push("CDOM lets go of a rock while flying above, it crashes into SUB's shoulder!") 
					Entrys.push("CDOM swoops down and attacks SUB before slipping out of reach again!")
					Entrys.push("CDOM flies by and kicks SUB!")
					if((unit(s[2]).Tags[0] == "Batgirl" || unit(s[2]).Tags[0] == "Harpygirl") && unit(s[2]).flying){
						Entrys = [choose(["CDOM outflies SUB and soon has her by the neck","CDOM swoops up at SUB from below, latching onto her throat!","CDOM intercepts SUB and bites into her neck."])+choose([" CSUB barely manages to escape DOM's attack!","CSUB does a barrel roll to fling the other girl off of her.","CSUB pushes the other girl away before its too late, and gets some distance from her attacker."])]
					}
				}
				if(unit(s[1]).Tags[0] == "Harpygirl" && unit(s[1]).flying){
					Entrys.push("CDOM lets go of a rock while flying above, it crashes into SUB's shoulder!") 
					Entrys.push("CDOM swoops down and lashes her talons at SUB before slipping out of reach again!")
					Entrys.push("CDOM flies by and slashes at SUB!")
					if((unit(s[2]).Tags[0] == "Batgirl" || unit(s[2]).Tags[0] == "Harpygirl") && unit(s[2]).flying){
						Entrys = [choose(["CDOM outflies SUB and soon locks her talons into soft flesh.","CDOM swoops up at SUB from below, talons lashing at her vulnerable underbelly!","CDOM intercepts SUB and leaves bloody wounds with her talons."])+choose([" CSUB barely manages to escape DOM's attack!","CSUB does a barrel roll to evade the other girl.","CSUB pushes the other girl away before getting more wounds."])]
					}
				}
				if(unit(s[1]).Tags[0] == "Drowgirl"){
					Entrys.push("CDOM cuts SUB with her sharp blade!") 
					Entrys.push("CDOM slashes out at SUB!")
					Entrys.push("CDOM swings at SUB and gives her a cut.")
					if(unit(s[2]).arms && unit(s[2]).legs){
						Entrys.push("CDOM rolls to the side of SUB before swinging her blade. She gives her a small cut across her"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
						Entrys.push("CDOM leaps into the air before slicing down with her blade. She gives SUB a small cut down her"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
						Entrys.push("CDOM twirls her blade around herself before attacking. She then gives SUB a small cut into her"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					}
			}
				if(unit(s[1]).Tags[0] == "Goblingirl"){
					Entrys.push("CDOM stabs SUB with her sharp spear!") 
					Entrys.push("CDOM wounds SUB with her spear!") 
					Entrys.push("CDOM wildly slashes out at SUB. The spear gives her a few tiny cuts!") 
					if(unit(s[2]).arms && unit(s[2]).legs){
						Entrys.push("CDOM dives at SUB spear first. She makes a small wound on her"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
						Entrys.push("CDOM slashes out with her spear. She makes a small cut on her"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
						Entrys.push("CDOM jabs at me with her spear. She makes a small wound on her"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					}
				}
				if(unit(s[2]).Clothing != "None"){
					if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("CDOM hits SUB in her exposed "+DescWord(unit(s[2]),"belly_noun",100)+", and she recoils from the blow!")
						Entrys.push("CDOM attacks SUB! As the SUBRACE gets pushed back, her chest wrap slips to reveal her "+DescWord(unit(s[2]),"breasts",50)+"breasts. She blushes while pulling the garment back down to cover herself.")
						Entrys.push("CDOM attacks SUB! As the SUBRACE gets pushed back, her skirt lifts to reveal her "+DescWord(unit(s[2]),"butt",50)+"thighs. She blushes while tugging the garment back down to cover herself.")
					}else if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("CDOM attacks SUB, but the leather armor keeps her safe.")
						Entrys.push("CDOM tries attacking SUB, but the SUBRACE's leather armor absorbs most of the damage.")
						Entrys.push("CDOM tries attacking SUB, but can't get past her leather armor.")
					}else if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("CDOM "+choose(["strikes","hits","punches","attacks"])+" SUB, and her dress rips as she's pushed back.")
						Entrys.push("CDOM attacks SUB! As the SUBRACE gets pushed back, her dress lifts to reveal her "+DescWord(unit(s[2]),"butt",50)+"thighs. She blushes while tugging the garment back down to cover herself.")
						Entrys.push("CDOM attacks SUB! As the SUBRACE gets pushed back, her "+DescWord(unit(s[2]),"breasts",50)+"breasts pop free from her dress. She blushes while pulling the garment back up to cover herself.")
					}
				}				
				if(unit(s[1]).Tags[0] == "Mousegirl" && unit(s[2]).legs){
					Entrys.push("CDOM leaps valiantly through the air to chomp down on SUB's nipple!")
					Entrys.push("CDOM chomps down onto SUB's ankle!")
					Entrys.push("CDOM slashes out at SUB's ankle!")
				}
				//PREY
				if((unit(s[2]).Tags[0] == "Batgirl" || unit(s[2]).Tags[0] == "Harpygirl") && unit(s[2]).flying && unit(s[1]).Tags[0] != "Batgirl" && unit(s[1]).Tags[0] != "Harpygirl" && unit(s[1]).Tags[0] != "Froggirl"){
					Entrys.push("CDOM flings a rock up at SUB and hits her"+choose([""," as she flies by"," wing", " forehead"," square in the chin", " right in the gut"])+". "+choose(["She winces in pain!", "She almost falls out of the air.", "she flaps frantically to stay airborne."]))
				}
				if(Entrys.length == 0 || Math.random()<.01){
					Entrys.push("CDOM attacks SUB!")
				}
				//RESET ENTRYS TO THE BOTTOM IF STANDARD ONES WONT WORK
				//Entrys = [asdf]
			}else if(s[4] < 1){//Hurt
				if(unit(s[1]).Tags[0] == "Froggirl" || unit(s[1]).Tags[0] == "BunnyGirl"){
					Entrys.push("CDOM hops toward SUB and plants both feet into her chest before kicking away to safety.")
					Entrys.push("CDOM hops toward SUB and delivers a two-legged kick.")
					Entrys.push("CDOM hops onto SUB before kicking away with both legs.")
					Entrys[Entrys.length-1] += choose([" SUBSHORT stumbles backwards in pain."," SUBSHORT crumples to the ground in pain, it takes a moment for her to get back up."," SUBSHORT falls onto the ground, and barely manages to get back up."])
				}
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM smashes SUB's head into the table, a bloody spot is left behind!")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM's claws slash out, leaving bloody streaks across SUB's stomach!")
					Entrys.push("CDOM reveals her fangs before biting SUB's shoulder. She leaves a nasty wound behind!")		
				}
				if(unit(s[1]).Tags[0] == "Foxgirl" || unit(s[1]).Tags[0] == "Wolfgirl"){
					Entrys.push("CDOM bites down on SUB's shoulder, she doesn't let go until the girl drops to her knees in pain!")
					Entrys.push("CDOM sneaks behind SUB and slams her elbow between SUBSHORT's shoulder blades, knocking her to the ground!")
					Entrys.push("CDOM leaps into the air and knees SUB in the face! CSUBSHORT stumbles around with a blank expression until regaining her composure.")
					Entrys.push("CDOM spins in the air before slamming her foot into SUB's face! CSUBSHORT barely manages to get back up.")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(
						choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
						"tongue "+choose(["flings","shoots","slings","launches","darts"])+
						choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
						choose([" hitting"," striking"," whalloping"," to smash into"," slamming into"])+
						choose([" her face"," her head"," her nose"])+
						choose([". She stumbles to keep her balance!","! She looks dazed from the blow.","! Blood makes a trail down SUBSHORT's face.",", knocking her to the ground! She struggles to stand while recovering from the blow."])
					)
				}
				if(unit(s[1]).Tags[0] == "Froggirl" && unit(s[1]).Size >= unit(s[2]).Size){
					if(unit(s[1]).Hungry){
						Entrys.push(
							choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
							"tongue "+choose(["flings","shoots","slings","launches","darts"])+
							choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
							choose([", wrapping around her neck!"," to wrap around her neck.",". It "+choose(["","","","","quickly ","suddenly ","easily ","skillfully ","nimbly ","swiftly ","forcefully "])+"wraps around her neck"+choose([".",".",".",". A cruel tug pulls her to the ground."," and yanks her to the ground."," to pull her to the ground."])])+
							choose([" CSUB's eyes bulge as she struggles against the constricting tongue"," CSUB starts turning blue"," CSUB gags"," CDOM laughs at SUB. She struggles her hardest","CSUB squirms on the ground"," CDOM drags SUB closer as she struggles"])+
							choose([" before she can break away"," until she can slip out",", desperate for air. She barely manages to get free",". It takes a long moment until she can get free"])+
							choose([".",".",".",". CDOM laughs at SUB as she tries to catch her breath."," of the fleshy noose."," from DOM's fleshy grip."," and rub her sore neck from a safe distance."," and catch her breath."])
						)
					}
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB falls over and is dragged along the ground before she's able to pull it off!")
				}
				if(unit(s[1]).Tags[0] == "Batgirl" && unit(s[1]).flying){
					Entrys.push("CDOM drops a rock while flying above, it crashes into SUB's head!")
					Entrys.push("CDOM swoops down and attacks SUB, leaving her bruised and bleeding!")
					Entrys.push("CDOM flies by and kicks SUB in the head!")
					if((unit(s[2]).Tags[0] == "Batgirl" || unit(s[2]).Tags[0]) == "Harpygirl" && unit(s[2]).flying){
						Entrys = [choose(["CDOM outflies the other batgirl and soon has her by the neck","CDOM swoops up at SUB from below, latching onto her throat!","CDOM intercepts SUB and bites into her neck."])+choose([" CSUB barely manages to escape DOM's attack!","CSUB does a barrel roll to fling the other girl off of her.","CSUB pushes the other girl away before its too late, and gets some distance from her attacker."])]
					}
				}
				if(unit(s[1]).Tags[0] == "Harpygirl" && unit(s[1]).flying){
					Entrys.push("CDOM lets go of a rock while flying above, it crashes into SUB's head!") 
					Entrys.push("CDOM swoops down and attacks SUB, marring her with bleeding wounds!")
					Entrys.push("CDOM flies by and slashes at SUB's head!")
					if((unit(s[2]).Tags[0] == "Batgirl" || unit(s[2]).Tags[0] == "Harpygirl") && unit(s[2]).flying){
						Entrys = [choose(["CDOM outflies SUB and soon locks her talons into soft flesh.","CDOM swoops up at SUB from below, talons lashing at her vulnerable underbelly!","CDOM intercepts SUB and leaves bloody wounds with her talons."])+choose([" CSUB barely manages to escape DOM's attack!","CSUB does a barrel roll to evade the other girl.","CSUB pushes the other girl away before getting more wounds."])]
					}
				} 
				if(unit(s[1]).Tags[0] == "Drowgirl"){
					Entrys.push("CDOM dances circles around SUB as she delivers a slew of cuts!") 
					Entrys.push("CDOM cuts SUB with her sharp blade, and grins when SUBSHORT almost falls over!") 
					Entrys.push("CDOM slashes out at SUB, and chuckles as SUBSHORT staggers back.")
					Entrys.push("CDOM swings at SUB and makes contact. CSUBSHORT looks like she's in tremendous of pain.")
					if(unit(s[2]).arms && unit(s[2]).legs){
						Entrys.push("CDOM rolls to the side of SUB before swinging her blade. She delivers a small cut on her opponent's"+choose([" forehead!"," neck!"," chest!"," face!"]))
						Entrys.push("CDOM leaps into the air before slicing down with her blade. She delivers a small cut on SUB's"+choose([" forehead!"," neck!"," chest!"," face!"]))
						Entrys.push("CDOM twirls her blade around herself before attacking. She then delivers a small cut on SUB's"+choose([" forehead!"," neck!"," chest!"," face!"]))
						Entrys.push("CDOM skillfully rolls to the side of SUB before swinging her blade. She gives SUBSHORT a deep wound on her"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
						Entrys.push("CDOM aggressivly leaps into the air before slicing down with her blade. She gives SUB a deep wound on her"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
						Entrys.push("CDOM expertly twirls her blade around herself before attacking. She then gives SUB a deep laceration on her"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					}
				}
				if(unit(s[1]).Tags[0] == "Goblingirl"){
					Entrys.push("CDOM stabs SUB with her sharp spear, and drives it in deep!") 
					Entrys.push("CDOM strikes SUB with multiple spear thrusts!") 
					Entrys.push("CDOM wildly slashes out at SUB. Her spear delivers a dozen deep cuts!")
					if(unit(s[2]).arms && unit(s[2]).legs){
						Entrys.push("CDOM dives at SUB spear first. The sharp point grazes SUBSHORT's"+choose([" forehead!"," neck!"," chest!"," face!"]))
						Entrys.push("CDOM slashes out with her spear. She gives SUB a small cut on her"+choose([" forehead!"," neck!"," chest!"," face!"]))
						Entrys.push("CDOM jabs at SUB with her spear. It makes contact with SUBSHORT's"+choose([" forehead!"," neck!"," chest!"," face!"]))
						Entrys.push("CDOM dives at SUB spear first. She delivers a deep gash on her opponent's"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
						Entrys.push("CDOM slashes out with her spear. She delivers a deep laceration on her opponent's"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
						Entrys.push("CDOM jabs at SUB with her spear. She delivers a deep gash on her opponent's"+choose([" arm!"," leg!"," thigh!"," shoulder!"]))
					}
				}
				if(unit(s[2]).Clothing != "None"){
					if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("CDOM hits SUB in her exposed "+DescWord(unit(s[2]),"belly_noun",100)+". Tears roll down SUBSHORT's face as she gasps for air."+choose([""],[" She wipes the spittle from her face, and gets ready to retaliate!"," She looks completely winded from the blow!"]))
						//Entrys.push("CDOM "+choose(["attacks","hits","strikes at"])+" SUB! As the SUBRACE gets pushed back, her chest wrap slips to reveal her "+DescWord(unit(s[2]),"breasts",50)+"breasts. "+choose(["She struggles not to fall","She winces from the blow","She winces at the pain"])+" while pulling the garment back down to cover herself.")
						//Entrys.push("CDOM "+choose(["attacks","hits","strikes at"])+" SUB! As the SUBRACE gets pushed back, her skirt lifts to reveal her "+DescWord(unit(s[2]),"butt",50)+"thighs. "+choose(["She struggles not to fall","She winces from the blow","She winces at the pain"])+" while tugging the garment back down to cover herself.")
					}else if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("CDOM "+choose(["attacks","hits","strikes at"])+" SUB, not even the leather armor can keep her safe.")
						Entrys.push("CDOM "+choose(["attacks","hits","strikes at"])+" SUB, and the SUBRACE's leather armor barely seems to stop the damage.")
						Entrys.push("CDOM "+choose(["attacks","hits","strikes at"])+" SUB. CSUBSHORT seems surprised by how ineffective her armor is!")
					}else if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("CDOM "+choose(["strikes","hits","punches","attacks"])+" SUB, and her dress gets a massive tear as she's pushed back.")
						//Entrys.push("CDOM "+choose(["attacks","hits","strikes at"])+" SUB! As she's roughly pushed back, her dress lifts to reveal her "+DescWord(unit(s[2]),"butt",50)+"thighs. "+choose(["She struggles not to fall","She winces from the blow","She winces at the pain"])+" while tugging the garment back down to cover herself.")
						//Entrys.push("CDOM "+choose(["attacks","hits","strikes at"])+" SUB! As she's roughly pushed back, her "+DescWord(unit(s[2]),"breasts",50)+"breasts pop free from her dress. "+choose(["She struggles not to fall","She winces from the blow","She winces at the pain"])+" while pulling the garment back up to cover herself.")
					}
				}	
				if(unit(s[1]).Tags[0] == "Mousegirl"&& unit(s[2]).legs){
					Entrys.push("CDOM chomps down onto SUB's ankle, leaving a bloody wound behind!")
				}
				//PREY
				if((unit(s[2]).Tags[0] == "Batgirl" || unit(s[2]).Tags[0] == "Harpygirl") && unit(s[2]).flying && unit(s[1]).Tags[0] != "Batgirl"&& unit(s[1]).Tags[0] != "Froggirl"){
					Entrys = []
					Entrys.push("CDOM punches SUB"+ choose(["","",""," in the face"," 's gut"," right in her mouth"]) +choose([".","!"," as she swoops down to bite her."," as she glides by to attack!"," as she flies low for an attack!"]))
					Entrys.push("CDOM flings a rock up at SUB and hits her"+choose([""," as she flies by"," wing", " forehead"," square in the chin", " right in the gut"])+". "+choose(["She winces in pain!", "She almost falls out of the air.", "she flaps frantically to stay airborne."]))
					if(unit(s[1]).arms && unit(s[1]).legs){
						Entrys.push(
							"CDOM grabs SUB"+
							choose(["",""," as she swoops down"," when she flies by"," when she's right above her"," as she glides too low"])+
							choose([
								choose([", and pull her into a chokehold",", and wraps her arms around the SUBRACE",". CDOMSHORT wraps an arm around her neck",". CDOMSHORT squishes the SUBRACEs wings tightly together"])+
								choose([", taking the wind out of SUB's lungs. ",", making SUBSHORT's back loudly pop. ",", SUBSHORT's eyes bulge from the pressure. ",". SUBSHORT struggles to breath when shes squeezed harder. "," SUB's face slowly turns blue. ",". CDOM's tongue explores the SUBRACE's flavor as she continues to squeeze tighter and tighter. ",". CDOM nibbles on SUB's neck while continuing to squeeze."])+
								choose(["CSUBSHORT kicks wildly, and barely slips away from her captor, flapping frantically to get airborne.","CSUBSHORT bites down on her captors hand, and leaps into the air when DOMSHORT's grip loosens."," CSUBSHORT eventually frees herself and gets back into the air."])
								,
								choose([". CSUBSHORT tries to bite her captor but, DOMSHORT bites first into the SUBRACE's shoulder. She shoves SUBSHORT away and watches her struggle to get airborne.",". CSUBSHORT tries to bite her captor but, DOMSHORT spins her around and bites down hard on her shoulder! CSUBSHORT winces in pain before freeing herself and leaping back into the air.",", and starts to pummel her before the SUBRACE gets airborne again.",", and slams the SUBRACE into the ground! CSUBSHORT quickly gets up and leaps back into the air."])
							])
						)
					}
				}
				if(Entrys.length == 0 || Math.random()<.01){
				Entrys.push("CDOM attacks SUB!")
				}
			}else{//Dead
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM smashes SUB's head into the table. CSUBSHORT doesn't get back up!")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM pounces SUB to the ground before biting her neck! When DOM gets back up, SUB isn't moving!")		
				}
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on SUB's neck, she doesn't let go until the other girl stops struggling!")
					Entrys.push("CDOM sneaks behind SUB and slams her elbow between SUB's shoulder blades, knocking her to the ground. CDOM grins when the other girl doesn't get back up!")
					Entrys.push("CDOM leaps into the air and knees SUB in the face! A loud crunch is heard and SUB falls down in defeat!")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					if(unit(s[1]).Hungry){
						Entrys.push(
							choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
							"tongue "+choose(["flings","shoots","slings","launches","darts"])+
							choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
							choose([", wrapping around her neck!"," to wrap around her neck.",". It "+choose(["","","","","quickly ","suddenly ","easily ","skillfully ","nimbly ","swiftly ","forcefully "])+"wraps around her neck"+choose([".",".",".",". A cruel tug pulls her to the ground."," and yanks her to the ground."," to pull her to the ground."])])+
							choose([" CSUB's eyes bulge as she struggles against the constricting tongue"," CSUB starts turning blue"," CSUB gags"," CDOM laughs at SUB. She struggles her hardest","CSUB squirms on the ground"," CDOM drags SUB closer as she struggles"])+
							choose([", but soon she stops moving and goes limp.",". A quick tug later and SUB lies lifeless on the ground."," until she's lifeless on the ground."," until trying one final time to escape before running out of air."," before her face turns completely blue. CDOM's tongue flys back from the dead girl with a slurp."])
							
						)
					}
					Entrys.push(
					choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
					"tongue "+choose(["flings","shoots","slings","launches","darts"])+
					choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
					choose([" hitting"," striking"," whalloping"," to smash into"," slamming into"])+
					choose([" her face"," her head"," her nose"])+
					choose([" making an ugly wound. She falls to the ground limp.",". CSUB collapses to the ground and doesn't get up!","! CSUB falls down, and stays down.","! Blood makes a trail down SUB's face as she falls to the ground.",", knocking her to the ground! She struggles to stand before she collapses and stays down for good."])
					)
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys.push("CDOM drops a rock while flying above. When it crashes into SUB's head, she falls to the ground!")
				}
				if(unit(s[1]).Tags[0] == "Harpygirl"){
					Entrys.push("CDOM digs her talons deep into SUB, then gives them a twist before ripping them free. CSUBSHORT falls to the ground lifelessly.")
				}
				if(unit(s[1]).Tags[0] == "Drowgirl"){
					Entrys.push("CDOM cuts SUB with her sharp blade. CSUBSHORT staggers for a moment before falling to the ground!") 
					Entrys.push("CDOM stabs her blade through SUB. She twists the blade, and SUBSHORT slumps to the GROUND.")
					Entrys.push("CDOM slashes out at SUB. CSUBSHORT seems fine at first, but then falls over dead.")
					Entrys.push("CDOM swings her blade horizontally and slices SUB in half!"+choose([""],[" CSUBSHORT futilely tries reconnecting herself, but eventually slumps over."," CSUBSHORT writhes on the ground for just a moment before going limp."," The SUBRACE's upper body flops onto the floor, and she stares in dismay at her bisected body until her eyes glaze over!"," SUBSHORT flops around on the ground for a moment before going still."]))
					Entrys.push("CDOM drives her blade into SUB's gut. CSUBSHORT struggles for a moment before going still. CDOMSHORT uses her foot to shove the dead SUBRACE off of her blade roughly.")
					Entrys.push("CDOM gets behind SUB and stabs her in the back. She twists her blade, and SUBSHORT lifelessly falls forward.")
					Entrys.push("CDOM swings her blade and cuts SUB's head off! SUBSHORT watches her body stay standing for a few moments before falling to the GROUND to join her.")
					if(Math.random()<.25 && unit(s[2]).arms && unit(s[2]).legs){
						Entrys.push("CDOM rolls to the side of SUB before swinging her blade. Both of SUBSHORT's legs seperate from the rest of her body, and she falls to the ground. CDOMSHORT quickly finishes her with another slash.")
						Entrys.push("CDOM leaps into the air before slicing down with her blade. It severs one of SUB's arms from her body! CSUBSHORT turns to run, but a final slash into her back sends her sprawling onto the ground to bleed out.")
						Entrys.push("CDOM twirls her blade around herself before attacking. She then delivers a deep cut into SUB's throat! CSUBSHORT tries her best to staunch the bleeding, but blood keeps gushing between her fingers as she falls over.")
						if(map[party.y][party.x].units.length >= 3){
							Entrys.push("CDOM pins SUB to the ground with a wicked grin. She keeps the girls's legs splayed apart as she starts vivisecting her."+
							choose([" CSUBSHORT writhes in pain as the drow slices her open from crotch to chin."," CSUBSHORT struggles to free herself as the drow explores her insides."," CSUBSHORT writhes in agony as the drow pulls her insides free."])+
							" The gruesome study eventually becomes a dissection as SUBSHORT takes her last breath.")
						}
					}
				}
				if(unit(s[1]).Tags[0] == "Goblingirl"){
					Entrys.push("CDOM stabs SUB with her sharp spear. The tip goes deep, and SUBSHORT slumps over, and slides down the wooden shaft.") 
					Entrys.push("CDOM strikes SUB with multiple spear thrusts. CSUBSHORT looks fine at first, but then crumples onto the GROUND!") 
					Entrys.push("CDOM wildly slashes out at SUB. Her spear quickly sends SUBSHORT to an early grave!")
					if(unit(s[2]).arms && unit(s[2]).legs){
						Entrys.push("CDOM dives at SUB spear first. The sharp point soon pokes out of her back as she falls to her knees. CDOMSHORT puts her foot on SUBSHORT's shoulder, and shoves her free from the weapon to die on the GROUND!")
						Entrys.push("CDOM slashes out with her spear. CSUBSHORT tries to block the attack, but only manages to lose some fingers. While she reels in pain, DOMSHORT takes the opportunity to finish her off with a quick thrust into her chest.")
						Entrys.push("CDOM circles SUB, and relentlessly barrages her with spear thrusts until the bleeding girl falls over lifelessly.") 
					}
				}
				if(unit(s[1]).Tags[0] == "Mousegirl"){
					Entrys.push("CDOM chomps down onto SUB's ankle. CSUBSHORT looks down confused before falling down lifelessly!")
				}
				//
				if(unit(s[2]).Tags[0] == "Mousegirl"){//SUB IS ASDF
					Entrys.push("CDOM punts SUB off into the distance!")
				}
				if(Entrys.length == 0){
					Entrys.push("CDOM kills SUB!")
				}
			}
		}
	}
//###########################################################################################################################################################################
//	TODO:       FLIRT
	if(s[0]==1){//FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT
		if(s[1]==0 && s[2] < 100 && !map[party.y][party.x].hostile){
		// HERO GOOD PEACE
			
			if(unit(s[2]).Tags[0] == "Mousegirl"){
				if(unit(s[2]).willing){
					Entrys.push("I grab SUB with one hand and hold her above my gaping mouth. She looks excited as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her further. She starts to finger and fondle herself as shes slowly consumed. I let go after her butt slides in and feel it grind against my tongue until she orgasms. I suck down all of her juices before pulling her out. She pouts as I set her back on the GROUND.")
				}else{
					Entrys.push("I grab SUB with one hand and hold her above my gaping mouth. She looks worried as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her further. She looks in horror as shes slowly consumed. I suck on her lower body as she frantically clings to my hand. After I've gotten a good taste, I pull her out. She pouts as I set her back on the GROUND.")
				}
			}
			if(unit(s[2]).Tags[0] == "Slimegirl"){
			Entrys.push("I stick my finger into SUB's shoulder, and scoop out a glob. It tastes like "+DescWord(unit(s[2]),"slime",100)+"!")
			Entrys.push("I take a bite out of SUB. She tastes like "+DescWord(unit(s[2]),"slime",100)+"!")
			Entrys.push("I give SUB a juicy kiss. She tastes like "+DescWord(unit(s[2]),"slime",100)+"!")
			Entrys.push("I chomp down on SUB's breast. She doesn't react, and I rip it off of her. The tit tastes like "+DescWord(unit(s[2]),"slime",100)+"!")
			}
			if(Entrys.length == 0){
				Entrys.push("I flirt with SUB.")
				Entrys.push("I pat SUB's head, she looks comforted by my touch.")
				Entrys.push("I give SUB's cute butt a squeeze. Her face is so cute when she's embarrassed.")
				Entrys.push("I sneak up behind SUB and cup her breasts. Her face is so cute when she's embarrassed.")
				if(s[4] > .50){
					Entrys.push("I use two fingers to rub SUB's bean, she moans as she grinds against my hand!")
					Entrys.push("I sneak up behind SUB, and give both nipples a squeeze, she pushes against me as she gasps for air!")
				}
			}
		}else if(s[1]==0 && s[2] < 100 && map[party.y][party.x].hostile){
		// HERO GOOD HOSTILE
			Entrys.push("I pat SUB's head, she looks less nervous about the fight.")
			Entrys.push("I give SUB's cute butt a squeeze.  She wiggles out of my grasp, telling me to stay focused on the fight!")
			Entrys.push("I sneak up behind SUB and cup her breasts. She wiggles out of my touch, telling me to stay focused on the fight!")
		}else if(s[1]==0 && s[2] >=99 && !map[party.y][party.x].hostile){
		// HERO FOOD PEACE
			Entrys.push("I flirt with SUB.")
			if(s[4] < .75){//DRY
				if(unit(s[2]).Positive){
					Entrys.push("I flirt with SUB. She tells me I'm very charming.")
				}
				if(unit(s[2]).Negative){
					Entrys.push("I flirt with SUB. She blushes and won't make eye contact with me.")
				}
				if(unit(s[2]).Funny){
					Entrys.push("I flirt with SUB. She laughs and says I couldn't handle her.")
				}
				if(unit(s[2]).Slutty){
					Entrys.push("I flirt with SUB. She giggles and asks if I try to fuck every SUBRACELONG I meet.")
				}
				if(unit(s[2]).Hungry){
					Entrys.push("I flirt with SUB, but she says she's too much woman for me.")
				}
				if(unit(s[2]).Tags[0] == "Batgirl"){
					Entrys = ["I blow SUB a kiss, she's bewildered by the gesture.","I tell SUB how adorable her face is when she's flying.","I wave at SUB, and tell her how cute she looks from below."]
				}
				if(unit(s[2]).Tags[0] == "Harpygirl"){
					Entrys = ["I tell SUB how cute her feathers look.","I blow SUB a kiss, she's bewildered by the gesture.","I tell SUB how adorable her face is when she's flying.","I wave at SUB, and tell her how cute she looks from below."]
				}
				if(s[5]=="Forest"){
				Entrys.push("I put a flower behind SUB's ear, and she giggles from the ticklish stem.")
				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					//THIS ALL SUCKS!!!!!
					Entrys.push("I see SUB trying to grab a plump mushroom growing on the cave wall. I pluck it from the stone and hand it to her, she nibbles on it contently.")
					Entrys.push("I stoop down and watch SUB nibble on a purple mushroom. We both blush when she realizes I'm staring at her.")
					Entrys.push("CSUB looks up at me and says she wishes she was my height. I tell her she's cute how she is, but she only pouts at my statement.")
					Entrys.push("I see SUB struggling to move some heavy rocks. She's thankful when I offer to help. When I'm done, a crack is revealed in the stone wall thats perfect for SUB to hide in.")
					if(unit(s[2]).willing){
						Entrys.push("I ask SUB why such a cute little girl lives in a cave, she tells me she wants to digest in a slimegirl someday!")
					}else{
						if(party.units.length > 3 && unit(1).Tags[0] != "Mousegirl" && unit(2).Tags[0] != "Mousegirl"){
							Entrys.push("I see SUB looking at the other girls nervously. I tell her she doesn't have to worry, and that I won't let them eat her.")	
						}
						Entrys.push("I ask SUB if she wants to leave the cave, she tells me its too dangerous alone for a mouse in the wild. I tell her she could come with me if she wanted, and she thanks me for the offer.")
						Entrys.push("I tell SUB she must be brave to live in this dark cave. She blushes and says she doesn't think she's very brave.")
						Entrys.push("I ask SUB why such a cute little girl lives in a cave, she tells me its safer from predators to hide in the dark.")
					}
				}
				Entrys.push("I wave at SUB, and she waves back with a smile.")
				Entrys.push("I blow SUB a kiss, she smiles at the gesture.")
				Entrys.push("I tell SUB a joke, she giggles at the punchline.")
				Entrys.push("I tell SUB that her eyes are so beautiful, she says they match her mothers.")
				Entrys.push("I ask SUB how she got so beautiful, she looks away as she blushes.")
				if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
					Entrys = []
					if(unit(s[2]).Positive){
						if(party.units.length == 1){
							Entrys.push("I help SUB with cleaning the place, we make idle chitchat as we work together.")
						}else{
							Entrys.push("We help SUB with cleaning the place, I make idle chitchat with her as we work together.")
						}
					}else if(unit(s[2]).Funny){ 
						Entrys.push("I watch SUB paint a picture and tell her she's a great artist. She asks if she could paint me someday.")
						Entrys.push("I watch SUB finish a painting and tell her its great. She asks if she could paint me someday.")
					}else if(unit(s[2]).Slutty){
						if(party.units.length == 1){
							Entrys.push("I share a drink with SUB. The booze is stronger than I expected!")
							Entrys.push("I sit down at the table, and share a drink with SUB, the booze makes us both open up.")
						}else{
							Entrys.push("We share a drink with SUB. The booze is stronger than I expected!")
						}
					}else if(unit(s[2]).Hungry){
						if(party.units.length == 1){
							Entrys.push("I share a meal with SUB. I'm amazed by her appetite!")
						}else if(party.units.length == 2){
							Entrys.push("I cook a meal for SUB and my "+party.units[1].Name+". I'm amazed by SUB's appetite!")
						}else{
							Entrys.push("I cook a meal for SUB and the others. I'm amazed by SUB's appetite!")
						}
					}else if(unit(s[2]).Negative){
						if(party.units.length == 1){
							Entrys.push("I ask if I can take a nap, and SUB makes room on her bed for me.")
						}else if(party.units.length == 2){
							Entrys.push("I ask if we can take a nap, and SUB makes room on her bed for us.")
						}else{
							Entrys.push("I ask if I can take a nap, and SUB makes room on her bed for me. The other girls chat at the table and let us sleep.")
						}
					}else if(unit(s[2]).Negative){
						Entrys.push("CSUB lets me give her a massage as she lays on her bed.")
					}else{
						Entrys.push("I sit down at the table, and have some tea with SUB.")
					}
				}
			}else{//WET 
				if(unit(s[2]).Positive){
					Entrys.push("I flirt with SUB. She blushes and calls me romantic.")
				}
				if(unit(s[2]).Negative){
					Entrys.push("I flirt with SUB. She looks away, but tries sneaking a peek between my legs.")
				}
				if(unit(s[2]).Funny){
					Entrys.push("I flirt with SUB. She giggles and asks if I'll settle for a handjob.")
				}
				if(unit(s[2]).Slutty){
					Entrys.push("I flirt with SUB. She's clearly getting turned on.")
				}
				if(unit(s[2]).Hungry){
					Entrys.push("I flirt with SUB. She says I'm quite the treat.")
				}
				if(s[5]=="Forest"){
					Entrys.push("I put a flower behind SUB's ear. she twirls and asks if it looks good on her.")
				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					Entrys.push("I notice SUB is peeking at my cock, I ask if she thinks it will fit. She says she'd be willing to try!")
					Entrys.push("I use a single finger to rub SUB's bean, she moans as her tiny body hugs my arm!")
				}
				if(unit(s[2]).willing){
					Entrys.push("I flirt with SUB. She sticks a finger into my mouth, and asks if she tastes good.")
				}
				Entrys.push("I blow SUB a kiss, and she blows one back.")
				if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
					Entrys = []
					if(unit(s[2]).Positive){
						Entrys.push("I help SUB with cleaning the kitchen, we keep finding excuses to rub against each other.")
					}else if(unit(s[2]).Funny){
						Entrys.push("I pose for SUB as she paints on her canvas, she blushes when I ask if she likes what she sees.")
					}else if(unit(s[2]).Slutty){
						if(party.units.length == 1){
							Entrys.push("CSUB and I finish a bottle of wine and start drinking from another. We sit on her couch and she leans against me.")
						}else if(party.units.length == 2){
							Entrys.push("The three of us finish a bottle of wine and make our way to the couch. I wrap my arm around SUB and hold her close. She looks up at me and bats her eyelashes.")
						}else{
							Entrys.push("CSUB and I finish a bottle of wine and start drinking from another. We sit on her couch and she leans against me. The others laugh at how tipsy we are.")
						}
					}else if(unit(s[2]).Hungry){
						Entrys.push("I ask SUB if I can use her kitchen and she nods. I make her a tasty dessert and romantically feed it to her. She dabs some of the chocolate on her face and I lick it off.")
					}else if(unit(s[2]).Negative && party.units.length == 1){
						Entrys.push("While SUB lays in bed, I get close and wrap my arms around her, she moves her hips against mine.")
					}else if(unit(s[2]).Negative){
						Entrys.push("I give SUB a back massage and keep going lower, she doesn't protest when I grab two handfulls of her cute behind.")
					}else{
						Entrys.push("I tell SUB how sexy she looks, she spills her drink in surprise.")
						if(unit(s[2]).willing && party.units.length >= 3){
							Entrys.push("I flirt with SUB while sitting at the table. She sets an empty plate before me with a wink. I'm clueless, but the other girls are blushing as they look at us.")
						}
					}
					
				}
			}
		}else if(s[1]==0 && s[2] >=99 && map[party.y][party.x].hostile){
		// HERO FOOD HOSTILE
			Entrys.push("I flirt with SUB.")
			if(s[4] < .75){//DRY
				Entrys.push(choose(["I compliment SUB on her cute face","I compliment SUB on her cute smile","I flirt with SUB","I flirt with SUB","I banter with SUB","I hit on SUB","I try to charm SUB","I gingerly teast SUB"])+
					choose(["","",choose([" while she attacks me"," as she swipes at me"," from a safe distance"])])+
					choose([".",".",choose([", and she childishly sticks her tongue out at me.",". She says she's not falling for my tricks.",". She looks at me with distrust.",", but she looks like she still wants to fight.",", but she's still determined to fight.",", but she's still eager to fight."])])
				)
				if(Math.random()<.5){
					if(unit(s[2]).Tags[0] == "Catgirl"){
						Entrys.push("I grapple SUB, with one hand I rub her fluffy ear. She pushes me away confused, her face looks flustered.")
					}
					if(unit(s[2]).Tags[0] == "Foxgirl"){
						Entrys.push("I give SUB's tail a playful tug. She looks indignant, and keeps fighting.")
					}
					if(unit(s[2]).Tags[0] == "Froggirl"){
						Entrys.push("I ask SUB if she knows any other tricks with her tongue, she blushes bright red!")
						Entrys.push("I tell SUB that my tongue might be short, but it still knows a few tricks. She gulps loudly before getting ready for another attack.")
					}
					Entrys.push("I blow SUB a kiss. She almost blows one back before remembering this is a fight.")
					if(unit(s[2]).Slutty){ 
						Entrys.push("I wave at SUB, and she waves back before remembering this is a fight.")
						Entrys.push("I blow SUB a kiss. She blows one back before remembering this is a fight.")
					}
					Entrys.push("I blow SUB a kiss. She's bewildered by the gesture, but still seems eager to fight.")
					
					Entrys.push("I playfully spank SUB's behind and leap out of her reach.")
					Entrys.push("Instead of fighting SUB, I keep my distance, telling her how cute she looks.")
					Entrys.push("While avoiding her attacks, I tell SUB how adorable her face is when she's fighting.")
				}
				if(unit(s[2]).Clothing != "None"){
					if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("I tell SUB she looks cute in her skirt.")
						Entrys.push("I ask SUB whant kind of panties she's wearing, and she blushes as she pulls her skirt down.")
						Entrys.push("I tell SUB I want to see her without the tubetop, and she shouts at me to get serious!")
					}else if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("I tell SUB she'd look cuter without her armor, but she tells me it's staying on.")
						Entrys.push("I ask SUB what she looks like without her armor, and she gets flustered.")
						Entrys.push("I ask SUB if she's this enthusiastic outside of her armor.")
					}else if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("I tell SUB that I love her dress, and she thanks me before remembering this is a fight.")
						Entrys.push("I tell SUB that I'd love to see her dress on my bedroom floor, and she blushes.")
						Entrys.push("I tell SUB that she looks cute in her dress, and she does a flourish before returning to her fighting stance.")
					}
					if(unit(s[2]).Positive){
						Entrys.push("I tell SUB she looks cute in her outfit, and she smiles proudly. Unfortunately she still seems eager to fight though.")
					}
					if(unit(s[2]).Negative){
						Entrys.push("I tell SUB she looks cute in her outfit, but she only calls me a liar.")
					}
					if(unit(s[2]).Funny){
						Entrys.push("I tell SUB she looks cute in her outfit, and she retorts that she looks better out of it!")
					}
					if(unit(s[2]).Slutty){
						Entrys.push("I tell SUB she looks cute in her outfit, and she retorts that she looks better out of it!")
					}
					if(unit(s[2]).Hungry){
						Entrys.push("I tell SUB she looks cute in her outfit, but she only calls me a liar.")
					}
				}
				if(unit(s[2]).Positive){
					Entrys.push("I flirt with SUB. She tells me I'm very charming, but that she never backs down from a fight.")
				}
				if(unit(s[2]).Negative){
					Entrys.push("I flirt with SUB. She blushes and won't make eye contact with me as we fight.")
				}
				if(unit(s[2]).Funny){
					Entrys.push("I flirt with SUB. She laughs and says I couldn't handle her.")
				}
				if(unit(s[2]).Slutty){
					Entrys.push("I flirt with SUB. She giggles and asks if I always try to fuck during a duel.")
				}
				if(unit(s[2]).Hungry){
					Entrys.push("I flirt with SUB. She says she's too much woman for me.")
				}
				if(unit(s[2]).Tags[0] == "Batgirl"){
					Entrys = ["I blow SUB a kiss, she's bewildered by the gesture.","I tell SUB how adorable her face is when she's flying.","I wave at SUB, and tell her how cute she looks from below."]
				}
				if(unit(s[2]).Tags[0] == "Harpygirl"){
					Entrys = ["I tell SUB how cute her feathers look.","I blow SUB a kiss, she's bewildered by the gesture.","I tell SUB how adorable her face is when she's flying.","I wave at SUB, and tell her how cute she looks from below."]
				}
			}else{//WET
				Entrys.push(choose(["I compliment SUB on her sexy body","I tell sub I love her"+DescWord(unit(s[2]),"butt",80)+choose(["ass!","butt.","rear."]),"I flirt with SUB","I flirt with SUB","I try seducing SUB","I to captivate SUB","I try to charm SUB","I talk dirty to SUB"])+
					choose(["","",choose([" while she attacks me"," as she swipes at me"," from a safe distance"])])+
					choose([".",choose([". It looks like she's starting to get tempted.",". She's slowly getting less focused on the fight.",". She's getting flustered by my advances.",". She looks at me with lust, but doesn't let down her guard.",". Her eyes soften, but she's still ready to fight.",", I think she's starting to trust me.",". She starts to flirt back, but doesn't seem ready to stop fighting."])])
				)
				if(unit(s[2]).Positive){
					Entrys.push("I flirt with SUB. She blushes and calls me romantic.")
				}
				if(unit(s[2]).Negative){
					Entrys.push("I flirt with SUB. She starts staring between my legs as we fight.")
				}
				if(unit(s[2]).Funny){
					Entrys.push("I flirt with SUB. She giggles and says I can have her if I can catch her.")
				}
				if(unit(s[2]).Slutty){
					Entrys.push("I flirt with SUB. She's clearly getting turned on.")
				}
				if(unit(s[2]).Hungry){
					Entrys.push("I flirt with SUB. She says I'm quite the treat, but still has her guard up.")
				}
				if(unit(s[2]).Tags[0] == "Catgirl" || unit(s[2]).Tags[0] == "Wolfgirl" || unit(s[2]).Tags[0] == "Froggirl" || unit(s[2]).Tags[0] == "Foxgirl"){
					Entrys.push(
						choose(["I flirt with SUB","I flirt with SUB","I try seducing SUB","I to captivate SUB","I try to charm SUB"])+
						choose([".",choose([". She timidly rubs her thighs together.",". She bites down hard on her finger, looking unsure about continuing the fight.",". She's starting to look horny.",". She looks at me lustfuly, before shaking her head to regain her senses.",", and a bead of drool rolls down the side of her jaw.",", and I see her knees start getting wobbly."])])
					)
				}
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("I push SUB until her back is against the wall, she braces for my fist, but instead feels my lips against hers.")
					Entrys.push("I press SUB against the table, and grind against her before letting go.")
				}
				if(unit(s[2]).Tags[0] == "Catgirl"){
					Entrys.push("I call SUB a naughty kitty. She bites her lip, looking flustered.")
					Entrys.push("I spin SUB around and with both hands I massage her furry ears. Her body goes slack against mine until she remembers she was fighting me!")
				}
				if(unit(s[2]).Tags[0] == "Foxgirl"){
					Entrys.push("I give SUB's tail a playful tug. She seems flustered afterwards!")
				}
				if(unit(s[2]).Tags[0] == "Froggirl"){
				
				}
				if(unit(s[2]).Slutty){
					Entrys.push("I give SUB's cute butt a squeeze. She moans before slapping my hand away.")
					Entrys.push("Instead of fighting SUB, I keep my distance, telling her all the naughty things I want to do to her. Her gaze stays on my length as I circle her.")
				}
				if(unit(s[2]).Clothing != "None"){
					if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("I get close, but instead of attacking I just playfully try flipping up her skirt. She lets out a laugh before getting serious again.")
						Entrys.push("I do a series of rolls around SUB. Her thighs snap together once she realizes I'm just trying to peek under her skirt."+choose([""],[" She kicks me away, but only waits for me to stand instead of attacking while I'm down."]))
						Entrys.push("I playfully try lifting SUB's chest wrappings, and she pays more attention to covering herself than fighting me."+choose([""],[" She tries acting pissed, but the smile on her face tells a different story."]))
					}else if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("I get close, but instead of attacking I just start undoing the straps of her armor. She pays more attention to staying dressed than fighting me.")
						Entrys.push("I try to cop a feel of SUB's chest, but her leather armor leaves me unsatisfied. She blushes when I tell her I want to try again without the armor.")
						Entrys.push("I nimbly undo SUB's belt and rip it free. She blushes as she struggles to keep her pants from falling."+choose([""],[" When she asks for the belt back, I toss behind me casually. She takes a wider stance to keep herself from becoming exposed."," When she asks for the belt back, I toss it to her and she hurriedly scrambles to put it back on with a smile platered across her face."]))
					}else if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("I grab SUB's collar with both hands, and rip the front of her dress open. She's completely flustered as she tries covering her newfound cleavage!")
						Entrys.push("I get close, but instead of attacking I just playfully pull her in for a quick dance. She matches my movements for a bit before remembering this is a fight...")
						Entrys.push("I playfully try lifting SUB's dress, and she pays more attention to covering herself than fighting me."+choose([""],[" She tries acting pissed, but the smile on her face tells a different story."]))
					}
					if(unit(s[2]).Positive){
						Entrys.push("I fondle SUB through her outfit, and she enjoys it for a few moments before pushing me away.")
					}
					if(unit(s[2]).Negative){
						Entrys.push("I fondle SUB through her outfit, and she bites her lip as she shoves me away. She tries shouting at me, but her voice keeps catching.")
					}
					if(unit(s[2]).Funny){
						Entrys.push("I fondle SUB through her outfit, and she gropes me back for a moment before pushing me away.")
					}
					if(unit(s[2]).Slutty){
						Entrys.push("I fondle SUB through her outfit, and she gropes me back for a moment before pushing me away.")
					}
					if(unit(s[2]).Hungry){
						Entrys.push("I fondle SUB through her outfit, and she bites her lip as she shoves me away. She tries shouting at me, but her voice keeps catching.")
					}
				}
				Entrys.push("I embrace SUB, and whisper sweet-nothings into her ear. She hesitates for a moment before suddenly pushing me away.")
				Entrys.push("I playfully spank SUB's behind and slip out of her reach. She rubs where my hand left its mark, her face flushed.")
				Entrys.push("Instead of fighting SUB, I keep my distance, telling her all the naughty things I want to do to her. She tries to look focused, but she's starting to breathe heavily!")
				Entrys.push("While avoiding her attacks, I ask SUB if she's this passionate in bed.")
				if(unit(s[2]).legs && unit(s[2]).arms && unit(0).CPun >= 31){ 
					s["sceneA"] = choose(["nipple","kiss","knee"])
					if(s["sceneA"] == "nipple"){
						if(unit(s[2]).bust == -1){//FLAT
							Entry += choose([
								"CSUB flinches when I get near, but instead of attacking, I reach for her chest.",
								"Even though I'm pretty hurt, I still have a one track mind. Ignoring the pain, I reach for SUB's chest.",
								"I reach out and pinch SUB's nipples."
							])
							Entry += choose([
								" She looks pissed, but doesn't do anything to stop me.",
								" She blushes as her body squirms under my touch, and I feel her nipples harden.",
								" Her body squirms under my touch, and I feel her nipples harden. She looks angry, but seems too shocked to do anything."
							])
							Entry += choose([""],[
								" I pinch down hard, and she yelps as she pulls away.",
								" Her breasts barely fill my palms, and she gasps when I give them a squeeze.",
								" Pinching down hard gets her breathing heavy, she bites her lip until I let go."
							])
							Entry += choose([""],[
								" Surprisingly, she pouts when I back off.",
								" She looks almost upset when I back away.",
								" She backs up, but looks almost upset that I let her get away."
							])
						}else{//HAS BOOBS
							Entry += choose([
								"CSUB flinches when I get near, but instead of attacking, I reach to grope her breasts.",
								"Even though I'm pretty hurt, I still have a one track mind. Ignoring the pain, I reach for SUB's breasts.",
								"I reach out and grope SUB's breasts."
							])
							Entry += choose([""],[
								" My fingers sink into her supple flesh as I squeeze.",
								" They swell between my fingers as I caress them.",
								" My hands cover her nipples and I firmly squeeze."
							])
							Entry += choose([
								" She looks pissed, but doesn't do anything to stop me.",
								" She's furious, but I also feel her nipples harden.",
								" Her body squirms under my touch, and I feel her nipples harden. She looks angry, but seems too shocked to do anything."
							])
							Entry += choose([""],[
								" I pinch down hard, and she yelps loudly.",
								" Giving them a tweak elicits a gasp, and I twist until she's breathing heavy.",
								" Pinching down hard gets her breathing heavy, she bites her lip until I let go."
							])
							Entry += choose([
								" Surprisingly, she pouts when I back off.",
								" She looks almost upset when I back away.",
								" She backs up, but looks almost upset that I let her get away."
							])
						}
					}else if(s["sceneA"] == "kiss"){
						Entry += choose([
							"CSUB flinches when I get near, but instead of attacking, I lock lips with her.",
							"I grab the small of SUB's back, and pull her into a kiss.",
							"I wrap my hand around the back of SUB's head and bring her into a kiss."
						])
						Entry += choose([""],[
							" She tries pulling away, but I hold her close.",
							" She struggles in my grip, but I don't let go.",
							" She grimaces at first, but then softens as I embrace her."
						])
						Entry += choose([""],[
							" Her eyes snap shut as I part her lips.",
							" Her eyes go wide as I slip past her lips.",
							" Nibbling on her lip elicits a yelp."
						])
						Entry += choose([""],[
							" At first she seems upset, but then starts stroking my tongue with hers.",
							" After a moment, she timidly starts sucking my tongue while it plays with hers.",
							" My tongue discovers hers, and she gasps."
						])
						
						Entry += choose([""],[
							" We stay together for a while, and I hear her breathing slow.",
							" The kiss lasts longer that I expected, and I hear her make a small moan.",
							" I wait for her to push me away, but she doesn't seem ready to stop yet."
						])
						Entry += choose([
							" A trail of saliva falls between us as I back away.",
							" Her eyebrows furrow as our lips part.",
							" Her mouth hangs open as I break from it."
						])
					}else if(s["sceneA"] == "knee"){
						Entry += choose([
							"I shove my knee between SUB's thighs",
							"CSUB backs up into OBJECTTALL as I approach. Once I'm near, I jam my knee between her legs",
							"I jam my knee between SUB's legs"
						])
						Entry += choose([
							", and start grinding against her.",
							". She gasps when I start grinding against her.",
							" and rub it against her mound."
						])
						Entry += choose([""],[
							" She tries pushing me away, but I don't stop until she's wet.",
							" I don't stop until she's wet.",
							" Surprisingly, she's already wet!"
						])
						Entry += choose([""],[
							" Her knees grow weak as I stroke my leg against her clit.",
							" Her breathing quickens as I stroke my leg against her clit.",
							" Her legs squeeze against my knee as she struggles to keep standing."
						])
						Entry += choose([""],[
							" She timidly begins reciprocating against my length. Her cheeks turn red when she feels me grow.",
							" She holds my shoulders for support as her body starts to tremble.",
							" She gasps as I push even harder."
						])
						Entry += choose([
							" Surprisingly, she pouts when I back off.",
							" She looks almost upset when I back away.",
							" She slips away, but looks almost upset that I let her escape."
						])
					}
					Entrys = [Entry]
				}
				if(unit(s[2]).Tags[0] == "Slimegirl"){
					Entrys.push("I kiss SUB. Her lips have a great "+DescWord(unit(s[2]),"slime",100)+" taste to them.")
				}
				if(unit(s[2]).Tags[0] == "Batgirl"){
					Entrys = ["I blow SUB a kiss, and she blows one back!","I tell SUB how sexy she looks when she's flying.","I tell SUB all the naughty things I want to do to her when she lands."]
				}
				if(unit(s[2]).Tags[0] == "Harpygirl"){
					Entrys = ["I tell SUB I want to ruffle her feathers. She blushes, and nibbles on her lip.","I tell SUB I want to feel her feathers against my skin.","I blow SUB a kiss, and she blows one back!","I tell SUB how sexy she looks when she's flying.","I tell SUB all the naughty things I want to do to her when she lands."]
				}
			}
			if(Entrys.length == 0){
				Entrys.push("I flirt with SUB.")
			}
		}else
		//------------------------------------------------------------------------------------------
		if(s[1] < 100 && s[2] == 0 && map[party.y][party.x].hostile){
		// GOOD HERO PEACE
			Entrys.push("CDOM tells me I have a cute butt, I don't know if shes just joking or not.")
			if(unit(s[2]).Tags[0] == "Slimegirl"){
				Entrys = ["CDOM makes strange whale noises at me..."]
			}
		}else if(s[1] < 100 && s[2] == 0 && !map[party.y][party.x].hostile){
		// GOOD HERO HOSTILE
			Entrys.push("CDOM tells me I look very manly fighting, but I doubt she's being serious.")
			if(unit(s[2]).Tags[0] == "Slimegirl"){
				Entrys = ["CDOM makes strange whale noises at me..."]
			}
		}else if(s[1] >=99 && s[2] == 0 && map[party.y][party.x].hostile){
		// FOOD HERO PEACE
			Entrys.push("CDOM tells me I have a cute butt, I don't know if shes just joking or not.")
			if(unit(s[2]).Tags[0] == "Slimegirl"){
				Entrys = ["CDOM makes strange whale noises at me..."]
			}
		}else if(s[1] >=99 && s[2] == 0 && !map[party.y][party.x].hostile){
		// FOOD HERO HOSTILE
			Entrys.push("CDOM tells me I look sexy in a fight, but I doubt she's being serious.")
			if(unit(s[2]).Tags[0] == "Slimegirl"){
				Entrys = ["CDOM makes strange whale noises at me..."]
			}
		}else
		//------------------------------------------------------------------------------------------
		if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && !map[party.y][party.x].hostile){
		// SAME PEACE
			if(s[4] < .75){//DRY
				Entrys.push("DOM softly kisses SUB!")
			}else{//WET
				Entrys.push("DOM makes out with SUB.")
			}
		}else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && map[party.y][party.x].hostile){
		// SAME HOSTILE
			if(s[4] < .75){//DRY
				Entrys.push("We are supposed to stay focused, but DOM keeps kissing SUB!")
			}else{//WET
				Entrys.push("We are supposed to stay focused, but DOM keeps making out with SUB.")
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && !map[party.y][party.x].hostile){
		// DIFF PEACE
			Entrys.push("CDOM flirts with SUB.")
			Entrys.push("CDOM flirts with SUB.")
			if(unit(s[1]).Tags[0] == "Slimegirl" && unit(s[2]).Tags[0] == "Slimegirl"){
				Entrys.push("CDOM makes strange whale noises at SUB. I wonder what she's saying...")
			}
			if(s[4] < .75){//DRY
				if(unit(s[2]).Tags[0] == "Mousegirl" && unit(s[2]).Size > 1){
					Entrys.push("CDOM picks up SUB and gives her a big hug. CSUB breaks free and hides behind a stalagmite. She says she doesn't like being picked up.")
					Entrys.push("CDOM wonders aloud if SUB would fit inside her pussy. CSUB blushes and hides behind a stalagmite. She says she doesn't want to find out.")
					Entrys.push("CDOM picks up a tiny phallic mushroom lying on a blanket and asks if DOM ever uses the fungus growing here to pleasure herself. CSUB tells DOM she does nothing of the sort while taking back the mushroom and hiding it under the blanket.")
				}
				Entrys.push("CDOM starts rubbing SUB's shoulders and whispering into her ear, I wonder what she's saying")  
				if(unit(s[1]).Tags[0] == "Slimegirl"){
					Entrys = ["CDOM makes strange whale noises at SUB. They sound strangely sexual in nature..."]
				}
			}else{//WET
				if(unit(s[2]).Tags[0] == "Mousegirl" && unit(s[2]).Size > 1){
					Entrys.push("CDOM picks up SUB and gives her a big kiss. CSUB tries kissing back, but her face is completely covered by DOM's lips.")
					Entrys.push("CDOM wonders aloud if SUB would fit inside her pussy. CSUB blushes and says she'd be willing to try!")
					Entrys.push("CDOM picks up a tiny phallic mushroom lying on a blanket and asks if DOM ever uses the fungus growing here to pleasure herself. CSUB tells DOM she does nothing of the sort while taking back the mushroom and hiding it under the blanket.")
				}
				Entrys.push("CDOM starts rubbing SUB's shoulders and whispering into her ear. CSUB is clearly getting turned on by whatever she's hearing.")  
				if(unit(s[1]).Tags[0] == "Slimegirl"){
					Entrys = ["CDOM makes strange whale noises at SUB. They sound strangely sexual in nature..."]
				}
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		//TODO:       _D   H
		// DIFF HOSTILE
			Entrys.push("CDOM flirts with SUB.")
			Entrys.push("CDOM flirts with SUB.")
			if(s[4] < .75){//DRY
				Entrys.push(choose(["CDOM flirts with SUB","CDOM flirts with SUB","CDOM banters with SUB","CDOM hits on SUB","CDOM trys to charm SUB"])+
					choose(["",choose([" while dodging her attacks"," while avoiding her attacks"," from a safe distance"])])+
					choose([".",choose([", but she looks like the SUBRACELONG still wants to fight.",", but the SUBRACELONG is still determined to fight.",", but the SUBRACELONG is still eager to fight."])])
				)
				Entrys.push("CDOM gives SUB a hug before being pushed away.")
				Entrys.push("CDOM gives SUB's breast a squeeze before being pushed away.")
				Entrys.push("CDOM kisses SUB before being pushed away.")
					
				if(unit(s[1]).Tags[0] == "Froggirl"){
					if(unit(s[1]).Funny){
						Entrys.push("CDOM makes a pseudo balloon animal with her tongue and presents it towards SUB. It looks great, but I'm not sure its getting SUBSHORT in the mood...")
					}
					Entrys.push("CDOM wraps her tongue around SUB's "+DescWord(unit(s[2]),"butt",50)+"hips and gives them a playful squeeze. CSUBSHORT blushes as she pulls herself free.")
					Entrys.push("CDOM latches her tongue onto one of SUB's "+DescWord(unit(s[2]),"breasts",50)+"breasts. CSUBSHORT blushes when it starts wiggling around.")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM rubs her cheek against SUB's "+DescWord(unit(s[2]),"breasts",50)+"breasts and gives one a playful squeeze. CSUBSHORT blushes as she pulls herself free of the purring kitty.")
					Entrys.push("CDOM rubs her face against SUB's cheek. CSUBSHORT doesn't push away until her "+DescWord(unit(s[2]),"butt",50)+"butt starts getting groped.")
				}
				if(unit(s[2]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM blows SUB a kiss, she's bewildered by the gesture.","CDOM tells SUB how adorable her face is when she's flying.","CDOM waves at SUB, and tells her how cute she looks."]
				}
				if(unit(s[2]).Tags[0] == "Harpygirl"){
					Entrys = ["CDOM compliments SUB on her beautiful feathers.","CDOM blows SUB a kiss, she's bewildered by the gesture.","CDOM tells SUB how adorable her face is when she's flying.","CDOM waves at SUB, and tells her how cute she looks."]
				}
				if(unit(s[1]).Tags[0] == "Slimegirl"){
					Entrys = ["CDOM makes strange whale noises at SUB."]
				}
				if(unit(s[2]).Clothing != "None"){
					if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("CDOM tells SUB she looks cute in her skirt.")
						Entrys.push("CDOMs ask SUB whant kind of panties she's wearing.")
						Entrys.push("CDOM gropes SUB through her top!")
					}else if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("CDOM tells SUB she'd look cuter without the armor.")
						Entrys.push("CDOM asks SUB what she looks like without the armor.")
						Entrys.push("CDOM spanks SUB's armored butt!")
					}else if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("CDOM tells SUB that her dress is cute, the two chat about it for a moment before remembering it's a fight.")
						Entrys.push("CDOM asks SUB if she can try her dress on.")
						Entrys.push("CDOM gropes SUB through her dress!")
					}
					if(unit(s[2]).Positive){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, and SUBSHORT smiles proudly. Unfortunately she still seems eager to fight though.")
					}
					if(unit(s[2]).Negative){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, but SUBSHORT only calls her a liar.")
					}
					if(unit(s[2]).Funny){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, and SUBSHORT retorts that she looks better out of it!")
					}
					if(unit(s[2]).Slutty){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, and SUBSHORT retorts that she looks better out of it!")
					}
					if(unit(s[2]).Hungry){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, but SUBSHORT only calls her a liar.")
					}
				}
			}else{//WET 
				Entrys.push(choose(["CDOM flirts with SUB","CDOM flirts with SUB","CDOM banters with SUB","CDOM hits on SUB","CDOM trys to charm SUB"])+
					choose(["",choose([" while dodging her attacks"," while avoiding her attacks"," from a safe distance"])])+
					choose([".",choose([". It looks like the SUBRACELONG is starting to get tempted.",". The SUBRACELONG is slowly getting less focused on the fight.",". The SUBRACELONG is getting flustered by the advances.",". The SUBRACELONG looks at her with lust, but stays on guard.",". The SUBRACELONG's eyes soften, but she's still ready to fight.",". The SUBRACELONG starts to flirt back, but doesn't seem ready to stop fighting."])])
				)
				Entrys.push("CSUB screams out as DOM pinches down hard on both of her exposed nipples! CDOMSHORT asks if SUBSHORT is going to be a good girl, and releases the sore nips when she whimpers that she will!")
				Entrys.push("CDOM grabs SUB's head and pulls her into a passionate kiss. CSUB struggles to escape, but her eyes are rolled back. All fighting stops as the two make out. Eventually DOM breaks the kiss and steps back.")
				Entrys.push("CDOM slips her hand between SUB's legs, she moans before weakly shoving DOM away.")
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM rubs her cheek against SUB's "+DescWord(unit(s[2]),"breasts",50)+"breasts and gives one a playful bite. CSUBSHORT moans as she pulls herself free of the purring girl.")
					Entrys.push("CDOM rubs her face against SUB's cheek. CSUBSHORT seems to enjoy it, but snaps her "+DescWord(unit(s[2]),"butt",50)+"thighs together when DOMSHORT tries to finger her. She's clearly flustered as she pushes the kitty away.")
				}
				if(unit(s[2]).Clothing != "None"){
					if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("CDOM tells SUB she looks cute in her skirt. CSUBSHORT gets flustered by the remark!")
						Entrys.push("CDOMs ask SUB whant kind of panties she's wearing. CSUBSHORT gets flustered by the question!")
						Entrys.push("CDOM gropes SUB through her top! CSUBSHORT waits a moment before pushing her off...")
					}else if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("CDOM tells SUB she'd look cuter without the armor. CSUBSHORT only smiles and looks away.")
						Entrys.push("CDOM asks SUB what she looks like without the armor. CSUBSHORT tells her to come find out!")
						Entrys.push("CDOM spanks SUB's armored butt! CSUBSHORT pouts, but clearly isn't too upset...")
					}else if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("CDOM tells SUB that her dress is cute, the two chat about it for a moment before remembering it's a fight.")
						Entrys.push("CDOM asks SUB if she can try her dress on. CSUBSHORT jokes that she'd rather try being naked like DOMSHORT!")
						Entrys.push("CDOM gropes SUB through her dress! CSUBSHORT lets her get a good feel before pushing her away!")
					}
					if(unit(s[2]).Positive){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, and SUBSHORT smiles proudly. Unfortunately she still seems eager to fight though.")
					}
					if(unit(s[2]).Negative){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, but SUBSHORT only calls her a liar.")
					}
					if(unit(s[2]).Funny){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, and SUBSHORT retorts that she looks better out of it!")
					}
					if(unit(s[2]).Slutty){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, and SUBSHORT retorts that she looks better out of it!")
					}
					if(unit(s[2]).Hungry){
						Entrys.push("CDOM tells SUB she looks cute in her outfit, but SUBSHORT only calls her a liar.")
					}
				}				
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push("CDOM wraps her tongue around SUB's "+DescWord(unit(s[2]),"butt",50)+"hips and gives them a playful squeeze. CSUBSHORT moans as she pulls herself free.")
					Entrys.push("CDOM latches her tongue onto one of SUB's "+DescWord(unit(s[2]),"breasts",50)+"breasts. CSUBSHORT moans when it starts wiggling around.")
					Entrys.push("From a considerable distance, DOM flings her tongue between SUB's "+DescWord(unit(s[2]),"butt",50)+"thighs. CSUBSHORT moans when it starts wiggling deeper. She's a hot mess when she finally manages to pull it out!")
				}
				if(unit(s[2]).Tags[0] == "Batgirl"){
					Entrys = ["CSUB pumps her hips at SUB, she's flustered by the gesture.","CSUB tells SUB how sexy her muscles look when she's flying.","CDOM tells SUB all the naughty things she plans to do to her when she lands.","CSUB says she saw SUB's lust dripping when she flew by, SUB snaps her legs together, blushing in embarrassment!"]
				}	
				if(unit(s[2]).Tags[0] == "Harpygirl"){
					Entrys = ["CSUB pumps her hips at SUB, she's flustered by the gesture.","CSUB tells SUB how sexy her feathers look when she's flying.","CDOM tells SUB all the naughty things she plans to do to her when she lands.","CSUB says she saw SUB's lust dripping when she flew by, SUB snaps her legs together, blushing in embarrassment!"]
				}
				if(unit(s[1]).Tags[0] == "Slimegirl"){
					Entrys = ["CDOM makes strange whale noises at SUB. They sound strangely sexual in nature..."]
				}
			}
		}
	}
//###########################################################################################################################################################################
//	TODO:       FLEE
	if(s[0]==2){//FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE - FLEE
		if(s[1]==0 && s[2] >=99 && !map[party.y][party.x].hostile){
		// HERO FOOD PEACE FUNNY
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys.push("I try to leave, but SUB offers me a warm cookie from a plate! I sit at the table with SUB and munch down the tasty treat. If her cooking is this good, I wonder how great she tastes?")
				}
				Entrys.push("I turn to leave, but SUB grabs my hand. I look back and she pulls me into a hug! I guess I can stay a little longer.")
				 
		}else if(s[1]==0 && s[2] >=99 && map[party.y][party.x].hostile){
		// HERO FOOD HOSTILE
			if(s[3] == 1){//ESCAPED
				if(s[5]=="Indoors"){
					Entrys.push("I sneak under the table, and slip out the door before SUB can stop me!")
				}
					Entrys.push("I slip past SUB and keep running! I successfully escape the fight!")
			}else{//TRAPPED
				if(s[5]=="Indoors"){
					Entrys.push("I try to escape, but SUB throws a chair at me, knocking me away from the door! Tears start to run down my face as I realize SUB has me right where she wants me!")
				}
				Entrys.push("I try to escape, but SUB blocks my way. Sweat starts to pour down my face as I worry this fight might be my last!")
				if(s[5]=="Dungeon"){
					Entrys = ["I try to escape, but SUB blocks my way. The Castle doorways are too narrow to escape through during a fight!"]
				}
			}
		}else
		//------------------------------------------------------------------------------------------
		if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && !map[party.y][party.x].hostile){
		// DIFF PEACE FUNNY
			if(s[5]=="Indoors"){
				Entrys.push("CDOM tries to leave, but SUB offers her a warm cookie from a plate! CDOM sits at the table with SUB and munches down her tasty treat!")
			}
			Entrys.push("CDOM turns to leave, but SUB asks if she will stay a little longer. They walk back to us holding hands.")
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		// DIFF HOSTILE
			if(s[3] == 1){//ESCAPED
				if(s[5]=="Indoors"){
					Entrys.push("CDOM sneaks under the table, and slips through the doorway before SUB can stop her!")
				}
				Entrys.push("CDOM slips past SUB and keeps on running! She got away safely!")
			}else{//TRAPPED
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys.push("CDOM tries to escape, but SUB quickly blocks the door! Tears start to run down her face as SUB laughs!")
				}
					Entrys.push("CDOM tries to run away, but she's blocked by SUB! She looks panicked as the other girl laughs at the failed escape attempt!")
				if(s[5]=="Dungeon"){
					Entrys = ["CDOM tries to run away, but she's blocked by SUB! The Castle doorways are too narrow to escape through during a fight!"]
				}
			}
		}
	}
//###########################################################################################################################################################################
//	TODO:       FEAST
	if(s[0]==3){//FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST - FEAST
	//subval == -2:SIZE -1:FULL 0:FAILED 1:ASLEEP 2:UNWILLING 3:WILLING
		if(s[1]==0 && s[4] == -1){
				Entrys.push("Oh geeze, I couldn't eat another bite!")
				Entrys.push("I'm too horny to eat right now!")
				Entrys.push("My stomach already feels like its going to burst!")
				Entrys.push("I need to work off my last meal before I can eat another girl!")
				Entrys.push("I'll get fat if I eat again so soon!")
		}
		if(s[1]==0 && s[2] < 100 && !map[party.y][party.x].hostile){
		// HERO GOOD PEACE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("She's  too big for me to eat now, I need to find a way to increase my appetite...")
			}else if(unit(s[2]).willing){//EAGER
				if(party.lastAction[2] == s[2] && party.lastAction[1] == s[1] && party.lastAction[0] == 4){
					Entrys.push("CSUB asks if we can go again, but instead I shove her head into my mouth. She starts masturbating as I swallow more of her. She cums as the last of her slides into my belly."+choose([""],[" She thanks me for all the fun we had, and moans as she digests."]))
				}
				if(unit(s[2]).arms && unit(s[2]).legs){
				
				//---LONG - MAKE AN INDOORS/OUTDOORS VERSION(Bed/Table/Couch)
					//Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose before finishing her descent. I feel my belly jiggle as she cums!")	
					s[11] = choose(["TailUp","HeadUp"])
					s[12] = choose(["WaistCum","ChestCum","Dialog"])
					if(party.lastAction[2] == s[2] && party.lastAction[1] == s[1] && party.lastAction[0] == 4){
						Entry = 
							choose([
								"CSUB asks if we can go again, but I tell her I'd rather have a snack.",
								"CSUB asks if she makes a good lover. I nod, but say she'll make a better meal.",
								"CSUB tells me she wants to be on top, but I reply that I want her inside as I rub my belly.",
								"CSUB tells me she loves feeling me inside. I rub my belly and reply that this time I want her inside."
							])+
							choose([
								" She gives me a coy smile and tells me to dig in!",
								" She blushes, and pulls me into a hug. For a moment we just stay embraced, but the silence is broke my hungry gut.",
								" She lifts her eyebrows as she says she's been waiting!",
								" She's surprised at first, but then clearly gets excited!"
							])
					}else{
						Entry = choose([
							choose(["I tell SUB I need to have her","I call SUB over to me for some fun"])+
							choose([". She asks if I'm going to fuck her, or eat her.",". She asks if I'm looking for some action, or some lunch.",", and she asks if this is the day I eat her.",", and she asks if she's on the menu today.","! She asks if I'm hungry or horny.",", and she asks what I have in mind."])+
							choose([" I lick my lips"," My gut grumbles in response"," I rub my belly"," I look down at my gut"])+
							choose([", and she blushes.",", and she cocks her eyebrow.",", and she smirks.",", and she nods eagerly.",", and she playfully punches my shoulder.",". She bites her lip and nods.",". She grins and tells me to go ahead.",". She smiles and tells me she's been waiting.",", and she tells me to dig in!",", and she pulls me into a kiss. As we break away, she whispers that she's all mine."])
							,
							choose([" I pull SUB into a hug."," I walk up and embrace SUB."])+
							choose([" She hugs back"," She holds me tightly"])+
							choose([" as I nibble on her neck."," as I lick her neck."," as I give her a trail of kisses along her jaw."," as I give her a trail of kisses across her forhead."])+
							choose([" I whisper"," I whisper into her ear"," Under my breath, I tell her"])+
							choose([" that I'm going to eat her"," that she's good enough to eat"," that I'm craving some SUBRACE"," that I'm hungry"," that I've been dying for some SUBRACE"," that I need her inside me"])+
							choose([".",choose([", and she blushes.",", and she cocks her eyebrow.",", and she smirks.",", and she nods eagerly.",". She playfully punches my shoulder, but looks eager to be eaten.",". She bites her lip and nods.",". She grins and tells me to go ahead.",". She smiles and tells me she's been waiting.",". She pulls me into a kiss. As we break away, she whispers back that she's all mine."])])
							,
							choose(["I start nibbling on SUB's neck. A shiver runs up her spine when I start to drool.","I start nibbling on SUB's neck. Her back stiffens when she realizes what I want.","I walk up to SUB while licking my lips. Her eyes grow wide when she notices.","I walk up to SUB while rubbing my belly. It grumbles, and she gives me a nod.","I start licking SUB's neck. Her knees grow weak when my stomach grumbles."])
							//choose([", but before I can say anything"])
						])
					}
					if(s[11] == "TailUp"){
						//Positioning
						if(s[5]=="Indoors" && Math.random()<.9){
							Entry += choose([" She climbs onto the table and shakes her rear at me. I quickly sit as she lays flat on the tablecloth.",
							" She gets onto the table and lays on her stomach. I quickly sit as she wiggles her toes.",
							" She seductively lays on the bed and smiles over her shoulder. Instead of joining her, I kneel on the floor.",
							" She jumps onto the bed with her feet hanging over the edge. Her toes wiggle as I kneel before them."])
						}else{
							if(Math.random()<.5 || unit(s[2]).bust == -1 || s[12] == "ChestCum"){
							Entry += choose([" She turns before dropping to her stomach"," She turns as she drops to the GROUND"," She turns before dropping to her stomach"," She lays on the GROUND before rolling onto her stomach. She tells me to hurry"])+
								choose([". I quickly kneel behind her.",", and looks back at me as I kneel behind her.",", and looks back at me. She spanks her "+DescWord(unit(s[2]),"butt",100)+"rear as I kneel behind her.",", and lifts her calves up. She smiles back at me as I kneel.",", and wiggles her toes. She smiles back at me as I kneel."])
							}else{	
								Entry += choose([" I kneel down and suck on her "+DescWord(unit(s[2]),"breasts",80)+"breast"," I kneel down and lick her "+DescWord(unit(s[2]),"breasts",80)+"breasts"," I kneel down and stuff her "+DescWord(unit(s[2]),"breasts",80)+"breast into my mouth"," She makes me kneel, and shoves my face against her "+DescWord(unit(s[2]),"breasts",80)+"breasts. I start sucking on one"," I kneel down and she shoves a "+DescWord(unit(s[2]),"breasts",80)+"breast into my mouth. I'm lost in her flavor"])+
								choose([" while she squirms. Goosebumps cover her body before she"," as she pets my head. She eventually",". She rubs her face in my hair and breaths me in. I look up at her as she"])+
								choose([" pulls away to lie on the GROUND. She rests on her stomach as she looks back."," pushes me away, and turns to lie on the GROUND."])
							}
						}
						//Start Eating
						if(unit(s[2]).Tags[0] == "Deergirl"){
							Entry += choose([" I take her hooves, and slide them into my mouth."," I give her small hooves a kiss before shoving them into my mouth."])+choose([" Her white tail quickly nears as I work my way up her body."," Her white tail quivers as I work my way up her body."," Her ears stand straight as I continue up her body."])
						}else if(unit(s[2]).Tags[0] == "Bunnygirl"){
							Entry += choose([" I take her ankles, and slide them into my mouth."," I give her cute paws a kiss before shoving them into my mouth."])+choose([" Her fluffball of a tail quickly nears as I work my way up her body."," Her fluffball of a tail quivers as I work my way up her body."," Her fluffy ears stand straight as I continue up her body."])
						}else if(unit(s[2]).Tags[0] == "Catgirl"){
							Entry += choose([" I take her ankles, and slide them into my mouth."," I carefully avoid her claws as I start eating."," I give her cute paws a kiss before shoving them into my mouth."])+choose([" Her tail swishes side to side as I work my way up her body."," Her tail curls as I work my way up her body."," Her tail rises as I work my way up her body."," Her tail tickles my nose as I work my way up her body."," Her fluffy ears lie flat as I continue up her body."," Her fluffy ears point back as I continue up her body."])
						}else if(unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Wolfgirl"){
							Entry += choose(["I open my mouth, and she plunges her paws into my mouth."," I take her ankles, and slide them into my mouth."," I give her cute paws a kiss before shoving them into my mouth."])+choose([" Her fluffy tail takes up most of my view as I work my way up her body."," Her tail wags as I work my way up her body."," Her tail curls as I work my way up her body."])
						}else if(unit(s[2]).Tags[0] == "Froggirl"){
							Entry += choose([" Her slick ankles easily slip into my mouth"," I give her webbed feet a slimy lick before shoving them into my mouth"])+choose([", and her mucus coats my throat as I work my way up her body.",", and her glistening body slides in with ease.",", and her body squishes into my throat with ease."])
						}
						//Almost Eaten > Fully Eaten
						if(s[12] == "ChestCum"){//cunnilingus
							//chest scene then swallow
							if(Math.random()<.2 || unit(s[2]).bust == -1){//She fingers herself
									Entry += choose(["My teeth scrape against her knuckles as she starts rubbing her clit."," Before I get to her thighs, she slips a hand to her crotch."," As I near her middle, she starts fingering herself."," As I work my way further up her body, she starts to masturbate."])+
									choose([" She throws her head back as an orgasm wracks her body, and gravity helps pull her in faster."," Her shoulders are pressing into my mouth by the time she cums."," I stop swallowing at her neck and wait. I feel her legs kick inside me as she finishes."," I lick her nipples once they're in my mouth, and she bucks her hips as she cums."])
							}else{//nipple/tongue orgasm
								Entry += choose([" She tucks her"+DescWord(unit(s[2]),"breasts",50)+" breassts into my mouth."," I fondle her "+DescWord(unit(s[2]),"breasts",50)+"breasts before mushing them into my mouth."," Her "+DescWord(unit(s[2]),"breasts",50)+"breasts slip into my mouth, and I'm overwhelmed by their flavor."])+
								choose([" I start to lick them, and feel her squirm at my touch"," She shudders when I start licking them, and her arms scramble to steady herself."," My tongue starts to slide all over them as she squirms."])+
								choose([" Her breathing quickens while I keep lapping my tongue against them. "," She moans while I keep tasting her bosom."," I rake my teeth against her nipples, and she cries out in pleasure."," She holds her breath as I keep exploring her bust."])+
								choose([" Her body contorts as she cums."," She throws her head back as an orgasm wracks her body, and gravity helps pull her in faster."," I hold her in place until she cums. She seems almost surprised from getting off while halfway devoured."])
							}
						}else if(s[12] == "WaistCum"){
							//oral scene then swallow then digestion maybe
							Entry += choose([" Her "+DescWord(unit(s[2]),"butt",80)+"thighs are squeezed together as they slide into my mouth, but manage to clamp even tighter when my tongue reaches her slit."," She's caught off guard when my tongue plunges into her folds."," She looks back at me confused when I pause at her hips. Her face goes red when my tongue reaches her mound."])+
							choose([" Her fingers dig into my shoulders while I pleasure her."," She humps my tongue as I keep licking her."," I wrap my hands around her "+DescWord(unit(s[2]),"belly",25)+"waist to hold her in place while I keep licking her."," She tries to speak, but I lick her sweet spot, and all that comes out is a moan."])+
							choose([" She throws her head back when she climaxes, and gravity helps me swallow her faster."," I feel her legs kick inside me as she finishes. She gasps when I start swallowing her again.","  She throws her head back when I pick up the pace. She soon gushes down my throat, and I use her juices to take her faster."]) 
						}
					}else{//Eaten Heads Up
						//Positioning
						if(s[5]=="Indoors" && Math.random()<.9){
							if(Math.random()<.5 || unit(s[2]).bust == -1 || s[12] == "ChestCum"){
								Entry += choose([" She quickly sits on the table."," She pulls me to the table before hopping onto a placemat."," She hops onto a placemat and beckons me."])+
								choose([" The old chair creaks, but holds my weight."," Her eyes follow me as I sit on a stool."," Her eyes follow me as I kneel before her."," The chair squeaks as I push it away and kneel before her."])
							}else{	
								Entry += choose([" I'm dragged over to the bed where she sits on the edge."," The bed creaks when she sits."])+
								choose([" I kneel down and suck on her "+DescWord(unit(s[2]),"breasts",80)+"breast"," I kneel down and lick her "+DescWord(unit(s[2]),"breasts",80)+"breasts"," I kneel down and stuff her "+DescWord(unit(s[2]),"breasts",80)+"breast into my mouth"," I kneel down and she shoves a "+DescWord(unit(s[2]),"breasts",80)+"breast into my mouth. I'm lost in her flavor"])+
								choose([" while she squirms. Goosebumps cover her body before she"," as she pets my head. She eventually",". She rubs her nose in my hair and inhales deeply. I look up at her as she"])+
								choose([" pulls away to lie flat."," pushes me away and pulls the rest of her legs onto the bed."," pulls me off of her. She slides back and rests on a pillow."])
							}
						}else{
							if(Math.random()<.5 || unit(s[2]).bust == -1 || s[12] == "ChestCum"){
								Entry += choose([" She rests her back on the GROUND"," She drops to the GROUND"," She shakes her hips before getting down on the GROUND. She lays on her back"," She lays on the GROUND"])+
								choose([", and I quickly kneel before her.",", and looks up at me. She wiggles her toes as I kneel before her.",", and looks up at me. She rubs her "+DescWord(unit(s[2]),"butt",100)+"thighs together as I kneel before her.",", and lifts her feet up. She grins as I kneel.",", and wiggles her toes. She smiles as I kneel before her."])
							}else{	
								Entry += choose([" I kneel down and suck on her "+DescWord(unit(s[2]),"breasts",80)+"breast"," I kneel down and lick her "+DescWord(unit(s[2]),"breasts",80)+"breasts"," I kneel down and stuff her "+DescWord(unit(s[2]),"breasts",80)+"breast into my mouth"," I kneel down and she shoves a "+DescWord(unit(s[2]),"breasts",80)+"breast into my mouth. I'm lost in her flavor"])+
								choose([" while she squirms. Goosebumps cover her body before she"," as she pets my head. She eventually",". She rubs her face in my hair and inhales deeply. I look up as she"])+
								choose([" pulls away to lie on the GROUND. She rests on her back as she wiggles her toes at me."," pushes me away to lay on the GROUND."," pulls us both to the ground. She wiggles out from under me and says to dig in."])
							}
						}
						//Start Eating
						if(unit(s[2]).Tags[0] == "Deergirl"){
							Entry += choose([" I take her hooves and slide them into my mouth."," I give her small hooves a kiss before shoving them into my mouth."])+choose([" Her white tail quivers as I grab her by the hips and pull her in deeper."," Her ears stand straight as I continue up her body."," She gets embarrassed, and looks away as I keep swallowing."])
						}else if(unit(s[2]).Tags[0] == "Bunnygirl"){
							Entry += choose([" I take her ankles and slide them into my mouth."," I give her cute paws a kiss before shoving them into my mouth."])+choose([" She asks if she tastes like carrots as I work my way up her body."," Her fluffball of a tail quivers as I grab her by the hips and pull her in deeper."," Her fluffy ears stand straight as I continue up her body."," She gets embarrassed from my gaze, and covers her face with her ears as I keep swallowing."," She tells me its embarrassing for me to watch while I eat her. When I don't stop, she pulls her ears over her face as I keep swallowing."])
						}else if(unit(s[2]).Tags[0] == "Catgirl"){
							Entry += choose([" I take her ankles and slide them into my mouth."," I carefully avoid her claws as I start eating."," I give her cute paws a kiss before shoving them into my mouth."])+choose([" Her tail swishes under her as I keep swallowing."," Her tail curls as I work my way up her body."," Her tail wraps around her leg as I keep swallowing."," Her tail tickles my chin as I work my way up her body."," Her ears lie flat as I continue up her body."])
						}else if(unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Wolfgirl"){
							Entry += choose([" I open my mouth, and she plunges her paws down my throat."," I take her ankles and slide them into my mouth."," I give her cute paws a kiss before shoving them into my mouth."])+choose([" Her fluffy tail wags under her as I work my way up her body."," Her tongue hangs out as she watches herself sink deeper."," Her tail curls as I work my way up her body."])
						}else if(unit(s[2]).Tags[0] == "Froggirl"){
							Entry += choose([" Her slick ankles easily slip into my mouth"," I give her webbed feet a slimy lick before shoving them into my mouth"])+choose([", and her mucus coats my throat as I work my way up her body.",", and her glistening body slides in with ease.",", and her body squishes into my throat with ease."])
						}
						//Almost Eaten > Fully Eaten
						if(s[12] == "ChestCum" && unit(s[2]).bust > -1){//cunnilingus
							//chest scene then swallow//She fingers herself
							Entry += choose([" My teeth scrape against her knuckles as she starts fingering herself."," Before I reach her thighs, she slips a hand to her crotch."," As I near her middle, she starts fingering herself."," As I work my way further up her body, she starts to masturbate."])+
							choose([" She throws her head back as an orgasm wracks her body."," Her shoulders are pressing into my mouth by the time she cums."," I stop swallowing and wait for her to finish. Her body contorts as she cums, and falls limp afterwards. Between raspy breaths, she asks why I stopped. Her body stays slack as I start swallowing again."," I stop swallowing at her neck and wait until she cums. I feel her legs kick inside me as she finishes, and I begin swallowing again."," Her nipples rub against my teeth, and she bucks her hips as she cums."])
						}else if(s[12] == "WaistCum" || (s[12] == "ChestCum" && unit(s[2]).bust == -1)){
							Entry += choose(["After reaching her hips, she puts both hands against my forehead. When I try swallowing more she pushes back to stop my progress. She grinds against my tongue, and I realize what she wants. Her fingers knead my scalp as I start licking between her thighs. She jolts when I plunge into her slit, and her breathing becomes labored as I explore deeper."," As her hips fill my mouth, she asks for a happy ending. I quickly find her slit with my tongue, and she pumps her hips when I start licking."," Her "+DescWord(unit(s[2]),"butt",80)+"thighs are squeezed together as they slide into my mouth, but manage to clamp even tighter when my tongue reaches her slit."," She's caught off guard when my tongue plunges into her folds."," She looks at me confused when I pause at her hips. Her face goes red when my tongue reaches her mound."])+
								choose([" She grips my shoulder to brace herself while I pleasure her."," Her fingers tug at my hair while I lap up her juices."," We lock eyes while I pleasure her."," She tries to speak, but I lick her sweet spot, and all that comes out is a moan."])+
								choose([" She throws her head back as an orgasm wracks her body, and I greedily start to gulp her down again."," I feel her legs kick inside me as she finishes. She gasps when I start swallowing her again."," Her eyes roll back when I pick up the pace. She soon gushes down my throat, and I use her juices to swallow her faster."])
						}
					}
					//Finish & DIGESTION
					if(s[12] == "Dialog"){// potential first orgasm inside.
					//Dialog scene starts right after swallowing legs. Ends with digestion.
						if(travel-unit(s[2]).travel > 50){
							if(unit(s[2]).PositiveUnit && Math.random()<.95){
								Entry += choose([" We hold hands as I swallow her. She talks about all the great times we had."," She thanks me for all the adventures while I work my way up her body."," She tells me some adventuring tips while I gobble her down."])
								Entry += choose([" She tucks her arms into my mouth and wiggles her way into my stomach."," She starts to cry when I reach her shoulders. I start pulling her out but she stops me. She explains she wants to be eaten by me, but she's sad because she'll miss me. She wipes her tears away before pushing herself the rest of the way in."," She peacefully sighs as I gulp down the rest of her."," She kisses my lip before sliding into my belly."," She thanks me for all the memories as I close my mouth over her head."])
								Entry += choose(["",choose([" She doesn't make a sound once she's inside, and digests peacefully."," She tries to quietly masturbate, but moans loudly when she finishes. She tells me she loves me before digesting."," She tells me all the reasons she loves me as she digests."])])
							}else if(unit(s[2]).NegativeUnit && Math.random()<.95){
								Entry += choose([" I keep swallowing while she looks away."," She doesn't watch while I keep gulping her down."," She covers her eyes while I swallow her."])
								Entry += choose([" She gasps when she realizes how far up her body I am. She begs me not to forget her as she slips down my throat."," She starts to tremble when she realizes how far up her body I am. She gasps as the rest of her slips down my throat."," She gasps when she realizes how far up her body I am, and begs me to remember her as she slips down my throat."])
								Entry += choose(["",choose([" She tries to masturbate before digesting, but doesn't cum in time."," She tries to tell me something while inside, but she's too quiet. She digests before I can understand her."," Once inside, she tells me she's glad that I was the one to eat her. We talk about all the fun we had before she digests."," She starts to panick when her body starts breaking down. I give my belly a hug, and tell her its going to be ok. She calms down and finishes digesting in peace."])])
							}else if(unit(s[2]).FunnyUnit && Math.random()<.95){
								Entry += choose([" She giggles as I swallow her down. "," When I reach her chest, she spreads her arms wide to stop me at her armpits. I tickle her to continue."," She spends the whole time I eat her telling a long rambling joke. I groan when it has no punchline."])
								Entry += choose([" She gives my tongue a playful bite before finishing her journey."," She tells me to keep having fun without her as she slides down my throat."])
								Entry += choose(["",choose([" I hear her splash around inside my belly before digesting."," She toots while digesting, and tries to blame it on me!"," She stretches out as far as she can, causing my belly to make odd shapes. Once she's had her fun, she curls up and digests peacefully."])])
							}else if(unit(s[2]).SluttyUnit && Math.random()<.95){
								Entry += choose([" While I swallow her down, she pumps her hips against my throat."," She tells me it feels like a massage as I eat her."," She tells me to keep fucking SUBRACELONGs as I pull her further down my throat."," She thanks me for all the dick as I work up her body."])
								Entry += choose([" Her body starts to quiver as I swallow her down."," She tells me she's never been more excited as I reach her shoulders. I give them a squeeze before shoving them, and the rest of her into my belly."])
								Entry += choose(["",choose([" She spends her remaining moments masturbating. I lose count of the times she climaxes before digesting."," She cums immediately once she's in my belly, and a few more times before digesting."," She cums immediately once she's in my belly, and cries out in bliss as she digests."])])
							}else if(unit(s[2]).HungryUnit && Math.random()<.95){
								Entry += choose([" She tells me to put all her meat to good use as I work my way up her body."," She tells me to eat more SUBRACELONGs as I pull her further down my throat."," As I work my way up her body, she admits that she always expected to be the one to eat me instead."," She tells me to keep eating SUBRACELONGs as I pull her further down my throat."])
								Entry += choose([" She gives my lip a rough bite before sliding into my belly."," She licks my tongue before sliding into my belly."," She gives my tongue a playful bite before sliding into my belly."])
								Entry += choose(["",choose([" She tries to masturbate before digesting, but doesn't cum in time."," She tries to tell me something while inside, but she's too muffled. She digests before I can understand her."," Once inside, she tells me she's glad that I was the one to eat her. We talk about all the fun we had before she digests."," She starts to panick when her body starts breaking down. I give my belly a hug, and tell her its going to be ok. She calms down and finishes digesting in peace."])])
							}else{
								Entry += choose([" I savor her taste as I slowly swallow her up."," Her legs curl as more of her goes down my throat."," She casually talks about all the good times we had while I swallow her down."," She talks fondly of our travels while I gobble her down."," She's silent and just watches me pull her slowly down my throat."," She puts her hands on my shoulder to stop my progress, and asks for a moment. When I stop, she starts telling me all about her family, and her life growing up. Her story concludes with the first time we made love. After she's done, she thanks me for listening and lets me continue eating her."])
								Entry += choose([" She tucks her arms into my mouth, and I tilt her upwards to slide into my belly."," I put a hand on her head, and gently push her the rest of the way in."," She peacefully sighs as I gulp down the rest of her."," She kisses my lip before sliding into my belly."," She thanks me for all the memories as I close my mouth over her head."])
								Entry += choose(["","",choose([" I rub my belly as I feel her digest."," I feel her digest almost instantly, and then she's gone forever."," I roll over and doze off as she digests."])])
							}
						}else{
							Entry += choose([" I savor her taste as I slowly swallow her up."," Her legs curl as more of her goes down my throat."," She's silent and just watches me pull her slowly down my throat."])
							Entry += choose([" She tucks her arms into my mouth, and I tilt her upwards to slide into my belly."," I put a hand on her head, and gently push her the rest of the way in."," She peacefully sighs as I gulp down the rest of her."," She kisses my lip before sliding into my belly."])
							Entry += choose(["","",choose([" I rub my belly as I feel her digest."," I feel her digest almost instantly."," I roll over and doze off as she digests."])])
						}
					}else{// has already had an orgasm.
						// REACTION AND FINISHING THE EATING PART
						if(travel-unit(s[2]).travel > 20 && !unit(s[2]).Vanilla){//50
							if(unit(s[2]).PositiveUnit){
								Entry += choose([" She thanks me for all the memories as I close my mouth around her."," She thanks me for all the adventures before sliding into my belly."," She tells me to keep adventuring as I close my mouth around her."])
							}else if(unit(s[2]).NegativeUnit){
								Entry += choose([" She softly cries while thanking me for taking her along on my travels. I wipe her tears before I swallow her down."," I keep gulping her down as she orgasms, and she gasps when she realizes how far up her body I am. She begs me not to forget her as she slips down my throat."," I keep gulping her down as she orgasms, and she starts to tremble when she realizes how far up her body I am. She gasps as the rest of her slips down my throat."," I keep gulping her down as she orgasms. She gasps when she realizes how far deep she is, and begs me to remember her as she slips down my throat."])
							}else if(unit(s[2]).FunnyUnit){
								Entry += choose([" She thanks me for all the laughs as I close my mouth around her."," She gives my tongue a playful bite before finishing her journey."," She tells me to keep having fun without her as she slides down my throat."])
							}else if(unit(s[2]).SluttyUnit){
								Entry += choose([" She thanks me for all the sexy memories as I close my mouth around her."," She gives my lip a playful bite before finishing her journey."," She tells me to keep fucking SUBRACELONGs as she slides down my throat."," She thanks me for all the dick as she slides down my throat."])+
								choose([" Every time she cums, she cries out for me to digest her. Eventually her wish is granted, and she's gone forever."," She cums a few more time while inside, and then digests into mush."," She cums a few more time while digesting, and then she's gone for good.",])
							}else{
								Entry += choose([" She thanks me for all the memories as I close my mouth around her."," She gives my lip a rough bite before sliding into my belly."," She licks my tongue before sliding into my belly."," She gives my tongue a playful bite before sliding into my belly."])
							}
						}else{
							 if(unit(s[2]).Tags[0] == "Deergirl" && Math.random()<.2){
								Entry += choose([" Her ears tickle my throat as they pass. Once inside, I feel her hooves push against my stomach until she's comfortable."])
							}else if(unit(s[2]).Tags[0] == "Bunnygirl" && Math.random()<.2){
								Entry += choose([" Her ears tickle my throat as they pass. Once inside, she calls my belly a cozy burrow."])
							}else if(unit(s[2]).Tags[0] == "Catgirl" && Math.random()<.2){
								Entry += choose([" I give her sensitive ears a quick massage before gobbling her down."])
							}else if((unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Wolfgirl") && Math.random()<.2){
								Entry += choose([" She howls loudly before she slides into my belly."," She yips loudly as I swallow her down."])
							}else if(unit(s[2]).Tags[0] == "Froggirl" && Math.random()<.75){
								Entry += choose([" Her neck twists impossibly far to look me in the eyes one last time as I swallow her down."," I finish swallowing, and she curls up to get comfortable."," She slides into my belly, and I hear her ribbit loudly."])+
								choose([" Suddenly I feel a wiggling in my throat, and her tongue bursts into my mouth to squirm around."," My stomach suddenly feels queer as something tickles up my throat. Her tongue thrusts itself into my mouth and starts giving me a last goodbye."," My throat suddenly bulges out again, and her tongue reenters my mouth. It wraps around my own and her flavor overwhelms me."])+
								choose([" I make out with it until it retracts back down my throat."," The sensation feels strange, but oddly satisfying. Once I've had enough, I slurp down the slimy appendage. She starts to giggle, and doesn't stop until she digests."," Things get weirder as it parts my lips to starts wrapping around my head. I suck hard on it, and slurp it back down to it's owner."," As if things weren't weird enough, it wiggles past my teeth to start licking my face. After a few moments, I slurp it back down like a noodle."])
							}else{
								Entry += choose([" I put a hand on her head, and gently push her the rest of the way in."," She sighs in satisfaction as I gulp down the rest of her."," She kisses my nose before sliding down my throat."," She kisses my lip before sliding into my belly."])
							}
						}
					}
					Entrys.push(Entry)
					//---
				}
				if(travel-unit(s[2]).travel <= 20 || Entrys.length == 0){
					if(unit(s[2]).Tags[0] == "Bunnygirl"){
						Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose before finishing her descent. I feel my belly jiggle as she cums!")	
					}
					if(WillingUnit != null){
						if(WillingUnit != unit(s[2])){
							Entrys.push("I grab SUB by the waist and swallow her down. My WIL blushes when I notice her staring at me.")
							Entrys.push("I grab SUB by the waist and swallow her down. My WIL watches the whole time while biting her lip.")
							Entrys.push("I grab SUB by the waist and swallow her down. My WIL runs up and starts rubbing my belly as it wiggles under her touch.")
							if(WillingUnit.Tags[0] != unit(s[2]).Tags[0]){
								Entrys.push(choose(["As I start to eat SUB, my WIL comes to say her goodbyes.","As I start to eat SUB, my WIL runs up and gives her a hug goodbye.","As I start to eat SUB, my WIL walks up and gives her a kiss goodbye."])+
									choose([" She watches while I swallow her friend"," She stays while I swallow her friend"])+
									choose([", and the two casually chat before my stomach starts digesting.",", and presses her ear against me, to listen to my SUBRACE digest.",". Once I'm done eating, she starts to grope the SUBRACE through my belly. She doesn't stop until the devoured girl cums, then listens as I digest her."]))
							}
						}
					}
					Entrys.push("I grab SUB by the waist and swallow her down!")
					Entrys.push("I ask SUB to close her eyes. She does so and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She giggles as my tongue plays with her breasts, and says it's about time I ate her! She fingers herself as I finish swallowing her down!")

				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I get on my knees and tell SUB I need to have her. She approaches and starts licking the tip of my cock. She looks up at me and says its hungry. She sticks her hand into the tip and looks surprised how easy it fit. She blows me a kiss goodbye before sticking her other hand in and pushing herself deeper. She keeps pushing further until her behind reaches the tip. I start stroking myself and the rest of SUB is slowly pulled in. I feel her masturbate inside my sack and orgasm one last time before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["While I lie down, SUB walks over and straddles my face with her tail tickling my nose. I start eating her out and watch her shudder as my tongue teases her clit. When she cums, I gulp down her rear. She looks surprised but turned on even more! CSUB plays with her breasts as I gobble the rest of her down. She cums again just before her head and legs are swallowed and she slides into my belly!"]
					}
				}
				//*/
			}else{//RELUCTANT
				if(party.lastAction[2] == s[2] && party.lastAction[1] == s[1] && party.lastAction[0] == 4){
					Entrys.push("CSUB asks if we can go again, but instead I shove her head into my mouth. She struggles at first, but then calms down and lets me eat her."+choose([""],[" She sighs once fully inside, and digest quietly."," She starts to masturbate once inside, and just barely cums before digesting."," She starts to masturbate once inside, but can't cum before she digests."]))
				}
				if(unit(s[2]).arms && unit(s[2]).legs){
					//---LONG - MAKE AN INDOORS/OUTDOORS VERSION(Bed/Table/Couch)
					s[11] = false;
					if(WillingUnit != null){
						if(WillingUnit.Tags[0] != unit(s[2]).Tags[0]){
							s[11] = true;
						}	
					}		
					s[12] = choose(["WaistCum","ChestCum","Dialog"])
					if(party.lastAction[2] == s[2] && party.lastAction[1] == s[1] && party.lastAction[0] == 4){
						Entry = 
							choose([
								"CSUB asks if we can go again, but I tell her I'd rather have a snack.",
								"CSUB asks if she makes a good lover. I nod, but say she'll make a better meal.",
								"CSUB tells me she wants to be on top, but I reply that I want her inside as I rub my belly.",
								"CSUB tells me she loves feeling me inside. I rub my belly and reply that this time I want her inside."
							])+
							choose([
								" She sighs. After a moment she says ok",
								" She pouts, but walks closer.",
								" She bites her lip before saying she's ready.",
								" She rolls her eyes, but tells me to go ahead."
							])
					}else{
						Entry = choose([
							choose(["I tell SUB I need to have her","I call SUB over to me for some fun"])+
							choose([", and she asks what I have in mind.","! She asks which hole I want, but I shake my head.",". She timidly asks if this is the day I eat her.",". She timidly asks if she's on the menu today.",". She looks worried as she asks if I'm hungry or horny.",", and she asks what I have in mind."])+
							choose([" I hungrily lick my lips"," My gut grumbles in response"," I simply rub my belly"," I look down at my gut"])+
							choose([", and she pouts.",", and she blushes.",", and she sighs.",". She pouts, and gives me a nod.",". She sighs and tells me to go ahead.",". She looks nervous, but gives me a nod."])
							,
							choose([" I pull SUB into a hug."," I walk up and embrace SUB."])+
							choose([" She hugs back"," She holds me tightly"])+
							choose([" as I nibble on her neck."," as I lick her neck."," as I give her a trail of kisses along her jaw."," as I give her a trail of kisses across her forhead."])+
							choose([" I whisper"," I whisper into her ear"," Under my breath I tell her"])+
							choose([" that I'm going to eat her"," that she's good enough to eat"," that I'm craving some SUBRACE"," that I'm hungry"," that I've been dying for some SUBRACE"," that I need her inside me"])+
							choose([", and she blushes.",", and she tenses up.",", and she sighs.",". She gasps at my words.",", and she nods nervously.",". She playfully punches my shoulder, and asks if I'm joking. She bites her lip when I shake my head.",". She bites her lip and nods.",". She sighs and tells me to go ahead.",". She nervously tells me she's ready.",". She pulls me into a kiss. As we break away, she gives me a nervous smile."])
							,
							choose(["I start nibbling on SUB's neck. A shiver runs up her spine when I start to drool.","I start nibbling on SUB's neck. Her back stiffens when she realizes what I want.","I walk up to SUB while licking my lips. Her eyes grow wide when she notices.","I walk up to SUB while rubbing my belly. It grumbles, and she gives me a nervous nod.","I start licking SUB's neck. Her knees tremble when my stomach grumbles."])
							//choose([", but before I can say anything"])
						])
					}
					//Positioning
					
					if(s[12] == "WaistCum"){//Swallow to waist.
						Entry += choose([" I kneel down"," I kneel on the GROUND"," I get on my knees"," I kneel"])
						if(unit(s[2]).Tags[0] == "Deergirl"){
							Entry += choose([", and she licks my nose before I start swallowing.",", and give her hands a kiss before shoving them into my mouth. ",", and she offers up her hands. I greedily shove them down my throat as she bends down to be eaten."])+
							choose([" Her white tail quickly nears as I work my way down her body."," Her white tail quivers as I work my way down her body."," I savor her taste as I continue along her body."," I play with her white tail while she slides down deeper."])
						}else if(unit(s[2]).Tags[0] == "Bunnygirl"){
							Entry += choose([", and she bows her head. Her fluffy ears tickle as I start eating.",", and give her hands a kiss before shoving them into my mouth. ",", and she offers up her hands. I greedily shove them down my throat as she bends down to be eaten."])+
							choose([" Her fluffball of a tail quickly nears as I work my way down her body."," Her fluffball of a tail quivers as I work my way down her body."," I savor her taste as I continue along her body."," I play with her fluffy tail while she slides down deeper."])
						}else if(unit(s[2]).Tags[0] == "Catgirl"){
							Entry += choose([", and she bows her head. I'm careful with her fluffy ears as I start eating.",", and she bows her head. Her ears angle back as I start eating.",", and lift her paws to my mouth. I'm careful to avoid her claws as I start eating.",", and give her cute paws a kiss before shoving them into my mouth."])+
							choose([" Her tail swishes side to side as I work my way down her body."," Her tail curls as I work my way down her body."," Her tail rises as I work my way down her body."," I play with her soft tail while she slides down deeper."," She purrs while sliding down my throat."])
						}else if(unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Wolfgirl"){
							Entry += choose([", and take her hands. She watches intently as they slide down my throat.",", and give her cute paws a kiss before shoving them into my mouth."])+
							choose([" Her fluffy tail takes up most of my view as I work my way down her body."," Her tail wags as I work my way down her body."," Her tail droops between her legs as I eat."," I play with her fluffy tail while she slides down deeper."])
						}else if(unit(s[2]).Tags[0] == "Froggirl"){
							Entry += choose([", and lick her slimy hands before mushing them into my mouth. I swallow more",", and give her webbed hands a slimy kiss before shoving them into my mouth. I swallow more"])+
							choose([", and her mucus coats my throat as I work my way down her body.",", and her glistening body slides in with ease.",", and her body easily squishes into my throat.",", and her eyes sink into their sockets as I keep gulping her down."])
						}
						Entry += choose([" She shudders when her mound brushes against my tongue. It tastes heavenly, and I start lapping at it. She yelps when I reach into her slit."," Her "+DescWord(unit(s[2]),"butt",80)+"thighs are squeezed together as they slide into my mouth, but manage to clamp even tighter when my tongue reaches her slit."," She's caught off guard when my tongue plunges into her folds."," She starts pulling away when I pause at her hips. I get my tongue onto her mound, and she yelps!"])+
						choose([" Her legs wildly kick while I pleasure her."," She humps it as I keep licking her."," I pull her knees apart to get my tongue as deep as I can into her."," I wrap my hands around her "+DescWord(unit(s[2]),"butt",25)+"legs to hold her in place while I keep licking."," Her breathing flutters when I find her sweet spot, and she makes muffled whimpers."])+
						choose([" Her delicious juices fill my mouth when she cums. I lift her legs into the air after, and gravity quickly pulls her inside."," Her torso writhes inside me as she finishes. Another swallow, and she splashes into my acids."," She contorts inside me when I pick up the pace. She soon gushes in my mouth, and her juices help send her down my throat."]) 
					}else if(s[12] == "ChestCum" && s[11] == false){//Breastplay, then full swallow.	
						if(unit(s[2]).bust > -1){
							Entry += choose([" I kneel down and suck on her "+DescWord(unit(s[2]),"breasts",80)+"breast"," I kneel down and lick her "+DescWord(unit(s[2]),"breasts",80)+"breasts"," I kneel down and stuff her "+DescWord(unit(s[2]),"breasts",80)+"breast into my mouth"," I kneel down and she guides her "+DescWord(unit(s[2]),"breasts",80)+"breast into my mouth. I'm lost in her flavor"])+
							choose([" while she squirms."," as she pets my head.",". She rubs her face in my hair and breaths me in."])+
							choose([" Her breathing quickens when I start to finger her."," I find the nub between her legs and rub small circles around it. She leans against me as I gently stroke her hood."," Her thighs squeeze tightly together when I slip my hand between them."," Her legs snap shut when my hand brushes against her slit, and after a little rubbing, she's a wet mess. Her hips start to sway when my fingers slip inside her."])+
							choose([" Goosebumps cover her body before she"," Her breasts taste amazing, and I can't get enough of them. She eventually"," Her bosom is covered in hickeys when she"," I look up at her as she"," I gently bite her nipple as she"," I softly bite down, and she"])+
							choose([" gushes down her thighs."," cums from my touch."," starts moaning. She holds me close when she cums."," starts to hump my hand. Its soon drenched in her juices as she cums."])
						}else{
							Entry += choose([" I kneel and press my ear to her chest. She doesn't move while I listen to her heart beating."+choose([" It starts beating faster when my lip brushes against her nipple."," When I ask if she's ready to be eaten, it starts to thump harder. My lip brushes against her breast, and her nipple hardens to a point."])+"  I start sucking it"," I kneel down and kiss her "+DescWord(unit(s[2]),"breasts",80)+"chest"," I kneel down and lick her "+DescWord(unit(s[2]),"breasts",80)+"chest"," I kneel down and make a trail of kisses from her "+DescWord(unit(s[2]),"belly_noun",100)+" up to her chest"," I kneel down and she guides me to her "+DescWord(unit(s[2]),"breasts",80)+"chest. I start covering her in hickeys"])+
							choose(["."],[" while she squirms."," as she pets my head.",". She rubs her face in my hair and breaths me in."])+
							choose([" Her breathing quickens when I start to finger her."," I find the nub between her legs and rub small circles around it. She leans against me as I gently stroke her hood."," Her thighs squeeze tightly together when I slip my hand between them."," Her legs snap shut when my hand brushes against her slit, and after a little rubbing, she's a wet mess. Her hips start to sway when my fingers slip inside her."])+
							choose([" Goosebumps cover her body before she"," She starts to quiver as she focuses on my touch, and eventually"," She tells me not to stop and presses her quivering body against me. I look up at her as she"," I gently nibble her nipple while keeping my hand moving between her legs. She"," I gently bite her nipple as she"," I start thrusting two fingers into her, and she"])+
							choose([" gushes down her thighs."," cums from my touch."," starts moaning. She holds me close when she cums."," starts to hump my hand. Its soon drenched in her juices as she cums."])
						}
						Entry += choose([" I tell her she tastes amazing"," I tell her I'll always remember her flavor"," I tell her she's the best SUBRACE I've ever tasted"," I tell her how great she tastes"," I smack my lips"," I meet her gaze"])
						if(unit(s[2]).Tags[0] == "Deergirl"){
							Entry += choose([", and she smiles. She leans over when I open my mouth, and her ears tickle as I start eating.",", and give her hands a kiss before shoving them into my mouth. ",", and she offers up her hands. I greedily shove them down my throat as she bends down to be eaten."])+
							choose([" Her white tail quickly nears as I work my way down her body. She clacks her hooves together as I swallow them down."," Her white tail quivers as I work my way down her body, and her hooves clack as I swallow them."," I savor her taste as I swallow her whole."," I play with her tail before swallowing her down."])
						}else if(unit(s[2]).Tags[0] == "Bunnygirl"){
							Entry += choose([", and she smiles. She leans over when I open my mouth, and her fluffy ears tickle as I start eating.",", and give her hands a kiss before shoving them into my mouth. ",", and she offers up her hands. I greedily shove them down my throat as she bends down to be eaten."])+
							choose([" Her fluffball of a tail quickly nears as I work my way down her body. I play with her fuzzy toes before swallowing them down."," Her fluffball of a tail quivers as I work my way down her body, and her toes curl as I swallow them."," I savor her taste as I swallow her whole."," I play with her fluffy tail before swallowing her down."])
						}else if(unit(s[2]).Tags[0] == "Catgirl"){
							Entry += choose([", and she smiles. She leans over when I open my mouth. I'm careful with her fluffy ears as I start eating.",", and she bows her head. Her ears angle back as I start eating.",", and lift her paws to my mouth. I'm careful to avoid her claws as I start eating.",", and give her cute paws a kiss before shoving them into my mouth."])+
							choose([" Her tail swishes side to side as I swallow her down."," Her tail curls as I work my way down her body. She hisses when she splashes into my acids."," Her tail tickles my noes as I work my way down her body. It wraps around her legs as I swallow them down."," I play with her soft tail before swallowing her all the way."," I swallow her, and she purrs in my belly."])
						}else if(unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Wolfgirl"){
							Entry += choose([", and take her paws. She watches intently as they slide down my throat.",", and give her cute paws a kiss before shoving them into my mouth."])+
							choose([" Her fluffy tail takes up most of my view as I work my way down her body. She yips once she's inside."," Her tail wags as I work my way down her body. She giggles when I tickle her fuzzy toes. They curl as I swallow them."," Her tail droops between her legs as I swallow her down."," I play with her fluffy tail while I swallow her down."])
						}else if(unit(s[2]).Tags[0] == "Froggirl"){
							Entry += choose([", and lick her slimy hands before mushing them into my mouth. I swallow more",", and give her webbed hands a slimy kiss before shoving them into my mouth. I swallow more"])+
							choose([", and her mucus coats my throat as I work my way down her body.",", and her glistening body slides in with ease.",", and her body easily squishes into my throat.",", and her eyes sink into their sockets as I keep gulping her down."])+
							choose([" She croaks loudly once inside."," I feel her webbed feet push outward once she's inside."," She splashes around once she's inside."])
						}
						
					}else if(s[12] == "ChestCum" && s[11] == true && unit(s[2]).bust > -1){
						Entry += choose([" I kneel down"," I kneel on the GROUND"," I get on my knees"," I kneel"])+
							choose([" as my WIL approaches."," as my WIL joins us."," as my WIL comes over."])
							choose([" She watches while "," She smiles while"," She starts getting excited while"," She inches closer while"])+
							choose([" SUBRACELONG's arms slide down my throat."," I put SUBRACELONG's hands into my mouth and start swallowing them."," I start swallowing SUBRACELONG's hands."])+
							choose([" I gulp down her shoulders"," I stop just after her shoulders."," I stop once I'm around her shoulders."])+
							choose([" My WILT bends over and tucks my SUBRACELONG's"+DescWord(unit(s[2]),"breasts",50)+" breassts into my mouth."," I fondle her "+DescWord(unit(s[2]),"breasts",50)+"breasts before mushing them into my mouth."," When her "+DescWord(unit(s[2]),"breasts",50)+"bosom rest on my tongue, I overwhelmed by her flavor."," Her "+DescWord(unit(s[2]),"breasts",50)+"breasts slip past my teeth, and I'm overwhelmed by their flavor."])+
							choose([" I start to lick them, and feel her squirm at my touch"," She shudders when I start licking them."," My tongue starts to explore them as she squirms."])+
							choose([" My WILT gets down between her legs, and the we both work on getting her off."," My WILT also kneels, and starts to pleasure her as well."])+
							choose([" My SUBRACELONG's body contorts as she cums, and my WILT guides her legs down my throat."," We don't stop until she cums. My WILT watches intently as I slurp down my SUBRACE's legs."," Once my half eaten meal climaxes, my WILT lifts her legs above me so I can swallow her down."])
					}else if(s[12] == "ChestCum" && s[11] == true && unit(s[2]).bust == -1){
							Entry += choose([" I kneel down"," I kneel on the GROUND"," I get on my knees"," I kneel"])+
							choose([" as my WIL approaches."," as my WIL joins us."," as my WIL comes over."])
							choose([" She watches while "," She smiles while"," She starts getting excited while"," She inches closer while"])+
							choose([" SUBRACELONG's head slides down my throat."," I put SUBRACELONG's hands into my mouth and start swallowing them."," I start swallowing SUBRACELONG's hands."])+
							choose([" I gulp down her hips"," I stop at her hips."," I stop once her hips are hanging out of my mouth."])+
							choose([" My WILT gives me a wink before kneeling behind her."," My WILT blows me a kiss, and kneels behind her."," My WILT sticks her tongue out between two fingers before dropping to her knees behind her."])
						
							
						Entry += choose([" My SUBRACELONG is caught off guard when our tongues find her slit."," My SUBRACELONG starts asking if someone else is here when I pause at her hips. Her voice cracks when our tongues reach her mound."])+
						choose([" Her legs wildly kick while we pleasure her."," She humps her hips as we keep licking her."," I wrap my hands around her "+DescWord(unit(s[2]),"butt",25)+"legs to hold her in place while we keep licking."," She yelps when my WILT finds her sweet spot, and she makes muffled whimpers when my tongue teases it as well."])+
						choose([" She writhes when she climaxes. My WILT lifts her legs into the air after, and gravity helps me swallow faster."," Her upper body writhes inside me as she finishes. She splashes into my acids when I gulp more of her down."," She contorts inside me when we pick up the pace. She soon gushes all over my WILT, and I start swallowing her down again. "]) 
					}else{
						Entry += choose([" I kneel down"," I kneel on the GROUND"," I get on my knees"," I kneel"])
						if(unit(s[2]).Tags[0] == "Deergirl"){
							Entry += choose([", and she bows her head. Her ears tickle as I start eating.",", and give her hands a kiss before shoving them into my mouth.",", and she offers up her hands. I greedily shove them down my throat as she bends down to be eaten."])+
							choose([" Once her "+DescWord(unit(s[2]),"belly",100)+"belly slides past my lips, I lift her hooves into the air. Her tail brushes my nose as she slides down."," Her tail quivers before it slides into my belly. Its soon followed by the rest of her."," I savor her taste as I slowly swallow her."," I play with her white tail before leaning back and gulping her down."])
						}else if(unit(s[2]).Tags[0] == "Bunnygirl"){
							Entry += choose([", and she bows her head. Her fluffy ears tickle as I start eating.",", and give her hands a kiss before shoving them into my mouth.",", and she offers up her hands. I greedily shove them down my throat as she bends down to be eaten."])+
							choose([" Once her "+DescWord(unit(s[2]),"belly",100)+"belly slides past my lips, I lift her legs into the air. Her fluffball of a tail brushes my nose as she slides down."," Her fluffball of a tail quivers before it slides into my belly. Its soon followed by the rest of her."," I savor her taste as I slowly swallow her."," I play with her fluffy tail before leaning back and gulping her down."])
						}else if(unit(s[2]).Tags[0] == "Catgirl"){
							Entry += choose([", and she bows her head. I'm careful with her fluffy ears as I start eating.",", and she bows her head. Her ears angle back as I start eating.",", and lift her paws to my mouth. I'm careful to avoid her claws as I start eating.",", and give her cute paws a kiss before shoving them into my mouth."])+
							choose([" Her tail swishes side to side before it slides down my throat. A few gulps more and she's completely devoured."," Her tail curls around her legs as I swallow them down."," Her tail tickles my nose as I work my way down her body."," I play with her soft tail while she slides down deeper. Soon it and her toes join the rest of her in my belly."," She purrs the whole way down my throat."])
						}else if(unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Wolfgirl"){
							Entry += choose([", and take her hands. She watches intently as they slide down my throat.",", and give her cute paws a kiss before shoving them into my mouth."])+
							choose([" Her fluffy tail takes up most of my view until I swallow it down. Her legs straighten, and quickly slide into my belly."," Her tail wags as I work my way down her body. I lift her legs into the air before swallowing them down."," Her tail droops between her legs as I swallow her down."," I play with her fluffy tail until it reaches my mouth. She keeps her legs straight when I lift them into the air, and she easily slides into my belly."])
						}else if(unit(s[2]).Tags[0] == "Froggirl"){
							Entry += choose([", and lick her slimy hands before mushing them into my mouth. I swallow more",", and give her webbed hands a slimy kiss before shoving them into my mouth. I swallow more"])+
							choose([", and her mucus coats my throat as I work my way down her body. I suck on her toes as they slide into my throat.",", and her glistening body glides in with ease.",", and her body easily squishes into my throat. I give her rear a playful spank before tilting her upside down. Her mucus covered body easily slides into my belly.",", and her eyes sink into their sockets as I keep gulping her down. I tickle her webbed toes before swallowing them down."])
						}
					}
					//Digestion
					if(s[12] == "ChestCum" && s[11] == true){
						Entry += choose([" I lick my lips after I finish eating."," SUBRACELONG's toes wiggles as they slide down my throat."," My stomach quickly digests my SUBRACELONG once she's inside."])
						Entry += choose([" My WILT rubs my belly."," My WILT puts an ear to my belly and listens."," My WILT pulls me into a kiss, and I hold her against my belly."])
						Entry += choose(["","",choose([" She asks when I'll be eating her."," She asks if I have room for one more..."," She whispers into my ear that she wants to be next."])])
					}else if(s[12] == "WaistCum" || s[12] == "ChestCum"){
						if(travel-unit(s[2]).travel > 50){
							if(unit(s[2]).PositiveUnit && Math.random()<.95){
								Entry += choose([" She talks about all the great times we had as she digests."," She thanks me for all the adventures while digesting."," She tells me more adventuring tips while I digest her."," She starts to cry once inside. I start trying to vomit but she stops me. She explains she wants to be digested by me, but she's sad because she'll miss me. I give her an awkward hug from outside my belly until she's gone."," She peacefully sighs as she quickly digests."," She thanks me for all the memories as I digest her."," She doesn't make another sound, and digests peacefully."," She tries to quietly masturbate, but moans loudly when she finishes. She tells me she loves me before digesting."," She tells me she loves me before digesting."," She tells me all the reasons she loved me as she digests."])
							}else if(unit(s[2]).NegativeUnit && Math.random()<.95){
								//Entry += choose([" I keep swallowing while she trembles."," She trembles while I keep gulping her down."," Goosebumps coat her body while I swallow her."])
								Entry += choose([" She begs me not to forget her as she digests."," She begs me to remember her as she digests."," She tries to masturbate before digesting, but doesn't cum in time."," Once she starts digesting, she tells me she's glad that I was the one to eat her. We talk about all the fun we had before she eventually stops replying."," She starts to panick when her body starts breaking down. I give my belly a hug, and tell her its going to be ok. She calms down and finishes digesting in peace."])
							}else if(unit(s[2]).FunnyUnit && Math.random()<.95){
								Entry += choose([" She giggles as I digest her."," She spends her remaining time telling a long rambling joke. I groan when it has no punchline. She doesn't stop laughing until she digests."," I hear her splash around inside my belly before digesting."," She toots while digesting, and tries to blame it on me!"," She stretches out all of her limbs as far as she can. She giggles as my belly makes odd shapes. I push back, and we make a silly game of it until she digests."])
							}else if(unit(s[2]).SluttyUnit && Math.random()<.95){
								Entry += choose([" She spends her remaining moments trying to cum again. She barely manages before digesting."," She spends her remaining moments masturbating. I lose count of the times she climaxes before digesting."," She cums immediately once digestion starts, and a few more times before she's gone."," She tells me it felt like a massage once she's inside."," She tells me to keep fucking SUBRACELONGs as I digest her."," She thanks me for all the dick as she digests."," She cums immediately when my stomach starts to digest her, and cries out in bliss as she's broken down."])
							}else if(unit(s[2]).HungryUnit && Math.random()<.95){
								Entry += choose([" She tells me to put all her meat to good use as she digests."," She tells me to eat more SUBRACELONGs as she digests."," Before she digests, she admits that she always expected to be the one to eat me instead."," She tells me to keep eating SUBRACELONGs as my acids break her down."," She tries to masturbate before digesting, but doesn't cum in time."," She tries to tell me something while inside, but she's too muffled. She digests before I can understand her."," Once inside, she tells me she's glad that I was the one to eat her. We talk about all the tasty meals we had before she digests."," She starts to panick when her body starts breaking down. I give my belly a hug, and tell her its going to be ok. She calms down and finishes digesting in peace."])
							}else{
								Entry += choose([" I promise not to forget her as she digests."," I promise to remember her as she digests."," I rub my belly as I feel her digest."," Another gulp, and she's completely inside. I feel her digest almost instantly, and then she's gone forever."," I lay down and doze off as she digests."])
							}
						}else{
							//Entry += choose([" I savor her taste as I slowly swallow her legs."," She curls up once she's completely inside me."," She doesn't say a word, and just lets me pull her slowly down my throat."])
							Entry += choose(["",choose([" I remark how delicious she was after eating her."," I rub my belly as I feel her digest."," Another gulp, and she's completely inside. I feel her digest almost instantly."," I lay down and doze off as she digests."])])
						}
					}else{
						if(travel-unit(s[2]).travel > 50){
							if(unit(s[2]).PositiveUnit && Math.random()<.90){
								Entry += choose([" She thanks me for all the memories as she curls up in my belly."," After she gets comfortable, we talk about all the great times we had adventuring."," She thanks me for all the adventures while making handprints against my belly."])
								//Entry += choose([" She tucks her arms into my mouth and wiggles her way into my stomach."," She starts to cry when I reach her shoulders. I start pulling her out but she stops me. She explains she wants to be eaten by me, but she's sad because she'll miss me. She wipes her tears away before pushing herself the rest of the way in."," She peacefully sighs as I gulp down the rest of her."," She kisses my lip before sliding into my belly.",])
								Entry += choose(["",choose([" She doesn't make a sound once she's inside, and digests peacefully."," She tries to quietly masturbate, but moans loudly when she finishes. She tells me she loves me before digesting."," She tells me all the reasons she loves me as she digests."])])
							}else if(unit(s[2]).NegativeUnit && Math.random()<.90){
								//Entry += choose([" I keep swallowing while she looks away."," She doesn't watch while keep gulping her down."," She covers her eyes while I swallow her."])
								//Entry += choose([" She gasps when she realizes how far up her body I am. She begs me not to forget her as she slips down my throat."," She starts to tremble when she realizes how far up her body I am. She gasps as the rest of her slips down my throat."," She gasps when she realizes how far up her body I am, and begs me to remember her as she slips down my throat."])
								Entry += choose(["",choose([" She tries to masturbate before digesting, but doesn't cum in time."," She tries to tell me something while inside, but she's too quiet. She digests before I can understand her."," Once inside, she tells me she's glad that I was the one to eat her. We talk about all the fun we had before she digests."," She starts to panick when her body starts breaking down. I give my belly a hug, and tell her its going to be ok. She calms down and finishes digesting peacefully."])])
							}else if(unit(s[2]).FunnyUnit && Math.random()<.90){
								Entry += choose([" She giggles once she's in my belly. "," She spends most of her time in my belly telling a long rambling joke. I groan when it has no punchline."])
								//Entry += choose([" She gives my tongue a playful bite before finishing her journey."," She tells me to keep having fun without her as she slides down my throat."])
								Entry += choose(["",choose([" I hear her splash around inside my belly before digesting."," She toots while digesting, and tries to blame it on me!"," She stretches out as far as she can, causing my belly to make odd shapes. Once she's had her fun, she curls up and digests peacefully."])])
							}else if(unit(s[2]).SluttyUnit && Math.random()<.90){
								//Entry += choose([" After she's swallowed, she thrusts her rear against my belly. "," She tells me it feels like a massage as I eat her."," She tells me to keep fucking SUBRACELONGs as pull her further down my throat."," She thanks me for all the dick as I work up her body."])
								//Entry += choose([" Her body starts to quiver as I swallow her down."," She tells me she's never been more excited as I reach her shoulders. I give them a squeeze before shoving them, and the rest of her into my belly."])
								Entry += choose([" She spends her remaining moments masturbating. I lose count of the times she climaxes before digesting."," She cums immediately once she's in my belly, and a few more times before digesting."," She cums immediately once she's in my belly, and cries out in bliss as she digests."])
							}else if(unit(s[2]).HungryUnit && Math.random()<.90){
								Entry += choose([" She tells me to put all her meat to good use as my belly gurgles."," She tells me to eat more SUBRACELONGs as sloshes inside me."," After being eaten, she admits that she always expected to be the one to eat me instead."," She tells me to keep eating SUBRACELONGs as my belly starts filling with acids."])
								//Entry += choose([" She gives my lip a rough bite before sliding into my belly."," She licks my tongue before sliding into my belly."," She gives my tongue a playful bite before sliding into my belly."])
								Entry += choose(["",choose([" She tries to masturbate before digesting, but doesn't cum in time."," She tries to tell me something while inside, but she's too muffled. She digests before I can understand her."," Once inside, she tells me she's glad that I was the one to eat her. We talk about all the fun we had before she digests."," She starts to panick when her body starts breaking down. I give my belly a hug, and tell her its going to be ok. She calms down and finishes digesting in peace."])])
							}else{
								//Entry += choose([" She tucks her arms into my mouth, and I tilt her upwards to slide into my belly."," I put a hand on her head, and gently push her the rest of the way in."," She peacefully sighs as I gulp down the rest of her."," She kisses my lip before sliding into my belly."," She thanks me for all the memories as I close my mouth over her head."])
								//don't TOUCH THIS WORKS LOL
								Entry += choose([" I promise not to forget her as she digests."," I promise to remember her as she digests."," I remark how delicious she was after eating her."," She casually talks about all the good times we had while my stomach fills with acids."," From within my belly, she talks fondly of our travels."])
							}
						}else{
							Entry += choose(["",choose(["",choose([" I remark how delicious she was after eating her."," She curls up to get comfortable."])])+choose([" I rub my belly as I feel her digest."," I feel her digest almost instantly."," I lay down and doze off as she digests."])])
						}
					}
					//Finish & DIGESTION 
					Entrys.push(Entry) 
					//---
				} 
				if(Entrys.length == 0){
					if(WillingUnit != null && unit(s[2]).legs){
						Entrys.push("I grab SUB by the waist and swallow her down. My WIL blushes when I notice her staring at me.")
						Entrys.push("I grab SUB by the waist and swallow her down. My WIL watches the whole time while biting her lip.")
						Entrys.push("I grab SUB by the waist and swallow her down. My WIL runs up and starts rubbing my belly as it wiggles under her touch.")
						Entrys.push("I ask SUB to close her eyes. She does so and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise as she stops being my friend and becomes my food. Trembling, she asks if I wouldn't rather fuck her instead, but I keep gulping down to her waist. When I start swallowing her hips, she begs me to enjoy her properly at least! My tongue finds her slit and starts getting her off as her rump hangs out of my mouth. I give SUB one last orgasm before fully taking her down!")
						}
					Entrys.push("I grab SUB by the waist, and swallow her down!")
				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I get on my knees and tell SUB I need to have her. She approaches and starts licking the tip of my cock. She looks surprised when it almost pulls her in. I ask her to continue and she does nervously, this time shes slurped past her shoulders. She starts to struggle until I begin rubbing her slit. With my other hand I start stroking myself and SUB is slowly pulled in further. My progress is stopped by her wide rear end. I keep fingering her while her legs flail around. As SUB orgasms, I push her butt into my large member, and she slides the rest of the way in. I feel her curl up into a ball before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["While I lie down, SUB walks over and straddles my face with her tail tickling my nose. I start eating her out and watch her shudder as my tongue teases her clit. When she cums, I gulp down her rear. She looks surprised and tries to pull herself out as I swallow her deeper. She gives up when my tongue starts teasing her breasts. She cums again just before her head and legs are swallowed and she slides into my belly!"]
					}
				}
				if(unit(s[2]).Tags[0] == "Slimegirl"){
					Entry = "";
					Entry += choose([])
					
					Entrys.push(choose(["I put my hand behind SUB's head and pull her into a kiss. She kisses back, and our tongues meet. The passionate moment ends when I push her face into my mouth","I latch onto SUB's breast","I shove SUB's head into my mouth","I pull SUB's hands into my mouth","I push SUB to the GROUND and plunge my mouth between her legs. She wiggles as I lick her translucent slit. I get my lips completely over her mound"])+
					choose([" and start swallowing her. Rich "+DescWord(unit(s[2]),"slime",100)+" flavored goo coats my throat as I swig her down."," and start sucking. Her "+DescWord(unit(s[2]),"slime",100)+" flavored goo rushes down my thoat."," and start slurping her down. My taste buds are overwhelmed by the "+DescWord(unit(s[2]),"slime",100)+" flavor flowing along my tongue."])+
					choose([" Her body shrinks as I gulp again and again."," Her body gets smaller as I keep drinking."," She squirms as she gets smaller."])+
					choose([" Soon the last of her slides down my throat."," Soon the last of her slides down my throat and I burp. A colorful bubble pops out of my mouth and floats away."," I don't stop until she's completely in my belly."," My belly digests her quickly once she's completely inside."])
					)
					Entry = "";
					Entrys.push("I slurp down SUB! She had a great "+DescWord(unit(s[2]),"slime",100)+" flavor.")
				}
				if(unit(s[2]).Name == "Wolf Queen"){
					if(map[party.y][party.x].name == "Boss"){
						Entrys = ["As the Queen sits back on her throne, I kneel again and lick my lips. She sighs and offers me her feet."]
					}else{
						Entrys = ["Even without her crown the Queen still has an air of royalty to her, and its about time I got a <i>taste</i> of it. Her tail begins to wag when I start nibbling on her neck. I exclame that she's the tastiest wolf I've ever had. She sits on OBJECTSHORT and offers me her feet. "]
					}
					Entrys[0] += " I casually ask if she has any tasty daughters I can eat after I'm done with her. As her calves slide into my throat, she chuckles and admits that the royal lineage ends with this meal. She starts talking about a chest of gold hidden under the throne, but I'm more interested in getting her chest down my throat. Before she can reveal the treasure's location, her nipples scrape against my teeth. The sensation stifles her voice, and causes her to shudder. I unceremoniously shove her head down, and she slips into my belly completely."
					if(map[party.y][party.x].name == "Boss"){
						Entrys[0] += " I try laying back on the plush rug before the throne, but her crown pokes me in the back. I pick it up and set it on my belly as it digests her highness."
					}else{
						Entrys[0] += " I lay down on the GROUND, and rub my belly as it digests her highness."
					}
				}
				if(unit(s[2]).Name == "Harpy Queen"){
					if(map[party.y][party.x].name == "Boss"){
						Entrys = ["As the Queen bends over to inspect her trove of riches, I kneel behind and seize her haunches."]
					}else{
						Entrys = ["The queen rubs her belly and says she's about to lay an egg. I motion to OBJECTSHORT, and offer to help. She leans on it as I kneel behind her. I start licking her slit and feel something move within. With the help of my tongue and fingers, an egg pokes its way out. I encase her entire mound with my lips and start sucking. She moans as the egg makes it's way out, and I slurp it down. She giggles and asks me how my breakfast was. When she tries moving away I seize her by the haunches."]
					}
					Entrys[0] += " She looks back and sighs. Once again I dive between her thighs, and start exploring the familiar flavor. I rediscover her weak spot and get her crying out almost immediately. While still pleasuring her, I squeeze one of her cheeks into mine. Her juices are continuously gushing out, and I use them to stretch around the rest of her behind. Tailfeathers brush against me as I keep my tongue writhing inside her. She pushes herself deeper when she cums, and her body quivers as I swallow it down. She's too winded to talk once inside, and I listen to her labored breathing soften as she digests."
				}
				if(unit(s[2]).Name == "Drow Queen"){//TODO: <CURRENT BOOKMARK>
					if(map[party.y][party.x].name == "Boss"){
						Entrys = ["I approach the queen as she sits in her throne once more. She's wearing her crown again, and is probability thinking about ruling her underground kingdom again. I take a knee before her, and offer a foot massage. She gladly accepts, and I get to work. Once she's relaxed, her eyes slowly droop shut. She doesn't notice as I gently start slurping my way up her leg. She finally looks down as my lips are wrapped around her thigh. Words fail her as she's tugged closer, and she gasps when I reach her slit. She struggles with the conflicting motivations of survival and pleasure before she gives in and starts rubbing her clit. Her first orgasm lubricates my throat, and I start swallowing her more earnestly. Her free leg lifts above her as she keeps masturbating. She uses her remaining hand to tuck her breasts into my mouth, and cums again when her nipples scrape against my teeth! Three more gulps finish her off. She kisses me on the nose during the first, the second claims her curled toes, and the third one slurps up her dainty fingers. Once inside, she rubs herself with all the grace of a hurricane, and cries out in bliss til the bitter end."]
					}else{
						Entrys = ["I approach the queen as she complains about her aching feet. I tell her we can take a break, and she take a seat on OBJECTSHORT. I take a knee before her, and offer a foot massage. She gladly accepts, and I get to work. Once she's relaxed, her eyes slowly droop shut. She doesn't notice as I suck on her toes, nor when I gently start slurping my way up her leg. She finally looks down as my lips are wrapped around her thigh. Her face turns to a pout, but she gasps when I reach her slit. She quickly gives in and starts rubbing her clit. Her first orgasm lubricates my throat, and I start swallowing her more earnestly. Her free leg lifts above her as she keeps masturbating. She uses her remaining hand to tuck her breasts into my mouth, and cums again when her nipples scrape against my teeth! Three more gulps finish her off. She kisses me on the nose during the first, the second claims her curled toes, and the third one slurps up her dainty fingers. Once inside she rubs herself with all the grace of a hurricane, and cries out in bliss 'til the bitter end."]
					}
				}
			}
		}else if(s[1]==0 && s[2] < 100 && map[party.y][party.x].hostile){
		// HERO GOOD HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("She's  too big for me to eat now, I need to find a way to increase my appetite...")
			}else if(s[4] == 1 && unit(s[2]).legs){//ASLEEP
				Entrys.push("I grab SUB while she's still sleeping, and swallow her down!")
			}else if(!unit(s[2]).willing && unit(s[2]).legs){//UNWILLING
				Entrys.push("I grab SUB by the waist, and swallow her down! She definitely wasn't expecting that to happen during the fight!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and shove her headfirst into my cock. She asks me to pull her out, but doesn't struggle. I feel her curl up into a ball before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["I grab SUB with one hand and shove her headfirst into my mouth. She asks me to let her out, but doesn't struggle. I feel her curl up into a ball before digesting."]
					}
				}
			}else if(unit(s[2]).willing && unit(s[2]).legs){//WILLING
				Entrys.push("I grab SUB by the waist, and swallow her down! She tries to say a last second goodbye, but I'm in a rush!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and shove her headfirst into my cock. She immediately starts to finger herself, knowing she doesn't have much time. I feel her orgasm just before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["I grab SUB with one hand and shove her headfirst into my mouth. She immediately starts to finger herself, knowing she doesn't have much time. I feel her orgasm just before digesting!"]
					}
				}
			}else{
				Entrys.push("I quickly swallow SUB down!")
			}
		}else if(s[1]==0 && s[2] >=99 && !map[party.y][party.x].hostile){
		//TODO:       _H F P
		//HERO FOOD PASSIVE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("She's  too big for me to eat now, I need to find a way to increase my appetite...")
			}else if(s[4] == 0){//FAILED
				if(map[party.y][party.x].units.length > 1){
					Entrys.push("I gulp down SUB's head and shoulders, but another girl quickly pushes me over and pulls SUB back out. It looks I'll have to fight for my dinner this time!")
				}
				Entrys.push("I try to eat SUB, but she wiggles out of my grasp. She looks pissed at my betrayal, and ready for a fight!")
			}else if(s[4] == 2){//UNWILLING
				Entrys.push(
					choose(["I ","I ","I ","I ","I ","Licking my lips, I decide its time to eat. I ","I swiftly ","I quickly ","I decide that the SUBRACE's time has come. I ",(choose(["My stomach growls loudly","My stomach makes a deep rumble","My empty stomach gurgles"])+choose([".",", demanding to be sated.",", begging to be fed!"," telling me its time to eat.",", desperate for a meal!",", hungry for the snack in front of me.",", eager for the feminine meal before me."])+choose([" I eagerly "," I casually "," I slowly "," I "," I "," I "])) ])+
					choose(["grab SUB,","grab SUB,","grab SUB,","grab SUB,","reach out to grab hold of SUB,","walk up to SUB. She asks if I need anything, and I nod as I get closer. I grab her by the waist with both hands,","grab hold of SUB,","lift SUB into the air over my hungry maw,","lift SUB above my hungry maw,"])+
					choose([" and"," and",choose([" and hastily"," and before she realizes whats happening, I"," and as she struggles in surprise, I"," and before she can struggle, I"," and before she has time to react, I"," and as she slaps at me, I"," and as she struggles in my grip, I"," and as she begs for me to stop, I"," and she screams in shock as I"," and her eyes grow wide as I"," and she begs for mercy as I"," and she asks me to let her go as I"," she says she can find something else for me to eat while she tries to escape. I tell her I'm not interested before I"," and she shuts her eyes when I"])])+
					choose([" gobble her up."," swallow her down."," swallow her down."," gaze at her sexy body one last time before swallowing it down."," get one last look at her cute face before it, and the rest of her, slide down my throat."," get one last eyeful of her cute form before swallowing it down."," give her beautiful body one last look before swallowing it down."," swallow her down without even taking the time to get a proper taste."," gulp her down!"," start swallowing her down. I savor her unique flavor until the last of her slides down my throat."," start swallowing her down. My tongue explores the SUBRACELONG's body as I devour her whole."," gobble her down."," get my mouth around her shoulders. She's delicious, and I take my time with the rest of her."," get her into my mouth. A few big swallows take her entirely down my throat."," give her a kiss on the cheek before swallowing her down."])+
					choose(["",
						choose([" I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle inside me for a while"," I feel her thrash around inside me"," She thrashes about for a while"," I feel her weakly pound against my stomach walls"," She makes muffled cries for help"," She begs for me to let her out"," She pushes hard against the sides of my stomach"," I feel her spin to get her head above my digestive juices and struggle to breath the putrid fumes"," Her fists pound against my belly"," Her hands make impressions against my belly"])+
						choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until my stomach acids melt her down."," until I start churning her into mush."," until I burp out the last of her air."])
						//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
					])
				)
				if(map[party.y][party.x].units.length == 2 && s[2]==100){
					Entrys.push("I gulp down SUB's head and shoulders! The "+String(map[party.y][party.x].units[1].Name).toLowerCase()+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The "+String(map[party.y][party.x].units[1].Name).toLowerCase()+" says she's not going down without a fight!")
				}else if(map[party.y][party.x].units.length == 2){
					Entrys.push("I gulp down SUB's head and shoulders! The "+String(map[party.y][party.x].units[0].Name).toLowerCase()+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The "+String(map[party.y][party.x].units[0].Name).toLowerCase()+" says she's not going down without a fight!")
				}else if(map[party.y][party.x].units.length > 2){//Larger group
					Entrys.push("I gulp down SUB's head and shoulders! The other girls look in horror as I keep swallowing until she's gone. I look at the remaining girls and lick my lips! They all look ready for a fight!")
				}
			
				if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && unit(s[2]).CPle > 0){
				
					if(unit(s[2]).Positive){
						Entrys.push("As SUB scrubs the floor I get on all fours behind her and start licking her butt. She giggles and tells me I won't have room for dinner if I eat her. When I swallow down her rump she realizes shes really getting eaten! She frantically tries to pull herself as I keep swallowing her down. I start licking her breasts and she nervously tells me its impolite to play with my food. She grabs at the smooth floor as I gobble the rest of her down.")
					}else if(unit(s[2]).Funny){
						Entrys.push("I ask SUB if I can try using her paints. She's excited to see someone else interested in art and sets up a fresh canvas for me. I ask her to lay on the bed so I can draw her. She almost refuses but ultimately strikes a sexy pose on her bed. I paint for a half hour before showing her my work. Its a rough outline of her inside my belly. She looks worried and asks why I chose to draw her like that. I walk up slowly and grab her hands as she fumbles with her words. I gulp them down and lift her over my head, she slides in until her hips and legs are all thats left of her. she says she'll show me how to paint propery if I let her out. I let her slide the rest of the way down, and tell her I'm fine being a bad artist.")
					}else if(unit(s[2]).Slutty){
						Entrys.push("CSUB and I almost finish a bottle of wine and start making out. She struggles when I drunkenly try eating her. We both are too tipsy to keep our balance and we fall to the floor. As she crawls under the table I grab her legs and swallow them down. When shes half inside of me she asks for the rest of the wine as a last request. I sit up at the side of the table and she grabs the bottle from the edge where we left it. She chugs it all and I continue swallowing her down. She hands me the bottle as her arms are forces up and slides the rest of the way in.")
					}else if(unit(s[2]).Hungry){
						Entrys.push("I lift SUB onto the table and take two meaty handfulls of her large behind. She rests on her elbows and tells me to pound her. Instead I start licking her behind. She tells me theres still some pie left over if I'm still hungry. I tell her shes the only pie I want right now. She sighs as I eat her slowly to enjoy my tasty morsel. Her lifetime of munching out is rewarded by being the tastiest meal I've ever had!")
					}else if(unit(s[2]).Negative){
						Entrys.push("I give SUB a foot massage and lick her soles seductively. She sleepily tells me to to massage her legs next as she nods off. When she wakes up again, I have her halfway swallowed. She struggles to escape for less than a minute before laying back down and soon starts snoring as I finish gobbling her down. I've never met someone so sleepy!")
					}
					Entrys.push("My stomach growls loudly. I ask SUB if theres any food left. She smiles nervously before trying to run away! I leap at her and grab her ankles as she's halfway out the door. She sighs and stops struggling as I start swallowing her feet. She doesn't say anything else as I continue swallowing and tasting her delicious body. She tucks her arms in as I get to her hips. After a few more moments, I finish gulping her down.")
					Entrys.push("My stomach growls loudly. I ask SUB if theres any food left. She smiles nervously before trying to run away! I leap at her and grab her ankles as she's halfway out the door. She sighs and stops struggling as I start swallowing her feet. She doesn't say anything else as I continue swallowing and tasting her delicious body. She tucks her arms in as I get to her hips. When I reach her nipples I find them hard as rocks, she may not want to be eaten, but her body is getting into it! I tease her breasts with my tongue until I feel her small body shudder halfway inside me, the quietest moan escapes her lips, and I finish gulping her down.")
				}else if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
					Entrys.push("I call SUB a cute bunny snack. Her eyes grow wide, and she tries to make a run for it! I lunge at her and barely grip her ankles. As she struggles, I shove her feet into my mouth and start swallowing. She stops squirming, and just looks back at me upset. I swallow her quickly, but try to be gentle. She tucks her arms into my maw and soon she's in my belly.")
				} 
				if(unit(s[2]).CPle == 0 && map[party.y][party.x].units.length == 1 && unit(s[2]).arms && unit(s[2]).legs && map[party.y][party.x].tag != "Water" && unit(0).Feas >= unit(s[2]).MPle){
					//---Longer one
					Entry = choose(["jaw","breasts","neck"])
					Entrys.push(choose(["I approach SUB and ask if she knows of any predators in the area to avoid. As she turns to show me, I get right behind her","I approach SUB and ask if she's ever thought about getting eaten. She shivers, and turns her back to me. I slowly get closer","I walk up behind SUB","I tip-toe behind SUB","I sneak up behind SUB","I slowly approach SUB from behind"," I point behind SUB, and she turns to look. While she's distracted I sneak up closer","I walk up to SUB and get her talking about herself. She tells me about"+choose([" the time a wolfgirl ate her sister "," the time her mom got eaten "," the time she snuck through a cave "," the time a wolfgirl almost caught her "," her day "," her daily life "," her life "," her extensive family "," her family "," her crazy childhood "," her childhood "," how most of her family got eaten recently "])+"as I get closer and lay a hand on her shoulder. While she's distracted by her own story, I casually slip behind her"]))
					if(Entry == "jaw"){
						Entrys[Entrys.length-1] += choose([". She tries moving away, but I quickly wrap an arm around her. I stuff two fingers into her mouth, and hold her tight as she whimpers."," and wrap my arm around her shoulders. I shove two fingers into her mouth when she tries to scream."," and hook two fingers into her jaw. Drool flies everywhere as she struggles."," and hook two fingers past her teeth. I use them and my thumb to hold her jaw in place."])
					}
					if(Entry == "neck"){
						Entrys[Entrys.length-1] += choose([", and she starts to run. Her escape looks assured, until she trips over OBJECTSHORT. I lift her back up, and wrap an arm around her neck.",", and she starts to run. I almost lose her until she trips and falls over. I catch her when she stands, and wrap an arm around her neck.",", and she starts to run. I catch her, and wrap an arm around her neck.",", and she starts to run. I catch her, and wrap an arm around her neck.",". She tries moving away, but I quickly wrap an arm around her neck. She grabs my wrist with both of her hands, but isn't strong enough to pull me off."," and wrap my arm around her neck. She struggles against my grip, but I don't let go."," and wrap my arm around her neck. I pull her close and rub against her as she whimpers."," and hook my arm around her neck. She tries stomping on my feet, but I don't release her."," and hook my arm around her neck. She thrashes against my grip, but I easily hold her against me."])
					}
					if(Entry == "breasts"){
						if(unit(s[2]).bust > -1){
							Entrys[Entrys.length-1] += choose([". She tries moving away, but I quickly wrap an arm around her. My hand finds a breast, and she goes still when I give it a squeeze."," and wrap my arm around her. I give her "+DescWord(unit(s[2]),"breasts",90)+"breast a squeeze, and she makes a hushed moan."," and drape my arm around her "+DescWord(unit(s[2]),"belly_noun",100)+". Her heart starts to thump when I move my hand up to grab a breast."])
						}else{
							Entrys[Entrys.length-1] += choose([". She tries moving away, but I quickly wrap an arm around her. My fingers find a nipple, and she goes still when I give it a squeeze."," and wrap my arm around her. Fondling her flat chest causes her to sharply inhale."," and drape my arm around her "+DescWord(unit(s[2]),"belly_noun",100)+". Her back stiffens when I move my hand up to her chest."])
						}
					}
					
					Entrys[Entrys.length-1] += choose([" Her body goes slack when I start to finger her with my free hand."," I find the nub between her legs and rub small circles around it. She goes slack against my body as I gently stroke her hood."," The mood shifts when I slip my free hand between her thighs."," Her legs snap shut when my free hand brushes against her slit, but after a little rubbing, she's a wet mess. Her hips start to grind against me when my fingers slip inside her."])
					
					if(Entry == "jaw"){
						Entrys[Entrys.length-1] += choose([" Her tongue starts to play with my fingers as if in a passionate kiss."," I feel her teeth scrape against my knuckles as she squirms in my grip, but she's clearly not squirming to escape anymore."," She whimpers as my fingers dig deeper into her mouth, but her thighs are completely soaked."," She whimpers as my fingers tug on her cheek, but her hips start bucking wildly when my other hand finds her sweet spot."," I feel her labored breathing against my hand as saliva drips down her front."])
					}
					if(Entry == "neck"){
						Entrys[Entrys.length-1] += choose([" I loosen my grip as she starts to moan."," She frantically taps my arm, and I loosen my grip around her neck. Between heavy breaths, she tells me to keep going."," I keep my grip around her neck and feel her heartbeat quicken as she gets closer to climax."," Drool trickles down as I keep my grip around her neck."])
					}
					if(Entry == "breasts"){
						if(unit(s[2]).bust > -1){
							Entrys[Entrys.length-1] += choose([" I rub a circle around her nipple until its hard, then pinch down on it."," She pushes her "+DescWord(unit(s[2]),"butt",100)+"body against mine as my hands relentlessly tease her."," She tells me not to stop as I keep kneading her breast."])
						}else{
							Entrys[Entrys.length-1] += choose([" Her chest is incredibly sensitive, and she squirms against me as my fingers dance all over her."])
						}
					}
					if(Entry == "jaw"){
						Entrys[Entrys.length-1] += choose([" She bites down hard on my knuckles when she cums"," I yank hard on her cheek, twisting her to look at me. We lock eyes as I start fingering more aggressivly. Soon an orgasm wracks her body"," I yank hard on her cheek, turning her to meet my gaze. I start fingering more aggressivly, and soon an orgasm wracks her body. Her eyes roll back"," Her body shudders when she cums, and I pull my fingers out of her mouth with a "+choose(["juicy","satisfying"])+" plop. She pants heavily"," She suckles my fingers as saliva runs down her body to join the juices coating her thighs. She gushes when she cums"," She starts sucking on my fingers as she gets closer to release. My arm is coated in drool by the time she cums"," I pull my fingers out of her mouth with a "+choose(["juicy","satisfying"])+" plop and use both hands to get her off. Her legs give out when she cums"])
					}
					if(Entry == "neck"){
						Entrys[Entrys.length-1] += choose([" I finally release my arm when she cums"," I slide my arm off her throat as she cums"," I move the arm around her neck down to join my other at getting her off. She holds her breath when she cums"," I pull my arm free of her throat as she cums"," When she's close to finishing I tighten around her throat until she can't breath, then pinch down hard on her clit. A massive orgasm wracks her body"," She starts sucking on my fingers as she gets closer to release. My arm is coated in drool by the time she cums"])
					}
					if(Entry == "breasts"){
						if(unit(s[2]).bust > -1){
							Entrys[Entrys.length-1] += choose([" I clamp down hard on her nipple, causing her to squeal. Her legs give out when she cums"," I finally release her bosom when she cums"," She bites down hard on her finger as she cums"])
						}else{
							Entrys[Entrys.length-1] += choose([" She thrusts out her chest when she cums"," Her back arches as she cums"])
						}
					}
					if(Math.random()<.75 || Entry == "jaw"){
						Entrys[Entrys.length-1] += choose([", and I let her drop to the GROUND.",", and I guide her to the GROUND.",", and I gently lower her to the GROUND.",". I give her a nudge and watch her fall to the GROUND."])
						
						if(Math.random()<.5){
							Entrys[Entrys.length-1] += choose([" She looks back at me"," She yelps when I tug her closer. She looks back"," She sighs"," She says its fine"," She turns, and gives me an understanding nod"," She looks back and bites her lip. She gives me a nod"," She just lays there"," She looks around frantically"," She looks back and pouts"])
						}else if(Entry == "jaw"){
							Entrys[Entrys.length-1] += choose([" She rubs her jaw"," She rubs her cheek"," She wipes to drool off her face"])
						}else if(Entry == "neck"){
							Entrys[Entrys.length-1] += choose([" She rubs her sore neck"," She kneads her stiff neck"," She struggles to look back"])
						}else if(Entry == "breasts"){
							if(unit(s[2]).bust > -1){
								Entrys[Entrys.length-1] += choose([" Her breasts flatten under her"," Her breasts sway under her"," She starts telling me I didn't need to be so rough, but stops when she feels what I'm doing next. She sighs"])
							}else{
								Entrys[Entrys.length-1] += choose([" She lays flat"])
							}
						}
						
							Entrys[Entrys.length-1] += choose([
								" as my teeth scrape against her calves.", 
								" as her feet slide past my lips.", 
								" as my mouth wraps around her ankles."
							]) 
							
						Entrys[Entrys.length-1] += 
						choose([" I swallow the rest of her"+choose([" as she watches."," as she trembles in fear."," before she regains her strength."," quickly."," slowly."," gently."]),
							choose([" She ",choose
								([" She tells me that was her biggest orgasm as she",
								  " She asks if there's any chance I can spit her out, and frowns when I shake my head. She",
								  " She casually",
								  " She timidly"
								])
							])
							+choose([
								" tucks her arms into me while I gobble her up.",
								" gets onto her elbows to help me eat her faster.",
								" rests her head on the ground while I work my way up the rest of her.",
								" gets one last look of the world before sliding into my belly.",
								" watches her hips as I swallow them. Her body tastes amazing as more of it slides past my tongue. She takes a deep breath before sliding completely into my belly."
							])
						])+choose(["",choose([" Once inside she asks if she was tasty, but my stomach suddenly digests her before I can answer."," The bulge she gives my belly doesn't last long as she quickly digests."," Soon she's just a large bulge jutting out of me."," I feel her slosh around as I stand back up."," She stays calm until the acids hit, then struggles frantically as she digests."," I feel her curl up into a ball once she's fully inside."," Once inside, I feel her start masturbating, but she digests before she cums again."])])
					}else{
						Entrys[Entrys.length-1] += choose([", and I clamp my mouth over her head.",", and I quickly start swallowing her head first.",", and I pull her head back into my mouth.",", and swallow down to her shoulders.",", and start swallowing until my cheeks wrap her shoulders."])+
						choose([" She stays still as I pull her in deeper. I grab her hips, and lift them above me."," She's too weak to struggle as I lift her hips into the air."," Her legs weakly kick as I flip her into the air above me."])+
						choose([" I get one last taste while lowering her into my belly."," I let go, and she plunges down my throat."," She squirms as I slowly gulp her down."])+
						choose(["",choose([" Once inside she asks if she was tasty, but my stomach suddenly digests her before I can answer."," The bulge she gives my belly doesn't last long as she quickly digests."," Soon she's just a large bulge jutting out of me."," I feel her slosh around as I stand back up."," She stays calm until the acids hit, then struggles frantically as she digests."," I feel her curl up into a ball once she's fully inside."," Once inside, I feel her start masturbating, but she digests before she cums again."])])
					}
					//---
				}
				if(unit(s[2]).CPle > 0 && map[party.y][party.x].units.length == 1 && unit(s[2]).arms && unit(s[2]).legs){	
					Entrys.push(
					choose(["I ask SUB to close her eyes. She does so and puckers her lips for a kiss.","I approach SUB, and she puckers her lips for a kiss."])+choose([" Instead I gulp down her head and shoulders."," Instead I gulp her down until my tongue reaches her bellybutton."])+choose([" She yelps in surprise at suddenly becoming food!"," She starts to kick her legs, trying to escape."])+choose([" She gives up as I swallow down the rest of her."," She begs for me not to eat her while I swallow down the rest of her."]))
				}else if(unit(s[2]).willing){
					Entrys.push(
						choose(["I ","I ","I ","I ","I ","Licking my lips, I decide its time to eat. I ","I swiftly ","I quickly ","I decide that the SUBRACE's time has come. I ",(choose(["My stomach growls loudly","My stomach makes a deep rumble","My empty stomach gurgles"])+choose([".",", demanding to be sated.",", begging to be fed!"," telling me its time to eat.",", desperate for a meal!",", hungry for the snack in front of me.",", eager for the feminine meal before me."])+choose([" I eagerly "," I casually "," I slowly "," I "," I "," I "])) ])+
						choose(["grab SUB","grab SUB","grab SUB","grab SUB","reach out to grab hold of SUB","walk up to SUB. She blushes as I grab her by the waist with both hands","grab hold of SUB","lift SUB into the air over my hungry maw","lift SUB above my hungry maw"])+
						choose([", and",choose([". Understanding the hopelessness of her situation, she gives me a nod, and I",", and she starts to cry as I",". She looks shocked, but doesn't struggle. I",", and she only asks that I make it quick. I",". She only sighs as I",". She merely shrugs before I"," and grip her tight as she struggles for a moment. She gives up quickly, and I",
							choose([", and she tries weakly to break free",". She tries twisting out of my grip",". She tries struggling in my arms"])+
							choose([" for a moment before relaxing. She smiles and shifts her body to be eaten easier. I thank her, and"," before suddenly stopping to instead ask if she can get a last request. When I nod, she only asks for a kiss goodbye. We lock lips, I feel her tongue slip past my teeth towards her final destination. When we break apart, she gives me a nod, and I ",", but gives up quickly. I",", but quickly realizes she doesn't have a chance. I"," at first. When she realizes she can't escape, she simply asks me to be gentle. I nod before I"])
						])	])+
						choose([" gobble her up."," swallow her down."," swallow her in one gulp."," start swallowing her down. My teeth scrape against her "+DescWord(unit(s[2]),"belly_noun",10)+" as she slides down into my stomach."," start swallowing her. My tongue slips between her "+DescWord(unit(s[2]),"butt",75)+"thighs"+choose([" as I get a final taste before gulping her down."," as she slowly starts to moan louder and louder. Once I've tasted enough, I gulp down the rest of her."])," taste her "+DescWord(unit(s[2]),"breasts",75)+"breasts as I swallow her down."," gaze at her sexy body one last time before swallowing it down."," get one last look at her cute face before swallowing her down."," get one last eyeful of her cute form before swallowing her down."," give her beautiful body one last look before swallowing her down."," swallow her down without even taking the time to get a proper taste."," gulp her down."," start swallowing her down. I savor her unique flavor until the last of her slides down my throat."," start swallowing her down. My tongue explores the SUBRACELONG's body as I devour her whole."," gobble her down."," get my mouth around her shoulders. She's delicious, and I take my time with the rest of her."," get her into my mouth. A few big swallows take her entirely down my throat."])+
						choose(["","",
							choose([" She merely rests against a side of my belly"," Instead of struggling, she only chats with me"," She stays calm inside, hardly making a sound"," She's calm at first, but starts struggling when my acids begin breaking her down. She thrashes around desperately"," Surprisingly, she masturbates"," She asks how she tastes, and I tell her she was great. She says she's glad and keeps chatting"," I hear her softly moan and slosh around"," Her hands push outward gently. She rubs my stomach walls"])+
							choose([" until she digests."," until she digests."," until she digests."," before passing out."," before she fully digests."," before digesting away."," until my stomach acids melt her down."," until I start churning her into mush."])
							//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
						])
					)
				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						if(unit(s[2]).willing && Math.random()<.5){
							Entrys = ["I grab SUB with one hand and hold her above my hard cock. She looks worried as I lower her down. When her feet touch my tip, they slip inside and I continue to lower her further. She looks in horror as shes slowly consumed by my large member. I let go after her butt slides in and watch her tremble as she's completely devoured by my rod. Surprisingly, I feel her masturbate once inside. She climaxes just before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure... "]
						}else{
							Entrys = ["I grab SUB with one hand and hold her above my hard cock. She looks worried as I lower her down. When her feet touch my tip, they slip inside and I continue to lower her further. She looks in horror as shes slowly consumed by my large member. I let go after her butt slides in and watch her struggle in vain before being completely devoured by my rod. I feel her curl up inside my sack before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure... "]
						}
					}else{
						Entrys = ["I grab SUB by the tail, and fling her above me. She flails around as she tries to right herself. I open my mouth wide, and she easily slides down my throat."]
						Entrys = ["I grab SUB with one hand and hold her above my gaping mouth. She looks worried as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her further. She looks in horror as shes slowly consumed. I let go after her butt slides in and feel her struggle against my teeth before I swallow her in one gulp."]
					}
				}
				//------
				if(unit(0).Feas == 10 && unit(s[2]).Tags[0] == "Bunnygirl" && map[party.y][party.x].units.length == 1){
					Entrys = [""];
					s[12] = choose(["promise","confession","both","neither"])
					//unit(s[2]).willing = true;//DELETE THIS LINE
					
					//+DescWord(unit(100),"breasts",100)+"breasts."
					if(unit(s[2]).bust >= 1){
						Entrys[0] += 
							choose(["CSUB bends over to pick something up, and I get a perfect view of her "+choose([DescWord(unit(100),"breasts",100),"hanging"])+" breasts."," CSUB's "+DescWord(unit(100),"breasts",100)+"bosom catches my eye."])+
							choose([" My stomach grumbles, and I realize she'd make a great first meal."," Drool drips down my chin as I stare. She's just too perfect not to eat."])
					}else{
						Entrys[0] += choose([
							choose(["My stomach grumbles","My hungry stomach grumbles"])+
							choose([" loudly. CSUB might just be the snack I need.",", demanding to be sated. CSUB waves at me, and I make up my mind.",", and SUB is starting to look like quite the treat.",", and SUB is looking pretty tasty.",", and SUB looks like an easy first meal."])
							,
							choose(["I watch SUB go about her day","CSUB leans against OBJECTSHORT"])+
							choose([", and I start thinking that she'd make an easy first meal.",". After a moment of hesitation, I decide its time for my first meal."," looking like the perfect meal to sate my appetite."])
						])
					}
					Entrys[0] += choose([" I walk up, and"," I walk up, and clumsily"," Fingers trembling, I walk up and"," I nervously approach and"," Timidly, I walk up and"," I try acting casual as I approach her. She starts talking, but I"])+
					choose([" fumble trying to grab her. She"," grab her. I almost succeed until she"," try grabbing her. I almost succeed until she"," grab her by the waist. I nearly have her until she"," reach out for her. I nearly grab her until she"])+
					//choose([" She"])+
					choose([""," swiftly"," easily"," deftly"])+
					choose([" pulls away, and starts running."," shoves me down, and vaults over me. She runs away quickly."," shoves me away and turns to run."," twists out of my grip, and dashes away."," slips out of my grip with a flourish. I try grabbing her again, but she somersaults between my legs and starts to run!"])
					
					if(AnyUnit != null){
						if(AnyUnit.Tags[0] == "Catgirl"){ 
							Entrys[0] += choose([" My ANY quickly pounces"," My ANY's butt sways before she pounces. She easily shoves the girl to the ground"])+choose([", and purrs as I get ready to eat the bunny.",". I pat her head in thanks before directing my attention to the bunny."])
						}else if(AnyUnit.Tags[0] == "Froggirl"){ 
							Entrys[0] += choose([" My ANY's tongue binds around the girl's middle. She lets go after I grab her."," Her escape comes to an end when my ANY's tongue trips her."," My ANY's tongue grabs her, and doesn't let go until I'm ready. She retracts her tongue, and SUBSHORT falls to the GROUND for me to eat."])
						}else if(AnyUnit.Tags[0] == "Bunnygirl"){ 
							Entrys[0] += choose([" My ANY grabs the other bunny, and apologises as she drags her back."])+choose([""],[" She whispers softly that its my first time as a predator, and that I'm still really bad at it. I try to ignore her as they get closer."," She explains that I'm a new predator, and it would be really nice if my first meal was an easy one."," She cheerfully explains that I'm a new predator, and that she's my very first meal. She seems shocked that the trapped bunny doesn't share in her enthusiasm."])+choose([" The captured girl tries reasoning with her kin, but its clearly no use. She pouts for a moment, but eventually complies when told to lay on the ground."," The other girl stays quite as she's guided onto the ground before me."," The other girl keeps struggling even as my bun lays on on the ground before me."])+choose([" My bunny smiles when I thank her, and keeps watching as I kneel behind the prone girl."," My bunny blushes when I thank her, but looks away when I kneel behind the prone girl."])
						}else{
							Entrys[0] += choose([" My ANY trips her, and presses down on her back so she can't escape."," Her escape comes to an end when my ANY trips her."," My ANY trips her, and tells me to start with the legs."," My ANY grabs her, and doesn't let go until I'm ready. She "+choose(["gently","sternly","roughly"])+choose([" guides"," forces"," gets"])+" SUBSHORT to the GROUND for me to eat."])
						}
					}else{
						Entrys[0] += choose([" I chase after her desperately as she gets distance between us."," I scramble to chase after her before I'm left behind."," I hastily give chase, and start to gain on her."])+
						choose([" I follow her closely, but struggle to catch up."," She looks back, and seems surprised that I'm still behind her."," My longer strides help me close the gap, and her jaw drops when she looks back at me."])+
						choose([" Using all of my remaining energy, I sprint until my lungs are burning and leap at her. I'm only able to grab a shin, but its enough to send her to the ground."," She stumbles, and I take the opportunity to tackle her to the ground. I almost have her again until she elbows me in the gut, and crawls out from under me. I clamber after her as she tries to stand."," A root catches her foot, sending her to the ground. I dive onto her, but she rolls out from under me. "])
					
					}
					Entrys[0] += choose([" My hands wrap around her ankles"," My fingers tighten around her ankles"," My grip locks around her ankles"])+
					choose([
						", and she keeps struggling as I shove her feet into my mouth. While I work my way up her legs she tries punching me, but I manage to grab her wrists. I hold them until they too can get tucked inside. She gives up once I have her completely trapped, and I work up the rest of her body in peace. I push her head in, and she finishes the journey.",
						", and this time she's unable to squirm away. I start with her feet, and quickly make my way up her tasty body. She tries pulling herself out until I'm able to grab her wrists. Once they're in my mouth, she stops struggling, and I finish eating her in peace.",
						", and she stops struggling. I apologize before beginning to eat. She silently nods, and lets me swallow her in peace.",
						", and she goes still. She sighs, but lets me swallow her."
						])+
					choose(["",choose([" My stomach cramps up"," My stomach starts to convulse"," Gurgling noises come from my stomach"])+choose([" as she digests."," as she's broken down."," as she's turned to mush."])+choose(["","",""," I call out to her and get no reply, she's just a bunch of mushy nourishment now."," I shake my belly, and feel it slosh around. She's been completely broken down."," I poke myself and don't feel any resistance. She completely digested!"])])
				
				}
				//------	
				if(unit(s[2]).Tags[0] == "Slimegirl"){
					Entry = "";
					Entry += choose([])
					
					Entrys.push(choose(["I put my hand behind SUB's head and pull her into a kiss. She kisses back, and our tongues meet. The passionate moment ends when I push her face into my mouth","I latch onto SUB's breast","I shove SUB's head into my mouth","I pull SUB's hands into my mouth","I push SUB to the GROUND and plunge my mouth between her legs. She wiggles as I lick her translucent slit. I get my lips completely over her mound"])+
					choose([" and start swallowing her. Rich "+DescWord(unit(s[2]),"slime",100)+" flavored goo coats my throat as I swig her down."," and start sucking. Her "+DescWord(unit(s[2]),"slime",100)+" flavored goo rushes down my thoat."," and start slurping her down. My taste buds are overwhelmed by the "+DescWord(unit(s[2]),"slime",100)+" flavor flowing along my tongue."])+
					choose([" Her body shrinks as I gulp again and again."," Her body gets smaller as I keep drinking."," She squirms as she gets smaller."])+
					choose([" Soon the last of her slides down my throat."," Soon the last of her slides down my throat and I burp. A colorful bubble pops out of my mouth and floats away."," I don't stop until she's completely in my belly."," My belly digests her quickly once she's completely inside."])
					)
					Entry = "";
					Entrys.push("I slurp down SUB, she has a great "+DescWord(unit(s[2]),"slime",100)+" flavor.")
				}
				if(Entrys.length == 0){
					Entrys.push("I grab SUB, and swallow her down!")
					Entrys.push("I gulp down SUB, I feel her struggle inside me until she passes out!")
				}
			}else if(s[4] == 3){//WILLING
				Entrys.push(
					choose(["I ","I ","I ","I ","I ","Licking my lips, I decide its time to eat. I ","I swiftly ","I quickly ","I decide that if someone is going to eat the SUBRACE, it might as well be me. I ","I decide I better eat the SUBRACE before someone else does. I ","I decide that the SUBRACE's time has come. I ",(choose(["My stomach growls loudly","My stomach makes a deep rumble","My empty stomach gurgles"])+choose([".",", demanding to be sated.",", begging to be fed!"," telling me its time to eat.",", desperate for a meal!",", hungry for the snack in front of me.",", eager for the feminine meal before me."])+choose([" I eagerly "," I casually "," I slowly "," I "," I "," I "])) ])+
					choose(["grab SUB,","grab SUB,","grab SUB,","grab SUB,","reach out to grab hold of SUB,","approach SUB. Instead of fleeing, she only kneels submissively. I bend down","approach SUB. Instead of trying to escape, she only leans towards me submissively. I grab her shoulders","approach SUB. Instead of running, she drops to her knees submissively. I lift her by the waist","walk up to SUB. I grab her by the waist with both hands,","grab hold of SUB,","lift SUB into the air over my hungry maw,","lift SUB above my hungry maw,"])+
					choose([" and"," and",choose([" and slowly"," and she doesn't struggle as I"," and she gasps when I"," and she tells me to go ahead! I"," and she tells me to eat up as I"," and as she gives me a smile, I"," and as she wiggles in my grip, I"," and as she begs for me to continue, I"," and she screams in glee as I"," and her eyes grow wide as I"," and she says I better enjoy her as I"," and she asks me to eat slowly as I"," and she says she hopes she is delicious as I"," and she shuts her eyes when I"])])+
					choose([" swallow her down."," swallow her down."," swallow her down."," gaze at her sexy body one last time before swallowing it down."," get one last look at her cute face before it, and the rest of her, slide down my throat."," get one last eyeful of her cute form before swallowing it down."," give her beautiful body one last look before swallowing it down."," swallow her down without even taking the time to get a proper taste."," gulp her down!"," start swallowing her down. I savor her unique flavor until the last of her slides down my throat."," start swallowing her down. She tells me to slow down when I reach her hips, and I slip my tongue between her legs. Her juices make my throat slick and she slides the rest of the way down."," start swallowing her down. She gasps for breath as I start tasting her mound. I lose my grip on her when she arches her back, and she slides down into my belly."," start swallowing her down. My tongue dips between the SUBRACELONG's legs and she humps her hips against it. Her humping gets more intense and soon she slips down the rest of the way."," start swallowing her down. My tongue explores the SUBRACELONG's body as I devour her whole."," gobble her down."," get my mouth around her shoulders. She's delicious, and I take my time with the rest of her."," get her into my mouth. A few big swallows take her entirely down my throat."," give her a kiss on the cheek before swallowing her down."])+
					choose(["",
						choose([" She asks if she was tasty, and I tell her she was the best.",
							" She says it's cozy inside my tight belly."
						])
					])+
					choose(["",
						" I "+choose(["fondle","grope","squeeze"])+" her"+choose([" body as she"," bosom as she"," breasts as they"," behind as it"," rear as it"])+choose([" presses against my stomach. She moans at my touch, and starts fingering herself.","pushes outward. I play with her as she starts masturbating inside me."])+choose([" She cums just before digesting!"," Despite my help, she isn't able to cum before digesting."," She screams out in orgasm right before digesting!"," She shudders when she climaxes, and my body quickly digests her."]),
						choose([" I feel her masturbate "," I feel her masturbate "," I feel her masturbate "," I feel her masturbate "," Her masturbating almost takes me off balance as she tries getting off for one last time"," I feel her masturbate inside me for a while"," I hear her moan inside me"," She wiggles around and moans for a while"," I feel her hump against my stomach walls"," She moves rhythmically inside as she tries getting off"," She begs for me to melt her down as she masturbates"," She pushes hard against the sides of my stomach while she moans"," Her body presses against my belly, I see the outline of her hand between her legs"," Her hands make impressions against my belly as she begs to be churned into mush"])+
						choose([" until she cums right as I finish digesting her."," until she cums just before digesting."," she isn't able to climax before digesting unfortunately."," until she digests."," before she cums. She thanks me for choosing her before passes out."," before her body shudders in orgasm. She fully digests soon after."," before finally reaching her zenith and digesting away."," before she gives up and digests without an orgasm."," until she cums. She cries out as my stomach acids melt her down."," before reaching her climax. We say our goodbyes as I start churning her into mush."," until my acids get to work and she starts panicking. I burp out the last of her air to stop her suffering."])
						//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
					])
				)
				if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && unit(s[2]).CPle > 0){
				
					if(unit(s[2]).Positive){
						Entrys.push("As SUB scrubs the floor I get on all fours behind her and start licking her rear. She giggles and tells me I won't have room for dinner if I eat her. When I swallow down her rump she realizes shes really getting eaten! She tells me her "+map[party.y][map.party.y].name+" is all mine if I keep it clean. I start licking her breasts and she jokingly tells me its impolite to play with my food, but she appreciates it. After she cums I gobble the rest of her down!")
					}else if(unit(s[2]).Funny){
						Entrys.push("I ask SUB if I can try using her paints. She's excited to see someone else interested in art and sets up a fresh canvas for me. I ask her to lay on the bed so I can draw her. She almost refuses but ultimately strikes a sexy pose on her bed. I paint for a half hour before showing her my work. Its a rough outline of her inside my belly. She blushes and says its not bad for a first try. I ask if I can get more intimate with my subject matter. She smiles and offers me her hands. I gulp them down and lift her over my head, she slides in until her behind and legs are all thats left of her. I start eating her out and she jokes that I'm better with my tongue than a paint brush. After she cums, I let her slide the rest of the way down.")
					}else if(unit(s[2]).Slutty){
						Entrys.push("CSUB and I almost finish a bottle of wine and start making out. She doesn't struggle when I swallow her head and shoulders. When shes fully inside of me, she asks me to finish the rest of the wine so she can have some. I chug straight from the bottle and feel her adjust herself to drink as it showers down. She says its even tastier second hand! As I relax and try to sober up I hear her sloppily masturbate inside of me. Soon I hear her scream out, but I don't know if its from orgasm or digestion.")
					}else if(unit(s[2]).Hungry){
						Entrys.push("I lift SUB onto the table and take two meaty handfulls of her large behind. She rests on her elbows and tells me to pound her. Instead I start licking her behind. She tells me to go slow, because good food should be enjoyed! I take my time eating her, and she cums as her toes slip into my mouth.")
					}else if(unit(s[2]).Negative){
						Entrys.push("I give SUB a foot massage and lick her soles seductively. She moans as I tease her and begs me to eat her. She screams into her pillow as I swallow her down! She cums before I make it to her knees and passes out. I continue swallowing my meal and hear her snore inside me. I've never met someone so sleepy!")
					}
				
					Entrys.push("My stomach growls loudly. I ask SUB if theres any food left. She smiles before saying she has an idea. I watch her hop onto the table and offer me her legs, I start by sucking on her calves before swallowing down to her hips. My tongue finds her slit and I give her one last orgasm before gulping the rest of her down!")
					Entrys.push("I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too delicious not to eat! I start swallowing one cheek, and soon get both into my maw. CSUB looks back and sees her behind completely engulfed. Her smile widens, and she says she hopes I enjoy my tasty bunny snack. She yelps when I gulp her down to her breasts. My tongue teases her nipples until she cums, and I gobble the rest of her down!")
				}else if(unit(s[2]).CPle == 0 && map[party.y][party.x].units.length == 1 && unit(s[2]).arms && unit(s[2]).legs && map[party.y][party.x].tag != "Water" && unit(0).Feas >= unit(s[2]).MPle){
					//---Longer one
					Entry = choose(["jaw","breasts","neck"])
					Entrys.push(choose(["I approach SUB and ask if she knows of any predators in the area to avoid. As she turns to show me, I get right behind her","I approach SUB and ask if she's ever thought about getting eaten. "+choose(["She blushes, and turns aside.","She giggles, and innocently turns away."])+choose([" She starts explaining that she might be interested but nobody's ever tried. I listen as I sneak closer"," She says she's not sure because nobody's ever tried. I listen as I stroll closer"," She never looks back as I approach"]),"I sneak up behind SUB","I walk up behind SUB","I tip-toe behind SUB","I slowly approach SUB from behind"," I point behind SUB, and she turns to look. While she's distracted I sneak up closer","I walk up to SUB and get her talking about herself. She tells me about"+choose([" the time a wolfgirl ate her sister "," the time her mom got eaten "," the time she snuck through a cave "," the time a wolfgirl almost caught her "," her day "," her daily life "," her life "," her extensive family "," her family "," her crazy childhood "," her childhood "," how most of her family got eaten recently "," how her sister let herself be eaten "," how her oldest sister got eaten by her mother "])+"as I get closer and lay a hand on her shoulder. While she's distracted by her own story, I casually slip behind her"]))
					if(Entry == "jaw"){
						Entrys[Entrys.length-1] += choose([". Before she can move away, I quickly wrap an arm around her. I stuff two fingers into her mouth, and hold her tight as she whimpers."," and wrap my arm around her shoulders. I shove two fingers into her mouth before she can scream."," and hook two fingers into her jaw. Drool flies everywhere as she tries to talk."," and hook two fingers past her teeth. I use them and my thumb to hold her jaw in place. I can't tell whether she's making muffled screams or moaning."])
					}
					if(Entry == "neck"){
						Entrys[Entrys.length-1] += choose([". Before she can move away, I quickly wrap an arm around her neck. She grabs my wrist with both of her hands, squeezing my muscles."," and wrap my arm around her neck. I pull her close and rub against her as she whimpers."," and hook my arm around her neck. She wiggles against my grip, but I easily hold her against me."])
					}
					if(Entry == "breasts"){
						if(unit(s[2]).bust > -1){
							Entrys[Entrys.length-1] += choose([". Before she can move away, I quickly wrap an arm around her. My hand finds a breast, and she goes still when I give it a squeeze."," and wrap my arm around her. I give her "+DescWord(unit(s[2]),"breasts",90)+"breast a squeeze, and she makes a hushed moan."," and drape my arm around her "+DescWord(unit(s[2]),"belly_noun",100)+". Her heart starts to thump when I move my hand up to grab a breast."])
						}else{
							Entrys[Entrys.length-1] += choose([". Before she can move away, I quickly wrap an arm around her. My fingers find a nipple, and she goes still when I give it a squeeze."," and wrap my arm around her. Fondling her flat chest causes her to sharply inhale."," and drape my arm around her "+DescWord(unit(s[2]),"belly_noun",100)+". Her back stiffens when I move my hand up to her chest."])
						}
					}
					
					Entrys[Entrys.length-1] += choose([" Surprisingly, she grabs my free hand, and pulls it down between her thighs. She's already soaked as I start fingering her."," Surprisingly, she guides my free hand down to her slit. She's already wet, and I start thrusting a digit inside her."," Her body goes slack when I start to finger her with my free hand."," I find the nub between her legs and rub small circles around it. She goes slack against my body as I gently stroke her hood."," The mood shifts when I slip my free hand between her thighs."," Her legs open wider when my free hand brushes against her slit. After a little rubbing, she's a wet mess. Her hips start to grind against me when my fingers slip inside her."])
					
					if(Entry == "jaw"){
						Entrys[Entrys.length-1] += choose([" Her fingers wrap around my wrist, and push it towards her mouth. She moans as she starts making out with my hand.",". Her tongue starts to play with my fingers as if in a passionate kiss."," I feel her teeth scrape against my knuckles as she squirms in my grip, but she's clearly not squirming to escape anymore."," She whimpers as my fingers dig deeper into her mouth, but her thighs are completely soaked."," She whimpers as my fingers tug on her cheek, but her hips start bucking wildly when my other hand finds her sweet spot."," I feel her labored breathing against my hand as saliva drips down her front."])
					}
					if(Entry == "neck"){
						Entrys[Entrys.length-1] += choose([". I start loosening my grip, but she pushes my arm back against her neck and tells me she wants it rough. She trembles when I lift her by the throat. My fingers get drenched once I start aggressivly stirring her up."," I loosen my grip as she starts to moan."," She frantically taps my arm, and I loosen my grip around her neck. She gasps for air. Instead of trying to escape, she only leans on me for support. I lick the back of her neck, and feel her quiver."," I keep my grip around her neck as she rubs against me, and her juices start running down my leg. "," Drool trickles down as I keep my grip around her neck. Her hips hump the air as she gets closer to climax."])
					}
					if(Entry == "breasts"){
						if(unit(s[2]).bust > -1){
							Entrys[Entrys.length-1] += choose([" I rub a circle around her nipple until its hard, then pinch down on it."," She pushes her "+DescWord(unit(s[2]),"butt",100)+"body against mine as my hands relentlessly pleasure her."," She tells me not to stop as I keep kneading her breast."])
						}else{
							Entrys[Entrys.length-1] += choose([". Her chest is incredibly sensitive, and she squirms as my fingers dance all over her."," She pushes her "+DescWord(unit(s[2]),"butt",100)+"body against mine as my hands relentlessly pleasure her."])
						}
					}
					if(Entry == "jaw"){
						Entrys[Entrys.length-1] += choose([" She bites down hard when she cums"," Her body shudders when she cums, and I pull my fingers out of her mouth with a "+choose(["juicy","satisfying"])+" plop. She pants heavily"," I pull my fingers out of her mouth with a "+choose(["juicy","satisfying"])+" plop and use both hands to get her off. Her legs give out when she cums"," I yank hard on her cheek, twisting her to look at me. We lock eyes as I start fingering more aggressivly. Soon an orgasm wracks her body"," I yank hard on her cheek, turning her to meet my gaze. I start fingering more aggressivly, and soon an orgasm wracks her body. Her eyes roll back"," She suckles my fingers as drool runs down her body to join the juices coating her thighs. She gushes when she cums"," She starts sucking on my fingers as she gets closer to release. Her teeth draw blood when she cums"])
					}
					if(Entry == "neck"){
						Entrys[Entrys.length-1] += choose([" I finally release my arm when she cums"," I slide my arm off her throat as she cums"," I pull my arm away her neck and use both hands to get her off. Her legs give out when she cums"," I pull my arm free of her throat as she cums"," When she's close to finishing I tighten around her throat until she can't breath, then pinch down hard on her clit. A massive orgasm wracks her body"])
					}
					if(Entry == "breasts"){
						if(unit(s[2]).bust > -1){
							Entrys[Entrys.length-1] += choose([" I clamp down hard on her nipple, causing her to squeal. Her legs give out when she cums"," I finally release her sore bosom when she cums"," She bites down hard on her finger as she cums"])
						}else{
							Entrys[Entrys.length-1] += choose([" She thrusts her chest out when she cums"," Her back arches as she cums"])
						}
					}
					if(Math.random()<.75 || Entry == "jaw"){
						Entrys[Entrys.length-1] += choose([", and I let her drop to the GROUND.",", and I guide her to the GROUND.",", and I gently lower her to the GROUND.",". I give her a nudge and watch her fall to the GROUND."])
						
							Entrys[Entrys.length-1] += choose([" She looks back at me when I drag her closer. She watches"," She looks back at me"," She gasps when I tug her closer. She watches"," She lifts her legs and giggles"," She tells me to enjoy"," She looks back and smiles. She gives me a grin"," She moans"," She looks amazed"])
						
							Entrys[Entrys.length-1] += choose([
								" as my teeth scrape against her calves.", 
								" as her feet slide past my lips.", 
								" as my mouth wraps around her ankles."
							]) 
							
						Entrys[Entrys.length-1] += 
						choose([" I swallow the rest of her"+choose(["."," quickly."," slowly."," gently."]),
						
							choose([" When I get to her hips, I plunge my tongue inside."," I feel her lurch when her nipples scrape against my teeth. I use my tongue to relentlessly tease them as they harden into points. "])+
							choose([" She contort when she reaches her zenith again"," Her body quakes when she finishes again"," She's breathless after she cums again"])+
							choose([". I gulp the rest of her down and stand up.",", and whispers her thanks while sliding down into my belly."]),
							
							choose([" She "+choose(["","happily ","giggles, and ","eagerly ","casually "]),choose
								([" She tells me that was her biggest orgasm as she",
								  " She admits that she was a virgin, and thanks me for her first and last time. Giggling, she",
								  " She says she always knew she'd get eaten. She thanks me for the happy ending, and",
								  " She says she didn't expect her first to be her last time. Giggling, she",
								  " She admits that she's always wanted to be eaten, and",
								  " She giggles as she tells me she's a virgin, and",
								  " She thanks me for popping her cherry. She blushes as she"
								])
							])
							+choose([
								" tucks her arms into me while I gobble her up.",
								" gets onto her elbows to help me eat her faster.",
								" gets one last look of the world before sliding into my belly.",
								" slides a hand between her thighs to start masturbating while I swallow her up.",
								" crawls backwards into me while I swallow her down.",
								" pushes herself further into me until only her arms remain. We hold hands for a moment before I swallow hers down.", 
								" wiggles her hips while they slide into my throat. I keep swallowing until only her arms remain outside. We hold hands for a moment before I slurp hers down."
							])
						])+choose(["",choose([" I hear her moan loudly as she digests."," She cries out in bliss as I digest her."," I hear her climax again before digesting."])])
					}else if(Math.random() < .5){
						Entrys[Entrys.length-1] += choose([", and I clamp my mouth over her head.",", and I quickly start swallowing her head first.",", and I swallow her head.",", and swallow down to her shoulders.",", and start swallowing until my cheeks wrap her shoulders."])+
						choose([" She wiggles as I pull her in deeper. I grab her hips, and lift them above me."," She slips a hand between her thighs as I lift them into the air."," She starts to masturbate as I flip her into the air above me."])+
						choose([" I get one last taste while lowering her into my belly."," I let go, and she plunges down my throat."," She moans as I slowly gulp her down."])+
						choose(["",choose([" I hear her cry out in bliss as she digests."," I hear her climax again before digesting."])])
					}else{
						Entrys[Entrys.length-1] += choose([", and I clamp my mouth over her head.",", and I quickly start swallowing her head first.",", and I swallow her head.",", and swallow down to her shoulders.",", and start swallowing until my cheeks wrap her shoulders."])+
						choose([" She doesn't move as I pull her in deeper. I grab her hips, and lift them above me."," She stays calm as I lift her hips into the air."," Her legs twitch as I flip her into the air above me."])+
						choose([" I get one last taste while lowering her into my belly."," I let go, and she plunges down my throat."," She squirms as I slowly gulp her down."])+
						choose(["",choose([" She asks how she tasted, and I tell her she was amazing. She's overjoyed, and starts moaning as I digest her."," While she digests, she thanks me for the happy ending."," We share a few words as she digests."," I hear her moan loudly as she digests."," I hear her cry out in bliss as she digests."," I hear her climax again before digesting."])])
					}
					//---
				}
				if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.5){
					Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose as I finish my meal. I feel my belly jiggle as she cums!")
					Entrys.push("I call SUB a cute bunny snack. She says if she's just a snack, I should eat her! My hands wrap around her waist and I lift her into a kiss before swallowing her head and shoulders. She cums before I even reach her hips, and I gulp down her still quivering legs!")
				}
				if(party.units.length == 2){
					if(unit(1).willing){
						Entrys.push(String("My "+party.units[1].Name +" watches as I start swallowing SUB head first! As I get to SUBSHORT's waist, I see that my "+party.units[1].Tags[0]+" has started fingering herself as she watches me taste SUBSHORT's lower lips. After I finish eating SUBSHORT, my "+party.units[1].Tags[0] +" orgasms loudly. Panting, she asks when I'm going to eat her!"))
					}else if(party.units[1].Hungry){
						Entrys.push(String("My "+party.units[1].Name +" watches as I start swallowing SUB head first! As I get to SUBSHORT's waist, I see that my "+party.units[1].Tags[0]+" has started fingering herself as she watches me taste SUBSHORT's lower lips. After I finish eating SUBSHORT, my "+party.units[1].Tags[0] +" orgasms loudly. Panting, she asks if she can eat the next one."))
					}
					Entrys.push(String("I grab SUB by her feet and start swallowing them down. My "+party.units[1].Name+" approaches and starts making out with her! I eat slowly, letting them have their fun. They keep at it until I swallow SUB's head. I lock lips with my "+party.units[1].Name+" to continue the kiss. Eventually we break away as a strand of saliva droops between us. She feels my belly with her hand, and a handprint emerges from inside to match hers."))
				}
				if(map[party.y][party.x].units.length > 1){
					if(s[2] == 100){
						Entrys.push(String("I grab SUB by her feet and start swallowing them down. The "+unit(101).Name+" approaches and starts making out with her! I eat slowly, letting them have their fun. They keep at it until I swallow SUBSHORT's head. The remaining girl feels my belly with her hand, and a handprint emerges from inside to match hers."))
					}else{
						Entrys.push(String("I grab SUB by her feet and start swallowing them down. The "+unit(100).Name+" approaches and starts making out with her! I eat slowly, letting them have their fun. They keep at it until I swallow SUBSHORT's head. The remaining girl feels my belly with her hand, and a handprint emerges from inside to match hers."))
					}
					
				}
				if(unit(s[2]).CPle > 0 && Math.random()<.25){	
					Entrys.push("I ask SUB to close her eyes. She does so and puckers her lips for a kiss. Instead I gulp down her head and shoulders. Instead of struggling she says it's about time somebody ate her! She plays with herself as I finish swallowing her down!")
				}
				Entrys.push("I gulp down SUB, I feel her masturbate inside me until she passes out!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and hold her above my hard cock. She looks excited as I lower her down. When her feet touch my tip, they slip inside and I continue to lower her further. She starts to finger and fondle herself as shes slowly consumed by my large member. I let go after her butt slides in and watch her orgasm before being completely devoured by my rod. I feel her cum again before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure... "]
					}else{
						Entrys = ["I grab SUB by the tail, and fling her above me. She flails around until she's upside down in a divers pose. Her smiling face rapidly approaches as I open my mouth wide, and then she quickly shoots down my throat!"+choose([""],[" She asks how she did, and I tell her she had perfect form. We both giggle until she digests."," I hear her masturbate inside me before she's digested"," She barely has time to masturbate before my stomach gets to work. I feel her orgasm just before she's digested!"])]
						Entrys = ["I grab SUB with one hand and hold her above my gaping mouth. She looks excited as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her further. She starts to finger and fondle herself as shes slowly consumed. I let go after her butt slides in and feel it grind against my tongue until she orgasms. She kisses my lip before sliding down into my belly."]
					}
				}
//------
				if(unit(0).Feas == 10 && unit(s[2]).Tags[0] == "Bunnygirl" && map[party.y][party.x].units.length == 1){
					Entrys = [""];
					s[12] = choose(["promise","confession","both","neither"])
					//unit(s[2]).willing = true;//DELETE THIS LINE
					
					//+DescWord(unit(100),"breasts",100)+"breasts."
					if(unit(s[2]).bust >= 1){
						Entrys[0] += 
							choose(["CSUB bends over to pick something up, and I get a perfect view of her "+choose([DescWord(unit(100),"breasts",100),"hanging"])+" breasts."," CSUB's "+DescWord(unit(100),"breasts",100)+"bosom catches my eye."])+
							choose([" My stomach grumbles, and I realize she'd make a great first meal."," Drool drips down my chin as I stare. She's just too perfect not to eat."])
					}else{
						Entrys[0] += choose([
							choose(["My stomach grumbles","My hungry stomach grumbles"])+
							choose([" loudly. CSUB might just be the snack I need.",", demanding to be sated. CSUB waves at me, and I make up my mind.",", and SUB is starting to look like quite the treat.",", and SUB is looking pretty tasty.",", and SUB looks like an easy first meal."])
							,
							choose(["I watch SUB go about her day","CSUB leans against OBJECTSHORT"])+
							choose([", and I start thinking that she'd make an easy first meal.",". After a moment of hesitation, I decide its time for my first meal."," looking like the perfect meal to sate my appetite."])
						])
					}
					Entrys[0] += choose([" I walk up, and"," I walk up, and clumsily"," Fingers trembling, I walk up and"," I nervously approach and"," Timidly, I walk up and"," I try acting casual as I approach her. She starts talking, but I"])+
					choose([" fumble trying to grab her. She"," grab her. I almost succeed until she"," try grabbing her. I almost succeed until she"," grab her by the waist. I nearly have her until she"," reach out for her. I nearly grab her until she"])+
					//choose([" She"])+
					choose([""," swiftly"," easily"," deftly"])+
					choose([" pulls away, and starts running."," shoves me down, and vaults over me. She runs away quickly."," shoves me away and turns to run."," twists out of my grip, and dashes away."," slips out of my grip with a flourish. I try grabbing her again, but she somersaults between my legs and starts to run!"])
				
					Entrys[0] += choose([" I chase after her desperately", " I scramble to chase after her"])+
					choose([", but she easily outmaneuvers me whenever I get close. I eventually fall to my knees panting.",", but she's too fast to catch. As my stamina gives out, I drop to my knees.",", but eventually stumble to my knees.",", but my feet slip against the GROUND. Any chance of catching her fades as I fall onto my knees."])+
					choose([" She looks back and bites her lip. Getting closer, she"," She stops to watch. When I don't resume chasing her, she starts inching closer and"," She looks back, and frowns when she sees me give up. She gets closer and"])
					
					if(s[12] == "confession" || s[12] == "both"){
						Entrys[0] += 
							choose([" asks how many girls I've eaten before."," asks why I'm such a bad hunter."," asks if I've ever eaten someone before."," asks if she's the first girl I've ever tried to eat."])+
							choose([" My cheeks burn as I admit she was almost my first."," I awkwardly explain that she was going to be my first."," I look away while confessing I haven't caught anyone yet."," I look away as I confess I've never eaten anyone yet."," I sigh, and confess this was my first try at it."])
					}
					if(s[12] == "both"){
						Entrys[0] += choose([" She"," She pauses for a moment, then leans over and"," She smiles, and"," While fidgeting with her ear, she "," Under her breath, she mutters about always wanting to be a first meal. Staring at me, she"])//" She whispers to herself about always wanting to be someones first bunny. Locking eyes with me, she",
					}
					if(s[12] == "promise" || s[12] == "both"){ 
						Entrys[0] += 
							choose([" nervously asks if I'll "," asks if I'll "," tells me to promise to"," says I can have her. Her only request is to"])+
							choose([" be gentle eating her."," not bite."," try being gentle when eating her."," eat slowly."," enjoy her properly."])+
							choose([" Her words catch me off guard, and I mumble before promising not to hurt her."," I'm completely dumbfounded! It takes a few moments, but after regaining my composure, I promise not to hurt her."," I'm taken aback, and stutter as I promise not to hurt her."," Her expression softens when I promise not to hurt her."])
					}
					if(s[12] == "neither"){//OFFER PAWS/HEAD
						Entrys[0] += choose([" wordlessly offers me her hands."," silently holds her hands out. I ask if she's sure, and she nods."," nervously presents her hands towards me."])
					}else if(s[12] == "confession"){
						Entrys[0] += 
							choose([" She laughs, and says it was pretty obvious."," She giggles, and says it was a good try."," She smirks as she walks up and pats my head."," She walks up and runs her fingers through my hair."])+
							choose([" I try apologizing, but stop when she"," I say I'm sorry, and she pulls me into a hug. After a moment she pulls away, and"," I try apologizing, but get interupted by my vocal stomach. She cocks her eyebrow, and casually"])+
							choose([" offers me her hands."," holds her hands out.","  presents her hands towards me."])+
							choose(["",""," I ask if she's sure, and she nods."," I thank her until she's embarrassed and tells me to hurry."])
					}else{
						Entrys[0] += 
							choose([" She"," She says thanks, and"," She giggles, and"," She timidly"," She blushes as she"," She takes a step back as if to leave, but then kneels down. She trembles as she looks up and "])+
							choose([" offers me her hands."," holds her hands out.","  presents her hands towards me."])+
							choose(["",""," I ask if she's sure, and she nods."])
					}
					Entrys[0] += choose([" I thank her before swallowing them."," I give them a kiss before I start swallowing."," I open my mouth, and she roughly shoves them inside."])
					Entrys[0] += choose([" She ducks her head, and I keep gulping her down."," She kisses my nose before ducking inside."," She kisses my nose before I gulp down more of her."," She closes her eyes before I gulp down more of her."])
					if(unit(s[2]).butt == 2){
						Entrys[0] += 
							choose([" Her shoulders and belly easily slide down my throat, but I'm stopped at her "+DescWord(unit(100),"butt",100)," Her journey ends when I reach her "+DescWord(unit(100),"butt",100)," My progress halts when I reach her "+DescWord(unit(100),"butt",100)])+
							choose(["butt.","behind.","rear.","hips."])+
							choose([" She squirms, but I can't get her any deeper."," She tries pulling herself in deeper, but her thighs are still stuck outside my mouth."," She tries wiggling in deeper, but its no use."])+
							choose([
								" I lift her legs above my head and lean back. The new angle along with gravity suddenly sends her straight into my belly.",
								" At her direction, I try massaging my jaw. It suddenly makes a pop, and she easily continues into my belly.",
								" I give up trying to gulp more of her down, and take the time to enjoy her flavor. She shudders when my tongue slips between her legs. I explore deeper, and she starts to moan. She directs me where to lick, and gasps when I find the right pace. She soon cries out as she gushes into my mouth. Her juices are just enough to squeeze her hips down my throat, and she glides into my belly." 
							])
					}else if(unit(s[2]).bust == -1 || unit(s[2]).butt == -1){
						Entrys[0] +=
							choose([" Her body easily slides down my throat, but she shouts for me to slow down."," I quickly reach her "+DescWord(unit(100),"belly_noun",100)+", but then hear her shout to slow down."," Her "+DescWord(unit(100),"belly",100)+"belly easily slides down my throat. I almost gulp down the rest of her, but she shouts for me to take my time. She reminds me that she only gets to do this once, so I need to make the most of it."])+
							choose([" I hold her legs, and start exploring with my tongue. She yelps when I get between her thighs."," She spread her legs to halt any progress, and my tongue naturally explores between them."," As her fluffy tail brushes against my nose, my tongue, brushes against her slit."])+
							choose([" Her breathing quickens"," She moans"," Her hips buck"])+
							choose([" as I plunge it inside her."," as I tease her little nub until its firm."," as I lick along her folds."])+
							choose([" She whimpers as I start stirring her up."," She tries telling me to stop, but that only drives me to pleasure her more."," She flails her legs above me as I lap up her juices."," She begs me to get deeper, and I thrust my tongue as far as it can reach."," She cries out in bliss as I start pumping my tongue into her."])+
							choose([" Her body quivers"," Her body shudders"," Her voice stifles"," Her toes curl"])+
							choose([" when she cums"," when she gushes into my mouth"," when she reaches her limit"])+
							choose([", and I lean back to swallow her down.",", and her juices slicken my throat. She yelps as she suddenly plummets the rest of the way.",", and warm juices flood my mouth. I reflexively swallow, and we're both surprised when she splashes into my belly."])+
							choose(["",choose([" She asks how she tasted, and I tell her she was amazing. She's says she's overjoyed, and starts masturbating as she digests. She screams out loudly before going completely silent. I hope she was able to finish in time."," While she digests, she thanks me for the happy ending."," We share a few words as she digests."," I hear her moan loudly as she digests."," I hear her cry out in bliss as she digests.","Once inside she starts fingering herself, and another climax wracks her body before she's digested."])])
					}else if(s[12] == "confession" || s[12] == "both"){
						Entrys[0] +=
							choose([" I take the time to enjoy her as she slowly slides down my throat."," My tongue explores her body as it slides into my belly."," She wiggles and squirms as I taste her body. Her toes curl as they go down."])+
							choose([" She congratulates me on my first meal"," She splashes around as she applauds me for eating my first meal"," She asks how my first meal was, and I tell her she was delicious. She giggles"])+
							choose([", and we spend her remaining time making idle chitchat.",", and spends her remaining time talking about all her sisters who were eaten before her.",", and thanks me for not biting."])
							choose(["",choose(["I frown when she suddenly starts to scream. Her body thrashes around"," She moans loudly"," She cries out in bliss"," She gives me one last goodbye"," We say our farewells"," She suddenly remarks that her body feels really tender, then starts moaning"])+choose([" as she digests."," as she's broken down."," as she's turned to mush."])+choose(["","",""," I call out to her and get no reply, she's just a bunch of mushy nourishment now."," I shake my belly, and feel it slosh around. She's been completely broken down."," I poke my belly, and don't feel any resistance. She completely digested!"])])
					}else{
						Entrys[0] += 
							choose([" I take the time to enjoy her as she slowly slides down my throat."," My tongue explores her body as it slides down my throat."," She wiggles and squirms as I taste her body. Her toes curl as I swallow them down."])+
							choose([" I'm almost thrown off balance as she adjusts inside me. Once she's upright we spend her remaining moments making idle chitchat."," Once she gets comfortable inside me, we talk about other family she had who also got eaten."," She gets comfortable and explains that she's always had an urge to get eaten. I'm confused, but I listen as she spends her remaining time talking."])+
							choose(["",choose([" My stomach cramps up"," My stomach starts to convulse"," Gurgling noises come from my stomach"])+choose([" as she digests."," as she's broken down."," as she's turned to mush."])+choose(["","",""," I call out to her and get no reply. She's just a bunch of mushy nourishment now."," I shake my belly, and feel it slosh around. She's been completely broken down."," I poke my belly, and don't feel any resistance. She completely digested!"])])
					}
					
				}
				//------
			}
		}else if(s[1]==0 && s[2] >=99 && map[party.y][party.x].hostile){
		//TODO:       _H F H
		// HERO FOOD HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("She's too big for me to eat now, I need to find a way to increase my appetite...")
			}else if(s[4] == 0){//FAILED
					if(unit(s[2]).flying){
						if(unit(s[2]).Funny){
							Entrys.push("My poor stomach grumbles as SUB flies above me. She sticks her tongue out to mock me.")
							Entrys.push("I leap at SUB, but she's too high up. She laughs at me from a safe distance")
							Entrys.push("I try catching SUB as she flies by, but she's just too quick. She shakes her tasty tush at me teasingly in the air.")
							Entrys.push("I grab SUB, but she deftly slips out of my grip. She quickly kisses my forehead before flapping back to safety.")
							Entrys.push("I grab SUB, but she bites down on my hand. I let go instantly, and she flys away. She laughs, and says I taste horrible.")
							Entrys.push("I grab SUB, but she easily slips out and escapes. She shakes her tush at me when shes safely in the air.")
						}else{
							Entrys.push("My poor stomach grumbles as SUB flies above me.")
							Entrys.push("I leap at SUB, but she's too high up.")
							Entrys.push("I try catching SUB as she flies by, but she's just too quick!")
							Entrys.push("I grab SUB, but she deftly slips out of my grip.")
							Entrys.push("I grab SUB, but she bites down on my hand. I let go instantly, and she flys away.")
							Entrys.push("I grab SUB, but she easily slips out and escapes. "+choose(["","","This sucks!","My poor stomach grumbles unsatisfied.","I drool as I watch her escape.","I kick at the dirt, as she avoids becoming my dinner.","I start to wonder about giving up and becoming a vegetarian. At least broccoli wont fly away from me..."]) )
						}
					}else if(unit(s[2]).swimming){
						if(unit(s[2]).Funny){
							Entrys.push("My poor stomach grumbles as SUB swims away safely. She sticks her tongue out to mock me.")
							Entrys.push("I leap at SUB, but she's too quick and I only grab at the water. She laughs at me from a safe distance.")
							Entrys.push("I try catching SUB as she swims by, but she's just too quick. She shakes her tasty tush at me underwater teasingly.")
						}else{
							Entrys.push("My poor stomach grumbles as SUB swims away safely.")
							Entrys.push("I leap at SUB, but she's too quick and I only grab at the water.")
							Entrys.push("I try catching SUB as she swims by, but she's just too quick.")
						}
					}else {
						Entrys.push("I try to eat SUB, but she fights back and wiggles out of my grasp.")
						Entrys.push("I try to eat SUB, but she leaps away before I can get close enough.")
					}
			}else if(s[4] == 1){//ASLEEP
				Entrys.push("I grab SUB while she's still sleeping, and swallow her down!")
			}else if(s[4] == 2){//UNWILLING
				if(unit(s[2]).willing){// accepts getting eaten
					if(unit(s[2]).Tags[0] == "Catgirl"){
						Entrys.push("CSUB swipes a claw at me as I shove her feet inside my mouth! She hisses and struggles until I get past her hips. Once she realizes she can't escape she shoves a paw down my throat and starts to finger herself. I hear her moan as I finish swallowing her down, and she cums shortly before digesting.")
					}
				}
				if(unit(s[2]).Tags[0] == "Catgirl"){
					Entrys.push("CSUB swipes a claw at me as I shove her feet inside my mouth! She hisses and struggles the whole way down!")
					if(unit(s[2]).CPun == 0){
						Entrys.push("I lift SUB above my head by the scruff of her neck. She nervously curls up before I casually swallow her down!")
					}
				}
				if(unit(s[2]).Tags[0] == "Froggirl"){
					Entrys.push("I try enjoying SUB's flavor as I eat her, but she's too slick and slides right down my throat!")
					Entrys.push("I planned on getting a good taste of SUB, but her slick body just slides straight into my belly!")
				}  
				if(AnyUnit != null && map[party.y][party.x].units.length == 1){
					if(AnyUnit.Tags[0] == unit(s[2]).Tags[0]){
						Entrys.push(choose([
							"I gulp down SUB. My ANY rests her head on my belly as her kin digests.",
							"I gulp down SUB. My ANY rests a hand on my belly as I digest her kin.",
							"I gulp down SUB. My ANY rubs my belly as I digest her kin.",
							"I gulp down SUB. My ANY puts her ear to my belly and listens to her kin digest!"
						]))
						if(AnyUnit.willing){
							Entrys.push("I gulp down SUB. My ANY asks if I find SUBRACELONGs tasty. She blushes when I nod.")
							Entrys.push("I gulp down SUB. My ANY asks its going to be her turn...") 
							Entrys.push("I gulp down SUB. My ANY looks at my belly enviously as I digest her kin.")
						}else{
							Entrys.push("I gulp down SUB. My ANY asks if I find SUBRACELONGs tasty. She looks nervous when I nod.")
							Entrys.push("I gulp down SUB. My ANY nervously looks away as I digest her kin.") 
							Entrys.push("I gulp down SUB. My ANY looks at my belly nervously as I digest her kin.")
						}
					}
					Entrys.push(choose([
						"I gulp down SUB. My ANY gives me a thumbs up.",
						"I gulp down SUB. My ANY rubs my belly as I digest my meal.",
						"I gulp down SUB. My ANY gives me a high five!"
					]))
				}
				if(PositiveUnit != null && map[party.y][party.x].units.length == 1){
					Entrys.push(choose([
						"My POS helps hold SUB still as I swallow her down.",
						"My POS grabs SUB and holds her still as I gobble the SUBRACE down.",
						"My POS pushes SUB towards me and I gobble her down."
					]))
				}
				if(NegativeUnit != null && map[party.y][party.x].units.length == 1){
					Entrys.push(choose([
						"I gulp down SUB. My NEG awkwardly gives me a thumbs up.",
						"I gulp down SUB. My NEG looks away as I digest my meal.",
						"I gulp down SUB. My NEG puts a hand on my belly, she blushes as she feels the SUBRACELONG digest!",
						"I gulp down SUB. My NEG tries giving me a high five, but misses my hand. She blushes as she looks down at her feet, and walks away from the embarrassing situation."
					]))
				}
				if(FunnyUnit != null && map[party.y][party.x].units.length == 1){
					Entrys.push(choose([
						"I gulp down SUB. My FUN gives my butt a squeeze, and teases me about getting fat.",
						"I gulp down SUB. My FUN pokes my belly as I digest my meal.",
						"I gulp down SUB. My FUN puts a hand on my belly, she giggles as she feels the SUBRACELONG digest!",
						"I gulp down SUB. My FUN tries giving me a high five, but misses my hand. She laughs as she just pats my belly instead."
					]))
				}
				if(SluttyUnit != null && map[party.y][party.x].units.length == 1){
					Entrys.push(choose([
						"I gulp down SUB. My SLU gives my butt a squeeze while teasing me about getting fat.",
						"I gulp down SUB. My SLU frots against my belly as I digest my meal.",
						"I gulp down SUB. My SLU puts an ear on my belly. She touches herself as she hears the SUBRACELONG digest!",
						"I gulp down SUB. My SLU gives my butt a squeeze while asking if I need some help burning off the extra weight."
					]))
					if(SluttyUnit.legs){
						if(unit(s[2]).willing){
							Entrys.push(choose([ 
							"I gulp down SUB. My SLU grinds against my belly, and surprising the SUBRACELONG grinds back until she digests!",
							"I start swallowing SUB, and my SLU runs up to start fingering her. CSUBSHORT shudders when she cums, and I swallow her down."
							]))
						}else{
							Entrys.push(choose([
							"I gulp down SUB. My SLU grinds against my belly as it digests the SUBRACELONG.",
							"I start swallowing SUB, and my SLU runs up to start fingering her. She forces the girl to cum before I swallow her down."
							]))
						}
					}
				}
				if(HungryUnit != null && map[party.y][party.x].units.length == 1){
					Entrys.push(choose([
						"I gulp down SUB. My HUN gives my belly a squeeze, and teases me about getting fat.",
						"I gulp down SUB. My HUN slowly rubs my belly as I digest my meal.",
						"I gulp down SUB. My HUN presses an ear to my belly, she drools as she hears the SUBRACELONG digest!",
						"I gulp down SUB. My HUN puts an ear on my belly, she giggles as she hears the SUBRACELONG digest!",
						"I gulp down SUB. My HUN says she's hungry for a SUBRACELONG too."
					]))
				}
				if(WillingUnit != null && map[party.y][party.x].units.length == 1){
					Entrys.push(choose([
						"I gulp down SUB. My WIL slowly rubs my belly as I digest my meal.",
						"I gulp down SUB. My WIL puts an ear on my belly as I digest my meal.",
						"I gulp down SUB. My WIL puts a hand on my belly, she blushes as she feels the SUBRACELONG digest.",
						"I gulp down SUB. My WIL puts an ear on my belly. She looks almost envious of the girl!",
						"I gulp down SUB. My WIL slowly rubs my belly as I digest my meal. She asks when I'll have room for her."
					]))
				}
				//Entrys.push("I gulp down SUB, I feel her struggle inside me until she passes out!")
				//Entrys.push("I swiftly grab hold of SUB, and before she could struggle, I gulp her down. I feel her struggle inside me for a while before she passes out.")
				Entrys.push(
					choose(["I ","I ","I ","I ","I ","Licking my lips, I decide its time to eat. I ","I swiftly ","I quickly ","I sense an opportunity to fill my belly. I ",(choose(["My stomach growls loudly","My stomach makes a deep rumble","My empty stomach gurgles"])+choose([".",", demanding to be sated.",", begging to be fed!"," telling me its time to eat.",", desperate for a meal!",", hungry for the treat in front of me.",", eager for the feminine meal fighting me."])+choose([" I eagerly "," I quickly "," I swiftly "," I "," I "," I "])) ])+
					choose(["grab SUB,","grab SUB,","grab SUB,","grab SUB,","reach out at SUB. I pull her closer,","lurch forward at SUB. I grab her by the waist with both hands,","grab hold of SUB,","lift SUB into the air over my hungry maw,","lift SUB above my hungry maw,"])+
					choose([" and"," and",choose([" and hastily"," and before she realizes whats happening, I"," and as she struggles, I"," and before she can struggle, I"," and before she has time to react, I"," and she weakly slaps at me. She struggles while I"," and as she weakly struggles in my grip, I"," and as she begs for help, I"," and she screams in terror as I"," and her eyes grow wide as I"," and she begs for mercy as I"])])+
					choose([" gobble her up."," swallow her down."," swallow her down."," gaze at her sexy body one last time before swallowing it down."," get one last look at her cute face before it, and the rest of her, slide down my throat."," get one last eyeful of her cute form before swallowing it down."," give her beautiful body one last look before swallowing it down."," swallow her down without even taking the time to get a proper taste."," gulp her down!"," start swallowing her down. I savor her unique flavor until the last of her slides down my throat."," start swallowing her down. My tongue explores the SUBRACELONG's body as I devour her whole."," gobble her down."," get my mouth around her shoulders. She's delicious, and I take my time with the rest of her."," get her shoulders into my mouth. A few big swallows take her entirely down my throat."," swallow her halfway down. Her squirming prevents me from finishing the job until my curious tongue makes a distraction long enough to gulp down the rest of her."])+
					choose(["",
						choose([" I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle inside me for a while"," I feel her thrash around inside me"," She thrashes about for a while"," I feel her weakly pound against my stomach walls"," She makes muffled cries for help"," She begs for me to let her out"," She pushes hard against the sides of my stomach"," I feel her spin to get her head above my digestive juices and struggle to breath the putrid fumes"," Her fists pound against my belly"," Her hands make impressions against my belly"])+
						choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until my stomach acids melt her down."," until I start churning her into mush."," until I burp out the last of her air."])
						//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
					])
				)
				if(unit(0).CPun == 0 && unit(s[2]).CPun == 0 && unit(s[2]).legs && unit(s[2]).arms && map[party.y][party.x].units.length == 1){
					Entry = ""
					s["kiss"] = choose(["none","kiss","kissback"])
					s["cum"] = unit(s[2]).willing ? choose(["none","breasts","belly","crotch","digestion"]) : choose(["none","none","none","none","crotch"])
					if(s["kiss"] == "none"){
						Entry += choose(["I ","I ","I ","I ","I ","Licking my lips, I decide its time to eat. I ","I swiftly ","I quickly ","I sense an opportunity to fill my belly. I ",(choose(["My stomach growls loudly","My stomach makes a deep rumble","My empty stomach gurgles"])+choose([".",", demanding to be sated.",", begging to be fed!"," telling me its time to eat.",", desperate for a meal!",", hungry for the treat in front of me.",", eager for the feminine meal fighting me."])+choose([" I eagerly "," I quickly "," I swiftly "," I "," I "," I "])) ])+
								choose([" roughly grab SUB"," pull SUB closer",""])+
								choose([" to get my lips around her.",", and swallow up to her shoulders.",", and chomp down over her head. She struggles as I work my way down to her shoulders."])
					}else{
						Entry += choose([
							"I tilt SUB's head back to",
							"I grab SUB's shoulders and",
							"I roughly grab SUB and",
							"CSUB freezes up as I approach. Once I'm near I",
							"I grab the small of SUB's back and",
							"I wrap my hand around the back of SUB's head and"
						])
						Entry += choose([ 
							" pull her closer until our lips meet.",
							" bring her lips to mine.",
							" press my lips against hers.",
							" passionately kiss her.",
							" pull her into a kiss.",
							" lock lips with her.",
							" bring her into a kiss."
						])
						Entry += choose([
							" Her breathing hitches when my tongue reaches hers.",
							" Her eyes grow wide when I slip my tongue into her mouth.",
							" Her jaw hangs slack, and I slip my tongue inside."
						]) 
						Entry += choose([""],[
							" She moans as I start sucking on her lip.",
							" I suck on her trembling lip as drool dribbles down her chin.",
							" She just leans against me as drool dribbles down her chin."
						])
						if(s["kiss"] == "kissback"){
							Entry += choose([
								" Soon she returns the kiss",
								" It doesn't take long until she's reciprocating",
								" I almost pull away, but she starts kissing back. She winks at me"
							])
							Entry += choose([
								", and our tongues squirm together.",
								", and her tongue starts playing with mine.",
								" with a smile."
							])
							Entry += choose([""],[
								" Her hands explore my body as we make out.",
								" I jump when her hands grip my behind. She giggles while giving it a squeeze.",
								" Her fingers dig into my hair and hold me against her."
							])
							if(Math.random()<.5){
								Entry += choose([
									" Once I've had my fun, I push against the back of her head while opening my mouth wide.",
									" Eventually I'm ready for more, and I open my mouth wide to engulf her head.",
									" I start kissing her sloppier and rougher. She seems into it until my mouth spreads wide to start swallowing her."
								])
								if(unit(s[2]).willing){
									Entry += choose([
										" She makes a muffled giggle as I take another swallow.",
										" She's surprised, but only spanks my hip as I keep swallowing.",
										" Instead of struggling, she only gropes my body while she still has the chance."
									])
								}else{
									Entry += choose([
										" She tries pushing away, but I only keep swallowing more.",
										" She stomps her foot when she realizes she's food, and I suppress a laugh as I keep swallowing.",
										" She's surprised, and tries pulling away as I take more of her in. She stops once she reaches the back of my throat."
									])
								}
							}else{
								Entry += choose([
									" Eventually I pull away. She starts asking why until she sees my mouth open wide.",
									" Her face scrunches in confusion as I pull away, but realization hits when she hears my stomach grumble.",
									" Strings of saliva droop between us as I pull away. She gets upset that I stopped until she sees the look in my eyes."
								])
								if(unit(s[2]).willing){
									Entry += choose([
										" She only giggles, and lets me start swallowing her.",
										" She gives me a smirk, and leans in as I start swallowing her.",
										" She rolls her eyes, but doesn't struggle when I start swallowing her."
									])
								}else{
									Entry += choose([
										" The color leaves her face before I swallow it and continue down the rest of her.",
										" She tries to escape, but I chomp down over her head.",
										" She pouts as I envelope her head and then shove her shoulders in too."
									])
								}
							}
						}else{
							Entry += choose([
								" When she doesn't return the kiss, I shrug and pull away. My stomach growls as I get ready to eat.",
								" When she doesn't kiss back, I pull away and open my mouth as wide as possible.",
								" When she tries to bite my tongue I pull away. I hold her in place as I open my mouth wide."
							])
							if(unit(s[2]).willing){
								Entry += choose([
									" She gives me a smirk when she realizes whats coming next.",
									" She lets out a sigh as she calmly lowers her head.",
									" She only pouts as she watches me lick my lips."
								])
								Entry += choose([
									" Surprisingly, she giggles as her head enters my mouth!",
									" I tilt her chin up to get one last look at her cute face before I start swallowing. ",
									" She squeezes her eyes shut just before I bring her closer. She doesn't struggle as she's taken deeper into my mouth."
								])
							}else{
								Entry += choose([
									" She freaks out when she realizes whats coming next",
									" She lets out a scream as she fights to get away",
									" She starts struggling as she watches my mouth get closer"
								])
								Entry += choose([
									", and muffled words reverberate through me as I shove her into my mouth.",
									". Her hands push against my chest, as I start swallowing.",
									", but I quickly get her into my mouth. She weakly punches me as I swallow more of her."
								])
							} 
						}  
					}
					Entry += choose([
						" Her legs curl up as I lift them into the air.",
						" I hear a muffled gasp as I lift her by the hips.",
						" I get a good grip on her hips before lifting her upside down above me.",
						" I firmly grip her behind and lift her legs into the air.",
						" My fingers sink into her haunches as I lift them above me to keep swallowing.",
						" I grope and fondle her behind before firmly grabbing it and lifing her above me."
					])
					Entry += choose([" She sinks deeper until"],[
						" Gravity sends her deeper until",
						" Her weight makes swallowing easier, and I don't stop until",
						" The new angle helps guide her down, and she sinks deeper until"
					])
					if(s["cum"] == "breasts"){
						if(unit(s[2]).bust == -1){
							Entry += choose([
								" her chest scrapes against my teeth.",
								" her chest slides past my lips.",
								" I've got her chest in my mouth."
							])
							Entry += choose([
								" She starts to moan",
								" She starts writhing around",
								" She squirms in my grip"
							])
							Entry += choose([
								" as I get a taste of her small breasts.",
								" when I lick her small breasts.",
								" while I get a good taste of her."
							])
						}else{
							Entry += choose([
								" her "+DescWord(unit(100),"breasts",100)+"breasts scrape against my teeth. She",
								" I reach her breasts. She tucks them inside, and",
								" I've got her "+DescWord(unit(100),"breasts",100)+"breasts past my lips. She"
							])
							Entry += choose([
								" starts to moan",
								" starts writhing around",
								" squirms in my grip"
							]) 
							if(unit(s[2]).bust > 0){
								Entry += choose([
									" as they fill my mouth.",
									" when I knead them with my tongue.",
									" while I mush them around."
								])
							}else{
								Entry += choose([
									" while I get a taste of them.",
									" when I lick them.",
									" while I get a good taste them."
								])
							}
							/*
							Entry += choose([""],[
								" I moan loudly as",
								" Saliva runs down my front as",
								" I let out a deep groan as"
							])//*/
							Entry += choose([
								" I keep enjoying them",
								" I keep savoring their flavor",
								" I'm overwhelmed by her amazing bust"
							])
							Entry += choose([" while she's"],[
								", and she begs for more while",
								", and she cries out in ecstasy while",
								", and she begs me not to stop while"
							])
							Entry += choose([
								" quivering on the verge of climax.",
								" fingering herself"+choose([" frantically."," desperately","."]),
								" squirming her way deeper down my throat."
							])
							Entry += choose([""],[
								" Her nipples are hard points as I take turns circling each with my tongue.",
								" Her nipples seem even more sensitive once they're hard, and my tongue teases them relentlessly.",
								" Her nipples poke out, inviting me to tease them even more."
							])
							Entry += choose([" She cums suddenly"],[
								" She shudders when she cums",
								" She bucks her hips when she cums",
								" She gushes violently when she cums"
							])
							Entry += choose(["."],[
								", and her juices spray onto the GROUND.",
								", and I'm almost thrown off balance by her kicking legs.",
								", and we both get soaked in her juices."
							])
							Entry += choose([
								" While she recovers, I get one last taste before they're gone forever. A few gulps later, and",
								" When her breathing steadies I start swallowing again. It only takes a few more gulps before",
								" A few gulps later, and"
							])
						}
					}else if(unit(s[2]).bust >= 0 || Math.random()<.5){
						 Entry += choose([
							" her "+DescWord(unit(100),"breasts",100)+"breasts scrape against my teeth.",
							" I reach her breasts. She winces as I struggle to gobble them down.",
							" I've got her "+DescWord(unit(100),"breasts",100)+"breasts past my lips."
						])
						Entry += choose([
							" I get a taste of them as they slide down. It only takes a few gulps more before",
							" My tongue slides between them as they pass. Its only another moment before",
							" I get a good taste of them before swallowing again. A few gulps later, and"
						])
					}
						//" Gravity sends her deeper until",
						//" Her weight makes swallowing easier, and I don't stop until",
						//", but I quickly get her into my mouth. She weakly punches me as I swallow more of her. I don't stop the descent until"
					if(s["cum"] == "belly"){
						Entry += choose([
							" I reach her belly.",
							" my lips encase her "+DescWord(unit(100),"belly_noun",100)+".",
							" I have her belly deep."
						]) 
						Entry += choose([
							" She starts getting more excited about getting eaten",
							" she somehow really embraces being eaten",
							" She's oddly fine becoming food"
						])
						Entry += choose([
							" once she's this close to the end. Her muffled moans grow louder even from within my stomach",
							", and I feel her heartbeat quicken. Her toes curl",
							", and her hips wiggle in my grip. I take a moment to savor her flabor"
						])
						Entry += choose([" while she's"],[
							", and she tells me to swallow while",
							", and she cries out in ecstasy while",
							", and she begs me not to stop while"
						])
						Entry += choose([
							" quivering on the verge of climax.",
							" fingering herself"+choose([" frantically."," desperately","."]),
							" squirming her way deeper down my throat."
						])
						Entry += choose([" She cums suddenly"],[
							" She shudders when she cums",
							" She bucks her hips when she cums",
							" She gushes violently when she cums"
						])
						Entry += choose(["."],[
							", and her juices go to waste as they drip onto the GROUND.",
							", and I'm almost thrown off balance by her kicking legs.",
							", and her juices are wasted on the GROUND.",
						])
						Entry += choose([
							" I let her glide in deeper until",
							" Her body glides in deeper until",
							" I tilt her upward until"
						])
						
					}
					if(s["cum"] == "crotch"){
						Entry += choose([
							" her hips reach my lips, and my tongue quickly sneaks between them.",
							" I get her "+DescWord(unit(100),"butt",100)+"butt into my mouth. She gasps when my tongue finds her slit.",
							" her hips pop into my mouth. She squirms to get comfortable, but stops when my tongue brushes against her slit."
						]) 
						if(unit(s[2]).willing == false){
							Entry += choose([
								" She shouts for me to stop at first, but quiets after realizing it's her last chance to get off.",
								" She tries to keep her legs shut, but soon relaxes so I can pleasure her.",
								" She kicks at me at first, but stops when I prod her clit."
							])
						}
						Entry += choose([
							" I lick aggressivly while groping her thighs.",
							" I plunge into her folds, and lap at her flavor.",
							" I quickly pump my tongue into her as she flails her legs wildly."
						])  
						Entry += choose([
							" I'm rewarded with her juices",
							" Her juices reach my taste buds",
							" Her juices coat my throat "
						])
						Entry += choose([" while she's"],[
							", and she tells me she's close while",
							", and she cries out in ecstasy while",
							", and she begs for more while"
						])
						Entry += choose([
							" quivering on the verge of climax.",
							" rubbing her clit"+choose([" frantically."," desperately","."]),
							" squirming her hips."
						]) 
						Entry += choose([" She cums suddenly"],[
							" She shudders when she cums",
							" She bucks her hips when she cums",
							" She gushes violently when she cums"
						])
						Entry += choose(["."],[
							", and her juices flood my mouth.",
							", and I'm almost thrown off balance by her kicking legs.",
							", and I greedily swallow her juices."
						])
						Entry += choose([
							" My slick throat can't hold her any longer, and she plops into my stomach unceremoniously.",
							" The torrent of fluids lubricate her journey, and she quickly splashes into my acids.",
							" Her legs effortlessly join the rest of her inside my stomach with a slurp."
						])
					}else if(s["cum"] == "none" || s["cum"] == "digestion"){
						Entry += choose([
							" her hips pass my lips, and my tongue quickly sneaks between them. She seems into it, but",
							" I get her "+DescWord(unit(100),"butt",100)+"butt into my mouth. She gasps when my tongue finds her slit, but",
							" her hips pop into my mouth. She squirms to get comfortable, but stops when my tongue brushes against her slit. Her hips start to gyrate, but"
						])
						Entry += choose([
							" I only get a quick taste before taking one last big gulp",
							" after getting a taste, I take a final swallow",
							" I tease her for only a moment before a final gulp"
						]) 
						Entry += choose([
							" sends her into my stomach.",
							" completes her journey.",
							" plops her into my stomach with a splash."
						]) 
					}else{
						Entry += choose([
							" she's completely inside my stomach.",
							" I've completely eaten her.",
							" her legs slide into my stomach with a splash."
						]) 
					} 
					if(s["cum"] == "digestion"){
						Entry += choose([
							" Once she's completely swallowed, she quickly takes to fingering herself.",
							" When my stomach starts to gurgle, I feel her start sloshing around. It takes me a moment to realize that she's masturbating.",
							" She immediately starts masturbating as my stomach starts to gurgle."
						])
						Entry += choose([
							" My gut tries its best to make short work of her ",
							" The sting of my acids doesn't distract her",
							" My gut wastes no time"
						])
						Entry += choose([" while she's"],[
							", and she gasps loudly while",
							", and she cries out in ecstasy while",
							", and she moans loudly while"
						])
						Entry += choose([
							" quivering on the verge of climax.",
							" thrashing around in my fluids.",
							" squirming her body."
						]) 
						Entry += choose([
							" She shudders when she cums",
							" She bucks her whole body when she cums",
							" She sinks in further when she cums"
						])
						Entry += choose([
							", and then she's quickly digested.",
							", dissolving away in short order, leaving only a stillness inside of me. A few pokes confirm that she's gone.",
							", and my greedy belly quickly digests her."
						])
					}else if(Math.random()<.5){
						if(unit(s[2]).willing){
							Entry += choose([
								" Once she's fully swallowed, she starts making idle chit chat. It feels crazy how fast she went from attacking me to having a conversation from within my stomach.",
								" I feel her get comfortable, and then she simply waits for the inevitable.",
								" Once fully inside, she apologises for attacking me. We make awkward small talk as my stomach starts to gurgle."
							])
							Entry += choose([""],[
								" My gut doesn't waste any time, and she's quickly digested.",
								" I feel my belly quickly shrink down as she's digested.",
								" My gut gets louder and louder, and I can barely hear her say goodbye. A moment later and my belly is completely still and quiet."
							])
						}else{
							Entry += choose([""],[
								" She tries asking me to let her out, but we both know its not happening.",
								" I feel her get comfortable, and then she simply waits for the inevitable.",
								" She tries clambering her way back out, but she can't find purchase within my slimey walls. After a few moments of trying, she gives up and slumps back into my acids."
							])
							Entry += choose([
								" My gut doesn't waste any time, and she's quickly digested.",
								" I feel my belly quickly shrink down as she's digested.",
								" My gut gets louder and louder, and I can barely hear her scream. A moment later and my belly is completely still and quiet."
							])
						}
					}
					Entrys.push(Entry)
					//Entrys = [Entry]
				}
				if(unit(s[2]).Clothing != "None"){// 
					if(map[party.y][party.x].units.length > 1){
						Entrys = [choose(["I swallow SUB without taking the time to undress her.","I swallow SUB with all of her clothes.","I don't take the time to undress SUB before swallowing her down.","I lift SUB above my head and open wide. Her garments prevent me from getting a proper taste as I swallow her down."])];
					
					if(unit(s[2]).Clothing == "Dress"){ 
						Entrys.push("I swallow SUB, dress and all!")
					}else if(unit(s[2]).Clothing == "Leathers"){ 
						Entrys.push("I swallow SUB without removing her armor.")
					}else if(unit(s[2]).Clothing == "Skirts"){ 
						Entrys.push("I swallow SUB, skirts and all!")
					}
					if(unit(s[2]).Tags[0] == "Drowgirl"){ 
						Entrys.push(
							choose(["I rip SUB free from her garments before I chomp down over her shoulders.","I quickly undress SUB as I gulp her down.","CSUB struggles as I disrobe her, but gives up once I start swallowing."])+
							choose([" The dark skinned"," The elven","The jet-black"])+choose([" beauty"," treat"," warrior"])
							+choose(["'s body slides into my belly with ease."," curls up once she's completely eaten.","'s sharp outlines soften as she digests."]) 
						)
					}else if(unit(s[2]).Tags[0] == "Goblingirl"){ 
						Entrys.push(
							choose(["I rip the goblin free from her garments before I lift her into my mouth.","I quickly undress the goblin as I gulp her down.","The goblin struggles as I disrobe her, but gives up when I start swallowing."])+
							" The "+unit(s[2]).Name.replace("Goblingirl","").toLowerCase()+choose([" savage"," snack"," warrior"])
							+choose(["'s body slides into my belly with ease."," curses loudly once she's completely eaten."," barely fills my stomach, and digests quickly!"]) 
						)
					}
					}else{
						Entrys = [];
						if(unit(s[2]).Clothing == "Skirts"){
							Entrys.push(
								choose(["I rip SUB's top off and hold her by the hips as I ogle her "+DescWord(unit(s[2]),"breasts",50,"beautiful ")+"breasts. She covers herself frantically","I rip SUB's top off, and latch onto one of her "+DescWord(unit(s[2]),"breasts",50,"tasty ")+"breasts. She squirms as I enjoy it's flavor","I rip SUB's top off, and grope one of her "+DescWord(unit(s[2]),"breasts",50,"trembling ")+"breasts. She moans as her nipple hardens"])+
								choose([", and doesn't realize I'm already untying the sides of her skirt. She gasps when it falls, and I lift her by the waist.",", and doesn't notice her skirt getting unbuttoned. I lift her up as it slips off.",". After I've had my fun, I lift her into the air, and bite the button off her skirt. She blushes as the garment falls."])+
								choose([" Her legs kick as I begin swallowing, but merely squirm when I taste between her "+DescWord(unit(s[2]),"butt",50,"juicy ")+" thighs. She starts to moan as my tongue sneaks around her underwear. I bury it inside her until I'm rewarded in rich juices, then slurp up her legs to join the rest of her."," I get one last look at her "+DescWord(unit(s[2]),"belly",50,"delectable ")+"body before swallowing it down."," Her shouting becomes muffled as I quickly swallow her down."])+
								choose([""],[" She digests quickly as my belly shrinks back down."," I use her discarded skirt to wipe the drool from my face as she digests."," She digests almost immediately, and a loud burp sends her panties flying through the air."])
							)
						}else if(unit(s[2]).Clothing == "Leathers"){
							
								if(unit(s[2]).bust != 0){
									Entrys.push(choose(["I rip the front of SUB's armor off.","I undo some straps, and pull the front of SUB's armor off.","I undo some straps, and the front of SUB's armor falls off."])+
									choose([" She blushes"," She gasps"," She's completely stunned"," She looks shocked"," She freezes"]))
									if(unit(s[2]).bust == -1){
										Entrys[Entrys.length-1]+= 
										choose([" as her small tits are exposed."," as I get a look at her tiny titties."," as her pert breasts are revealed to the world."])+
										choose([" My hands naturally reach for her cute nipples, and I give them a squeeze as she"," Drool runs from my mouth, and I quickly latch onto one. Her sweat only adds to the flavor as I suck. She snaps her eyes shut and"," I grab her by the sides, and slowly circle my thumbs around her nipples. They quickly harden, and she"])+
										choose([" lets out a moan."," starts to tremble."," gets even more flustered."])+
										choose([" After a moment, I yank the rest of her armor off and swallow her down."," Once I've had my fun, I pull her head closer and swallow. I completely undress her as I keep swallowing, and she quickly plops into my stomach."," While she's distracted, I unbuckle the rest of her armor. She barely has time to notice before I quickly swallow her down."])
									}else if(unit(s[2]).bust == 1){ 
										Entrys[Entrys.length-1]+= choose([" as her firm breasts meet fresh air."," as her perfect breasts are set free. My heart skips a beat as I watch them bounce with complete disregard for gravity."," as her ample breasts burst free."])+
										choose([" My hands naturally reach for the pert cuties, and I give them a squeeze. They barely yield to my fingers as she"," They hold their round shape perfectly until I grope them. As I admire her, she "," Her pert nipples point skyward, and they harden at my touch. I compliment her flawless rack, and she"])
										if(unit(s[2]).willing && Math.random()<.5){
											Entrys[Entrys.length-1]+= 
											choose([" wets her lips."," grins proudly."," pushes eagerly against my hands."])+
											choose([" We both lean forward for a kiss"," I lean forward until we're kissing"," We start making out"])+
											choose([", and she doesn't stop me from undressing her.",", and she doesn't notice me remove the remaining armor.",", and my tongue keeps her distracted until she's completely disrobed."])+
											choose([" My kisses get more and more aggressive until I'm eventually sucking her face into my mouth."," My mouth slowly widens until I'm eventually kissing her entire face."," Once she's worked up, I quickly shove her head into my mouth."," When I start pushing her face into my mouth, she doesn't resist in the slightest!"])+
											choose([" I swallow up to her breasts"," I swallow until her nipples brush against my teeth"," I lean forward until I've swallowed her breasts"])+
											choose([", and she quivers as I get a taste.",", and she tells me to keep going as I start licking them.",", and moan as their richness fills my mouth."])+
											choose([" She starts fingering herself"," She urges me on"," She moans loudly"])+
											choose([" as my tongue tastes every inch of her supple flesh.",", and my tongue keeps exploring as she pushes herself in deeper!"," as my tongue licks the sweat from the underside of her breasts."])+
											choose([" Once she cums,"," Once I've had my fun,"," She fumbles for my hand, and pulls it inside her panties. My digits tease her until she cums, then"])+
											choose([" I greedily gulp down the rest of her."," I lean back and gulp her down."," I quickly gulp her down."])
										}else{
											Entrys[Entrys.length-1]+= 
											choose([" trembles."," looks taken aback."," looks away in embarrassment."])+
											choose([" My stomach grumbles, and I quickly pull the remaining armor free as I shove her into my mouth."," She shrieks when her remaining armor is pulled free."," I try giving her a kiss but get rejected. She starts to struggle as I yank the remaining armor free.",""])+
											choose([" I swallow her breast deep"," I swallow until her nipples brush against my teeth"," I keep swallowing until I've reached her chest"])+
											choose([", and she quivers as I get a taste.",", and she curses me as I start licking them.",", and I moan as their flavor fills my mouth."])+
											choose([" She writhes"," She begs me to stop"," She fails to suppress a moan"])+
											choose([" as my tongue explores every inch of her supple flesh.",", and my tongue relentlessly teases her."," as my tongue licks the sweat from the underside of her breasts."])+
											choose([" Despite her reluctance, an orgasm soon wracks her body."," I start fingering through her panties, and they soon become soaked."," Despite still trying to escape, her hips start bucking uncontrollably."])+
											choose([" Once she cums"," After she gushes,"," She sighs in satisfaction as"])+
											choose([" I greedily gulp down the rest of her."," I lean back and gulp her down."," I quickly gulp her down."])
										}
									}else if(unit(s[2]).bust == 2){
										Entrys[Entrys.length-1]+= choose([" as her sweaty breasts meet fresh air."," as her massive breasts are revealed."," as her heavy breasts flop free."])+
										choose([" Flesh spills out between my fingers as I grope her. I don't stop kneading, and she"," My fingers sink into her supple flesh as I knead them, and she"," They're too irresistible, and I immediately get to groping. My hands don't stop digging into them even as she"])+
										choose([" lets out a moan."," bites her lip."," gets even more flustered."])+
										choose([" After a moment, I yank the remaining armor off and swallow her until the soft breasts reach my chin."," After a moment I unbuckle the rest of her armor and start swallowing. I pause only once I've reached her breasts."])+
										choose([" My hands return to her"," For one last time my hands fondle those"," Once again my hands grope those"])+ 
										choose([" massive"," hanging"," plump"])+
										choose([" globs of meat"," treats"," breasts"])+
										choose([", and tuck them into my mouth.",", and smush them past my teeth."," and have fun squishing them until their safely tucked away in my mouth."])+
										choose([" She writhes"," She starts twitching"," She starts breathing heavy"])+
										choose([" as my tongue explores deep within her bust.",", and my tongue struggles to explore every inch of her giant rack."," as my tongue licks the salty underside of her floppy breasts."])+
										choose([" The pace of my tongue quickens when I see the reaction it has on her. A finger rubbing against her panties easily finishes the job. Once she cums"," Once I've had a taste,"," She eventually gives in and starts masturbating. It doesn't take long until she's crying out in bliss as"])+
										choose([" I greedily gulp down the rest of her."," I lean back and gulp her down."," I quickly gulp her down."])
									}
								}else if(unit(s[2]).butt != 0){
									Entrys.push(choose(["I aggressivly rip SUB's armor off.","I undo some straps, and pull SUB's armor off.","I undo some straps, and the front of SUB's armor falls off."])+
										choose([" She blushes"," She gasps"," She's completely stunned"]))
									if(unit(s[2]).butt == -1){ 
										Entrys[Entrys.length-1]+=
										choose([" as her narrow hips get exposed."," as I get a look at her pert form."," as her thigh gap gets revealed to the world."])+
										choose([" My fingers explore her slim figure as I lift it above me."," I lift her up, and get a good last look at her narrow figure."," I stare at her slim figure for a moment before lifting it above me."])+
										choose([" She struggles"," Her legs kick"," She trembles"])+
										choose([", but nothings can stop me from enjoying this tiny treat. I slurp her down slowly, making sure to savor her slender legs"," as I start gulping her down. I lick between her slim thighs, and plunge my tongue into her slit. She starts to moan as I enjoy the richness of her juices. Her body gets wracked by an orgasm"," as I quickly start shoving her down. My lips barely stretch around her tiny behind"])+
										choose([" before she plops into my stomach.",". When I lean back, she easily slips down my throat.",", and she plops into my gut with a small splash."]) 
									}else if(unit(s[2]).butt == 1){
										Entrys[Entrys.length-1]+=
										choose([" as her toned abs get exposed."," as I get a look at her toned abs."," as her toned abs are revealed to the world."])+
										choose([" My hands explore them into them before lifting her."," I kneel, and just rub my face in them before I lift her overhead."," I ogle them for a moment before lifting her above me."])+
										choose([" She struggles"," Her legs kick"," She trembles"])+
										choose([", but nothings can stop me from enjoying this athletic treat. I slurp her down slowly, making sure to explore each flexing muscle"," as I start gulping her down. I give her firm butt a playful spank goodbye"," as I quickly start shoving her down. My tongue cleans the sweat off her lean body"])+
										choose([" before she plops into my stomach.",". When I lean back, the rest of her muscular form plunges down my throat.",", and she plops into my gut with a splash."])
									}else if(unit(s[2]).butt == 2){
										Entrys[Entrys.length-1]+=
										choose([" as her wide hips get exposed."," as I get a look at her squishy cheeks."," as her chunky thighs are revealed to the world."])+
										choose([" My fingers dig into them as I lift her."," My hands explore them for a few moments before I lift her overhead."," I stare at them for a moment before lifting her above me."])+
										choose([" She struggles"," Her legs kick"," She trembles"])+
										choose([", but nothings can stop me from enjoying this juicy treat. I slurp her down slowly, making sure to get a good taste"," as I start gulping her down. I give her fat butt a playful spank goodbye"," as I quickly start shoving her down. My lips stretch tightly around her behind"])+
										choose([" before she plops into my stomach.",". When I lean back, the rest of her squishes down my throat.",", and she plops into my gut with a splash."])
									}
								}else{
									Entrys.push(
										choose(["I aggressivly rip SUB out of her armor.","I undo some straps, and lift SUB out of her armor."," I undo some straps, and yank SUB free from her armor."])+
										choose([" She struggles"," Her legs kick"," She trembles"])+
										choose([", but nothings can stop me from enjoying this treat. I slurp her down slowly, making sure to get a good taste"," as I start gulping her down. I give her a playful spank goodbye"," as I quickly start gulping her down. My curious tongue gets her covered in goosebumps"])+
										choose([" before she plops into my stomach.",". When I lean back, the rest of her easily slides down my throat.",", and she plops into my gut with a splash."])
									)
								}
								Entrys[Entrys.length-1]+=choose([""],[" Without any armor, she digests instantly."," She digests rapidly as my belly shrinks back down."," She digests almost immediately, and a loud burp sends her panties flying through the air."])
						}else if(unit(s[2]).Clothing == "Dress"){ 
							if(unit(s[2]).bust != 0){ 
								if(unit(s[2]).bust == -1){
									Entrys[0] = 
									choose(["CSUB's dress hangs slack","CSUB's dress slips down","CSUB's dress slips off her shoulders"])+
									choose([", and her modest bust catch my eye."," after she swings at me."," as she tries attacking me."," to reveal her flat chest."])+
									choose([" The sight of her bare flesh gets me drooling, and I"+choose([""," greedily"])," While the wardrobe malfunction distracts her, I"+choose([""," take the opportunity to"])," My stomach grumbles, and I"+choose([""," eagerly"])])+
									choose([" chomp down over her shoulders."," start swallowing her headfirst."," pull her headfirst into my mouth."])+
									choose([" Her dress slides off completely"," I tug her dress free","Untying a few bows sends her dress to the ground"])+
									choose([", and she gasps as my teeth scrape against her small breasts.",", and she moans when my tongue tastes her small breasts. It only takes a moment for her nipples to poke out as she gets turned on, but I'm too hungry to properly pleasure her.",", and her hard nipples poke against my tongue before slipping down my throat."])+
									choose([" A few more gulps and she's completely devoured."," She kicks her legs wildly until they're pressed together to slide into my gut."," She shrieks as I lean back and finish gulping her down."])+
									choose([""],[" She digests quickly as my belly shrinks back down."," I use her discarded dress to wipe the drool from my face as she digests."," She digests almost immediately, and a loud burp sends her panties flying through the air."])
								}else if(unit(s[2]).bust == 1){ 
									Entrys[0] = 
									choose(["CSUB's pert breasts burst free from her dress","A snapped ribbon sets SUB's breasts free"," CSUB's dress slips off her large breasts"])+
									choose([", and her nipples point skyward as they bounce around."," after she swings at me."," as she tries attacking me.",", and they hold their round shape without any support."])+
									choose([" The sight of her perfect rack gets me drooling, and I"+choose([""," greedily"])," While the wardrobe malfunction distracts her, I"+choose([""," take the opportunity to"])," My stomach grumbles, and I"+choose([""," eagerly"])])+
									choose([" swallow her breast deep."," swallow until her nipples scrape past my teeth"," start swallowing. I lean forward until I've reached her breasts."])+
									choose([" She struggles as I get a taste"," She curses me as I start licking them"," She whimpers as I coat them in saliva"])+
									choose([" but starts moaning when my tongue explores their salty underside."," but starts moaning when my tongue explores every squishy inch.",", but each of her nipples harden at my teasing."])+
									choose([" I pull her free from the dress"," I tug her dress off"," Her "+DescWord(unit(s[2]),"butt",50,"trembling ")+"hips shake off the dress"])+
									choose([", and she gasps",", and she clamps her thighs shut",", and she squirms"])+
									choose([" when my hand delves within her already soaked panties."," as my fingers brush against her already dripping panties."," as I keep stimulating her sensitive nipples"," as I roughly suck on her bosom"])+
									choose([" Despite her earlier reluctance, an orgasm soon wracks her body, and"," Juices run down her twitching legs when she finishes, and"," Muffled cries of pleasure reverberate through my gut as she cums. After a final taste of her breasts,"])+
									choose([" I greedily gulp down the rest of her."," I lean back to gulp her down."," I quickly gulp her down."])
									if(unit(s[2]).willing && Math.random()<.5){
										Entrys[Entrys.length-1]+= choose([""],[" She giggles when I compliment her breasts, and thanks me for the kind words as she digests."," My belly starts digesting her when I feel an arm shoves its way up my throat. I start using my hand to push it back down, but find her fingers clutched around some fabric. The limb retracts after I grab it. She thanks me for taking her first time as I unbundle a pair of cute panties, and my stomach soon finishes its meal."," She thanks me for sexy sendoff as she digests."," I use her dress to wipe the drool from my face and chest as she starts to masturbate."+choose([" Unfortunately, my belly digests her before she gets off again."," She cries out as I feel my belly get softer. I'm not sure if she was able to finish in time, or if her reaction was just from my acids."," She's just able to outrace my stomach and cums again before she's gone."])])
									}else{
										Entrys[Entrys.length-1]+= choose([""],[" She gets angry when I compliment her breasts, and tells me she's glad I won't be able to taste them again. I only shrug as my belly digests them along with the rest of her."," She digests quickly as my belly shrinks back down."," I use her discarded dress to wipe the drool from my face as she digests."," She digests almost immediately, and a loud burp send her panties flying into the air."])
									}
								}else if(unit(s[2]).bust == 2){
									Entrys[0] = 
									choose(["CSUB's oversized breasts","CSUB's oversized breasts","CSUB's massive breasts"])+//heavy, weighty, 
									choose([" burst out from her dress"," flop out"," tear the top of her dress open"])+//heavy, weighty, 
									choose([", and jostle around freely."," after she swings at me."," as she tries attacking me.",", and jiggle freely."])+
									choose([" I quickly kneel and clamp my lips around one"," I take a knee as my lips latch onto one"," I crouch to grope them, and start sucking one of them."])+
									choose([" She moans"," She gasps"," She looks down"])+
									choose([" as I get the entire boob into my mouth, then do the same with the other"," as I pull the other to my mouth and slurp them both inside."," as I alternate between tasting each until I slurp them both up at the same time."])+
									choose([" I savor the rich flavor"," I explores them with my tongue"," I keep suckling them for just a moment"])+
									choose([" before I tilt her head forward and swallow it as well!",", then pull her head near to start swallowing her down."," before pulling free, leaving them both dripping in saliva. She looks relieved until I chomp down over her shoulders and start swallowing."])+
									choose([" The rest her doesn't compare to those juicy mammaries, and"," Her bosom was much tastier than the rest of her body, so"," Her remaining figure isn't nearly as satisfying as those heavy titties, and I don't take the time to properly enjoy it as"])+
									choose([" I gobble it down quickly."," I lean back to gulp it down quickly."," I quickly gulp until its completely in my gut."])
									choose([""],[" She digests quickly as my belly shrinks back down."," I use her discarded dress to wipe the drool from my face as she digests."," She digests almost immediately, and a loud burp sends her panties flying through the air."])
								}
							}else if(unit(s[2]).butt != 0){
								//hips - butt first
								if(unit(s[2]).butt == -1){ 
									Entrys[0] = 
										choose(["I easily lift SUB into the air, and get my head under her dress.","I easily lift SUB by the haunches, and duck under her dress.","I easily lift SUB onto my shoulders. Her dress covers me as my face is buried in her crotch."])+
										choose([" Her heels kick against my back"," Her heels dig into my back"," Her feet slap against my back frantically"])+
										choose([" until they're thrust skywards as I start swallowing her rump first."," until they're forced upwards as I swallow her hips."," until I my tongue sneaks inside her panties. She squirms as I pleasure her, and soon she soaks her panties in juices. Her legs flip upward as I start swallowing her."])+
										choose([" She awkwardly tries pulling herself free"," She begs me not to eat her"," She asks if I can let her go"])+
										choose([", but a little nipple teasing removes any thoughts of self preservation. She moans loudly even as I ",", but I simply tuck her arms in as I "," as she's folded in half so I can "])+
										choose(["gulp her down.","slurp down her narrow frame.","shove her down my throat."])+
										choose([""],[" Her toes wiggle as my lips close over them."," She barely makes a splash as she enters my belly."," She takes a deep breath just before my mouth fully closes over her."])
								}else if(unit(s[2]).butt == 1){
									Entrys[0] = 
										choose(["I lift SUB into the air, and get my head under her dress.","I lift SUB by the haunches, and duck under her dress.","I lift SUB onto my shoulders. Her dress covers me as my face is buried in her crotch."])+
										choose([" Surprisingly, she wraps her strong legs around me and starts choking!"," She suddenly starts choking me with her strong legs"," Before I can do more, I'm caught off guard when her strong legs wrap around my neck and start choking me."])+//SWEAT/SCENT
										choose([" Unable to free myself, I change tack and"," While struggling to breath, I"," After failing to get her off, I"])+//mouthfull of her cute behind
										choose([" rub my face against her covered crotch. Her legs tremble, and I start groping her firm behind as well."," find her clit with my tongue. I start teasing it through the fabric of her panties and feel her grip loosen."," slip my tongue around her panties. I bury it inside her slit, and her hips buck."])+
										choose([" She moans loudly"," Her back arches"," Juices saturate her panties"])+
										choose([" when I start rubbing her rim. Once she's worked up, I start thrusting a finger in"," as I keep pleasuring her"," when I get more aggressive. "])+
										choose([", and she's quickly brought to orgasm.",", and I almost topple over when she cums.",", and her shuddering orgasm almost sends us both to the GROUND."])+
										choose([" While she's distracted by her afterglow, I start swallowing."," Once she's completely distracted, I start swallowing."," As she compliments me for my skills, I start swallowing."])+
										choose([" She's too tired to struggle as she slips down my throat ass first"," She only sighs as she's taken ass first"," She weakly struggles as her rump slides down my throat"])+
										choose([", and I'm draped in her dress once I finish eating.",", and her toes wiggles as my lips close over them.",", and her athletic body folds up as she descends."])
								}else if(unit(s[2]).butt == 2){
									Entrys[0] = 
										choose(["I heft SUB into the air, and get my head under her dress.","I heft SUB by the haunches, and duck under her dress.","I heft SUB onto my shoulders. Her dress covers me as my face is buried in her crotch."])+
										choose([" Her heavy thighs muffle all sound as they press against my ears."," I can't hear anything with her soft thighs pressed against me."," Her juicy thighs silence the world."])+
										choose([" My tongue teases her through the fabric of her panties"," My tongue squirms around her panties and starts getting a taste"," My tongue finds her clit through her silky panties"])+
										choose([", and I nearly tumble over as she squrims wildly.",", and I'm nearly jostled over as she bucks her hips into my face.",", and I fall to my knees as she shudders from my probing."])+
										choose([" After her cums"," Once she's gushing"," While her juices gush out"])+
										choose([" I lift her legs, and work her cheeks into my mouth."," I start swallowing, and her legs lift skyward."," I use the lubrication to get my lips around her generous behind. Her legs fold up as she slowly sinks in."])+
										choose([" With her legs lifted high, my hearing returns"," The silence is lifted"," Sound returns as my ears are uncovered"])+
										choose([", and I keep swallowing as I listen to her heavy panting.",", and she moans while sinking deeper.",", and she gasps for breath as she's tucked into my throat."])+
										choose([" She struggles to contort as her legs press into her chest, but eventually drops into my belly."," She's surprising flexible despite her flab, and easily wiggles into my belly."," She giggles as she's ingested ass first."])
								}
								Entrys[0] += choose([""],[" My stomach acids quickly claim her, and she's gone in an instant."," She screams once digestion starts, and thrashes violently until she's gone."," I pull her empty dress off me as she quickly digests."])
							}else{
								Entrys.push(choose(["CSUB shrieks as her dress is ripped off, and I quickly swallow her down.","I rip SUB's luxurious dress off and enjoy her rich flavor until she's packed away in my gut.!","I rip SUB's frilly dress off and enjoy my fancy feast!","I yank SUB's dress free from her body and quickly swallow her down."]))
							}
						}
					}
				}	
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and hold her above my hard cock. She looks worried as I lower her down. When her feet touch my tip, they slip inside and I continue to lower her further. She looks in horror as shes slowly consumed by my large member. I let go after her butt slides in and watch her struggle in vain before being completely devoured by my rod. I feel her curl up inside my sack before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure... "]
					}else{
						Entrys = ["I grab SUB with one hand and hold her above my gaping mouth. She looks worried as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her further. She looks in horror as shes slowly consumed. I let go after her butt slides in and feel her struggle in vain before being completely devoured."]
					}
				}
				if(unit(s[2]).Tags[0] != "Faeriegirl" && unit(s[2]).flying){
					Entrys = []
					Entrys.push(
						choose([
							"I fling a rock up at SUB and it hits her"+
							choose(["."," as she flies by."," wing, knocking her off balance.", " forehead, stunning her."," square in the chin. She looks dazed and stops flapping her wings.", " right in the gut. She curls up from the pain."])+
							" I grab her"+
							choose([" as she falls"," as she tumbles down"," as she spirals down"," as she falls right to me"," as she tumbles down"," as she drifts down into my arms"])
							,
							"I grab SUB"+
							choose(["",""," as she swoops down"," when she flies by"," when she's right above me"," as she glides too low"])
							,
							"I catch SUB"+
							choose(["",""," as she swoops down"," when she flies by"," when she's right above me"," as she glides too low"])
							,
							"I grasp SUB"+
							choose(["",""," as she swoops down"," when she flies by"," when she's right above me"," as she glides too low"])
						])+
						
						choose([", holding her tight",", pulling her into an overly-tight embrace",", wrapping my arms around her middle",". I wrap an arm around her neck",". I squish her wings tightly against her body with both of my arms"])+
						choose([
							". My mouth envelopes the trapped girls head with ease. As her wings try flapping within the confines of my grip, I slide my mouth down to her shoulders. I continue to make my way across her tasty body until its completely inside me.",
							" before I swallow her down.",
							" as I give her cheek a goodbye kiss and swallow her down.",
							". I get one last look at her cute face before it, and the rest of her, slide down my throat. Her wings tickle as they pass my tongue.",
							". I give her cute form one last squeeze before swallowing it down.",
							". When her struggling stops, I wrap the girls wings into a burrito before swallowing her down."+choose(["",""," I wish I had brought some some hot sause!"]),
							" until she stops struggling. I then swallow her down without even getting a proper taste with her wings in the way.",
							" and quickly gobble her up without even taking the time to get a proper taste.",
							" and gulp her down as she frantically flaps her wings!",
							" and breath in her scent. I swallow her down slowly and savor her unique flavor until she's completely down my throat.",
							" before I start swallowing her down. My tongue explores SUB's body as I devour her whole.",
							", and gobble the SUBRACELONG down.",
							" before I get her into my mouth. A few big swallows take her entirely down my throat, wings and all.",
							" before swallowing her halfway down. Her flapping wings prevents me from finishing the job until my curious tongue makes a distraction long enough to gulp down the rest of her."
						])+
						choose(["",
							choose([" I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle inside me for a while"," I feel her wings thrash around inside me"," She thrashes about with her wings for a while"," I feel her weakly pound against my stomach walls with her wings"," She makes muffled cries for help"," She begs for me to let her out"," She pushes hard against the sides of my stomach with her wings"," I feel her scramble to get her head above my digestive juices and struggle to breath the putrid fumes"," Her wings pound against my belly"," Her wings make impressions against my belly"])+
							choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until my stomach acids melt her down."," until I start churning her into mush."," until I burp out the last of her air."," until she digests. I'm really starting to appreciate the taste of SUBRACE!"])
						])
					
					
					
					
					)
				}
				if(unit(s[2]).Tags[0] == "Harpygirl"){
					Entrys.push("I gulp down SUB, and cough up some feathers!")
				}
				if(unit(s[2]).Tags[0] == "Slimegirl"){
					Entrys = [];
					Entry = "";
					Entry += choose([])
					
					Entrys.push(choose(["I put my hand behind SUB's head and pull her into a kiss. She kisses back, and our tongues meet. The passionate moment ends when I push her face into my mouth","I latch onto SUB's breast","I shove SUB's head into my mouth","I pull SUB's hands into my mouth","I push SUB to the GROUND and plunge my mouth between her legs. She wiggles as I lick her translucent slit. I get my lips completely over her mound"])+
					choose([" and start swallowing her. Rich "+DescWord(unit(s[2]),"slime",100)+" flavored goo coats my throat as I swig her down."," and start sucking. Her "+DescWord(unit(s[2]),"slime",100)+" flavored goo rushes down my thoat."," and start slurping her down. My taste buds are overwhelmed by the "+DescWord(unit(s[2]),"slime",100)+" flavor flowing along my tongue."])+
					choose([" Her body shrinks as I gulp again and again."," Her body gets smaller as I keep drinking."," She squirms as she gets smaller."])+
					choose([" Soon the last of her slides down my throat."," Soon the last of her slides down my throat and I burp. A colorful bubble pops out of my mouth and floats away."," I don't stop until she's completely in my belly."," My belly digests her quickly once she's completely inside."])
					)
					Entry = "";
					Entrys.push("I slurp down SUB, she has a great "+DescWord(unit(s[2]),"slime",100)+" flavor.")
				}
				if(unit(s[2]).Name == "Wolf Queen"){
					Entrys = [" I kick the queen in the stomach, and she stumbles back before falling to a knee. Her crown flings onto the throne behind her. She looks up and admits she's been bested. I give her a kiss before swallowing her down. She doesn't struggle as she slides into my belly. I try on her crown while she digests, but it doesn't quite fit right. I leave it on the throne and turn to leave. I feel like my appetite has increased after eating her!"]
				}
				if(unit(s[2]).Name == "Harpy Queen"){
					Entrys = [" I make a running jump off the throne to reach the flying Queen, and my hands find purchase around her ankles. I pull her down, and we clash into a pile of coins and other treasure. Her crown is lost amongst the glinting gold and gems as I squeeze her talons together and swallow them down. She sighs and admits defeat once I reach her thighs. We slowly work together to avoid "+choose(["upending ","raking "])+"her feathers the wrong way. It takes awhile, but eventually her wings are fully tucked down my throat. She tells me to make the most of her before sliding into my belly. I feel her get comfortable and digest peacefully as I climb out of the pile of priceless treasures. I dust myself off, and turn to leave. I feel like my appetite has increased after eating her! "]
				}
				if(unit(s[2]).Name == "Drow Queen"){
					Entrys = ["I dodge, and her blade sinks into the table behind me. When she struggles to pull it free, I quickly tackle her. We land with a thud as her crown rolls off into the distance. I grab her wrist when she draws another dagger. I grab it and a strange emerald vial she had concealed, and send them both scattering across the marble flooring. Once she realizes its hopeless, she tries offering me all the treasures she's accumulated over her dynasty. The mention of enchanted weapons and armor unfortunately just doesn't entice me the way her royal hips do as they squirm within her dress. I lift it, and she blushes as I get a good look at what she really has to offer. I dive within the folds of fabric, and she gasps as I untie her underwear. I get under her kicking legs to start sucking on one bare cheek while my fingers rub her clit. She moans and writhes from my touch, but it's not over yet. I stretch my lips around her other cheek, and bury my tongue within her. I grab her thighs, and fold her in half to start swallowing. My tongue reaches in even further once I've swallowed her ass. Her climax is sudden, and she pants heavily while being pulled deeper within her gown. She makes another low moan as I fondle her breasts before tucking them inside my mouth. Her pointed ears tickle as they slide through my throat. My stomach acts quick, and she's completely digested before I'm even able to stand! I feel like my appetite has increased after eating her! "]
				}//enchanted weapons and armor
			}else if(s[4] == 3){//WILLING
			
			}
		}else
		//------------------------------------------------------------------------------------------
		if(s[1] >=99 && s[2] == 0 && !map[party.y][party.x].hostile){
		// FOOD HERO HOSTILE
			if(s[4] == -2){//TOO SMALL
				
			}else if(s[4] == 0){//FAILED
			
			}else if(s[4] == 1){//ASLEEP
			
			}else if(s[4] == 2){//UNWILLING
			
			}else if(s[4] == 3){//WILLING
			
			}
		}else
		//------------------------------------------------------------------------------------------
		if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && !map[party.y][party.x].hostile){
		// SAME PEACE
		//TODO:       _S   P
			if(s[4] == -2){//TOO SMALL
				Entrys.push("CSUB is too big for DOM to eat!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM bites down on SUB's neck. The girl yelps in pain and shoves the small bat off of her. I tell DOM she needs to choose smaller prey."]
				}
			}else if(unit(s[2]).willing){//WILLING
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUBSHORT flies through the air towards the open maw. She's gulped down instantly, forming a large bulge inside DOMSHORT! I press my ear to her bloated belly, and hear SUBSHORT moan as she fingers herself one last time!")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUBSHORT grabs the tongue and pulls DOMSHORT over to her. CSUBSHORT kisses the other girl and says she'd be glad to be a snack. She lets DOMSHORT swallow her down, and soon screams out in ecstasy while digesting inside the froggirl!")
					if(unit(s[2]).legs){
						Entrys.push(
							choose(["CDOM's tongue latches onto SUB's mound. The caught girl whimpers as she's tugged closer. DOMSHORT crouches as her quarry arrives.","CDOM hops over to SUB and kneels.","CDOM kneels before SUB and gets between her thighs.","CDOM shoves SUB to the ground before spreading the girls legs."])+
							choose([" CSUBSHORT's belly suddenly bloats out as the full length of DOMSHORT's tongue violently thrusts into her."," She gives SUBSHORT's slit a kiss before her tongue plunges its full length inside."," CSUBSHORT suddenly goes still as DOM's tongue uncoils into her."])+
							choose([" Her tongue continues to explore as deep as it can reach as SUBSHORT moans loudly."," CSUBSHORT squirms almost as much as the tongue inside her."," CSUBSHORT holds onto DOMSHORT's head for balance as she's relentlessly pleasured."])+
							choose([" When the girl is close DOM aggressivly recoils her sticky appendage, and pulls SUBRACE into her mouth with it!"," CDOM's face gets even more slick when her tongue makes the girl gush. My SUBRACE tries to talk, but her legs fly into the air as she's pulled into DOMSHORT's mouth."," CSUB starts swaying her hips as she's assaulted by the slimy appendage. She throws her head back as an orgasm wracks her body. When she tries to pull away, the tongue pulls back. She gulps loudly before she's pulled into the oversized frog mouth."])+
							choose(["",choose([" She giggles once she's comfortable, and gives her thanks for the happy ending."," She wiggles around inside and starts to moan again. She cums just before she digest!"," They both start to masturbate while holding hands through DOMSHORT's stretchy belly. Both reach climax just before SUBSHORT digests!"])])
						)
					}
				
				}
				if(unit(s[1]).Tags[0] == "Slimegirl" && unit(s[1]).Tags[0] != "Slimegirl"){
					/* TODO LATER
					s[12] == choose(["alone","romantic","assist",""])
					Entrys.push(
					choose(["While SUB lies on the GROUND, DOM slowly sneaks up."," I watch DOM slowly sneak up on SUB while she's resting on the GROUND"," CDOM waits for SUB to take a nap before creeping closer."])
					)
					
					//*/
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = []
					if(unit(s[1]).Slutty){
						Entrys.push("CDOM wraps her wings around SUB from behind and "+choose(["slides a hand between the legs of the other girl","slips a finger inside the other girl","starts to finger the other girl"])+". When SUB's knees get weak, the batgirl pulls them both backward until they topple over together.")
						if(unit(s[2]).Positive){
							Entrys[Entrys.length-1] += " CSUB plays with her own breasts as she keeps being fingered. As she grows close to climax she tilts her head, exposing her neck to the other girl, clearly knowing what's to follow!"
						}else if(unit(s[2]).Negative){
							Entrys[Entrys.length-1] += " CSUB only lays frozen, Blanketed in the wings of the other girl. As she's fingered relentlessly she tries to hold herself back from cumming, clearly knowing what's to follow! Despite her efforts, soon she's moaning and covered in sweat. She stops resisting and screams out as the mind-blowing climax overwhelms her body! Even knowing what's next, she still smiles in her afterglow."
						}else if(unit(s[2]).Funny || unit(s[2]).Slutty){
							Entrys[Entrys.length-1] += " CSUB twists around and sits straddling the other girl. She grabs both of her winged arms and spreads them open, pinning the batgirl to the GROUND. CDOM looks surprised at being dominated by the other girl so unexpectedly. CSUB tells the bat it's rude to play with her food. While keeping the bats hands away from her folds, she starts to grind them against the girls stomach. CDOM blushes as a wet streak forms along her belly where the SUBRACE rubs. Sweat starts dripping onto the Batgirl as SUB grows closer to climax. She's exhausted when she cums, and collapses onto the batgirl. They share a weak kiss before the SUBRACE tilts her head away."
						}else{
							Entrys[Entrys.length-1] += " Blanketed in the wings of the batgirl, SUB squirms and wiggles as her clitoris is stimulated relentlessly."
						}
						Entrys[Entrys.length-1] += "Once her prey is brought to orgasm, DOM bites down"+choose(["","hard","gently","quickly","greedily"])+" into the exposed neck and feeds until the other girl "+choose(["is drained of color.","is cold to the touch.","is lifeless."," stops moving."," lies still."])
					}
					if(unit(s[1]).Negative){
						Entrys.push("CDOM"+choose([" nervously"," timidly"," slowly",""])+" bites down on SUB’s neck to feed, but pulls back when the other girl yelps from the pain.")
						if(unit(s[2]).Positive){
							Entrys[Entrys.length-1] += " CSUB embraces the shy girl and tells her everything will be ok. She gives her a kiss goodbye before presenting her neck, head tilted to the side. This time the SUBRACELONG doesn't react as DOM bites down again to feed. She sucks the life out of her friend, and tears start to swell in her eyes. CSUB looks at peace as shes laid on the GROUND."
						}else if(unit(s[2]).Negative){
							Entrys[Entrys.length-1] += " Both girls try to apologize to the other before an awkward silence forms. Eventually SUB turns around and tilts her head to the side, and DOM bites down again. They both whimper during the feeding, one from pain, the other from emotion. When SUB slumps back, DOM falls too. She sits with SUBRACE'S head in her lap silently until I help her back up."+choose([" I give her a tight hug and rub her head."," When I wipe a drop of blood from her mouth, she smiles at me."," I pat her head and ask how the other girl tasted. She smiles and says she was delicious!","",""])
						}else if(unit(s[2]).Funny || unit(s[2]).Slutty){
							Entrys[Entrys.length-1] += " CSUB laughs at the startled girl, and tells her to be a proper predator. She gives the batgirl a smirk while presenting her neck again. This time the SUBRACELONG doesn't flinch as DOM bites down again to feed. As she sucks the life out of her friend, they share a final embrace."
						}else{
							Entrys[Entrys.length-1] += " CSUB apologises and tilts her head so she can try again. This time DOM doesn't let go when the other girl recoils, and drinks until she's full. "+choose(["She stares in disbelief at what she had just done.","She frowns as she lays the cold body on the ground.","She sits with SUBRACE'S head in her lap silently until I help her back up."])+choose([" I give her a tight hug and rub her head."," When I wipe a drop of blood from her mouth, she smiles at me."," I pat her head and ask how the other girl tasted. She smiles and says she was delicious!","",""])
						}
					}
					//generic
					Entrys.push(choose(["CDOM locks lips with SUB. The two share a passionate moment until my batgirl starts making a trail of kisses towards my SUBRACE's neck. She sucks on the base of her neck before sinking her teeth in. ","CDOM apologizes before sinking her teeth into SUB's neck. "])+choose(["The SUBRACELONG seems not to mind, and lets DOM have her fill. The weakened girl says goodbye before passing out.","CSUB gives me a wave goodbye before closing her eyes forever as the bat drinks away her heartbeat.","CSUB awkwardly kisses her predators forehead before slumping over from bloodloss."]))
					Entrys.push(choose(["CDOM apologizes before sinking her teeth into SUB's neck. Without a hint of fear,","CDOM plants a large kiss right on SUB's lips! The SUBRACE seems surprised, but soon returns the affection. The makeout session seems normal at first, but soon DOM starts kissing the other girls cheek, then her jaw, then lower to the neck. The mood shifts when DOM bites down and starts feeding. Instead of panicking,"]))
					if(unit(s[2]).Positive){
						Entrys[Entrys.length-1] += " SUB calmly pats the hungry bloodsucker on the back and tells her to have as much as she wants. She rests her head on the bats shoulder and peacefully closes her eyes."
					}else if(unit(s[2]).Negative){
						Entrys[Entrys.length-1] += " DOM only leans forward looking sad, she sighs and asks the other girl to make it quick."
					}else if(unit(s[2]).Funny){
						Entrys[Entrys.length-1] += " SUB asks the hungry bat if she tastes like "+choose([choose(["tomato","strawberry"])+" or "+choose(["apple","cherry"]),choose(["apple","tomato"])+" or "+choose(["cherry","strawberry"]),"chocolate"])+". She chuckles until passing out."
					}else if(unit(s[2]).Slutty){
						Entrys[Entrys.length-1] += "SUB moans deeply. She grinds against the Batgirls thigh until she cums against it! She fades out after her final climax."
					}else if(unit(s[2]).Hungry){
						Entrys[Entrys.length-1] += "SUB licks the batgirls neck in turn, drool running down her back. She gives DOM a hickey before slumping over."
					}else{
						Entrys[Entrys.length-1] += " SUB only pulls the hungry bloodsucker into an embrace and lets herself be drained!"
					}
					if(unit(s[1]).Positive){
						if(Math.random()<.5){
							Entrys[Entrys.length-1] += " CDOM respectfully lowers the depleted girl to the GROUND, and gives her a goodbye kiss on the forehead."
						}else{
							Entrys[Entrys.length-1] += " CDOM whispers a thank you before she lowers the SUBRACELONG's body to the ground with care."
						}
					}else if(unit(s[1]).Funny){
						if(Math.random()<.5){
							Entrys[Entrys.length-1] += " I ask the batgirl if she was tasty. She smirks at me and says she's had better."+choose(["",""," While her grin is wide, I can still tell she's upset for eating a friend."])
						}else{
							Entrys[Entrys.length-1] += " I ask the batgirl if she was tasty. She suddenly gives me a kiss, getting the girls blood in my mouth. She laughs at my reaction"+choose(["."," before telling me SUBRACE is one of her favorite flavors!",". Strangely, the coppery taste is actually quite tasty!"])
						}
					}else if(unit(s[2]).Hungry){
						Entrys[Entrys.length-1] += " CDOM feeds until the other girl is shriveled up, her belly distends out from the meal!"+choose(["",""," A small burp escapes her lips and she blushes redder than the blood on her lips."," She lips her lips, savoring every last drop of the tasty girl."])
					}
					if(unit(s[2]).Tags[0] == "Batgirl"){
						Entrys = []
						Entrys = ["CDOM sneaks up behind SUB and starts nibbling her neck."+ choose([" The other bat just tilts her head, knowing what's coming next."," The other batgirl sighs, knowing exactly what's coming next."," The other batgirl rolls her eyes, begrudgingly accepting her fate."])+choose([" She doesn't wince when DOM's teeth sink into her, and only smiles as shes consumed. "," She winces when DOM's teeth sink into her, and furrows her eyebrows throughout the feeding. "," I hold her hand as DOM's teeth sink into her neck. I put a hand on her cheek and stay with her through her final moments. "])+choose([""," She whispers goodbye to the other bloodsucker before passing out."," The two girls are both silent as one feeds on the other."," She doesn't seem too upset to be chosen as a meal."," She blows me a last goodbye kiss before slumping over."," She gives me one last smile before slumping over."])]
					}
				}
				if(Entrys.length == 0){
				Entrys.push("CSUB just let DOM eat her!")
				}
			}else{//UNWILLING
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air, hopelessly cascading toward the open maw. She's gulped down to her hips, and I hear her muffled calls for help. I approach and grab her legs. Instead of saving her, I eat her out until she cums and let DOM finish swallowing her down. I hear SUB's muffled voice thank me for the goodbye.")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! CSUB calls out to me as she's pulled towards DOM. I run over and kiss her cheek as she struggles against the sticky tongue. I tell SUB she needs to be a good meal and stop struggling. She gives me a kiss goodbye and lets DOM eat her.")
					if(unit(s[2]).legs){
						Entrys.push(
							choose(["CDOM's tongue latches onto SUB's mound. The caught girl whimpers as she's tugged closer. DOMSHORT crouches as her quarry arrives.","CDOM hops over to SUB and kneels.","CDOM kneels before SUB and gets between her thighs.","CDOM shoves SUB to the ground before spreading the girls legs."])+
							choose([" CSUBSHORT's belly suddenly bloats out as the full length of DOMSHORT's tongue violently thrusts into her."," She gives SUBSHORT's slit a kiss before her tongue plunges its full length inside."," CSUBSHORT suddenly goes still as CDOM's tongue uncoils into her."])+
							choose([" Her tongue continues to explore as deep as it can reach as SUBSHORT moans loudly."," CSUBSHORT squirms almost as much as the tongue inside her."," CSUBSHORT holds onto DOMSHORT's head for balance as she's relentlessly pleasured."])+
							choose([" When the girl is close DOM aggressivly recoils her sticky appendage, and pulls SUBRACE into her mouth with it!"," CDOM's face gets even more slick when her tongue makes the girl gush. My SUBRACE starts to talk, but stops when her legs flip into the air as she's pulled into DOMSHORT's mouth."," CSUB starts swaying her hips as she's assaulted by the slimy appendage. She throws her head back as an orgasm wracks her body. When she tries to pull away, the tongue pulls back. She gulps loudly before she's pulled into the oversized frog mouth."])+
							choose(["",choose([" CSUBSHORT starts begging to be let out, but soon just sighs and lets herself digest."," She starts to whine about getting eaten, but eventually just thanks the frog for the amazing orgasm and lets herself digest."," She starts to panick about getting eaten until I run over and calm her down. We hold hands through the stretchy frog belly until she digests."])])
						)
					}
				}
				Entrys.push("CDOM eats SUB!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = []
					if(unit(s[1]).Slutty){
						Entrys.push("CDOM wraps her wings around SUB from behind and starts to finger the other girl. When SUB's knees get weak, the batgirl pulls them both backward until they topple over together. When SUB tries to pull away, the bloodsucker strikes down on her neck, stopping her escape. CDOM keeps fingering the struggling girl as she slowly feeds. CSUB's last orgasm is weak due to the bloodloss, but she still dies with a smile on her face.")
					}
					if(unit(s[1]).Negative){
						Entrys.push("CDOM"+choose(["","",""," apologizes before she"," takes a deep breath before she "," nervously"," timidly"," slowly"])+" bites down to feed on SUB, but pulls back when the other girl yelps from the pain. I stand behind SUB and embrace her. She holds my hand with both of hers as DOM tries to feed again. CSUB squeezes my hand tightly as shes fed on until her grip goes limp. "+choose(["","","I gently lay SUB on the ground and close her eyes.","I rub DOM's head between her fluffy ears and she gives me a meek smile.","I rub DOM's head between her fluffy ears and tell her she did good."]))
					}
					//generic
					Entrys.push(choose(["CDOM apologizes before sinking her teeth into SUB's neck, she","CDOM says nothing before sinking her teeth into SUB's neck, she","CDOM hugs SUB before biting down on her neck, she","CDOM gives SUB a quick kiss before biting down on the surprised girl's neck, she"])+choose([""," quickly"," slowly"," greedily", " hungrily"])+choose([" drains the color out of the other girl. "," taps into a juicy vein, feasting on the warm blood. "," makes a bloody mess as she drinks her fill. "," sucks the life from the other girl. "," sucks down the other girls blood in time with her weakening heartbeat. "," drinks. "])+choose(["","CSUBSHORT simply closes her eyes and lets herself be taken.","CSUBSHORT passes out shortly after the feeding starts."]))
					Entrys.push("CDOM plants a large kiss right on SUB's lips! The SUBRACE seems surprised, but soon returns the affection. The makeout session seems normal at first, but soon DOM starts kissing the other girls cheek, then her jaw, then lower to the neck. The mood shifts when DOM bites down and starts feeding. CSUB winces at the pain and weakly struggles until passing out from bloodloss.")
					if(unit(s[2]).Tags[0] == "Batgirl"){
						Entrys = []
						Entrys.push("CDOM sneaks up behind SUB and starts nibbling her neck."+ choose([" The other bat nervously tilts her head, knowing what's coming next."," The other batgirl tenses up, knowing exactly what's coming next."," The other batgirl starts to tremble."])+choose([" She screams when DOM's teeth sink into her, and tears roll down her face throughout the feeding. "," She winces when DOM's teeth sink into her, and furrows her eyebrows throughout the feeding. "," I hold her hand as DOM's teeth sink into her neck. I put a hand on her cheek and stay close during her final moments. "])+choose([""," She quickly passes out."," The two girls are both silent as one feeds on the other."," She asks why the other bat girl chose her, but passes out before she can get an answer."," She blows me a last goodbye kiss before slumping over."," She gives me one last sad smile before slumping over."]))
					}
				}
				
			}
		}else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && map[party.y][party.x].hostile){
		// SAME HOSTILE
		//TODO:       _S   H
			if(s[4] == -2){//TOO SMALL
				Entrys.push("CSUB is too big for DOM to eat!")
			}else if(s[4] == 1){//ASLEEP
				Entrys.push("CDOM grabs SUB while she's still sleeping, and swallows her down!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM grabs SUB while she's still sleeping, and feeds until the other girl is drained of color!"]
				}
			}else if(unit(s[2]).willing){//WILLING
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air toward the open maw. She's gulped down instantly, forming a large bulge inside DOM! While digesting, SUB moans as she fingers herself one last time!")
					if(unit(s[1]).Slutty){
						Entrys.push("CDOM's tongue flings out at SUB! SUB grabs the tongue and pulls DOM over to her. CSUB kisses the other girl before shoving herself down the froggirls throat!")
					}
				}else if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM apologizes before sinking her teeth into SUB's neck. She quickly sucks the life from the other girl. CSUB dies with a look of peace on her face."] 
				}
				if(Entrys.length == 0){
					Entrys.push("CSUB moans as DOM eats her.")
				}
			}else{//UNWILLING
				Entrys.push("CDOM eats SUB!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM apologizes before sinking her teeth into SUB's neck, she quickly sucks the life from the other girl. CSUBSHORT dies with a look of panick on her face."] 
				}
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && !map[party.y][party.x].hostile){
		//TODO:       _D   P
		// DIFF PEACE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("CSUB is too big for DOM to eat!")
			}else if(s[4] == 0){//FAILED
				if(map[party.y][party.x].units.length > 2){
					Entrys.push("CDOM gulps down SUB's head and shoulders, but the other girls work together to push them over and pull SUB back out. It looks we'll have to fight for our dinner this time!")
				}
				if(map[party.y][party.x].units.length == 2 && s[2]==100){
						Entrys.push(String("CDOM gulps down SUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" quickly pushes her over and pulls SUB back out. It looks we'll have to fight for our dinner this time!"))
				}else if(map[party.y][party.x].units.length == 2){
						Entrys.push(String("CDOM gulps down SUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" quickly pushes her over and pulls SUB back out. It looks we'll have to fight for our dinner this time!"))
				}
				Entrys.push("CDOM tries to eat SUB, but she wiggles out of her grasp. She looks pissed at DOM's betrayal, and ready for a fight!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM almost bites down on SUB's neck, but the other girl quickly shoves her away."]
				}
			}else if(s[4] == 2){//UNWILLING
				if(unit(s[1]).Tags[0] == unit(s[2]).Tags[0]){
					Entrys.push("CDOM swallows SUB. From inside her belly, SUBSHORT calls her a traitor!")
					Entrys.push("CDOM swallows SUB. While digesting, she tries explaining that SUBRACEs aren't supposed to eat other SUBRACEs!")
					Entrys.push("CDOM swallows SUB. Before digesting, she shouts that SUBRACEs shouldn't eat other SUBRACEs.") 
				}
				if(unit(s[1]).arms && unit(s[2]).legs && unit(s[2]).MPle-unit(s[2]).CPle <= unit(0).Fuck && unit(s[1]).Tags[0] != unit(s[2]).Tags[0] && unit(s[2]).MPle>unit(s[2]).CPle){  
					Entrys.push(
						choose(["CDOM whispers into my ear about wanting to eat SUB. She smiles when I agree to help, then starts casually walking to get behind her.","CDOM points to SUB while rubbing her belly. We both grin before splitting up.","CDOM's belly growls hungrily while she stares at SUB. She nods when I tell her to wait, then slinks off to hide.","CDOM nudges my ribs while looking at SUB. We both nod, and I get ready to be a distraction."])+
						choose([" I <i>accidentally</i> stumble into SUBSHORT and knock us both over. We laugh for awhile as I lay on top of her. Eventually she tries scooching out from under me, but pauses at my touch."," While SUBSHORT lies on the ground, I approach on all fours."," I crawl towards SUBSHORT as she lays on the ground."," I guide SUBSHORT to the GROUND, and get on top of her."])+
						choose([" She giggles as I tickle her thighs, then gasps when I spread them."," She relaxes as I massage her legs, and gets excited when I pull them apart."," We get comfortable being so close, and she doesn't flinch when I stick a hand between her thighs. She winks as she spreads them for me."," She spreads her legs as she tells me how lonely she's been."," Surprisingly, she opens her legs, and asks if we can have some fun."])+
						choose([" I begin by rubbing my thumb around her clit"," I begin by kissing her "+DescWord(unit(s[2]),"belly",100)+"belly"," I begin by licking her hood"])+
						choose([", and once she's wet I bend down to start licking lower.",", then start licking lower as well. Once she's wet, I plunge my tongue inside her.",". After a bit, she grabs my head, and guides it to her slit. I start licking, then explore deeper."])+
						choose([""],[" Her back arches when I rub against her hymen."," Her back arches when I rub against her slick walls."," I find her hymen, and she starts to quiver."," I brush against her walls and feel her quiver."])+
						choose([" As SUBSHORT starts to moan, DOMSHORT sneaks up closer."," I hear DOMSHORT sneak closer as I keep SUBSHORT distracted."," CSUBSHORT is too busy moaning to hear DOMSHORT sneaking up."])+
						choose([" I feel the SUBRACE jolt and look up"," The SUBRACE's thighs suddenly press forcefully against my ears. With my face smushed, I peer up"," The SUBRACE's body goes stiff, then starts getting pulled away from me. I move closer to keep licking, and look up"," The SUBRACE's legs suddenly kick wildly, and I hear muffled cries for help. I keep pleasuring her, and look up"])+
						choose([" at DOMSHORT's mouth around the SUBSHORT's shoulders!"," at her belly sticking out of DOMSHORT's maw!"," as her "+DescWord(unit(s[2]),"breasts",100)+"breasts get tucked into DOMSHORT's mouth!"," as she starts getting eaten by DOMSHORT!"])+
						choose([" She keeps struggling even as I continue to pleasure her"," She stops struggling when I thrust my tongue deeper into her depths"," Her struggling seems to waver as I thrust my tongue deeper still"])+
						choose([", and DOMSHORT's nose soon meets mine as she continues swallowing.",", eventually her hips start to buck as more juices dribble out of her. CDOMSHORT smiles around her meal when she gets face to face with me.",". She goes slack when I return to licking her nub. CDOMSHORT's eyebrows raise at the shift in the prey's demeanor."])+
						choose([" Despite my best efforts, I can't get SUBSHORT to cum. I concede by lifting her legs and letting DOMSHORT swallow the rest of her."," My face gets soaked when the devoured girl climaxes, and she thanks me as she finishes getting swallowed."," She keeps swallowing, and our tongue meet at SUBSHORT's sex. We alternate between kissing, and pleasuring SUBSHORT until she cums. She sighs contently as she slides the rest of the way into the awaiting belly."," She gets upset when I stop her progress, but I don't let go until SUBSHORT finally cums. Her quivering legs slide against my face as they're gulped down."," Once DOMSHORT's tongue can reach, we both work together to get the devoured girl off. Our efforts are soon rewarded by gushing juices, and they help SUBSHORT slide into the awaiting belly."," It takes longer than expected, but when SUBSHORT cums, its a big one. Her body thrashes violently as DOMSHORT swallows it down."])
					)
					if(map[party.y][party.x].units.length == 1 && Math.random()<.25){
						if(unit(s[1]).Tags[0] == "Foxgirl" || unit(s[1]).Tags[0] == "Wolfgirl"){
							Entrys[Entrys.length-1] += " I lay with DOMSHORT as she rests on her belly. Her tail wags in the air as her prey digests."
						}else if(unit(s[1]).Tags[0] == "Catgirl"){
							Entrys[Entrys.length-1] += " I pet DOMSHORT's head, and she starts to purr. She rolls onto her back, and I massage her belly as it digests her prey."
						}else if(unit(s[1]).Tags[0] == "Bunnygirl"){
							Entrys[Entrys.length-1] += " I congratulate DOMSHORT on her conquest, and laugh as she fails to move with her belly so big. We lay together until she completely digests the SUBRACE."
						}else if(unit(s[1]).Tags[0] == "Froggirl"){
							Entrys[Entrys.length-1] += choose([" I watch the SUBRACE's perfect outline move around inside my froggy's belly before digesting."," I giggle as my froggy fails to stand with the extra weight, her slick feet make slimy trails across the ground. I try helping her up, but we both end up falling onto the GROUND. I spoon her as we laugh off the embarrassment and wait for her to finish digesting."])
						}
					}
				}				
				if(unit(s[1]).Tags[0] == "Froggirl"){ 
					Entrys.push(choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
					"tongue "+choose(["flings","shoots","slings","launches","darts"])+
					choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"," out seeking SUB. It moves quickly"])+
					choose([" and catches her.",
						choose([" to bind around her!"," to hook around her middle!"," and wraps around her!"," and latches on!"," to latch on!",", wrapping around her middle!"])
					])
					)
					if(unit(s[2]).Positive && Math.random()<.80){
						Entrys[Entrys.length-1]+= choose([" CSUB tries to politely ask to be released", " CSUB calmly asks me for help with a worried look on her face"])
					}else if(unit(s[2]).Negative && Math.random()<.80){
						Entrys[Entrys.length-1]+= choose([" CSUB starts to sob", " CSUB begins crying immediatly. With tears running down her face, she ask me for mercy"])
					}else if(unit(s[2]).Funny && Math.random()<.80){
						Entrys[Entrys.length-1]+= choose([" CSUB starts to giggle, but her face looks nervous. She tries breaking free", " CSUB tries to explain that she tastes horrible"])
					}else{
						Entrys[Entrys.length-1]+= choose([" CSUB frantically tries to remove the sticky appendage"," CSUB seems oblivious to the tongue and keeps walking at first. Its too late by the time she notices"," CSUB only sighs"," CSUB only closes her eyes"," CSUB becomes resigned and doesn't struggle"," She looks at DOM"," CSUB looks at me in horror"," CSUB tries asking her to stop"," CSUB is too shocked to react"])
					}
					
					if(map[party.y][party.x].tag == "Water"){
						Entrys[Entrys.length-1]+= choose([" as the tongue coils back, pulling her through the water."," as the tongue retracts, reeling her in."," as DOM pulls back sharply, and she splashes across the water towards the open maw.",", she's submerged and dragged underwater towards DOM."," Suddenly, the tongue snaps back, taking her with it."])
					}else{
						Entrys[Entrys.length-1]+= choose([", her body tenses when the tongue yanks her towards DOM."," as the tongue retracts, reeling her in."," as the tongue pulls her towards the open maw."," as the tongue coils back, pulling her closer. Suddenly it yanks harder, pulling SUBSHORT through the air.",", and soon DOM pulls back sharply, her tongue carrying its prize towards her open maw."," while DOM tugs her to the ground and drags her closer.",". Suddenly, the tongue snaps back, taking her with it."])
					}
				
					if(unit(s[1]).Positive && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOM rubs her belly to help comfort her digesting meal."
					}else if(unit(s[1]).Negative && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOM struggles to stand with the additional weight of her meal."
					}else if(unit(s[1]).Funny && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOM giggles as she pokes her shrinking belly."
					}else if(unit(s[1]).Slutty && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOM fingers herself as she feels SUB digest."
					}else if(unit(s[1]).Hungry && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOM burps loudly, removing all of SUB's remaining air!"
					}else if(unit(s[1]).willing && Math.random()<.20 && !unit(0).fled){
						Entrys[Entrys.length-1]+= " Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOM rubs her belly, she looks almost envious of the digesting girl!"
					}else{
						Entrys[Entrys.length-1]+= 
						choose([
							" She's gulped down"+choose([" instantly!"," quickly!"," easily!"," and digests quickly."," and starts to digest."," in a heartbeat!"]),
							choose([" Soon SUB is just a "," Soon SUB is nothing more than a "])+choose(["","","shapely ","large ","squirming ","writhing ","wiggling "])+choose(["meal.","lump.","bulge inside DOM."]),
							choose([" CSUB is soon swallowed up to her chest as the long tongue that caught her gets a taste. Once DOM has properly enjoyed the flavor, she gulps the last of her meal down."," She's gulped down instantly, forming a large bulge inside DOM!"," CSUB cries out before she's devoured in one massive gulp!"," CSUB is gulped down head first, she struggles inside the stretchy belly until getting digested!"," She's gulped down quickly, and digests even quicker!"," Soon only her head and shoulders are sticking out as she gets one final look of the outside world."])
						])
					}
				}
				
				if(map[party.y][party.x].units.length == 2 && s[2]==100){
						Entrys.push(String("CDOM gulps down SUB's head and shoulders! The "+String(map[party.y][party.x].units[1].Name).toLowerCase()+" looks pissed and tries to pull SUB out, but DOM just keep swallowing until she's gone. The "+String(map[party.y][party.x].units[1].Name).toLowerCase()+" says she's not going down without a fight!"))
				}else if(map[party.y][party.x].units.length == 2){
						Entrys.push(String("CDOM gulps down SUB's head and shoulders! The "+String(map[party.y][party.x].units[0].Name).toLowerCase()+" looks pissed and tries to pull SUB out, but DOM just keep swallowing until she's gone. The "+String(map[party.y][party.x].units[0].Name).toLowerCase()+" says she's not going down without a fight!"))
				}else if(map[party.y][party.x].units.length > 2){//Larger group
						Entrys.push("CDOM gulps down SUB's head and shoulders! The other girls look in horror as she keep swallowing until she's gone. I try to say something to keep the peace, but they all look ready for a fight!")
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = [choose(["CDOM apologizes before sinking her teeth into SUB's neck, she","CDOM says nothing before sinking her teeth into SUB's neck, she","CDOM hugs SUB before biting down on the girl's neck, she","CDOM gives SUB a quick kiss before biting down on the surprised girl's neck, she"])+choose([""," quickly"," slowly"," greedily", " hungrily"])+choose([" drains the color out of the other girl. "," taps into a juicy vein, feasting on the other girls warm blood. "," makes a bloody mess as she drinks her fill. "," sucks the life from the other girl. "," drinks. "])+choose(["","CSUB simply closes her eyes and lets herself be taken.","CSUB passes out shortly after the feeding starts.","CSUB dies with a look of fright on her face."])] 
				}
				if(unit(s[1]).Tags[0] == "Harpygirl" && unit(s[1]).flying){
					Entrys = [choose(["CDOM hooks her talons around SUB and flies off with her. She returns alone with a full belly.","CDOM apologizes before looping her talons around SUB and flying off with her. She returns alone with a full belly."])] 
				}
				if(Entrys.length == 0 || Math.random()<.2){
					Entrys.push("CDOM eats SUB!")
					Entrys.push("When SUB starts getting swallowed by DOM, she struggles until her waist slides inside."+choose([""],[" Once eaten, she doesn't stop begging to be let out until she digests."," CSUBSHORT immediately begins to thrash about once she's coated in acids. She doesn't stop until she's digested."," CSUBSHORT stays quite as she digests."]))
				}
				
			}else if(s[4] == 3){//WILLING
				if(unit(s[1]).arms && unit(s[2]).legs && unit(s[2]).MPle-unit(s[2]).CPle <= unit(0).Fuck && unit(s[1]).Tags[0] != unit(s[2]).Tags[0]){ 
					Entrys.push(
						choose(["CDOM whispers into my ear about wanting to eat SUB. She smiles when I agree to help, then starts casually walking to get behind her.","CDOM points to SUB while rubbing her belly. We both grin before splitting up.","CDOM's belly growls hungrily while she stares at SUB. She nods when I tell her to wait, then slinks off to hide.","CDOM nudges my ribs while looking at SUB. We both nod, and I get ready to be a distraction."])+
						choose([" I <i>accidentally</i> stumble into SUBSHORT and knock us both over. We laugh for awhile as I lay on top of her. Eventually she tries scooching out from under me, but pauses at my touch."," While SUBSHORT lies on the ground, I approach on all fours."," I crawl towards SUBSHORT as she lays on the ground."," I guide SUBSHORT to the GROUND, and get on top of her."])+
						choose([" She giggles as I tickle her thighs, then gasps when I spread them."," She relaxes as I massage her legs, and gets excited when I pull them apart."," We get comfortable being so close, and she doesn't flinch when I stick a hand between her thighs. She winks as she spreads them for me."," She spreads her legs as she tells me how lonely she's been."," Surprisingly, she opens her legs, and asks if we can have some fun."])+
						choose([" I begin by rubbing my thumb around her clit"," I begin by kissing her "+DescWord(unit(s[2]),"belly",100)+"belly"," I begin by licking her hood"])+
						choose([", and once she's wet I bend down to start licking lower.",", then start licking lower as well. Once she's wet, I plunge my tongue inside her.",". After a bit, she grabs my head, and guides it to her slit. I start licking, then explore deeper."])+
						choose([" As SUBSHORT starts to moan, DOMSHORT sneaks up closer."," I hear DOMSHORT sneak closer as I keep SUBSHORT distracted."," CSUBSHORT is too busy moaning to hear DOMSHORT sneaking up."])+
						choose([" I feel the SUBRACE jolt and look up"," The SUBRACE's thighs suddenly press forcefully against my ears. With my face smushed, I peer up"," The SUBRACE's body grows even warmer as it starts getting pulled away from me. I move closer to keep licking, and look up"," The SUBRACE's legs suddenly kick wildly, but she sounds like she's in ecstasy! I keep pleasuring her, and look up"])+
						choose([" at DOMSHORT's mouth around the SUBSHORT's shoulders!"," at her belly sticking out of DOMSHORT's maw!"," as her "+DescWord(unit(s[2]),"breasts",100)+"breasts get tucked into DOMSHORT's mouth!"," as she starts getting eaten by DOMSHORT!"])+
						choose([" She doesn't even struggle as I continue pleasuring her"," She starts furiously pawing her clit as we hold her in place"," She pinches down on her clit, and starts rolling it between her fingers. Her legs wrap around me as I keep stirring up her folds"," She grinds against my tongue as she's taken further"," She seems more aroused from getting eaten than getting eaten out! Her body writhes in pleasure"])+
						choose([", and DOMSHORT's nose soon meets mine as she continues swallowing.",", eventually her hips start to buck as more juices splurt out of her. CDOMSHORT smiles around her meal when she gets face to face with me.",", and between heavy breaths she tells us how close she is. CDOMSHORT's eyebrows raise at her prey's disposition."])+
						choose([" She quivers when she cums, and cries out to be churned into mush. I laugh as I lift her legs and help DOMSHORT swallow the rest of her."," My face gets soaked when the devoured girl climaxes, and she thanks us as she finishes getting swallowed."," She keeps swallowing, and our tongue meet at SUBSHORT's sex. We alternate between kissing, and pleasuring SUBSHORT until she cums. She sighs in satisfaction as she slides the rest of the way into the awaiting belly."," She gets upset when I stop her progress, but I don't let go until SUBSHORT finally cums. Her legs slide against my face as they're gulped down."," Once DOMSHORT's tongue can reach, we both work together to get the devoured girl off. Our efforts are soon rewarded by gushing juices, and they help SUBSHORT slide into the awaiting belly."," It takes longer than expected, but when SUBSHORT cums, its a big one. Her body thrashes violently as DOMSHORT swallows it down."])
					)
					if(map[party.y][party.x].units.length == 1 && Math.random()<.25){
						if(unit(s[1]).Positive){
							Entrys[Entrys.length-1] += " We spend the SUBRACE's remaining time making idle chitchat. We say our goodbyes when she starts digesting."
						}else if(unit(s[1]).Negative){
							Entrys[Entrys.length-1] += " My DOMRACE keeps apologizing as her belly starts to rumble. The SUBRACE tells her its ok, and the two say their goodbyes before she finishes digesting."
						}else if(unit(s[1]).Funny){
							Entrys[Entrys.length-1] += " My DOMRACE, and the SUBRACE get deep into a conversation about nothing important that only ends when she finishes digesting."
						}else if(unit(s[1]).Slutty){
							Entrys[Entrys.length-1] += " My DOMRACE fondles the swallowed girl until she reaches a second climax. The two then share lewd remarks about me until she finishes digesting."
						}else if(unit(s[1]).Hungry){
							Entrys[Entrys.length-1] += " My DOMRACE kneads her belly, making the SUBRACE digest faster. They both squirm and moan until only one remains."
						}
					}
				}
				if(party.units[s[1]].Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air toward the open maw. She's gulped down instantly, forming a large bulge inside DOM! I press my ear to her bloated belly, and hear SUB moan as she fingers herself one last time!")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB grabs the tongue and pulls DOM over to her."+
					choose([" CSUB says she'd be glad to be a snack and lets DOM swallow her down!"," CSUB gives the frog a passionate kiss before diving down her throat!"])+
					choose([""," DOM looks down at her belly in bewilderment. Her face is bright red as she feels her forceful prey digest."," I press my ear to her bloated belly, and hear SUB moan as she fingers herself one last time!"]))
				}
				
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = []
					if(unit(s[1]).Slutty){
						Entrys.push("CDOM wraps her wings around SUB from behind and starts to finger the other girl. When SUB's knees get weak, the batgirl pulls back until they topple over together. When SUB tries to pull away, the bloodsucker strikes down on her neck, stopping her escape. CDOM keeps fingering the struggling girl as she slowly feeds. CSUB's last orgasm is weak due to the bloodloss, but she still dies with a smile on her face.")
						
					}
					if(unit(s[1]).Negative){
						Entrys.push("CDOM"+choose([" nervously"," timidly"," slowly",""])+" bites down on SUB’s neck to feed, but pulls back when the other girl yelps from the pain.")
						if(unit(s[2]).Positive){
							Entrys[Entrys.length-1] += " I tell SUB that my batgirl is still learning to feed, and ask if she can help out by being an easy meal. She apologizes to us both before presenting her neck, head tilted to the side. This time the SUBRACELONG doesn't react as DOM bites down again to feed. She sucks the life out of the helpful girl. With her last words, SUB tells DOM that she's going to be a great predator someday!"
						}else if(unit(s[2]).Negative){
							Entrys[Entrys.length-1] += " Both girls try to apologize to the other before an awkward silence forms. Eventually I ask SUB to turn around to make it easier on them both. She turns and DOM bites down again. They both whimper during the feeding, one from pain, the other from emotion. When SUB slumps back, DOM falls too. She sits with SUBRACE'S head in her lap silently until I help her back up."+choose([" I give her a tight hug and rub her head."," When I wipe a drop of blood from her mouth, she smiles at me."," I pat her head and ask how the other girl tasted. She smiles and says she was delicious!","",""])
						}else if(unit(s[2]).Funny || unit(s[2]).Slutty){
							Entrys[Entrys.length-1] += " CDOM walks backwards"+choose([" nervously"," timidly"," slowly",""])+", unsure what to do next. CSUB laughs at the startled girl, and tells her to be a proper predator. She gives the batgirl a smirk while presenting her neck again. I guide the shy girl back to her willing meal. This time the SUBRACELONG doesn't flinch as DOM bites down again to feed. The drained prey says the bat fangs tickle before passing out."
						}else{
							Entrys[Entrys.length-1] += " I tell SUB that my batgirl is still learning to feed, and ask if she can help out by being an easy meal. Reluctantly, she agrees and tilts her head to the side. This time DOM doesn't let go when the other girl recoils, and drinks until she's full. "+choose(["She stares in disbelief at what she had just done.","She frowns as she lays the cold body on the ground.","She sits with SUBRACE'S head in her lap silently until I help her back up."])+choose([" I give her a tight hug and rub her head."," When I wipe a drop of blood from her mouth, she smiles at me."," I pat her head and ask how the other girl tasted. She smiles and says she was delicious!","",""])
						}
					}
					//generic
					Entrys.push("CDOM plants a large kiss right on SUB's lips! The SUBRACE seems surprised, but soon returns the affection. The makeout session seems normal at first, but soon DOM starts kissing the other girls cheek, then her jaw, then lower to the neck. The mood shifts when DOM bites down and starts feeding. CSUB winces at the pain and weakly struggles until passing out from bloodloss.")
					if(unit(s[2]).Tags[0] == "Batgirl"){
						Entrys = []
						Entrys.push("CDOM sneaks up behind SUB and starts nibbling her neck."+ choose([" The other bat nervously tilts her head, knowing what's coming next."," The other batgirl tenses up, knowing exactly what's coming next."," The other batgirl starts to tremble."])+choose([" She screams when DOM's teeth sink into her, and tears roll down her face throughout the feeding. "," She winces when DOM's teeth sink into her, and furrows her eyebrows throughout the feeding. "])+choose([""," She quickly passes out."," The two girls are both silent as one feeds on the other."," She asks why the other bat girl chose her, but passes out before she can get an answer."]))
					}
				}
				if(unit(s[1]).Tags[0] == "Harpygirl" && unit(s[1]).flying){
					Entrys = [choose(["CDOM hooks her talons around SUB. CSUBSHORT giggles as she's carried into the sky. CSUBSHORT returns alone with a full belly.","CDOM apologizes before looping her talons around SUB and flying off with her. She returns alone with a full belly."])] 
				}
				if(Entrys.length == 0){
					Entrys.push("CSUB just let DOM eat her!")
					Entrys.push("When SUB starts getting swallowed by DOM, she doesn't try stopping her. Instead she just wriggles to enjoy the descent longer."+choose([""],[" Once inside, she starts moaning as she digests!"," CSUBSHORT immediately starts to masturbate after being gulped down. She manages to orgasm just before digesting!"," CSUBSHORT immediately starts to masturbate after being gulped down, but doesn't reach climax before digesting."]))
					Entrys.push("CDOM swallows SUB. I hear SUBSHORT masturbate inside as she digests.")
				}
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		//TODO:       _D   H
		// DIFF HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("CSUB is too big for DOM to eat!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM bites down on SUB's neck, but she yelps in pain, and shoves the small bat off of her. I tell DOM she needs to choose smaller prey."]
				}
			}else if(s[4] == 0){//FAILED
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
					"tongue "+choose(["flings","shoots","slings","launches","darts"])+
					choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"," out seeking SUB. It moves quickly"])+
					choose([" but fails to catch her."," but SUB swiftly moves out of the way."," but SUB swiftly dodges it."," but isn't quite long enough to reach SUB."])
					)
				}
				if(unit(s[2]).flying && !unit(s[1]).flying){
					if(unit(s[2]).Funny){
						Entrys.push("CDOM's poor stomach grumbles as SUB flies above her. She sticks her tongue out mockingly.")
						Entrys.push("CDOM leaps at SUB, but she's too high up. CSUB laughs at her from a safe distance.")
						Entrys.push("CDOM tries catching SUB as she flies by, but SUB is just too quick. She shakes her tasty tush teasingly in the air.")
					}else{
						Entrys.push("CDOM's poor stomach grumbles as SUB flies above her.")
						Entrys.push("CDOM leaps at SUB, but she's too high up.")
						Entrys.push("CDOM tries catching SUB as she flies by, but SUB is just too quick.")
					}
				}else{
					Entrys = ["CDOM just tried to eat SUB, but she wiggled out of her grasp."]
					if(unit(s[1]).Tags[0] == "Batgirl"){
						Entrys = ["CDOM almost bites down on SUB's neck, but gets shoved away."]
					}
				}
			}else if(s[4] == 1){//ASLEEP
				Entrys.push("CDOM grabs SUB while she's still sleeping, and swallows her down!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM grabs SUB while she's still sleeping, and feeds until the other girl is drained of color!"]
				}
			}else if(s[4] == 2){//UNWILLING
				if(unit(s[1]).Tags[0] == unit(s[2]).Tags[0] && Math.random()<.2){
					Entrys.push("CDOM swallows SUB. From inside her belly, SUBSHORT calls her a traitor!")
					Entrys.push("CDOM swallows SUB. While digesting, she tries explaining that SUBRACEs aren't supposed to eat other SUBRACEs!")
					Entrys.push("CDOM swallows SUB. Before digesting, she shouts that SUBRACEs shouldn't eat other SUBRACEs.") 
				}
				if(Math.random() < .25 && s[1] < 100 && !unit(0).fled && map[party.y][party.x].units.length == 1 && unit(s[1]).arms && unit(s[1]).legs){
					Entrys.push(choose([
						"CDOM gulps down SUB. I give her a thumbs up.",
						"CDOM gulps down SUB. I give her a high five.",
						"CDOM gulps down SUB. I rub her belly as the SUBRACE digests.",
						"CDOM gulps down SUB. I hug her from behind and rub her swollen belly.",
						"I help hold SUB still as DOM swallows her down.",
						"I grab SUB and hold her still as DOM gobbles her down.",
						"I push SUB towards DOM, and she gobbles the SUBRACE down." 
					]))
					if(unit(s[1]).Positive){
						Entrys.push("CDOM gulps down SUB. She tells me she loves the taste of SUBRACEs.")
						Entrys.push("CDOM gulps down SUB. She pulls my hand to her belly as the SUBRACE digests.")
						Entrys.push("CDOM gulps down SUB. She smiles while I rub her belly.")
					}else if(unit(s[1]).Negative){
						Entrys.push("CDOM gulps down SUB. She blushes when I rub her belly.")
						Entrys.push("CDOM gulps down SUB. I rub her belly and she starts to blush. She covers her face and tells me to stop embarrassing her.")
					}else if(unit(s[1]).Funny){
						Entrys.push("CDOM gulps down SUB. She giggles as the SUBRACE struggles inside her.")
						Entrys.push("CDOM gulps down SUB. She giggles when I rub her belly.")
						Entrys.push("CDOM gulps down SUB. She turns sideways and asks if she looks pregnant.")
					}else if(unit(s[1]).Slutty){
						Entrys.push("CDOM gulps down SUB. She tells me she loves the taste of SUBRACEs.")
						Entrys.push("CDOM gulps down SUB. She winks, and asks for some help burning off the extra weight.")
						Entrys.push("CDOM gulps down SUB. She moans as the SUBRACE struggles inside her.")
						Entrys.push("CDOM gulps down SUB. She fingers herself as the SUBRACE digests.")
						Entrys.push("CDOM gulps down SUB. I try rubbing her belly, but she moves my hand lower instead.")
						Entrys.push("CDOM gulps down SUB. I try rubbing her belly, but she moves my hand to her breast instead.")
						Entrys.push("CDOM gulps down SUB. She turns sideways and wonders aloud if she'll get this big when I knock her up.") 
						Entrys.push("CDOM gulps down SUB. She pulls my hand to her belly as the SUBRACE digests.")
					}else if(unit(s[1]).Hungry){
						Entrys.push("CDOM gulps down SUB. She burps loudly.")
						Entrys.push("CDOM gulps down SUB. She winks, and asks for another. I gulp, and tell her we better start looking quickly.")
						Entrys.push("CDOM gulps down SUB. She burps as the SUBRACE struggles inside her.")
						Entrys.push("CDOM gulps down SUB. She rubs her belly as the SUBRACE digests.") 
						Entrys.push("CDOM gulps down SUB. She turns sideways and wonders aloud if she has room for another.") 
						Entrys.push("CDOM gulps down SUB. She pulls my hand to her belly as the SUBRACE digests.")
					}else if(unit(s[2]).willing){
						Entrys.push("CDOM gulps down SUB. I press my ear to her belly, and hear the SUBRACE masturbate as she digests.")
						Entrys.push("CDOM gulps down SUB. We listen together as the SUBRACE masturbates before digesting.")
						Entrys.push("CDOM gulps down SUB. She blushes when the SUBRACE starts masturbating inside her.")
						Entrys.push("CDOM gulps down SUB. I can perfectly make out the outline of the SUBRACE fingering herself as she digests.") 
						Entrys.push("CDOM gulps down SUB. She whispers to me that she can feel the SUBRACE masturbating inside her.") 
						Entrys.push("CDOM gulps down SUB. The SUBRACE didn't seem to put up much of a fight.")
					}
				}
				
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM's butt wiggles before she pounces onto SUB. She quickly swallows her down, and looks smug as SUBSHORT digests.")
					Entrys.push("CDOM hisses before she swallows SUB.")
					Entrys.push("CDOM meows loudly before she swallows SUB.")
					Entrys.push("CDOM swallows SUB. She purrs as SUBSHORT digests.")
				}
				if(unit(s[1]).Tags[0] == "Foxgirl" || unit(s[1]).Tags[0] == "Wolfgirl"){
					Entrys.push("CDOM wags her tail while swallowing SUB.")
					Entrys.push("CDOM howls loudly before she swallows SUB.")
					Entrys.push("CDOM swallows SUB then lets out a howl!")
					Entrys.push("With her hackles risen, DOM leaps at SUB! Her mouth wraps around SUBSHORT's ahoulders, and she doesn't stop until she's completely finished swallowing.")
				}
				if(unit(s[1]).Tags[0] == "Bunnygirl" && unit(s[2]).Tags[0] != "Bunnygirl"){
					Entrys.push("CDOM hops over and swallows SUB whole!")
					Entrys.push(choose(["CSUB only laughs when DOM grabs her.","CSUB smirks when DOM approaches her.","CDOM grabs SUB by the waist."])+
					choose([" CSUBSHORT starts explaining that bunnies are only food"," CSUBSHORT condescending tells DOMSHORT that bunnies only eat carrots"])+
					choose([", but she's silenced when DOMSHORT's mouth stretches around her shoulders.",". CDOMSHORT only grins before opening her mouth impossibly wide. She leaps at the SUBRACE and devours her upper half.",". CDOMSHORT doesn't listen, and shoves CSUBSHORT's head into her mouth."])+
					choose([" She struggles, but eventually gulps her down completely."," CSUBSHORT makes muffled cries for help as she's completely swallowed."," She slowly but surely swallows the cocky girl."]))
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					if(map[party.y][party.x].units.length > 1 && map[party.y][party.x].units.length > 2){
						Entrys.push(choose(["A gust of air rushes by, and suddenly SUB isn't where she was just moments before!","The crack of a whip sounds out, and suddenly SUB is absent from the fight!","CSUB suddenly vanishes!","In a flash, SUB disappears!","In the blink of an eye, SUB is suddenly nowhere to be seen!"," Without a sound, SUB is suddenly missing."])+choose([" All attention shifts to DOM as she tries concealing her"," A ways away, DOM whistles to herself as she tries hiding her"])+choose([" squirming belly."," bloated belly."," distended belly."," swollen belly."]))
						if(unit(s[1]).Positive){
							Entrys[Entrys.length-1] += " She gives everyone a thumbs up as her gut quickly shrinks."
						}else if(unit(s[1]).Negative){
							Entrys[Entrys.length-1] += " She blushes from all the attention."
						}else if(unit(s[1]).Funny){
							Entrys[Entrys.length-1] += " She burps loudly, the sound hangs in the air for a moment too long."
						}else if(unit(s[1]).Slutty){
							Entrys[Entrys.length-1] += " She gives everyone a wink while rubbing her belly."
						}else if(unit(s[1]).Positive){
							Entrys[Entrys.length-1] += " She licks her lips with a slimy flourish."
						} 
					}
					Entrys.push("CDOM swallows SUB. She ribbits loudly as she digests SUBSHORT.")
					Entrys.push("CDOM yoinks SUB through the air to gobble her up.")
					Entrys.push("CDOM croaks loudly before she swallows SUB.")
					Entrys.push("CDOM wraps her webbed fingers around SUB and lifts her into the air. CSUBSHORT squirms as she's slowly swallowed whole.")
					//LONGER ONE
					Entrys.push(choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimy ","sticky ","long ","powerful "])+
					"tongue "+choose(["flings","shoots","slings","launches","darts"])+
					choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"," out seeking SUB. It moves quickly"])+
					choose([" and catches her.",
						choose([" to bind around her!"," to hook around her middle!"," and wraps around her!"," and latches on!"," to latch on!"," to wrap around her"+DescWord(unit(s[2]),"belly",100)+choose([" belly!"," midriff!"," stomach!"," middle!"]),", looping around her "+DescWord(unit(s[2]),"belly_noun",100)+"!"])
					])
					
					)
					if(unit(s[2]).Tags[0] == "Batgirl"  && unit(s[2]).flying){
						Entrys[Entrys.length-1]+= choose([" CSUBSHORT frantically flaps as she's pulled through the air towards the open maw."," CSUBSHORT tries to fly away, but gets yanked down."," She pulls back sharply, and SUBSHORT flaps in vain as she's drawn to her doom."," Suddenly, the tongue snaps back, pulling SUBSHORT down with it."])
					}else if(map[party.y][party.x].tag == "Water"){
						Entrys[Entrys.length-1]+= choose([" It coils back, pulling SUBSHORT closer through the water."," She pulls back sharply, and SUBSHORT struggles as she's drawn through the water."," She pulls back sharply, and SUBSHORT splashes across the water towards the open maw."," CSUBSHORT plunges under and is dragged through the water towards DOMSHORT."," Suddenly, the tongue snaps back, taking SUBSHORT with it."])
					}else{
						Entrys[Entrys.length-1]+= choose([" It coils back, pulling SUBSHORT closer."," She pulls back sharply, and SUBSHORT struggles as she's drawn to her doom."," She pulls back sharply, and SUBSHORT flies through the air towards the open maw."," CSUBSHORT falls down and is dragged along the ground towards DOMSHORT."," Suddenly, the tongue snaps back, taking SUBSHORT with it."])
					}
				
					if(unit(s[2]).willing && Math.random()<.5){
						Entrys[Entrys.length-1]+= choose([" Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. While digesting, SUBSHORT moans loudly as she fingers herself one last time!"," Surprisingly, SUBSHORT cries out in bliss before she's devoured in one massive gulp!"])
					}else if(unit(s[2]).Positive && s[2] < 100 && !unit(0).fled && Math.random()<.5 && s[2] < 100){
						Entrys[Entrys.length-1]+= " Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. She tells us not to give up as she digests."
					}else if(unit(s[2]).Negative && s[2] < 100 && !unit(0).fled && Math.random()<.5 && s[2] < 100){
						Entrys[Entrys.length-1]+= " Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. She begs for me to save her as she digests."
					}else if(unit(s[2]).Funny && s[2] < 100 && !unit(0).fled && Math.random()<.5){
						Entrys[Entrys.length-1]+= " Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. She laughs and says that she's the one about to croak."+choose(["",""," She doesn't stop giggling until she digests."])
					}else if(unit(s[1]).Positive && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT rubs her belly to help comfort her digesting meal."
					}else if(unit(s[1]).Negative && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT blushes as her meal rapidly digests."
					}else if(unit(s[1]).Funny && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT giggles as she pokes her shrinking belly."
					}else if(unit(s[1]).Slutty && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT fingers herself as she feels SUBSHORT digest."
					}else if(unit(s[1]).Hungry && Math.random()<.20){
						Entrys[Entrys.length-1]+= " Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT burps loudly, removing all of SUBSHORT's remaining air!"
					}else if(unit(s[1]).willing && Math.random()<.20 && !unit(0).fled){
						Entrys[Entrys.length-1]+= " Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT rubs her belly, she looks almost envious of the digesting girl!"
					}else{
						Entrys[Entrys.length-1]+=
						choose([" She's gulped down"+choose([" instantly!"," quickly!"," and digests quickly."," and starts to digest."," in a heartbeat!"])," Soon she's just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+choose(["bulge.","bulge.","bulge inside DOMSHORT."]),
						choose([" She's soon swallowed up to her chest as the long tongue that caught her gets a taste. Once DOMSHORT has properly enjoyed the flavor of the cute breasts, she gulps the last of her meal down."," She's gulped down instantly, forming a large bulge inside DOMSHORT!"," She cries out before she's devoured in one massive gulp!"," CSUBSHORT is gulped down head first, she struggles inside the stretchy belly until digesting!"," She's gulped down quickly, and digests even quicker!"," Soon only her head and shoulders are sticking out as she gets one final look of the outside world."])
						])
					}
					//Scene 2
					if(s[5]!="Indoors"){
						if(map[party.y][party.x].tag == "Water"){
							Entrys.push(choose(["From out of the water, DOM "+ choose(["hops","hops","leaps","launches","bounds","vaults","springs"]),choose(["While peaking out of the water, DOM ribbits before ","While peaking out of the water, DOM croaks before "])+ choose(["hopping","hopping","leaping","launching","bounding","vaulting","springing"]) ]) )
						}else{
							Entrys.push(choose(["CDOM "+choose(["hops","hops","leaps","launches","bounds","vaults","springs"]),choose(["CDOM ribbits before ","CDOM croaks before ","CDOM licks her lips before "])+choose(["hopping","hopping","leaping","launching","bounding","vaulting","springing"]) ]) )
						}
						if(unit(s[2]).Tags[0] == "Batgirl"  && unit(s[2]).flying){
							Entrys[Entrys.length-1]+= choose([" right at SUB"," towards SUB"," into the air at SUB"])+
							choose([". She shoves the bat into her mouth and swallows her down before landing.",". She opens her mouth wide and gulps her down before landing.",". She opens her maw impossibly wide and swallows the bat before landing.",". She grabs the bat's ankles, and shoves them into her mouth. When she lands, the batgirl is forced down the rest of the way!"])
						}else{
							Entrys[Entrys.length-1]+= choose([" into the air above SUB"," high above SUB"," above SUB"])+
							choose([". She plummets face first, and swallows down the SUBRACELONG as she lands.",". She opens her mouth wide as she plummets, and swallows the SUBRACELONG from above.",". She lands on the SUBRACELONG mouth first, and slides over her body before swallowing.",". She lands on the SUBRACELONG mouth first, and swallows her instantly."])
						}
					
						if(unit(s[2]).willing && Math.random()<.5){
							Entrys[Entrys.length-1]+= choose([" CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. While digesting, SUBSHORT moans loudly as she fingers herself one last time!"])
						}else if(unit(s[2]).Positive && s[2] < 100 && !unit(0).fled && Math.random()<.5 && s[2] < 100){
							Entrys[Entrys.length-1]+= " CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. She tells us not to give up as she digests."
						}else if(unit(s[2]).Negative && s[2] < 100 && !unit(0).fled && Math.random()<.5 && s[2] < 100){
							Entrys[Entrys.length-1]+= " CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. She begs for me to save her as she digests."
						}else if(unit(s[2]).Funny && s[2] < 100 && !unit(0).fled && Math.random()<.5){
							Entrys[Entrys.length-1]+= " CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. She laughs and says that she's the one about to croak."+choose(["",""," She doesn't stop giggling until she digests."])
						}else if(unit(s[1]).Positive && Math.random()<.20){
							Entrys[Entrys.length-1]+= " CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT rubs her belly to help comfort her digesting meal."
						}else if(unit(s[1]).Negative && Math.random()<.20){
							Entrys[Entrys.length-1]+= " CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT blushes as her meal rapidly digests."
						}else if(unit(s[1]).Funny && Math.random()<.20){
							Entrys[Entrys.length-1]+= " CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT giggles as she pokes her shrinking belly."
						}else if(unit(s[1]).Slutty && Math.random()<.20){
							Entrys[Entrys.length-1]+= " CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT fingers herself as she feels SUBSHORT digest."
						}else if(unit(s[1]).Hungry && Math.random()<.20){
							Entrys[Entrys.length-1]+= " CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT burps loudly, removing all of SUBSHORT's remaining air!"
						}else if(unit(s[1]).willing && Math.random()<.20 && !unit(0).fled){
							Entrys[Entrys.length-1]+= " CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. CDOMSHORT rubs her belly, she looks almost envious of the digesting girl!"
						}else{
							Entrys[Entrys.length-1]+=
							choose(["",""," CDOMSHORT stands back up and starts to digest her."," CDOMSHORT stands back up, and SUBSHORT is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge inside her."])
						}
					}
				}
				if(s[2] < 100){
					if(unit(s[2]).Positive && party.units.length > 2 && !unit(0).fled){
						Entrys.push("CSUB tells us not to give up as she's devoured by DOM!")
						Entrys.push("CSUB tells us to keep fighting as she's devoured by DOM!")
						Entrys.push("CSUB gives me a salute before getting devoured by DOM!")
					}
					if(unit(s[2]).Negative && party.units.length > 2 && !unit(0).fled){
						Entrys.push("CSUB begs for us to save her as she's devoured by DOM. She's digested almost instantly!")
						Entrys.push("CSUB crys big ugly tears as she's devoured by DOM. She was eaten so fast, we had no chance to save her!")
					}
					if(unit(s[2]).Positive && party.units.length == 2 && !unit(0).fled){
						Entrys.push("CSUB tells me not to give up as she's devoured by DOM!")
						Entrys.push("CSUB tells me to keep fighting as she's devoured by DOM!") 
						Entrys.push("CSUB gives me a salute before getting devoured by DOM!")
					}
					if(unit(s[2]).Negative && party.units.length == 2 && !unit(0).fled){
						Entrys.push("CSUB begs for me to save her as she's devoured by DOM. She's digested almost instantly!")
						Entrys.push("CSUB crys big ugly tears as she's devoured by DOM.")
					}
					if(unit(s[2]).Slutty && unit(s[2]).willing && !unit(0).fled){
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUBSHORT starts to get eaten by DOMSHORT, she blows a kiss to me, and says she was hoping I'd be the one to eat her. I blow a kiss back as DOMSHORT quickly finishes eating.")
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUBSHORT starts to get eaten by DOMSHORT she begins to finger herself. She cums before DOMSHORT finishes swallowing her down!")
					}
					if(unit(s[2]).Funny && unit(s[2]).willing && !unit(0).fled){
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUBSHORT starts to get eaten by DOMSHORT, she laughs and says she can't believe she's going to get eaten by a DOMRACE of all things. She keeps giggling as DOMSHORT swallows her down.")
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUBSHORT starts to get eaten by DOMSHORT, she raises her index and middle finger at me. She maintains her peace sign as DOMSHORT swallows her down.")
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUBSHORT starts to get eaten by DOMSHORT, she flips me off and demands that I eat the fat DOMRACE that bested her. She keeps her finger raised as DOMSHORT swallows her down.")
					}
				}
				if(unit(s[2]).Clothing != "None"){ 
						Entrys = [choose(["CDOM swallows SUB without taking the time to undress her.","CDOM swallows SUB, and all of her clothes.","CDOM doesn't take the time to undress SUB before swallowing her down.","CDOM lifts SUB above her head and opens wide. The SUBRACE flails around until she's completely swallowed."])];
					
					if(unit(s[2]).Clothing == "Dress"){ 
						Entrys.push("CDOM swallows SUB, dress and all!")
					}else if(unit(s[2]).Clothing == "Leathers"){ 
						Entrys.push("CDOM swallows SUB without removing her armor.")
					}else if(unit(s[2]).Clothing == "Skirts"){ 
						Entrys.push("CDOM swallows SUB, skirts and all!")
					}
					if(unit(s[2]).Tags[0] == "Drowgirl"){ 
						Entrys.push(
							choose(["CDOM rips SUB free from her garments before she chomps down over her shoulders.","CDOM quickly undresses SUB as she gulps her down.","CSUB struggles as DOM disrobes her, but gives up once DOMSHORT starts swallowing."])+
							choose([" The dark skinned"," The elven","The jet-black"])+choose([" beauty"," treat"," warrior"])
							+choose(["'s body quickly quickly vanishes from sight."," curls up once she's completely eaten.","'s sharp outlines soften as she digests."]) 
						)
					}else if(unit(s[2]).Tags[0] == "Goblingirl"){ 
						Entrys.push(
							choose(["CDOM rips the goblin free from her garments before swallowing her.","CDOM quickly undresses the goblin before gulping her down.","The goblin struggles as DOM disrobes her, but gives up once DOMSHORT starts swallowing."])+
							" The "+unit(s[2]).Name.replace("Goblingirl","").toLowerCase()+choose([" savage"," snack"," warrior"])
							+choose(["'s body quickly vanishes from sight."," curses loudly as she's devoured."," digests quickly!"]) 
						)
					}
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = []
					if(unit(s[1]).flying){
						Entrys.push("CDOM flies down and tackles SUB to the ground. On her back, the SUBRACE screams as DOMSHORT's teeth sink into her neck and starts to feed. Soon the screaming stops and DOMSHORT leaps back into the air") 
						if(unit(s[1]).Funny){
							Entrys[Entrys.length-1] += choose([" laughing."," with a grin on her face!"," looking quite pleased with herself!"])
						}else if(unit(s[1]).Hungry){
							Entrys[Entrys.length-1] += choose([" still hungry for more!"," with blood dripping down her chin."," looking quite pleased with herself!"])
						}else{
							Entrys[Entrys.length-1] += "."
						}
						Entrys.push("CDOM swoops down to SUB and tilts the girls head back to bite her throat. CSUBSHORT's eyes grow wide as her blood is sucked down by the hungry bat. She falls backwards when DOMSHORT finishes her meal."+choose([" She uses her wings to quickly get airborne again."," She licks her lips before flapping her wings to get airborne once more."]))	
					}
					
						Entrys.push("CDOM leaps on SUB's back and bites down hard at the base of her neck to drink. CSUBSHORT falls to her knees as the color is drained from her face."+choose([""," CDOMSHORT wipes her bloody mouth and lets the depleted meal slump forward."]))
					
					if(unit(s[1]).Negative){
						Entrys.push("CDOM "+choose(["","","nervously ","quietly "])+"apologizes before sinking her teeth into SUB's neck, she looks timid even as she sucks the life force from the struggling girl.")
					}
					if(unit(s[1]).Slutty && unit(s[2]).willing){
						Entrys.push("CDOM locks lips with SUB. She then makes a trail of kisses across her jaw before sinking her teeth into SUB's neck, she fingers the girl while drinking heavily. SUB loudly climaxes before passing out from the bloodloss.")
					}
					if(unit(s[2]).Tags[0] == "Mousegirl"  && unit(s[1]).flying ){
						Entrys = ["CDOM swoops down and swallows SUB's upper body before flying back into the air. She circles from a safe height as she finishes the tiny girl."]
					}
					if(s[5]=="Cave" && !unit(0).fled){
						Entrys.push("CSUB yelps as DOM grabs her, one hand quickly silencing the screams. CDOMSHORT slowly drags her into the shadows, fangs ready. ")
						if(unit(s[1]).Slutty && unit(s[2]).willing){
							Entrys[Entrys.length-1] += "From inside the darkness I hear sensual moaning and a wet slurping sound. Soon the moaning stops and all thats left is that sound of the batgirl feeding."
						}else if(unit(s[1]).Funny){
							Entrys[Entrys.length-1] += "From inside the darkness a wet slurping is the only sound to be heard, followed by "+choose(["a deep cackling!","the batgirl asking whose next...","creepy chuckling."])
						}else if(unit(s[1]).Hungry){
							Entrys[Entrys.length-1] += "From inside the darkness a wet slurping is the only sound to be heard, followed by a "+choose(["deep belch!","loud burp."])
						}else{
							Entrys[Entrys.length-1] += "From inside the darkness a wet slurping is the only sound to be heard..."
						}
					}
					if(unit(s[2]).Tags[0] == "Batgirl" && unit(s[1]).Tags[0] != "Slimegirl"){
						Entrys = []
						if(unit(s[1]).flying && unit(s[2]).flying){
							Entrys.push(choose(["CDOM outflies the other batgirl and soon has her by the neck.","CDOM swoops up at SUB from below, latching onto her throat!","CDOM intercepts SUB and bites into her neck."])+choose([" They both fall to the ground in a mess of wings as DOM drinks her fill."," They spiral downward with a trail of blood as DOM drains the other girl."," Entangled, they tumble to the ground as DOM continues to feast! "])+ choose([" CSUB breaks DOM's fall with her depleted body. CDOM licks her bloody lips before flapping back into the air."," CDOM lands on top of the lifeless girl, and quickly leaps back into the air."," They land with SUB completely colorless, and DOM takes to the air once more.","They land and DOM keeps slurping down SUB's blood in time with her weakening heartbeat. She uses the other girls wing to wipe her mouth before leaping back into the air."]))
						}
						if(Entrys.length == 0 || Math.random()<.2){
						Entrys.push("CDOM sneaks up behind SUB and starts nibbling her neck. The other bat just tilts her head, knowing what's coming next. She remains stoic even when DOM's teeth sink into her, and is consumed without saying a word.")
						}
					}
					if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("CDOM pulls SUB's collar down to get a bite. CSUBSHORT's dress gets covered in blood as DOMSHORT drinks her fill.")
					}
					if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("CDOM has to struggle with SUB's armor before she can get a clean bite. When her teeth can finally sink in, SUBSHORT drops to her knees as she's fed on.")
					}
					if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("CSUB's skirt might keep her purity safe, but DOM's more interested in her life. The bite doesn't win over the SUBRACE's heart, but it does still it!")
					}
					if(s[2] < 100){
						if(unit(s[2]).Positive && party.units.length > 2 && !unit(0).fled){
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. CSUB tells us not to give up as the color leaves her face")
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. CSUB tells us to keep fighting as she's drained by DOM!")
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. CSUB gives me a salute before passing out from bloodloss!")
						}
						if(unit(s[2]).Negative && party.units.length > 2 && !unit(0).fled){
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. CSUB begs for us to save her as the color drains from her face!")
						}
						if(unit(s[2]).Positive && party.units.length == 2 && !unit(0).fled){
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. CSUB tells me not to give up as the color leaves her face")
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. CSUB tells me to keep fighting as she's drained by DOM!")
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. CSUB gives me a salute before passing out from bloodloss!")
						}
						if(unit(s[2]).Negative && party.units.length == 2 && !unit(0).fled){
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. CSUB cries out for me as she's drained by DOM. She dies before I have a chance to save her!")
						}
						if(unit(s[2]).Slutty && unit(s[2]).willing && !unit(0).fled){
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. As SUB starts to get drained by DOM, she blows a kiss to me, and says she was hoping I'd be the one to eat her. I blow a kiss back as the color leaves her face.")
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. As SUB starts to get drained by DOM she begins to finger herself. She cums before passing out from bloodloss!")
						}
						if(unit(s[2]).Funny && unit(s[2]).willing && !unit(0).fled){
							Entrys.push("CDOM bites down on SUB's neck and starts to drink. As SUB starts to get drained by DOM, she asks the hungry bat if she tastes like "+choose(["apple","tomato"])+" or "+choose(["cherry","strawberry"])+". She chuckles until passing out.")
						}
					}
				}else if(unit(s[1]).Tags[0] == "Harpygirl" && unit(s[1]).flying){
					Entrys = [""]
					if(unit(s[2]).flying){ 
						Entrys[0] += choose(["CDOM outflies SUB","CDOM outmaneuvers SUB","CDOM outwits SUB"])
						Entrys[0] += choose([" to slash her talons against her opposition's wings. When CSUBSHORT lands, DOM quickly follows to devour the unconscious girl. After her meal, she leaps back into the air.",", and swoops up to swallow her legs. CSUBSHORT flaps her wings frantically as she's devoured from below."," before using her talons to hold SUBSHORT still. She somersaults to swallow the other fliers head and shoulders. Both thrash around as SUBSHORT gets gobbled down. After finishing her meal, DOMSHORT rights herself to stay airborne."])
						Entrys[0] += choose(["",choose([" The harpies belly groans loudly as she digests her prey!"," The harpies belly shrinks down almost immediately!"," The harpies prey is digested almost immediately!"])])
					}else{
						 Entrys[0] += choose(["CDOM licks her lips before diving down towards SUB","CDOM suddenly dives straight for SUB","CDOM circles before she dives down towards SUB"])
						 Entrys[0] += choose([" to scoop her up and fly back into the air. She flings SUBSHORT above her and swallows her when she falls back down.",", and uses her talons to snatch the girl up. She gets airborn again and safely eats her from above.",". She flies headlong towards her prey, and swallows SUBSHORT halfway with the momentum! A few short gulps later, and DOMSHORT flies back into the air with a full belly."])
						 Entrys[0] += choose(["",choose([" The harpies belly groans loudly as she digests her prey!"," The harpies belly shrinks down almost immediately!"," The harpies prey is digested almost immediately!"])])
					} 
				}else if((unit(s[2]).Tags[0] == "Batgirl" || unit(s[2]).Tags[0] == "Harpygirl") && unit(s[2]).flying && unit(s[1]).Tags[0] != "Froggirl" && unit(s[1]).Tags[0] != "Slimegirl"){
					Entrys.push(
						choose([
							"CDOM flings a rock up at SUB and it hits her"+
							choose(["."," as she flies by."," wing, knocking her off balance.", " forehead, stunning her."," square in the chin. She looks dazed and stops flapping her wings.", " right in the gut. She curls up from the pain."])+
							" CDOM grabs her"+
							choose([" as she falls"," as she tumbles down"," as she spirals down"," as she fumbles down"])
							,
							"CDOM grabs SUB"+
							choose(["",""," as she swoops down"," when she flies by"," when she's right above her"," as she glides too low"])
							,
							"CDOM catches SUB"+
							choose(["",""," as she swoops down"," when she flies by"," when she's right above her"," as she glides too low"])

						])+
						
						choose([", holding her tight",", pulling her into an overly-tight embrace",", wrapping her arms around the SUBRACEs middle",". CDOMSHORT wraps one arm around the SUBRACEs chest and another around her neck. She lets her struggle fruitlessly for a moment",", then squishes her wings together"])+
						choose([
							". CDOMSHORT's mouth envelopes the trapped girls head with ease. As her wings try flapping within the confines of DOM's grip, she slide her mouth down to the SUBRACEs shoulders. CDOM continues to make her way across the SUBRACEs tasty body until its completely inside.",
							" before she swallows the SUBRACE down.",
							" as she gives the SUBRACE a goodbye kiss and swallows her down.",
							". CDOMSHORT gets one last look at the SUBRACEs face before it, and the rest of her, slide down her throat. She almost chokes as she swallows struggling wings.",
							". CDOMSHORT gives the SUBRACE one last squeeze before swallowing her down.",
							". When SUB's struggling stops, DOM wraps the SUBRACE wings into a burrito before swallowing her down."+choose(["",""," I bet she would have been better with hot sause!"]),
							" until she stops struggling. CDOM then swallows her down without even getting a proper taste with the SUBRACE wings in the way.",
							" and quickly gobbles SUB up without even taking the time to get a proper taste.",
							" and gulps her down as she frantically flaps her wings!",
							" to start nibbling on SUB's ear. CDOM swallows her down slowly and savors her flavor.",
							" before swallowing her down. ",
							", and gobble the SUBRACE down.",
							" before engulfing her head. A few big swallows take the SUBRACE entirely down DOM's throat, wings and all.",
							" before swallowing her halfway down. Flapping wings prevents DOM from finishing the job until the SUBRACE suddenly goes stiff and gets slurped down peacefully."
						])
					)
						if(unit(0).fled == false && Math.random() < .5){
							Entrys[Entrys.length-1] += choose([" I see SUBSHORT struggle inside DOMSHORT"," I see SUBSHORT struggle inside DOMSHORT"," Her struggling almost takes DOMSHORT off balance as she tries one last time to escape"," I see her wings thrash around inside DOM"," She thrashes about with her wings for a while"," I see her weakly pound against DOMSHORT's stomach walls with her wings"," She makes muffled cries for help"," She begs for DOMSHORT to let her out"," She begs for someone to save her"," She pushes hard against the sides of DOMSHORT's stomach with her wings"," Her wings pound against DOMSHORT's belly"," Her wings make impressions against DOMSHORT's belly"])
							Entrys[Entrys.length-1] += choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until DOMSHORT's stomach melts her down."," until DOMSHORT starts churning her into mush."," until DOMSHORT burps out the last of her air."])
						}
				}else if(unit(s[1]).Tags[0] == "Slimegirl"){
					if(unit(s[2]).Tags[0] == "Slimegirl"){
						Entry = ""
						Entrys = []
						if((unit(s[1]).Name == "Red Slimegirl" || unit(s[2]).Name == "Red Slimegirl") && (unit(s[1]).Name == "Yellow Slimegirl" || unit(s[2]).Name == "Yellow Slimegirl")){ Entry = "Orange" }
						if((unit(s[1]).Name == "Red Slimegirl" || unit(s[2]).Name == "Red Slimegirl") && (unit(s[1]).Name == "Blue Slimegirl" || unit(s[2]).Name == "Blue Slimegirl")){ Entry = "Purple" }
						if((unit(s[1]).Name == "Yellow Slimegirl" || unit(s[2]).Name == "Yellow Slimegirl") && (unit(s[1]).Name == "Blue Slimegirl" || unit(s[2]).Name == "Blue Slimegirl")){ Entry = "Green" }
						if((unit(s[1]).Name == "Green Slimegirl" || unit(s[2]).Name == "Green Slimegirl") && (unit(s[1]).Name == "Orange Slimegirl" || unit(s[2]).Name == "Orange Slimegirl")){ Entry = "Yellow" }
						if((unit(s[1]).Name == "Green Slimegirl" || unit(s[2]).Name == "Green Slimegirl") && (unit(s[1]).Name == "Purple Slimegirl" || unit(s[2]).Name == "Purple Slimegirl")){ Entry = "Blue" }
						if((unit(s[1]).Name == "Orange Slimegirl" || unit(s[2]).Name == "Orange Slimegirl") && (unit(s[1]).Name == "Purple Slimegirl" || unit(s[2]).Name == "Purple Slimegirl")){ Entry = "Red" }
						if(Entry == ""){
							Entrys.push("CDOM absorbs SUB into her!")
							Entrys.push("CSUB gets absorbed into DOM!")
						}else if(s[1] <= 99){
							Entrys.push("My slimegirl absorbs SUB, their colors merge into a new shade of "+Entry.toLowerCase()+choose(["!",". I'll have to get a taste of her new flavor later...",". I wonder what she tastes like now..."]))
							Entrys.push("CSUB gets absorbed by my slimegirl, their colors merge into a new shade of "+Entry.toLowerCase()+choose(["!",". I'll have to get a taste of her new flavor later...",". I wonder what she tastes like now..."]))
							unit(s[1]).Name = Entry + " Slimegirl"
						}else{
							Entrys.push("The other slimegirl absorbs SUB, their colors merge into a new shade of "+Entry.toLowerCase()+"!")
							Entrys.push("CSUB gets absorbed by another slimegirl, their colors merge into a new shade of "+Entry.toLowerCase()+"!")
							unit(s[1]).Name = Entry + " Slimegirl"
						}
						//The slimegirl rises, returning to her humanoid form, enveloping the froggirl in the process.
						//The slimegirl rises, returning to her humanoid form and envelopes the froggirl in the process.
					}else{
						var SlimeColor = String(unit(s[1]).Name.replace(" Slimegirl", "")).toLowerCase()
						Entry = ""
						Entry += choose(["Quick","Quick","Quick","CDOM",choose([
							"CSUB looks surprised as DOM",
							"CSUB gets too close to DOM, and can't react when she",
						])])
						if(unit(s[2]).flying){
							Entry = choose(["CDOM stretches out her arms to loop around SUB. She tries to fly away, but DOM doesn't let go.","CDOM stretches out to grab SUB's wing."])+
								choose([" She pulls back"," She yanks back"])+
								choose([" and SUB is plunged inside her."," and SUB is submerged inside her."])
						}else if(Entry == "Quick"){
							Entry = "CDOM "+choose(["engulfs SUB!","swallows SUB!"])
						}else if(Entry == "CDOM"){
							Entry += choose([" tackles SUB to the ground. She completely covers her prone form in "+SlimeColor+" goo.",
							choose([" stretches out her arms to loop around SUB."," stretches out to grab SUB's arm."])+
								choose([" She pulls back"," She yanks back"])+
								choose([" and the SUBRACE is plunged inside her."," and the SUBRACE is submerged inside her."]),
							" stretches out and drapes herself around SUB, completely enveloping her body.",
							" reforms into a flat blob and quickly engulfs SUB's legs. She then rises, returning to a humanoid form and enveloping the SUBRACE in the process.",
							" reforms into a flat pancake shape and quickly engulfs SUB's legs. She then rises, returning to a humanoid form and enveloping the SUBRACE in the process."])
						}else{
							Entry += choose([" tackles her to the ground. The SUBRACE's prone form quickly gets completely covered in "+SlimeColor+" goo.",
							" stretches out her arms to loop around her. CDOM pulls back and the SUBRACE is plunged inside her.",
							" stretches out to grab her arm. CDOM pulls back and the SUBRACE is submerged inside her.",
							" stretches out and wraps around her, completely enveloping her body.",
							" reforms into a flat pancake shape and quickly engulfs her legs. CDOM then rises, returning to a humanoid form and enveloping the SUBRACE in the process.",
							" reforms into a flat blob shape and quickly engulfs her legs. CDOM then rises, returning to a humanoid form and enveloping the SUBRACE in the process."])
						}
						if(Math.random()<.4 || !unit(s[2]).Vanilla){
							if(unit(s[2]).Tags[0] == "Batgirl" && Math.random()<.8){
								Entry += choose([" CSUB watches in horror as her wings melt away first."," CSUB thrashes her wings trying to escape as she starts to melt away."," CSUB tries to flap her melting wings while she's suspended in goo."])
							}else if(unit(s[2]).Tags[0] == "Harpygirl" && Math.random()<.8){
								Entry += choose([" CSUB watches in horror as her feathers melt away first."," CSUB thrashes her wings trying to escape as she starts to melt away."," CSUB tries to flap her feathered wings while she's suspended in goo."])
							}else if((unit(s[2]).Tags[0] == "Bunnygirl" || unit(s[2]).Tags[0] == "Catgirl" || unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Deergirl"|| unit(s[2]).Tags[0] == "Wolfgirl")&&Math.random()<.25){
								Entry += choose([" CSUB watches in horror as her fur dissolves away."," CSUB watches in horror as her tail dissolves away."])
							}else if((!unit(0).fled && Math.random()<.25)|| !unit(s[2]).Vanilla){
								if(s[2] < 100){
									if(unit(s[2]).Positive){
										if(unit(s[2]).willing){
											Entry += " My SUBRACELONG gives me one last smile. She fingers herself"
										}else{
											Entry += " My SUBRACELONG gives me one last smile"
										}
									}else if(unit(s[2]).Negative){
										if(unit(s[2]).willing){
											Entry += " My SUBRACELONG looks utterly embarrassed with both hands between her thighs, masturbating"
										}else{
											Entry += " My SUBRACELONG frowns at me"
										}
									}else if(unit(s[2]).Hungry){
										Entry += " My SUBRACELONG has her tongue out, enjoying the taste of the "+SlimeColor+" goo. She seems unconcerned about her own demise and focuses on slurping up the slime"	
									}else if(unit(s[2]).Funny){
										Entry += " My SUBRACELONG seems unconcerned about her own demise and makes a funny face at me"
									}else if(unit(s[2]).Slutty){
										if(unit(s[2]).willing){
											Entry += choose([" My SUBRACELONG masturbates"," My SUBRACELONG fingers herself"," My SUBRACELONG rubs her clit"])+choose([" furiously "," desperately "])+choose([""," while she holds her breath"," while she looks at me"])+choose(["",", desperate for one last orgasm"])+choose([". She gives me a smile and cums",". She locks eyes with me and cums",". She cums"])
										}else{
											Entry += " My SUBRACELONG blows me a final kiss"
										}
									}else if(unit(s[2]).willing){
										Entry += " My SUBRACELONG seems unconcerned about her own demise and masturbates furiously"+choose([""," while pinching down on a nipple. Unfortunately, she can't reach an orgasm. Her hand keeps frantically rubbing"," with both hands. Despite her best efforts, she isn't able to cum. She keeps trying",". She barely manages to cum",". She has a massive orgasm"])
									}else{
										Entry += choose([" I watch My SUBRACELONG struggle to escape"," I watch My SUBRACELONG writhe in pain"," My SUBRACELONG locks eyes with me"])
									}
									Entry += choose([" while"," before"])+choose(["","","",""," slowly"," quickly"])+choose([" digesting."," passing out."," dissolving."," she melts away."])
									//choose([" while she"," before she"," as she"," until she"])+choose(["BLANK"," slowly"," quickly"])+choose([" digests."," passes out."," breaks apart."," melts away."])+
								}else{
									Entry += choose([""," CDOMSHORT approaches me and proudly displays her belly."," CDOMSHORT waves at me, and points to her belly."])+choose([" I watch"," I stare"," I crouch and watch"])+choose([" the SUBRACELONG start to dissolve."," as the SUBRACELONG melts away."," through her transparent slime. CSUB looks back at me as she digests."])
								}
							}else{
								if(3==4){
								
								}else{
									Entry += choose([ 
									" CSUBSHORT manages to breach her head free out of the "+SlimeColor+choose([" goop"," slime, she's able to take a deep breath"," goo! She calls out for help"])+choose([", but is quickly shoved back in."," before getting pulled back in."," before sinking back in."]),
									" CSUBSHORT manages to breach a hand free out of the "+SlimeColor+choose([" goop, but its quickly shoved it back in."," goo! She waves it around before getting slowly pulled back in."]),
									
									choose([" CSUBSHORT writhes in pain"," CSUB watches in horror"])+choose([" as her skin melts away."," as her limbs start dissolving."," as her left arm melts away."," as her right arm falls apart."]),
									" CSUBSHORT curls up into a ball as she melts away.",
									" CSUBSHORT tries to scream, but "+SlimeColor+" slime rushes into her mouth instead.",
									" CSUBSHORT screams out, filling DOM with little airbubbles that slowly rise to the surface and pop.",
									+choose([" CSUB stops struggling and closes her eyes, she almost looks at peace"," CSUB just relaxes"," CSUB doesn't struggle once she's inside, she stays still"])+choose([" while she"," as she"])+choose(["","",""," calmly"," slowly"," quickly"])+choose([" digests."," dissolves."," melts away."]),
									" CSUBSHORT's limbs melt away first as she thrashes around."])
								}
							}
							Entry += choose([" Soon she's completely digested!"," Soon DOMSHORT's belly is completely empty!"," Soon, there's nothing left of her!"," Soon, even her bones are broken down!"," Soon only her bones remain!"," Soon there's nothing but her bones left!"])
						}else{
							Entry += choose([" CSUBSHORT quickly dissolves inside."," CSUBSHORT slowly melts away."])
						}
						Entrys = [Entry]
					}
				}
				if(Entrys.length == 0){
					Entrys.push(
						choose(["CDOM ","CDOM ","CDOM ","CDOM ","CDOM ","Licking her lips, DOM looks ready for a meal. She ","CDOM swiftly ","CDOM quickly ",(choose(["CDOM's stomach growls loudly.","CDOM's stomach makes a deep rumble.","CDOM's empty stomach gurgles."])+" She ") ])+
						choose(["grabs SUB,","grabs SUB,","grabs SUB,","grabs SUB,","reachs out to grab hold of SUB,","lurchs forward at SUB. She grabs her by the waist with both hands,","grabs hold of SUB,","lifts SUB into the air over her open maw,","lifts SUB above her open maw,"])+
						choose([" and"," and"," and"," and"," and hastily"," and before SUBSHORT realizes whats happening, DOMSHORT"," and as SUBSHORT struggles, DOMSHORT"," and before SUBSHORT can struggle, DOMSHORT"," and before SUBSHORT has time to react, DOMSHORT"," and as SUBSHORT struggles, DOM"," and as she weakly struggles, DOMSHORT"," and as SUBSHORT begs for help, DOM"," and SUBSHORT screams in terror as DOMSHORT"," and SUBSHORT's eyes grow wide as DOMSHORT"," and SUBSHORT flails her free limbs as DOMSHORT"])+
						choose([" swallows her."," swallows her down."," swallows her down."," swallows her down without even taking the time to get a proper taste."," gulps her down!"," starts swallowing her down. She looks in bliss as she finishes her meal."," starts swallowing her down."," gobbles her down."," takes several large gulps until SUB is completely inside her."," gets SUB into her mouth. A few big swallows take her entirely down."," swallows her halfway down. She takes a moment before gulping down the rest of her."])+
						choose(["","","",
							choose([" Her struggling almost takes DOMSHORT off balance as she tries one last time to escape"," CSUBSHORT struggles inside for a while"," CSUBSHORT thrashes around inside"," CSUBSHORT thrashes about for a while"," CSUBSHORT pounds against the stomach walls"," CSUBSHORT makes muffled cries for help"," CSUBSHORT screams for someone to let her out"," CSUBSHORT pushes hard against the stomach sides"," CSUBSHORT's fists pound against DOMSHORT's belly"," CSUBSHORT's hands make impressions against DOMSHORT's belly"])+
							choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until DOMSHORT's stomach acids melt her down."," until DOMSHORT starts churning her into mush."," until DOMSHORT burps out the last of her air."])
							//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
						])
					)
					Entrys.push("CDOM eats SUB!")
				} 
			}
		}
	}
//###########################################################################################################################################################################
//	TODO:       FUCK
	if(s[0]==4){//FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK - FUCK
		
		//-1 too hungry - 0 fail - 1 success
		if(s[3] == -1){
			if(s[1]==0){
				Entrys = ["Oh no, I can't get it up!","I'm too hungry to bang right now!","I need to eat before I'm ready again!"]
			}else{
				Entrys = ["CDOM just straddled me, but I can't get it up!","Sad days, DOM said she needs me, but I'm too hungry to bang right now!","How embarrassing, DOM started to stroke me, but it stayed limp, I need to eat before I'm ready again!"]
			}
		}else if((s[1]==0 || s[2]==0) && Cocked != null && s[3] == 1){
			if(s[1]==0){
				Entrys = ["I grab SUB by the hips, and thrust until we both orgasm! With my balls swollen from the "+Cocked.Name.toLowerCase()+", I cum buckets into her and she bloats out!"]
			}else{
				Entrys = ["CDOM wraps her hand around my swollen member and starts to lick the tip. Soon shes bobbing on my shaft. With my balls swollen from the "+Cocked.Name.toLowerCase()+" my cum overwhelms DOMSHORT and it dribbles down her nose!"]
			}
		}else if(s[1]==0 && s[2] < 100 && !map[party.y][party.x].hostile){
		// HERO GOOD PEACE
			if(unit(s[2]).CPun > unit(s[2]).MPun*.5 && unit(s[2]).legs){
				Entrys.push(choose(["I kiss SUB's wound, and ask how I can make her feel better.","I make SUB lie down on the GROUND, and inspect her wound. I clean it the best I can, and ask if theres anything else she needs."," I see SUB limping, and force her to sit on OBJECTSHORT. After inspecting the wound, I ask if there's anything she wants."])+
				choose([" She blushes and points between my legs."," She bites her lip as she takes a meaningful look between my legs."," She looks away as she whispers a good dicking would help."," She spreads her legs, and I slowly slip inside."," She pulls me close, and whispers that she wants me."," She slowly reaches between my legs. Her fingers wrap around me, and start to stroke. Once I'm hard, I let her guide me inside."])+
				choose([" I gently make love to her until she feels better."," I make long, slow thrusts into her until we both cum. She's covered in sweat, but says she feels much better now!"," I caress her body while making slow thrusts into her. The slower pace seems to work fine for her, and soon she starts to moan. We both finish, and she looks much better afterwards."]))
			}
			if(unit(s[2]).Tags[0] == "Slimegirl"){
				Entry = "";
				Entrys.push(choose(["I fuck SUB.","CSUB and I make love.","I shove my hand into SUB's breast and start stirring her up. She squirms, and makes the strangest of noises. Her legs liquefy, and she pulls me to the ground. I start thrusting into the glob of her lower body, and she arches her back in pleasure."," I gently slip a finger into SUB's nipple and start stirring her up. She squirms, and makes the strangest of noises. Her legs liquefy, and she pulls me to the ground. I start thrusting into the glob of her lower body, and she arches her back in pleasure."," Without aiming for any orifice, I thrust into SUB's body. She lets me have my fun before morphing her body. It reforms with her nethers around my length, and she starts grinding against me."])+
					choose(["",choose([" Her gelatinous curves jiggle as she takes me.",
					" She's silent, but her face looks like she's having fun.",
					" She suddenly engulfs me as a massive orb of goo."+choose([" She shifts again, and I'm now taking her from behind."," I pull myself free to breath, and her upper body rises as well. We hug, and she returns to her feminine form to start riding me."," After she shifts again, I find myself lying on the GROUND with her riding on top of me."])
					])])+
					choose([" When we finish, she pulls me into a kiss. Her lips have a perfect "+DescWord(unit(s[2]),"slime",100)+" taste to them.",
					" When we finish, my skin is tinted "+DescWord(unit(s[2]),"slime_color",100)+"!",
					" I latch onto her breast, and my mouth fills with her flavor. She starts to quiver, and soon gushes against me. The sensation sends me over the edge as well.",
					" She starts to tremble, and tightens against me. The sensation is too much and I cum inside her. My spunk floats around her translucent body before dissolving.",
					" When we finish, she melts into a quivering puddle. That's not a metaphor, she's literally a puddle!",
					" I lean in for a kiss, but her head splits into a pair of feet. I watch as her body reverses itself, and she starts to blow me. I dive between her spread legs and pleasure her slit until it gushes "+DescWord(unit(s[2]),"slime",100)+" flavored juices."
					]))
					
					
					Entrys.push(
						choose([" I see SUB in her short blobby form and get a silly idea."," I see SUB sitting on the GROUND and get a crazy idea."])+
						choose([" After walking over, I shove myself into her ear."," She looks up as I approach, and I shove myself in from below her jaw."," I walk up from behind, and shove myself into the back of her head!"])+
						choose([" She squirms, and makes the strangest of noises as I thrust into her."," Goop splashes out of her mouth as I keep thrusting."," Her body sways with mine as I pound her from behind."])+
						choose([" I can clearly see my cock inside where her brain should be."," I see a cock shaped pocket in her head every time I slide outward."," Every time I plunge into her, more little bubbles are forced inside as well."," My cock leaves a void in her head each time I pull back."])+
						choose([
							" She rises to my height, and my cock leaves a deep groove along her translucent body. She pulls me into a "+DescWord(unit(s[2]),"slime",100)+" flavored kiss. I grab her oozing hips, and vigorously fuck divots into her. She drapes her body around me as we finish, and guides us to the ground. I lay suspended in her slime as she rests against my chest.",
							" When I'm close, I grab her head and vigorously fuck it. My seed blasts through her head, and out the other side as she melts into a puddle.",
							" She suddenly turns to look at me. Her lips reform around my length, and she starts bobbing along it. Soon I cum, and stringy white seed fills her translucent head.",
							" She suddenly shudders, and melts into a puddle. I lay down in her as she reforms under me. I start thrusting until we both finish, and my seed shoots deep into her translucent body to float around."
						])
						)
			}
			if(map[party.y][party.x].units.length > 0){
				//LogEntry(unit(100).Positive)
				if(unit(100).Positive){
					Entrys.push("I make love to SUB. The HOS politely looks away.")
					Entrys.push("I make love to SUB. The HOS casually walks away.")
					Entrys.push("I make love to SUB. The HOS casually goes about her day.")
				}
				if(unit(100).Negative){
					Entrys.push("I make love to SUB. The HOS blushes when I catch her sneaking a peak.")
					Entrys.push("I make love to SUB. The HOS walks away embarrassed.")
					Entrys.push("I make love to SUB. The HOS blushes, but doesn't turn away.")
				}
				if(unit(100).Funny){
					Entrys.push("I make love to SUB. CSUBSHORT blushes when the HOS tries giving her some pointers.")
					Entrys.push("I make love to SUB. CSUBSHORT blushes when the HOS cheers us on.")
					Entrys.push("I make love to SUB. CSUBSHORT blushes when the HOS starts narrating our moment.")
				}
				if(unit(100).Slutty){
					Entrys.push("I make love to SUB. The HOS casually leans against OBJECTSHORT and watches.")
					Entrys.push("I make love to SUB. The HOS casually sits against OBJECTTALL and watches.")
					Entrys.push("I make love to SUB. The HOS gets closer to watch.")
				}
				if(unit(100).Hungry){
					Entrys.push("I make love to SUB. The HOS drools while she watches.")
					Entrys.push("I make love to SUB. The HOS drools while staring at SUBSHORT.")
					Entrys.push("I make love to SUB. The HOS gets closer to watch.")
				}
			}
			if(s[5]=="Forest" && party.units[s[2]].legs){
				if(unit(s[2]).willing){
					Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her clit. She grinds her thighs together as they become soaked. Her legs buckle, and she falls into the grass. I straddle her legs and start to pound her from behind! She moans for more, and I don't stop until she shudders under me. As we both lie in the grass afterward, she says she really though I was going to eat her this time!")
				}else{
					Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her clit. She grinds her thighs together as they become soaked. Her legs buckle, and she falls into the grass. I straddle her legs and start to pound her from behind! She moans for more, and I don't stop until she shudders under me. As we both lie in the grass afterward, she says she loves me!")
				}
			}
			if(s[5]=="Indoors"){
				Entrys.push("I gently push SUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!")
				Entrys.push("Without a word, I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture.")
			}
			//LONG ENTRYS ########################################################################################################
			if((Entrys.length == 0 || Math.random()<.25) && unit(s[2]).legs){//.2 - .5
				Entrys = []
				Entry = "";
				s[11] = choose(["talk","behind"])//initial setup
				s[12] = choose(["doggy","standing"])//sex position. doggy, standing, missionary, cowgirl, against something tall, against something short.
				s[13] = "none"//sex position second
				s[14] = choose(["none","start","end","normal"])//foreplay
				if(party.lastAction[2] == s[2] && party.lastAction[1] == s[1] && party.lastAction[0] == s[0]){s[11] = "again"}
				if(s[11] == "again"){
					Entry += choose([
						"","",choose([
							"I look at SUB's beautiful form and realize I need to have her again.",  
							"I stay stiff and realize I need to have SUB again.",  
						])
					])
					if(Entry == ""){
						Entry += "I "
					}else{
						Entry += " I "
					}
					if(Entry == "I "){
						if(s[12] == "doggy"){
							Entry += "ask SUB how she wants it this time."
						}else{
							Entry += choose([
								"ask SUB for another round.",
								"ask SUB if she's ready for another go.",
								"tell SUB I need to have her again.",
								"ask SUB if she wants to have more fun."
							])
						}
					}else{
						if(s[12] == "doggy"){
							Entry += "ask how she wants it this time."
						}else{
							Entry += choose([
								"ask SUB if she's ready for another go.",
								"tell her I need her again.",
								"tell her I need to have her.",
								"ask her if she wants to have more fun.",
								"ask her how she wants it this time."
							])
						}
					}
				}
				if(s[11] == "talk"){
					Entry += choose([
						"","",choose([
							"I look at SUB's beautiful form and realize I need to have her again.",
							"I look at SUB's beautiful form and realize I need to have her.",
							"CSUB walks by me. My desire for her becomes too much as I watch her cute cheeks in motion.",
							"The lust I feel for SUB becomes too much to bear.",
							"I can't resist SUB any longer."
						])
					])
					if(Entry == ""){
						Entry += choose([
							"I approach SUB to ",
							"I walk up to SUB, and ",
							"I ","I ","I "
						])
					}else{
						Entry += choose([
							" I approach her to ",
							" I walk up to her, and ",
							" I "," I "," I "
						])
					}
					if(Entry == "I "){
						if(s[12] == "doggy"){
							Entry += "ask SUB how she wants it."
						}else{
							Entry += choose([
								"tell SUB I want her.",
								"tell SUB I need to have her.",
								"ask SUB if she wants to have some fun."
							])
						}
					}else{
						if(s[12] == "doggy"){
							Entry += "ask how she wants it."
						}else{
							Entry += choose([
								"tell her I want her.",
								"tell her I need to have her.",
								"ask her if she wants to have some fun.",
								"ask her how she wants it."
							])
						}
					}
				}
				if(s[11] == "behind"){
					Entry += choose([
						"","",choose([
							"I look at SUB's beautiful form and realize I need to have her again.",
							"I look at SUB's beautiful form and realize I need to have her.",
							"CSUB walks by me. My desire for her becomes too much as I watch her cute cheeks in motion.",
							"The lust I feel for SUB becomes too much to bear.",
							"I can't resist SUB any longer.",
							"I think it's time for some fun with SUB."
						])
					])
					if(Entry == ""){
						Entry += choose([
							"I approach SUB from behind",
							"I walk up behind SUB",
							"I step behind SUB",
							""
						])
					}else{
						Entry += choose([
							" I approach her from behind",
							" I walk up from behind",
							" I step behind her"
						])
					}
					if(Entry == ""){
						Entry += 
							"I rest my hands on SUB's "+choose(["","tense ","stiff "])+" shoulders"+choose([", and ",". When she asks, I ",". She sighs as I ",". She stands still while I "])+"give her a massage"+
							choose([
								".",
								", digging my palms against her back with my fingers draped over her.",
								" until I feel the "+choose(["stiffness","tension"])+" is worked away.",
								". My fingers dig in deep to work out the knots in her muscles."
							])
					}else{ 
						Entry += choose([
							" and wrap my arms around her.",
							" and wrap my arms around her "+DescWord(unit(s[2]),"belly",100)+choose([" belly."," midriff."," stomach."," middle."]),
							" to drape my arms "+choose(["over","around","across"])+" her shoulders.",
							" and rest my hands on her "+choose(["","soft "])+"hips.",
							" to pull her close by the "+choose(["hips.","waist."]),
							" and grip her hips, my fingers making small "+choose(["dimples","divots","indents"])+" in her "+choose(["","soft "])+"skin.",
							", embracing her with my chest against her back.",
							", sliding my arms under hers"+
								choose([
									".",
									". My fingers make impressions against her belly as I pull her close.",
									" to "+choose(["fondle","grope","caress","feel","cup"])+" her "+choose(["bosom","bust",DescWord(unit(s[2]),"breasts",50)+"breasts"])+choose([".",". Her nipples harden under my touch."]),
									". My fingers explore her "+DescWord(unit(s[2]),"belly_noun",100)+choose(["."," as goosebumps form under their touch."])
								])
						
						
						
						])
					}
						if(s[14] == "normal" || s[14] == "start"){//Foreplay
							Entry += choose([
							" SheCONTINUE",
							" SheCONTINUE",
							" SheCONTINUE",
							" SheCONTINUE",
							" She leans against me with a relaxed sigh.",
							" She lays her head against me"+choose([".",", breathing in my scent."]),
							" She lays her hands over mine"+choose([".",", giving both a squeeze."]),
							" Her fingers curl around my wrists"+choose(["."," as sheCONTINUE"])
							])
							if(Entry.includes("CONTINUE") && Math.random()<.5 && s[14] == "start"){
								Entry = Entry.replace("CONTINUE"," ");
								Entry += "grinds against my body"+choose([
								choose([".",".",", andCONTINUE"]),
								", her crotch leaving a juicy trail down my leg."+choose(["","","",""," SheCONTINUE"]),
								", her crotch leaving a wetness on my leg."+choose(["","","",""," SheCONTINUE"]),
								". I feel her cute cheeks "+choose(["sandwich","around","squeeze"])+" my rod as she moves."+choose(["","","",""," I stiffen between her until I'm fully erect."])+choose(["","",""," SheCONTINUE"])
								])
									
							}
							if(Entry.includes("CONTINUE") && Math.random()<.5){
								Entry = Entry.replace("CONTINUE"," ");
								Entry += choose([
									choose(["tilts her head","looks","peeks"])+" back at me"+choose([
										" with a smile.",
										" with a naughty look in her eye.",
										" with a naughty look on her face.",
										" biting her lip",
										", her cheeks are bright red.",
										", andCONTINUE",
										", and bats her eyelashes with a naughty grin.",
										choose([", and we lock eyes.",", and stares into my eyes.",", and just looks at me."])+choose([" I can't help but to blush as she keeps looking at me."," Somehow I feel embarrassed by her intent gaze."," I feel my cheeks slowly turn red from her gaze."])
									])
									,
									choose(["tilts her head","looks"])+ " back "+choose(["and leans in for a kiss","and gives me a kiss","and kisses me","to kiss me",", surprising me with a kiss"])+
									choose([".","!",
										". When our lips part, sheCONTINUE",
										". She sucks on my lower lip before giving it a bite.",
										", she closes her eyes as our tongues entwine.",
										", my tongue glides past her "+choose(["lips","teeth"])+choose([".","."," as we lock eyes.",", taking in her flavor."]),
										", her tongue pushes into my mouth"+choose([".","."," searching for my own."," tangling up with mine."])
									])
								])
							}
							if(Entry.includes("CONTINUE")){
								Entry = Entry.replace("CONTINUE", " ");
								Entry += choose(["","","quietly ","softly "])+choose(["tells me ","says ","whispers that "])+choose(["she wants it.","she's all mine.","she's been waiting for me.","she can't wait."])
							}
							
							//ADD DESCRIPTION STUFF HERE FOR DIFFERENT RACES AND SUCH
							
						}
						//ADD RIGHT HAND DETAILS HERE
						
						if(s[14] == "normal" || s[14] == "end"){
							Entry += " My left hand "+choose(["","follows the curve of her body as it ","slowly ","gently ","slides across her skin until it ","explores more of her body before it "," feels her body stiffen as it "])+choose(["dips","slips","sneaks"])+choose([" between her legs"," between her thighs"," down to her nethers"])
							+choose([choose(["."," to tease her."," to rub small circles."," to stir her up."]),	
								choose([". ",", and "])
								+choose([
								"I use my fingers to tease her before slipping one inside."+choose([""," As I feel her tighten, I keep my digit moving in and out."]),
								"I circle a finger around her "+choose(["button","clit","nub"])+" until it's firm, then start rubbing it directly.",
								"I rub her hood until it pulls back before teasing her "+choose(["button","clit","nub"])+" directly." 
								])
							])
							+choose([" Her thighs become soaked"," She gasps in delight"," One of her legs starts to shake"," Her legs start grinding together"," Her legs spread"])+
							choose([" as I find the right rhythm."," when I pick up the pace."," as I keep pleasuring her."])+
							choose(["","",
								choose([" I don't stop and soon "," Soon "])+
								choose(["she cries out","she bites down on her finger","she starts bucking her hips"," her legs snap shut"])+
								choose([" as she cums from my touch."," while she gushes down her thighs."," as she goes over the edge."])])
						}
					
				}
				if(s[12] == "standing"){
					if(s[11] == "talk" || s[11] == "again"){
						Entry += choose([
							" Without saying a word, she turns and "+choose(["frots","rubs","grinds"]),
							" She "+choose(["","","quietly ","softly ","eagerly "])+choose(["tells me ","says "])+choose(["she wants it from behind","she wants it hard","she wants me to pound her","she wants it right here"])+choose([". She turns and "," as she turns and "," as she turns. Her back pushes into my chest as she ",", as she spins around and "])+choose(["frots","rubs","grinds"])
						])+
						choose([" against me."," against my length."])+
						choose([" She spreads her lips"," She spreads her legs"])+choose([", and I slowly stick it in.",", and I slip inside.",", and I pull back on her hips until she's taken my length."])
					}
					if(s[11] == "behind"){
						if(s[14] == "start"){
							Entry += " Before I can go further, she "+
							choose([" takes the initiative by grabbing my length."+choose([" She sticks the head in before pushing back. She moans when my full length is inside."]),
								" grabs my length"+choose([", and rubs my head against",", and pokes my head into"])+choose([" her lips. She then pushes back and takes every inch."," her folds before pushing back and hilting against me."]),							
								choose([" guides my tip"," guides my length"," lines up my length"])+choose([" to her lips."," against her entrance."," to her folds."])+choose([" She pushes back and completely engulfs me."," I pull her hips to me, and she takes every inch."," I pull her hips to me, and she yelps when its completely inside."," We move our hips at the same time, and they clap together as she takes my length."])											
							])
						}else if(s[14] == "normal" || s[14] == "end"){
							Entry += choose([" Once I have her warmed up,"," Once she's ready,"])+choose([" I prod her lips. She spreads them, and tells me to stop teasing her. She gasps when I stick it in."," I drive my length inside her."," I push myself inside."," I spread her lips, and plunge inside."," I stick it inside her."])
						}else{
							Entry += 
							choose([" Before I can go further, she"," Before I can make a move, she"," She nimbly"," She giggles as she"])+
							choose([" takes the initiative by grabbing my length."+choose([" and sticks the head in before pushing back. She moans when my full length is inside."]),
								" grabs my length"+choose([" and rubs my head against"," and pokes my head into"])+choose([" her lips. She then pushes back and takes every inch."," her folds before pushing back. Our hips meet once I'm completely engulfed in her warmth."]),							
								choose([" guides my tip"," guides my length"," lines up my length"])+choose([" to her lips."," against her entrance."," to her folds."])+choose([" She pushes back and completely engulfs me."," I pull her hips to me, and she takes every inch."," I pull her hips to me, and she yelps when its completely inside."," We move our hips at the same time, and they clap together as she takes my length."])								
							])
						}
					}
					
					Entry += choose([
						" She pumps her hips"+choose([" against me.",", taking every inch.",", pushing me deeper and deeper."]),
						choose([" I thrust myself into her as she "," I pound her as she "," I start thrusting into her faster and harder. I give her "+DescWord(unit(s[2]),"butt",75)+"cheek a spank, and she "])+
							choose(["moans loudly."," throws her head back in pleasure.","begs for more.","cries out for more.","pushes back against me."]),
						choose([" We move in unison"])+choose([" as I tightly grip her "+DescWord(unit(s[2]),"butt",100)+"hips.",", both desperate for more."])
					
					])
					Entry += choose(["",choose([
						" Soon we are both "+choose(["covered","soaked","dripping","slick","drenched"])+" in sweat.",
						" Soon she's panting heavily.",
						" Soon her breath is ragged.",
						" Soon my legs are on fire as I keep making long strokes into her.",
						" Soon I'm ready to burst as I keep making long strokes into her.",
						" I rub my thumb against her rim, and she tightens around me.",
						" We make love, losing ourselves to the pleasure.",
						])
					])
					Entry += choose([ 
						choose([" After a few minutes,"," After a few more moments"," After a while"," Not before long,"])+" she's a quivering mess, and I feel her gush around me as I "+choose(["cum.",choose(["cum","shoot my seed","shoot my warm seed","shoot my hot seed"])+choose([" deep inside!"," inside her!"," until she's full to the brim!"]) ]),
						choose([" We keep going at it until I lose control and start filling her. "," She tells me she loves me, and her words send me over the edge. "])+choose(["I slip a hand around towards her clit and rub until she cums!","My thrusting doesn't stop until she climaxes as well.","Soon she gasps "+choose(["","and tightens like a vice ","and tightens","and squeezes me "])+"as she finally finishes."," She stops pumping her hips and braces against me. Her leg starts to quiver as she finishes."]),
						choose([" I whisper into her ear that I love her, and my words send her over the edge! "," She suddenly gasps and "+choose([" tightens like a vice "," tightens "," squeezes me "])+" as she climaxes. "])+choose(["I keep thrusting until I cum inside.","She keeps moving her hips until I start filling her.","She pulls away and kneels to start sucking me, determined to finish the job."+choose([" Her tongue is too much to handle, and she shoves me down her throat as I start cumming."," When I finish, she swallows every drop."])]),
						choose([" I follow her when she falls to her hands and knees, and again thrust"," When her legs give out, we both fall to the GROUND, and again I thrust"])+choose([" "," myself "])+choose(["","repeatedly "])+choose(["","into her","into her until she's helplessly quivering"])+choose([".",". As an orgasm wracks her body, I push myself in deep to cum inside."]),
						choose([" I grab the back of her legs, and lift them above our heads"," I tightly grip the back of her legs. I lift them above our heads, folding her in half"])+choose([" as I thrust",". She squirms in my grip as I thrust"])+choose([" "," myself "])+choose(["","repeatedly ","deeper ","even deeper "])+choose([".","into her folded form.","into her depths.","into her.","until the GROUND is soaked below us.","until she's helplessly quivering."])+choose([" As an orgasm wracks her body, I bite down on the nape of her neck. She cries out as I cum.",". I press her tightly against me before blowing my load, and soon her legs quiver in the air as her juices and my cum pool below us.",". I lock my arms together before blowing my load. Her body convulses when she reaches her limit."])
						//make a scene where he grabs both of her arms.
					])
				}//*/
				//---
				if(s[12] == "doggy"){
					if(s[11] == "talk" || s[11] == "again"){
						Entry += choose([
							choose([" Without a word, she turns and "," Without replying, she turns and "])+choose(["dips","drops","gets","goes"]),
							" She "+choose(["","","quietly ","softly ","eagerly "])+choose(["tells me ","says "])+choose(["she wants it from behind","she wants it hard","she wants me to pound her","she wants me to mount her","she wants to be mounted"])+choose([". She turns and "," as she turns and "," as she turns away. I watch as she ",", as she spins around and "])+choose(["dips","drops","gets","goes"])
						])
					}
					if(s[11] == "behind"){
						if(s[14] == "start"){
							Entry += " Before I can go further, she slips away to "+choose(["dip","drop","get","go"])
						}else if(s[14] == "normal" || s[14] == "end"){
							Entry += choose([" Once I have her warmed up, she slips away to "," She's eager for more and slips away to "," I watch her "])+choose(["dip","drop","get","go"])
						}else{
							Entry += 
							choose([" Before I can go further, she"," Before I can make a move, she"," She suddenly"," She giggles as she"])+
							choose([
								" takes the initiative by pushing away from me. She looks back as she "+choose(["dips","drops","gets","goes"]),
								" takes the initiative by pushing away from me. Her body jiggles as she "+choose(["dips","drops","gets","goes"]),
								" pushes away from me. Her body jiggles as she "+choose(["dips","drops","gets","goes"]),
								" pushes away from me to "+choose(["dip","drop","get","go"]),
								" slips away, and "+choose(["dips","drops","gets","goes"]),
								" pushes me back, and "+choose(["dips","drops","gets","goes"]),
								" takes the initiative by pushing away from me to "+choose(["dip","drop","get","go"]),
								
							])
						}
					}
					
					if(Math.random()<.85){
						Entry += choose([" down on all fours"," down to the ground on all fours"," to her hands and knees on the ground"," on her hands and knees"," to her knees. She leans forward to rest on her elbows"])+
						". I "+choose(["follow","kneel","join her"])+choose([" and"," and"," and grab her hips. She braces as I"," and grab her hips to "])+choose([" take her from behind."," start pounding from behind."," start pounding her."])
					}else{
						Entry += 
						choose([" down on all fours"," down to the ground on all fours"," to her hands and knees on the ground"," to her hands and knees"," to her knees. She leans forward to rest on her elbows"])+
						choose([".",".",".",".",".","."," looking up at me expectantly.",". Her eyes silently plead for me!"," as she arches her back.",", waiting.",
							"."+choose([" She lays her head on the ground while keeping her "," Her head stays low while she keeps her "," With her head to the ground she keeps her "])+choose(["cheeks","rear","butt","ass"])+choose([" up."," in the air."," raised."," raised towards me!"]),
							choose([", spreading her legs wider",", arching her back"])+choose([".","."," as she glances back with a grin."," as she glances back."," as she looks up at me expectantly."," as she waits."])
						])
						
						if(unit(s[2]).Tags[0] == "Catgirl" && Math.random()<.25){
							Entry += choose([" Her"+choose([""," silky"," soft"])+" tail "+choose(["lifts up.","raises straight up, revealing her dripping "+choose(["sex.","lips.","nethers."]),"lifts, swaying gently in the air."])," She meows loudly."," She starts to purr."])
						}else if(unit(s[2]).Tags[0] == "Foxgirl" && Math.random()<.25){
							Entry += choose([" Her"+choose([""," lush"," fluffy"])+" tail "+choose(["shifts to the side.","swishes back and forth.","raises straight up, revealing her dripping "+choose(["sex.","lips.","nethers."]),"flips up, curling around towards her back."])," She makes a loud yip for me to come, and her tail shifts to the side."])
						}else if(Math.random()<.25){
							Entry += choose([" Her glistening sex drives me forward.",
							" Her juices drip down to the ground as she waits for me.",
							" She"+choose([""," slowly"," seductively"," hypnotically"])+" sways her rear side to side"+choose(["."," eager to be pleased."," ready for what's to come."," desperate for more."])])
						}
						
						
						Entry += 
						choose([" I drop"," I get down"," I get on my knees"," I stoop"," I kneel"+choose([""," down"])])+choose([" behind her"," between her legs"])+
						choose([
							choose([", and "," then "," to "," so I can "])+choose(["slip","slide","sink","plunge"])+choose([" "," myself "])+choose(["into her.","into her folds.","inside.","inside her.","deep inside her."]),
							choose([", and "," then "," to "," so I can "])+"start rubbing my member against her"+choose(["",""," entrance"," folds"," wet lips"," slit"])+
								choose([
									" before sliding inside."," before sticking it inside."
									,choose([". Between heavy breaths, she",". In a soft voice she",". With a hint of frusteration in her voice, she",". She"," while she",". She sounds desperate when she"," Her lips drip more as she"," Her body trembles as she"])+choose([" tells me to stick it in already."," begs for me to fuck her already."," tells me to stop teasing and give it to her already."])+choose([" When I do, she moans loudly."," She gasps when I do."," I feel her jolt when I do!"," Her body shudders when I do!"])
								])
							
							,choose([", and when I",". As I",])+choose([" position myself against her "," stick the tip inside her "])+choose([""," folds"," entrance"," lips"," slit"])+choose([", she suddenly pushes back, taking me entirely.",", she pushes against me until I slide inside.",", she pushes back, sinking me into her."])
						])
					}		
					
					Entry += choose([
						" She pumps her hips"+choose([" against me.",", taking my full length each time.",", pushing me deeper and deeper."]),
						choose([" I thrust myself into her as she "," I keep giving it to her as she "," I ride her as she "," I start thrusting into her faster and harder. I give her "+DescWord(unit(s[2]),"butt",75)+"cheek a spank, and she "])+
							choose(["moans loudly."," throws her head back in pleasure.","begs for more.","cries out for more.","pushes back against me.","braces her arms."]),
						choose([" We move in unison"])+choose([" as I tightly grip her "+DescWord(unit(s[2]),"butt",100)+"hips.",", both desperate for more."])
					
					])
					Entry += choose(["",choose([
						" Soon we are both "+choose(["covered","soaked","dripping","slick","drenched"])+" in sweat.",
						" Soon she's panting heavily.",
						" Soon her breath is ragged.",
						" Soon I'm ready to burst as I keep making long strokes into her.",
						" Soon she's panting and covered in sweat."+choose([""," Her arms give out and "+choose(["","her upper body lies limp."])+" I start thrusting harder, pressing her into the ground."]),
						" I rub my thumb against the rim of her anus, and feel her tighten around me.",
						" We make love, losing ourselves to the pleasure.",
						])
					])
					Entry += choose([
						
						choose([" After a few minutes,"," After a few more moments"," After a while"," Not before long,"])+" she's a quivering mess, and I feel her gush around me as I "+choose(["cum.",choose(["cum","shoot my seed","shoot my warm seed","shoot my hot seed"])+choose([" deep inside!"," inside her!"," until she's full to the brim!"]) ]),
						choose([" We keep going at it until I lose control and start filling her. "," She tells me she loves me, and her words send me over the edge. "])+choose(["I slip a hand around towards her clit and rub until she cums!","My thrusting doesn't stop until she climaxes as well.","Soon she gasps "+choose(["","and tightens like a vice ","and tightens","and squeezes me "])+"as she finally finishes."," She stops pumping her hips and presses against me. Her leg starts to quiver as she finishes."]),
						choose([" I whisper into her ear that I love her, and my words send her over the edge! "," She suddenly gasps and "+choose([" tightens like a vice "," tightens "," squeezes me "])+" as she climaxes. "])+choose(["I keep thrusting until I cum inside.","She keeps moving her hips until I start filling her.","She pulls away and turns around to start sucking me, determined to finish the job."+choose([" Her tongue is too much to handle, and she shoves me down her throat as I start cumming."," When I finish, she swallows every drop."])]),
						choose([" When her legs give out, I join her prone form. I press the side of her head into the GROUND and start thrusting"," When her legs give out, I join her prone form. I hook two fingers into her mouth and start thrusting"," When her legs give out, I join her prone form, and again thrust"])+choose([" "," myself "])+choose(["","repeatedly ","roughly "])+choose(["into her","into her until she's helplessly quivering"])+choose([". As an orgasm wracks her body, I push myself in deep to cum inside.",". I hilt her before blowing my load, and she clenches down when she reaches her limit."])
						//make a scene where he grabs both of her arms.
					])
					if(Math.random() < .10){
						if(unit(s[2]).Tags[0] == "Catgirl" && Math.random()<.80){
							Entry += choose([" We both lie together afterwards for a short cat nap."," We lie together for a while. She wraps her tail around me and softly purrs."," We lie together for a while. She purrs as I rub her ears."," We lie together for a while as I listen to her purr contently."])
						}if(unit(s[2]).Tags[0] == "Batgirl" && Math.random()<.80){
							Entry += choose([" We both lie together afterwards. She blankets me with her wing."," We lie together for a while. She wraps me tightly in her wings."," We lie together for a while with her wings draped over me."])
						}else{
							Entry += choose([" We both lie together afterwards for a short nap."," We lie together for a while. She says she's glad she found me."," We lie together for a while as she rests her head on my chest."," We lie together for a while. I wrap her in my arms."])
						}
					}
					//*/
					/*"[and [slip/slide] myself inside/and slide ["",it]into her./and [slip/sink] inside her./ and start rubbing my member against her entrance[ before sliding inside/ before sticking it inside/. [She looks back [frustrated/with desperate eyes] and tells me to stick it in already!/Between heavy breaths, she [pleads]] [I feel her [jolt/shudder] when I do./When I position myself at her entrance[she suddenly pushes back, taking me entirely/she pushes against me until I slide in./ she pushes back and I sink inside her.]]/]]"//*/
					
				}//*/
				Entrys.push(Entry)
				Entry = "";
			}
			//LONG ENTRYS END ####################################################################################################
			if(Entrys.length == 0 || Math.random()<.1){
				Entrys.push("I grab SUB by the hips, and thrust until we both finish!")
				Entrys.push("CSUB and I fuck until we're both exhausted.")
			}
			if(unit(s[2]).Tags[0] == "Mousegirl"){
				Entrys = [
				choose(["I ask SUB if she wants to have some fun","I ask SUB if she's ready for some fun","I ask SUB if she can handle any more fun"])+
				choose([", and she eagerly nods. She giggles as I lift her by the tail.",", and she leaps into my arms.",", and she quickly scrambles up my leg."])+
				choose([" I hold her like a toy, and rub her against my shaft until she's wet. I rest her on the tip, and she tenses up."," With one hand I hold her above my hard cock. She looks worried as I lower her down."," Her small hands pinch my chest as she climbs down towards my member."])+
				choose([" She grimaces while taking me, but doesn't give up."," She opens her legs wide, and starts taking my length."," She squirms while taking more and more of my length."])+
				choose([" Her voice squeaks once she's completely impaled on my shaft."," She can only squeak once I'm completely inside."," She's ridiculously stretched out once I'm completely inside."," Her belly bulges out with every inch of me, and she rubs it in triumph."," She's completely suspended on my shaft after reaching its base. "," We both gasp once I'm inside her. "])+
				choose([" While giggling, she admits she's getting addicted to my cock. I caress her cheek with one hand, and grab her middle with the other."," While grinning, she asks if I'm impressed. I nod as I wrap my fingers around her middle."," We both breath a sigh of relief when she doesn't break. She gulps loudly when I grab her by the waist."," I grab her by the middle, and she nods."])+
				choose([" I pull out slowly, then thrust back into her. She weezes, but motions for me to continue. I keep thrusting"," I slowly pull her almost off of me, before slamming her back down to the hilt. She's stunned for a moment, but then tells me it feels fantastic! I keep giving it to her"," Her voice cracks when I start using her like a toy. I keep thrusting her onto me"])+
				choose([" as her stomach bulges out again and again."," as she moans loudly, her voice echoing off of the cave walls.",", and she cries out in pleasure as I use her.",", and she demands I give it to her faster. I pick up the pace, and her body goes limp. She moans while her arms flail around, but doesn't tell me to stop."])+
				choose([" She tightens even more when she cums"," She whimpers as she gushes on my shaft"," Her eyes roll back as she cums"])+
				choose([", and her belly bloats out when my seed reaches her womb.",". I hold her down when I finish, her belly bloats out from my seed.",", and her belly bloats out when I finish.",", and my seed fills her completely."])+
				choose([""],[" I pull her free and watch her leave a sticky trail as she sloshes around."," When I pull her free from my shaft, she squeezes her thighs together to keep every last drop of me inside."," She pokes and prods her full belly to feel it slosh around."," She covers her face as cum starts leaking out of her mouth and nose."," She laughs after coughing up a splurt of cum."," She coughs as cum starts dribbling down her nose."," She laughs when cum starts dribbling down her nose"," When cum starts leaking from her mouth, I seal it with my thumb and watch her belly continue to expand."])
				]
			} 
			if(unit(0).CPle>=unit(0).MPle && (unit(s[2]).arms || unit(s[2]).legs)){
				if(unit(s[2]).willing){
					Entrys.push(choose(["CSUB and I make love","CSUB and I fuck"])+
					choose([" until we're both exhausted."," until we're both covered in sweat."])+
					choose([" When we finish, my stomach grumbles loudly."," She cries out when we finish, but my stomach growls even louder."])+
					choose(["",choose([" She looks excited"," She tells me shes ready"," She pokes my hungry gut and giggles"," She rests her hand on my belly"])+
						choose([" when she hears how hungry I am."," when it makes more noise."," when I lick my lips at her."])]))
				}else{
					Entrys.push(choose(["CSUB and I make love","CSUB and I fuck"])+
					choose([" until we're both exhausted."," until we're both dripping wet."])+
					choose([" When we finish, my stomach grumbles loudly."," She cries out when we finish, but my stomach growls even louder."])+
					choose(["",choose([" She bites her lip"," She looks worried"," She looks away nervously"," She gulps loudly"])+
						choose([" when she hears how hungry I am."," when it makes more noises."," when I tell her I'm starving."])]))
				}
			}
			if(Entrys.length == 0){
				Entrys.push("I make love to SUB.")
			}
		}else if(s[1]==0 && s[2] < 100 && map[party.y][party.x].hostile){
		// HERO GOOD HOSTILE
			Entrys.push("I grab SUB by the hips, and thrust until we both cum!")
		}else if(s[1]==0 && s[2] >=99 && !map[party.y][party.x].hostile){
		//TODO:       _H F P
		// HERO FOOD PEACE
		
			if(s[3] == 1){//FUCK
				if(s[5]=="Indoors"){
					Entrys.push("I gently push SUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","Without a word, I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture.")
				}
				if(s[5]=="Forest" && (map[party.y][party.x].units[s[2]-100].legs)){
					Entrys.push("I approach SUB while she's leaning against a large tree. She bites her lip as I lift her leg. She gives me a nod and I plunge myself deep inside her! She moans as she's fucked in the middle of the forest!")
					if(unit(s[2]).willing){
						Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her clit. She grinds her thighs together as they become soaked. Her legs buckle, and she drops onto the grass. I straddle her legs and start to pound her from behind! She moans for more, and I don't stop until she shudders under me. As we both lie in the grass afterward, she says I can eat her next time if I want...")
					}
				}
				if(unit(s[2].legs)){
				Entrys.push("I start kissing SUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me, she leans in for another kiss as we both finish!")
				Entrys.push("I grab SUB by the hips and start thrusting! She's timid at first, but soon she's crying for more!")
				Entrys.push("I turn SUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We mate until she cries out in bliss!")
				}
				
				if(unit([s[2]]).arms && unit([s[2]]).legs && unit([s[2]]).Tags[0] != "Froggirl"){
					Entrys.push(
						choose(["While SUB rests on the GROUND, I join her. She smiles as I","I pull SUB to the ground, and","I join SUB on the GROUND, and","I guide SUB down to the GROUND with me. Her breathing quickens as I","I join SUB while she's lying on the GROUND. Her breathing quickens as I"])+
						choose([" start running my hand through her hair. I scratch behind her ears"," start nibbling on her neck. Once she's covered in goosebumps I pull away"," rest my hand on her thigh. I give it a squeeze"," caress her cheek. I wrap an arm around her"," wrap an arm around her. I kiss her cheek"])+
						choose([
							choose([" and ask if I should stop."," and ask if she wants me to stop."," and tell her we can stop if she wants."])+
							choose([" She shushes me and says to stick it in already."," She blushes, and shakes her head."," She eagerly shakes her head."," She shakes her head before pulling me into kiss."," She responds with a kiss."," She thinks for a moment before slowly shaking her head."," She blushes and pulls me into a kiss."])
						,
							choose([" and ask if we can have some fun."," and ask if she wants to continue."," and ask if she wants to keep going."," and ask if she's ready for some fun."," and ask if she wants to go further."])+
							choose([" She shushes me and says to stick it in already."," She blushes, and pulls me into a kiss."," She eagerly nods."," She nods before pulling me into kiss."," She responds with a kiss."," She pauses for a moment before pulling me into a kiss."," She blushes as she asks what I want to do."," She blushes and pulls me into a kiss."," She blushes and asks what I have in mind."])
						,
						choose([" and brush my lips against hers. Her hand slips down between my legs to grope my length. ",", and she pulls me closer. She whispers into my ear that she wants me.",", and she roughly grabs my hair to pull me into a kiss.",", and she gives me a kiss."," and try to talk. She shushes me, and starts stroking my length. She blushes, but doesn't stop until its fully erect."])
						])+
						choose([
							choose([" I frot against her until she's wet,"])+
							choose([" then plunge inside.",
								choose([" but she winces when I thrust into her."," but she grimaces when I push deeper."])+
								choose([""," I pull back and see blood along my shaft."," I look between us and see smears of blood."])+
								choose([" When I start to rise, she grabs my hips. She pleads for me not to stop yet."," She grabs my hips when I start to rise, and asks me for another go."])+
								choose([" I move slower this time as she grips my shoulders."," I try moving slower the second time, but she roughly pulls my hips to hers."])+
								choose([" She lets out a sigh when my full length is finally inside her."," She looks down when my full length is finally inside her."," She's breathing heavy by the time my full length is inside her."])
							])+
							choose([" She guides my hand to her "+DescWord(unit(s[2]),"breasts",90)+"breast, and "," She caresses my face, and "," She gives me a grin, and "," She grins as she "," She stifles a giggle, and "])+
							choose(["tells me to fuck her properly.","tells me to give it to her.","tells me she's ready.","whispers that I just took her first time.","admits its her first time."])
							,
						" When she straddles me, my length starts to throb under her. Our tongues meet as she guides my member into her. "," I pull her onto me, and she starts grinding against my length until its throbbing. She arches her back as I slowly slide into her. "," She rolls onto me, and spreads her legs. I gently slide into her and she pauses to feel herself with me inside. She gives me a naughty look and tells me she's ready."," She spreads herself with both hands, and I start frotting against her. Once she's ready, she guides me into her. "," When she straddles me, my length starts to throb against her. I caress one of her "+DescWord(unit(s[2]),"breasts",90)+"breasts as she guides me into her."])+
						choose([" She moans as I start thrusting"," She hugs me close when I start thrusting"," She gasps as I start thrusting"," She starts to move her hips, taking my full length each time"])
					)//CONTINUES BELOW 
						if(unit(s[2]).willing && Math.random()<.2){
							Entrys[Entrys.length-1] += choose([
								". Her legs wrap around me as we finish together. She whispers into my ear that she'd be fine as either my mate or my meal.",
								", and soon we both cum. She pulls my head down to her chest until my lips reach her nipple. As I gently suck on it, she tells me I can taste her whenever I want.",
								", and soon she's a quivering mess. As she cums, she blurts out that she wants me to eat her.",
								choose([". We keep humping until I lose control and cum first. ",". With her lips to my ear, she whispers that she loves me. Her words send me over the edge. "])+choose(["I slip a hand between us, and rub her clit until she arches her back in pleasure.","My thrusting doesn't stop until she finishes as well.","Soon she gasps and"+choose([" tightens like a vice "," tightens "," squeezes me "])+"as she finally finishes."," While I keep thrusting into her, my stomach growls. The sound somehow sends her over the edge!"," A moment later, her eyes roll back as she finishes."," A moment later she braces against me with her quivering legs."]),
								choose([". While holding her close, I whisper into her ear that I love her. She moans as my words send her over the edge! ",". While she humps her hips, my stomach growls. The sound somehow sends her over the edge!",". Her eyes suddenly roll back as I feel her gush against me. ",". She suddenly gasps and "+choose([" tightens like a vice "," tightens "," squeezes me "])+" as she climaxes. "])+choose(["I keep thrusting until I cum inside.","She keeps moving her hips until I start filling her.","She pulls away to wrap her lips around me. I caress her cheek as she starts sucking."+choose([" Her tongue is too much to handle, and she shoves me down her throat as I start cumming."," When I finish, she swallows every drop."])+" As she pulls me out of her mouth, she tells me I should taste her next time."])
							])
						}else{
							Entrys[Entrys.length-1] += choose([
								". Her legs wrap around me as we finish together.",
								", and soon we both cum.",
								", and soon she's a quivering mess. I feel her tighten around me as I cum!",
								choose([". We keep humping until I lose control and cum first. ",". With her lips to my ear, she whispers that she loves me. Her words send me over the edge. "])+choose(["I slip a hand between us, and rub her clit until she arches her back in pleasure.","My thrusting doesn't stop until she finishes as well.","Soon she gasps and"+choose([" tightens like a vice "," tightens "," squeezes me "])+"as she finally finishes."," A moment later, her eyes roll back as she finishes."," A moment later she braces against me with her quivering legs."]),
								choose([". While holding her close, I whisper into her ear that I love her. She moans as my words send her over the edge! ",". Her eyes suddenly roll back as I feel her gush against me. ",". She suddenly gasps and "+choose([" tightens like a vice "," tightens "," squeezes me "])+" as she climaxes. "])+choose(["I keep thrusting until I cum inside.","She keeps moving her hips until I start filling her.","She pulls away to wrap her lips around me. I caress her cheek as she starts sucking."+choose([" Her tongue is too much to handle, and she shoves me down her throat as I start cumming."," When I finish, she swallows every drop."])])
							])
						}
				}
				
				if(unit(s[1]).willing){
					Entrys.push("I approach SUB, and she bows her head submissively. She tells me I can eat her as I lift her chin. Her eyes grow wide as I pull her into a kiss instead. She turns around and starts frotting against me. I thrust into her and she tightens around me. We mate until she cries out in bliss!")
				}
				if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && unit(s[2]).CPle > 0){
					Entrys = []
					if(unit(s[2]).Positive){
						Entrys.push("I bend SUB over the kitchen counter and start rubbing between her legs. She stands on her tiptoes and tells me to put it in. We make a mess out of her kitchen!")
					}else if(unit(s[2]).Funny){
						Entrys.push("I ask SUB if I can try using her paints. She's excited to see someone else interested in art and sets up a fresh canvas for me. I ask her to lay on the bed so I can draw her. She almost refuses but ultimately strikes a sexy pose on her bed. I paint for a half hour before showing her my work. Its a rough outline of her and I making love on her bed. She blushes and says its not bad for a first try. I ask if I can get more intimate with my subject matter. She smiles and assumes the position in the painting and we go at it until she gushes against my member. I pull out and try my hand at painting again and coat her breasts. CSUB laughs and says my painting skills have improved greatly!")
					}else if(unit(s[2]).Slutty){
						Entrys.push("CSUB and I finish a bottle of wine and start making out, soon she's riding my cock as I fondle her chest. She pulls me into a hug before we both cum!")
					}else if(unit(s[2]).Hungry){
						Entrys.push("From behind, I lift SUB onto the table and take two meaty handfuls of her large haunches. She rests on her elbows and tells me to pound her. I thrust until we both cum!")
					}else if(unit(s[2]).Negative && party.units.length <= 2){
						Entrys.push("I straddle SUB as she lies on her back. With one hand she spreads her lips and I slide myself inside. She moans into a pillow as I pound her from behind!")
					}else if(unit(s[2]).Negative){
						Entrys.push("I give SUB a back massage and slip my hands around until I find her nipples. She moans as I tease and begs me to fuck her. She moans into her pillow as I pound her from behind!")
					}else{
						if(unit(s[2]).willing){
							if(Math.random()<.90){
								Entrys.push("I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I thrust myself inside and pound her until we both cum!")
							}else{
								Entrys.push("I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I get a different idea however, and ram myself into her other hole! She yelps at the intrusion and looks back in shock. I continue to pump her asshole as she wiggles and writhes under me. she starts to scream out, first in pain, but then in pleasure. CSUBs soon crying for me to fuck her harder, and a few deep thrusts later she's cumming as I fill her behind!")
							}
						}else{
						Entrys.push("I gently push SUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","Without a word, I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture.")
						}
						//---long
						Entrys.push(
							choose(["I pull SUB onto the plush bed","I pull SUB onto the couch","I take SUB to the bed. Straddling her, I lift her chin","I lift SUB onto the table. I join her","I rest on the couch, and SUB joins. I look up at her","I fall back onto the bed, and SUB straddles me. I look at her","I playfully push SUB onto the bed. She sits up, and pulls me on top of her. I gaze down at her","I grab SUB by the hips and lift her onto the table. It creaks as I get on too. I straddle her","I grab SUB by the hips and throw her onto the bed. I straddle her"])+
							choose([
								choose([" and ask if I should stop."," and ask if she wants to stop."," and ask if she's scared."," and tell her we can stop if she wants."])+
								choose([" She tells me to shush and stick it in already."," She blushes, and shakes her head."," She eagerly shakes her head."," She shakes her head before giving me a kiss."," She responds with a kiss."," She thinks for a moment before slowly shaking her head."," She blushes and pulls me into a kiss."])
							,
								choose([" and ask if we can have some fun."," and ask if she's ready for some fun."," and ask if we can have some fun."])+
								choose([" She tells me to shush and stick it in already."," She blushes, and pulls me into a kiss."," She eagerly nods."," She nods before giving me a kiss."," She responds with a kiss."," She pauses for a moment before pulling me into a kiss."," She blushes as she asks what I want to do."," She blushes and pulls me into a kiss."," She blushes and asks what I have in mind."])
							//neck nibble
							])+
							choose([
								choose([" I frot against her until she sticks the tip in. I start off gentle,"," I frot against her until she's wet,"," I frot against her until she spreads her lips,"])+
								choose([choose([" then thrust inside."," then plunge inside."," then give it to her."]),
									choose([" but she winces when I thrust into her."," but she grimaces once I'm in."])+
									choose([""," I pull back and see blood along my shaft."," I look between us and see smears of blood."])+
									choose([" When I start to rise, she grabs my hips. She pleads for me not to stop yet."," She grabs my hips when I start to rise, and asks me for another go."])+
									choose([" I have her set the pace this time. Her back arches as she pulls my hips towards her."," I move slower this time as she grips my shoulders."," I try moving slower the second time, but she roughly pulls my hips to hers."])+
									choose([" She lets out a sigh when my full length is finally inside her."," She looks down when my full length is finally inside her."," She's breathing heavy by the time my full length is inside her."])
								])+
								choose([" With a grin, she "," She guides my hand to her "+DescWord(unit(s[2]),"breasts",90)+"breast, and "," She caresses my face, and "," She gives me a grin, and "," She looks around before getting closer and "," She smiles as she "," She stifles a giggle, and "])+
								choose(["tells me to fuck her properly.","tells me to be rough.","tells me she's ready for more.","says that I just took her first time.","confesses its her first time.","blurts out that she's a virgin."])
								,
							" Our tongues meet as she guides my member into her. "," She arches her back as I slowly slide into her. "," She spreads her legs and I gently slide into her. "," She spreads herself with both hands and I slide inside her. "," I caress one of her "+DescWord(unit(s[2]),"breasts",90)+"breasts as she guides me into her."])+
							choose([" She moans as I start thrusting"," She hugs me close when I start thrusting"," She gasps as I start thrusting"," She starts to move her hips, taking my full length each time"])+
							//choose([",])//BOOKMARK
							
							choose([
								". The furnature creaks loudly, threatening to give. Luckily it holds until we finish.",
								". The furnature wobbles under us the whole time. After finishing, we roll and accidentally fall to the floor.",
								". The furnature squeaks almost as loudly as she does. They both go silent after we finish.",
								". Her legs wrap around me as we finish.",
								". Her legs lock around me as we finish.",
								", and soon we both cum.",
								", and soon she's a quivering mess. I feel her tighten around me as I cum!",
								choose([". We keep humping until I lose control and cum first. ",". With her lips to my ear, she whispers that she loves me. Her words send me over the edge. "])+choose(["I slip a hand between us, and rub her clit until she arches her back in pleasure.","My thrusting doesn't stop until she finishes as well.","Soon she gasps and"+choose([" tightens like a vice "," tightens "," squeezes me "])+"as she finally finishes."," A moment later, she stops pumping her hips and braces against me. Her leg starts to quiver as she finishes."]),
								choose([". My lips brush against her ear while I whisper that I love her. She moans as my words send her over the edge! ",". She suddenly gasps and "+choose([" tightens like a vice "," tightens "," squeezes me "])+" as she climaxes. "])+choose(["I keep thrusting until I cum inside.","She keeps moving her hips until I start filling her.","She pulls away to wrap her lips around me. I caress her cheek as she starts sucking."+choose([" Her tongue is too much to handle, and she shoves me down her throat as I start cumming."," When I finish, she swallows every drop."])])
							])
						)
						//---
					}
				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					Entrys.push(
					choose(["I ask SUB how many inches she can take.","I stroke myself until I'm hard, and ask SUB if she thinks I'll fit.","While stroking myself, I ask SUB if she thinks she can take my full length."])+
					choose([" She says the fun part will be finding out, and I quickly scoop her up."," She doesn't say anything and runs towards me. I catch her when she leaps into my arms."," She bites her lip while sizing me up, then jumps into my arms."])+
					choose([" I hold her like a toy, and rub her against my shaft until she's wet. I rest her on the tip, and she tenses up."," With one hand I hold her above my hard cock. She looks worried as I lower her down."," Her small hands pinch my chest as she climbs down towards my member."])+
					choose([" She grimaces while taking me, but doesn't give up."," She opens her legs wide, and starts taking my length."," She squirms while taking more and more of my length."])+
					choose([" Her voice squeaks once she's completely impaled on my shaft."," She can only squeak once I'm completely inside."," She's completely stretched out once I'm completely inside."," Her belly bulges out with every inch of me, and she rubs it in triumph."," She's completely suspended on my shaft after reaching its base. "," We both gasp once I'm inside her. "])+
					choose([" While giggling, she confesses that this is her first time. I caress her cheek with one hand, and grab her middle with the other."," While grinning, she asks if I'm impressed. I nod as I wrap my fingers around her middle."," We both breath a sigh of relief when she doesn't break. She gulps loudly when I grab her by the waist."," I grab her by the middle, and she nods."])+
					choose([" I pull out slowly, then thrust back into her. She weezes, but motions for me to continue. I keep thrusting"," I slowly pull her almost off of me, before slamming her back down to the hilt. She's stunned for a moment, but then tells me it feels fantastic! I keep giving it to her"," Her voice cracks when I start using her like a toy. I keep thrusting her onto me"])+
					choose([" as her stomach bulges out again and again."," as she moans loudly, her voice echoing off of the cave walls.",", and she cries out in pleasure as I use her.",", and she demands I give it to her faster. I pick up the pace, and her body goes limp. She moans while her arms flail around, but doesn't tell me to stop."])+
					choose([" She tightens even more when she cums"," She whimpers as she gushes on my shaft"," Her eyes roll back as she cums"])+
					choose([", and her belly bloats out when my seed reaches her womb.",". I hold her down when I finish, her belly bloats out from my seed.",", and her belly bloats out when I finish.",", and my seed fills her completely."])+
					choose([""],[" I pull her free and watch her leave a sticky trail as she sloshes around."," When I pull her free from my shaft, she squeezes her thighs together to keep every last drop of me inside."," She pokes and prods her full belly to feel it slosh around."," She covers her face as cum starts leaking out of her mouth and nose."," She laughs after coughing up a splurt of cum."," She coughs as cum starts dribbling down her nose."," She laughs when cum starts dribbling down her nose"," When cum starts leaking from her mouth, I seal it with my thumb and watch her belly continue to expand."])
					)
				}
				if(unit(s[2]).Tags[0] == "Slimegirl"){
					Entry = "";
					Entrys.push(choose(["I approach SUB.","I talk in a soothing tone, and walk towards SUB.","I kneel before SUB, and don't move as she approaches."])+
						choose([" Arms form at her sides, and I pull her into an embrace. Her color changes hue, almost as if she was blushing!"," She opens her mouth and makes sounds that couldn't possibly be words. I kiss her cheek, and she smiles."])+
						choose([" I slowly start thrusting into her, and she holds me tight."," I gently slip a finger into SUB's nipple and start stirring her up. She squirms, and makes the strangest of noises. Her legs liquefy, and she pulls me to the ground. I start thrusting into the glob of her lower body, and she arches her back in pleasure."," Without aiming for any orifice, I thrust into SUB's body. She looks confused and quickly morphs with her nethers around my length. She holds me close as we start making love."])+
						choose([" When we finish, she pulls me into a kiss. Her lips have a great "+DescWord(unit(s[2]),"slime",100)+" taste to them.",
						" When we finish, my skin is tinted "+DescWord(unit(s[2]),"slime_color",100)+"!",
						" I latch onto her breast, and my mouth fills with her flavor. She starts to quiver, and soon gushes against me. The sensation sends me over the edge as well.",
						" She starts to tremble, and tightens against me. The sensation is too much and I cum inside her. My spunk floats around her translucent body before dissolving.",
						" When we finish, she melts into a quivering puddle. Thats not a metaphor, she's <i>literally</i> just a puddle!",
						" I lean in for a kiss, but her head splits into a pair of feet. I watch as her body reverses itself, and she starts to blow me. I dive between her spread legs, and lap up her "+DescWord(unit(s[2]),"slime",100)+" flavored juices until we both cum."
						]))
				}
				if(Entrys.length == 0){
					Entrys.push("CSUB and I lay on the GROUND and make love.")
				}
			}else{//FAIL
				if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
					Entrys.push("Hissing, SUB swipes a claw at me as I try to make a move.")
				}
				if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Mousegirl"){
					Entrys.push("I ask SUB if she's interested in a good time, but she says my cock would probably break her!")
				}
				Entrys.push("I try to make a move on SUB, but she's not in the mood.")

			}
		}else if(s[1]==0 && s[2] >=99 && map[party.y][party.x].hostile){
		//TODO:       _H F H
		// HERO FOOD HOSTILE
			if(s[3] == 1){//FUCK
				if(s[5]=="Indoors" && (map[party.y][party.x].units[s[2]-100].Tags[0] == "Wolfgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Froggirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl")){
						if(map[party.y][party.x].units[s[2]-100].CPle == 0){
							Entrys.push(choose([
								"I push SUB's back against OBJECTTALL. She hesitates before lifting her leg, revealing her wet lips. I fuck her against it until she cries out in pleasure!",
								"I bend SUB over the table and start pounding her from behind! She cries for more before we finish against the wooden furniture."])
							)
						}else{
							Entrys.push(
								choose(["I tackle SUB onto the plush bed","I tackle SUB onto the couch","I shove SUB onto the bed. Straddling her, I lift her chin","I push SUB onto the table. I join her","I grapple SUB and pull both of us onto a thick rug. I look up at her","I grapple SUB and pull both of us onto the couch. I look up at her","I grapple SUB and pull both of us onto the bed. I look at her","I push SUB onto the bed. I straddle her","I grab SUB by the hips and toss her onto the couch. I straddle her","I grab SUB by the hips and lay her onto the table. I straddle her","I grab SUB by the hips and toss her onto the bed. I straddle her"])+
								choose([
									choose([" and ask if she really wants to hurt me."," and ask if she really wants to fight."," and ask if we really have to keep fighting."," and ask if we really need to settle this with violence."])+
									choose([" She tells me to shush and stick it in already."," She bites her lip before shaking her head."," She timidly shakes her head."," She shakes her head before giving me a kiss."," She responds with a kiss."," She thinks for a moment before slowly shaking her head."," She blushes and pulls me into a kiss."])
								,
									choose([" and ask if we can have some fun instead of hurting each other."," and ask if she's ready to stop fighting."," and ask if we can try something less violent."])+
									choose([" She tells me to shush and stick it in already."," She bites her lip before nodding."," She timidly nods."," She nods before giving me a kiss."," She responds with a kiss."," She thinks for a moment before slowly nodding her head."," She blushes and asks what I'd rather do."," She blushes and pulls me into a kiss."," She blushes and asks what I have in mind."])
								//neck nibble
								])+
								choose([
									choose([" I frot against her until guides me deeper into her folds. I start off gentle,"," I frot against her until she's wet,"," I frot against her until she spreads her lips,"])+
									choose([choose([" then thrust inside."," then plunge inside."," then give it to her."]),
										choose([" but she winces when I thrust into her."," but she grimaces once I'm in."])+
										choose([""," I pull back and see blood along my shaft."," I look between us and see smears of blood."])+
										choose([" When I start to rise, she grabs my hips. She pleads for me not to stop yet."," She grabs my hips when I start to rise, and asks me for another go."])+
										choose([" I have her set the pace this time. Her back arches as she pulls my hips towards her."," I move slower this time as she grips my shoulders."," I try moving slower the second time, but she roughly pulls my hips to hers."])+
										choose([" She lets out a sigh when my full length is finally inside her."," She looks down when my full length is finally inside her."," She's breathing heavy by the time my full length is inside her."])
									])+
									choose([" With a grin, she "," She guides my hand to her "+DescWord(unit(s[2]),"breasts",90)+"breast, and "," She caresses my face, and "," She gives me a grin, and "," She looks around before getting closer and "," She smiles as she "," She stifles a giggle, and "])+
									choose(["tells me to fuck her properly.","tells me to be rough.","tells me she's ready for more.","says that I just took her first time.","confesses its her first time.","blurts out that she's a virgin."])
									,
								" Our tongues meet as she guides my member into her. "," She arches her back as I slowly slide into her. "," She spreads her legs and I gently slide into her. "," She spreads herself with both hands and I slide inside her. "," I caress one of her "+DescWord(unit(s[2]),"breasts",90)+"breasts as she guides me into her."])+
								choose([" She moans as I start thrusting"," She hugs me close when I start thrusting"," She gasps as I start thrusting"," She starts to move her hips, taking my full length each time"])+
								//choose([",])//BOOKMARK
								
								choose([
									". The furnature creaks loudly, threatening to give. Luckily it holds until we finish.",
									". The furnature wobbles under us the whole time. After finishing, we roll and accidentally fall to the floor.",
									". The furnature squeaks almost as loudly as she does. They both go silent after we finish.",
									". Her legs wrap around me as we finish.",
									". Her legs lock around me as we finish.",
									", and soon we both cum.",
									", and soon she's a quivering mess. I feel her tighten around me as I cum!",
									choose([". We keep humping until I lose control and cum first. ",". With her lips to my ear, she whispers that she loves me. Her words send me over the edge. "])+choose(["I slip a hand between us, and rub her clit until she arches her back in pleasure.","My thrusting doesn't stop until she finishes as well.","Soon she gasps and"+choose([" tightens like a vice "," tightens "," squeezes me "])+"as she finally finishes."," A moment later, she stops pumping her hips and braces against me. Her leg starts to quiver as she finishes."]),
									choose([". My lips brush against her ear while I whisper that I love her. She moans as my words send her over the edge! ",". She suddenly gasps and "+choose([" tightens like a vice "," tightens "," squeezes me "])+" as she climaxes. "])+choose(["I keep thrusting until I cum inside.","She keeps moving her hips until I start filling her.","She pulls away to wrap her lips around me. I caress her cheek as she starts sucking."+choose([" Her tongue is too much to handle, and she shoves me down her throat as I start cumming."," When I finish, she swallows every drop."])])
								])
							)
						}
				}
				if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.15){
					Entrys.push("I call SUB a naughty kitty. She tells me to shut up and fuck her! My hands wrap around her waist and I lift her over my member. She purrs as I slowly lower her down. Once I'm fully in her, she wraps tail around me and starts moving her hips. She bounces on my cock as I thrust into her! Soon we are both covered in sweat as we cum together!")
					Entrys.push("I start caressing SUB's furry ears. I watch as all the anger drains from her face at my touch, I have definitly found her weak spot! She moves closer to rest her head against my chest, but looks down in surprise when she bumps my erection. She makes a naughty grin as she gets an idea. CSUB lowers herself to my member and starts to blow me while I continue to stimulate her with my massage. She gets off just from her ears being rubbed before her blowjob makes me cum!")
					
				}
				if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Wolfgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl" && Math.random()<.25){
					Entrys.push("I lift SUB's tail and thrust myself in deep from behind. She looks bewildered at first, but after a moment her body starts moving with mine. Soon I firmly grip both of her hips and fill her as she cries out in ecstasy!")
				}
				if(unit(s[2]).Tags[0] == "Slimegirl"){
					Entry = "";
					Entry += choose([])

					Entry = "";
					Entrys.push("I fuck SUB. When we finish, she pulls me into a kiss. Her lips have a great "+DescWord(unit(s[2]),"slime",100)+" taste to them.")
				}
				if((map[party.y][party.x].units[s[2]-100].Tags[0] == "Wolfgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Froggirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl") && map[party.y][party.x].units[s[2]-100].CPle > 0 && s[5] != "Indoors"){
					//Has Legs
					Entrys.push(
						choose(["I tackle SUB","I tackle SUB to the GROUND","I tackle SUB to the GROUND. I look at her","I grapple SUB and pull both of us to the GROUND. I look at her","I pull SUB down to the GROUND with me","I push SUB to the GROUND. Straddling her, I lift her chin","I push SUB to the GROUND. I straddle her"])+
						choose([
							choose([" and ask if she really wants to hurt me."," and ask if she really wants to fight."," and ask if we really have to keep fighting."," and ask if we really need to settle this with violence."])+
							choose([" She tells me to shush and stick it in already."," She timidly shakes her head."," She shakes her head before giving me a kiss."," She responds with a kiss."," She thinks for a moment before slowly shaking her head."," She blushes and pulls me into a kiss."])
						,
							choose([" and ask if we can have some fun instead of hurting each other."," and ask if she's ready to stop fighting."," and ask if we can try something less violent."])+
							choose([" She tells me to shush and stick it in already."," She timidly nods her head."," She nods before giving me a kiss."," She responds with a kiss."," She thinks for a moment before slowly nodding her head."," She blushes and cocks her eyebrow."," She blushes and pulls me into a kiss."," She blushes and asks what I have in mind."])
						//neck nibble
						])+
						choose([
							choose([" I frot against her until she's wet,"])+
							choose([" then plunge inside.",
								choose([" but she winces when I thrust into her."," but she grimaces when I push deeper."])+
								choose([""," I pull back and see blood along my shaft."," I look between us and see smears of blood."])+
								choose([" When I start to rise, she grabs my hips. She pleads for me not to stop yet."," She grabs my hips when I start to rise, and asks me for another go."])+
								choose([" I move slower this time as she grips my shoulders."," I try moving slower the second time, but she roughly pulls my hips to hers."])+
								choose([" She lets out a sigh when my full length is finally inside her."," She looks down when my full length is finally inside her."," She's breathing heavy by the time my full length is inside her."])
							])+
							choose([" She guides my hand to her "+DescWord(unit(s[2]),"breasts",90)+"breast, and "," She caresses my face, and "," She gives me a grin, and "," She smiles as she "," She stifles a giggle, and "])+
							choose(["tells me to fuck her properly.","tells me to give it to her.","tells me she's ready.","whispers that I just took her first time.","admits its her first time."])
							,
						" Our tongues meet as she guides my member into her. "," She arches her back as I slowly slide into her. "," She spreads her legs and I gently slide into her. "," She spreads herself with both hands and I slide inside her. "," I caress one of her "+DescWord(unit(s[2]),"breasts",90)+"breasts as she guides me into her."])+
						choose([" She moans as I start thrusting"," She hugs me close when I start thrusting"," She gasps as I start thrusting"," She starts to move her hips, taking my full length each time"])
					)//CONTINUES BELOW 
						if(unit(s[2]).willing && Math.random()<.2){
							Entrys[Entrys.length-1] += choose([
								". Her legs wrap around me as we finish together. She whispers into my ear that she'd be fine as either my mate or my meal.",
								", and soon we both cum. She pulls my head down to her chest until my lips reach her nipple. As I gently suck on it, she tells me I can taste her whenever I want.",
								", and soon she's a quivering mess. As she cums, she blurts out that she wants me to eat her.",
								choose([". We keep humping until I lose control and cum first. ",". With her lips to my ear, she whispers that she loves me. Her words send me over the edge. "])+choose(["I slip a hand between us, and rub her clit until she arches her back in pleasure.","My thrusting doesn't stop until she finishes as well.","Soon she gasps and"+choose([" tightens like a vice "," tightens "," squeezes me "])+"as she finally finishes."," While I keep thrusting into her, my stomach growls. The sound somehow sends her over the edge!"," A moment later, her eyes roll back as she finishes."," A moment later she braces against me with her quivering legs."]),
								choose([". While holding her close, I whisper into her ear that I love her. She moans as my words send her over the edge! ",". While she humps her hips, my stomach growls. The sound somehow sends her over the edge!",". Her eyes suddenly roll back as I feel her gush against me. ",". She suddenly gasps and "+choose([" tightens like a vice "," tightens "," squeezes me "])+" as she climaxes. "])+choose(["I keep thrusting until I cum inside.","She keeps moving her hips until I start filling her.","She pulls away to wrap her lips around me. I caress her cheek as she starts sucking."+choose([" Her tongue is too much to handle, and she shoves me down her throat as I start cumming."," When I finish, she swallows every drop."])+" As she pulls me out of her mouth, she tells me I should taste her next time."])
							])
						}else{
							Entrys[Entrys.length-1] += choose([
								". Her legs wrap around me as we finish together.",
								", and soon we both cum.",
								", and soon she's a quivering mess. I feel her tighten around me as I cum!",
								choose([". We keep humping until I lose control and cum first. ",". With her lips to my ear, she whispers that she loves me. Her words send me over the edge. "])+choose(["I slip a hand between us, and rub her clit until she arches her back in pleasure.","My thrusting doesn't stop until she finishes as well.","Soon she gasps and"+choose([" tightens like a vice "," tightens "," squeezes me "])+"as she finally finishes."," A moment later, her eyes roll back as she finishes."," A moment later she braces against me with her quivering legs."]),
								choose([". While holding her close, I whisper into her ear that I love her. She moans as my words send her over the edge! ",", and I put a hand between us to rub her clit. Her eyes suddenly roll back as I feel her gush against me. ",". She suddenly gasps and "+choose([" tightens like a vice "," tightens "," squeezes me "])+" as she climaxes. "])+choose(["I keep thrusting until I cum inside.","She keeps moving her hips until I start filling her.","She pulls away to wrap her lips around me. I caress her cheek as she starts sucking."+choose([" Her tongue is too much to handle, and she shoves me down her throat as I start cumming."," When I finish, she swallows every drop."])])
							])
						}
					
					
					
					//Entrys.push("I tackle SUB and ask if she really wants to fight. She responds with a kiss. We lock lips as she guides my member into her. She moans as I start thrusting, and soon we both cum together!")
					//TURN  THESE INTO OTHER FLESHED OUT SECTIONS
					//Entrys.push("I start kissing SUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me. She leans in for another kiss as we both finish!")
					//Entrys.push("I grab SUB by the hips and start thrusting! She's timid at first, but soon she's crying for more!")
					//Entrys.push("I turn SUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We make love until she cries out in bliss!")
				}else if(unit(s[2]).legs){		
					Entrys.push(choose(["I grab SUB by the hips and start thrusting! She's timid at first, but soon she's crying for more!"]))
				}

				//if(unit(s[2]).legs && unit(s[2]).arms && unit(0).CPun >= 30 && map[party.y][party.x].units.length == 1){
				if(unit(s[2]).legs && unit(s[2]).arms && unit(0).CPun >= 30 && map[party.y][party.x].units.length == 1){
				
					// CANNOT DETECT HURT BEFORE SCENE CURRENTLY. NEED TO FUCKING FIX!!!
			
					//LONG ONE!!
					//s["sceneA"] = choose(["nipple","kiss","knee"])//,"species"
					s["sceneB"] = choose(["tittyjob","blowjob","cunnilingus","frot"])
					//s["sceneC"] = choose(["ground","object"])//??
					//s["Variation"] = choose(["ABC","AB","AC","BC","B"])
					
					//DEBUGs["sceneA"] = choose(["nipple","kiss","knee"])//,"species"
					s["sceneB"] = choose(["tittyjob"]) 
 
					 
					Entry = "" 
					//B_B_B_B_B 
					if(s["sceneB"] == "tittyjob"){
						s["Mouth"] = choose(["empty","thumb","cock"])
						s["Thumb"] = choose(["none","suck","kiss"])
						s["Breasts"] = choose(["empty","herself","me"])
						s["Crotch"] = choose(["empty","herself","me","herself","me"])
						if(s[5]=="Indoors"){
							Entry += choose([
								"I tackle SUB onto the "+choose(["bed","table","couch"])+", and straddle her torso.",
								"I toss SUB onto the "+choose(["bed","table","couch"])+". She flinches when I approach, but I only straddle her.",
								"CSUB stumbles and falls back onto the "+choose(["bed","table","couch"])+" when I approach. She raises her arms expecting an attack, but I only straddle her."
							])
						}else if(s[5]=="Forest"){
							Entry += choose([
								"I tackle SUB into "+choose(["a bed of flowers","a pile of leaves","the tall grass"])+", and straddle her torso.",
								"I push SUB into "+choose(["a bed of flowers","a pile of leaves","the tall grass"])+". She flinches when I approach, but I only straddle her.",
								"CSUB stumbles and falls back into "+choose(["a bed of flowers","a pile of leaves","the tall grass"])+" when I approach. She raises her arms expecting an attack, but I only straddle her."
							])
						}else if(s[5]=="Water"){
							Entry += choose([
								"I tackle SUB onto the shore, and straddle her torso.",
								"I toss SUB onto the shore. She flinches when I approach, but I only straddle her.",
								"CSUB stumbles and falls back onto the shore when I approach. She raises her arms expecting an attack, but I only straddle her."
							])
						}else{
							Entry += choose([
								"I tackle SUB, and straddle her torso.",
								"I toss SUB to the ground. She flinches when I approach, but I only straddle her.",
								"CSUB stumbles and falls back when I approach. She raises her arms expecting an attack, but I only straddle her.",
								"I tackle SUB onto the GROUND and straddle her torso.",
								"I push SUB onto the GROUND. She flinches when I approach, but I only straddle her.",
								"CSUB stumbles and falls back onto the GROUND when I approach. She raises her arms expecting an attack, but I only straddle her."
							])
						} 
						Entry += choose([
								" She doesn't stop yelling until ",
								" She yells until ",
								" She starts yelling, but ",
								" As she yells at me, ",
								" She doesn't stop shouting until ",
								" She shouts until ",
								" She starts shouting, but ",
								" As she shouts at me, "
						])
						Entry += choose(["I"],[
								"I rudely",
								"I casually",
								"I calmly",
								"I awkwardly",
								"I roughly",
								"I forcefully",
								"I quickly"
						])
						Entry += choose([
								" shove a thumb into her mouth.",
								" silence her with my thumb.",
								" hook my thumb into her cheek."
						])
						 
						if(unit(s[2]).bust == -1){//Flat = always a hand on breast. 
							Entry +=
								choose([" I start humping her "," I start grinding myself against her "," I start thrusting my length along her "])+
								choose(["stomach",DescWord(unit(s[2]),"belly_noun",100),DescWord(unit(s[2]),"belly",50)+"belly"])+
								choose([" while she struggles under me."," while she tries pushing me off."," Wwile she tries escaping."])
								
							Entry += choose([
								" Her nipples stand erect, and I start rolling one between my fingers.",
								" I cup one of her tiny breasts, and she squirms under me.",
								" I roll my thumb over one of her nipples and feel it harden under my touch."
							])// 
							
							
						}else{//Has Breasts = No hand on chest yet.
							
							Entry += 
								choose([" I start thrusting"," I start frotting"," I start grinding"])+
								choose([""," myself"," my length"," my girth"])+
								choose([" between her "+DescWord(unit(s[2]),"breasts",100)+"breasts"," into her bosom"," against her cleavage"])
								
							Entry += choose([
								" while she tries breaking free", 
								" while she struggles",
								" while she struggles under me",
								" while she struggles to escape",
								" while she tries pushing me off",
								" while she tries escaping"
							])
						}
						//------------------------------------------------
						
						if(unit(s[2]).bust == -1){
							Entry += choose([
								" Dribbles of precum mar her body as I get more excited.",
								" Her body quickly gets slick with sweat and precum.",
								" My cock soon starts to glide as she gets covered in sweat and precum."
							])
						}else{
							Entry += choose([
								" As my precum marks her chest, she seems aroused by the smell.",
								" As her chest gets slick with sweat and precum, she gets aroused by the smell.",
								" Her breasts jiggle wildly as I continue rutting myself between them.",
								
								" The feeling of her body against mine gets me stiff, and I think she notices the change.",
								" Feeling her body against mine causes me to grow, and she seems to notice.",
								" I get harder as I feel her warmth against me.", 
								
								" I get harder as dribbles of precum mar her chest.",
								" Her chest quickly gets slick with sweat and precum.",
								" My cock soon starts to glide as she gets covered in sweat and precum."
							])
						}
						Entry += choose([
							" I thank her for not biting my thumb off. She bashfully nods",
							" I ask her if we can stop fighting. She cautiously nods",
							" I promise that I'm not going to hurt her, and ask if she wants to have some fun. She eventually nods",
							" She heaves her bust",
							" She's soon breathing heavier",
							" She takes a moment to look me over"
						])
						if(unit(s[2]).Tags[0] == "Catgirl"){							
							Entry += choose([
								", and starts to purr.",
								", and her tail is no longer puffed out.",
								", and her tail stops swishing around."
							])
						}else if(unit(s[2]).Tags[0] == "Foxgirl"){							
							Entry += choose([
								", and her tail starts to wag under us.",
								", and I notice the tip of her tail is wagging.",
								", and I feel her tail start to wag against my leg."
							])
						}else{
							Entry += choose([
								", and stops struggling.",
								" as her expression softens.",
								", and stops kicking her legs."
							])
						}
						if(s["Breasts"] != "me" || s["Mouth"] == "thumb"){//Next Stage - Hand on head - Thumb out.
							if(s["Mouth"] == "empty"){
								Entry += choose([//HAND PLACEMENT!!!
									" My thumb pulls out of her mouth with a juicy plop, and I",
									" A trail of saliva follows my hand from her mouth, and I",
									" I pull my thumb free and"
								])
							}else{
								Entry += choose([//HAND PLACEMENT!!!
									" With my free hand, I",
									" I keep her gagged, and with my remaining hand",
									" She leans into it when I"
								])
							}
							if((unit(s[2]).Tags[0] == "Catgirl" || unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Wolfgirl") && Math.random()<.75){ 
								Entry += choose([
									" start massaging her fluffy ears.",
									" start playing with her fluffy ears.",
									" start kneading her fluffy ears."
								])
								Entry += choose([
									" Her eyes roll back as my fingers keep rubbing.",
									" I keep rubbing until she's completely blissed out from my touch.",
									" They feel so soft between my fingers, and she loses focus when I reach their tips."
								])
							}else{
								Entry += choose([
									" start caressing her cheek.",
									" start rubbing her cheek, causing her to blush.",
									" start brushing her cheek."
								])
							}
						}else{
							if(unit(s[2]).bust == -1){
								Entry += choose([
									" My thumb pulls out of her mouth with a juicy plop, and she catches her breath.",
									" A trail of saliva follows my hand from her mouth. She pants heavily, desperate to regain her breath.",
									" I pull my wet thumb free and stroke it against her cheek."
								])
							}else{
								Entry += choose([
									" My thumb pulls out of her mouth with a juicy plop, and I squeeze her cleavage around my shaft as I keep thrusting.",
									" I pull my thumb free, and a trail of saliva follows. She squirms as I cup both of her breasts and mash them together.",
									" I pull my thumb free and grab both of her breasts. She squirms as I squeeze them against my shaft as I keep thrusting."
								])
							}
						}
						if(s["Breasts"] == "herself"){
							if(unit(s[2]).bust == -1){
								Entry += choose([
									" Surprisingly, she grabs her own nipples and starts to play with them.",
									" Surprisingly, her hands clasp onto her nipples.",
									" She quivers and reaches for her own nipples. She tweaks and pinches them relentlessly causing herself to moan!"
								])
							}else{
								Entry += choose([
									" She squeezes her cleavage around my shaft as I keep thrusting.",
									" She grabs onto her own bosom, and starts rubbing herself along my shaft.",
									" Timidly, she grabs her breasts, and looks up at me while rubbing them against my shaft."
								])
							}
						}
						if(s["Mouth"] == "thumb" && s["Thumb"] != "none" && s["Breasts"] != "me"){
							if(s["Breasts"] != "herself"){
								Entry += choose([
									" I try taking my thumb out, but she grabs my wrist. She pulls me back towards her mouth",
									" She holds my wrist",
									" Timidly, she grabs my wrist. She holds me tight"
								])
							}else{
								Entry += choose([
									" She lets out the smallest whimper",
									" She stares me down",
									" She looks away"
								])
							}
							Entry += choose([", and "," as she "," before she "])
							Entry += choose([
								"starts sucking on my thumb.",
								"starts stroking my thumb with her tongue. After a moment, she's basically making out with my hand.",
								"starts sucking on my thumb. Her tongue plays with the stubby digit as if in a passionate kiss."
							])
						}else if(s["Breasts"] != "herself"){
							Entry += choose([
								" My face grows hot",
								" My breathing hitches",
								" A moan escapes me"
							])
							Entry += choose([
								choose([
									" when she touches my chest. I suck on my teeth as she feels every muscle.",
									" as her fingers explore my chest.",
									" as she gropes my chest.",
								])
								,
								choose([
									" as her fingers dig into",
									" as she firmly grips", 
									" when she takes two meaty handfuls of"
								])+
								choose([
									" my behind.",
									" my thighs.", 
									" my hips."
								])
							])
						}
						if(s["Thumb"] == "kiss"){
							Entry += choose([""],[
								" I almost pull back when I feel her teeth, but she only gives me playful nibbles.",
								" I yelp when she bites down, but it was only a little nip. She grins as she kisses it better.",
								" I feel her begin to gnaw on me, and she grins up mischievously."
							])
							Entry += choose([
								" Soon her chin is covered in drool",
								" Soon drool is running down her chin",
								" Soon my hand is covered in her drool"
							])
							Entry += choose(["."],[
								" as it dribbles out from either side of my thumb.",
								" as the enthusiastic smooching intensifies.",
								" as my thumb gets pulled deeper."
							])
						}
						if(s["Mouth"] == "cock"){
							if(s["Breasts"] != "me"){
								Entry += choose([
									" She looks confused",
									" She looks upset",
									" She doesn't look ready"
								])+choose([
									" when my thumb pulls out of her mouth with a juicy plop",
									" as my thumb plops out of her mouth",
									" when I pull my wet thumb free from her mouth"
								])+choose([
									", but her focus quickly shifts to",
									", but her sights soon lock onto",
									", but her attention shifts down to"
								])+choose([
									" something better to suck on.",
									" my manhood.",
									" my cock."
								])
								if(unit(s[2]).bust == -1){
									Entry += "I "+choose(["scoot","move","slide"])+choose([" forward"," closer"," up"])
									Entry += choose([
										" until my length is poking into her open mouth.",
										" until my length can replace my slimey digit.",
										" until she can get my length into her mouth."
									])
								}else{
									Entry += choose([
										" She tilts forward to start getting a lick of my head with every thrust",
										" Leaning forward, she opens her mouth",
										" She opens her mouth while letting her tongue hang out"
									])
									Entry += choose([
										", and I start making longer strokes and feel her lips around me.",
										", and I start ramming further until it's poking into her mouth.",
										", and I start thrusting further until I feel her tongue."
									])
								}
							}else{//thumb is already out.
								if(unit(s[2]).bust == -1){
									Entry += choose([
										" Her fingers wrap around my length. She strokes me as",
										" Her hands cup my balls, and she guides me as",
										" Her tongue hangs out, and"
									])
									Entry += " I "+choose(["scoot","move","slide"])+choose([" forward"," closer"," up"])
									Entry += choose([
										" until she can get her lips around me.",
										" until she can reach it.",
										" until she can get it into her mouth."
									])
								}else{
									Entry += choose([
										" Her eyelids grow heavy, and she seems to relax.",
										" Her gaze slowly drops to where my tip repeatedly protrudes out from her bust.",
										" Her face slowly starts getting flushed as she watches me."
									])
									Entry += choose([
										" I start making longer strokes and feel her lips around me.",
										" I start ramming further until I'm poking into her mouth.",
										" I scoot up and feel myself slide along her tongue."
									])
								}
							}
							Entry += choose([
								" My shaft gets covered in her drool as she keeps sucking.",
								" My legs almost give out when she starts sucking.",
								" My shaft is quickly covered in spit, and she starts to moan as she sucks."
							])
						}else if(s["Mouth"] != "cock" && s["Breasts"] != "herself" && s["Crotch"] != "herself"){
							Entry += choose([
								" She holds me tight",
								" She arches her back",
								" She seems eager for more"
							])
							/*Entry += choose([
								" She rests her hands behind her head and watches",
								" She stretches her arms above her head",
								" She leans back with her arms behind her head"
							])//*/
							Entry += choose([" as I continue moving my hips."],[
								" as I keep using her body.",
								" as I keep pleasuring myself with her body.",
								" as I keep having my way with her body."
							])
						}else{
							Entry += choose([
								" She starts to moan",
								" She lets herself fully relax",
								" She sighs contently"
							])
							Entry += choose([
								" as I keep using her body.",
								" as I keep pleasuring myself with her body.",
								" as I keep having my way with her body."
							])
						}
						if(s["Crotch"] == "herself"){
							Entry += choose([
								" Her hand slips behind me to start fingering herself.",
								" Her hand brushes against me as it slips around to start fingering herself.",
								" Her hips start humping the air as she slips a hand around to start masturbating."
							])
						}
						if(s["Crotch"] == "me"){
							Entry += choose([
								" I notice her thighs mashing together, and slip a hand back to start fingering her.",
								" I reach back and start fingering her. She's already dripping wet, and eagerly spreads her legs for me.",
								" She starts thrusting her hips against the air in a desperate bid to stimulate herself. I reach back, and start pumping two fingers into her."
							])
						}
						if(s["Crotch"] == "empty"){
							Entry += choose([
								" Soon her legs start to kick again, but this time she's not struggling to get away.",
								" Soon her thighs mash together desperately for stimulation, but she's clearly about to get off without any help.",
								" Soon her hips start humping the air nearing release."
							])
						}else{
							Entry += choose([
								" Eventually we're moving as one, both desperate for release.",
								" Eventually she starts to buck her hips as we both get closer to release.",
								" Eventually she's thrashing under me as she nears orgasm."
							])
						}
						if(s["Mouth"] == "cock"){
							if(unit(s[2]).Tags[0] == "Catgirl"){
								Entry += choose([
									" Her grippy tongue sends me over the edge, and I gush down her throat. Her ears suddenly drop flat, and she shudders as she finishes.",
									" Her purring starts getting louder. It reaches its peak when she climaxes first, and soon I'm coating her throat with my seed.",
									" We cum at the same time, and her ears stand tall as my seed surges into her mouth."
								])
							}else if(unit(s[2]).Tags[0] == "Froggirl"){
								Entry += choose([
									" Her tongue spirals around my shaft and starts milking me for all I've got. I hear a wet splurt behind me when she finishes a moment later.",
									" Her tongue darts out of her mouth to wrap around my hips. It holds me tightly against her, and my seed fills her mouth as we cum together.",
									" She finishes first and gets even more slick with mucus. Her nimble tongue wraps around my shaft and starts writhing around until I'm forced to cum."
								])
							}else{ 
								Entry += choose([
									" She climaxes first, and soon I'm coating her throat with my seed.",
									" I finish first and her eyes grow wide at my gushing warmth. She finishes with a shudder as cum dribbles down her nose.",
									" We cum at the same time, and she sucks until every drop of my seed has been devoured."
								])
							}
							Entry += choose(["",
								choose([
									" We both pant heavily afterwards",
									" Her expression is one of complete satisfaction",
									" Her hands casually explore my sack afterwards"
								])+choose([
									", and she giggles while licking me clean.",
									", and she thanks me for the fun as I pull myself free from her mouth.",
									". She grabs my flaccid length as it slides out of her mouth. She gives the head a cute kiss before giggling at the silly gesture."
								])
							])
						}else if(s["Mouth"] == "thumb"){
							if(unit(s[2]).Tags[0] == "Catgirl"){
								Entry += choose([
									" She climaxes first, and soon I'm coating her chest with my seed.",
									" I cum first and cover her in my seed. She bites down hard when she finishes a moment later.",
									" We cum at the same time, and she chomps down on my thumb like a vice."
								])
								Entry += choose([""],[
									" She mindlessly suckles on my thumb after we're done, her rough tongue scrapes against my skin.",
									" Her rough tongue tugs at my thumb as I pull it free.",
									" She gives me one last lick with her rough grippy as I finally pull my thumb free from her cheek."
								])
							}else if(unit(s[2]).Tags[0] == "Froggirl"){
								Entry += choose([
									" She climaxes first, and soon I'm coating her chest with my seed.",
									" I finish first and cover her in my seed. Her tongue slips past my hand to slurp up my sticky cum. The first taste sends her over the edge, and her eyes roll into their sockets as she climaxes.",
									" We cum at the same time, and her tongue twists around my arm to hold me in place as my seed mixes with her mucus."
								])
								Entry += choose([""],[
									" I finally pull my thumb free from her cheek, and her massive tongue flops out onto her chest.",
									" I try pulling my thumb free, but its stuck to her sticky tongue. She giggles for a long while before finally releasing it.",
									" When I pull my thumb out, her long tongue follows. I wave my hand around until the sticky appendage finally breaks free. She giggles while slurping it back up."
								])
							}else{ 
								Entry += choose([
									" She climaxes first, and soon I'm coating her chest with my seed.",
									" I cum first and cover her in my seed. She bites down hard when she finishes a moment later.",
									" We cum at the same time, and she chomps down on my thumb like a vice."
								])
								Entry += choose([""],[
									" She looks almost sad when I finally pull my thumb free from her cheek.",
									" She rubs her sore jaw after I finally pull my thumb free.",
									" She gives me one last lick as I finally pull my thumb free from her cheek."
								])
							}
							
						}else{
							if(unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Wolfgirl"){
								Entry += choose([
									" She howls loudly as she climaxes first, but has to stop when my seed starts splurting at her face.",
									" I cum first and cover her in my seed. She howls out when she finishes a moment later.",
									" We cum at the same time, and her tongue laps at my seed as it splurts at her."
								])
							}else{
								Entry += choose([
									" She climaxes first, and soon I'm coating her face with my seed.",
									" I cum first and cover her in my seed. She cries out when she finishes a moment later.",
									" We cum at the same time, and she sticks her tongue out as she's coated in my seed."
								])
							}
							Entry += choose(["",
								choose([
									" We both pant heavily afterwards",
									" Her expression is one of complete satisfaction",
									" Her hands casually explore my body afterwards"
								])+choose([
									", and she giggles while licking the cum off herself.",
									", and she thanks me for the fun as I help her back up.",
									". I try standing, but instead collapse onto her from exhaustion. A few moments pass until I'm able to get back up."
								])
							])
						} 
						 
					}else if(s["sceneB"] == "blowjob"){
						if(Entry == ""){//ROUGH
							Entry += choose([
								"",
								"",
								""
							])
						}else{
							Entry += choose([
								"",
								"",
								""
							])
						}
						Entry += choose([
							"",
							"",
							""
						])
						if(s["Variation"].includes("C")){
							Entry += choose([
								"",
								"",
								""
							])
						}else{
							Entry += choose([
								"",
								"",
								""
							])
						}
					}else if(s["sceneB"] == "cunnilingus"){
						if(Entry == ""){
							Entry += choose([
								"",
								"",
								""
							])
						}else{
							Entry += choose([
								"",
								"",
								""
							])
						}
						Entry += choose([
							"",
							"",
							""
						])
						if(s["Variation"].includes("C")){
							Entry += choose([
								"",
								"",
								""
							])
						}else{
							Entry += choose([
								"",
								"",
								""
							])
						}
					}else if(s["sceneB"] == "frot"){
						if(Entry == ""){//ROUGH CHOKING
							Entry += choose([
								"",
								"",
								""
							])
						}else{
							Entry += choose([
								"",
								"",
								""
							])
						}
						Entry += choose([
							"",
							"",
							""
						])
						if(s["Variation"].includes("C")){
							Entry += choose([
								"",
								"",
								""
							])
						}else{
							Entry += choose([
								"",
								"",
								""
							])
						}
					}
					
					//C_C_C_C_C 
					Entrys = [Entry]
				}
				if(map[party.y][party.x].units[s[2]-100].flying){//THIS WONT WORK FOR FAERIES!!!
					Entrys = ["I ask SUB if she's interested in a good time down here. She swoops down and tackles me to the ground. As I regain my senses I feel her guiding my member into herself. She moans when I start thrusting, and soon we both cum together!","I ask SUB if she's interested in a good time down here, and she swoops down to kiss me. I grab her by the hips and start thrusting! She's timid at first, but soon she's crying for more!","I ask SUB if she's interested in a good time down here. She swoops by and knocks me to the ground. She quickly lands and straddles me. I hold her hips as she rides me, she wraps her wings around me as we finish together!"]
				} 
				if(unit(s[2]).Tags[0] == "Slimegirl"){
					Entry = "";
					Entrys.push(choose(["I approach SUB with my palms outward.","I talk in a soothing tone, and walk towards SUB.","I kneel before SUB, and don't move as she approaches."])+
						choose([" She doesn't attack, and I pull her into an embrace. Her color changes hue, almost as if she was blushing!"," She opens her mouth and makes sounds that couldn't possibly be words. I kiss her cheek, and she smiles."])+
						choose([" I slowly start thrusting into her, and she holds me tight."," I gently slip a finger into SUB's nipple and start stirring her up. She squirms, and makes the strangest of noises. Her legs liquefy, and she pulls me to the ground. I start thrusting into the glob of her lower body, and she arches her back in pleasure."," Without aiming for any orifice, I thrust into SUB's body. She looks confused and quickly morphs with her nethers around my length. She holds me close as we start making love."])+
						choose([" When we finish, she pulls me into a kiss. Her lips have a great "+DescWord(unit(s[2]),"slime",100)+" taste to them.",
						" When we finish, my skin is tinted "+DescWord(unit(s[2]),"slime_color",100)+"!",
						" I latch onto her breast, and my mouth fills with her flavor. She starts to quiver, and soon gushes against me. The sensation sends me over the edge as well.",
						" She starts to tremble, and tightens against me. The sensation is too much and I cum inside her. My spunk floats around her translucent body before dissolving.",
						" When we finish, she melts into a quivering puddle. Thats not a metaphor, she's <i>literally</i> just a puddle!",
						" I lean in for a kiss, but her head splits into a pair of feet. I watch as her body reverses itself, and she starts to blow me. I dive between her spread legs, and lap up her "+DescWord(unit(s[2]),"slime",100)+" flavored juices until we both cum."
						]))
				}
				if(unit(s[2]).Clothing != "None" && unit(s[2]).Clothing != undefined ){
					Entrys = [];
					if(Math.random()<.5){
						if(PositiveUnit != null){
							Entrys.push("My POS pulls SUB into a kiss as I approach from behind. The two make out as I fondle and strip the SUBRACE. She spreads her legs once she's naked, and I thrust into her. The two girls keep kissing as I pound the SUBSHORT from behind. She holds my POS tightly as she finishes, and soon I'm giving her my load as well!")
						}else if(NegativeUnit != null){
							Entrys.push("I pull SUB into a kiss as my NEG sneaks behind to start undressing her. She struggles against us at first, but when my hands find her bare chest, she starts urging me on. My NEG walks away as we start making love. She cries out when she finishes, and her legs tremble as I give her my load.")
						}else if(FunnyUnit != null){
							Entrys.push("My FUN trips SUB, and start stripping her as I watch. Once she's done, she gives the SUBRACE a big kiss on the lips and walks away. As SUBSHORT crawls around for her clothes, I kneel behind her and grab her rump. She flinches at first, but then starts to moan as I rub two fingers against her clit. Once she's wet, I get closer to frot against her. She mumbles something too soft to hear, and I ask her to speak up. She then loudly cries out for me to fuck her. I oblige, and thrust into her. She buckles over, and I keep pounding her as she moans. She finishes first, and I pull out to coat her back in my seed.")
						}else if(SluttyUnit != null){
							Entrys.push("My SLU masterfully strips SUB, and pulls her to the ground. She gets the SUBRACE making out with her while motioning me forward. I give my wingman a thumbs up as I get between SUBSHORT's legs and start thrusting between her "+DescWord(unit(s[2]),"butt",50,"sweet ")+"cheeks. As I rub against her, she pushes back eagerly. My SLU fingers herself with one hand, and spreads the SUBRACE's slit with the other. She orders me to pound it, and I push myself inside. I start making deep thrusts as the two girls keep making out. They call for me, and I bend over to start fondling them both. We start moving as one, and eventually all three of us finish at the same time!")
						}else if(HungryUnit != null){
							Entrys.push("My HUN roughly shoves SUB against OBJECTTALL before disrobing her. I almost object when I see how aggressive she's being until I notice that SUBSHORT's thighs are practically soaked! While my HUN walks away, I approach and ask the SUBRACE what she wants. She whimpers for me to give it to her, and I get behind her. Her hands guide me in, and I start thrusting. Her body braces against OBJECTTALL as I pound her. She moans, and I turn her into a kiss by the chin. Her legs are shaking by the time we finish, and when my load surges forth, she falls into my arms.")
						}else{
							Entrys.push("I aggressivly strip SUB and pull her into a kiss. Instead of fighting, she starts grinding against me. She guides me to her slit, and I pound her until we both finish.")
							Entrys.push("I pull SUB into a rough kiss. She struggles at first, but then slips her tongue between my lips. Once she's worked up, I pull away and ask her to strip. She listens, and soon I'm pounding her against OBJECTSHORT. She cries out in bliss as I pump my seed into her.")
						}
					}else if(unit(s[2]).Clothing == "Skirts"){
						Entrys.push("I rip SUB's top off, expecting her to be embarrassed. However, instead of covering herself, she reveals more by lifting up her skirt. I get closer, and she squirms as I pull her panties down. She sizes up my length in her hand before guiding it in. The first thrust takes her breath away, and she wraps a leg around me as I start giving her more. We're quickly covered in sweat as we continue, and she throws her head back in pleasure as I finish inside her.")
						Entrys.push("I press myself against SUB as I pull her into a kiss. She hesitates for a moment, then starts smooching back. While she's distracted, I untie her top, and unbutton her skirt. When I step back, she's suddenly standing in only her panties. She smirks at me as she pulls them off. I duck as she throws them, and hold my arms out as she runs up. She leaps at me, and I heft her just above my hard length. She giggles as she aligns it with herself, then I slowly lower her down. Her breathing all but stops as it goes in, but once she's used to my size, we start going at it. She bounces on me while her fingers dig into my back. When I warn her that I'm about to cum, she locks her legs around me. Her back arches as she's filled with my seed.")
						Entrys.push("I slip a hand under SUB's tubetop, and grope one of her "+DescWord(unit(s[2]),"breasts",50)+"breasts. She squirms at my touch, and I kneel to slip my other hand beneath her skirt. I rubbing through her panties, and she leans on me for support as her breathing quickens. When my fingers aren't enough, she shoves me over and starts undressing. She straddles me, and firmly grips my manhood. She feels it throb in her hands for a few moments, before sliding it into her. I give her a good thrust, and her legs give out. When she topples over, I pull her into a hug and keep thrusting. She starts moaning, and quickly reaches climax. I keep thrusting, and we cum together for her second orgasm.")
					}else if(unit(s[2]).Clothing == "Leathers"){
						Entrys.push("I spin SUB around and shove her against OBJECTTALL. She bites her lip while peeking back at my throbbing erection. As I walk closer, she shoves her pants down to her knees. I grab her bare hips and thrust myself inside. She winces as I enter the first time, but tells me to be rough as I pound her from behind. We work together to strip her armor off, and I fondle her naked form as she gets closer to climax. Her body trembles when she finishes, and soon after I'm giving her my load.")
						Entrys.push("I pull SUB into a kiss, and she immediately starts smooching back! We work together to undo all the straps of her armor. My hands keep finding new places to fondle as pieces of leather fall to the GROUND. We join them once she's completely stripped and start making love. She moans loudly the whole time, and shudders when I give her my load.")
						Entrys.push("I tell SUB she'd look cuter without her armor, and surprising she agrees. She eagerly strips down, and I pull her to the GROUND. She rides me as I'm lost in her jiggling form above me. Sweat rains onto my body as she picks up the pace. When she's close, she pulls me into a kiss. Our lips stay locked as my seed mixes with her gushing juices.")
					}else if(unit(s[2]).Clothing == "Dress"){
						Entrys.push("In one quick motion I rip SUB's dress from her. She blushes when its revealed that she's wearing pink hearted panties. I move closer, and start fingering her clit through them. She tells me to take her, and I rip the cute undies off as well. She lifts a leg, and I hold it while thrusting into her. I use my free hand to undo her bra, and watch as her "+DescWord(unit(s[2]),"breasts",50,"cute ")+"breast are set free. We share a laugh about her first time being nude in public as we keep making love. She pulls me into a kiss as she gushes on my shaft, and a moment later she's quivering as my load surges into her as well.")
						Entrys.push("I pull SUB's dress off her shoulders, and yank down hard to trap her arms. I start kissing her as she struggles to break free. By the time her hands are loose, all she wants to do is run them through my hair. She lets the dress fall to the GROUND, and we join it to start making love. After a few moments we roll over so that I'm on top, and she locks her legs around me as we both finish.")
						Entrys.push("I lift SUB into the air, and get my head under her dress. She flails above me as I start licking through her panties. Once I get them aside, she can't do anything besides quiver and moan. She tells me she wants it properly, and I start lowering her down. She slides out of her dress as I let her down onto my shaft. She guides it in and starts moving her hips. I firmly support her by the thighs, and she takes the opportunity to pull completely free from her dress. She discards it while I untie her panties. I roughly thrust into her nude form as she cries out for more. Her legs lock around me when I warn her that I'm about to cum, and the warmth of my load sends her over the edge!")
					}
				}				
				if(unit(s[2]).Name == "Wolf Queen"){
					Entrys = ["I shove the queen onto the throne and kneel before her. Her earlier attitude is replaced by embarrassment when I spread her legs. I lick her slit until its wet, then start exploring deeper. She arches her back, and writhes as I pleasure her. She wraps her legs around me when she cums, and I'm coated in her juices. Her legs unwrap, and she kicks me prone onto the fancy rug before the throne. She straddles me, and strokes my length until its firm. She slides herself down until reaching the base. Her tail wags against my legs as she rides me. I grab her hips and start thrusting into her. She starts bucking, and her crown tumbles off. I pull her down into a kiss as we cum."]
				}	
				if(unit(s[2]).Name == "Harpy Queen"){
					Entrys = [" I make a running jump off the throne to reach the flying Queen. We collide with my face between her thighs, and I quickly wrap my arms around her. She shouts angrily, commanding me to let go. I start licking her mound as she struggles to keep us aloft. She thrashes her wings desperately, but can't fly while distracted by my tongue. We crash into a massive heap of coins and other treasures. She throws my body off of her, but instead of attacking, she straddles me and slides my stiffness into her. I writhe under her as she bounces into my hips, my cock already feels ready to burst. I'm utterly powerless under her as she aggressivly rides me, and my throbbing length is now completely overstimulated from her tight depths. She gets lifted into the air when my back arches, and tumbles onto my chest as I start cumming. Her fluffy wings encase me as we roll down the pile of riches. I feel her body start to tremble, and she climaxes before we reach the bottom. I take a moment to enjoy her feathery embrace before standing. I help her up, and her talons scrape against the ground as her wobbly legs struggle for balance. She wraps a wing around me for support, and takes one last look at her crown neatly resting on the top of the glimmering pile of wealth before we start walking towards the exit."]
				}
				if(unit(s[2]).Name == "Drow Queen"){
					Entrys = ["I dodge, and her blade sinks into the table behind me. While she struggles to pull it free, I come up from behind and start frotting through her dress. She's unable to pry the stuck blade from the wood, and gets flustered as my length thrusts between her cheeks. With an exasperated sigh, she lifts her dress and tells me to just fuck her already. Her face turns to a scowl as I mention that her panties are in the way as well. She blushes as she meekly pulls them down while keeping her dress raised. She gasps at I gently push my tip inside her. I grin as she looks back expectantly, but make no effort to pleasure her. Her face contorts even more as she curses me, but even still she pushes back until I'm buried in her warmth. I rest my hands on the table, and let her do all the work. She fucks me aggressively with her elbows braced against the table. She moans when I start nibbling on her pointy ear. Her legs start to quiver, and she arches her back as she cums. When she's unable to continue moving her hips, I grab them and start thrusting. She sprawls onto the table as I give it to her. Her crown finally tumbles away as I flip her over. She wraps her legs around me as I rip open her dress. I pound her with everything I've got until my seed is surging into her womb. Her eyes cross as a second orgasm hits, and she lays back to catch her breath. She eventually sits up while I'm using her shredded dress to clean myself. She bites her lip when she see's the mess dribbling out of her and off the table. She looks worried when I pull her blade free, but I only offer it's hilt to her with a smile."]
				}
				if(map[party.y][party.x].units.length == 0){
					Entrys.push("I fuck SUB.")
				}
			}else{//FAIL
				Entrys.push("I try to make a move on SUB, but she's not in the mood.")
				if(map[party.y][party.x].units[s[2]-100].flying){
					Entrys = ["I ask SUB if she's interested in a good time down here. She says at her altitude my prick looks too tiny. My pride has never taken such a hit before!","I ask SUB if she's interested in a good time down here. She shakes her tush and says maybe another time.","I ask SUB if she's interested in a good time down here. She sticks out her tongue and says she's not falling for any of my tricks.","I ask SUB if she's interested in a good time down here. She blows me a kiss and says she'll think about it."]
				}
			} 
		}else
		//------------------------------------------------------------------------------------------
		if(s[1] < 100 && s[2] == 0 && !map[party.y][party.x].hostile){
		// GOOD HERO PEACE
			if(unit(s[1]).legs){
				//if(s[1].Tags[0] == "Bunnygirl" || s[1].Tags[0] == "Foxgirl" || s[1].Tags[0] == "Wolfgirl" || s[1].Tags[0] == "Catgirl"){
				
				s["her_act"] = choose(["fingering","fingering","breasts","nothing"]) 
				Entry = choose([
					"CDOM tells me she needs me while dropping to her knees.",
					"CDOM gives me a dirty look while dropping to her knees.",
					"CDOM licks her lips while dropping to her knees before me.", 
					"CDOM pushes me against OBJECTTALL before kneeling in front of me.",
					"CDOM tells me to lean against OBJECTSHORT as she gets on her knees before me.",
					"CDOM drops to her knees before me."
				])+choose([
					" She starts stroking until I'm hard, then pops her mouth over me.",
					" She starts stroking until I'm hard, then starts using her mouth..",
					" She begins by kissing my soft member, and eventually slurps it into her mouth.",
					" She begins by kissing my soft member, and eventually slurps it into her mouth. My body reacts, and she's pushed back as I reach my full length.",
					" She swallows my length until I'm entirely engulfed.", 
					" She swallows my length until I'm entirely engulfed. She's surprised when I fill her mouth as I stiffen." 
				])+choose([
					" For a moment she just takes pleasure in my taste, then she starts to suck.",
					" Her fingers grip my thighs, and she quickly starts to glide along my shaft.",
					" Her lips glide along my shaft, and I feel them curl into a smile.",
					" Her fingers dig into my haunches, and she pulls me closer as she starts to suck.",
					" My breath hitches when she grabs my hips, and soon she's bobbing on my shaft.",
					" Her hands grope my behind as she starts sucking." 
				])
				if(unit(s[1]).Tags[0] == "Catgirl" && Math.random()<.75){
					Entry+=choose([
						" She uses her rough tongue against my shaft, and I quiver from the sensation.",
						" When her rough tongue brushes my shaft, I buck my hips uncontrollably.",
						" She brushes her rough tongue along my entire shaft, and I struggle to stand as I'm overwhelmed." 
					])
				}else if((unit(s[1]).Tags[0] == "Wolfgirl"|| unit(s[1]).Tags[0] == "Foxgirl") && Math.random()<.75){
					Entry+=choose([
						" She wags her tail as she pleasures me.",
						" She licks my shaft as her tail wags eagerly.",
						" When her canines brush my shaft I get nervous, but she only continues to blow me." 
					])
				}else if(unit(s[1]).Tags[0] == "Batgirl" && Math.random()<.75){
					Entry+=choose([
						" She shoves me completely into her mouth and I feel the smallest prick of pain. I look down confused until she returns to working my shaft, and I see that its covered in blood. I get worried at first, but seeing how turned it makes her, I just go along with it.",
						" She shoves me completely into her mouth and I suddenly the pleasure I feel gets joined by a sharp pain. I wince as she pulls away, and see that my shaft is covered in blood. She giggles as she starts to clean it. I try protesting, but the way she licks me clean only turns me on again. She looks up innocently as a bead of my blood runs down her chin. I pat her head, and she continues to suck.",
						" When her fang brushes my shaft I get nervous, but she only continues to blow me."
					])
				}else if(unit(s[1]).Tags[0] == "Froggirl" && Math.random()<.75){
					Entry+=choose([
						" She wraps her tongue around my shaft a few times and tries to milk me as I struggle to stand.",
						" She uses her massive tongue to wrap around my sack, and soon she has everything I have inside her sticky maw.",
						" She wraps her sticky tongue along my entire shaft, and I struggle to stand as she tries to milk me." 
					])
				}else{
					Entry+=choose([
						" She looks up with a smug grin as I nearly blow my load already.",
						" She looks up with a smug grin as my breathing gets heavier.",
						" She locks eyes with me as she tries getting as much of my girth into her mouth as possible.",
						" She looks up with the cutest face as she pleasures me." 
					])
				}
				if(s["her_act"] == "fingering"){
					Entry+=choose([
						" One hand slips between her legs, and she works on getting us both off at the same time.",
						" Once she has me worked up, she starts to finger herself too.",
						" Her legs spread, and she starts to masturbate while still trying to get me off." 
					])
				}else if(s["her_act"] == "breasts"){
					if(unit(s[1]).bust == -1){
						Entry+=choose([
							" She starts playing with her own nipples, and works on getting us both off at the same time.",
							" She moans as she starts to play with her nipples.",
							" Her chest heaves, and she starts pinching her nipples while still trying to get me off." 
						])
					}else{
						Entry+=choose([
							" She starts playing with her own breasts, and works on getting us both off at the same time.",
							" She moans as she starts to play with her breasts.",
							" Her chest heaves, and she starts fondling herself while still trying to get me off." 
						])
					}
				}else{
					Entry+=choose([
						" A deep moan reverberates up my length as she gets worked up just by trying to get me off.",
						" Her thighs rub together as she gets turned on by my reactions.",
						" Her pace quickens, as if she was desperate to get me off. I notice her thick scent in the air and realize she's getting just as excited as I am." 
					])
				} 
				if((unit(s[1]).Tags[0] == "Wolfgirl"|| unit(s[1]).Tags[0] == "Foxgirl"|| unit(s[1]).Tags[0] == "Catgirl"|| unit(s[1]).Tags[0] == "BunnyGirl") && Math.random()<.75){
					Entry+=choose([
						" My hand caresses her ear, and she nuzzeles against it as saliva runs down her chin.",
						" I rub her ear between two fingers, and she goes cross eyed for a moment.",
						" I scritch behind her ears, and soon her movements grow sloppier as she's lost in my touch.",
						" I grab her by the ears, and start to make deep thrusts. She struggles to breath, but clearly loves being dominated.",
						" I start to massage her fluffy ears, and soon her movements grow sloppier as she struggles to focus.",
						" I push a little deeper, and her fluffy ears perk up when I reach the back of her throat." 
					])
				}else if((unit(s[1]).Tags[0] == "Batgirl"|| unit(s[1]).Tags[0] == "Harpygirl") &&s["her_act"] == "nothing" && Math.random()<.75){
					Entry+=choose([
						" Her wings wrap around me as saliva runs down her face.",
						" Her wings embrace me as I feel the back of her throat take my tip.",
						" She wraps me in her wings as she takes in my flavor." 
					])
				}else if(unit(s[1]).Tags[0] == "Froggirl" && Math.random()<.75){
					Entry+=choose([
						" My shaft starts to tingle as her saliva tries breaking me down.",
						" Her stretchy mouth offers no resistance, and I grab her head to start vigorously facefucking her.",
						" I push a little deeper and her eyes widen when I reach the back of her throat. Soon I'm cramming myself down her throat with every thrust." 
					])
				}else{
					Entry+=choose([
						" She gags when I reach the back of her throat, but doesn't miss a beat.",
						" I reach the back of her throat, and feel her muscles tightly squeeze me.",
						" Drool gets everywhere as she sloppily blows me.",
						" Saliva runs down her chin as I thrust against her face.",
						" She comes up for air just long enough to wipe the drool off her chin, and then she's on me again with even more vigor.",
						" She takes a deep swallow, and the muscles in her throat trying to draw me deeper." 
					])
				}
				if(s["her_act"] == "fingering"){
					Entry+=choose([
						" Her hips start to buck, and an orgasm wracks her body first. I hold her against me, and a moment later my seed is surging down her throat.",
						" Her skilled tongue eventually does the trick, and I start spurting out my seed. She swallows every drop as she keeps working her own loins. Before I'm drained, she shudders as she gets herself off too.",
						" Her timing is perfect, and we both finish at the same time." 
					])
				}else if(s["her_act"] == "breasts"){
					Entry+=choose([
						" I warn her that I'm close, and she pulls me from her mouth and starts stroking with her hands. She aims my length at her chest, and moans when the first splurt hits her body. Her thighs squeeze together as my thick scent sends her over the edge.",
						" I start surging down her throat, and she torments her hard nipples until she's cumming too!",
						" Her hips start to buck, and an orgasm wracks her body first. She pulls me free and strokes until I'm coating her breasts in my sticky seed." 
					])
				}else{
					Entry+=choose([
						" I warn her that I'm about to finish, but she only pulls me closer. My seed surges into her mouth, and she's quickly overwhelmed! The sudden rush sends her over the edge, and she finishes as cum dribbles from her nose.",
						" I warn her that I'm about to finish, and she pulls me free. She aims my length at her face, and hangs her tongue out as she's coated in my seed.",
						" I warn her that I'm about to finish, but she only pulls me closer. My seed surges into her mouth and bloat out her cheeks. She struggles, but manages to swallow every drop." 
					])
				}
				//masturbating
				//swallow, overwhelmed, facial, 
				Entrys.push(Entry)
			}
			if(Entrys.length == 0){
				Entrys.push("CDOM just fucked my brains out!")
			}
		}else if(s[1] < 100 && s[2] == 0 && map[party.y][party.x].hostile){
		// GOOD HERO HOSTILE
			Entrys.push("CDOM just fucked my brains out!")
			Entrys.push("CDOM tackles me and has a quick ride before falling asleep.")
			Entrys.push("CDOM drops to her knees and quickly blows me.")
			Entrys.push("CDOM bends over and tells me to do her. It only takes a few pumps until she's fucked silly lying on the GROUND with my seed oozing out.")
			Entrys.push("CDOM quickly has her way with me!")
		}else if(s[1] >=99 && s[2] == 0 && map[party.y][party.x].hostile){
		// FOOD HERO PEACE

		}else if(s[1] >=99 && s[2] == 0 && !map[party.y][party.x].hostile){
		// FOOD HERO HOSTILE

		}else
		//------------------------------------------------------------------------------------------
		if(((s[1] < 100 && s[2] < 100) || (s[1] >= 100 && s[2] >= 100)) && !map[party.y][party.x].hostile){
		// SAME PEACE
			Entrys.push("Oh wow, DOM just fucked SUB in front of me!")
			Entrys.push("CDOM eats out SUB until she's screaming!")
		}else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && map[party.y][party.x].hostile){
		// SAME HOSTILE
			Entrys.push("Oh wow, DOM just fucked SUB!")
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && !map[party.y][party.x].hostile){
		// DIFF PEACE
			if(s[3] == 1){//FUCK
				Entrys.push("CDOM eats out SUB until she's screaming!")
				Entrys.push("Oh wow, DOM just fucked SUB in front of me!")
			}else{//FAIL
				Entrys.push("CDOM trys to make a move on SUB but gets rejected.")
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		// DIFF HOSTILE
			if(s[3] == 1){//FUCK
				if(unit(s[1]).Tags[0] == "Slimegirl" && unit(s[2]).legs){
					if(unit(s[2]).Clothing != "None" && unit(s[1]).legs){
					
					}else{
						Entrys.push(
							choose(["CDOM covers SUB to dissolve her garments before spreeading the SUBRACE's legs apart.","CSUB blushes when her legs are forced apart by DOM. The "+unit(s[1]).Name.replace("Slimegirl","").toLowerCase()+"goo starts to bubble, but only melts away her clothes!"])+
							choose([" CDOMSHORT starts to surge into SUBSHORT, causing her belly to bloat out."," CDOMSHORT shoves herself in head-first as SUBSHORT struggles to stand.","CSUBSHORT starts to moan as DOMSHORT's lower body starts slurping into her depths."," CSUBSHORT thrashes around on the GROUND as her belly fills with DOM."])+
							choose([""],[" Nearly half of DOMSHORT gets into the other girl before she's full."," CSUBSHORT's eyes buldge out as she's overfilled with goo."])+
							choose([" When SUBSHORT climaxes, DOMSHORT gets sprayed out in a torrent of goop!"," CDOMSHORT starts to wriggle around inside until SUBSHORT cums. She oozes out of the quivering girl into a puddle."])
						)
					}
				}
				if(unit(s[1]).Tags[0] == "Froggirl" && unit(s[2]).legs){
					Entrys.push(
						choose(["CDOM's tongue latches onto SUB's mound. The caught girl whimpers as she's tugged closer. DOMSHORT crouches as her quarry arrives.","CDOM hops over to SUB and kneels.","CDOM kneels before SUB and gets between her thighs.","CDOM shoves SUB to the ground before spreading the girls legs."])+
						choose([" CSUBSHORT's belly suddenly bloats out as the full length of DOMSHORT's tongue violently thrusts into her."," She gives SUBSHORT's slit a kiss before her tongue plunges its full length inside."," CSUBSHORT suddenly goes still as CDOM's tongue uncoils into her."])+
						choose([" Her tongue continues to explore as deep as it can reach as SUBSHORT moans loudly."," CSUBSHORT squirms almost as much as the tongue inside her."," CSUBSHORT holds onto DOMSHORT's head for balance as she's relentlessly pleasured."])+
						choose([" When the girl is close DOM aggressivly recoils her sticky appendage, and is rewarded by a gush of juices from the trembling SUBRACE!"," CDOM's face gets even more slick when her tongue makes the girl gush."," CSUB starts swaying her hips as she's assaulted by the slimy appendage. She throws her head back as an orgasm wracks her body."])+
						choose(["",choose([" CDOM tries pulling away, but finds her tongue is stuck inside the sleeping girl. She doesn't struggle and just curls up against her."," CSUBSHORT falls asleep with her belly still full of the slimy length. CDOMSHORT doesn't try pulling out, and only curls up with her new lover."])])
					)
				}
				if(unit(s[2]).Clothing != "None" && unit(s[1]).legs){
					Entrys = ["CDOM strips SUB before pulling her into a kiss. The two make love until they're both climax at the same time."]
					Entrys.push("CDOM rips SUB free from her garments before she starts eating her out. CSUBSHORT moans as the other girl's tongue explores her. When she falls over, the two reposition themselves so that they can both have some fun. With their heads buried between the other's thighs, the moans they make are muffled, but they keep getting louder until reaching their zenith. They cum at the same time, and both get coated in the others juices when they finish.")
					Entrys.push("CDOM roughly strips SUB. The two look ready to scrap until they lunge into each others arms. They make love until climaxing together, then simply cuddle up on the GROUND!")
				}
				if(Entrys.length == 0){
					Entrys.push("Oh wow, DOM and SUB just made love! Now they're cuddling while they sleep.")
				}
			}else{//FAIL
				Entrys.push("CDOM trys to make a move on SUB but gets rejected.")
			}
		}
	}
//###########################################################################################################################################################################
//	TODO:       FEED
	if(s[0]==5){//FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED - FEED
		if(s[2]==0 && s[4] == -1){
				Entrys.push("CDOM pouts when I tell her I couldn't eat another bite!")
				Entrys.push("CDOM pouts when I tell her I'm too horny to eat right now!")
				Entrys.push("CDOM pouts when I tell her My stomach already feels like its going to burst!")
				Entrys.push("CDOM pouts when I tell her I need to work off my last meal before I can eat her!")
				Entrys.push("CDOM pouts when I tell her I'll get fat if I eat again so soon!")
		}else if(s[4] == -3){
			if(s[1]==0){
				Entrys.push("I can't get eaten until I've gobbled down the Demon Queen!")
			}else{
				if(s[2]>0){
					Entrys.push("CDOM doesn't look interested in getting eaten.")
					Entrys.push("CDOM isn't into being digested.")
					Entrys.push("CDOM shakes her head. She doesn't want to feed herself to SUB.")
					Entrys.push("CDOM says she isn't going to be a meal for SUB.")
				}else{
					Entrys.push("CDOM doesn't look interested in getting eaten.")
					Entrys.push("CDOM doesn't want to get digested.")
					Entrys.push("CDOM shakes her head, she doesn't want to feed herself to me yet.")
					Entrys.push("CDOM says she isn't going to be a meal for me yet.")
				}
			}
		}else if(s[4] == -2){
			if(s[1]==0){
				Entrys.push("I can't get devoured until I've eaten the Demon Queen!")
			}else{
				if(s[1]>0){
					Entrys.push("CDOM is too big for SUB to eat!")
				}else{
					Entrys.push("CDOM is too big for me to eat!")
				}
			}
		}
		//------------------------------------------------------------------------------------------
		else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && !map[party.y][party.x].hostile){
		// SAME PEACE
			if(s[2] == 0){
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					
				}
				Entrys.push("CDOM feeds herself to me!")
			}else{
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					
				}
				Entrys.push("CDOM just fed herself to SUB!")
			}
		}else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && map[party.y][party.x].hostile){
		// SAME HOSTILE
			if(s[2] == 0){
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					
				}
				Entrys.push("CDOM feeds herself to me!")
			}else{
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					
				}
				Entrys.push("CDOM just fed herself to SUB!")
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && !map[party.y][party.x].hostile){
		// DIFF PEACE
			Entrys.push("CDOM just fed herself to SUB!")
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		// DIFF HOSTILE
			Entrys.push("CDOM just fed herself to SUB!")
		}
	}
	

	 //*/
	 
	 if(Entrys.length == 0){Entrys.push("not available yet");}
	 Entry = Entrys[Math.floor(Math.random()*Entrys.length)]
	
		Entry = Entry.replace(/DOMRACELONG/g, String(unit(s[1]).Tags[0]).toLowerCase());
		Entry = Entry.replace(/DOMRACE/g, String(String(unit(s[1]).Tags[0]).toLowerCase()).replace("girl",""));
		Entry = Entry.replace(/SUBRACELONG/g, String(unit(s[2]).Tags[0]).toLowerCase());
		Entry = Entry.replace(/SUBRACE/g, String(String(unit(s[2]).Tags[0]).toLowerCase()).replace("girl",""));
	 
	if(s[1] < 100){
		if(s[2] >= 100){
			Entry = Entry.replace(/CDOMSHORT/g, "My "+String(unit(s[1]).Tags[0]).toLowerCase());
			Entry = Entry.replace(/DOMSHORT/g, "my "+String(unit(s[1]).Tags[0]).toLowerCase());
		}else{
			Entry = Entry.replace(/CDOMSHORT/g, "My "+String(unit(s[1]).Name).toLowerCase());
			Entry = Entry.replace(/DOMSHORT/g, "my "+String(unit(s[1]).Name).toLowerCase());
		}
		Entry = Entry.replace(/CDOM/g, "My "+String(unit(s[1]).Name).toLowerCase());
		Entry = Entry.replace(/DOM/g, "my "+String(unit(s[1]).Name).toLowerCase());
	}else{
		if(s[2] < 100){
			Entry = Entry.replace(/CDOMSHORT/g, "The "+String(unit(s[1]).Tags[0]).toLowerCase()); 
			Entry = Entry.replace(/DOMSHORT/g, "the "+String(unit(s[1]).Tags[0]).toLowerCase()); 
		}else{
			Entry = Entry.replace(/CDOMSHORT/g, "The "+String(unit(s[1]).Name).toLowerCase()); 
			Entry = Entry.replace(/DOMSHORT/g, "the "+String(unit(s[1]).Name).toLowerCase()); 
		}
		Entry = Entry.replace(/CDOM/g, "The "+String(unit(s[1]).Name).toLowerCase()); 
		Entry = Entry.replace(/DOM/g, "the "+String(unit(s[1]).Name).toLowerCase()); 
	}
	if(s[2] < 100){
		if(s[1] >= 100){
			Entry = Entry.replace(/CSUBSHORT/g, "My "+String(party.units[s[2]].Tags[0]).toLowerCase());
			Entry = Entry.replace(/SUBSHORT/g, "my "+String(party.units[s[2]].Tags[0]).toLowerCase());
		}else{
			Entry = Entry.replace(/CSUBSHORT/g, "My "+String(party.units[s[2]].Name).toLowerCase());
			Entry = Entry.replace(/SUBSHORT/g, "my "+String(party.units[s[2]].Name).toLowerCase());
		}
		Entry = Entry.replace(/CSUB/g, "My "+String(party.units[s[2]].Name).toLowerCase());
		Entry = Entry.replace(/SUB/g, "my "+String(party.units[s[2]].Name).toLowerCase());
	}else{
		if(s[1] < 100){
			if(unit(s[1]).Tags[0] == unit(s[2]).Tags[0]){
				Entry = Entry.replace(/CSUBSHORT/g, "The other "+String(map[party.y][party.x].units[s[2]-100].Tags[0]).toLowerCase().replace("girl",""));
				Entry = Entry.replace(/SUBSHORT/g, "the other "+String(map[party.y][party.x].units[s[2]-100].Tags[0]).toLowerCase().replace("girl",""));
			}else{
				Entry = Entry.replace(/CSUBSHORT/g, "The "+String(map[party.y][party.x].units[s[2]-100].Tags[0]).toLowerCase());
				Entry = Entry.replace(/SUBSHORT/g, "the "+String(map[party.y][party.x].units[s[2]-100].Tags[0]).toLowerCase());
			}
		}else{
			Entry = Entry.replace(/CSUBSHORT/g, "The "+String(map[party.y][party.x].units[s[2]-100].Name).toLowerCase());
			Entry = Entry.replace(/SUBSHORT/g, "the "+String(map[party.y][party.x].units[s[2]-100].Name).toLowerCase());
		}
		Entry = Entry.replace(/CSUB/g, "The "+String(map[party.y][party.x].units[s[2]-100].Name).toLowerCase());
		Entry = Entry.replace(/SUB/g, "the "+String(map[party.y][party.x].units[s[2]-100].Name).toLowerCase());
	}

	if(s[5]=="Dungeon"){
		Entry = Entry.replace(/GROUND/g, choose(["brick floor","floor"]));
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["a cask","the table","a barrel","a crate"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["a brick wall","the wall","a column"]));
	}
	if(s[5]=="Indoors"){//GROUND/OBJECTSHORT/OBJECTTALL
		Entry = Entry.replace(/GROUND/g, "floor","carpet","floorboards");
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["the couch","the table","the counter"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["the wall","the wardrobe","the cabinets","some shelves","a closed door"," a wooden support beam","the window"]));
	}
	if(s[5]=="Forest"){
		Entry = Entry.replace(/GROUND/g, choose(["grass","ground","tall grass","mossy earth","bare dirt","fallen leaves"]));
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["a stump","a fallen tree","a large log","a mossy boulder"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["tree"]));
	}
	if(s[5]=="Plains"){
		Entry = Entry.replace(/GROUND/g, choose(["grass","ground","tall grass","wild grass","short grass","bare dirt"]));
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["a stump","a fallen tree","a large log","a mossy boulder"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["the only tree"]));
	}
	if(s[5]=="Cave" || s[5]=="Entrance"){
		Entry = Entry.replace(/GROUND/g, choose(["stone","ground"]));
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["a stone ledge","the ledge","a broken stalagmite","a fallen stalactite","a boulder"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["a large stalagmite","a stone wall","the wall"]));
	}
	if(s[5]=="Water"){
		Entry = Entry.replace(/GROUND/g, choose(["shore","sandy bank"]));
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["the shore"],["the bank","the ledge","the sandy bank","a floating log"]));// ADD THE/A/AN?
		Entry = Entry.replace(/OBJECTTALL/g, choose(["the bank","a steep ridge"]));
	}
	Entry = Entry.replace(/GROUND/g, "ground");
	Entry = Entry.replace(/OBJECTSHORT/g, choose(["a stump"]));
	Entry = Entry.replace(/OBJECTTALL/g, choose(["a tree"]));
	 
	 
	Entry = Entry.replace(/harpy queen/g, "Harpy Queen");
	Entry = Entry.replace(/drow queen/g, "Drow Queen");
	Entry = Entry.replace(/wolf queen/g, "Wolf Queen");
	Entry = Entry.replace(/queen/g, "Queen");
	 //------
	if(PositiveUnit != null){
		Entry = Entry.replace(/POST/g, String(PositiveUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/POS/g, String(PositiveUnit.Name).toLowerCase());
	}
	if(NegativeUnit != null){
		Entry = Entry.replace(/NEGT/g, String(NegativeUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/NEG/g, String(NegativeUnit.Name).toLowerCase());
	}
	if(FunnyUnit != null){
		Entry = Entry.replace(/FUNT/g, String(FunnyUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/FUN/g, String(FunnyUnit.Name).toLowerCase());
	}
	if(SluttyUnit != null){
		Entry = Entry.replace(/SLUT/g, String(SluttyUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/SLU/g, String(SluttyUnit.Name).toLowerCase());
	}
	if(HungryUnit != null){
		Entry = Entry.replace(/HUNT/g, String(HungryUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/HUN/g, String(HungryUnit.Name).toLowerCase());
	}
	if(VanillaUnit != null){
		Entry = Entry.replace(/VANT/g, String(VanillaUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/VAN/g, String(VanillaUnit.Name).toLowerCase());
	}
	if(WillingUnit != null){
		Entry = Entry.replace(/WILT/g, String(WillingUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/WIL/g, String(WillingUnit.Name).toLowerCase());
	}
	if(AnyUnit != null){
		Entry = Entry.replace(/ANYT/g, String(AnyUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/ANY/g, String(AnyUnit.Name).toLowerCase());
	}
	if(map[party.y][party.x].units.length > 0){
		//Entry = Entry.replace(/CAHOS/g, N(map[party.y][party.x].units[0].Name.toLowerCase(),true));
		//Entry = Entry.replace(/AHOS/g, N(String(map[party.y][party.x].units[0].Name).toLowerCase()));
		Entry = Entry.replace(/HOS/g, String(map[party.y][party.x].units[0].Name).toLowerCase());  
		//Entry = Entry.replace(/TAG/g, String(map[party.y][party.x].units[0].Tags[0]).toLowerCase());
	}
	 //------
	 
	return Entry;
}
function randomTravel(Basic){
	var Entry = "";
	var PositiveUnit =	 FindPersonality("Positive",true)
	var NegativeUnit =	 FindPersonality("Negative",true)
	var FunnyUnit =		 FindPersonality("Funny",true)
	var SluttyUnit =	 FindPersonality("Slutty",true)
	var HungryUnit =	 FindPersonality("Hungry",true)
	var VanillaUnit =	 FindPersonality("Vanilla",true)
	var WillingUnit =	 FindPersonality("Willing",true)
	var AnyUnit =	 	 FindPersonality("Any")//
	//LogEntry(PositiveUnit+" - "+NegativeUnit+" - "+FunnyUnit+" - "+SluttyUnit+" - "+HungryUnit)
	var NPCstring = ""
	var Entrys = []
	//TODO:Travel-Hostile
	if(Basic == 1){//HOSTILE-------------------------------------------------------------------------------------
		if(party.units.length == 1){//ALONE
			if(map[party.y][party.x].units.length == 1){//ONE THREAT
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Batgirl"){
						Entrys.push("While exploring inside AMAP, AHOS finds me. She swoops down from the ceiling with a flourish. She looks ready for a fight!")
						if(map[party.y][party.x].units[0].Funny){
							Entrys.push("I hear laughing while exploring inside AMAP. From above AHOS swoops down and attacks me with a grin on her face!")
						}
					}else if(map[party.y][party.x].units[0].Tags[0] == "Slimegirl"){
						Entrys.push("While exploring inside AMAP, AHOS finds me. She looks hungry, and ready for a meal!")
					}else if(map[party.y][party.x].units[0].Tags[0] == "Goblingirl"){
						Entrys.push("While exploring AMAP, AHOS ")
						Entrys[Entrys.length-1] += randomEntry("ClothingSolo"+map[party.y][party.x].units[0].Clothing)+choose([" finds me."," approaches me."," crosses my path."," walks up."])
						Entrys[Entrys.length-1] += choose([" Her spear points towards me as she charges!"],[
							" Her spear may look crude, but I'm sure it'll still hurt!",
							" Her spear makes a cool <i>woosh</i> sound as she twirls it through the air. Once her display is done, she charges.",
							" Her spear drags along the GROUND as she charges!",
							" Her posture shifts as she draws her spear. After seeing that I'm unarmed, she still decides to charge.",
							" Her spear looks like it could break at any moment, but it still looks deadly as she charges!",
							" Her spear is caked in dry blood, and she hefts it above her when she charges!",
							" Her spear is little more than a branch with a sharpened stone bound to the top, but that doesn't make it any less dangerous. She grins while charging at me!",
						])
					}else if(map[party.y][party.x].units[0].Tags[0] == "Drowgirl"){
						if(map[party.y][party.x].name.includes("Tunnel")){
							Entrys.push("While walking through AMAP, AHOS ")
						}else if(map[party.y][party.x].name.includes("Underground")){
							Entrys.push("While exploring AMAP, AHOS ")
						}else if(map[party.y][party.x].name.includes("Stairway")){
							Entrys.push("While traversing the steps of AMAP, AHOS ")
						}else{
							Entrys.push("While exploring AMAP, AHOS ")
						}
						Entrys[Entrys.length-1] += randomEntry("ClothingSolo"+map[party.y][party.x].units[0].Clothing)+choose([" finds me."," approaches me."," crosses my path."," walks up."])
						Entrys[Entrys.length-1] += choose([""],[
							" She freezes for a moment when she notices I'm not wearing any pants.",
							" She looks confused by my lack of clothing.",
							" She chuckles into her palm when she sees I'm naked.",
							" She tilts her head at my bare form, I guess she's never seen a naked man before.",
							" She points between my legs and demands I put on some pants. When I shake my head, she gets even more flustered.",
							" She motions towards my length, and asks why I'm naked. I only shrug, and the look on her face makes it obvious that she wanted a better answer.",
							" She points at my soft penis and laughs at my nudity.",
							" She points at my soft penis and chuckles. I try explaining that its only small because the tunnel is so cold, but she doesn't listen.",
							" She blushes when she realizes I'm completely nude."
						])
						Entrys[Entrys.length-1] += choose([" She gets ready for a fight by drawing her blade."],[
							" Her blade makes that cool <i>shink</i> noise when it's drawn.",
							" Her blade scrapes against it's sheath as it's drawn. ",
							" Her blade barely makes a sound when it's drawn, and she swiftly charges at me!",
							" Her posture shifts as she draws her weapon. After seeing that I'm unarmed, she still decides to charge.",
							" Her blade slides free from it's sheath as she gets ready for a fight. I look at my empty hands, and hope I'm able to handle an armed opponent.",
							" Her blade slides free from it's sheath as she gets ready for a fight. I really should learn how to use a weapon, but I guess that will have to wait for later.",
							" Her blade slides free from it's sheath as she gets ready for a fight.I doubt this counts as a fair fight, and hope her sword isn't too sharp.",
						])
					}else{
						Entrys.push("While exploring inside AMAP AHOS finds me. She looks angry, and ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Canyon"){
					Entrys.push("While traveling through AMAP AHOS finds me. She swoops down from a cliff with a flourish. She looks ready for a fight!")
				}else if(map[party.y][party.x].tag == "Dungeon"){
					if(map[party.y][party.x].name == "Boss"){
						Entrys.push("I walk into the Throneroom alone, ready for the final fight.")
						if(unit(100).Name == "Wolf Queen"){
							Entrys[Entrys.length-1] += "The Queen sits on her throne as I approach. She asks how such a meek creature like me is expecting to beat her. Words fail me as I nervously stand before her. The beautiful wolf stands and adjusts her crown before getting ready for our fight."
						}
						if(unit(100).Name == "Harpy Queen"){
							Entrys[Entrys.length-1] += "The Queen perches on the back of her throne as I approach. She laughs at my puny form as she stretches out her wings. My fists clench as I nervously stand before her. The majestic harpy adjusts her crown and flieds up to the ceiling before starting our fight."
						}
					}else if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Door"){
						map[party.y-lastMove[0]][party.x-lastMove[1]].travel = -1;
						Entrys.push("I walk farther into the castle and hear a low grumbling behind me, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway I just walked through! An alert TAG comes to investigate the noise, ready to fight!")
					}else{
						Entrys.push("I kick open the wooden door and charge inside. An alert TAG stands guard in the next room, ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Catgirl"){
						Entrys.push("I open the door to AMAP"+choose([", and walk inside. A ",", and make my way inside. A "])+choose(["sleeping ","snoring ","napping ","snoozing "])+"TAG suddenly wakes, looking at me pissed. She stands up with her claws out, ready for a fight!")
						Entrys.push("I open the door to AMAP"+choose([", and walk inside.",", and make my way inside."])+" A HOS looks shocked when she sees us. Her tail poofs out as she bares her fangs.")
					}else{
						Entrys.push("I open the door to AMAP"+choose([", and walk inside. A relaxing ",", and make my way inside. A relaxing "])+"TAG looks pissed at my intrusion. She stands up, ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){//
				//""+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+""
					Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" A bathing TAG looks pissed at my intrusion. She calls me a pervert and gets ready for a fight!")
					Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" A relaxing TAG looks surprised by my intrusion. She calls me a pervert and gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" From out of the water AHOS emerges looking angry at me. She dives back down and starts swimming toward me, ready for a fight!")
						Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" From out of the water AHOS emerges looking angry at me. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt she's far away...")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("I wade through the waters of the MAP and feel refreshed."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" A bathing TAG looks pissed at my intrusion. She calls me a pervert and gets ready for a fight!")
					Entrys.push("I wade through the waters of the MAP and feel refreshed."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" A relaxing TAG looks surprised by my intrusion. She calls me a pervert and gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("I wade through the waters of the MAP, and feel refreshed."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" From out of the water AHOS emerges looking angry at me. She dives back down and starts swimming toward me, ready for a fight!")
						Entrys.push("I wade through the waters of the MAP, and feel refreshed."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" From out of the water AHOS emerges looking angry at me. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt she's far away...")
					}
				}else{
					if(map[party.y][party.x].units[0].Tags[0] == "Catgirl"){
						Entrys.push("I travel to AMAP, where I run into AHOS. Her tail poofs out as she hisses at me, she must be ready for a fight!")
					}
					if(map[party.y][party.x].units[0].Tags[0] == "Foxgirl" || map[party.y][party.x].units[0].Tags[0] == "Wolfgirl"){
						Entrys.push("I travel to AMAP, where I run into AHOS. Her tail wags frantically, she must be eager for a fight!")
						Entrys.push("I travel to AMAP, where I run into AHOS. Her hackles rise immediately, she must be eager for a fight!")
					}
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys.push("I travel to AMAP, where I run into AHOS. She croaks loudly, and readys her long tongue for a fight!")
					}
					Entrys.push("I travel to AMAP, where I run into AHOS. She looks angry, and ready for a fight!")
				}
			}else{//MULTIPLE THREATS
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Batgirl"){
						Entrys.push("While exploring inside AMAP, a group of flying Batgirls find me! They swoop down for a fight!")
					}else if(map[party.y][party.x].units[0].Tags[0] == "Goblingirl"){
						Entrys.push("While exploring AMAP, a group of goblins "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" charge me with spears drawn!"," raise their spears as they charge!"," scream bloody murder while charging with their spears!"," charge at me with spears!"]))
					}else if(map[party.y][party.x].units[0].Tags[0] == "Drowgirl"){
						if(map[party.y][party.x].name.includes("Tunnel")){
							Entrys.push("While walking through AMAP, a group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" find me."," approach me."," cross my path."," walk up to me."]))
						}else if(map[party.y][party.x].name.includes("Underground")){
							Entrys.push("While exploring AMAP, I stumble upon a drow gathering. They're "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([", and seem pissed off at my intrusion!",", and don't seem happy to see me.",", and immediately stop what they're doing once they see me."]))
						}else if(map[party.y][party.x].name.includes("Stairway")){
							Entrys.push("While traversing the steps of AMAP, a group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" find me."," approach me."," cross my path."," walk up to me."]))
						}else{
							Entrys.push("While exploring AMAP, a group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" find me."," approach me."," cross my path."," walk up to me."]))
						}
						Entrys[Entrys.length-1] += choose([""],[
							" One freezes for a moment when she notices I'm not wearing any pants.",
							" Each girl looks confused by my lack of clothing.",
							" One chuckles into her palm when she sees I'm naked.",
							" One cocks an eyebrow at my bare form, I guess she's never seen a naked man before.",
							" One points between my legs and demands I put on some pants. When I shake my head, she gets even more flustered.",
							" One motions towards my length, and asks why I'm naked. I only shrug, and the look on her face makes it obvious that she wanted a better answer.",
							" One points at my soft penis and they all laugh at my nudity.",
							" One points at my soft penis and chuckles. I try explaining that its only small because the tunnel is so cold, but she doesn't listen.",
							" They blush once they notice I'm completely nude."
						])
						Entrys[Entrys.length-1] += choose([" Blades slide free from their sheaths as the drow get ready for a fight."],[
							" Their blades makes that cool <i>shink</i> noise when drawn.",
							" Their blades are drawn quickly as they get ready for a fight. ",
							" Their blades barely make a sound when drawn.",
							" There's no mercy in their eyes as they charge with weapons drawn!",
							" Blades slide free from their sheaths as the drow get ready for a fight. I look at my empty hands, and hope I'm able to handle armed opponents.",
							" Blades slide free from their sheaths as the drow get ready for a fight. I really should learn how to use a weapon, but I guess that will have to wait for later.",
							" Blades slide free from their sheaths as the drow get ready to attack. I doubt this counts as a fair fight.",
						])
					}else{
						Entrys.push("While exploring inside AMAP, a group of "+randomEntry("HostileDesc")+" TAGs find me! They look ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Canyon"){
					Entrys.push("While traveling through AMAP, a group of flying harpys find me! They swoop down for a fight!")
				}else if(map[party.y][party.x].tag == "Dungeon"){
					if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Door"){
						Entrys.push("I walk farther into the castle and hear a low grumbling behind me, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway I just walked through! A group of TAGs come to investigate the noise, ready to fight!")
						map[party.y-lastMove[0]][party.x-lastMove[1]].travel = -1;
					}else{
						Entrys.push("I kick open the wooden door and charge inside. An alert group of TAGs stand guard in the next room, ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Foxgirl"){
						Entrys.push("I walk inside AMAP. A group of relaxing TAGs glare at me! They stand, ready for a fight!")
					}else{
						Entrys.push("I walk inside AMAP. A group of angry TAGs glare at me! They look ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin. A group of bathing TAGs looks pissed at my intrusion. They call me a pervert and get ready for a fight!")
					Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin. A group of relaxing TAGs look surprised by my intrusion. They call me a pervert and get ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin. From out of the water, multiple TAGs emerge looking angry at me. They dive back down and start swimming toward me, ready for a fight!")
						Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin. From out of the water, multiple TAGs emerge looking angry at me. One flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see them anywhere, but I doubt they're far away...")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("I wade through the waters of the MAP and feel refreshed. A group of bathing TAGs look pissed at my intrusion. They call me a pervert and get ready for a fight!")
					Entrys.push("I wade through the waters of the MAP and feel refreshed. A group of relaxing TAGs look surprised by my intrusion. They call me a pervert and get ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("I wade through the waters of the MAP, and feel refreshed. From out of the water, multiple angry TAGs emerge. They dive back down and start swimming toward me, ready for a fight!")
						Entrys.push("I wade through the waters of the MAP, and feel refreshed. From out of the water, multiple angry TAGs emerge. One flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see them anywhere, but I doubt they're far away...")
					}
				}else if(map[party.y][party.x].name == "Goblin Fort"){
					Entrys.push("As I enter AMAP, a group of girls "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" scramble for their weapons, and rush towards me."," frantically reach for their weapons. One slams hers into a massive gong, and they all charge at the sound of it!"," sit around a campfire. When one points at me, they quickly reach for their weapons!"]))
				}else{
					Entrys.push("I travel to AMAP, and find a group of angry TAGs! They look ready for a fight!")
				}
			}
		}else{//HAVE FRIENDS
			if(map[party.y][party.x].units.length == 1){//ONE THREAT
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Batgirl"){
						if(AnyUnit != null){
							Entrys.push("We spelunk inside AMAP. "+choose(["A drop of drool falls down onto my face.","I hear someone sneeze above us.","A bit of dirt sprinkles down onto "+AnyUnit.Name+"'s head."])+" I look up and see AHOS hanging from above as she watches our group pass below. She drops from the ceiling and glides down, ready for a fight!")
						}
						Entrys.push("We spelunk inside AMAP. Above us, AHOS hangs from the ceiling and spots our group walking below. She drops and starts flying at us, ready for a fight!")
						Entrys.push("We spelunk inside AMAP. A drop of blood falls down onto my face. Trembling, I look up and see AHOS hanging from the ceiling."+choose([""," Her fangs are bright red from her last meal."," Her fangs are piercing the neck of a dead mousegirl, sucking out the last drops before tossing the body into the darkness!"])+" When she sees my group she smiles, revealing her bloody teeth. She's clearly ready for a fight!")
					}else if(map[party.y][party.x].units[0].Tags[0] == "Slimegirl"){
						Entrys.push("We spelunk inside AMAP. We stumble upon AHOS"+choose([" with drool running down her face. She must be hungry!"," drooling while she looks at us. She must be ready for a meal!"]))
						Entrys.push(
							"We spelunk inside AMAP. We stumble upon a"+
							String(choose([" "," "," shiny "," transparent "," rippling "])+map[party.y][party.x].units[0].Name.replace(" Slimegirl"," ")).toLowerCase()+
							choose([" slug made of slime. It leaves a slick trail as it wanders around","puddle","orb of goo","glob of goo stuck to a stalagmite","glob of goo hanging from a stalactite","blob"])+
							choose([" with a struggling mousegirl inside it. The mousegirl looks at me and waves frantically. She digests almost instantly when the slime suddenly takes the form of a woman"," with a skull within it. it plops out and rolls away haphazardly when the slime slowly takes the form of a woman"," with bones floating within it. They clatter to the ground as the slime slowly takes the form of a woman"," that quickly forms a humanoid shape",". It slowly takes on a feminine form",". When we get closer it morphs into a shapely woman"])+choose([". She looks ready for another meal!"," looking at us while licking her transparent lips. She must be hungry!"," with dummy thicc hips. She didn't get those by nibbling on moss, and she's clearly ready to add to them!"," with a narrow waist. She must be ready for a meal!",". She starts walking towards us, ready for a fight!"]))
					}else if(map[party.y][party.x].units[0].Tags[0] == "Goblingirl"){
						Entrys.push("While exploring AMAP, AHOS ")
						Entrys[Entrys.length-1] += randomEntry("ClothingSolo"+map[party.y][party.x].units[0].Clothing)+choose([" charges at us with her spear drawn!"," raises her spear as she charges!"," spins a spear above her as she charges!"," screams loudly as she charges us with a spear!"," swings her spear wildly as she charges!"," frantically swings her spear at us as she charges!"])
					}else if(map[party.y][party.x].units[0].Tags[0] == "Drowgirl"){
						if(map[party.y][party.x].name.includes("Tunnel")){
							Entrys.push("While we walk through AMAP, AHOS ")
						}else if(map[party.y][party.x].name.includes("Underground")){
							Entrys.push("While we explore AMAP, AHOS ")
						}else if(map[party.y][party.x].name.includes("Stairway")){
							Entrys.push("While we walk along AMAP, AHOS ")
						}else{
							Entrys.push("While investigating AMAP, AHOS ")
						}
						Entrys[Entrys.length-1] += randomEntry("ClothingSolo"+map[party.y][party.x].units[0].Clothing)+choose([" finds us."," approaches."," crosses our path."," comes up to us."])
						Entrys[Entrys.length-1] += choose([""],[
							" She freezes for a moment when she notices I'm not wearing any pants.",
							" She looks confused by my lack of clothing.",
							" She chuckles into her palm when she sees I'm naked.",
							" She scrunches her nose at my bare form, I guess she's never seen a naked man before.",
							" She points between my legs and demands I put on some pants. When I shake my head, she gets even more flustered.",
							" She motions towards my length, and asks why I'm naked. I only shrug, and the look on her face makes it obvious that she wanted a better answer.",
							" She points at my soft penis and laughs at my nudity.",
							" She points at my soft penis and chuckles. I try explaining that its only small because the tunnel is so cold, but she doesn't listen.",
							" She blushes when she realizes I'm completely nude."
						])
						Entrys[Entrys.length-1] += choose([" She gets ready for a fight by drawing her blade."],[
							" Her blade makes that cool <i>shink</i> noise when it's drawn.",
							" Her blade scrapes against it's sheath as it's drawn. ",
							" Her blade barely makes a noise when it's drawn, and she charges at us!",
							" Her posture shifts as she draws her weapon. After seeing that I'm unarmed, she still decides to charge.",
							" Her blade slides free from it's sheath as she gets ready for a fight. I look at my empty hands, and hope I'm able to handle an armed opponent.",
							" Her blade slides free from it's sheath as she gets ready for a fight. I really should learn how to use a weapon, but I guess that will have to wait for later.",
							" Her blade slides free from it's sheath as she gets ready for a fight. I doubt this counts as a fair fight, and hope her sword isn't too sharp.",
						])
					}else{
						Entrys.push("We spelunk inside AMAP. We stumble upon AHOS who looks ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Canyon"){
					Entrys.push("We travel through AMAP. Above us, AHOS perches from a cliff and spots our group walking below. She drops and starts flying at us, ready for a fight!")
					Entrys.push("We travel through AMAP. "+choose(["A drop of drool falls down onto my face.","I hear someone sneeze above us.","A feather lands on "+AnyUnit.Name+"'s head."])+" I look up and see AHOS flying above as she watches our group pass below. She glides down, ready for a fight!")
				}else if(map[party.y][party.x].tag == "Dungeon"){//
					if(map[party.y][party.x].name == "Boss"){
						Entrys.push("We walk into the Throneroom, ready for the final fight.")
						if(PositiveUnit != null){
							Entrys[Entrys.length-1] += " My POS pats me on the shoulder and tells me to do my best. Then she shoves me forward and steps back."
						}else if(NegativeUnit != null){
							Entrys[Entrys.length-1] += " My NEG tells me she'll miss me if I get eaten. Then she steps back to watch from a safe distance."
						}else if(FunnyUnit != null){
							Entrys[Entrys.length-1] += " My FUN asks if she can be in charge next if I get eaten!"
						}else if(SluttyUnit != null){
							Entrys[Entrys.length-1] += " My SLU grips my behind before giving me a kiss. Then she shoves me forward and steps back."
						}else if(HungryUnit != null){
							Entrys[Entrys.length-1] += " My HUN tells me to get a good taste of the queen before eating her. Then she shoves me forward and steps back."
						}else{
							if(AnyUnit != null){
								Entrys[Entrys.length-1] += " My ANY gives my shoulder a reassuring squeeze before she shoves me forward and steps back."
							}else if(party.units.length > 2){
								Entrys[Entrys.length-1] += " The other girls sit on a bench along the back wall as I continue walking foward."
							}else{
								Entrys[Entrys.length-1] += "My "+units(1).Name.toLowerCase()+" sits on a bench at the back wall as I continue walking foward."
							}
						}
						Entrys[Entrys.length-1] += " I guess its expected that I fight alone. "
						if(unit(100).Name == "Wolf Queen"){
							Entrys[Entrys.length-1] += "The Queen sits on her throne as I approach. She asks how such a meek creature like me is expecting to beat her. Words fail me as I nervously stand before her. The beautiful wolf stands and adjusts her crown before getting ready for our fight."
						}
						if(unit(100).Name == "Harpy Queen"){
							Entrys[Entrys.length-1] += choose(["The throne strangely faces away from the main entrance, and I don't hear anything as I approach. I'm dumbfounded when I reach it and find the seat empty! My confusion is short lived as the Harpy Queen dives down from a chandelier! Her shiny crown is the only reason I was able to avoid the sneak attack!","The Queen perches on the back of her throne as I approach. She laughs at my puny form as she stretches out her wings. My fists clench as I nervously stand before her. The majestic harpy adjusts her crown and flieds up to the ceiling before starting our fight."])
						}
						if(unit(100).Name == "Drow Queen"){
							Entrys[Entrys.length-1] += " The Queen sits on her throne as I approach. She asks how a surface dweller like me is expecting to beat her. When I don't reply, she stands up and casually walks over to one of the many glass displays full of shimmering weapons. She eventually settles on one and shatters the glass to draw it. She adjusts her crown as she looks at me with a wicked grin, and slowly raises her blade towards me."
						}
					}else if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Door"){
						map[party.y-lastMove[0]][party.x-lastMove[1]].travel = -1;
						if(NegativeUnit != null){
							Entrys.push("We walk farther into the castle and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through! My NEG shrieks when she realizes we are trapped inside. An alert TAG comes to investigate the scream, ready to fight!")
						}else{
							Entrys.push("We walk farther into the castle and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through! An alert TAG comes to investigate the noise, ready to fight!")
						}
					}else{
						if(PositiveUnit != null){
							if(map[party.y][party.x].units[0].Tags[0] == "Harpygirl"){
								Entrys.push("My POS kicks open the wooden door and we charge inside. An alert TAG perching up in the lofty rafters swoops down, ready for a fight!")
							}else if(map[party.y][party.x].units[0].Tags[0] == "Drowgirl"){
								if(map[party.y][party.x].units[0].Clothing == "Dress"){
									Entrys.push("My POS slams open the wooden door and we charge inside. AHOS "+randomEntry("ClothingSolo"+map[party.y][party.x].units[0].Clothing)+choose([" seems surprised by our entrance, and scrambles to draw her weapons!"," quickly draws her blades when she sees us."," watches the broken hinge slide towards her as she draws a blades."],[" sits at a table of rich food and wine. She quickly sets her silverware down and grabs a weapons when she see us!"," dancees to the sound of a music box. It stops with the sound of a record scratch, and she draws her blade."," stands at a table covered in papers. She seems completely surprised by our entrance, and pauses for a few moments before drawing a blade."," sits quietly while she reads. Our presence enrages her, and she hurriedly set a bookmark before grabbing a blade."]))
								}else{
									Entrys.push("My POS slams open the wooden door and we charge inside. AHOS "+randomEntry("ClothingSolo"+map[party.y][party.x].units[0].Clothing)+choose([" seems surprised by our entrance, and scrambles to draw her weapons!"," quickly draws her blades when she sees us."," watches the broken hinge slide towards her as she draws a blades."],[" sits at a table of tasty food. She quickly grabs a weapons when she see us!"," standing guard. Her weapon is already in hand, and she's clearly been waiting for a fight."," rests on a bunk. She quickly grabs her weapons and gets ready for a fight."," plays a strange game involving cups and a small ball. Her fun comes to an end, and she gets ready for a fight!"]))
								}
							}else{
								Entrys.push("My POS kicks open the wooden door and we charge inside. An alert TAG stands guard in the next room, ready for a fight!")
							}
						}else{
							if(map[party.y][party.x].units[0].Tags[0] == "Harpygirl"){
								Entrys.push("I kick open the wooden door and we charge inside. An alert TAG perching up in the lofty rafters swoops down, ready for a fight!")
							}else{
								Entrys.push("I kick open the wooden door and we charge inside. An alert TAG stands guard in the next room, ready for a fight!")
							}
						}
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Catgirl"){
						Entrys.push("We knock before entering AMAP. A "+choose(["sleeping ","snoring ","napping ","snoozing "])+"TAG suddenly wakes, looking pissed at her unexpected guests. She stands up with her claws out, ready for a fight!")
						Entrys.push("We knock before entering AMAP. A HOS looks shocked when she sees us. Her tail poofs out as she bares her fangs.")
					}else{
						Entrys.push("We knock before entering AMAP. A relaxing TAG looks pissed at our intrusion. She stands up, ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A bathing TAG looks pissed at our intrusion. She gets ready for a fight!")
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A relaxing TAG looks surprised by our intrusion. She gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("We hop into the MAP, and enjoy a peaceful swim. From out of the water, AHOS emerges, looking angry at us. She dives back down and starts swimming our way, ready for a fight!")
						Entrys.push("We hop into the MAP, and enjoy a peaceful swim. From out of the water, AHOS emerges, looking angry at us. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt she's far away...")
						if(FindPersonality("Froggirl") != null){
							Entrys.push("We splash into the MAP, and AHOS rises to the surface. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" and the other frog size each other up before the fight!")
							Entrys.push("We splash into the MAP, and AHOS rises to the surface. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" licks her lips at the other frog. It looks like the fight is on!")
							Entrys.push("We splash into the MAP, and AHOS rises to the surface. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" looks pissed when the other frog licks her lips at her. It looks like the fight is on!")
							Entrys.push("We splash into the MAP, and AHOS rises to the surface. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" rubs her belly while staring at the other frog. The fight is on!")
							Entrys.push("We splash into the MAP, and AHOS rises to the surface. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" looks pissed when the other frog rubs her belly while staring at us. The fight is on!")
						}
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("We wade through the waters of the MAP and feel refreshed. A bathing TAG looks pissed at our intrusion. She gets ready for a fight!")
					Entrys.push("We wade through the waters of the MAP and feel refreshed. A relaxing TAG looks surprised by our intrusion. She gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("We wade through the waters of the MAP, and feel refreshed. From out of the water, AHOS emerges, looking angry at us. She dives back down and starts swimming our way, ready for a fight!")
						Entrys.push("We wade through the waters of the MAP, and feel refreshed. From out of the water, AHOS emerges, looking angry at us. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt she's far away...")
						if(FindPersonality("Froggirl") != null){
							Entrys.push("We wade through the waters of the MAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" and the other frog size each other up before the fight!")
							Entrys.push("We wade through the waters of the MAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" licks her lips at the other frog. It looks like the fight is on!")
							Entrys.push("We wade through the waters of the MAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" looks pissed when the other frog licks her lips at her. It looks like the fight is on!")
							Entrys.push("We wade through the waters of the MAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" rubs her belly while staring at the other frog. The fight is on!")
							Entrys.push("We wade through the waters of the MAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" looks pissed when the other frog rubs her belly while staring at us. The fight is on!")
						}
					}
				}else if(map[party.y][party.x].name == "Goblin Fort"){
					Entrys.push("As we enter AMAP, a group of girls "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" scramble for their weapons, and rush towards us."," frantically reach for their weapons. One slams hers into a massive gong, and they all charge at the sound of it!"," sit around a campfire. When one points at us, they quickly reach for their weapons!"]))
				}else{
					if(map[party.y][party.x].units[0].Tags[0] == "Catgirl"){
						Entrys.push("We travel to AMAP, and run into AHOS. Her tail poofs out as she hisses at us, she must be ready for a fight!")
					}
					if(map[party.y][party.x].units[0].Tags[0] == "Foxgirl" || map[party.y][party.x].units[0].Tags[0] == "Wolfgirl"){
						Entrys.push("We travel to AMAP, and run into AHOS. Her tail wags frantically, she must be eager for a fight!")
						Entrys.push("We travel to AMAP, and run into AHOS. Her hackles rise immediately, she must be eager for a fight!")
					}
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						if(FindPersonality("Froggirl") != null){
							Entrys.push("We travel to AMAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" and the other frog size each other up before the fight!")
							Entrys.push("We travel to AMAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" licks her lips at the other frog. It looks like the fight is on!")
							Entrys.push("We travel to AMAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" looks pissed when the other frog licks her lips at her. It looks like the fight is on!")
							Entrys.push("We travel to AMAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" rubs her belly while staring at the other frog. The fight is on!")
							Entrys.push("We travel to AMAP, and run into AHOS. My "+String(FindPersonality("Froggirl").Name).toLowerCase()+" looks pissed when the other frog rubs her belly while staring at us. The fight is on!")
						}
						Entrys.push("We travel to AMAP, and run into AHOS. She croaks loudly, and readys her long tongue for a fight!")
					}
					if(map[party.y][party.x].units[0].Positive){
						Entrys.push("We travel to AMAP. We run into AHOS who claims we are in her territory. She approaches us to fight!")
					}else if(map[party.y][party.x].units[0].Negative){
						Entrys.push("We travel to AMAP. We run into AHOS who says she hates when people bother her. She gets ready for a fight!")
					}else if(map[party.y][party.x].units[0].Hungry && map[party.y][party.x].units[0].Size >= unit(1).Size){
						Entrys.push("We travel to AMAP. We run into AHOS who licks her lips and says she was starting to get hungry. She gets ready for a fight!")
					}else if(map[party.y][party.x].units[0].Funny){
						Entrys.push("We travel to AMAP. We run into AHOS who asks if we are ready for some fun as she gets ready for a fight!")
					}else if(map[party.y][party.x].units[0].Slutty){
						Entrys.push("We travel to AMAP. We run into AHOS who asks if we are ready for some fun as she gets ready for a fight!")
					}
					Entrys.push("We travel to AMAP. We run into AHOS"+choose([" who looks ready for a fight!"," who looks angry, and ready for a fight!"]))
					
				}
			}else{//MULTIPLE THREATS
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Batgirl"){
						Entrys.push("While we spelunk inside AMAP, a group of flying batgirls swoop down at us! They look ready for a fight!")
					}else if(map[party.y][party.x].units[0].Tags[0] == "Goblingirl"){
						Entrys.push("While exploring AMAP, a group of goblins "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" charge us with spears drawn!"," raise their spears as they charge!"," scream bloody murder while charging with their spears!"," charge at us with spears!"]))
					}else if(map[party.y][party.x].units[0].Tags[0] == "Drowgirl"){
						if(map[party.y][party.x].name.includes("Tunnel")){
							Entrys.push("While walking through AMAP, a group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" find us."," approach us."," cross our path."," halt our travels."]))
						}else if(map[party.y][party.x].name.includes("Underground")){
							Entrys.push("While exploring AMAP, we stumble upon a drow gathering. They're "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([", and seem pissed off at our intrusion!",", and don't seem happy to see us.",", and immediately stop what they're doing once they see us."]))
						}else if(map[party.y][party.x].name.includes("Stairway")){
							Entrys.push("While walking along AMAP, a group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" find us."," approach us."," cross our path."," halt our travels."]))
						}else{
							//["Pristine Shrine","Bloody Alter","Unfinished Statue","Onyx Statue","Maze of Catacombs","Crystal Mine","Gem Mine","Ore Mine","Spacious Cavern","Elegant Library","Spacious Library","Ornate Tomb","Unfinished Crypt","Guardpost","Marble Courtyard"]}
							Entrys.push("While investigating AMAP, a group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" find us."," approach us."," cross our path."," halt our travels."]))
						}
						if(FindPersonality("Drowgirl") != null ){
							Entrys[Entrys.length-1] += choose([""],[
								" One freezes for a moment when she notices the drow in my party.",
								" Each girl looks confused by the naked drow in my group.",
								" One chuckles into her palm when she sees my drow standing with me.",
								" One tilts her head at my drow, I guess she wasn't expecting to face her own kind today.",
								" One points at my naked drow and demands they put on some clothes. When we chuckle, she gets even more flustered.",
								" One motions towards my drow and I, and questions our nudity. We only shrug, and the look on her face makes it obvious that she wanted a better answer.",
								" One points at my drow and I as they all laugh at our nudity.",
								" They look pissed once they notice their kind in my party."
							])
						}else{
							Entrys[Entrys.length-1] += choose([""],[
								" One freezes for a moment when she notices I'm not wearing any pants.",
								" Each girl looks confused by my lack of clothing.",
								" One chuckles into her palm when she sees I'm naked.",
								" One tilts her head at my bare form, I guess she's never seen a naked man before.",
								" One points between my legs and demands I put on some pants. When I shake my head, she gets even more flustered.",
								" One motions towards my length, and asks why I'm naked. I only shrug, and the look on her face makes it obvious that she wanted a better answer.",
								" One points at my soft penis and they all laugh at my nudity.",
								" One points at my soft penis and chuckles. I try explaining that its only small because the tunnel is so cold, but she doesn't listen.",
								" They blush once they notice I'm completely nude."
							])
						}
						Entrys[Entrys.length-1] += choose([" Blades slide free from sheaths as the drow get ready for a fight."],[
							" Their blades makes that cool <i>shink</i> noise when drawn.",
							" Their blades are drawn quickly as they get ready for a fight. ",
							" Their blades barely make a sound when drawn.",
							" There's no mercy in their eyes as they charge!",
							" Blade slide out from their sheaths as the drow get ready for a fight. I look at my empty hands, and hope I'm able to handle armed opponents.",
							" Blade slide out from their sheaths as the drow get ready for a fight. I really should learn how to use a weapon, but I guess that will have to wait for later.",
							" Blade slide out from their sheaths as the drow get ready for a fight. I doubt this counts as a fair fight, and hope their swords aren't too sharp.",
						])
					}else{
						Entrys.push("We spelunk inside AMAP. A group of "+randomEntry("HostileDesc")+" TAGs find us! They look ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Canyon"){
					Entrys.push("While we travel through AMAP, a group of flying harpies swoop down at us! They look ready for a fight!")
				}else if(map[party.y][party.x].tag == "Dungeon"){
					if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Door"){
						map[party.y-lastMove[0]][party.x-lastMove[1]].travel = -1;
						if(NegativeUnit != null){
							Entrys.push("We walk farther into the castle and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through! My NEG shrieks when she realizes we are trapped inside. A group of alert TAGs come to investigate the scream, ready to fight!")
						}else{
							Entrys.push("We walk farther into the castle and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through! A group of alert TAGs come to investigate the noise, ready to fight!")
						}
					}else{
						if(PositiveUnit != null){
							if(map[party.y][party.x].units[0].Tags[0] == "Harpygirl"){
								Entrys.push("My POS slams open the wooden door and we charge inside. A group of alert TAGs perched on various furnature fly up towards the ceiling of the oversized room, ready for a fight!")
							}else if(map[party.y][party.x].units[0].Tags[0] == "Drowgirl"){
								if(map[party.y][party.x].units[0].Clothing == "Dress"){
									Entrys.push("My POS slams open the wooden door and we charge inside. A group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" seem surprised by our entrance, and scramble to draw their weapons!"," quickly draw their blades when they see us."," watch the broken hinge slide towards them as they draw their blades."],[" sit along a table of rich food and glasses of wine. They quickly stop their meal, and draw weapons when they see us!"," dance to the sound of a music box. It stops with the sound of a record scratch, and they draw their blades."," stand around a table covered in papers. They seem completely surprised by our entrance, and pause for a few moments before drawing their blades."," sit quietly while they read. Our presence enrages them, and they hurriedly set their bookmarks before drawing blades."]))
								}else{
									Entrys.push("My POS slams open the wooden door and we charge inside. A group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" seem surprised by our entrance, and scramble to draw their weapons!"," quickly draw their blades when they see us."," watch the broken hinge slide towards them as they draw their blades."],[" eat around a table. They quickly stop their meal and draw weapons when they see us!"," standing guard. Their weapons are already in hand, and they've clearly been waiting for a fight."," rest in bunks. They quickly grab their weapons and get ready for a fight."," play a strange game involving cups and a small ball. Their fun comes to an end as they get ready for a fight!"]))
								}
							}else{
								Entrys.push("My POS slams open the wooden door and we charge inside. A group of alert TAGs stand guard in the next room, ready for a fight!")
							}
						}else{
							if(map[party.y][party.x].units[0].Tags[0] == "Harpygirl"){
								Entrys.push("I kick open the wooden door and we charge inside. A group of alert TAGs perched on various furnature fly up towards the ceiling of the oversized room, ready for a fight!")
							}else if(map[party.y][party.x].units[0].Tags[0] == "Drowgirl"){
								if(map[party.y][party.x].units[0].Clothing == "Dress"){
									Entrys.push("I kick open the wooden door and we charge inside. A group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" seem surprised by our entrance, and scramble to draw their weapons!"," quickly draw their blades when they see us."," watch the broken hinge slide towards them as they draw their blades."],[" sit along a table of rich food and glasses of wine. They quickly stop their meal, and draw weapons when they see us!"," dance to the sound of a music box. It stops with the sound of a record scratch, and they draw their blades."," stand around a table covered in papers. They seem completely surprised by our entrance, and pause for a few moments before drawing their blades."," sit quietly while they read. Our presence enrages them, and they hurriedly set their bookmarks before drawing blades."]))
								}else{
									Entrys.push("I kick open the wooden door and we charge inside. A group of drow "+randomEntry("ClothingGroup"+map[party.y][party.x].units[0].Clothing)+choose([" seem surprised by our entrance, and scramble to draw their weapons!"," quickly draw their blades when they see us."," watch the broken hinge slide towards them as they draw their blades."],[" eat around a table. They quickly stop their meal and draw weapons when they see us!"," standing guard. Their weapons are already in hand, and they've clearly been waiting for a fight."," rest in bunks. They quickly grab their weapons and get ready for a fight."," play a strange game involving cups and a small ball. Their fun comes to an end as they get ready for a fight!"]))
								}
							}else{
								Entrys.push("I kick open the wooden door and we charge inside. An alert group of TAGs stand guard in the next room, ready for a fight!")
							}
						}
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Foxgirl"){
						Entrys.push("We knock before entering AMAP. A group of TAGs glare at us! Their hackles rise as they get ready for a fight!")
					}else{
						Entrys.push("We knock before entering AMAP. A group of angry TAGs glare at us! They look ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A bathing TAG looks pissed at our intrusion. She gets ready for a fight!")
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A relaxing TAG looks surprised by our intrusion. She gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("We hop into the MAP, and enjoy a peaceful swim. From out of the water, AHOS emerges, looking angry at us. She dives back down and starts swimming our way, ready for a fight!")
						Entrys.push("We hop into the MAP, and enjoy a peaceful swim. From out of the water, AHOS emerges, looking angry at us. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt she's far away...")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("We wade through the waters of the MAP and feel refreshed. A bathing TAG looks pissed at our intrusion. She gets ready for a fight!")
					Entrys.push("We wade through the waters of the MAP and feel refreshed. A relaxing TAG looks surprised by our intrusion. She gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("We wade through the waters of the MAP, and feel refreshed. From out of the water, multiple TAGs emerge looking angry at us. They dive back down and start swimming our way, ready for a fight!")
						Entrys.push("We wade through the waters of the MAP, and feel refreshed. From out of the water, multiple TAGs emerge looking angry at us. One flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see them anywhere, but I doubt they're far away...")
					}
				}else{
					Entrys.push("We travel to AMAP, and found a group of angry TAGs! They look ready for a fight!")
				}
			}
		}
	}
	//TODO:Travel-Passive
	if(Basic == 2){//PASSIVE-------------------------------------------------------------------------------------
		if(party.units.length == 1){//ALONE
			if(map[party.y][party.x].units.length == 1){//ONE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Mousegirl"){
						Entrys.push("While exploring inside AMAP AHOS"+choose([" approaches me. She seems cautious, but puts on a friendly face."," approaches me. She was peaking behind a rock before coming forward.", " approaches me. She doesn't look like she wants to fight."," approaches me. She waves at me with a smile, I guess she doesn't consider me a threat."," approaches me. She was crawling out of the crevice she hid in, it looks like she just woke up."," approaches me. She seems friendly, I wonder why she lives in this cave."," approaches me. She clearly doesn't want to fight."," approaches me. She seems nice."," approaches me. She's smiling, but she nervously looks around the cave."," approaches me. She smiles when she sees me."," approaches me. Her face looks so cute!"," approaches me. She looks like easy prey!"," approaches me. My mouth is watering at the sight of her!"," approaches me. I wonder if she's interested in a little fun?"]))
					}else{
						Entrys.push("While exploring inside AMAP  AHOS finds me. She looks friendly, I don't think she wants to fight.")
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					Entrys.push("I open the door to AMAP"+choose([", and walk inside. A relaxing ",", and make my way inside. A relaxing "])+"TAG greets me.")
					if(map[party.y][party.x].units[0].Tags[0] == "Bunnygirl"){
					Entrys = []
						if(map[party.y][party.x].units[0].willing && map[party.y][party.x].units[0].Vanilla && Math.random()<.5){
							unit(100).CPle = Math.round(unit(100).MPle - 3 - (Math.random()*4))//+choose([", and walk inside. A ",", and make my way inside. A "])
							Entrys.push("I open the door to AMAP"+choose([", and walk inside. I'm greeted by ",", and make my way inside. I'm greeted by "])+"AHOS. With a naughty grin she asks if I need a bite!")
							Entrys.push("I open the door to AMAP"+choose([", and walk inside. I'm greeted by ",", and make my way inside. I'm greeted by "])+"AHOS. While playing with her breasts she says I look hungry!")
							Entrys.push("I open the door to AMAP"+choose([", and walk inside. I'm greeted by ",", and make my way inside. I'm greeted by "])+"AHOS. She shakes her tush at me and asks if she looks tasty!")
							Entrys.push("I open the door to AMAP"+choose([", and walk inside. I'm greeted by ",", and make my way inside. I'm greeted by "])+"AHOS. While looking at me, she takes a meaty grip of her behind and offers herself to me!")
						}else if(map[party.y][party.x].units[0].Positive){
							Entrys.push("I open the door to AMAP"+choose([", and walk inside. I'm greeted by ",", and make my way inside. I'm greeted by "])+"AHOS "+choose(["cleaning up her home.","chopping up some carrots.","washing some dishes."," sweeping the floor."]))
						}else if(map[party.y][party.x].units[0].Negative){
							Entrys.push("I open the door to AMAP"+choose([", and walk inside. A ",", and make my way inside. A "])+choose(["sleeping ","snoring ","napping ","snoozing "])+"TAG suddenly wakes, looking at me"+choose([" with groggy eyes"," surprised"," still half asleep"])+". She stands and greets me, she doesn't seem too upset to be woken up.")
						}else if(map[party.y][party.x].units[0].Funny){
							if(map[party.y][party.x].units[0].willing){
							Entrys.push("I open the door to AMAP"+choose([", and walk inside. I'm greeted by ",", and make my way inside. I'm greeted by "])+"AHOS "+choose(["covered in paint next to a detailed portrait of a wolfgirl.","drawing on a sketchpad.","painting a picture on a canvas.","curled up on a couch with a book."]))
								}else{
							Entrys.push("I open the door to AMAP"+choose([", and walk inside. I'm greeted by ",", and make my way inside. I'm greeted by "])+"AHOS "+choose(["covered in paint next to a beautiful portrait of herself.","drawing on a sketchpad.","painting a landscape on a canvas.","curled up on a couch with a book."]))
							}
						}else if(map[party.y][party.x].units[0].Slutty){
							if(map[party.y][party.x].units[0].willing && Math.random()<.5){
								unit(100).CPle = Math.round(unit(100).MPle - 3 - (Math.random()*4))
								Entrys.push("I open the door to AMAP"+choose([", and walk inside. A",", and make my way inside. A"])+choose([" drinking "," drunk "," buzzed "," rosy cheeked "])+"TAG sits at a table. While holding a bottle, she asks if I'd prefer some booze, or some bunny!")
							}else{
								Entrys.push("I open the door to AMAP"+choose([", and walk inside. A",", and make my way inside. A"])+choose([" drinking "," drunk "," buzzed "," rosy cheeked "])+"TAG sits at a table. While holding a bottle, she asks if I'd like a "+choose(["drink","glass","shot","tasty brew","sip","swig","chat over some wine"])+" with her.")
							}
						}else if(map[party.y][party.x].units[0].Hungry){
							if(map[party.y][party.x].units[0].willing && Math.random()<.5){
								unit(100).CPle = Math.round(unit(100).MPle - 3 - (Math.random()*4))
								Entrys.push("I open the door to AMAP"+choose([", and walk inside. A",", and make my way inside. A"])+choose(["n eating "," munching "," snacking "])+"TAG sits at a table eating some "+choose(["carrot cake","chocolate cake","pumpkin pie","cheezy pizza","freshly baked bread","oranges","sliced watermelon","chopped apples"])+". She asks if there's something i'd like to eat, or maybe some bunny...")
							}else{
								Entrys.push("I open the door to AMAP"+choose([", and walk inside. A",", and make my way inside. A"])+choose(["n eating "," munching "," snacking "])+"TAG sits at a table eating some "+choose(["carrot cake","chocolate cake","pumpkin pie","cheezy pizza","freshly baked bread","oranges","sliced watermelon","chopped apples"])+". She asks if I'd like a slice.")
							}
						}else{
							Entrys.push("A"+choose([" cheerful "," happy "," friendly ","n energetic "])+"TAG opens the door to her MAP, and invites me inside. I have to duck my head as I walk in.")
						}
					}
						
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin. A bathing TAG looks shocked when she sees me. She calms down when I tell her I'm just enjoying the water too.")
					Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin. A relaxing TAG looks surprised by my intrusion. She calms down when I tell her I'm just cooling off in the water.")

				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("I wade through the waters of the MAP and feel refreshed. A bathing TAG looks shocked when she sees me. She calms down when I tell her I'm just enjoying the water too."+choose(["","","I sneak a peek at her when sh's not looking and quickly sink into the water to hide my erection."]))
					Entrys.push("I wade through the waters of the MAP and feel refreshed. A relaxing TAG looks surprised by my intrusion. She calms down when I tell her I'm just cooling off in the water."+choose(["","","I sneak a peek at her when sh's not looking and quickly sink into the water to hide my erection."]))
				}else if(map[party.y][party.x].tag == "Forest" && unit(100).Tags[0] == "Bunnygirl"){
					if(unit(100).Vanilla){
						Entrys.push("I travel to AMAP"+choose([" and meet AHOS. She seems friendly."," and meet AHOS covered in leaves. She brushes most of them off before greeting me."," just in time to see AHOS fall out of a tree! I help her up as she laughs at her clumsiness.",". CAHOS peeks out from behind a tree. I wave at her, and she waves back as she approaches.",", and find AHOS crawling out of a hollow log, she gets up and dusts herself off before greeting me.",", and find AHOS leaning against a tree.",". CAHOS waves at me while she sits on a stump."]))
					}else if(unit(100).Positive){
						Entrys.push("I travel to AMAP"+choose([" and find AHOS"])+choose([" plucking mushrooms out of the ground. She has a small basket near her full of them."," digging out wild carrots growing in tall grass. She proudly shows me her overflowing basket of them."," picking berries. Her basket is almost full."," in a tree collecting apples. She tosses them into a basket with impressive aim!"]))
					}else if(unit(100).Negative){
						Entrys.push("I travel to AMAP"+choose([" and find AHOS"])+choose([" snoozing"," sleeping"," asleep"])+choose([" in the tall grass."," against a log."," beneath a tree."," under the shade of a tree."])+choose([" When she hears me approach, she leaps to her feet."," She wakes with a start."," Her eyes open and she looks at me nervously."," She wakes up as I approach, looking at me cautiously."]))
					}else if(unit(100).Funny){
						Entrys.push("I travel to AMAP."+choose([" CAHOS leaps out of a bush to scare me."," CAHOS leaps down from a tree to scare me."," CAHOS leaps out from behind a tree to scare me."])+choose([" I scream loudly until I realize she's just a small bunnygirl."," I fall back and shuffle away until I notice she's just a small bunnygirl."," I start to run away when she calls out. I turn and see she's just a small bunnygirl."])+choose([" She enjoys a laugh at my expense."," She grins as I try catching my breath."," She giggles when I admit she scared me."]))
						Entrys.push("I travel to AMAP"+choose([" and meet AHOS. She makes a funny face at me."," just in time to see AHOS fall out of a tree! I help her up as she laughs at her clumsiness.",". CAHOS peeks out from behind a tree. I give her a wave, and she does a cartwheel as she approaches.",", and find AHOS leaning against a tree. She makes a silly face at me.",". CAHOS waves at me while she sits on a stump."]))
						Entrys.push("I travel to AMAP"+choose([" and spot AHOS hiding a colored egg in a bush. She greets me, and shifts my gaze away from her hidden treat."," and spot AHOS hiding a striped egg behind a stump. She holds my hand, and walks me away from the hidden treat."," and spot AHOS hiding a colorful egg under a fallen tree. She greets me, and shushes with a finger to her lips."," and spot AHOS hiding a painted egg in the tall grass. She greets me, and tells me to keep her secret safe."]))
					}else if(unit(100).Hungry){
						Entrys.push("I travel to AMAP"+choose([" and find AHOS"])+choose([" plucking mushrooms out of the ground. She gobbles them down one by one."," digging out wild carrots growing in tall grass. She munches each one down as she find them."," picking berries. Her face is covered in their juices."," in a tree looking for apples. She tosses the half eaten apples to the ground whenever she finds a new one."]))
					}else if(unit(100).Slutty){
						Entrys.push("I hear moaning as I travel to AMAP."+choose([" The sound is coming from around a tree."," The sound is coming from behind a log."," The sound is coming from inside a patch of tall grass."])+choose([" The moaning stops when I call out. A moment of silence grows until I hear a muffles squeal of pleasure from the same direction as earlier. CAHOS pokes her head out before walking up to me as if nothing had just happened, but I can see that her inner thighs are soaked."," The moaning stops as I approach, and AHOS pokes her head out before sauntering over to me."," A feminine voice squeals out in pleasure as I approach, AHOS pokes her head out to look at me. Her face is flush and she has a dopey grin. She greets me as she saunters over."]))
						unit(100).CPle += 2
					}
				}
				if(Entrys.length == 0){
					Entrys.push("I travel to AMAP, and meet AHOS."+choose([""," She seems friendly!"," She doesn't seem hostile.",choose([" She catches me staring at her "+DescWord(unit(100),"breasts",100)+"breasts, but doesn't say anything."," She leads me to a place to sit, and asks me where I'm from. I stuggle to explain, and she changes the subject."," I see her steal a glance between my legs as I walk up."," Its nice to see a friendly face out here."," She warns me that this area isn't safe to be traveling alone. I wonder why that doesn't apply to her, but don't bother asking."," She asks if I'm an elf or drow. I try explaining that I'm human, but she looks at me confused."," She seems waves when she sees me."])]))//," A gust of wind coveres us in tiny leaves. We help brush eachother off."
				}
			}else{//MULTIPLE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Mousegirl"){
						Entrys.push("While exploring inside AMAP, a group of TAG"+choose(["s approach. They seem cautious, but friendly.","s approach me. They were peaking behind a rock before coming forward.", "s approach me. They don't look like they want to fight","s approach me. One waves at me with a smile, I guess they don't consider me a threat."]))
					}else{
						Entrys.push("While exploring inside AMAP, a group of TAGs find me. They look friendly, I don't think they want to fight.")
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Bunnygirl"){
						if(map[party.y][party.x].units.length > 2){
							Entrys.push("A"+choose([" cheerful "," happy "," friendly ","n energetic "])+"TAG opens the door to her MAP, and invites me inside. I follow her in and see more friendly faces sitting at a table.")
						}
						Entrys.push("I open the door to AMAP, and make my way inside. Some TAG"+choose(["'s are eating "," 's are munching "," 's are snacking "])+"at a table. The HOS says they have room for another.")	
					}
						Entrys.push("I open the door to AMAP, and make my way inside. A relaxing group of TAGs greet me.")
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin. A bathing TAG looks shocked when she sees me. She calms down when I tell her I'm just enjoying the water too.")
					Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin. A relaxing TAG looks surprised by my intrusion. She calms down when I tell her I'm just cooling off in the water.")

				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("I wade through the waters of the MAP and feel refreshed. A group of bathing TAGs look shocked when they see me. They calm down when I explain I'm just enjoying the water too.")
					Entrys.push("I wade through the waters of the MAP and feel refreshed. A group of relaxing TAGs look surprised by my intrusion. They calm down when I explain I'm just cooling off in the water.")
				}else{
					Entrys.push("I travel to AMAP. I meet a group of TAGs. They seem friendly!")
				}
			}
		}else{//HAVE FRIENDS
			if(map[party.y][party.x].units.length == 1){//ONE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Slimegirl"){
						Entrys.push("We spelunk inside AMAP and AHOS"+choose([" approaches. She seems cautious, but puts on a friendly face."," approaches us. She was peaking behind a rock before coming forward.", " approaches us. She doesn't look like she wants to fight."," approaches us. She waves at me with a smile."," approaches us. She was crawling out of the crevice she hid in, it looks like she just woke up."," approaches us. She seems friendly, I wonder why she lives in this cave."," approaches us. She clearly doesn't want to fight."," approaches us. She seems nice."," approaches us. She's smiling, but she nervously looks around at my group."," approaches us. Her face looks so cute!"," approaches us. She looks like easy prey!"," approaches us. My mouth is watering at the sight of her!"," approaches us. I wonder if she's interested in a little fun?"]))
					}else if(map[party.y][party.x].units[0].Tags[0] == "Drowgirl"){
						if(map[party.y][party.x].name.includes("Tunnel")){
						
						}else if(map[party.y][party.x].name.includes("Underground")){
						
						}else if(map[party.y][party.x].name.includes("Stairway")){
						
						}else{
						
						}
					}else{
						Entrys.push("We spelunk inside AMAP. We stumble upon AHOS who doesn't look hostile!")
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Bunnygirl"){
					if(PositiveUnit == null){
						NPCstring = "I open the door to"
					}else{
						NPCstring = "My POS opens the door to"
					}
					Entrys = []
						if(map[party.y][party.x].units[0].willing && Math.random()<.2 && map[party.y][party.x].units[0].Vanilla){
							unit(100).CPle = Math.round(unit(100).MPle - 1 - (Math.random()*2))
								Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS. With a naughty grin she asks if anyone need a bite!")
								Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS. While playing with her breasts she says we look hungry!")
								Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS. She shakes her tush at us and asks if she looks tasty!")
								Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS. While looking at us, she takes a meaty grip of her behind and offers herself to us!")
						}else if(map[party.y][party.x].units[0].Positive){
							Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS "+choose(["cleaning up her home.","chopping up some carrots.","washing some dishes."," sweeping the floor."]))
						}else if(map[party.y][party.x].units[0].Negative){
							Entrys.push(NPCstring+" AMAP, and we walk inside. A "+choose(["sleeping ","snoring ","napping ","snoozing "])+"TAG suddenly wakes, and looks at us"+choose([" with groggy eyes"," surprised"," while still half asleep"])+". She stands and stretches her arms. She doesn't seem too upset to have been woken up.")
						}else if(map[party.y][party.x].units[0].Funny){
							if(map[party.y][party.x].units[0].willing){
							Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS "+choose(["covered in paint next to a detailed portrait of a "+String(unit(Math.floor(Math.random()*(party.units.length-1))+1).Tags[0]).toLowerCase()+".","drawing on a sketchpad.","painting a picture on a canvas.","reading a book on a couch."]))
								}else{
							Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS "+choose(["covered in paint next to a beautiful portrait of herself.","drawing on a sketchpad.","painting a landscape on a canvas.","reading a book on a couch."]))
							}
						}else if(map[party.y][party.x].units[0].Slutty){
							if(map[party.y][party.x].units[0].willing && Math.random()<.1){
								unit(100).CPle = Math.round(unit(100).MPle - 3 - (Math.random()*4))
								Entrys.push(NPCstring+" AMAP, and we walk inside. A"+choose([" drinking "," drunk "," buzzed "," rosy cheeked "])+"TAG sits at a table. While holding a bottle, she asks if we'd prefer a swig of booze, or bite of bunny!")
							}else{
								Entrys.push(NPCstring+" AMAP, and we walk inside. A"+choose([" drinking "," drunk "," buzzed "," rosy cheeked "])+"TAG sits at a table. While holding a bottle, she asks if we'd like a "+choose(["drink","glass","shot","tasty brew","sip","swig"])+" with her.")
							}
						}else if(map[party.y][party.x].units[0].Hungry){
							if(map[party.y][party.x].units[0].willing && Math.random()<.1){
								unit(100).CPle = Math.round(unit(100).MPle - 3 - (Math.random()*4))
								Entrys.push(NPCstring+" AMAP, and we walk inside. A"+choose([" "," munching "," snacking "])+"TAG sits at a table eating some "+choose(["carrot cake","chocolate cake","pumpkin pie","cheezy pizza","freshly baked bread","oranges","sliced watermelon","chopped apples"])+". She asks if there's something we'd like to eat, or maybe some bunny...")
							}else{
								Entrys.push(NPCstring+" AMAP, and we walk inside. A"+choose([" "," munching "," snacking "])+"TAG sits at a table eating some "+choose(["carrot cake","chocolate cake","pumpkin pie","cheezy pizza","freshly baked bread","oranges","sliced watermelon","chopped apples"])+". She asks if anyone would like a slice.")
							}
						}else{
							Entrys.push("A"+choose([" cheerful "," happy "," friendly ","n energetic "])+"TAG opens the door to her MAP, and invites us inside. I duck my head as I walk in last, following the girls indoors.")
							Entrys.push(NPCstring+" AMAP, and we walk inside. A relaxing TAG greets us.")
						}
					}else{
						Entrys.push("A HOS opens the door to her MAP, and invites us inside. I duck my head as I walk in last, following the girls indoors.")
						Entrys.push(NPCstring+" AMAP, and we walk inside. A HOS greets us.")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A bathing TAG looks shocked when she sees us. She calms down when I tell her we're just enjoying the water too.")
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A relaxing TAG looks surprised by our intrusion. She calms down when I tell her we're just cooling off in the water.")
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("We wade through the waters of the MAP, and enjoy a peaceful swim. A bathing TAG looks shocked when she sees us. She calms down when I tell her we're just enjoying the water too.")
					Entrys.push("We wade through the waters of the MAP, and enjoy a peaceful swim. A relaxing TAG looks surprised by our intrusion. She calms down when I tell her we're just cooling off in the water.")
				}else{
					Entrys.push("We travel to AMAP and meet AHOS. She seems friendly!")
					if(PositiveUnit != null && PositiveUnit.Tags[0] != unit(100).Tags[0]){ 
						if(PositiveUnit.Tags[0] == "Froggirl"){
							Entrys.push("We travel to AMAP and meet AHOS. My POS gives the TAG a big smile with her tongue lolled out.")
						}
						Entrys.push("We travel to AMAP and meet AHOS. My POS greets her with a cheerful smile!" )
						if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS returns the smile and says she's happy to meet us."}
						if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS is too shy to return the greeting, she barely manages to wave at us."}
						if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS walks past her to approach me. She pinches my cheek and says my face looks goofy. What kind of introduction is that!"}
						if(unit(100).Slutty){Entrys[Entrys.length-1] += " As the HOS greets her back, she doesn't take her eyes off my POST's chest."}
					}
					if(NegativeUnit != null && NegativeUnit.Tags[0] != unit(100).Tags[0]){
						if(NegativeUnit.Tags[0] == "Froggirl"){
							Entrys.push("We travel to AMAP and meet AHOS. My NEG stares at the TAG intensely, her translucent eyelids help her keep eye contact when she blinks. I hope she doesn't get creeped out.")
						}
						Entrys.push("We travel to AMAP and meet AHOS. My NEG hides behind me as I greet the other girl." )
						if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS tells my shy friend she doesnt need to hide. My NEG walks up nervously, and the two share a friendly hug."}
						if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS seems cautious as well, I guess it can scary meeting new people in this world..."}
						if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS makes a funny face at her. My NEG laughs and stops hiding behind me. I guess thats all it takes to make a new friend."}
						if(unit(100).Slutty){Entrys[Entrys.length-1] += " As the HOS greets us, she keeps taking peeks at my NEGT."}
					}
					if(FunnyUnit != null && FunnyUnit.Tags[0] != unit(100).Tags[0]){
						if(FunnyUnit.Tags[0] == "Froggirl"){
							Entrys.push("We travel to AMAP and meet AHOS. My FUN waves enthusiastically at the TAG, making oddly squishy sounds in the process. The TAG falls down laughing.")
						}
						Entrys.push("We travel to AMAP and meet AHOS. My FUN makes a funny face at her.")
						if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS laughs heartily and says we must have lots of fun on our travels."}
						if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS rolls her eyes unimpressed."}
						if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS makes an even goofier face back!"}
						if(unit(100).Slutty){Entrys[Entrys.length-1] += " The HOS pretends to laugh, but her attention is locked on my FUNT's chest instead."}
					}
					if(SluttyUnit != null && SluttyUnit.Tags[0] != unit(100).Tags[0]){ 
						if(SluttyUnit.Tags[0] == "Froggirl"){
							Entrys.push("We travel to AMAP and meet AHOS. My SLU raises two slimy fingers before her mouth and runs her long tongue between them. The TAG blushes, but doesn't look away.")
						}
						Entrys.push("We travel to AMAP and meet AHOS. My SLU looks her up and down with a naughty look in her eye." )
						if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS does a curtsy before introducing herself to us."}
						if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS blushes when she notices the other girls gaze."}
						if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS strikes a pose and asks my SLU if she likes what she sees."}
						if(unit(100).Slutty){Entrys[Entrys.length-1] += " The HOS walks up and greets her with a kiss!"}
					}
					if(HungryUnit != null && HungryUnit.Feas > 6 && HungryUnit.Tags[0] != unit(100).Tags[0]){
						if(HungryUnit.Tags[0] == "Froggirl"){
							Entrys.push("We travel to AMAP and meet AHOS. My HUN's massive tongue lolls out as she watches the TAG. Her drool starts to puddle under her.")
						} else{
							Entrys.push("We travel to AMAP and meet AHOS. My HUN licks her lips at the sight of her!" )
						}
						if(unit(100).willing){
							if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS doesn't seem bothered by my drooling HUNT and greets us with a smile."}
							if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS strikes a pose and asks her if she likes what she sees."}
							if(unit(100).Slutty){Entrys[Entrys.length-1] += " The HOS blows her a kiss!"}
						}else{
							if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS looks startled when she notices the other girls gaze."}
							if(unit(100).Hungry && HungryUnit.Feas > 6){Entrys[Entrys.length-1] += " The HOS give her a ravenous look back."}
						}
					
					}
					if(AnyUnit.bust == -1 && unit(100).bust >= 2){
						Entrys.push(choose([
						"We travel to AMAP and meet AHOS. My ANY looks at her "+DescWord(unit(100),"breasts",100)+"breasts with envy.",
						"We travel to AMAP and meet AHOS. My ANY stares at her "+DescWord(unit(100),"breasts",100)+"breasts.",
						"We travel to AMAP and meet AHOS. My ANY keeps taking glances at her "+DescWord(unit(100),"breasts",100)+"breasts."
						]))
					}
					if(AnyUnit.bust >= 2 && unit(100).bust == -1){
						Entrys.push(choose([
						"We travel to AMAP and meet AHOS. She looks at my ANY's "+DescWord(unit(100),"breasts",100)+"breasts with envy.",
						"We travel to AMAP and meet AHOS. She at my ANY's "+DescWord(unit(100),"breasts",100)+"breasts.",
						"We travel to AMAP and meet AHOS. She keeps taking glances at my ANY's "+DescWord(unit(100),"breasts",100)+"breasts."
						]))
					}
					if(AnyUnit.Tags[0] == unit(100).Tags[0]){
						Entrys.push("We travel to AMAP and meet AHOS. My ANY runs up and hugs her.")
					} 
				}
			}else{//MULTIPLE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Mousegirl"){
						Entrys.push("We spelunk inside AMAP. A group of TAG"+choose(["s approach us. They seem cautious, but friendly.","s approach us. They were peaking behind a rock before coming forward.", "s approach us. They don't look like they want to fight","s approach us. One waves at me with a smile, I guess they don't consider us a threat."]))
					}else{
						Entrys.push("We spelunk inside AMAP. A group of TAGs find us. They look friendly, I don't think they want to fight.")
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Bunnygirl"){
						if(map[party.y][party.x].units[0].willing && Math.random()<.2){
						
						}
						if(map[party.y][party.x].units.length > 2){
							Entrys.push("A"+choose([" cheerful "," happy "," friendly ","n energetic "])+"TAG opens the door to her MAP. and invites us inside. We follow her in and see more friendly faces sitting at a table.")
						}
						Entrys.push("I open the door to AMAP, and we walk inside. Some TAG"+choose(["'s are eating "," 's are munching "," 's are snacking "])+"at a table, the HOS says they have room for plenty more.")	
					}
						Entrys.push("I open the door to AMAP, and we walk inside. A relaxing group of TAGs greet us.")
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A group of bathing TAGs look shocked when they see us. They calm down when I say we're just enjoying the water too.")
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A group of relaxing TAGs look surprised by our intrusion. They calm down when I explain we're just cooling off in the water.")
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("We wade through the waters of the MAP, and enjoy a peaceful swim. A group of bathing TAGs look shocked when they see us. They calm down when I say we're just enjoying the water too.")
					Entrys.push("We wade through the waters of the MAP, and enjoy a peaceful swim. A group of relaxing TAGs look surprised by our intrusion. They calm down when I explain we're just cooling off in the water.")
				}else{
					Entrys.push("We travel to AMAP where we meet a group of TAGs! They look friendly!")
				}
			}
		}
	}
	//TODO:Travel-Empty
	if(Basic == 3){//EMPTY-------------------------------------------------------------------------------------	
		if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "My Hut"){
			if(travel < 2){
				Logbook = "";
				if((map[party.y+lastMove[0]][party.x+lastMove[1]].name.includes("Cave") || map[party.y+lastMove[0]][party.x+lastMove[1]].name.includes("Cliff")) && (lastMove[1] == 0 || lastMove[0] == 0)){
					Entrys.push("My grand journey begins as I walk out of my hut towards AMAP. I'm immediately thwarted by a massive cliff! Why must my journey come to such an end! If only there was a path or trail I could follow instead of this insurmountable obstacle blocking my progress...")
				}else{
					if(map[party.y][party.x].name.includes("Forest")){
						Entrys.push("My grand journey begins as I walk out of my hut towards AMAP. A strong wind sends a shiver up my spine, reminding me that I'm completely nude.")
						Entrys.push("My grand journey begins as I walk out of my hut. The grass brushes against my bare feet as I walk towards AMAP.")
						Entrys.push("I peak out of the doorway before stepping outside. I feel exposed being outdoors completely naked, but there weren't any clothes in the hut. I make my way towards AMAP.")
						Entrys.push("I peak out of the doorway before stepping outside. There weren't any clothes in the hut, so I'm forced to leave completely nude. I make my way towards AMAP wondering if I'll be safer by avoiding the trail.")
					}else{
						Entrys.push("My grand journey begins as I leave my hut and walk along AMAP. A strong wind sends a shiver up my spine, reminding me that I'm completely nude.")
						Entrys.push("My grand journey begins as I walk out of my hut. I start walking along AMAP.")
						Entrys.push("I peak out of the doorway before stepping outside. I feel exposed being outdoors completely naked, but there weren't any clothes in the hut. I make my way along AMAP.")
						Entrys.push("I peak out of the doorway before stepping outside. There weren't any clothes in the hut, so I'm forced to leave completely nude. I make my way along AMAP wondering if I'll be safer by sticking to the path.")
					}
					//Entrys.push("I step out of the hut with my chest puffed out, eager to greet this strange world! I head towards AMAP.")
				}
			}else{
				if(party.units.length == 1){
					Entrys.push("I walk out of my hut towards AMAP.")
				}else{
					Entrys.push("We walk out of my hut towards AMAP.")
					Entrys.push("We walk out of my hut towards AMAP. I look back at my humble abode with pride!")
					Entrys.push("We walk out of my hut towards AMAP. I look back and a tear runs down my face, I sure did miss the place...")
				}
			}
		}else if(map[party.y][party.x].name == "My Hut"){
			if(party.units.length == 1){
				if(travel < 2){
					Entrys.push("I return to the hut I woke up in, I look around for something to wear, but the building is completely empty.")
				}else{
					Entrys.push("I return to the hut I woke up in, I can see an outline of myself burnt into the floorboards...")
				}
			}else if(party.units.length == 2){
				Entrys.push("We return to my hut, I point at the spot where I was brought into this world from my own, but my ANY don't seem very interested...")
			}else{
				Entrys.push("We return to my hut, I point at the spot where I was brought into this world from my own, but the others don't seem very interested...")
			}
		}else if(map[party.y][party.x].tag == "Entrance" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Cave"){//ENTER
			if(party.units.length == 1){//ALONE
				if(map[party.y][party.x].travel > -1){
					Entrys.push("I return to the mouth of the cave.")
				}else{
					Entrys.push("I approach the mouth of a dark cave. There is a faint light from some strange glowing mushrooms that sprout along the stone walls, but otherwise there is only blackness and large shadows. I don't think I should continue farther alone...")
					Entrys.push("I walk up to the maw of a dark cave. There is a faint light from some strange glowing mushrooms that cover the stone walls. I hear sounds of skittering come from inside. I don't think I should continue farther alone...")
					Entrys.push("I enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls, the sheen of a slimy trail leads farther into the depths. I don't think I should continue farther alone...")
					Entrys.push("I stand at the entrance of a rocky descent into the mountain. There is a faint light from some strange glowing mushrooms that cover the stone walls, large webs stretch across the ceiling, I don't think I should continue farther alone...")
				}
			}else{//HAVE FRIENDS
				if(map[party.y][party.x].travel > -1){
					Entrys.push("We return to the mouth of the cave.")
				}else{
					if(HungryUnit != null){
						Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls. My HUN asks if she can eat one, but I tell her they might not be safe.")
						Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls. My HUN almost licks a mushroom, but I stop her and say they might be poisonous.")
					}
					if(SluttyUnit != null){
						Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls. My SLU asks if we can get some alone time inside.")
						Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls. My SLU wraps her arm around mine, claiming to be afraid of the dark.")
					}
					if(FunnyUnit != null){
						Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls. My FUN shouts as loudly as she can into the cave, and her voice echoes back. If anyone is inside, they definitely heard her!")
						Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls. My FUN asks if I'm afraid of the dark. I put on a brave face, but she grins when I hesitate to continue into the cave.")
					}
					if(PositiveUnit == null){
						if(NegativeUnit == null){
							Entrys.push("We approach the mouth of a dark cave. There is a faint light from some strange glowing mushrooms that sprout along the stone walls, but otherwise there is only blackness and large shadows, I hope we don't get lost.")
							Entrys.push("We walk up to the maw of a dark cave. There is a faint light from some strange glowing mushrooms that cover the stone walls, we hear skittering from inside...")
							Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls, the sheen of a slimy trail leads farther into the depths...")
							Entrys.push("We stand at the entrance of a rocky descent into the mountain. There is a faint light from some strange glowing mushrooms that cover the stone walls, large webs stretch across the ceiling, I'm worried about going farther inside.")
						}else{
							Entrys.push("We approach the mouth of a dark cave. There is a faint light from some strange glowing mushrooms that sprout along the stone walls, but otherwise there is only blackness and large shadows. My NEG says she thinks we are going to get lost inside...")
							Entrys.push("We walk up to the maw of a dark cave. There is a faint light from some strange glowing mushrooms that cover the stone walls. We hear skittering from inside, and my NEG runs behind me to hide.")
							Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls, the sheen of a slimy trail leads farther into the depths. My NEG says we should turn back.")
							Entrys.push("We stand at the entrance of a rocky descent into the mountain. There is a faint light from some strange glowing mushrooms that cover the stone walls, large webs stretch across the ceiling, my NEG looks worried about going farther inside.")
						}
					}else{
						if(NegativeUnit == null){
							if(party.units.length > 2){
								Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls, the sheen of a slimy trail leads farther into the depths. My POS takes the lead and has us follow her to avoid the slime.")
								Entrys.push("We approach the mouth of a dark cave. There is a faint light from some strange glowing mushrooms that sprout along the stone walls, but otherwise there is only blackness and large shadows. My POS takes the lead and tells us to stick close behind her.")
								Entrys.push("We walk up to the maw of a dark cave. There is a faint light from some strange glowing mushrooms that cover the stone walls, we hear skittering from inside. My POS takes the lead and says she will protect us.")
							}else{
								Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls, the sheen of a slimy trail leads farther into the depths. My POS grabs my hand and leads me around the slime.")
								Entrys.push("We approach the mouth of a dark cave. There is a faint light from some strange glowing mushrooms that sprout along the stone walls, but otherwise there is only blackness and large shadows. My POS promises to keep me safe inside.")
								Entrys.push("We walk up to the maw of a dark cave. There is a faint light from some strange illuminating mushrooms growing from the stone walls, we hear skittering from inside. My POS takes the lead and says she will protect me!")
							}
						}else{
							Entrys.push("We stand at the entrance of a rocky descent into the mountain. There is a faint light from some strange glowing mushrooms that cover the stone walls, large webs stretch across the ceiling, my NEG looks worried about going farther inside, but my POS tells her everything will be ok.")
						}
					}
				}
			}
		}else if(map[party.y][party.x].tag == "Entrance" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Cave"){//EXIT
			if(party.units.length == 1){//ALONE
				Entrys.push("The light shines into my eyes and blinds me, I'm back outside of that scary cave!")
				Entrys.push("The warmth of the sun is a surprising comfort, that cave is too dangerous alone!")
			}else{//HAVE FRIENDS
				if(map[party.y][party.x].travel > -1){
					Entrys.push("We follow the light and return to the cave opening, I really missed the sun!")
					Entrys.push("We walk back out of the cave as our eyes adjust to the bright daylight.")
					Entrys.push("The warmth of the sun hits my body as we make our way back out of the cave.")
				}else{
					if(PositiveUnit == null){
						Entrys.push("I run ahead when I see a glint of light. It reveals a different way out of the cave!")
						Entrys.push("I run ahead when I see a glint of light. It reveals a different way out of the cave!")
						Entrys.push("I run ahead when I see a beam of light. It reveals a different way out of the cave!")
						Entrys.push("While wondering how far deep we are in the cave, I find a ladder leading up to a wooden hatch. When I flip it open, I feel the sun shining in my face. We found a new way out of the cave!")
						Entrys.push("While wondering if we should turn back, I find stairs carved into the rock. We follow them to a long tunnel with a bright light at the end. The outside world reveals itself as we finish walking through the tunnel. We found a new way out of the cave!")
						Entrys.push("I find a large stone disk resting against the cave wall. With some help I'm able to roll it to the side, revealing a path out of the cave!")
					}else{
						Entrys.push("My POS hurries ahead, saying she feels a breeze! She finds a different way out of the cave!")
					}
					Entrys.push("A beam of light reveals a different way out of the cave!")
					Entrys.push("We walk out of the cave as our eyes adjust to the bright daylight.")
					Entrys.push("The warmth of the sun hits my body as we make our way out of the cave.")
				}
			}
		
		}else if(map[party.y][party.x].tag == "Cave" && map[party.y][party.x].name.includes("Stairway")){
			if(lastMove[0]+lastMove[1]>0){
				if(party.units.length == 1){
					Entrys.push("I walk down AMAP.")
				}else{
					Entrys.push("We walk down AMAP.")
				}
			}else if(lastMove[0]+lastMove[1]<0){
				if(party.units.length == 1){
					Entrys.push("I walk up AMAP.")
				}else{
					Entrys.push("We walk up AMAP.")
				}
			}else{
				if(party.units.length == 1){
					Entrys.push("I walk along AMAP.")
				}else{
					Entrys.push("We walk along AMAP.")
				}
			}
		}else if(map[party.y][party.x].tag == "Cave" && map[party.y][party.x].name.includes("Underground")){
			if(party.units.length == 1){//ALONE
				Entrys.push(choose(["I "],["Without anyone else, I ","While shivering in fear, I ","Alone in the darkness, I "])+choose(["travel","wander","walk slowly","creep","lurk","spelunk","delve"])+" through AMAP.")
			}else if(AnyUnit != null && map[party.y][party.x].travel == -1 && Math.random()<.25){//HAVE FRIENDS 
				if(FindPersonality("Drowgirl")){
					AnyUnit = FindPersonality("Drowgirl")
					Entrys.push("We "+choose(["travel","wander","make our way"])+" through AMAP."+randomEntry("DrowUndergroundWithDrow")) 
				}else{
					Entrys.push("We "+choose(["travel","wander","make our way"])+" through AMAP."+randomEntry("DrowUnderground"))
				} 
			}else{//HAVE FRIENDS 
				Entrys.push("We "+choose(["travel","wander","walk","creep","lurk","spelunk","delve"])+" through AMAP.")
			}
		}else if(map[party.y][party.x].tag == "Cave" && map[party.y][party.x].name.includes("Tunnel")){
			if(map[party.y][party.x].travel == -1 && map[party.y-lastMove[0]][party.x-lastMove[1]].name.includes("Cave")){
				Entrys.push(choose(["A hole in the cave wall reveals a dark tunnel with","A carved doorway in the cave wall reveals a dim tunnel with","An opening in the cave wall reveals a lit tunnel with"])+choose([" illuminating crystals"," fluorescent crystals"," luminescent crystals"," planters full of the glowing mushrooms"])+choose([" affixed to the walls."," hanging from the ceiling"," placed along the walls."]))
			}else{
				if(party.units.length == 1){//ALONE
					Entrys.push(choose(["I "],["Without anyone else, I ","While shivering in fear I ","Alone in the darkness I "])+choose(["travel","wander","walk slowly","creep","lurk","spelunk","delve"])+" through AMAP.")
				}else if(AnyUnit != null && map[party.y][party.x].travel == -1 && Math.random()<.25){//HAVE FRIENDS 
					if(FindPersonality("Drowgirl")){
						AnyUnit = FindPersonality("Drowgirl")
						Entrys.push("We "+choose(["travel","wander","make our way"])+" through AMAP."+randomEntry("DrowTunnelWithDrow")) 
					}else{
						Entrys.push("We "+choose(["travel","wander","make our way"])+" through AMAP."+randomEntry("DrowTunnel"))
					} 
				}else{//HAVE FRIENDS 
					if(FindPersonality("Drowgirl") && party.units.length >= 3){
						AnyUnit = FindPersonality("Drowgirl")
						Entrys.push("My ANY "+choose(["guides us","leads us","takes us"])+" through AMAP.") 
					}else if(FindPersonality("Drowgirl") && party.units.length == 2){
						AnyUnit = FindPersonality("Drowgirl")
						Entrys.push("My ANY "+choose(["guides me","leads me","takes me","holds my arm as we travel","holds my hand as we travel","holds me close for warmth as we travel","makes idle conversation as we walk"])+" through AMAP.") 
					}else{
						Entrys.push("We "+choose(["travel","wander","walk","creep","lurk","spelunk","delve"])+" through AMAP.")
					}
				}
			}
		}else if(map[party.y][party.x].tag == "Cave" && map[party.y][party.x].name.includes("Cavern") == false && map[party.y][party.x].name.includes("Cave") == false){//IS THIS NEEDED???
			if(map[party.y][party.x].travel == -1 ){
				if(party.units.length == 1){
					Entrys.push("I walk to AMAP.")
				}else{
					Entrys.push("We walk to AMAP.")
				}
				if(FindPersonality("Drowgirl")){
					AnyUnit = FindPersonality("Drowgirl") 
					//SWITCH START ##############################################################
					switch (map[party.y][party.x].name) {
						case "Ruined Shrine":
							Entrys[Entrys.length-1] += " Ashes blanket the ground, and debris is heaped into piles along the back wall. My ANY seems upset to be here.";break;
						case "Dusty Alter":
							Entrys[Entrys.length-1] += " Dry blood is splattered everywhere, and a broken dagger slowly rusts on the engraved slab in the center of the room. My ANY inspects the jagged edge of the weapon with reverence before placing it back down.";break;
						case "Crumbling Statue":
							Entrys[Entrys.length-1] += " Chunks of marble blanket the tiled floor. Only the torso and below remain of the once imposing figure. My ANY flings a piece of the broken statue back at it. The impact forces the rest of the effigy to collapse as well.";break;
						case "Headless Statue":
							Entrys[Entrys.length-1] += " The dusty room shows no signs of debris from the damaged marble. My ANY gives the figure a low bow before returning to my side.";break;
						case "Maze of Catacombs":
							Entrys[Entrys.length-1] += " The air thickens the further in we go. Countless names written in a foreign script are carved above each recessed tomb. My ANY rubs her fingers over a few as we pass. A tear rolls down her cheek by the time we find the exit.";break;
						case "Abandoned Mine":
							Entrys[Entrys.length-1] += " Everything of worth seems to have been picked clean already. The only signs of the work done are the old broken tools that were discarded long ago. My ANY rubs her wrists nervously as we make our way through.";break;
						case "Crumbling Mine":
							Entrys[Entrys.length-1] += " Strange tremors cause dust to cascade down every few moments. I'm not sure it's very safe to stay here, but my ANY doesn't seem worried.";break;
						case "Bloody Mine":
							Entrys[Entrys.length-1] += " Signs of fighting and broken chains are everywhere. It looks like quite the struggle took place, but it's hard to tell who won. I try asking my ANY, but she refuses to talk about it.";break;
						case "Ransacked Library":
							Entrys[Entrys.length-1] += " Even the shelves that haven't been toppled have been stripped bare. Every painting has a slash through it, and the lack of dirt and dust hints that this was a recent event. My ANY seems heartbroken by the sight, but stays quiet when I try talking to her.";break;
						case "Charred Library":
							Entrys[Entrys.length-1] += " Ash hangs in the air, and coats every surface. Burnt bits of paper are the only remnants of what was probably a grand accumulation of knowledge. My ANY seems shocked by the sight, but turns away when I approach her.";break;
						case "Unmarked Tomb":
							Entrys[Entrys.length-1] += " Thick bars of steel, and heavy chains prevent anyone from opening the anonymous grave. It's very curious that someone would go to such lengths to protect an unnamed resting place. The solemn moment is ruined when my ANY spits on the stone door before walking away.";break;
						case "Ransacked Crypt":
							Entrys[Entrys.length-1] += " Stepping over the heavy stone door, I peak inside and see that every coffin has been cracked open. Some have even been upturned in pursuit of whatever valuables they might have had. My ANY can barely suppress her grin as she looks around.";break;
						case "Dusty Courtyard":
							Entrys[Entrys.length-1] += " The cave ceiling rises high above this abandoned sitting area. Planters full of withered weeds, and grimy slab benches are all that remain. My ANY forces me to sit with her and hold hands. We rest in silence for a few moments as she closes her eyes and goes still. When she's ready to leave, she kisses my cheek and pulls me to my feet.";break;
					}
					//SWITCH END ##############################################################
				}else{
					//SWITCH START ##############################################################
					switch (map[party.y][party.x].name) {
						case "Ruined Shrine":
							Entrys[Entrys.length-1] += " Ashes blanket the ground, and debris is heaped into piles along the back wall.";break;
						case "Dusty Alter":
							Entrys[Entrys.length-1] += " Dry blood is splattered everywhere, and a broken dagger slowly rusts on the engraved slab in the center of the room.";break;
						case "Crumbling Statue":
							Entrys[Entrys.length-1] += " Chunks of marble blanket the tiled floor. Only the torso and below remain of the once imposing figure.";break;
						case "Headless Statue":
							Entrys[Entrys.length-1] += " The dusty room shows no signs of debris from the damaged marble, I wonder if the top of the statue was destroyed or stolen...";break;
						case "Maze of Catacombs":
							Entrys[Entrys.length-1] += " The air thickens the further in I go. Countless names written in a foreign script are carved above each recessed tomb. A sigh of relief escapes me once I see the exit.";break;
						case "Abandoned Mine":
							Entrys[Entrys.length-1] += " Everything of worth seems to have been picked clean from here. The only signs of the work done are the old broken tools that were discarded long ago.";break;
						case "Crumbling Mine":
							Entrys[Entrys.length-1] += " Strange tremors cause dust to cascade down every few moments. I'm not sure it's very safe to stay here.";break;
						case "Bloody Mine":
							Entrys[Entrys.length-1] += " Signs of fighting and broken chains are everywhere. It looks like quite the struggle took place, but it's hard to tell who won.";break;
						case "Ransacked Library":
							Entrys[Entrys.length-1] += " Even the shelves that haven't been toppled have been stripped bare. Every painting has a slash through it, and the lack of dirt and dust hints that this was a recent event. In the center of everything lies a massive chandelier, heavily mangled from it's fall.";break;
						case "Charred Library":
							Entrys[Entrys.length-1] += " Ash hangs in the air, and coats every surface. Burnt bits of paper are the only remnants of what was probably a grand accumulation of knowledge.";break;
						case "Unmarked Tomb":
							Entrys[Entrys.length-1] += " Thick bars of steel, and heavy chains prevent anyone from opening the anonymous grave. It's very curious that someone would go to such lengths to protect an unnamed resting place.";break;
						case "Ransacked Crypt":
							Entrys[Entrys.length-1] += " Stepping over the heavy stone door, I peak inside and see that every coffin has been cracked open. Some have even been upturned in pursuit of whatever valuables they might have had. Judging by the footprints in the dust, this probably happened somewhat recently.";break;
						case "Dusty Courtyard":
							Entrys[Entrys.length-1] += " The cave ceiling rises high above this abandoned sitting area. Planters full of withered weeds, and grimy slab benches are all that remain.";break;
					}
					//SWITCH END ##############################################################
				}
			}else{
				if(party.units.length == 1){
					Entrys.push("I walk back to AMAP.")
				}else{
					Entrys.push("We walk back to AMAP.")
				}
				Entrys[Entrys.length-1] += choose([""],[" It feels somewhat colder here than I remember."," It feels somewhat warmer here than I remember."," The place is exactly the same as I had left it."," Nothing seems to have changed since I left."," Everything looks the same as it was the last time I was here."])	
			}			
		}else if(map[party.y][party.x].tag == "Cave"){
			if(party.units.length == 1){//ALONE
				Entrys.push(choose(["Without anyone else, I ","I ","While shivering in fear, I ","Alone in the darkness I "])+choose(["explore","wander","walk slowly","creep","lurk","spelunk","delve"])+" through AMAP.")
			}else{//HAVE FRIENDS
				Entrys.push(choose(["In the soft glow of the mushrooms, we ","Huddled together we ","Together we ","Through the darkness we ","We "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP."+choose(["","","","",""," I'm starting to miss the sunlight."," How much farther do we have to go?"," I'm starting to get scared!"," I'm jumping at the slightest noise."," My foot is wet after stepping in slime."," My face is itchy after walking through an old cobweb."]))
				if(HungryUnit != null && Math.random()<.25){
					Entrys.push(choose(["In the soft glow of the mushrooms, we ","Huddled together we ","Together we ","Through the darkness we ","We "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP."+choose([" The silence is broken when my HUN's stomach grumbles loudly, echoing off the cave walls. She blushes and says she needs something to eat."," The silence is broken when my HUN's stomach grumbles loudly, echoing off the cave walls. I hope nobody heard that!"]))
					if(WillingUnit != null && WillingUnit.Size <= HungryUnit.Size){
						Entrys.push(choose(["In the soft glow of the mushrooms, we ","Huddled together we ","Together we ","Through the darkness we ","We "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP."+choose([" The silence is broken when my HUN's stomach grumbles loudly, echoing off the cave walls. She blushes and asks if she can eat my "+WillingUnit.Name+" so she won't be so hungry. My"+WillingUnit.Name+" says she wouldn't mind!"," The silence is broken when my HUN's stomach grumbles loudly, echoing off the cave walls. I hope nobody heard that!"]))
					}
				}
				if(SluttyUnit != null && Math.random()<.25){
					Entrys.push(choose(["In the soft glow of the mushrooms, we ","Huddled together we ","Together we ","Through the darkness we ","We "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP."+choose([" My SLU whispers in my ear that fucking in a dark cave like this would be pretty exciting!"," I jump out of my skin when my SLU grabs my butt. She apologizes for scaring me and gives my cheek another squeeze before moving on."]))
				}
				if(FunnyUnit != null && Math.random()<.25){
					Entrys.push(choose(["In the soft glow of the mushrooms, we ","Huddled together we ","Together we ","Through the darkness we ","We "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP."+choose([" The silence is broken when my FUN leaps out of the shadows to scare me! I bop her on the head and tell her to stop joking around!"," The silence is broken when my FUN leaps out of the shadows to scare me! I almost faint as my heart threatens to beat itself out of my chest!"]))
				}
				if(FunnyUnit != null && NegativeUnit != null && Math.random()<.25){
					Entrys.push(choose(["In the soft glow of the mushrooms, we ","Huddled together we ","Together we ","Through the darkness we ","We "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP."+choose([" The silence is broken when my FUN leaps out of the shadows to scare my NEG! I bop her on the head and tell her to stop joking around!"," The silence is broken when my FUN leaps out of the shadows to scare my NEG! She screams in fright before hiding behind me as I tell her its all right."]))
				}
				if(PositiveUnit != null){
					if(NegativeUnit == null){
						Entrys.push(choose(["In the soft glow of the mushrooms, my POS leads the way as we ","Through the darkness, my POS leads the way as we "," My POS leads the way as we "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP.")
					}else{
						Entrys.push(choose([" My NEG hides behind POS as we "," My POS tells my NEG that everything will be fine as we "," My POS holds my NEG's hand as we "])+choose(["explore","wander around","walk slowly","lurk","spelunk","delve"])+" inside AMAP.")
					}
				}
				if(NegativeUnit != null){
					Entrys.push(choose(["In the soft glow of the mushrooms, we ","Huddled together, we ","Together we ","Through the darkness we ","We "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP."+choose(["","","","",""," My NEG says she misses the sunlight."," My NEG asks how much farther do we have to go?"," My NEG says shes starting to get scared!"," My NEG is jumping at the slightest noise."," My NEG says shes sticky from the slimy ground."," My NEG says she has a cobweb stuck to her."]))
				}
			}
		}else if(map[party.y][party.x].tag == "Canyon"){
			if(map[party.y][party.x].travel > -1){
				if(party.units.length == 1){
					Entrys.push("I walk through AMAP.")
				}else{
					Entrys.push("We walk through AMAP.")
				}
			}else{
				if(party.units.length == 1){
					Entrys.push(choose(["Small rocks tumble down a nearby cliff while I walk through AMAP.","Sand falls from one of the tall cliffs nearby as I walk through AMAP.","I walk through AMAP.","While walking through AMAP, the wind suddenly dies, it feels like an ill omen somehow.","While walking through AMAP, the wind suddenly dies, leaving a stifling heat in its place.","I see crumbling bones half buried in the ground as I travel through AMAP.","As I walk through AMAP, the remnants of a dry riverbed crunch under my feet.","A warm blast of air smashes into me as I travel through AMAP.","While I walk through AMAP, dust flows around my ankles as if I was wading in a stream.","As I walk through AMAP, the wind shifts. What once was pushing me back, now nudges me onward.","Tall cliffs conceal anyone watching from above as I make my way through AMAP.","Tall cliffs loom above as I make my way through AMAP.","Oversized pieces of eggshell crunch underfoot as I walk through AMAP."," I step over giant eggshells while traveling through AMAP.","Large feathers mar my path as I walk through AMAP.","Harsh winds howl as I travel through AMAP.","Dust stings my eyes as I make my way through AMAP!","A tumbleweed bounces past as I travel through AMAP."]))
				}else{
					Entrys.push(choose(["Small rocks tumble down a nearby cliff while we walk through AMAP.","Sand falls from one of the tall cliffs nearby as we walk through AMAP.","We walk through AMAP.","While walking through AMAP, the wind suddenly dies, it feels like an ill omen somehow.","While walking through AMAP, the wind suddenly dies, leaving a stifling heat in its place.","I see crumbling bones half buried in the ground as we travel through AMAP.","As we walk through AMAP, the remnants of a dry riverbed crunch under our us.","A warm blast of air smashes into us as we travel through AMAP.","While we walk through AMAP, dust flows around our ankles as if we were wading in a stream.","As we walk through AMAP, the wind shifts. What once was pushing us back, now nudges our group onward.","Tall cliffs conceal anyone watching from above as we make our way through AMAP.","Tall cliffs loom above as we make our way through AMAP.","Oversized pieces of eggshell crunch underfoot as we walk through AMAP."," We step over giant eggshells while traveling through AMAP.","Large feathers mar our path as we walk through AMAP.","Harsh winds howl as we travel through AMAP.","Dust stings my eyes as we make our way through AMAP!","A tumbleweed bounces past as we travel through AMAP."]))
				}
			}
		}else if(map[party.y][party.x].name == "Crossroads"){
			if(map[party.y][party.x].travel > -1){
				if(party.units.length == 1){//ALONE
					Entrys.push("I return to the crossroads and look at the different paths to take.")
				}else{//HAVE FRIENDS
					Entrys.push("We return to the crossroads and look at the different paths to take.")
				}
			}else{
				if(party.units.length == 1){//ALONE
					Entrys.push("I find multiple ways to take ahead of me."+choose([""," A signpost stands in the center, all the painted words have long since faded."," I wonder what different journeys await me along each choice..."," I hope I don't take the wrong path!"]))
				}else{//HAVE FRIENDS
					Entrys.push("We find multiple paths to take ahead of us.")
					if(PositiveUnit != null){
						Entrys[Entrys.length-1] += " My POS pats me on the back and says she will follow me no matter where I go."
					}else if(NegativeUnit != null){
						Entrys[Entrys.length-1] += " My NEG says we should just turn back and go home."
					}else if(FunnyUnit != null){
						Entrys[Entrys.length-1] += " My FUN spins a stick into the air, then points down the path the stick faces when it lands. I'm not sure thats the best way to make a decision."
					}else if(SluttyUnit != null){
						Entrys[Entrys.length-1] += " My SLU grabs my ass and says she will follow my cute behind no matter where it goes."
					}else if(HungryUnit != null){
						Entrys[Entrys.length-1] += " My HUN says she doesn't care where we go, as long as we get something to eat soon."
					}else{
						Entrys[Entrys.length-1] += " I wonder what different journeys await us along either one..."
					}
					Entrys.push("I find multiple ways to take ahead of us."+choose([""," A signpost stands in the center, all the painted words have long since faded."," I wonder what different journeys await us along each choice..."," I hope we don't take the wrong path!"]))
				}
			}
		}else if(map[party.y][party.x].tag == "Trail" || map[party.y][party.x].tag == "Road"){//TODO:Travel-Road
			if(map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Trail" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Road"){
				if(map[party.y][party.x].travel == travel-1){
					if(party.units.length == 1){//ALONE
						Entrys.push("I turn around and "+choose(["step back onto","start back upon"])+" AMAP.")
					}else{//HAVE FRIENDS
						Entrys.push("We turn around and "+choose(["step back onto","start back upon"])+" AMAP.")
					}
				}else if(map[party.y][party.x].travel > -1){
					if(party.units.length == 1){//ALONE
						Entrys.push("I "+choose(["step back onto","start back upon"])+" AMAP.")
					}else{//HAVE FRIENDS
						Entrys.push("We "+choose(["step back onto","start back upon"])+" AMAP.")
					}
				}else{
					if(party.units.length == 1){//ALONE
						Entrys.push("I "+choose(["step onto","start along"])+" AMAP.")
					}else{//HAVE FRIENDS
						Entrys.push("We "+choose(["step onto","start along"])+" AMAP.")
					}
				}
			}else if(map[party.y][party.x].travel == travel-1){
				if(party.units.length == 1){//ALONE
					Entrys.push("I turn around and walk back along AMAP."+GetMapHint())
				}else{//HAVE FRIENDS
					Entrys.push("We turn around and walk back along AMAP."+GetMapHint())
				}
			}else{
				if(party.units.length == 1){//ALONE
					TravelDialogCountdown--; 
					if(TravelDialogCountdown <= 0 && map[party.y][party.x].travel == -1){
						TravelDialogCountdown = 5+(Math.random()*5)
						if(Math.random() < .1 && map[party.y][party.x].name.includes("Rocky")){
							Entrys.push("I "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet start to hurt on the rough stones.")
						}else if(Math.random() < .1 && map[party.y][party.x].name.includes("Muddy")){
							Entrys.push("I "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet are totally covered in grime now.")
						}else if(Math.random() < .1 && map[party.y][party.x].name.includes("Overgrown")){
							Entrys.push("I "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet are getting cut from the wild bramble on the path.")
						}else if(Math.random() < .1 && map[party.y][party.x].name.includes("Faded")){
							Entrys.push("I "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. I wonder how long its been since someone else came this way.")
						}else if(Math.random() < .1 && map[party.y][party.x].name.includes("Rutted")){
							Entrys.push("I "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. I almost trip on the large grooves made by a wagon or cart.")
						}
					}
					if(Entrys.length == 0){
						Entrys.push("I "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP."+GetMapHint())
					}
				}else{//HAVE FRIENDS		TODO:Travel-Road-Friends
					TravelDialogCountdown--;
					//LogEntry(TravelDialogCountdown)
					if(TravelDialogCountdown <= 0 && map[party.y][party.x].travel == -1){
						TravelDialogCountdown = Number(choose([3,5,7]))
						if(PositiveUnit != null){
							if(PositiveUnit.Tags[0] == "Catgirl"){
								Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My POS"+choose([" grabs me by the ear and pulls me close."," motions for me to bend closer."," gently pulls my face to hers."])+choose([" She starts to lick my cheek. Her rough tongue tugs at my skin."," Before I can ask, she starts licking my cheek with her tongue."," She calls me gross, and starts licking my face. Her tongue tugs at my cheek."])+choose([" Afterwards, she tilts my head back and forth making sure I'm clean."," Afterwards, she inspects me closely to make sure I'm clean."," Afterwards she smiles, and tells me I'm all clean now."," Then, without a word, she prances back ahead of me."]))
							}
						}
						if(NegativeUnit != null && Math.random()<.5){
							if(NegativeUnit.Size <= 4){
								Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My NEG"+choose([" has me carry her for most of the way."," hops on my back and has me carry her the whole way."]))
								if(PositiveUnit != null){
									if(PositiveUnit.Size > NegativeUnit.Size){
										Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My NEG"+choose([" has my POS carry her for most of the way."," hops on my POS's back and gets carried the whole way."]))
									}else{
									
									}
								}
							}
							if(Math.random()<.20){
								Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My NEG"+choose([" sighs loudly and complains about"," whines about"," lags behind and gripes about"," doesn't stop complaining about"])+choose([" her feet hurting."," how tired she is."," how boring it is to travel."," wanting to take a nap."]))
							}
							if(party.units.length > 2){
								Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My NEG"+choose([" slows us down the whole way."," lags far behind us."," lags behind the whole way."," is walking far behind us."," drags her feet the whole way."," struggles to keep up."]))
								if(Math.random()<.50){
									if(PositiveUnit != null && party.units.length > 3){
										Entrys[Entrys.length-1] += " My POS"+choose([" holds her hand and keeps her motivated."," stays by her side and keeps her spirits up."," stays behind with her and tells us to walk ahead."])
									}
									if(FunnyUnit != null){
										Entrys[Entrys.length-1] += " My FUN"+choose([" asks if we can just leave her behind."," calls her lazy."," tells her to keep up or go home."," says we should run as fast as we can to lose her."])
									}else if(HungryUnit != null && HungryUnit.Size >= NegativeUnit.Size){
										Entrys[Entrys.length-1] += " My HUN"+choose([" asks if we can just eat her."," threatens to eat her if she doesn't catch up."," asks if she can eat her so we don't have to walk so slow."," says we should just eat her."])
									}else if(SluttyUnit != null){
										Entrys[Entrys.length-1] += " My SLU"+choose([" asks if we have time for a quickly while we wait for her to catch up."])
									}
								}
							}
						}
						if(FunnyUnit != null){
							Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My FUN"+choose([" tells a story"," holds my hand and tells me a story"," keeps us entertained by telling a story"," smiles while she tells a story"," helps pass the time by telling a story"])+choose([".",".",".",".","."," about a mousegirl who got caught by a spider."," about the time she ate a mermaid she found in a well."," about her sister who got eaten last year."," about when she fought the demon queen and won. She sounds serious the whole time."," about the time her mother caught her masturbating."," of the time she walked in on her sister and three other girls having an orgy."," of the time her sister came during dinner."," of the time her sister almost got eaten."," of the time she pulled her sister out of another girls maw."," about a haunted house full of ghosts."," about the time she got a cucumber stuck up her butt!"," about the time she ate the spiciest pepper ever!"," about the time she found her sister stuck in a tree."," about the time her sister pushed her into a raging river."," about the time she ate all of her sisters chocolate."," about an ogre made of layers."," about where she got her fist stuck inside for a full day."," about the time she sat on a mushroom."," of the time when the moon turned purple for a whole month."," of the time she ate a big purple mushroom and it turned her pee purple ever since."," of the time she almost got eaten by her mother after making her mad."," of the time she made another girl cum with just her toe."," about the time she got her whole leg stuck inside another girls muff."," about the time she swallowed an entire watermelon and it sprouted inside her."," about the time she came so hard she broke her bed."]))
							if(Math.random()<.5){
								if(PositiveUnit != null){
									Entrys[Entrys.length-1] += " My POS"+choose([" listens with interest the whole time."," asks a bunch of questions when she's done."," looked amazed the whole time."])
								}else if(NegativeUnit != null){
									Entrys[Entrys.length-1] += " My NEG"+choose([" sighs and said she's never heard such a boring story."," yawns and doesn't seem very impressed."," asks if she knows any better stories."," doesn't bother to listen."])
								}
							}
							Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My FUN"+choose([" tells a bunch of jokes"," holds my hand and tells me a long joke"," tells silly jokes"," smiles as she tells a silly tale"," grins as she tells me horrible jokes"])+choose([".",".",".",".","."," to help pass the time"," while we walk.",". I laugh throughout the journey.",", it helps the journey go faster."," about passing gas."," about all the places a mousegirl will fit."," about the demon queen."]))
						}
						if(SluttyUnit != null && Math.random()<.5){
							Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My SLU"+choose([" keeps grabbing my butt throughout the journey"," walks right behind me"," spanks me as we walk"," keeps checking me out"," stares at my butt throughout the journey"])+choose([".",".",choose([" while she whistles loudly."," while she casually rubs herself!"," while asking if I want to get frisky."," while saying she wants me.",". She says she's getting too turned on to keep walking.",". She asks if we can take a break for some fun."]) ]) )
						}
						if(HungryUnit != null && Math.random()<.5){
							Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My HUN"+choose([" sighs loudly and complains about"," whines about"," lags behind and gripes about"," doesn't stop talking about","'s stomach grumbles as she talks about"])+choose([" needing something to eat."," how empty her belly is."," how hungry she is."," how long its been since her last meal."," how she's withering away from all this travel without anything to eat."," stopping to find some food."]))
							if(WillingUnit != null && HungryUnit.Size >= WillingUnit.Size && WillingUnit != HungryUnit){
							Entrys[Entrys.length-1] += " My WIL"+choose([" tells her she wouldn't mind getting eaten."," says we can eat her whenever we want."," tells us she's ready to be eaten."," tells us we should eat her before someone else gets the chance."," tells her she's the perfect meal for a long journey."])
							}
							if(VanillaUnit != null ){
								if(HungryUnit.Tags[0] != "Froggirl" && VanillaUnit.Tags[0] == "Froggirl"){
									if(VanillaUnit.willing && Math.random()<.75){
										Entrys.push("While we travel AMAP, my HUN rubs a finger up my VAN's slimy back. She then sticks the messy digit into her mouth. My froggirl blushes when she"+choose([" asks for another taste."," says its delicious."," moans while enjoying her flavor."]))
									}else{
										Entrys.push("While we travel AMAP, my HUN rubs a finger up my VAN's slimy back. She then sticks the messy digit into her mouth. My froggirl"+choose([" says she can have a taste any time."," asks if she tastes good. She gets a thumbs up."]))
									}
								}
							}
						}
						if(WillingUnit != null && Math.random()<.1){
							Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My WIL"+choose(["","","","",""," rubs my stomach while she"," pats my stomach and"," walks besides me and"," holds my hand as she"])+choose([" asks if all this travel is giving me an appetite."," asks if all this walking is making me hungry."," asks if I want to stop and eat."," asks if my belly is getting hungry."," asks if we should take a break to eat."," asks how I'm not already starving from our long journey."])+choose(["","","",""," She says she wouldn't mind if I ate her."," She says I can eat her whenever I want."," She says I should eat her so I don't become malnourished!"," She tells me she's ready to be eaten whenever I get a craving for her."," She tells me I should eat her before someone else gets the chance."," She tells me she's the perfect meal for a long journey."]))
						}
						if(AnyUnit != null){
							if(party.units.length == 2){
								Entrys.push(choose(["I hold hands with my ANY as ","My ANY holds my hand as ","My ANY rests her head against me as"])+"we "+choose(["follow", "travel"," continue down"])+" AMAP.")
							}
							if(AnyUnit.Tags[0] == "Bunnygirl"){
								Entrys.push("While traveling, my ANY finds a wild carrot growing on the side of the MAP"+choose([", she hops over and yanks it free from the ground before holding it up like a trophy. She chews loudly as we continue walking.",", and munches it down before we carry on.",", and munches it down as we leave her behind. She's pouting when she catches up to us.",". She nibbles on it as we continue walking."]))
								Entrys.push("My ANY hops onto my back, I give her an impromptu ride on my shoulders as we travel. "+choose(["We continue along the MAP in silence.","She messes with my hair as we continue along the MAP.","She plays with my ears as we continue along the MAP.","She rubs her thighs against my cheeks as I carry her."]))
							}else if(AnyUnit.Tags[0] == "Batgirl"){
								Entrys.push("While traveling along AMAP, "+choose(["my ANY flies high above.","my ANY glides above me."]))
								Entrys.push("We "+choose(["walk along","follow", "travel"," continue down"])+" AMAP. My ANY "+choose([" holds a wing above her head. The sun must be bothering her, but she doesn't complain.","complains about the bright sun as she holds a wing above her head.","looks miserable under the bright sun.","says we should go explore underground again. I don't think she likes being out in the sun."]))
							}else if(AnyUnit.Tags[0] == "Slimegirl"){
								Entrys.push("We "+choose(["walk down","follow", "travel"," continue down"])+" AMAP. My ANY"+choose([" leaves sticky footprints behind."," takes the form of a slug. She leaves a slimy trail behind us.","'s legs merge into a gooey tail. Her hips move side to side as she glides along besides me."," takes a blobby teardrop shape. She plops along ahead of me."]))
							}else if(AnyUnit.Tags[0] == "Foxgirl" || AnyUnit.Tags[0] == "Wolfgirl"){
								Entrys.push("While traveling along AMAP, my ANY"+choose([" squeezes my side, and tells me I'm too flabby."," squeezes my bicep, and tells me I'm too weak."," walks close, and keeps brushing her fluffy tail against me."]))
								Entrys.push("While traveling along AMAP, my ANY runs over to a "+choose(["fallen tree","old stump","hollow log","crushed barrel","faded signpost"])+", and crouches to sniff around. "+choose(["She walks back with a frown, but won't tell me whats wrong.","She runs back with a smile on her face, but won't tell me why.","I turn away when she hikes her leg over it."," After a while she walks back and we carry on."," She walks back and tells me someone was here recently."]))
								Entrys.push("While traveling along AMAP, I find a stick. I wave it at ANY before throwing it with all my strength."+choose([" Her tail wags furiously, but she resists the temptation to chase it."," She eagerly fetches it."," She only rolls her eyes."," She laughs and says she doesn't do that anymore."," Her tail wags as she fetches it."," She brings it back covered in drool."," Her eyes grow wide before running after it. She pouts while bringing it back. I ask whats wrong, and she says I shouldn't tease her like that. We hug after I apologize."]))
							}else if(AnyUnit.Tags[0] == "Catgirl"){
								Entrys.push("We "+choose(["follow", "travel"," continue along"])+" AMAP. My ANY"+choose([" keeps her distance from me. I hope she just needs some space."," keeps her distance from me. I hope I didn't upset her somehow."," hops onto my back, and wraps her legs around me. She licks my hair with her rough tongue as we walk."," rests her head against me and purrs as we walk."," asks me to rub her ears while we walk."+choose([" She rests her head against me as I do."," She wraps an arm around me as I do."," Her tongue lolls out as I do."]),"'s ears are perked up, alert for anyone ahead.","'s tail hangs low, I wonder if something is bothering her.","'s tail swishes back and forth as we walk."]))
							}else if(AnyUnit.Tags[0] == "Froggirl"){
								Entrys.push("While traveling along AMAP, my ANY"+choose([" gives me a big hug"," hugs me from behind"])+choose([", covering me in musus.",". When she pulls away, she leaves a sticky mucus behind."]))
								Entrys.push(choose(["Instead of walking, my ANY hops as ","My ANY hops onto my back, covering me in mucus. I carry her as ","MY ANY croaks loudly as "])+"we "+choose(["follow", "travel"," continue down"])+" AMAP.")
							}
						}
						if(Entrys.length == 0){
							if(map[party.y][party.x].name.includes("Rocky")){
								Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet start to hurt on the rough stones.")
							}else if(map[party.y][party.x].name.includes("Muddy")){
								Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet are totally covered in grime now.")
							}else if(map[party.y][party.x].name.includes("Overgrown")){
								Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet are getting cut from the wild bramble on the path.")
							}else if(map[party.y][party.x].name.includes("Faded")){
								Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. I wonder how long its been since someone else came this way.")
							}else if(map[party.y][party.x].name.includes("Narrow")){
								Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. We have to walk single file at times.")
							}else if(map[party.y][party.x].name.includes("Rutted")){
								Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. I almost trip on the large grooves made by a wagon or cart.")
							}else{
								Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet are getting tired from all this walking.")
								Entrys.push("I hold hands with my ANY as we "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP.")
								Entrys.push("With an arm draped around my ANY, we "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP.")
								Entrys.push("My ANY wraps an arm around me as we "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP.")
							}
						}
					}
					if(PositiveUnit != null && Entrys.length == 0){
						Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My POS"+choose([" takes the lead"," walks ahead"," walks in front"," stays in front"," stays ahead"])+choose([".",".",".",".",".",".",", keeping an eye out for danger.",", alert for any threats."," to make sure its safe."])+GetMapHint("POS"))
						if(party.units.length > 2){
							Entrys.push("My POS"+choose(["keeps an eye out"," guides us"," takes the lead"," is always ahead of us"," stays ahead of us"," stays alert"," stays in front of us"," stays in front"," stays ahead"])+" as we "+choose(["walk along","follow", "travel"," continue along"])+" AMAP.")
						}
						if(party.units.length > 2){
							Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My POS"+choose([" leads us"," walks in front us"," walks ahead of us"," stays in front of us"," stays ahead of us"])+choose([".",".",".",".",".",".",", keeping an eye out for danger.",", alert for any threats."," to make sure its safe."])+GetMapHint("POS"))
						}
					}
					if(Entrys.length == 0){
						Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP."+GetMapHint())
					}
				}
			}
		}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
			if(party.units.length == 1){//ALONE
				Entrys.push("I hop into the MAP and enjoy the feel of the water against my skin.")
			}else{//HAVE FRIENDS
				Entrys.push("We hop into the MAP, and enjoy a peaceful swim.")
			}
		}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
			if(party.units.length == 1){//ALONE
				Entrys.push("I wade through the waters of the MAP and feel refreshed.")
			}else{//HAVE FRIENDS
				Entrys.push("We wade through the waters of the MAP and feel refreshed.")
			}
		}else if(map[party.y][party.x].tag == "Dungeon"){
			if(map[party.y][party.x].name == "Boss"){
				Entrys.push("The Throneroom seems so empty and alone without the Queen in it.")
			}
			if(map[party.y][party.x].name == "Door"){
				if(party.units.length == 1){
				//LogEntry((map[party.y-lastMove[0]][party.x-lastMove[1]].travel) +" - "+ (travel))
					if(map[party.y][party.x].travel == -1 && map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Hall"){
							Entrys.push("I find a lever and another wall opens up, revealing the massive entranceway of the castle.")
					}else if(map[party.y][party.x].travel == -1){
							Entrys.push("I step into the massive entranceway of the castle, I'm not sure I should be here alone...")
					}else{
						Entrys.push("I once again step into the massive entranceway of the castle.")
					}
				}else{
					if(map[party.y][party.x].travel == -1 && map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Hall"){
						if(PositiveUnit != null){
							Entrys.push("My POS finds a lever and another wall opens up, revealing the massive entranceway of the castle.")
						}else if(FunnyUnit != null){
							Entrys.push("My POS nervously backs into a lever and another wall opens up, revealing the massive entranceway of the castle. She tries to brag that she did it on purpose.")
						}else{
							Entrys.push("I find a lever and another wall opens up, revealing the massive entranceway of the castle.")
						}
					}else if(map[party.y][party.x].travel == -1){
						if(map[party.y][party.x].owner == "Harpy"){
							Entry = choose(["lofty ","tall ","towering "])	
						}else if(map[party.y][party.x].owner == "Drow"){
							Entry = choose(["shadowy ","dark ","gloomy "])
						}else if(map[party.y][party.x].owner == "Wolf"){
							Entry = choose(["brutish ","rough-hewn ","rustic "])
						}else{
							Entry = " "
						}
						if(PositiveUnit != null){
							Entrys.push("My POS steps into the massive entranceway of the "+Entry+"castle before motioning us to follow.")
							

						}else if(NegativeUnit != null){
							Entrys.push("We step into the massive entranceway of the "+Entry+"castle. My NEG grabs my arm and tries to walk us back outside. I give her a hug and tell her she'll be safe.")
						}else{
							Entrys.push("We step into the massive entranceway of the "+Entry+"castle.")
						}
						if(FunnyUnit != null){
							Entrys[Entrys.length-1] += " The seriousness of the situation is broken when my FUN toots. She only shrugs when I look back at her."
						}else if(HungryUnit != null){
							Entrys[Entrys.length-1] += " The seriousness of the situation is broken when my HUNs stomach growls loudly. She pouts when I look back at her."
						}else if(SluttyUnit != null){
							Entrys[Entrys.length-1] += " The seriousness of the situation is broken when my SLU smacks my ass. She grins and tells me to relax."
						}
					}else{
						Entrys.push("We once again step into the massive entranceway of the "+Entry+"castle.")
					}
				}
			}
			if(map[party.y][party.x].name == "Hall"){
				if(party.units.length == 1){
					if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Door" && map[party.y][party.x].travel == -1){
						map[party.y-lastMove[0]][party.x-lastMove[1]].travel = -1;
						Entrys.push("I walk farther into the castle and hear a low grumbling behind me, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway I just walked through!")
					}else if(map[party.y][party.x].travel > -1){
						Entrys.push("I retrace my steps and walk into an empty room.")
						Entrys.push("I walk back into an empty room.")
						Entrys.push("I return to an empty room.")
						Entrys.push("I walk though the open door into an empty room.")
					}else{
						Entrys.push("I kick open the wooden door and charge inside. I rush into the room before realizing its empty.")
					}
				}else{
					if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Door" && map[party.y][party.x].travel == -1){
						map[party.y-lastMove[0]][party.x-lastMove[1]].travel = -1;
						if(NegativeUnit != null){
							Entrys.push("We walk farther into the castle and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through! My NEG shrieks when she realizes we are trapped inside.")
						}else{
							Entrys.push("We walk farther into the castle and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through!")
						}
					}else if(map[party.y][party.x].travel > -1){
						Entrys.push("We retrace our steps and walk into an empty room.")
						Entrys.push("We walk back into an empty room.")
						Entrys.push("We return to an empty room.")
						Entrys.push("We walk though the open door into an empty room.")
					}else{
						if(PositiveUnit != null && Math.random()<.75){
							if(FunnyUnit != null && Math.random()<.5){
								Entrys.push("My POS kicks open the wooden door and we charge inside before noticing the rooms empty. My FUN starts laughing uncontrollably at how serious we all were for nothing.")
							}
							if(NegativeUnit != null && Math.random()<.5){
								Entrys.push("My POS kicks open the wooden door and we charge inside before noticing the rooms empty. My NEG rests against a table looking relieved that she gets a break from the fighting.")
							}
							if(HungryUnit != null && Math.random()<.5){
								Entrys.push("My POS kicks open the wooden door and we charge inside before noticing the rooms empty. My HUN walks over to a shelf of fruit and starts munching away.")
							}
							Entrys.push("My POS kicks open the wooden door and we charge inside before noticing the rooms empty.")
						}else{
							if(FunnyUnit != null && Math.random()<.5){
								Entrys.push("I kick open the wooden door and we charge inside before noticing the rooms empty. My FUN starts laughing uncontrollably at how serious we all were for nothing.")
							}
							if(NegativeUnit != null && Math.random()<.5){
								Entrys.push("I kick open the wooden door and we charge inside before noticing the rooms empty. My NEG rests against a table looking relieved that she gets a break from the fighting.")
							}
							if(HungryUnit != null && Math.random()<.5){
								Entrys.push("I kick open the wooden door and we charge inside before noticing the rooms empty. My HUN walks over to a shelf of fruit and starts munching away.")
							}
							if(SluttyUnit != null && Math.random()<.5){
								Entrys.push("I kick open the wooden door and we charge inside before noticing the rooms empty. My SLU hugs me from behind, telling me how brave I am.")
								Entrys.push("I kick open the wooden door and we charge inside before noticing the rooms empty. My SLU hugs me from behind, telling me how brave I am. She starts reaching between my legs, but I slap her hand away because we need to stay focused in here!")
								Entrys.push("I kick open the wooden door and we charge inside before noticing the rooms empty. My SLU finds a bottle of booze, and quickly pops it open. We take a break and finish it before continuing. ")
							}
							Entrys.push("I kick open the wooden door and we charge inside before noticing the rooms empty.")
							if(map[party.y][party.x].owner == "Harpy" && Math.random()<.25){
								Entrys.push(choose([
									"I kick open the wooden door and we charge inside before noticing the rooms empty besides some old feathers.",
									"I kick open the wooden door and we charge inside before noticing the rooms empty besides a slew of feathers.",
									"I kick open the wooden door and we charge inside before noticing the rooms empty besides a few cracked eggshells."
								]))
							}else if(map[party.y][party.x].owner == "Drow" && Math.random()<.25){
								Entrys.push(choose(["I kick open the wooden door and we charge inside before noticing the room is empty besides a humanoid skeleton assembled on a table.",
									"I kick open the wooden door and we charge inside before noticing the room is empty besides a crusty bloodstained rug.",
									"I kick open the wooden door and we charge inside before noticing the room is empty besides an empty torture rack.",
									"I kick open the wooden door and we charge inside before noticing the room is empty besides a forge covered in half finished blades.",
									"I kick open the wooden door and we charge inside before noticing the room is empty besides a few large empty cages.",
									"I kick open the wooden door and we charge inside before noticing the room is empty besides a table covered in unfinishes leather armor.",
									"I kick open the wooden door and we charge inside before noticing the room is empty besides a rack of new looking swords.",
									"I kick open the wooden door and we charge inside before noticing the room is empty besides a rack of leather armor.",
									"I kick open the wooden door and we charge inside before noticing the room is empty besides a table stacked in leather. My stomach lurches as I wonder where they sourced the material.",
									"I kick open the wooden door and we charge inside before noticing the room is empty besides a bloody operating table covered in gruesome knives."
								]))
							}else if(map[party.y][party.x].owner == "Wolf" && Math.random()<.25){
								Entrys.push(choose([
									"I kick open the wooden door and we charge inside before noticing the rooms empty besides heaps of fur."
								]))
							}
							if(PositiveUnit != null && Math.random()<.25){
								Entrys[Entrys.length-1] += " My POS stays cautious even without any enemies to fight."
							}if(NegativeUnit != null && Math.random()<.25){
								Entrys[Entrys.length-1] += " My NEG looks relieved that there aren't any enemies to fight."
							}else if(FunnyUnit != null && Math.random()<.25){
								Entrys[Entrys.length-1] += " My FUN only shrugs when there aren't any enemies to fight."
							}else if(HungryUnit != null && Math.random()<.25){
								Entrys[Entrys.length-1] += " My HUN looks disappointed that there aren't any enemies to fight."
							}else if(SluttyUnit != null && Math.random()<.25){
								Entrys[Entrys.length-1] += " My SLU only shrugs when there aren't any enemies to fight."
							}else if(AnyUnit != null && Math.random()<.25){
								Entrys[Entrys.length-1] += " My ANY looks around with a worried expression."
							}
						}
					}
				}
			}
		}else{
			if(party.units.length == 1){//ALONE
				if(map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Entrance"){
					Entrys.push("I leave the "+choose(["spooky","scary","shadowy","dark","","","","",""])+" cave and travel to AMAP.")
				}else{
					if(map[party.y][party.x].travel == travel-1){
						Entrys.push("I turn around and head back to AMAP.")
					}else if(map[party.y][party.x].travel > -1){
						//Entrys.push("I travel back to AMAP.")
						Entrys.push("I travel to AMAP.")
					}else{
						Entrys.push("I travel to AMAP."+GetMapHint())
					}
				}
			}else{//HAVE FRIENDS
				if(map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Entrance"){
					Entrys.push("We leave the "+choose(["spooky","scary","shadowy","dark","","","","",""])+" cave and travel to AMAP.")
				}else{
					if(map[party.y][party.x].travel == travel-1){
						Entrys.push("We turn around and head back to AMAP.")
					}else if(map[party.y][party.x].travel > -1){
						//Entrys.push("We travel back to AMAP.")
						if(travel - map[party.y][party.x].travel <= 2){ 
							Entrys.push("We travel back to AMAP.")
						}else{
							Entrys.push("We travel to AMAP.")
						}
						if(travel - map[party.y][party.x].travel > 50 && Math.random()<.1){
							Entrys.push("We travel to AMAP."+choose([" Everything looks the same as last time."," This area feels familiar"," My ANY says this area seems familar."," I've definitely been here before."," I find my old footprints from the last time I was here."," My ANY finds my old footprints from the last time I was here."]))
						}
						
					}else{
						if(map[party.y][party.x].name == "Forest"){
							if(PositiveUnit != null && Math.random()<.2){
								Entrys.push("We travel to AMAP. My POS"+choose([" takes the lead"," walks ahead"," walks in front"," stays in front"," stays ahead"])+choose([".",".",".",".",".",".",", she finds a path through the thick underbrush."," to find a way through the thick underbrush.",", keeping an eye out for danger.",", alert for any threats."," to make sure its safe."]))
								if(party.units.length > 2){
									Entrys.push("We travel to AMAP. My POS"+choose([" leads us"," walks in front us"," walks ahead of us"," stays in front of us"," stays ahead of us"])+choose([".",".",".",".",".",".",", she finds a path  for us through the thick underbrush.",", she guides us through the thick underbrush."," to find a way through the thick underbrush.",", keeping an eye out for danger.",", alert for any threats."," to make sure its safe."]))
								}
							}
							if(NegativeUnit != null && Math.random()<.1){
								Entrys.push("We travel to AMAP. My NEG"+choose([" sighs loudly and complains about"," whines about"," lags behind and gripes about"," doesn't stop complaining about"])+choose([" all the roots she keeps tripping over."," her feet hurting."," how tired she is."," how boring it is to travel in a forest."," wanting to take a nap."]))
							}
							if(FunnyUnit != null && Math.random()<.1){
								Entrys.push("We travel to AMAP. My FUN"+choose([" lets a branch sling back and hit me in the face. She grins as I spit out a leaf."," teases me when I walk through a spiderweb."," laughs at me when I trip over a root."," giggles as I struggle to climb over a fallen tree."," doesn't say anything as I hit my head on a low branch. She grins when I look back at her."," uses a fallen branch as a walking stick before getting bored with it."]))
							}
							if(SluttyUnit != null && Math.random()<.1){
								Entrys.push("We travel to AMAP. My SLU"+choose([" gives my butt a squeeze while I climb over a log."," walks right behind me the whole way."," spanks me when I look into a hollow log."," keeps checking me out as we walk."," stares at my butt throughout the journey."]))
							}
							if(HungryUnit != null && Math.random()<.1){
								Entrys.push("We travel to AMAP. My HUN"+choose([" eats"," grabs"," munches on"])+choose([" some sandwiches she found in a basket. We should leave before it's owner shows up!"," every berry bush we pass."," all the berries in a bush."," an apple hanging from a low branch."," a plump mushroom growing out of a tree. I hope its not toxic!"," a fallen acorn. I guess she's getting hungry again."," a wild carrot growing in the mud. She seems pretty pleased with her find!"]))
							}
							if(WillingUnit != null && Math.random()<.1){
								Entrys.push("We travel to AMAP. My WIL"+choose(["","","","",""," rubs my stomach while she"," pats my stomach and"," walks besides me and"," holds my hand as she"])+choose([" asks if all this travel is giving me an appetite."," asks if all this walking is making me hungry."," asks if I want to stop and eat."," asks if my belly is getting hungry."," asks if we should take a break to eat."," asks how I'm not already starving from our long journey."])+choose(["","","",""," She says she wouldn't mind if I ate her now."," She says I can eat her whenever I want."," She says it would be logical eat her so I don't become malnourished!"," She tells me she's ready to be eaten whenever I get a craving for her."," She tells me I should eat her before someone else gets the chance."," She tells me she's the perfect meal for a long journey."]))
							}
						}
						Entrys.push("We travel to AMAP."+GetMapHint())
					}
				}
			}
		}
	}
	//TODO:Travel-Hostile-Flees
	if(Basic == 4){
		if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
			Entrys.push("Inside  AMAP we saw  AHOS slip past us and run away! She must have heard our large group.")
		}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
			Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A bathing TAG hears our large group and dives under the water to swim away.")
			Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A relaxing TAG hears our large group and dives under the water to swim away.")
		}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
			Entrys.push("We wade through the waters of the MAP, and enjoy a peaceful swim. A bathing TAG hears our large group and dives under the water to swim away.")
			Entrys.push("We wade through the waters of the MAP, and enjoy a peaceful swim. A relaxing TAG hears our large group and dives under the water to swim away.")
		}else{
			Entrys.push("We travel to AMAP,  AHOS heard our large group coming and swiftly ran away!")
		}
	}
	//TODO:Travel-Passive Return
	if(Basic == 5){//RETURN PASSIVE-------------------------------------------------------------------------------------
		if(party.units.length == 1){//ALONE
			if(map[party.y][party.x].units.length == 1){//ONE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					Entrys.push("I return to the AMAP where the HOS was and find her still there.")
				}else if(map[party.y][party.x].tag == "Indoors"){
					Entrys.push("I return to the HOS in the AMAP. She seems glad to see me again.")
				}else{
					Entrys.push("I look around the AMAP, and find the HOS. She seems happy to see me again.")
				}
			}else{//MULTIPLE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					Entrys.push("I return to the AMAP where the TAGs were and find them again.")
				}else if(map[party.y][party.x].tag == "Indoors"){
					Entrys.push("I return to the TAGs in the AMAP. They welcome me back with smiles.")
				}else{
					Entrys.push("I look around the AMAP, and find the TAGs again. They seem happy to see me again.")
				}
			}
		}else{//HAVE FRIENDS
			if(map[party.y][party.x].units.length == 1){//ONE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					Entrys.push("We return to AMAP where the HOS was and find her still there.")
				}else if(map[party.y][party.x].tag == "Indoors"){
					Entrys.push("We return to the HOS in the AMAP. She seems glad to see us again.")
				}else{
					Entrys.push("We look around MAP, and find the HOS again. She seems happy we returned.")
				}
			}else{//MULTIPLE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					Entrys.push("We return to AMAP where the TAGs were and find them again.")
				}else if(map[party.y][party.x].tag == "Indoors"){
					Entrys.push("We return to the TAGs in the AMAP. They welcome us back with smiles.")
				}else{
					Entrys.push("We look around AMAP, and find the TAGs again. They seem happy we returned.")
				}
			}
		}
	}
	if(Entrys.length == 0){Entrys.push("not available yet");}
	
	Entry = Entrys[Math.floor(Math.random()*Entrys.length)]
	
	Entry = Entry.replace(/AMAP/g, String(N(map[party.y][party.x].name)).toLowerCase());
	
	if(map[party.y][party.x].units.length > 0){
		Entry = Entry.replace(/CAHOS/g, N(map[party.y][party.x].units[0].Name.toLowerCase(),true));
		Entry = Entry.replace(/AHOS/g, N(String(map[party.y][party.x].units[0].Name).toLowerCase()));
		Entry = Entry.replace(/HOS/g, String(map[party.y][party.x].units[0].Name).toLowerCase());  
		Entry = Entry.replace(/TAG/g, String(map[party.y][party.x].units[0].Tags[0]).toLowerCase());
	}
	if(PositiveUnit != null){
		Entry = Entry.replace(/POST/g, String(PositiveUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/POS/g, String(PositiveUnit.Name).toLowerCase());
	}
	if(NegativeUnit != null){
		Entry = Entry.replace(/NEGT/g, String(NegativeUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/NEG/g, String(NegativeUnit.Name).toLowerCase());
	}
	if(FunnyUnit != null){
		Entry = Entry.replace(/FUNT/g, String(FunnyUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/FUN/g, String(FunnyUnit.Name).toLowerCase());
	}
	if(SluttyUnit != null){
		Entry = Entry.replace(/SLUT/g, String(SluttyUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/SLU/g, String(SluttyUnit.Name).toLowerCase());
	}
	if(HungryUnit != null){
		Entry = Entry.replace(/HUNT/g, String(HungryUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/HUN/g, String(HungryUnit.Name).toLowerCase());
	}
	if(VanillaUnit != null){
		Entry = Entry.replace(/VANT/g, String(VanillaUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/VAN/g, String(VanillaUnit.Name).toLowerCase());
	}
	if(WillingUnit != null){
		Entry = Entry.replace(/WILT/g, String(WillingUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/WIL/g, String(WillingUnit.Name).toLowerCase());
	}
	if(AnyUnit != null){
		Entry = Entry.replace(/ANYT/g, String(AnyUnit.Tags[0]).toLowerCase());
		Entry = Entry.replace(/ANY/g, String(AnyUnit.Name).toLowerCase());
	}
	Entry = Entry.replace(/MAP/g, String(map[party.y][party.x].name).toLowerCase());
	Entry = Entry.replace(/harpy queen/g, "Harpy Queen");
	Entry = Entry.replace(/drow queen/g, "Drow Queen");
	Entry = Entry.replace(/wolf queen/g, "Wolf Queen");
	Entry = Entry.replace(/queen/g, "Queen");
	
	if(map[party.y][party.x].name=="Dungeon"){
		Entry = Entry.replace(/GROUND/g, "brick","floor");
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["a cask","the table","a barrel","a crate"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["a brick wall","the wall","a column"]));
	}
	if(map[party.y][party.x].name=="Indoors"){
		Entry = Entry.replace(/GROUND/g, "floor","carpet","floorboards");
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["the couch","the table","the counter","the windowsill","the open windowsill"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["the wall","the wardrobe","the shelf","a closed door"," a wooden support beam"]));
	}
	if(map[party.y][party.x].name=="Forest"){
		Entry = Entry.replace(/GROUND/g, choose(["grass","ground","tall grass","mossy earth","bare dirt","fallen leaves"]));
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["a stump","a fallen tree","a large log","a mossy boulder"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["tree"]));
	}
	if(map[party.y][party.x].name=="Plains"){
		Entry = Entry.replace(/GROUND/g, choose(["grass","ground","tall grass","wild grass","short grass","bare dirt"]));
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["a stump","a fallen tree","a large log","a mossy boulder"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["the only tree"]));
	}
	if(map[party.y][party.x].name=="Cave" || map[party.y][party.x].name=="Entrance"){
		Entry = Entry.replace(/GROUND/g, "stone","ground");
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["a stone ledge","the ledge","a broken stalagmite","a fallen stalactite","a boulder"]));
		Entry = Entry.replace(/OBJECTTALL/g, choose(["a large stalagmite","a stone wall","the wall"]));
	}
	if(map[party.y][party.x].name=="Water"){
		Entry = Entry.replace(/GROUND/g, "shore","sandy bank");
		Entry = Entry.replace(/OBJECTSHORT/g, choose(["the shore","the shore","the bank","the ledge","the sandy bank","a sunken log"]));// ADD THE/A/AN?
		Entry = Entry.replace(/OBJECTTALL/g, choose(["the bank","the ridge"]));
	}
	Entry = Entry.replace(/GROUND/g, "ground");
	Entry = Entry.replace(/OBJECTSHORT/g, choose(["a stump"]));
	Entry = Entry.replace(/OBJECTTALL/g, choose(["a tree"]));
	return Entry
}
//TODO:GetMapHint
function GetMapHint(Entry="none"){
	var NPC = FindPersonality("Positive",true)
	var NPCstring = ""
	var Entrys = []
	if(Entry == "POS"){
		NPCstring = choose([" She stops"," She crouches"," She signals for us to stop"," She calls me over"])+choose([" and points out"," and motions to"," and shows me"])
	}else{
		if(NPC == null){
			NPCstring = choose([" I see"," I spot"," I notice"])
		}else{
			NPCstring = choose([" My POS sees"," My POS spots"," My POS notices"])
		}
	}
	if(GetMap(party.y,party.x).travel == -1){
		if(GetMap(party.y-1,party.x).tag == "Forest" && GetMap(party.y-1,party.x).units.length == 1 && lastMove[0] != -1){
			if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Bunnygirl"){
				Entrys.push(NPCstring+" small pawprints heading north...") 
				Entrys.push(NPCstring+" a bunch of carrot bits making a trail north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small pawprints heading north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" small pawprints heading north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" pawprints heading north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying north...")
			} 
		}else if(GetMap(party.y+1,party.x).tag == "Forest" && GetMap(party.y+1,party.x).units.length == 1 && lastMove[0] != 1){
			if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Bunnygirl"){
				Entrys.push(NPCstring+" small footprints heading south...") 
				Entrys.push(NPCstring+" a bunch of carrot bits making a trail south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small pawprints heading south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" small pawprints heading south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" pawprints heading south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying south...")
			} 
		}else if(GetMap(party.y,party.x-1).tag == "Forest" && GetMap(party.y,party.x-1).units.length == 1 && lastMove[1] != -1){
			if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Bunnygirl"){
				Entrys.push(NPCstring+" small pawprints heading west...") 
				Entrys.push(NPCstring+" a bunch of carrot bits making a trail west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small pawprints heading west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" small pawprints heading west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" pawprints heading west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying west...")
			} 
		}else if(GetMap(party.y,party.x+1).tag == "Forest" && GetMap(party.y,party.x+1).units.length == 1 && lastMove[1] != 1){
			if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Bunnygirl"){
				Entrys.push(NPCstring+" small pawprints heading east...") 
				Entrys.push(NPCstring+" a bunch of carrot bits making a trail east...") 
			}else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small pawprints heading east...")
			}else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" small pawprints heading east...")
			}else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" pawprints heading east...")
			} else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying east...")
			} 
		}
		//Plains
		if(GetMap(party.y-1,party.x).tag == "Plains" && GetMap(party.y-1,party.x).units.length == 1 && lastMove[0] != -1){
			if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Bunnygirl"){ 
				Entrys.push(NPCstring+" a bunnygirl off in the distance to the north.")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small footprints heading north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Catgirl"){ 
				Entrys.push(NPCstring+" a catgirl off in the distance to the north.")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" footprints heading north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying north...")
			} 
		}else if(GetMap(party.y+1,party.x).tag == "Plains" && GetMap(party.y+1,party.x).units.length == 1 && lastMove[0] != 1){
			if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Bunnygirl"){ 
				Entrys.push(NPCstring+" a bunnygirl off in the distance to the south.")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small footprints heading south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" a catgirl off in the distance to the south.")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" footprints heading south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying south...")
			} 
		}else if(GetMap(party.y,party.x-1).tag == "Plains" && GetMap(party.y,party.x-1).units.length == 1){
			if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Bunnygirl"){ 
				Entrys.push(NPCstring+" a bunnygirl off in the distance to the west.")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small footprints heading west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" a catgirl off in the distance to the west.")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" footprints heading west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying west...")
			} 
		}else if(GetMap(party.y,party.x+1).tag == "Plains" && GetMap(party.y,party.x+1).units.length == 1 && lastMove[1] != 1){
			if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Bunnygirl"){
				Entrys.push(NPCstring+" a bunnygirl off in the distance to the east.")
			}else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small footprints heading east...")
			}else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" a catgirl off in the distance to the east.")
			}else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" footprints heading east...")
			} else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying east...")
			} 
		}
	}
	if(Entrys.length == 0 && GetMap(party.y,party.x).travel == -1 && Math.random() < .25){
	var forestCount = 0
	var plainsCount = 0
		if(GetMap(party.y+1,party.x+1).tag == "Plains"){plainsCount++}
		if(GetMap(party.y-1,party.x+1).tag == "Plains"){plainsCount++}
		if(GetMap(party.y,party.x+1).tag == "Plains"){plainsCount++}
		if(GetMap(party.y+1,party.x-1).tag == "Plains"){plainsCount++}
		if(GetMap(party.y-1,party.x-1).tag == "Plains"){plainsCount++}
		if(GetMap(party.y,party.x-1).tag == "Plains"){plainsCount++}
		if(GetMap(party.y+1,party.x).tag == "Plains"){plainsCount++}
		if(GetMap(party.y-1,party.x).tag == "Plains"){plainsCount++}
		
		if(GetMap(party.y+1,party.x+1).tag == "Forest"){forestCount++}
		if(GetMap(party.y-1,party.x+1).tag == "Forest"){forestCount++}
		if(GetMap(party.y,party.x+1).tag == "Forest"){forestCount++}
		if(GetMap(party.y+1,party.x-1).tag == "Forest"){forestCount++}
		if(GetMap(party.y-1,party.x-1).tag == "Forest"){forestCount++}
		if(GetMap(party.y,party.x-1).tag == "Forest"){forestCount++}
		if(GetMap(party.y+1,party.x).tag == "Forest"){forestCount++}
		if(GetMap(party.y-1,party.x).tag == "Forest"){forestCount++}
		
		if(GetMap(party.y,party.x).tag == "Plains"){
			if(plainsCount >= 7){
				Entrys.push(" The howl of the wind is almost deafening here!")
				Entrys.push(" The wind is blowing pretty strong here.")
				Entrys.push(" The wind is blowing pretty strong here. I nearly topple over.") 
				Entrys.push(" The wind is blowing pretty strong here. it feels refreshing.")
				Entrys.push(" The wind sends ripples along the grass, making the grassy plains look like a jade ocean!")
				Entrys.push(" A gust of wind pushes my hair into my eyes.")
				Entrys.push(" The grass forms ripples from the strong wind, I feel like I'm walking in an emerald sea!")
			}
		}
		if(GetMap(party.y,party.x).tag == "Forest"){
			if(forestCount >= 8){
				Entrys.push(" Every direction looks the same, I hope I'm not getting lost.")
				Entrys.push(" I see only trees in every direction.")
				Entrys.push(" Everywhere I look is shrouded in a thick underbrush.")
				Entrys.push(" I feel like I'm in the heart of the forest here.")
				Entrys.push(" I see only wilderness in every direction.")
			}
		}
		if(map[party.y][party.x].tag == "Trail" || map[party.y][party.x].tag == "Road"){
			if(plainsCount >= 6){
				Entrys.push(" The wind is very strong here.")
				Entrys.push(" The wind is very strong here. I almost topple over.")
				Entrys.push(" The wind is pretty strong here, it feels refreshing.")
				Entrys.push(" The wind sends ripples along the grass, making the plains look like an ocean!")
			}
			if(forestCount >= 6){
				Entrys.push(" Besides this path, all I see are trees in every direction.")
				Entrys.push(" The trees above cast shadows along the path.")
				Entrys.push(" The trees cast the whole path in shadow.")
				Entrys.push(" The path is lined with trees on either side, I can't see very far into the thick underbrush.")
				Entrys.push(" A breeze blows along the path, urging me onward through the forested way.")
			}
		}
	
	
	}
	if(Entrys.length == 0){Entrys.push("");}
	return Entrys[Math.floor(Math.random()*Entrys.length)];
}
//TODO:DescWord
function DescWord(Entry,Bod, Chance=50,defaultword=""){//BOOKMARK
	//-1:flat _ 0:normal _ 1:perky _ 2:Large
	//-1:slim _ 0:normal _ 1:toned _ 2:heavy
	if(Math.random()*100 > Chance){
		return defaultword;
	}
	if(Bod == "belly"){
		if(Entry.butt == -1){
			return choose(["narrow ","lithe ","slight ","lean ","skinny ","smooth ","soft ","sleek "])
		}
		if(Entry.butt == 0){
			return choose([""])
		}
		if(Entry.butt == 1){
			return choose(["firm ","toned ","narrow ","trim ","tight ","lean "])
		}
		if(Entry.butt == 2){
			return choose(["squishy ","soft "])
		}
	}	
	if(Bod == "belly_noun"){
		if(Entry.butt == -1){
			return choose(["midriff","ribs"])
		}
		if(Entry.butt == 0){
			return choose(["belly","midriff","stomach","middle"])
		}
		if(Entry.butt == 1){
			return choose(["midriff","ribs",choose(["","hard ","firm "])+"abs"])
		}
		if(Entry.butt == 2){
			return (choose(["","","squishy ","soft "])+choose(["belly","middle","stomach"]))
		}
	}
	if(Bod == "butt"){
		if(Entry.butt == -1){
			return choose(["cute little ","firm ","lean"])
		}
		if(Entry.butt == 0){
			return choose([""])
		}
		if(Entry.butt == 1){
			return choose(["firm ","tight "])
		}
		if(Entry.butt == 2){
			return choose(["squishy ","ample ","large ","hefty "])
		}
	}
	if(Bod == "breasts"){
		if(Entry.bust == -1){
			return choose(["modest ","soft ","tiny ","pert "])
		}
		if(Entry.bust == 0){
			return choose(["","","soft "])
		}
		if(Entry.bust == 1){
			return choose(["pert ","firm ","full ","soft ","perfect "])
		}
		if(Entry.bust == 2){
			return choose(["massive ","ample ","heavy ","large ","full "])
		}
	}
	if(Bod == "slime"){
		if(Entry.Name == "Red Slimegirl"){
			return "cherry"
		}
		if(Entry.Name == "Yellow Slimegirl"){
			return "lemony"
		}
		if(Entry.Name == "Blue Slimegirl"){
			return "berry"
		}
		if(Entry.Name == "Orange Slimegirl"){
			return "peach"
		}
		if(Entry.Name == "Purple Slimegirl"){
			return "grape"
		}
		if(Entry.Name == "Green Slimegirl"){
			return "lime"
		}
	}
	if(Bod == "slime_color"){
		if(Entry.Name == "Red Slimegirl"){
			return "red"
		}
		if(Entry.Name == "Yellow Slimegirl"){
			return "yellow"
		}
		if(Entry.Name == "Blue Slimegirl"){
			return "blue"
		}
		if(Entry.Name == "Orange Slimegirl"){
			return "orange"
		}
		if(Entry.Name == "Purple Slimegirl"){
			return "purple"
		}
		if(Entry.Name == "Green Slimegirl"){
			return "green"
		}
	}
	if(Bod == "feet"){
		if(Entry.Tags[0] == "Catgirl" || Entry.Tags[0] == "Foxgirl" || Entry.Tags[0] == "Wolfgirl" || Entry.Tags[0] == "Bunnygirl"){
			return "paws"
		}
		if(Entry.Tags[0] == "Harpygirl"){
			return "talons"
		}
		if(Entry.Tags[0] == "Froggirl"){
			return "feet"
		}
		if(Entry.Tags[0] == "Deergirl"){
			return "hooves";
		}
		return "feet";
	}
}
function AR(Entry){// ACTION RANDOMIZER
	//return Math.round((Entry*.75)+(Math.random()*Entry)*.50)
	return Math.max(Math.round(Entry + (Math.random()*3) - (Math.random()*3)),1)
}
function SR(Entry){// STAT RANDOMIZER 7 = 5-9
	return Math.max(Math.round(Entry + (Math.random()*2) - (Math.random()*2)),1)
}
function choose(Entrys,Entrys2=[]){
	if(Entrys.length == 0){Entrys.push("not available yet");}
	if(Entrys2.length == 0 || Math.random()<.5){
		return Entrys[Math.floor(Math.random()*Entrys.length)];
	}else{
		return Entrys2[Math.floor(Math.random()*Entrys2.length)];
	}
}

function shuffle(array) {
  var mshuffle = array.length, tshuffle, ishuffle;

  // While there remain elements to shuffle…
  while (mshuffle) {

    // Pick a remaining element…
    ishuffle = Math.floor(Math.random() * mshuffle--);

    // And swap it with the current element.
    tshuffle = array[mshuffle];
    array[mshuffle] = array[ishuffle];
    array[ishuffle] = tshuffle;
  }

  return array;
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
function FindPersonality(Personality,ignoreStatus=false){
	Entrys = []
	i = 1
	if(ignoreStatus){
		while(i < party.units.length){
			if(unit(i).Tags[0] != "Slimegirl"){
				if(Personality == "Positive" && unit(i).Positive && Entrys.length == 0){Entrys.push(unit(i))}
				if(Personality == "Negative" && unit(i).Negative){Entrys.push(unit(i))}
				if(Personality == "Funny" && unit(i).Funny){Entrys.push(unit(i))}
				if(Personality == "Slutty" && unit(i).Slutty){Entrys.push(unit(i))}
				if(Personality == "Hungry" && unit(i).Hungry){Entrys.push(unit(i))}
				if(Personality == "Vanilla" && unit(i).Vanilla){Entrys.push(unit(i))}
				if(Personality == "Any"){Entrys.push(unit(i))}
				if(Personality == "Willing" && unit(i).willing && unit(i).Vanilla){Entrys.push(unit(i))}
				
				if(Personality == "Drowgirl" 	&& unit(i).Tags[0] == Personality){Entrys.push(unit(i))}
				if(Personality == "Mousegirl" 	&& unit(i).Tags[0] == Personality){Entrys.push(unit(i))}
				if(Personality == "Foxgirl" 	&& unit(i).Tags[0] == Personality){Entrys.push(unit(i))}
				if(Personality == "Catgirl" 	&& unit(i).Tags[0] == Personality){Entrys.push(unit(i))}
				if(Personality == "Batgirl" 	&& unit(i).Tags[0] == Personality){Entrys.push(unit(i))}
				if(Personality == "Bunnygirl" 	&& unit(i).Tags[0] == Personality){Entrys.push(unit(i))}
				if(Personality == "Froggirl" 	&& unit(i).Tags[0] == Personality){Entrys.push(unit(i))}
				if(Personality == "Wolfgirl"	&& unit(i).Tags[0] == Personality){Entrys.push(unit(i))}
			}
				if(Personality == "Slimegirl" 	&& unit(i).Tags[0] == Personality){Entrys.push(unit(i))}
			i++;
		}
	}else{
		while(i < party.units.length){
			if(unit(i).Tags[0] != "Slimegirl"){
				if(!unit(i).fled && !unit(i).asleep && Personality == "Positive" && unit(i).Positive && Entrys.length == 0){Entrys.push(unit(i))}
				if(!unit(i).fled && !unit(i).asleep && Personality == "Negative" && unit(i).Negative){Entrys.push(unit(i))}
				if(!unit(i).fled && !unit(i).asleep && Personality == "Funny" && unit(i).Funny){Entrys.push(unit(i))}
				if(!unit(i).fled && !unit(i).asleep && Personality == "Slutty" && unit(i).Slutty){Entrys.push(unit(i))}
				if(!unit(i).fled && !unit(i).asleep && Personality == "Hungry" && unit(i).Hungry){Entrys.push(unit(i))}
				if(!unit(i).fled && !unit(i).asleep && Personality == "Vanilla" && unit(i).Vanilla){Entrys.push(unit(i))}
				if(!unit(i).fled && !unit(i).asleep && Personality == "Any"){Entrys.push(unit(i))}
				if(!unit(i).fled && !unit(i).asleep && Personality == "Willing" && unit(i).willing && unit(i).Vanilla){Entrys.push(unit(i))}
				
				if(Personality == "Drowgirl" 	&& unit(i).Tags[0] == Personality && !unit(i).fled && !unit(i).asleep){Entrys.push(unit(i))}
				if(Personality == "Mousegirl" 	&& unit(i).Tags[0] == Personality && !unit(i).fled && !unit(i).asleep){Entrys.push(unit(i))}
				if(Personality == "Foxgirl" 	&& unit(i).Tags[0] == Personality && !unit(i).fled && !unit(i).asleep){Entrys.push(unit(i))}
				if(Personality == "Catgirl" 	&& unit(i).Tags[0] == Personality && !unit(i).fled && !unit(i).asleep){Entrys.push(unit(i))}
				if(Personality == "Batgirl" 	&& unit(i).Tags[0] == Personality && !unit(i).fled && !unit(i).asleep){Entrys.push(unit(i))}
				if(Personality == "Bunnygirl" 	&& unit(i).Tags[0] == Personality && !unit(i).fled && !unit(i).asleep){Entrys.push(unit(i))}
				if(Personality == "Froggirl" 	&& unit(i).Tags[0] == Personality && !unit(i).fled && !unit(i).asleep){Entrys.push(unit(i))}
				if(Personality == "Wolfgirl" 	&& unit(i).Tags[0] == Personality && !unit(i).fled && !unit(i).asleep){Entrys.push(unit(i))}
			}
				if(Personality == "Slimegirl"	&& unit(i).Tags[0] == Personality && !unit(i).fled && !unit(i).asleep){Entrys.push(unit(i))}
			i++;
		}
	}
	if(Entrys.length == 0){Entrys.push(null);}
	return Entrys[Math.floor(Math.random()*Entrys.length)];
}
//TODO:SpawnMobs
function SpawnMobs(i,o,land){
	var dice = (Math.floor(Math.random()*1000))/10//0-99.9
	var quantity = 0;
	var Clothing = "None"
	if(land == "Forest"){
		if(dice > 99.9){//BunnyGirls
			map[i][o].name="Cozy Burrow" 
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
				Feed:5,
				Tags:["Bunnygirl","Small"],
				Cond:[]
			})
			map[i][o].units.push({
				Name:randomEntry("BunnyDesc"),
				CPun:0,
				CPle:0,
				MPun:defaultstat("Bunnygirl","MPun"),
				MPle:defaultstat("Bunnygirl","MPle"),
				Figh:SR(defaultstat("Bunnygirl","Figh")),
				Feas:SR(defaultstat("Bunnygirl","Feas")),
				Flir:SR(defaultstat("Bunnygirl","Flir")),
				Fuck:SR(defaultstat("Bunnygirl","Fuck")),
				Flee:SR(defaultstat("Bunnygirl","Flee")),
				Feed:SR(defaultstat("Bunnygirl","Feed")),
				Tags:["Bunnygirl","Small"],
				Cond:[]
			})
			map[i][o].units.push({
				Name:randomEntry("BunnyDesc"),
				CPun:0,
				CPle:0,
				MPun:defaultstat("Bunnygirl","MPun"),
				MPle:defaultstat("Bunnygirl","MPle"),
				Figh:SR(defaultstat("Bunnygirl","Figh")),
				Feas:SR(defaultstat("Bunnygirl","Feas")),
				Flir:SR(defaultstat("Bunnygirl","Flir")),
				Fuck:SR(defaultstat("Bunnygirl","Fuck")),
				Flee:SR(defaultstat("Bunnygirl","Flee")),
				Feed:SR(defaultstat("Bunnygirl","Feed")),
				Tags:["Bunnygirl","Small"],
				Cond:[]
			})
		}else if(dice > 90){
			map[i][o].name=randomEntry("BunnyForest") 
			map[i][o].units.push({
				Name:randomEntry("BunnyDesc"),
				CPun:0,
				CPle:0,
				MPun:defaultstat("Bunnygirl","MPun"),
				MPle:defaultstat("Bunnygirl","MPle"),
				Figh:SR(defaultstat("Bunnygirl","Figh")),
				Feas:SR(defaultstat("Bunnygirl","Feas")),
				Flir:SR(defaultstat("Bunnygirl","Flir")),
				Fuck:SR(defaultstat("Bunnygirl","Fuck")),
				Flee:SR(defaultstat("Bunnygirl","Flee")),
				Feed:SR(defaultstat("Bunnygirl","Feed")),
				Tags:["Bunnygirl","Small"],
				Cond:[]
			})
			if(Math.random()<.1){
				map[i][o].units.push({
					Name:randomEntry("BunnyDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Bunnygirl","MPun"),
					MPle:defaultstat("Bunnygirl","MPle"),
					Figh:SR(defaultstat("Bunnygirl","Figh")),
					Feas:SR(defaultstat("Bunnygirl","Feas")),
					Flir:SR(defaultstat("Bunnygirl","Flir")),
					Fuck:SR(defaultstat("Bunnygirl","Fuck")),
					Flee:SR(defaultstat("Bunnygirl","Flee")),
					Feed:SR(defaultstat("Bunnygirl","Feed")),
					Tags:["Bunnygirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 89.9){
			map[i][o].name= randomEntry("CatForest")
			map[i][o].hostile=true;    
			map[i][o].units.push({
				Name:"Twin Catgirl",
				CPun:0,
				CPle:0,
				MPun:defaultstat("Catgirl","MPun"),
				MPle:defaultstat("Catgirl","MPle"),
				Figh:SR(defaultstat("Catgirl","Figh")),
				Feas:SR(defaultstat("Catgirl","Feas")),
				Flir:SR(defaultstat("Catgirl","Flir")),
				Fuck:SR(defaultstat("Catgirl","Fuck")),
				Flee:SR(defaultstat("Catgirl","Flee")),
				Feed:SR(defaultstat("Catgirl","Feed")),
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
		
		}else if(dice > 85){
			map[i][o].name=  randomEntry("CatForest")
			map[i][o].hostile=true;   
			map[i][o].units.push({
				Name:randomEntry("CatDesc"),
				CPun:0,
				CPle:0,
				MPun:defaultstat("Catgirl","MPun"),
				MPle:defaultstat("Catgirl","MPle"),
				Figh:SR(defaultstat("Catgirl","Figh")),
				Feas:SR(defaultstat("Catgirl","Feas")),
				Flir:SR(defaultstat("Catgirl","Flir")),
				Fuck:SR(defaultstat("Catgirl","Fuck")),
				Flee:SR(defaultstat("Catgirl","Flee")),
				Feed:SR(defaultstat("Catgirl","Feed")),
				Tags:["Catgirl","Small"],
				Cond:[]
			})
		}else if(dice > 84.9){
			map[i][o].name="Strange Shrine" 
			map[i][o].clr="#eeeeee" 
			map[i][o].hostile=true;  
			map[i][o].units.push({
				Name:"Nine-Tailed Foxgirl",
				CPun:0,
				CPle:0,
				MPun:defaultstat("Foxgirl","MPun")+15,
				MPle:defaultstat("Foxgirl","MPle")+15,
				Figh:SR(defaultstat("Foxgirl","Figh")),
				Feas:SR(defaultstat("Foxgirl","Feas")),
				Flir:SR(defaultstat("Foxgirl","Flir")),
				Fuck:SR(defaultstat("Foxgirl","Fuck")),
				Flee:SR(defaultstat("Foxgirl","Flee")),
				Feed:SR(defaultstat("Foxgirl","Feed")),
				Tags:["Foxgirl","Small"],
				Cond:[]
			})
			while((Math.random()<.75 && map[i][o].units.length <= 2)){
				map[i][o].units.push({
					Name:randomEntry("FoxDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Foxgirl","MPun"),
					MPle:defaultstat("Foxgirl","MPle"),
					Figh:SR(defaultstat("Foxgirl","Figh")),
					Feas:SR(defaultstat("Foxgirl","Feas")),
					Flir:SR(defaultstat("Foxgirl","Flir")),
					Fuck:SR(defaultstat("Foxgirl","Fuck")),
					Flee:SR(defaultstat("Foxgirl","Flee")),
					Feed:SR(defaultstat("Foxgirl","Feed")),
					Tags:["Foxgirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 75){//7.5 chance
			map[i][o].name=randomEntry("FoxForest") 
			map[i][o].hostile=true; 
			while(map[i][o].units.length == 0 || (Math.random()<.1 && map[i][o].units.length <= 1)){
				map[i][o].units.push({
					Name:randomEntry("FoxDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Foxgirl","MPun"),
					MPle:defaultstat("Foxgirl","MPle"),
					Figh:SR(defaultstat("Foxgirl","Figh")),
					Feas:SR(defaultstat("Foxgirl","Feas")),
					Flir:SR(defaultstat("Foxgirl","Flir")),
					Fuck:SR(defaultstat("Foxgirl","Fuck")),
					Flee:SR(defaultstat("Foxgirl","Flee")),
					Feed:SR(defaultstat("Foxgirl","Feed")),
					Tags:["Foxgirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 70){//2.5 chance 
			map[i][o].name=randomEntry("FrogForest") 
			map[i][o].hostile=true;
			map[i][o].units.push({
				Name:randomEntry("FrogDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Froggirl","MPun"),
					MPle:defaultstat("Froggirl","MPle"),
					Figh:SR(defaultstat("Froggirl","Figh")),
					Feas:SR(defaultstat("Froggirl","Feas")),
					Flir:SR(defaultstat("Froggirl","Flir")),
					Fuck:SR(defaultstat("Froggirl","Fuck")),
					Flee:SR(defaultstat("Froggirl","Flee")),
					Feed:SR(defaultstat("Froggirl","Feed")),
				Tags:["Froggirl","Small","AntiFlying","Swimming"],
				Cond:[]
			})
		}else if(dice > 65){//2.5 chance 
			map[i][o].name=randomEntry("BatForest") 
			map[i][o].hostile=true;
			map[i][o].units.push({
				Name:randomEntry("BatDesc"),
				CPun:0,
				CPle:0,
				MPun:defaultstat("Batgirl","MPun"),
				MPle:defaultstat("Batgirl","MPle"),
				Figh:SR(defaultstat("Batgirl","Figh")),
				Feas:SR(defaultstat("Batgirl","Feas")),
				Flir:SR(defaultstat("Batgirl","Flir")),
				Fuck:SR(defaultstat("Batgirl","Fuck")),
				Flee:SR(defaultstat("Batgirl","Flee")),
				Feed:SR(defaultstat("Batgirl","Feed")),
				Tags:["Batgirl","Small","Flying"],
				Cond:[]
			})
		}else if(dice > 64.9){//.001 chance
			map[i][o].hostile=true;
			map[i][o].units.push({
				//Name:randomEntry("WolfDesc"),
				Name:"Lone Wolf",
				CPun:0,
				CPle:0,
				MPun:defaultstat("Wolfgirl","MPun"),
				MPle:defaultstat("Wolfgirl","MPle"),
				Figh:SR(defaultstat("Wolfgirl","Figh")),
				Feas:SR(defaultstat("Wolfgirl","Feas")),
				Flir:SR(defaultstat("Wolfgirl","Flir")),
				Fuck:SR(defaultstat("Wolfgirl","Fuck")),
				Flee:SR(defaultstat("Wolfgirl","Flee")),
				Feed:SR(defaultstat("Wolfgirl","Feed")),
				Tags:["Wolfgirl","Medium"],
				Cond:[]
			})
		 }else if(dice > 64.4){//.005 chance
			map[i][o].name=  randomEntry("DeerForest") 
			map[i][o].units.push({
				Name:randomEntry("DeerDesc"),
				CPun:0,
				CPle:0,
				MPun:defaultstat("Deergirl","MPun"),
				MPle:defaultstat("Deergirl","MPle"),
				Figh:SR(defaultstat("Deergirl","Figh")),
				Feas:SR(defaultstat("Deergirl","Feas")),
				Flir:SR(defaultstat("Deergirl","Flir")),
				Fuck:SR(defaultstat("Deergirl","Fuck")),
				Flee:SR(defaultstat("Deergirl","Flee")),
				Feed:SR(defaultstat("Deergirl","Feed")),
				Tags:["Deergirl","Medium"],
				Cond:[]
			})
		 }
		
	}else if(land == "DungeonWolf"){
		if(dice > 25){
			quantity = Number(choose([1,2,3,3,3,4]));
			while(map[i][o].units.length < quantity){
			map[i][o].hostile=true;
				map[i][o].units.push({
					Name:randomEntry("WolfDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Wolfgirl","MPun"),
					MPle:defaultstat("Wolfgirl","MPle"),
					Figh:SR(defaultstat("Wolfgirl","Figh")),
					Feas:SR(defaultstat("Wolfgirl","Feas")),
					Flir:SR(defaultstat("Wolfgirl","Flir")),
					Fuck:SR(defaultstat("Wolfgirl","Fuck")),
					Flee:SR(defaultstat("Wolfgirl","Flee")),
					Feed:SR(defaultstat("Wolfgirl","Feed")),
					Tags:["Wolfgirl","Medium"],
					Cond:[]
				})
			}
		}
	}else if(land == "BossWolf"){
		map[i][o].hostile=true;
		map[i][o].units.push({
		Name:"Wolf Queen",
		CPun:0,
		CPle:0,
		MPun:defaultstat("Wolfgirl","MPun")+10,
		MPle:defaultstat("Wolfgirl","MPle")+20,
		Figh:SR(defaultstat("Wolfgirl","Figh")),
		Feas:SR(defaultstat("Wolfgirl","Feas")),
		Flir:SR(defaultstat("Wolfgirl","Flir")),
		Fuck:SR(defaultstat("Wolfgirl","Fuck")),
		Flee:SR(defaultstat("Wolfgirl","Flee")),
		Feed:SR(defaultstat("Wolfgirl","Feed"))+10,
		Tags:["Wolfgirl","Medium","Royal"],
		willing:false,
		Cond:[]
		})
	}else if(land == "FortWolf"){
		map[i][o].hostile=true;
		quantity = Number(choose([1,2,2,3,3,3,3,4]));
		while(map[i][o].units.length < quantity){
			map[i][o].units.push({
				Name:randomEntry("WolfDesc"),
				CPun:0,
				CPle:0,
				MPun:defaultstat("Wolfgirl","MPun"),
				MPle:defaultstat("Wolfgirl","MPle"),
				Figh:SR(defaultstat("Wolfgirl","Figh")),
				Feas:SR(defaultstat("Wolfgirl","Feas")),
				Flir:SR(defaultstat("Wolfgirl","Flir")),
				Fuck:SR(defaultstat("Wolfgirl","Fuck")),
				Flee:SR(defaultstat("Wolfgirl","Flee")),
				Feed:SR(defaultstat("Wolfgirl","Feed")),
				Tags:["Wolfgirl","Medium"],
				Cond:[]
			})
		}
	}else if(land == "ForestWolf"){
		if(dice > 80){
			map[i][o] = {tag:"Forest",name:randomEntry("WolfForest"),units:[],hostile:true,clr:"#77cc55"};
			quantity = Number(choose([1,1,2]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("WolfDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Wolfgirl","MPun"),
					MPle:defaultstat("Wolfgirl","MPle"),
					Figh:SR(defaultstat("Wolfgirl","Figh")),
					Feas:SR(defaultstat("Wolfgirl","Feas")),
					Flir:SR(defaultstat("Wolfgirl","Flir")),
					Fuck:SR(defaultstat("Wolfgirl","Fuck")),
					Flee:SR(defaultstat("Wolfgirl","Flee")),
					Feed:SR(defaultstat("Wolfgirl","Feed")),
					Tags:["Wolfgirl","Medium"],
					Cond:[]
				})
			 }
		 }else if(dice > 78){
			map[i][o] = {tag:"Indoors",name:"Spacious Lodge",units:[],hostile:true};
			quantity = Number(choose([1,2,3,4,4,4]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("WolfDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Wolfgirl","MPun"),
					MPle:defaultstat("Wolfgirl","MPle"),
					Figh:SR(defaultstat("Wolfgirl","Figh")),
					Feas:SR(defaultstat("Wolfgirl","Feas")),
					Flir:SR(defaultstat("Wolfgirl","Flir")),
					Fuck:SR(defaultstat("Wolfgirl","Fuck")),
					Flee:SR(defaultstat("Wolfgirl","Flee")),
					Feed:SR(defaultstat("Wolfgirl","Feed")),
					Tags:["Wolfgirl","Medium"],
					Cond:[]
				})
			 }
		 }else if(dice > 68){
			map[i][o].name=  randomEntry("DeerForest") 
			map[i][o].units.push({
				Name:randomEntry("DeerDesc"),
				CPun:0,
				CPle:0,
				MPun:defaultstat("Deergirl","MPun"),
				MPle:defaultstat("Deergirl","MPle"),
				Figh:SR(defaultstat("Deergirl","Figh")),
				Feas:SR(defaultstat("Deergirl","Feas")),
				Flir:SR(defaultstat("Deergirl","Flir")),
				Fuck:SR(defaultstat("Deergirl","Fuck")),
				Flee:SR(defaultstat("Deergirl","Flee")),
				Feed:SR(defaultstat("Deergirl","Feed")),
				Tags:["Deergirl","Medium"],
				Cond:[]
			})
		 }
	}else if(land == "RiverMundane"){
		if(dice > 95){
			map[i][o].name = "Rushing Rapids"
			map[i][o].hostile=true;
			map[i][o].clr="#84CFF4"
			quantity = 3;
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
				Name:randomEntry("FrogDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Froggirl","MPun"),
					MPle:defaultstat("Froggirl","MPle"),
					Figh:SR(defaultstat("Froggirl","Figh")),
					Feas:SR(defaultstat("Froggirl","Feas")),
					Flir:SR(defaultstat("Froggirl","Flir")),
					Fuck:SR(defaultstat("Froggirl","Fuck")),
					Flee:SR(defaultstat("Froggirl","Flee")),
					Feed:SR(defaultstat("Froggirl","Feed")),
				Tags:["Froggirl","Small","AntiFlying","Swimming"],
				Cond:[]
				})
			}
		}else if(dice > 70){
			map[i][o].hostile=true;
			quantity = .01 + Math.random()*2;
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
				Name:randomEntry("FrogDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Froggirl","MPun"),
					MPle:defaultstat("Froggirl","MPle"),
					Figh:SR(defaultstat("Froggirl","Figh")),
					Feas:SR(defaultstat("Froggirl","Feas")),
					Flir:SR(defaultstat("Froggirl","Flir")),
					Fuck:SR(defaultstat("Froggirl","Fuck")),
					Flee:SR(defaultstat("Froggirl","Flee")),
					Feed:SR(defaultstat("Froggirl","Feed")),
				Tags:["Froggirl","Small","AntiFlying","Swimming"],
				Cond:[]
				})
			}
		}
	
	}else if(land == "LakeFresh"){
		if(dice > 90){
			map[i][o].hostile=true; 
			quantity = .01 + Math.random()*2;
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
				Name:randomEntry("FrogDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Froggirl","MPun"),
					MPle:defaultstat("Froggirl","MPle"),
					Figh:SR(defaultstat("Froggirl","Figh")),
					Feas:SR(defaultstat("Froggirl","Feas")),
					Flir:SR(defaultstat("Froggirl","Flir")),
					Fuck:SR(defaultstat("Froggirl","Fuck")),
					Flee:SR(defaultstat("Froggirl","Flee")),
					Feed:SR(defaultstat("Froggirl","Feed")),
				Tags:["Froggirl","Small","AntiFlying","Swimming"],
				Cond:[]
				})
			}
		}
	
	}else if(land == "Plains"){
		if(dice > 99.5){ 
			map[i][o].name="Goblin Fort";
			map[i][o].hostile = true;
			quantity = Number(choose([2,3,3,3,3,4,5,6]));
			Clothing = (quantity >3 ? "Leathers" : "Skirts");	
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("GoblinDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Goblingirl","MPun"),
					MPle:defaultstat("Goblingirl","MPle"),
					Figh:SR(defaultstat("Goblingirl","Figh")),
					Feas:SR(defaultstat("Goblingirl","Feas")),
					Flir:SR(defaultstat("Goblingirl","Flir")),
					Fuck:SR(defaultstat("Goblingirl","Fuck")),
					Flee:SR(defaultstat("Goblingirl","Flee")),
					Feed:SR(defaultstat("Goblingirl","Feed")), 
					Clothing:Clothing, 
					Tags:["Goblingirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 97){
			map[i][o].name=choose(["Flowery Plains",map[i][o].name]);
			map[i][o].hostile = false;
			while(Math.random()<.1 || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("BunnyDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Bunnygirl","MPun"),
					MPle:defaultstat("Bunnygirl","MPle"),
					Figh:SR(defaultstat("Bunnygirl","Figh")),
					Feas:SR(defaultstat("Bunnygirl","Feas")),
					Flir:SR(defaultstat("Bunnygirl","Flir")),
					Fuck:SR(defaultstat("Bunnygirl","Fuck")),
					Flee:SR(defaultstat("Bunnygirl","Flee")),
					Feed:SR(defaultstat("Bunnygirl","Feed")),
					Tags:["Bunnygirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 95){
			map[i][o].name=choose(["Flowery Plains",map[i][o].name]);
			map[i][o].hostile = true;
			while(Math.random()<.01 || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("CatDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Catgirl","MPun"),
					MPle:defaultstat("Catgirl","MPle"),
					Figh:SR(defaultstat("Catgirl","Figh")),
					Feas:SR(defaultstat("Catgirl","Feas")),
					Flir:SR(defaultstat("Catgirl","Flir")),
					Fuck:SR(defaultstat("Catgirl","Fuck")),
					Flee:SR(defaultstat("Catgirl","Flee")),
					Feed:SR(defaultstat("Catgirl","Feed")),
					Tags:["Catgirl","Small"],
					Cond:[]
				})
			}
		}
	}else if(land == "Canyon"){
		if(dice > 50){
			map[i][o].hostile = true;
			quantity = Number(choose([1,1,1,1,2]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("HarpyDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Harpygirl","MPun"),
					MPle:defaultstat("Harpygirl","MPle"),
					Figh:SR(defaultstat("Harpygirl","Figh")),
					Feas:SR(defaultstat("Harpygirl","Feas")),
					Flir:SR(defaultstat("Harpygirl","Flir")),
					Fuck:SR(defaultstat("Harpygirl","Fuck")),
					Flee:SR(defaultstat("Harpygirl","Flee")),
					Feed:SR(defaultstat("Harpygirl","Feed")),
						Positive: false,
						Negative: false,
						Funny	: false,
						Slutty	: false,
						Hungry	: false,
						willing	: false,
					Tags:["Harpygirl","Medium","Flying"],
					Cond:[]
				})
			}
		}
	}else if(land == "DungeonHarpy"){
		if(dice > 25){
			quantity = Number(choose([1,2,3,4]));
			map[i][o].hostile=true;
			while(map[i][o].units.length < quantity){ 
				map[i][o].units.push({
					Name:randomEntry("HarpyDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Harpygirl","MPun"),
					MPle:defaultstat("Harpygirl","MPle"),
					Figh:SR(defaultstat("Harpygirl","Figh")),
					Feas:SR(defaultstat("Harpygirl","Feas")),
					Flir:SR(defaultstat("Harpygirl","Flir")),
					Fuck:SR(defaultstat("Harpygirl","Fuck")),
					Flee:SR(defaultstat("Harpygirl","Flee")),
					Feed:SR(defaultstat("Harpygirl","Feed")),
						Positive: false,
						Negative: false,
						Funny	: false,
						Slutty	: false,
						Hungry	: false,
						willing	: false,
					Tags:["Harpygirl","Medium","Flying"],
					Cond:[]
				})
			}
		}
	}else if(land == "BossHarpy"){
		map[i][o].hostile=true;
		map[i][o].units.push({
		Name:"Harpy Queen",
		CPun:0,
		CPle:0,
		MPun:defaultstat("Harpygirl","MPun")+10,
		MPle:defaultstat("Harpygirl","MPle")+20,
		Figh:SR(defaultstat("Harpygirl","Figh")),
		Feas:SR(defaultstat("Harpygirl","Feas")),
		Flir:SR(defaultstat("Harpygirl","Flir")),
		Fuck:SR(defaultstat("Harpygirl","Fuck")),
		Flee:SR(defaultstat("Harpygirl","Flee")),
		Feed:SR(defaultstat("Harpygirl","Feed"))+10,
		Tags:["Harpygirl","Medium","Flying","Royal"],
		willing:false,
		Cond:[]
		})
	}else if(land == "Cave"){
		if(dice > 80){
			map[i][o].hostile = true;
			quantity = Number(choose([1,1,1,2]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("BatDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Batgirl","MPun"),
					MPle:defaultstat("Batgirl","MPle"),
					Figh:SR(defaultstat("Batgirl","Figh")),
					Feas:SR(defaultstat("Batgirl","Feas")),
					Flir:SR(defaultstat("Batgirl","Flir")),
					Fuck:SR(defaultstat("Batgirl","Fuck")),
					Flee:SR(defaultstat("Batgirl","Flee")),
					Feed:SR(defaultstat("Batgirl","Feed")),
					Tags:["Batgirl","Small","Flying"],
					Cond:[]
				})
			}
		}else if(dice > 60){
			map[i][o].hostile = true;
			quantity = Number(choose([1,1,1,1,2]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("SlimeDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Slimegirl","MPun"),
					MPle:defaultstat("Slimegirl","MPle"),
					Figh:SR(defaultstat("Slimegirl","Figh")),
					Feas:SR(defaultstat("Slimegirl","Feas")),
					Flir:SR(defaultstat("Slimegirl","Flir")),
					Fuck:SR(defaultstat("Slimegirl","Fuck")),
					Flee:SR(defaultstat("Slimegirl","Flee")),
					Feed:SR(defaultstat("Slimegirl","Feed")),
						Positive: false,
						Negative: false,
						Funny	: false,
						Slutty	: false,
						Hungry	: false,
						willing	: false,
					Tags:["Slimegirl","Medium"],
					Cond:[]
				})
			}
		}else if(dice > 50){
			map[i][o].hostile = true;
			quantity = Number(choose([1,1,2]));
			Clothing = choose(["Leathers","Skirts"])
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("GoblinDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Goblingirl","MPun"),
					MPle:defaultstat("Goblingirl","MPle"),
					Figh:SR(defaultstat("Goblingirl","Figh")),
					Feas:SR(defaultstat("Goblingirl","Feas")),
					Flir:SR(defaultstat("Goblingirl","Flir")),
					Fuck:SR(defaultstat("Goblingirl","Fuck")),
					Flee:SR(defaultstat("Goblingirl","Flee")),
					Feed:SR(defaultstat("Goblingirl","Feed")), 
					Clothing:Clothing, 
					Tags:["Goblingirl","Small"],
					Cond:[]
				})
			} 
		}else if(dice > 45){
			map[i][o].hostile = false;
			quantity = Number(choose([1,1,1,1,2]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("MouseDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Mousegirl","MPun"),
					MPle:defaultstat("Mousegirl","MPle"),
					Figh:SR(defaultstat("Mousegirl","Figh")),
					Feas:SR(defaultstat("Mousegirl","Feas")),
					Flir:SR(defaultstat("Mousegirl","Flir")),
					Fuck:SR(defaultstat("Mousegirl","Fuck")),
					Flee:SR(defaultstat("Mousegirl","Flee")),
					Feed:SR(defaultstat("Mousegirl","Feed")),
					Tags:["Mousegirl","Tiny"],
					Cond:[]
				})
			}
		}
	}else if(land == "CaveEnd"){
		if(dice > 70){
			map[i][o].hostile = true;
			quantity = Number(choose([1,2,2,3]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("BatDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Batgirl","MPun"),
					MPle:defaultstat("Batgirl","MPle"),
					Figh:SR(defaultstat("Batgirl","Figh")),
					Feas:SR(defaultstat("Batgirl","Feas")),
					Flir:SR(defaultstat("Batgirl","Flir")),
					Fuck:SR(defaultstat("Batgirl","Fuck")),
					Flee:SR(defaultstat("Batgirl","Flee")),
					Feed:SR(defaultstat("Batgirl","Feed")),
					Tags:["Batgirl","Small","Flying"],
					Cond:[]
				})
			}
		}else if(dice > 20){
			map[i][o].hostile = true;
			quantity = Number(choose([1,1,2,2,3]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("SlimeDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Slimegirl","MPun"),
					MPle:defaultstat("Slimegirl","MPle"),
					Figh:SR(defaultstat("Slimegirl","Figh")),
					Feas:SR(defaultstat("Slimegirl","Feas")),
					Flir:SR(defaultstat("Slimegirl","Flir")),
					Fuck:SR(defaultstat("Slimegirl","Fuck")),
					Flee:SR(defaultstat("Slimegirl","Flee")),
					Feed:SR(defaultstat("Slimegirl","Feed")),
						Positive: false,
						Negative: false,
						Funny	: false,
						Slutty	: false,
						Hungry	: false,
						willing	: false,
					Tags:["Slimegirl","Medium"],
					Cond:[]
				})
			}
		}else if(dice > 10){
			map[i][o].hostile = false;
			quantity = Number(choose([1,1,1,1,2]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("MouseDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Mousegirl","MPun"),
					MPle:defaultstat("Mousegirl","MPle"),
					Figh:SR(defaultstat("Mousegirl","Figh")),
					Feas:SR(defaultstat("Mousegirl","Feas")),
					Flir:SR(defaultstat("Mousegirl","Flir")),
					Fuck:SR(defaultstat("Mousegirl","Fuck")),
					Flee:SR(defaultstat("Mousegirl","Flee")),
					Feed:SR(defaultstat("Mousegirl","Feed")), 
					Tags:["Mousegirl","Tiny"],
					Cond:[]
				})
			}
		}else if(dice > 8){
			map[i][o].hostile = true;
			quantity = Number(choose([1,2,3]));
			Clothing = choose(["Leathers","Skirts"])
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("DrowDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Drowgirl","MPun"),
					MPle:defaultstat("Drowgirl","MPle"),
					Figh:SR(defaultstat("Drowgirl","Figh")),
					Feas:SR(defaultstat("Drowgirl","Feas")),
					Flir:SR(defaultstat("Drowgirl","Flir")),
					Fuck:SR(defaultstat("Drowgirl","Fuck")),
					Flee:SR(defaultstat("Drowgirl","Flee")),
					Feed:SR(defaultstat("Drowgirl","Feed")),  
					Clothing:Clothing, 
					Tags:["Drowgirl","Medium"],
					Cond:[]
				})
			}
		}else if(dice > 5){
			map[i][o].hostile = true;
			quantity = Number(choose([1,2,3,4])); 
			Clothing = choose(["Leathers","Skirts"])
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("GoblinDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Goblingirl","MPun"),
					MPle:defaultstat("Goblingirl","MPle"),
					Figh:SR(defaultstat("Goblingirl","Figh")),
					Feas:SR(defaultstat("Goblingirl","Feas")),
					Flir:SR(defaultstat("Goblingirl","Flir")),
					Fuck:SR(defaultstat("Goblingirl","Fuck")),
					Flee:SR(defaultstat("Goblingirl","Flee")),
					Feed:SR(defaultstat("Goblingirl","Feed")), 
					Clothing:Clothing, 
					Tags:["Goblingirl","Small"],
					Cond:[]
				})
			}
		}
	}else if(land == "CaveEnd2"){
		if(dice > 70){
			map[i][o].hostile = true;
			quantity = Number(choose([2,3,3,4,4,5]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("BatDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Batgirl","MPun"),
					MPle:defaultstat("Batgirl","MPle"),
					Figh:SR(defaultstat("Batgirl","Figh")),
					Feas:SR(defaultstat("Batgirl","Feas")),
					Flir:SR(defaultstat("Batgirl","Flir")),
					Fuck:SR(defaultstat("Batgirl","Fuck")),
					Flee:SR(defaultstat("Batgirl","Flee")),
					Feed:SR(defaultstat("Batgirl","Feed")),
					Tags:["Batgirl","Small","Flying"],
					Cond:[]
				})
			}
		}else if(dice > 20){
			map[i][o].hostile = true;
			quantity = Number(choose([2,3,4]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("SlimeDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Slimegirl","MPun"),
					MPle:defaultstat("Slimegirl","MPle"),
					Figh:SR(defaultstat("Slimegirl","Figh")),
					Feas:SR(defaultstat("Slimegirl","Feas")),
					Flir:SR(defaultstat("Slimegirl","Flir")),
					Fuck:SR(defaultstat("Slimegirl","Fuck")),
					Flee:SR(defaultstat("Slimegirl","Flee")),
					Feed:SR(defaultstat("Slimegirl","Feed")),
						Positive: false,
						Negative: false,
						Funny	: false,
						Slutty	: false,
						Hungry	: false,
						willing	: false,
					Tags:["Slimegirl","Medium"],
					Cond:[]
				})
			}
		}else if(dice > 10){
			map[i][o].hostile = false;
			quantity = Number(choose([1,2,3,4]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("MouseDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Mousegirl","MPun"),
					MPle:defaultstat("Mousegirl","MPle"),
					Figh:SR(defaultstat("Mousegirl","Figh")),
					Feas:SR(defaultstat("Mousegirl","Feas")),
					Flir:SR(defaultstat("Mousegirl","Flir")),
					Fuck:SR(defaultstat("Mousegirl","Fuck")),
					Flee:SR(defaultstat("Mousegirl","Flee")),
					Feed:SR(defaultstat("Mousegirl","Feed")), 
					Tags:["Mousegirl","Tiny"],
					Cond:[]
				})
			}
		}else if(dice > 8){
			map[i][o].hostile = true;
			quantity = Number(choose([2,3,4]));
			Clothing = choose(["Leathers","Skirts"])
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("DrowDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Drowgirl","MPun"),
					MPle:defaultstat("Drowgirl","MPle"),
					Figh:SR(defaultstat("Drowgirl","Figh")),
					Feas:SR(defaultstat("Drowgirl","Feas")),
					Flir:SR(defaultstat("Drowgirl","Flir")),
					Fuck:SR(defaultstat("Drowgirl","Fuck")),
					Flee:SR(defaultstat("Drowgirl","Flee")),
					Feed:SR(defaultstat("Drowgirl","Feed")), 
					Clothing:Clothing, 
					Tags:["Drowgirl","Medium"],
					Cond:[]
				})
			}
		}else if(dice > 5){
			map[i][o].hostile = true;
			quantity = Number(choose([1,2,3,4,5,6]));
			Clothing = choose(["Leathers","Skirts"])
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("GoblinDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Goblingirl","MPun"),
					MPle:defaultstat("Goblingirl","MPle"),
					Figh:SR(defaultstat("Goblingirl","Figh")),
					Feas:SR(defaultstat("Goblingirl","Feas")),
					Flir:SR(defaultstat("Goblingirl","Flir")),
					Fuck:SR(defaultstat("Goblingirl","Fuck")),
					Flee:SR(defaultstat("Goblingirl","Flee")),
					Feed:SR(defaultstat("Goblingirl","Feed")), 
					Clothing:Clothing, 
					Tags:["Goblingirl","Small"],
					Cond:[]
				})
			}
		}
	}else if(land == "CaveDrowSmall"){
		if(dice > 75){
			map[i][o].hostile = true;
			quantity = Number(choose([1,1,2]));
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("DrowDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Drowgirl","MPun"),
					MPle:defaultstat("Drowgirl","MPle"),
					Figh:SR(defaultstat("Drowgirl","Figh")),
					Feas:SR(defaultstat("Drowgirl","Feas")),
					Flir:SR(defaultstat("Drowgirl","Flir")),
					Fuck:SR(defaultstat("Drowgirl","Fuck")),
					Flee:SR(defaultstat("Drowgirl","Flee")),
					Feed:SR(defaultstat("Drowgirl","Feed")), 
					Clothing:"Skirts", 
					Tags:["Drowgirl","Medium"],
					Cond:[]
				})
			}
		}
	}else if(land == "CaveDrowSecondary"){
		if(dice > 20){
			map[i][o].hostile = true;
			quantity = Number(choose([1,2,2,3]));
			if(quantity > 1){
			map[i][o].name = randomEntry("CaveDrowSecondaryOccupied")
			}
			while(map[i][o].units.length < quantity){
				map[i][o].units.push({
					Name:randomEntry("DrowDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Drowgirl","MPun"),
					MPle:defaultstat("Drowgirl","MPle"),
					Figh:SR(defaultstat("Drowgirl","Figh")),
					Feas:SR(defaultstat("Drowgirl","Feas")),
					Flir:SR(defaultstat("Drowgirl","Flir")),
					Fuck:SR(defaultstat("Drowgirl","Fuck")),
					Flee:SR(defaultstat("Drowgirl","Flee")),
					Feed:SR(defaultstat("Drowgirl","Feed")),  
					Clothing:"Leathers", 
					Tags:["Drowgirl","Medium"],
					Cond:[]
				})
			}
		}
	}else if(land == "CaveDrowMain"){
		map[i][o].hostile = true;
		if(map[i][o].name == "Underground Monument"){quantity = Number(choose([1,1,2]));Clothing = "Dress";}
		if(map[i][o].name == "Underground Ruins"){quantity = Number(choose([1,1,2,3]));Clothing = "Skirts";}
		if(map[i][o].name == "Underground Temple"){quantity = Number(choose([1,2,3,4]));Clothing = "Dress";}
		if(map[i][o].name == "Underground City"){quantity = Number(choose([4,5,6]));Clothing = "Dress";}
		if(map[i][o].name == "Underground Farm"){quantity = Number(choose([2,3,4]));Clothing = "Skirts";}
		if(map[i][o].name == "Underground Fortress"){quantity = Number(choose([4,5,6]));Clothing = "Leathers";}
		if(map[i][o].name == "Underground Stronghold"){quantity = Number(choose([4,5,6]));Clothing = "Leathers";}
		//,"Underground City","Underground City","Underground City","Underground City","Underground Farm","Underground Fortress","Underground Stronghold","Underground Monument","Underground Ruins","Underground Temple"]}

		//quantity = Number(choose([1,2,3,4,5,6,7,8,9,10]));
		while(map[i][o].units.length < quantity){
			map[i][o].units.push({
				Name:randomEntry("DrowDesc"),
				CPun:0,
				CPle:0,
				MPun:defaultstat("Drowgirl","MPun"),
				MPle:defaultstat("Drowgirl","MPle"),
				Figh:SR(defaultstat("Drowgirl","Figh")),
				Feas:SR(defaultstat("Drowgirl","Feas")),
				Flir:SR(defaultstat("Drowgirl","Flir")),
				Fuck:SR(defaultstat("Drowgirl","Fuck")),
				Flee:SR(defaultstat("Drowgirl","Flee")),
				Feed:SR(defaultstat("Drowgirl","Feed")),   
				Clothing:Clothing, 
				Tags:["Drowgirl","Medium"],
				Cond:[]
			})
		}
	}else if(land == "DungeonDrow"){
		if(dice > 25){
			quantity = Number(choose([1,2,2,2,3,3,3,4]));
			Clothing = choose(["Leathers","Dress"])
			while(map[i][o].units.length < quantity){
			map[i][o].hostile=true;
				map[i][o].units.push({
					Name:randomEntry("DrowDesc"),
					CPun:0,
					CPle:0,
					MPun:defaultstat("Drowgirl","MPun"),
					MPle:defaultstat("Drowgirl","MPle"),
					Figh:SR(defaultstat("Drowgirl","Figh")),
					Feas:SR(defaultstat("Drowgirl","Feas")),
					Flir:SR(defaultstat("Drowgirl","Flir")),
					Fuck:SR(defaultstat("Drowgirl","Fuck")),
					Flee:SR(defaultstat("Drowgirl","Flee")),
					Feed:SR(defaultstat("Drowgirl","Feed")),  
					Clothing:Clothing, 
					Tags:["Drowgirl","Medium"],
					Cond:[]
				})
			}
		}
	}else if(land == "BossDrow"){
		map[i][o].hostile=true;
		map[i][o].units.push({
		Name:"Drow Queen",
		CPun:0,
		CPle:0,
		MPun:defaultstat("Drowgirl","MPun")+20,
		MPle:defaultstat("Drowgirl","MPle")+10,
		Figh:SR(defaultstat("Drowgirl","Figh")),
		Feas:SR(defaultstat("Drowgirl","Feas")),
		Flir:SR(defaultstat("Drowgirl","Flir")),
		Fuck:SR(defaultstat("Drowgirl","Fuck")),
		Flee:SR(defaultstat("Drowgirl","Flee")),
		Feed:SR(defaultstat("Drowgirl","Feed"))+10,  
		Clothing:"Dress", 
		Tags:["Drowgirl","Medium"],
		Cond:[]
		})
	}
	//--------------------

	
//SET UNIQUE LAND
	if(map[i][o].name == "Cave Entranceasdf"){
		map[i][o].clr="#999977";
		map[i][o].tag="Underground"
	}else if(map[i][o].name == "Sunny Clearing"){
		map[i][o].clr="#55ee88";
		map[i][o].tag="Clearing";
	}else if(map[i][o].name == "Shady Clearing"){
		map[i][o].clr="#22bb55";
		map[i][o].tag="Clearing"
	}else if(map[i][o].name == "Flowery Plains"){
		map[i][o].clr="#cc88cc";
	}else if(map[i][o].name == "Flowery Clearing"){
		map[i][o].clr="#cc88cc";
	}else if(map[i][o].name == "Murky Pond"){//["Gloomy Forest","Gloomy Forest","Gloomy Forest","Small Cave","Small Cave", "Shady Clearing"]}
		map[i][o].clr="#66bbaa";
		map[i][o].tag="Water"
	}else if(map[i][o].name == "Bubbling Spring" || map[i][o].name == "Sunny Pond"){
		map[i][o].clr="#66bbdd";
		map[i][o].tag="Water";
	}else if((map[i][o].name.includes("Oak") || map[i][o].name.includes("Pine")|| map[i][o].name.includes("Maple")|| map[i][o].name.includes("Cedar")|| map[i][o].name.includes("Birch")|| map[i][o].name.includes("Redwood")|| map[i][o].name.includes("Apple-Tree")) ){
		map[i][o].clr = "#22bb55" 
	}else if(map[i][o].name == "Goblin Fort" || map[i][o].name == "Cozy Burrow" || map[i][o].name == "Spacious Lodge" || map[i][o].name == "Treehouse" || map[i][o].name == "Strange Temple" || map[i][o].name.includes("Farmhouse") || map[i][o].name.includes("Hut") || map[i][o].name.includes("Cabin") || map[i][o].name.includes("Cottage") || map[i][o].name.includes("House") || map[i][o].name.includes("Shack") || map[i][o].name.includes("Barn") || map[i][o].name.includes("Shed") || map[i][o].name.includes("Windmill")){
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
function N(noun,cap=false){
	if(cap){
		if(noun.charAt(0) == "A" || noun.charAt(0) == "E" || noun.charAt(0) == "I" || noun.charAt(0) == "O" || noun.charAt(0) == "U" || noun.charAt(0) == "a" || noun.charAt(0) == "e" || noun.charAt(0) == "i" || noun.charAt(0) == "o" || noun.charAt(0) == "u"){
			return "An "+noun.toLowerCase()
		}else{
			return "A "+noun.toLowerCase()
		}
	}else{
		if(noun.charAt(0) == "A" || noun.charAt(0) == "E" || noun.charAt(0) == "I" || noun.charAt(0) == "O" || noun.charAt(0) == "U" || noun.charAt(0) == "a" || noun.charAt(0) == "e" || noun.charAt(0) == "i" || noun.charAt(0) == "o" || noun.charAt(0) == "u"){
			return "an "+noun.toLowerCase()
		}else{
			return "a "+noun.toLowerCase()
		}
	}
}
function l(Entry){
return Entry.toLowerCase();
}

//TODO:StatGain
function StatGain(i,o){
	var u = 0
	var increases = 0;
	var increaseValue = 0;
	var eatQuantity = unit(o).Feed;//Used to tweek gameplay.
	var eatValue = 2;//Used to tweek gameplay.
	if(unit(o) == Cocked){eatQuantity+=5}
	var Figh = 0;
	var Flir = 0;
	var Flee = 0;
	var Feas = 0;
	var Fuck = 0;
	var Feed = 0;
	if(o < 100){
		increaseValue = party.units[o].Size;
	}else{
		increaseValue = map[party.y][party.x].units[o-100].Size;
	}
	if(i == 0){//HERO
		if(unit(0).Feas == 10){
			Feas++;
			unit(0).Feas++;
			eatQuantity--;
		}
		if(o < 100){
			party.units[0].CPle = Math.max(party.units[0].CPle-party.units[o].Size*eatValue,0)
			//increaseValue = party.units[o].Size
		}else{
			party.units[0].CPle = Math.max(party.units[0].CPle-map[party.y][party.x].units[o-100].Size*eatValue,0)
			//increaseValue = map[party.y][party.x].units[o-100].Size
		}
	}else if(i != 0){//GOOD
	
		if(unit(i).CPle < unit(i).MPle){
			
			if(action == 5){
				
				unit(i).CPle = Math.min(unit(i).CPle+AR(unit(o).Size*unit(o).Feed),unit(i).MPle-1) 
			}else{
				//unit(i).CPle = Math.min(unit(i).CPle+AR(unit(o).Size),unit(i).MPle-1)
			}
		}
	}
	increaseValue = 1;
	while(eatQuantity > 0){
		eatQuantity--;
		increases+=increaseValue;
		u = Math.floor(Math.random()*6)
		if(u <= 1 && unit(i).Figh < defaultstat(unit(i).Tags[0],"Figh")+unit(o).Feed-1){//DOUBLE CHANCE FOR FIGHT TO INCREASE
			unit(i).Figh+=increaseValue;
			Figh+=increaseValue;
		}else if(u <= 2 && unit(i).Flir < defaultstat(unit(i).Tags[0],"Flir")+unit(o).Feed-1){
			unit(i).Flir+=increaseValue;
			Flir+=increaseValue;
		}else if(u <= 3 && unit(i).Flee < defaultstat(unit(i).Tags[0],"Flee")+unit(o).Feed-1){
			unit(i).Flee+=increaseValue;
			Flee+=increaseValue;
		}else if(u <= 4 && unit(i).Feas < defaultstat(unit(i).Tags[0],"Feas")+unit(o).Feed-1){
			unit(i).Feas+=increaseValue;
			Feas+=increaseValue;
		}else if(u <= 5 && unit(i).Fuck < defaultstat(unit(i).Tags[0],"Fuck")+unit(o).Feed-1){
			unit(i).Fuck+=increaseValue;
			Fuck+=increaseValue;
		}else if(unit(i).Feed < defaultstat(unit(i).Tags[0],"Feed")+unit(o).Feed-1){
			unit(i).Feed+=increaseValue;
			Feed+=increaseValue;
		}
	}
	if(unit(o).Name == "Wolf Queen"){
		unit(i).MPle += 10;
		unit(i).CPle += 10;
	}
	if(unit(o).Tags[0] == "Batgirl"){
		unit(o).appetite -= 12;
	}
	if(unit(o).appetite > 0){
			unit(i).appetite += unit(o).appetite;
			if(unit(i).appetite >= 16){
				return ("Appetite Level:ENDLESS <br>Increases(Fight:"+Figh+" Flirt:"+Flir+" Flee:"+Flee+" Feast:"+Feas+" Fuck:"+Fuck+" Feed:"+Feed+")")
			}
			if(unit(i).appetite >= 8){
				return ("Appetite Level:Big <br>Increases(Fight:"+Figh+" Flirt:"+Flir+" Flee:"+Flee+" Feast:"+Feas+" Fuck:"+Fuck+" Feed:"+Feed+")")
			}
			if(unit(i).appetite >= 4){
				return ("Appetite Level:Medium <br>Increases(Fight:"+Figh+" Flirt:"+Flir+" Flee:"+Flee+" Feast:"+Feas+" Fuck:"+Fuck+" Feed:"+Feed+")")
			}
			if(unit(i).appetite >= 2){
				return ("Appetite Level:Small <br>Increases(Fight:"+Figh+" Flirt:"+Flir+" Flee:"+Flee+" Feast:"+Feas+" Fuck:"+Fuck+" Feed:"+Feed+")")
			}
	}
	if(Figh+Flir+Flee+Feas+Fuck+Feed>0){
		Figh ? Figh=" Fight:"+Figh:Figh=""
		Flir ? Flir=" Flirt:"+Flir:Flir=""
		Flee ? Flee=" Flee:"+Flee:Flee=""
		Feas ? Feas=" Feast:"+Feas:Feas=""
		Fuck ? Fuck=" Fuck:"+Fuck:Fuck=""
		Feed ? Feed=" Feed:"+Feed:Feed=""
		return ("Increases("+Figh+Flir+Flee+Feas+Fuck+Feed+" )")
		return ("Increases(Fight:"+Figh+" Flirt:"+Flir+" Flee:"+Flee+" Feast:"+Feas+" Fuck:"+Fuck+" Feed:"+Feed+")")
	}else{
		return ("No Stat Increases. Need bigger prey!")
	}
	//LogEntry("Stats increased by:"+increases)
}
function unit (Entry){
	if(Entry<100){
		return party.units[Entry];
	}else{
		return map[party.y][party.x].units[Entry-100];
	}
}
//TODO:defaultstat
function defaultstat(R,F){
	Entry = 0
	if(R == "Human"){
		if(F == "MPun"){
		 return 30;//30
		}
		if(F == "MPle"){
		 return 10;//10
		}
		if(F == "Figh"){
		 return 10;
		}
		if(F == "Flir"){
		 return 10;
		}
		if(F == "Flee"){
		 return 10;
		}
		if(F == "Feas"){ 
		 return 15;//15
		}
		if(F == "Fuck"){
		 return 15;//15
		}
		if(F == "Feed"){
		 return 5;
		}
	}
	if(R == "Bunnygirl"){
		if(F == "MPun"){
		 return 10;
		}
		if(F == "MPle"){
		 return 12;
		}
		if(F == "Figh"){
		 return 3;
		}
		if(F == "Flir"){
		 return 5;
		}
		if(F == "Flee"){
		 return 10;
		}
		if(F == "Feas"){
		 return 3;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 5;
		}
	}
	if(R == "Mousegirl"){
		if(F == "MPun"){
		 return 5;
		}
		if(F == "MPle"){
		 return 20;
		}
		if(F == "Figh"){
		 return 10;
		}
		if(F == "Flir"){
		 return 5;
		}
		if(F == "Flee"){
		 return 10;
		}
		if(F == "Feas"){
		 return 5;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 10;
		}
	}
	if(R == "Catgirl"){
		if(F == "MPun"){
		 return 20;
		}
		if(F == "MPle"){
		 return 10;
		}
		if(F == "Figh"){
		 return 10;
		}
		if(F == "Flir"){
		 return 5;
		}
		if(F == "Flee"){
		 return 5;
		}
		if(F == "Feas"){
		 return 5;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 5;
		}
	}
	if(R == "Foxgirl"){
		if(F == "MPun"){
		 return 20;
		}
		if(F == "MPle"){
		 return 20;
		}
		if(F == "Figh"){
		 return 10;
		}
		if(F == "Flir"){
		 return 5;
		}
		if(F == "Flee"){
		 return 5;
		}
		if(F == "Feas"){
		 return 5;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 5;
		}
	}
	if(R == "Batgirl"){
		if(F == "MPun"){
		 return 10;
		}
		if(F == "MPle"){
		 return 20;
		}
		if(F == "Figh"){
		 return 10;
		}
		if(F == "Flir"){
		 return 5;
		}
		if(F == "Flee"){
		 return 10;
		}
		if(F == "Feas"){
		 return 5;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 5;
		}
	}
	
	if(R == "Froggirl"){
		if(F == "MPun"){
		 return 20;
		}
		if(F == "MPle"){
		 return 20;
		}
		if(F == "Figh"){
		 return 5;
		}
		if(F == "Flir"){
		 return 5;
		}
		if(F == "Flee"){
		 return 5;
		}
		if(F == "Feas"){
		 return 15;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 5;
		}
	}
	if(R == "Wolfgirl"){
		if(F == "MPun"){
		 return 40;
		}
		if(F == "MPle"){
		 return 40;
		}
		if(F == "Figh"){
		 return 15;
		}
		if(F == "Flir"){
		 return 5;
		}
		if(F == "Flee"){
		 return 5;
		}
		if(F == "Feas"){
		 return 15;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 10;
		}
	}
	if(R == "Slimegirl"){
		if(F == "MPun"){
		 return 40;
		}
		if(F == "MPle"){
		 return 40;
		}
		if(F == "Figh"){
		 return 10;
		}
		if(F == "Flir"){
		 return 3;
		}
		if(F == "Flee"){
		 return 5;
		}
		if(F == "Feas"){
		 return 25;
		}
		if(F == "Fuck"){
		 return 3;
		}
		if(F == "Feed"){
		 return 10;
		}
	}
	if(R == "Deergirl"){
		if(F == "MPun"){
		 return 30;
		}
		if(F == "MPle"){
		 return 30;
		}
		if(F == "Figh"){
		 return 5;
		}
		if(F == "Flir"){
		 return 5;
		}
		if(F == "Flee"){
		 return 30;
		}
		if(F == "Feas"){
		 return 5;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 10;
		}
	}
	if(R == "Harpygirl"){
		if(F == "MPun"){
		 return 30;
		}
		if(F == "MPle"){
		 return 40;
		}
		if(F == "Figh"){
		 return 15;
		}
		if(F == "Flir"){
		 return 5;
		}
		if(F == "Flee"){
		 return 30;
		}
		if(F == "Feas"){
		 return 15;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 10;
		}
	}
	if(R == "Drowgirl"){
		if(F == "MPun"){
		 return 30;
		}
		if(F == "MPle"){
		 return 60;
		}
		if(F == "Figh"){
		 return 20;
		}
		if(F == "Flir"){
		 return 3;
		}
		if(F == "Flee"){
		 return 10;
		}
		if(F == "Feas"){
		 return 3;
		}
		if(F == "Fuck"){
		 return 3;
		}
		if(F == "Feed"){
		 return 10;
		}
	}
	if(R == "Goblingirl"){
		if(F == "MPun"){
		 return 10;
		}
		if(F == "MPle"){
		 return 20;
		}
		if(F == "Figh"){
		 return 15;
		}
		if(F == "Flir"){
		 return 3;
		}
		if(F == "Flee"){
		 return 5;
		}
		if(F == "Feas"){
		 return 3;
		}
		if(F == "Fuck"){
		 return 5;
		}
		if(F == "Feed"){
		 return 5;
		}
	}
}
//RAND-END--------------------------------------------------------------------
</script>
</html>
