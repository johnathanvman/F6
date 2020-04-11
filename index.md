<html lang="en-US">

<head>
	<link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Londrina+Solid&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Londrina+Outline|Londrina+Solid&display=swap" rel="stylesheet">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Idea 001</title>
<style>
.bod {
	background-color: #000000;
}
.main
{
user-select: none;
}
.grid-container {

  display: inline-grid;
  text-align: center;
  grid-template-columns: 5px auto auto auto 5px;
  grid-template-rows: 5px auto auto auto 5px;
  padding: 10px;
  margin: 10px;
}
.grid-edge {
}
.grid-item {

  padding: 10px;
  font-family: 'Love Ya Like A Sister', cursive;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  user-select: none; 
}
.container {
	font-family: "Consolas", "Lucida Console", Monaco, monospace;
	font-size: 12px;
	background-color: grey;
	text-align: center;
	margin: auto;

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
.btn {
	user-select: none;
	font-family: 'Bangers', cursive;
	font-size: 12px;
	letter-spacing: .5px;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
}
.btndis {
	user-select: none;
	font-family: 'Bangers', cursive;
	font-size: 18px;
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
	user-select: none;
	font-family: 'Bangers', cursive;
	font-size: 18px;
	letter-spacing: 2px;
	padding: 10px;
	margin: 5px;
	border: none;
	background-color:#000000;
	color:#ffee88;
	font-weight: 800;
	border-radius: 4px;
}
.btnavl {
	user-select: none;
	cursor: pointer;
	font-family: 'Bangers', cursive;
	font-size: 18px;
	letter-spacing: .5px;
  padding: 10px;
  margin: 5px;
  border: none;
  background-color:#88cccc;
  border-radius: 4px;
}
.nam {
	user-select: none;
	font-family: 'Londrina Solid', cursive;
	letter-spacing: .5px;
	font-size: 18px;
	font-weight: 100;
	border: none;
	border-radius: 2px;
}
.namdis {
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
	border-radius: 2px;
}
.namsleep {
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
	border-radius: 2px;
}
.namout {
	user-select: none;
	font-family: 'Londrina Solid', cursive;
	letter-spacing: .5px;
	font-size: 18px;
	font-weight: 100;
	border: none;
	pointer-events: none;
	user-select: none;
	background-color: #ffffff;
	color:#bbbbbb;
	border-radius: 2px;
}
.namact {
	user-select: none;
	font-family: 'Londrina Solid', cursive;
	font-size: 18px;
	font-weight: 300;
	border: none;
	background-color:#000000;
	color:#ffee88;
	border-radius: 2px;
}
.namavl {
	user-select: none;
	cursor: pointer;
	font-family: 'Londrina Solid', cursive;
	letter-spacing: .5px;
	font-size: 18px;
	font-weight: 100;
	border: none;
	background-color:#88cccc;
	border-radius: 2px;
}
.mainspan1 {
	user-select: none;
	vertical-align: top;
	padding: 5px 5px 5px 5px;
	background-color: white;
	display: inline-block;
	width: 40%;
	text-align: left;
}
.mainspan2 {
	user-select: none;
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
.logDeets {
	letter-spacing: .0px;
	font-family: san-serif;
	font-size: 100%;
	color: DarkGray;
	font-style: italic;
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
Put a status and menu bar here someday!
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
	  <div id="map_bottom1" class="grid-edge"></div>
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
	if(i < 0){i = map.length-1;}
	if(i == map.length){i = 0;}
	if(o < 0){o = map[0].length-1;}
	if(o == map[0].length){o = 0;}
	return map[i][o];
}
function GetMapCrossroad(i,o){
	if(i < 0){i = map.length-1;}
	if(i == map.length){i = 0;}
	if(o < 0){o = map[0].length-1;}
	if(o == map[0].length){o = 0;}
	
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
	if(i < 0){i = map.length-1;}
	if(i == map.length){i = 0;}
	if(o < 0){o = map[0].length-1;}
	if(o == map[0].length){o = 0;}
	
	if(map[i][o].name == undefined){
		return "none";
	}else{
		return map[i][o].tag;
	}
}
function GetMapName(i,o){
	if(i < 0){i = map.length-1;}
	if(i == map.length){i = 0;}
	if(o < 0){o = map[0].length-1;}
	if(o == map[0].length){o = 0;}
	
	if(map[i][o].name == undefined){
		return "none";
	}else{
		return map[i][o].name;
	}
}
function GetMapTile(i,o){//NEW TILES TO MAKE 5,16,19
	var namestring = ""
	if(i < 0){i = map.length-1;}
	if(i == map.length){i = 0;}
	if(o < 0){o = map[0].length-1;}
	if(o == map[0].length){o = 0;}
	
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
			return "<span class=\"caveText\">? ? ? ?</span>";
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
				return "Exit"
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
				return "Steel Door";
			}else{
				return "Castle Wall";
			}
		}else{
			return namestring;
		}
	}
}
function GetMapTileColor(i,o){
	if(i < 0){i = map.length-1;}
	if(i == map.length){i = 0;}
	if(o < 0){o = map[0].length-1;}
	if(o == map[0].length){o = 0;}
	
	if(map[i][o].name == undefined){
		MakeMapTile(i,o)
	} 
	if(map[party.y][party.x].tag == "Dungeon"){
		if(Math.abs(party.y-i)==2 || Math.abs(party.x-o)==2 ){
			return "#808080"
		}else if(map[i][o].tag == "Dungeon"){
			return "#999999"
		}else{
			return "#808080"
		}
	}if(map[party.y][party.x].tag == "Entrance"){
		if(Math.abs(party.y-i)==2 || Math.abs(party.x-o)==2 ){
			return "#808080"
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
function MakeMapTile(i,o){ 
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
		if(map[i][o] == 9){//SAFE
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
				if(riverName == "Freshwater Lake" || riverName == "Waterfall" || riverName == ""){riverName=randomEntry("River")}
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
			map[i][o] = {tag:"Beach",name:"Sandy Beach",units:[],hostile:false,clr:"#eeeeaa"};
		}
		if(map[i][o] == 22){//Cave Entrance 
			map[i][o] = {tag:"Entrance",name:"Cave Opening",altname:"Cave Opening",units:[],hostile:false,clr:"#999977"};
		}
		if(map[i][o] == 23){//Cave Entrance LIGHT
			if(Math.random()<.50){
				map[i][o] = {tag:"Entrance",name:"Cave Opening",altname:"Cave Opening",units:[],hostile:false,clr:"#999977"};
			}else{
				map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:"Big Cave",units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"CaveEnd");//will also change name of map tile
				//Spawn Cave Mobs CaveEnd
			}
		}
		if(map[i][o] == 24){//Cave Entrance BOSS
			if(Math.random()<.25){
				map[i][o] = {tag:"Entrance",name:"Cave Opening",altname:"Cave Opening",units:[],hostile:false,clr:"#999977"};
			}else{
				map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
				//Spawn Light Boss Fight
			}
		}
		if(map[i][o] == 25){//Cave Entrance BOSS
			if(CavePath != 0){
				map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"Cave");//will also change name of map tile
			}else{
				map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
			}
		}
		if(map[i][o] == 26){//Cave Entrance BOSS
			if(CavePath != 1){
				map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"Cave");//will also change name of map tile
			}else{
				map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
			}
		}
		if(map[i][o] == 27){//Cave Entrance BOSS
			if(CavePath != 2){
				map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"Cave");//will also change name of map tile
			}else{
				map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
			}
		}
		if(map[i][o] == 28){//Cave LIGHT
			map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
			SpawnMobs(i,o,"Cave");//will also change name of map tile
		}
		if(map[i][o] == 31){//NEED TO MAKE LIGHT BOSS SETUP
			map[i][o] = {tag:"Cave",altname:randomEntry("Cliff"),name:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
			SpawnMobs(i,o,"Cave");//will also change name of map tile
		}
		if(map[i][o] == 37){
			map[i][o] = {tag:"Indoors",name:"Guard Tower",units:[],hostile:true,clr:"#aaaa66"};
			SpawnMobs(i,o,"FortWolf");//will also change name of map tile
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
		}
		if(map[i][o] == 41){
			map[i][o] = {tag:"Dungeon",name:"Hall",altname:"Dungeon",units:[],hostile:false,clr:"#666666"};
			GetMapTile(i-1,o);GetMapTile(i+1,o);GetMapTile(i,o-1);GetMapTile(i,o+1)//generate!
				if(map[i-1][o].name == "Hall"){map[i][o].north = true;}else if(map[i][o].north == undefined){map[i][o].north = false;}
				if(map[i+1][o].name == "Hall"){map[i][o].south = true;}else if(map[i][o].south == undefined){map[i][o].south = false;}
				if(map[i][o-1].name == "Hall"){map[i][o].west  = true;}else if(map[i][o].west == undefined){map[i][o].west  = false;}
				if(map[i][o+1].name == "Hall"){map[i][o].east  = true;}else if(map[i][o].east == undefined){map[i][o].east  = false;}
				//SpawnMobs(i,o,"DungeonWolf"); 
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
		}
		//------------------------------------
		map[i][o].travel = -1
}
//WALKMAIN--------------------------------------------------------------------
function Walk(i,o){
	//LogEntry("-------------------------------------------------------------------------------------------------------")
	//LogEntry("OLD POSITION:"+party.y+"/"+party.x)
	if(map[party.y][party.x].tag == "Dungeon"){
		//LogEntry("  [OLD] north:"+map[party.y][party.x].north+"  south:"+map[party.y][party.x].south+"  west:"+map[party.y][party.x].west+"  east:"+map[party.y][party.x].east);
	}
	if(map[party.y+i][party.x+o].tag == "Dungeon"){
		//LogEntry("  [NEW] north:"+map[party.y+i][party.x+o].north+"  south:"+map[party.y+i][party.x+o].south+"  west:"+map[party.y+i][party.x+o].west+"  east:"+map[party.y+i][party.x+o].east);
	}
	if(map[party.y][party.x].tag == "Dungeon" && (GetMapTile(party.y+i,party.x+o) == "....")){
		LogEntry("Its solid stone, I can't get through.");
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
	if(party.y+i < 0){i = map.length-1;}
	if(party.y+i == map.length){i = (map.length-1)*-1;}
	if(party.x+o < 0){o = map[0].length-1;}
	if(party.x+o == map[0].length){o = (map[0].length-1)*-1;}
	
	party.x += o;
	party.y += i;
	GetMapTile(party.y,party.x)
	if(map[party.y][party.x].tag == "Trail"){//EVENTS CAN HAPPEN OFF OF TRAILS??
		if(EventCountdown <= 0 && Math.random()<.1){
			//MAKE AN EVENT
			LogEntry("An event could have fired now!")
			EventCountdown = (Math.round(Math.random()*100+50))
		}
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
		LogEntry("The castle wall seems impenatrable, I should look for a door...");
	}else if((map[party.y-i][party.x-o].tag != "Cave" && map[party.y-i][party.x-o].tag != "Entrance") && map[party.y][party.x].tag == "Cave"){
		party.x -= o;
		party.y -= i;
		LogEntry(randomEntry("Cliffhit"));
	}else if(map[party.y-i][party.x-o].tag == "Cave" && (map[party.y][party.x].tag != "Cave" && map[party.y][party.x].tag != "Entrance")){
		party.x -= o;
		party.y -= i;
		LogEntry("There doesn't seem to be anything this way. I hope I'm not getting lost in here...");
	}else if(map[party.y][party.x].hostile && (map[party.y][party.x].units.length > 1 || party.units.length < 5 || map[party.y][party.x].units[0].Tags[1] != "Small")){
		lastMove = [i,o]
		

		if(map[party.y][party.x].travel == -1){
			map[party.y][party.x].travel = travel
		}
		LogEntry(randomTravel(1));travel++
		//unclickable buttons
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
		party.units[e].Init = (e*100) + (AR(party.units[e].Flee)*1000)
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
			party.units[e].appetite = (party.units[e].Size*2)-1;
			if( party.units[e].Tags[a] == "Passive"){party.units[e].Cond.push(party.units[e].Tags[a])}
			if( party.units[e].Tags[a] == "Flying" && map[party.y][party.x].tag != "Indoors"){party.units[e].flying = true;party.units[e].antiflying = true;party.units[e].Cond.push("Flying")}
			if( party.units[e].Tags[a] == "AntiFlying"){party.units[e].antiflying = true;}
			if( party.units[e].Tags[a] == "Swimming" && map[party.y][party.x].tag == "Water"){party.units[e].swimming = true;party.units[e].antiswimming = true;party.units[e].Cond.push("Swimming")}
			if( party.units[e].Tags[a] == "Antiswimming"){party.units[e].antiswimming = true;}
			a++
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
					if(randomEntry("Slutty"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Slutty"+map[party.y][party.x].units[e].Tags[0])
						//map[party.y][party.x].units[e].MPle -= 5;
					}
				}else if(personality > 70  && FindPersonality("Hungry") == null){ 
					map[party.y][party.x].units[e].Hungry = true
					if(randomEntry("Hungry"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Hungry"+map[party.y][party.x].units[e].Tags[0])
						//map[party.y][party.x].units[e].Feas += 5;
					}
				}else if(personality > 55  && FindPersonality("Funny") == null){ 
					map[party.y][party.x].units[e].Funny = true
					if(randomEntry("Funny"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Funny"+map[party.y][party.x].units[e].Tags[0])
					}
				}else if(personality > 40  && FindPersonality("Negative") == null){ 
					map[party.y][party.x].units[e].Negative = true
					if(randomEntry("Negative"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Negative"+map[party.y][party.x].units[e].Tags[0])
						//map[party.y][party.x].units[e].MPle += 5;
					}
				}else if(personality > 35  && FindPersonality("Positive") == null){ 
					map[party.y][party.x].units[e].Positive = true
					if(randomEntry("Positive"+map[party.y][party.x].units[e].Tags[0]) != "No Entry Found" && Math.random()<.5){
						map[party.y][party.x].units[e].Name = randomEntry("Positive"+map[party.y][party.x].units[e].Tags[0])
						//map[party.y][party.x].units[e].MPle += 5;
					}
				}else{
					map[party.y][party.x].units[e].Vanilla = true
				}
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
			if(map[party.y][party.x].units[e].Name.includes("Petite")){
				map[party.y][party.x].units[e].butt = -1
				map[party.y][party.x].units[e].bust = -1
			}
			if(map[party.y][party.x].units[e].Name.includes("Voluptuous") || map[party.y][party.x].units[e].Name.includes("Curvy") || map[party.y][party.x].units[e].Name.includes("Busty") || map[party.y][party.x].units[e].Name.includes("Perky")){
				map[party.y][party.x].units[e].bust = 1
			}
			if(map[party.y][party.x].units[e].Name.includes("Stacked")){
				map[party.y][party.x].units[e].bust = 2
			}
			if(map[party.y][party.x].units[e].Name.includes("Curvy") || map[party.y][party.x].units[e].Name.includes("Plump") || map[party.y][party.x].units[e].Name.includes("Fat-Bottomed") || map[party.y][party.x].units[e].Name.includes("Thick") || map[party.y][party.x].units[e].Name.includes("Chubby") || map[party.y][party.x].units[e].Name.includes("Voluptuous") || map[party.y][party.x].units[e].Name.includes("Fat") || map[party.y][party.x].units[e].Name.includes("Pudgy")){
				map[party.y][party.x].units[e].butt = 2
				if(Math.random()<.5){
					map[party.y][party.x].units[e].bust = 2
				}
			}
			if(map[party.y][party.x].units[e].Name.includes("Slim") || map[party.y][party.x].units[e].Name.includes("Slender")){
				if(Math.random()<.5){
					map[party.y][party.x].units[e].bust = -1
				}else{
					map[party.y][party.x].units[e].bust = 1
				}
				if(Math.random()<.5){
					map[party.y][party.x].units[e].butt = -1
				}else{
					map[party.y][party.x].units[e].butt = 1
				}
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
			map[party.y][party.x].units[e].appetite = (map[party.y][party.x].units[e].Size*2)-1;
			if( map[party.y][party.x].units[e].Tags[a] == "Flying" && map[party.y][party.x].tag != "Indoors"){map[party.y][party.x].units[e].flying = true;map[party.y][party.x].units[e].antiflying = true;map[party.y][party.x].units[e].Cond.push("Flying")}
			if( map[party.y][party.x].units[e].Tags[a] == "AntiFlying"){map[party.y][party.x].units[e].antiflying = true;}
			if( map[party.y][party.x].units[e].Tags[a] == "Swimming" && map[party.y][party.x].tag == "Water"){map[party.y][party.x].units[e].swimming = true;map[party.y][party.x].units[e].antiswimming = true;map[party.y][party.x].units[e].Cond.push("Swimming")}
			if( map[party.y][party.x].units[e].Tags[a] == "Antiswimming"){map[party.y][party.x].units[e].antiswimming = true;}
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
					skiptaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+" is asleep, Skip Turn</button>"
					showstats = true;
			}
			if(currInit == party.units[e].Init && party.units[e].fled){
				//Init = " - Active - Fled"
				if(map[party.y][party.x].name == "Boss"){
					skiptaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+
					choose([" spectates"])
					", Skip Turn</button>"
				}else{
					skiptaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+" has fled, Skip Turn</button>"
				}
				showstats = true;
			}
		}
		if(pick1 == -1 && pick2 == -1 && (!map[party.y][party.x].hostile || party.units[e].Init==currInit) && !party.units[e].asleep && !party.units[e].fled){//(No picks. not hostile, or current initiative)or someone else was picked and an action is picked
		Good += "<button class=\"namavl\" onclick=\"SelectDom("+e+")\">"+party.units[e].Name+Init+"</button>"
		}else if(pick1 == e && !party.units[e].fled && !party.units[e].asleep){//pick one chosen, is hero.
		Good += "<button class=\"namact\" onclick=\"SelectDom(-1)\">"+String(party.units[e].Name).toUpperCase()+Init+"</button>"
		showstats = true;
		}else if(pick1 != e && action > -1 && action != 2 && !party.units[e].fled && (!party.units[e].asleep || (action == 3)) && (e > 0 || action != 3)){//pick one chosen. action chosen
		Good += "<button class=\"namavl\" onclick=\"SelectSub("+e+")\">"+party.units[e].Name+Init+"</button>"
		}else if (party.units[e].fled){
		Good += "<button class=\"namout\">"+party.units[e].Name+Init+"</button>"
		}else if (party.units[e].asleep){
		Good += "<button class=\"namsleep\">"+party.units[e].Name+Init+"</button>"
		}else{
		Good += "<button class=\"namdis\">"+party.units[e].Name+Init+"</button>"
		}
		
		Good += "&nbsp<span class=\"tags\">"
		a = 0
		while(a < party.units[e].Cond.length){
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
				foodtaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"FoodAction("+e+")\">"+map[party.y][party.x].units[e].Name+"'s Turn</button>"
				showstats = true;
			}else if(currInit == map[party.y][party.x].units[e].Init && map[party.y][party.x].units[e].asleep){
				foodtaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"FoodAction("+e+")\">"+map[party.y][party.x].units[e].Name+" is asleep, Skip Turn</button>"
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
		while(a < map[party.y][party.x].units[e].Cond.length){
			Food += "<i> "+map[party.y][party.x].units[e].Cond[a] + "</i>";
			if(a == 3 || a == 7 || a == 11){Food += "<br>"}else if(a < map[party.y][party.x].units[e].Cond.length-1){Food+=","}
			a++;
		}
		if(!map[party.y][party.x].hostile){Food+=", Passive"}
		Food += "</span>&nbsp&nbsp"
		
		if(pick1 != (e+100) && action > -1 && ((action == 2 || action == 3) || !map[party.y][party.x].units[e].asleep)){//pick one chosen, isnt hero. action chosen
			Food += "<button class=\"namavl\" onclick=\"SelectSub("+(e+100)+")\">"+map[party.y][party.x].units[e].Name+Init+"</button>"
		}else if(currInit == map[party.y][party.x].units[e].Init && map[party.y][party.x].hostile){
			Food += "<button class=\"namact\">"+String(map[party.y][party.x].units[e].Name).toUpperCase()+Init+"</button>"
			showstats = true;
		}else if(map[party.y][party.x].units[e].asleep){
			Food += "<button class=\"namsleep\">"+map[party.y][party.x].units[e].Name+Init+"</button>"
		}else{
			Food += "<button class=\"namdis\">"+map[party.y][party.x].units[e].Name+Init+"</button>"
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
	if(skiptaketurn != ""){//use for sleeping/fled creatures
		document.getElementById("actions").innerHTML = skiptaketurn
	}else if(foodtaketurn != ""){
		document.getElementById("actions").innerHTML = foodtaketurn
	}else if((pick1 == -1 && action == -1) || (party.units.length == 1 && map[party.y][party.x].units.length == 0)){
	document.getElementById("actions").innerHTML = 
	"<button id=\"FIG\"class=\"btndis\" onclick=\"SelectAction(0)\">Fight "+fstats[0]+"</button><button id=\"FON\" class=\"btndis\" onclick=\"SelectAction(1)\">Flirt "+fstats[1]+"</button><button id=\"FLE\" class=\"btndis\" onclick=\"SelectAction(2)\">Flee "+fstats[2]+"</button><br>"+
	"<button id=\"FEA\"class=\"btndis\" onclick=\"SelectAction(3)\">Feast "+fstats[3]+"</button><button id=\"FUC\" class=\"btndis\" onclick=\"SelectAction(4)\"  >Fuck "+fstats[4]+"</button><button id=\"FEE\" class=\"btndis\" onclick=\"SelectAction(5)\">Feed "+fstats[5]+"</button>"
	}else{
	document.getElementById("actions").innerHTML = 
	"<button id=\"FIG\"class=\"btnavl\" onclick=\"SelectAction(0)\">Fight "+fstats[0]+"</button><button id=\"FON\" class=\"btnavl\" onclick=\"SelectAction(1)\">Flirt "+fstats[1]+"</button><button id=\"FLE\" class=\"btnavl\" onclick=\"SelectAction(2)\">Flee "+fstats[2]+"</button><br>"+
	"<button id=\"FEA\"class=\"btnavl\" onclick=\"SelectAction(3)\">Feast "+fstats[3]+"</button><button id=\"FUC\" class=\"btnavl\" onclick=\"SelectAction(4)\"  >Fuck "+fstats[4]+"</button><button id=\"FEE\" class=\"btnavl\" onclick=\"SelectAction(5)\">Feed "+fstats[5]+"</button>"
		if(action == 0){document.getElementById("FIG").style.color = "#ffee88";document.getElementById("FIG").style.backgroundColor = "#000000";document.getElementById("FIG").style.fontWeight = "100"}
		if(action == 1){document.getElementById("FON").style.color = "#ffee88";document.getElementById("FON").style.backgroundColor = "#000000";document.getElementById("FON").style.fontWeight = "100"}
		if(action == 2){document.getElementById("FLE").style.color = "#ffee88";document.getElementById("FLE").style.backgroundColor = "#000000";document.getElementById("FLE").style.fontWeight = "100"}
		if(action == 3){document.getElementById("FEA").style.color = "#ffee88";document.getElementById("FEA").style.backgroundColor = "#000000";document.getElementById("FEA").style.fontWeight = "100"}
		if(action == 4){document.getElementById("FUC").style.color = "#ffee88";document.getElementById("FUC").style.backgroundColor = "#000000";document.getElementById("FUC").style.fontWeight = "100"}
		if(action == 5){document.getElementById("FEE").style.color = "#ffee88";document.getElementById("FEE").style.backgroundColor = "#000000";document.getElementById("FEE").style.fontWeight = "100"}	
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
	var stats = ""
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
			if((map[party.y][party.x].units[pick2-100].swimming) && Math.random()<.5 && !party.units[pick1].antiswimming){//EVADE
				domval = 0;
			}
			map[party.y][party.x].units[pick2-100].CPle = 0;
			
			if(unit(pick2).CPun+1 == unit(pick2).MPun){
				unit(pick2).CPun += domval;
			}else if(unit(pick2).CPun+domval >= unit(pick2).MPun){
				unit(pick2).CPun = unit(pick2).MPun-1
			}else{
				unit(pick2).CPun += domval;
			}
					
			subval = map[party.y][party.x].units[pick2-100].CPun/map[party.y][party.x].units[pick2-100].MPun;
		}
		//LogEntry(randomAction([0,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
		DetailedEntry(randomAction([0,pick1,pick2,domval,subval,map[party.y][party.x].tag]),"Fight for "+domval)
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
		if(pick1 == 0 && unit(0).CPle <= 0){
			subval = -1;
			LogEntry(randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
		}else if(unit(pick1).Size + 0 < unit(pick2).Size){//change "0" to the modifier for eating bigger prey????
			subval = -2;
			LogEntry(randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
		}else{
			//subval == -2:SIZE -1:FULL 0:FAILED 1:ASLEEP 2:UNWILLING 3:WILLING
			if(pick2 < 100){
				subval = 3
				domval = unit(pick2).MPle
				stats = StatGain(pick1,pick2)
			}else if(map[party.y][party.x].hostile){
				if(unit(pick2).asleep){
					subval = 1;
					stats = StatGain(pick1,pick2)
				}else{
					domval = AR(party.units[pick1].Feas)
					if((map[party.y][party.x].units[pick2-100].flying) && !party.units[pick1].antiflying && Math.random()<.5){//EVADE
						subval = 0;
					}else if((map[party.y][party.x].units[pick2-100].swimming) && !party.units[pick1].antiswimming && Math.random()<.5){//EVADE
						subval = 0;
					}else if(domval >= map[party.y][party.x].units[pick2-100].MPun-map[party.y][party.x].units[pick2-100].CPun){
						subval = 2;
						stats = StatGain(pick1,pick2)

					}else{
						subval = 0;
						if(!unit(pick2).willing){
							unit(pick2).CPle = 0;
						}
					}
				}
			}else{//PASSIVE. TEST VS PLE BEFORE PUN. DECIDES IF ITS WILLING/UNWILLING/UNSUCCESSFUL. ONLY WILLING VORE KEEPS HOSTILE:FALSE
				domval = AR(party.units[pick1].Feas)
				if(domval >= map[party.y][party.x].units[pick2-100].MPle-map[party.y][party.x].units[pick2-100].CPle && map[party.y][party.x].units[pick2-100].willing){
					subval = 3;
					stats = StatGain(pick1,pick2)
				}else if(domval >= map[party.y][party.x].units[pick2-100].MPun-map[party.y][party.x].units[pick2-100].CPun && (!map[party.y][party.x].units[pick2-100].flying ||  party.units[pick1].antiflying || Math.random()<.5) && (!map[party.y][party.x].units[pick2-100].swimming ||  party.units[pick1].swimming || Math.random()<.5)){
					subval = 2;
					stats = StatGain(pick1,pick2)
				}else{
					subval = 0;
					if(!unit(pick2).willing){
						unit(pick2).CPle = 0;
					}
				}
					
			}// domval >= unit(pick2).MPle-unit(pick2).CPle
			if(pick1 == 0 && Cocked == null && subval >= 1 && unit(pick2).Size==1){Cocked = unit(pick2)}
			//LogEntry(randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
			DetailedEntry(randomAction([3,pick1,pick2,domval,subval,map[party.y][party.x].tag]),stats)
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
			}else{
				if(pick2<100){
					domval = AR(party.units[0].Fuck)//HEAL BY BOTH FUCK VALUES
					
					party.units[0].CPun = 0
					if(unit(pick2).MPun < defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck){
						unit(pick2).MPun = Math.min(unit(pick2).MPun+unit(pick2).Size,defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck)
					}
					if(unit(pick1).MPun < defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck){
						unit(pick1).MPun = Math.min(unit(pick1).MPun+1,defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck)
					}
					if(map[party.y][party.x].hostile){
						unit(pick2).Cond[unit(pick2).Cond.length] = "Asleep"
						unit(pick2).asleep = true;
					}
					party.units[pick2].CPle = Math.min(party.units[pick2].CPle+AR(party.units[0].Fuck),party.units[pick2].MPle)
					party.units[pick2].CPun = 0
					party.units[0].CPle = Math.min(party.units[0].CPle+AR(party.units[pick2].Size),party.units[0].MPle)

					domval = 1
				}else{//FOOD
					if(AR(party.units[0].Fuck) >= map[party.y][party.x].units[pick2-100].MPle-map[party.y][party.x].units[pick2-100].CPle){
						domval = AR(party.units[0].Fuck)//HEAL BY BOTH FUCK VALUES
						
						
						party.units[0].CPun = 0
						
						map[party.y][party.x].units[pick2-100].CPle = map[party.y][party.x].units[pick2-100].MPle
						map[party.y][party.x].units[pick2-100].CPun = 0
						if(unit(pick2).MPun < defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck){
							unit(pick2).MPun = Math.min(unit(pick2).MPun+unit(pick2).Size,defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck)
						}
						if(unit(pick1).MPun < defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck){
							unit(pick1).MPun = Math.min(unit(pick1).MPun+1,defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck)
						}
						if(map[party.y][party.x].hostile){
							unit(pick2).Cond[unit(pick2).Cond.length] = "Asleep"
							unit(pick2).asleep = true;
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
				if(unit(pick2).MPun < defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck){
					unit(pick2).MPun = Math.min(unit(pick2).MPun+1,defaultstat(unit(pick2).Tags[0],"MPun")+unit(0).Fuck)
				}
				if(unit(pick1).MPun < defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck){
					unit(pick1).MPun = Math.min(unit(pick1).MPun+unit(pick1).Size,defaultstat(unit(pick1).Tags[0],"MPun")+unit(pick2).Fuck)
				}
				if(party.units[0].CPle>=party.units[0].MPle){//not horny
					domval = -1;
				}else{
					if(map[party.y][party.x].hostile){
						unit(pick1).Cond.push("Asleep")
						unit(pick1).asleep=true;
					}
					party.units[0].CPun = 0
					party.units[pick1].CPle = Math.min(party.units[pick1].CPle+AR(party.units[0].Fuck),party.units[pick1].MPle)
					party.units[pick1].CPun = 0
					party.units[0].CPle = Math.min(party.units[0].CPle+AR(party.units[pick1].Size),party.units[0].MPle)
					domval = 1
				}
			}else if(pick2<100){
				unit(pick2).CPle = unit(pick2).MPle
				unit(pick1).CPle = unit(pick1).MPle
				domval = 1
			}else{//GOOD FUCKING FOOD
				if(AR(party.units[pick1].Fuck) >= map[party.y][party.x].units[pick2-100].MPle-map[party.y][party.x].units[pick2-100].CPle){
					unit(pick2).CPle = unit(pick2).MPle
					unit(pick1).CPle = unit(pick1).MPle
					if(map[party.y][party.x].hostile){
						unit(pick2).Cond.push("Asleep")
						unit(pick2).asleep = true;
						unit(pick1).Cond.push("Asleep")
						unit(pick1).asleep=true;
					}
					domval = 1
					//move sides
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
		LogEntry(randomAction([4,pick1,pick2,domval,subval,map[party.y][party.x].tag]))
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
	pick1	= -1;
	pick2	= -1;
	action	= -1;
	TimeFlow()
}
function FoodAction(Entry){
	//Check for Passive, Horny, Hungry, Asleep
	var u = Math.floor(Math.random()*party.units.length)
	var stats = ""
	if(map[party.y][party.x].name == "Boss"){
		u = 0//haha it u, as in she's coming after you!
	}else{
		if(party.units.length > 1 && Math.random()<.9){
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
				LogEntry("The "+map[party.y][party.x].units[Entry].Name + " just slipped past my "+party.units[u].Name +" and ran away!")
				Removal(Entry+100)
				map[party.y][party.x].hostile = false;
				Walk(0,0);
		}else{
			var domval = 0;
			var subval = 0



			domval = AR(map[party.y][party.x].units[Entry].Figh)

			if((party.units[u].flying) && Math.random()<.5 && !map[party.y][party.x].units[Entry].antiflying){
				LogEntry(randomAction([0,Entry+100,u,0,subval,map[party.y][party.x].tag]))
			}else if((party.units[u].swimming) && Math.random()<.5 && !map[party.y][party.x].units[Entry].antiswimming){
				LogEntry(randomAction([0,Entry+100,u,0,subval,map[party.y][party.x].tag]))
			}else{
				if(AR(map[party.y][party.x].units[Entry].Feas) > party.units[u].MPun-party.units[u].CPun && map[party.y][party.x].units[Entry].Size >= party.units[u].Size && Math.random()<.95){
					if(AR(map[party.y][party.x].units[Entry].Feas) > party.units[u].MPun-party.units[u].CPun && 2<4){//ADDS CHANCE FOR FAILURE
						//LogEntry(randomAction([3,Entry+100,u,domval,2,map[party.y][party.x].tag]))
						stats = StatGain(Entry+100,u)
						DetailedEntry(randomAction([3,Entry+100,u,domval,2,map[party.y][party.x].tag]),stats)
						Removal(u)
						death++
						
					}else{//Almost eaten
						LogEntry(randomAction([3,Entry+100,u,domval,0,map[party.y][party.x].tag]))
					}
				}else{
					
					if(u>0){party.units[u].CPle = 0;}
					if(party.units[u].CPun+1 == party.units[u].MPun){
						party.units[u].CPun += domval;
					}else if(party.units[u].CPun+domval >= party.units[u].MPun){
						party.units[u].CPun = party.units[u].MPun-1
					}else{
						party.units[u].CPun += domval;
					}
					subval = party.units[u].CPun/party.units[u].MPun;
					
					//LogEntry(randomAction([0,Entry+100,u,domval,subval,map[party.y][party.x].tag]))
					DetailedEntry(randomAction([0,Entry+100,u,domval,subval,map[party.y][party.x].tag]),"Fight for "+domval)
					if(subval >= 1){Removal(u);death++}
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
							"Away from the fighting, my ",
							"From afar, my ",
							"From across the throneroom, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "
						])+party.units[Entry].Name.toLowerCase()+choose([
							" says I can eat her next if I win.",
							" says she's next if I manage to eat the queen.",
							" asks the queen if she can be eaten next if I lose."
						])
					])
				}else if(party.units[Entry].Positive && Math.random() < .5){
					messageToLog = choose([
						choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "
						])+party.units[Entry].Name.toLowerCase()+choose([
							" screams out that she believes in me.",
							" strikes a pose, giving me a thumbs up. I feel inspired to win the fight!",
							" tells me to believe in the her that believes in me."
						])
					])
				}else if(party.units[Entry].Negative && Math.random() < .5){
					messageToLog = choose([
						choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my ",
							"While laying on a long bench, my "
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
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "
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
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "
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
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "
						])+party.units[Entry].Name.toLowerCase()+choose([
							" licks her lips as she watches us duel.",
							" drools while she watches us duel.",
							" asks if she can taste the queen before I swallow her.",
							"'s stomach growls loudly. We better get something to eat after this fight...",
						])
					])
				}else{
					messageToLog = choose([
						choose([
							"Away from the fighting, my ",
							"From afar, my ",
							"From a safe distance, my ",
							"While sitting on a long bench, my "
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
	document.getElementById("log").innerHTML = Logbook
}
function DetailedEntry(Entry,Deets){
	Logbook = Entry +"&nbsp<span class=\"logDeets\">"+Deets+" </span><br><br>" +Logbook;
	document.getElementById("log").innerHTML = Logbook
}
//WALKMAIN-END----------------------------------------------------------------
window.addEventListener('load', function () {
	if(window.innerWidth < window.innerHeight){
	document.getElementById("content").style.width = window.innerWidth + "px";
	}else{
	document.getElementById("content").style.width = window.innerHeight + "px";
	}
	document.getElementById("content").style.width = "800"
	StartTheGame()
})
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
	  units:[]
	};
	party.units.push({
		Name:"The Protagonist",
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
	29	CAVERN	MEDIUM
	30	CAVERN	DANGEROUS
	
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
	
	40	CAMP	?	
	41	CAMP	?
	42	CAMP	?
	-
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
	var tile_wolf = [//NEW TILES TO MAKE 5,16,19
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
	grid = [
		[12, 1, 2,13],
		[ 7, 0, 3, 8],
		[ 6, 5, 4, 9],
		[15,10,11,14]
	]
	
	//RANDOMIZE grid HERE. Tiles can only swap with EQUAL VALUE tiles
	//Randomize 1-7		8-11	12-15
	
	
	
	map = []
	i = 0;
	while(i < 100){
		map[i] = []
		o = 0;
		while(o < 100){
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
			}
			if(grid[i2][o2] == 1){
				tile_temp = tile_wolf
			}
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
				if((i2==0&&o2===2)||(i2==1&&o2===4)||(i2==2&&o2===1)){
					tile_temp = TileRotate(tile_temp,4)
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
	LogEntry("I woke up in a strange land full of monstergirls! I must start anew in this dangerous world and try to survive. Maybe I should find a way to make companions, and later get something to eat. Or, maybe, <i>someone</i> to eat! As I look through a window at the trees outside I decide that my new quest in this world will be to gobble down the Demon Queen, the tastiest monstergirl of them all!"
	+"<br><br><br>QUICK GUIDE:"
	+"<br><br>Select a charactor you control, select an action, select a target. During combat charactors fight in initiative order."
	+"<br><br>Fight: Hurts the target."
	+"<br>Flirt: Makes the target horny."
	+"<br>Flee: Attempt to escape the fight through a target hostile character. Stat is also used for combat initiative."
	+"<br>Feast: Attempt to feast on the target. Feasting improves stats based on preys Feed stat."
	+"<br>Fuck: Attempt to fuck the target. Girls fucked by the protagonist become loyal. Sex with protagonist heals both."
	+"<br>Feed: Willing character will feed another. Stats increases based on Feed stat of consumed creature."
	+"<br><br>Hurt: How close the charactor is to dying, and also how easy they are to eat."
	+"<br>Horny: How interested the charactor is in sex, even while hostile."
	+"<br>Hungry: Protagonist only. Can't Fuck when its full, can't Feast when its empty."
	+"<br><br>Navigation: click on any of the Eight surrounding locations on the top map."
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
function randomEntry(Entry){
	var Entrys = [];
	if(Entry == "Backstory"){
		Entrys.push("I wake up in a strange land full of monstergirls! I must start anew in this dangerous world and try to survive. I should find a way to make companions, and later get something to eat, or maybe someone to eat! As I look through a window at the trees outside I decide that my new quest in this world will be to gobble down the Demon Queen, the tastiest monstergirl of them all!")
	}
	else if(Entry == "Walk"){Entrys = ["traveled","traveled","traveled","traveled","traveled","hiked","hiked","walked","walked","skipped merrily","trekked","wandered","trudged","set forth", "meandered"]}
	else if(Entry == "WalkInside"){Entrys = ["explored","wandered","walked slowly","crept","lurked","creeped","tiptoed","cautiously walked","spelunked","delved","dredged"]}
	else if(Entry == "Asleep"){Entrys = [" continues to sleep."," continues to sleep."," continues to sleep."," continues to sleep."," continues to sleep."," continues to sleep."," is to tired to move.","'s snoring is louder than the fight!"," doesn't look like she's waking up yet."," rolls over to her other side, drool is running down her face."," toots in her sleep, how embarrassing!"," is cuddling a pillow! Where the heck did she find that!"," mumbles in her sleep."," is pouting in her sleep, she looks too cute!"," sleeps with her tongue sticking out."]}
	else if(Entry == "HostileDesc"){Entrys = ["angry","angry","angry","angry", "pissed off","hostile","grumpy","fierce","scary","terrifying","reasonably upset","outraged"]}
	else if(Entry == "River"){Entrys = ["Rushing River","Slow River","Shallow River","Deep River","Meandering River","Murky River","Bubbling River"]}
	else if(Entry == "Cliff"){Entrys = ["Steep Cliff","Muddy Cliff","Towering Cliff","Jagged Cliff"]}
	else if(Entry == "Cliffhit"){Entrys = ["Fuck climbing!","I'm afraid of heights!","It's too steep for me!","That cliff is too tall!","I should go another way!"]}
	else if(Entry == "Forest"){Entrys = ["Misty Forest", "Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Peaceful Forest","Quiet Forest","Pleasant Forest","Sunny Forest"]}
	else if(Entry == "ForestWolf"){Entrys = ["Logged Forest","Logged Forest","Logged Forest","Logged Forest","Misty Forest", "Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Peaceful Forest","Quiet Forest","Pleasant Forest","Sunny Forest"]}
	else if(Entry == "Plains"){Entrys = ["Grassy Plains","Grassy Plains","Peaceful Plains","Muddy Plains","Pleasant Plains","Hilly Plains"]}
	else if(Entry == "Cave"){Entrys = ["Cold Cave","Chilly Cave","Muddy Cave","Dirty Cave","Narrow Cave","Grimy Cave","Grubby Cave","Warm Cave","Misty Cave","Jagged Cave","Crumbling Cave","Overgrown Cave","Cozy Cave","Eroded Cave","Quiet Cave","Twisting Cave","Echoing Cave","Mossy Cave","Stuffy Cave","Creepy Cave ","Spooky Cave","Gloomy Cave"]}

	else if(Entry == "TrailMain"){Entrys = ["Dirt Trail","Dirt Trail","Muddy Trail","Rocky Trail","Worn Trail","Dusty Trail","Narrow Trail","Wide Trail","Faded Trail","Rutted Trail","Overgrown Trail"]}
	else if(Entry == "TrailExtra"){Entrys = ["Eroded Trail","Muddy Trail","Steep Trail"]}
	else if(Entry == "Trail"){Entrys = ["Dirt Trail","Dirt Trail","Dirt Trail","Dirt Trail","Muddy Trail","Rocky Trail","Worn Trail","Dusty Trail","Narrow Trail","Steep Trail","Faded Trail","Shabby Trail","Eroded Trail"]}
	else if(Entry == "RoadMain"){Entrys = ["Cobblestone Road","Cobblestone Road","Brick Road","Smooth Road","Fence-Lined Road","Crumbling Road","Muddy Road","Narrow Road","Wide Road"]}
	else if(Entry == "RoadExtra"){Entrys = ["Crumbling Road","Muddy Road","Steep Road"]}
	else if(Entry == "Road"){Entrys = ["Cobblestone Road","Cobblestone Road","Cobblestone Road","Cobblestone Road","Fencelined Road","Crumbling Road","Muddy Road","Narrow Road"]}
	
	else if(Entry == "BunnyForest"){Entrys = ["Sunny Forest","Sunny Forest","Sunny Forest","Sunny Forest","Sunny Forest","Sunny Forest","Bubbling Spring", "Shady Clearing", "Sunny Clearing","Flowery Clearing", "Cozy Burrow","Cozy Burrow",(choose(["Rundown ","Shabby ","Tidy ","Sturdy ","Log ","Brick ","Stone ","Old "])+choose(["Cottage","Cabin","Hut","House"])),(choose(["Giant ","Towering ","Massive ","Colossal ","Great "])+choose(["Oak","Pine","Maple","Cedar","Birch","Redwood","Apple-Tree"]))]}
	else if(Entry == "BunnyDesc"){Entrys = ["Perky Bunnygirl","Buck-toothed Bunnygirl","Green-Eyed Bunnygirl","Blue-Eyed Bunnygirl","Flat-Chested Bunnygirl","Stacked Bunnygirl","Busty Bunnygirl","Petite Bunnygirl","Long-Eared Bunnygirl","Short-Eared Bunnygirl","Droopy-Eared Bunnygirl","Short Bunnygirl","Speckled Bunnygirl","Pink Bunnygirl"]}
	//else if(Entry == "PositiveBunnygirl"){Entrys = ["Strong Bunnygirl","Cheerful Bunnygirl","Polite Bunnygirl"]}
	else if(Entry == "NegativeBunnygirl"){Entrys = ["Pudgy Bunnygirl","Sleepy Bunnygirl","Chubby Bunnygirl","Fat-Bottomed Bunnygirl","Thick Bunnygirl"]}
	else if(Entry == "FunnyBunnygirl"){Entrys = ["Fat-Bottomed Bunnygirl","Flat-Chested Bunnygirl","Droopy-Eared Bunnygirl","Buck-toothed Bunnygirl"]} 
	else if(Entry == "HungryBunnygirl"){Entrys = ["Pudgy Bunnygirl","Chubby Bunnygirl","Fat-Bottomed Bunnygirl","Curvy Bunnygirl","Thick Bunnygirl","Stacked Bunnygirl"]}
	
	else if(Entry == "MouseDesc"){Entrys = ["Perky Mousegirl","Curvy Mousegirl","Buck-toothed Mousegirl","Hairless Mousegirl","Flat-Chested Mousegirl","Petite Mousegirl","Big-Eared Mousegirl","Small-Eared Mousegirl","Short-Tailed Mousegirl","Speckled Mousegirl","Pale Mousegirl","Slim Mousegirl","Slender Mousegirl","Skittish Mousegirl","Fanged Mousegirl"]}
	else if(Entry == "NegativeMousegirl"){Entrys = ["Skittish Mousegirl","Timid Mousegirl","Nervous Mousegirl","Dirty Mousegirl"]}
	else if(Entry == "HungryMousegirl"){Entrys = ["Fat Mousegirl","Chubby Mousegirl","Fat-Bottomed Mousegirl","Curvy Mousegirl"]}
	
	else if(Entry == "CatForest"){Entrys = ["Blooming Forest","Blooming Forest","Blooming Forest","Blooming Forest","Blooming Forest","Blooming Forest","Flowery Clearing", "Treehouse", "Shady Clearing",(choose(["Giant ","Towering ","Massive ","Colossal ","Great "])+choose(["Oak","Pine","Maple","Cedar","Birch","Redwood","Apple-Tree"]))]}
	else if(Entry == "CatDesc"){Entrys = ["Green-Eyed Catgirl","Blue-Eyed Catgirl","Purple-Eyed Catgirl","Flat-Chested Catgirl","Stacked Catgirl","Busty Catgirl","Perky Catgirl","Long-Tailed Catgirl","Bushy-Tailed Catgirl","Fluffy-Eared Catgirl","Short Catgirl","Slender Catgirl","Curvy Catgirl","Blue Catgirl"]}
	else if(Entry == "NegativeCatgirl"){Entrys = ["Sleepy Catgirl","Flat-Chested Catgirl","Pouty Catgirl"]}
	else if(Entry == "SluttyCatgirl"){Entrys = ["Perky Catgirl","Busty Catgirl","Naughty Catgirl"]}
	else if(Entry == "HungryCatgirl"){Entrys = ["Sabre-Toothed Catgirl","Stacked Catgirl","Long-Fanged Catgirl"]}
	
	else if(Entry == "FoxForest"){Entrys = ["Lush Forest","Lush Forest","Lush Forest","Lush Forest","Lush Forest","Lush Forest", "Sunny Pond","Bubbling Spring","Treehouse",(choose(["Rundown ","Shabby ","Tidy ","Sturdy ","Log ","Brick ","Stone ","Old "])+choose(["Cottage","Cabin","Hut","House"])), "Shady Clearing",(choose(["Giant ","Towering ","Massive ","Colossal ","Great "])+choose(["Oak","Pine","Maple","Cedar","Birch","Redwood","Apple-Tree"]))]}
	else if(Entry == "FoxDesc"){Entrys = ["Silver-Eyed Foxgirl","Blue-Eyed Foxgirl","Gold-Eyed Foxgirl","Flat-Chested Foxgirl","Busty Foxgirl","Stacked Foxgirl","Perky Foxgirl","White-Tailed Foxgirl","White-Eared Foxgirl","Black-Eared Foxgirl","Long-Eared Foxgirl","Short Foxgirl","Voluptuous Foxgirl","Curvy Foxgirl","Silver Foxgirl"]}
	else if(Entry == "HungryFoxgirl"){Entrys = ["Stacked Foxgirl","Chubby Foxgirl","Long-Fanged Foxgirl","Voluptuous Foxgirl","Curvy Foxgirl"]}
	else if(Entry == "PositiveFoxgirl"){Entrys = ["Alpha Foxgirl","Long-Fanged Foxgirl"]}
	
	else if(Entry == "WolfForest"){Entrys = ["Misty Forest", "Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Quiet Forest", "Sunny Pond","Bubbling Spring","Shady Clearing",(choose(["Rundown ","Shabby ","Tidy ","Sturdy ","Log ","Brick ","Stone ","Old "])+choose(["Cottage","Cabin","Hut","House"]))]}
	else if(Entry == "WolfDesc"){Entrys = ["Red-Eyed Wolfgirl","Grey-Eyed Wolfgirl","Black-Eyed Wolfgirl","Flat-Chested Wolfgirl","Busty Wolfgirl","Stacked Wolfgirl","Perky Wolfgirl","Black-Tailed Wolfgirl","White-Eared Wolfgirl","Black-Eared Wolfgirl","Long-Fanged Wolfgirl","Muscular Wolfgirl","Tough Wolfgirl","Stern Wolfgirl","Curvy Wolfgirl","Pitch-Black Wolfgirl","Tall Wolfgirl","Buff Wolfgirl"]}
	else if(Entry == "PositiveWolfgirl"){Entrys = ["Alpha Wolfgirl"]}
	
	else if(Entry == "FrogForest"){Entrys = ["Muddy Forest","Muddy Forest","Muddy Forest", "Murky Pond", "Sunny Pond", "Bubbling Spring", "Shady Clearing"]}
	else if(Entry == "FrogDesc"){Entrys = ["Orange-Eyed Froggirl","Blue-Eyed Froggirl","Purple-Eyed Froggirl","Flat-Chested Froggirl","Perky Froggirl","Pale Froggirl", "Glistening Froggirl", "Slick Froggirl","Slimy Froggirl","Spotted Froggirl","Striped Froggirl","Slim Froggirl","Slender Froggirl","Petite Froggirl","Short Froggirl","Fat-Bottomed Froggirl", "Chubby Froggirl","Purple Froggirl"]}
	else if(Entry == "HungryFroggirl"){Entrys = ["Plump Froggirl","Fat-Bottomed Froggirl","Curvy Froggirl","Thick Froggirl","Stacked Froggirl"]}
	
	else if(Entry == "BatForest"){Entrys = ["Gloomy Forest","Gloomy Forest","Gloomy Forest","Gloomy Forest","Gloomy Forest","Gloomy Forest", "Shady Clearing"]}
	else if(Entry == "BatDesc"){Entrys = ["Green-Eyed Batgirl","Blue-Eyed Batgirl","Purple-Eyed Batgirl","Flat-Chested Batgirl","Busty Batgirl","Perky Batgirl","Swift Batgirl","Agile Batgirl","Fluffy-Eared Batgirl","Fuzzy Batgirl","Slender Batgirl","Curvy Batgirl","Pale Batgirl"]}
	//else if(Entry == "FunnyBatgirl"){Entrys = ["Snarky Batgirl","Cruel Batgirl","Sneaky Batgirl","Clever Batgirl"]}
	else if(Entry == "SluttyBatgirl"){Entrys = ["Perky Batgirl","Busty Batgirl"]}
	else if(Entry == "HungryBatgirl"){Entrys = ["Long-Fanged Batgirl"]}
	else if(Entry == "PositiveBatgirl"){Entrys = ["Long-Fanged Batgirl"]}
	
	else if(Entry == "SlimeDesc"){Entrys = ["Red Slimegirl","Blue Slimegirl","Yellow Slimegirl","Green Slimegirl","Purple Slimegirl","Orange Slimegirl"]}
	
	
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
	
	
	if(Entrys.length == 0){Entrys = ["No Entry Found"]}
	return Entrys[Math.floor(Math.random()*Entrys.length)];
}
//###########################################################################################################################################################################
//###########################################################################################################################################################################
//###########################################################################################################################################################################
function randomAction(s){//randomAction:[action,dom,sub,offence,defence,terrain]
	var Entrys = [];
	var Entry = ""
	
	var AnyUnit =	 FindPersonality("Any")
	var PositiveUnit =	 FindPersonality("Positive")
	var NegativeUnit =	 FindPersonality("Negative")
	var FunnyUnit =		 FindPersonality("Funny")
	var SluttyUnit =	 FindPersonality("Slutty")
	var HungryUnit =	 FindPersonality("Hungry")
	var WillingUnit =	 FindPersonality("Willing")
	var VanillaUnit =	 FindPersonality("Vanilla")
	
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
				if(unit(s[2]).Tags[0] == "Batgirl"){
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
			}else if(s[4] < 1){//Hurt
				Entrys.push("I swing my fist at SUB, giving her a bloody nose!")
				Entrys.push("I kick the SUB in the stomach, and she grimaces in pain!")
				Entrys.push("I headbutt SUB, forcing her to stumble back!")
				if(unit(s[2]).Tags[0] == "Batgirl" && unit(s[2]).flying){
					Entrys = []
					Entrys.push("I fling a rock up at SUB and it hits her"+choose([""," as she flies by"," wing", " forehead"," square in the chin", " right in the gut"])+". "+choose(["She winces in pain!", "She almost falls out of the air.", "she flaps frantically to stay airborne."]))
					if(Math.random()<.25 || AnyUnit != null){
						Entrys.push("I punch SUB"+ choose(["","",""," in the face"," 's gut"," right in her mouth"]) +choose([".","!"," as she swoops down to bite me!"," before she can bite me."," as she flies low to attack me."]))
					}else{
						Entrys.push("I punch SUB"+ choose(["","",""," in the face "," 's gut "," right in her mouth "]) +"as she swoops down to bite my "+AnyUnit.Name+"!")
					}
					
					Entrys.push(
						"I grab SUB"+
						choose(["",""," as she swoops down"," when she flies by"," when she's right above me"," as she glides too low"])+
						choose([", and pull her into an overly-tight embrace",", and wrap my arms around her middle",". I wrap one arm around her chest and another around her neck",". I squish her wings tightly against her body with both of my arms"])+
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
				Entrys.push("I kick the SUB, she falls down in defeat!")
				Entrys.push("I headbutt SUB, she stumbles back before falling over in defeat!")
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
				}
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on my shoulder. She doesn't let go until I hit her nose!")
					Entrys.push("I lose track of DOM until I feel her elbow strike between my shoulder blades, knocking the breath out of me!")
					Entrys.push("CDOM leaps into the air and knees me in the face! I barely manage to keep standing.")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(
						choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
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
				}
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on my shoulder, she doesn't let go until I fall to my knees in pain!")
					Entrys.push("I lose track of DOM until I feel her elbow strike between my shoulder blades, knocking me to my knees!")
					Entrys.push("CDOM leaps into the air and knees me in the face! My head spins while I see little stars everywhere I look!")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(
						choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
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
				Entrys.push("CDOM attacks me. I hold back tears from the pain!");
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
		// DIFF HOSTILE
			if(s[3] == 0){
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
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on SUB's shoulder!")
					Entrys.push("CDOM bites down on SUB's shoulder, she doesn't let go until hit on the nose!")
					Entrys.push("CDOM sneaks behind SUB and slams her elbow between SUB's shoulder blades!")
					Entrys.push("CDOM leaps into the air and knees SUB in the face!")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(
						choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
						"tongue "+choose(["flings","shoots","slings","launches","darts"])+
						choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
						choose([" hitting"," striking"," whalloping"," to smash into"," slamming into"])+
						choose([" her"," her shoulder"," her chest"," her gut"])+
						choose(["!","!","!","!"," like a fist!",", leaving a bruise!",". She almost falls over from the pain!",". A welt starts to form where she was hit."])
					)
				}
				if(unit(s[1]).Tags[0] == "Froggirl" && unit(s[1]).Size >= unit(s[2]).Size){
					if(unit(s[1]).Hungry){
						Entrys.push(
							choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
							"tongue "+choose(["flings","shoots","slings","launches","darts"])+
							choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
							choose([", wrapping around her neck!"," to wrap around her neck.",". It "+choose(["","","","","quickly ","suddenly ","easily ","skillfully ","nimbly ","swiftly ","forcefully "])+"wraps around her neck"+choose([".",".",".",". A cruel tug pulls her to the ground."," and yanks her to the ground."," to pull her to the ground."])])+
							choose([" CSUB's eyes bulge as she struggles against the constricting tongue"," CSUB starts turning blue"," CSUB gags"," CDOM laughs at SUB. She struggles her hardest","CSUB squirms on the ground"," CDOM drags SUB closer as she struggles"])+
							choose([" before she can break away"," until she can slip out",", desperate for air. She barely manages to get free",". It takes a long moment until she can get free"])+
							choose([".",".",".",". CDOM laughs at SUB as she tries to catch her breath."," of the fleshy noose."," from DOM's fleshy grip."," and rub her sore neck from a safe distance."," and catch her breath."])
						)
					}
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB is almost pulled to the ground before breaking free!")		
				}
				if(unit(s[1]).Tags[0] == "Batgirl" && unit(s[1]).flying){
					Entrys.push("CDOM lets go of a rock while flying above, it crashes into SUB's shoulder!") 
					Entrys.push("CDOM swoops down and attacks SUB before slipping out of reach again!")
					Entrys.push("CDOM flies by and kicks SUB!")
					if(unit(s[2]).Tags[0] == "Batgirl" && unit(s[2]).flying){
						Entrys.push(choose(["CDOM outflies the other batgirl and soon has her by the neck","CDOM swoops up at SUB from below, latching onto her throat!","CDOM intercepts SUB and bites into her neck."])+choose([" CSUB barely manages to escape DOM's attack!","CSUB does a barrel roll to fling the other girl off of her.","CSUB pushes the other girl away before its too late, and gets some distance from her attacker."]))
					}
				}
				if(unit(s[1]).Tags[0] == "Mousegirl"){
					Entrys.push("CDOM chomps down onto SUB's ankle!")
				}
				//PREY
				if(unit(s[2]).Tags[0] == "Batgirl" && unit(s[2]).flying && unit(s[1]).Tags[0] != "Batgirl"&& unit(s[1]).Tags[0] != "Froggirl"){
					Entrys.push("CDOM flings a rock up at SUB and hits her"+choose([""," as she flies by"," wing", " forehead"," square in the chin", " right in the gut"])+". "+choose(["She winces in pain!", "She almost falls out of the air.", "she flaps frantically to stay airborne."]))
				}
				if(Entrys.length == 0 || Math.random()<.01){
				Entrys.push("CDOM attacks SUB!")
				}
				//RESET ENTRYS TO THE BOTTOM IF STANDARD ONES WONT WORK
				//Entrys = [asdf]
			}else if(s[4] < 1){//Hurt
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM smashes SUB's head into the table, a bloody spot is left behind!")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM's claws slash out, leaving bloody streaks across SUB's stomach!")
					Entrys.push("CDOM reveals her fangs before biting SUB's shoulder. She leaves a nasty wound behind!")		
				}
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on SUB's shoulder, she doesn't let go until the girl drops to her knees in pain!")
					Entrys.push("CDOM sneaks behind SUB and slams her elbow between SUB's shoulder blades, knocking her to the ground!")
					Entrys.push("CDOM leaps into the air and knees SUB in the face! She stumbles around with a blank expression until regaining her composure.")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(
						choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
						"tongue "+choose(["flings","shoots","slings","launches","darts"])+
						choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
						choose([" hitting"," striking"," whalloping"," to smash into"," slamming into"])+
						choose([" her face"," her head"," her nose"])+
						choose([". She stumbles to keep her balance!","! She looks dazed from the blow.","! Blood makes a trail down SUB's face.",", knocking her to the ground! She struggles to stand while recovering from the blow."])
					)
				}
				if(unit(s[1]).Tags[0] == "Froggirl" && unit(s[1]).Size >= unit(s[2]).Size){
					if(unit(s[1]).Hungry){
						Entrys.push(
							choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
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
					if(unit(s[2]).Tags[0] == "Batgirl" && unit(s[2]).flying){
						Entrys.push(choose(["CDOM outflies the other batgirl and soon has her by the neck","CDOM swoops up at SUB from below, latching onto her throat!","CDOM intercepts SUB and bites into her neck."])+choose([" CSUB barely manages to escape DOM's attack!","CSUB does a barrel roll to fling the other girl off of her.","CSUB pushes the other girl away before its too late, and gets some distance from her attacker."]))
					}
				}
				if(unit(s[1]).Tags[0] == "Mousegirl"){
					Entrys.push("CDOM chomps down onto SUB's ankle, leaving a bloody wound behind!")
				}
				//PREY
				if(unit(s[2]).Tags[0] == "Batgirl" && unit(s[2]).flying && unit(s[1]).Tags[0] != "Batgirl"&& unit(s[1]).Tags[0] != "Froggirl"){
					Entrys = []
					Entrys.push("CDOM punches SUB"+ choose(["","",""," in the face"," 's gut"," right in her mouth"]) +choose([".","!"," as she swoops down to bite her."," as she glides by to attack!"," as she flies low for an attack!"]))
					Entrys.push("CDOM flings a rock up at SUB and hits her"+choose([""," as she flies by"," wing", " forehead"," square in the chin", " right in the gut"])+". "+choose(["She winces in pain!", "She almost falls out of the air.", "she flaps frantically to stay airborne."]))
					if(unit(s[1]).Tags[0] == "Foxgirl" || unit(s[1]).Tags[0] == "Catgirl" || unit(s[1]).Tags[0] == "Wolfgirl" || unit(s[1]).Tags[0] == "Bunnygirl"){
						Entrys.push(
							"CDOM grabs SUB"+
							choose(["",""," as she swoops down"," when she flies by"," when she's right above her"," as she glides too low"])+
							choose([
								choose([", and pull her into a chokehold",", and wraps her arms around the bat",". CDOM wraps one arm around her chest and another around her neck",". CDOM squishes the bats wings tightly together"])+
								choose([", taking the wind out of SUB's lungs. ",", making SUB's back loudly pop. ",", SUB's eyes bulge from the pressure. ",". SUB struggles to breath when shes squeezed harder. "," SUB's face slowly turns blue. ",". CDOM's tongue explores the bat's flavor as she continues to squeeze tighter and tighter. ",". CDOM nibbles on SUB's neck while continuing to squeeze."])+
								choose(["CSUB kicks wildly, and barely slips away from her captor, flapping frantically to get airborne.","CSUB bites down on her captors hand, and leaps into the air when DOM's grip loosens."," CSUB eventually frees herself and gets back into the air."])
								,
								choose([". CSUB tries to bite her captor but, DOM bites first into the bats shoulder. She shoves SUB away and watches her struggle to get airborne.",". CSUB tries to bite her captor but, DOM spins her around and bites down hard on her shoulder! CSUB winces in pain before freeing herself and leaping back into the air.",", and starts to pummel her before the bat gets airborne again.",", and slams the bat into the ground! CSUB quickly gets up and leaps back into the air."])
							])
						)
					}
				}
				if(Entrys.length == 0 || Math.random()<.01){
				Entrys.push("CDOM attacks SUB!")
				}
			}else{//Dead
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM smashes SUB's head into the table, she doesn't get back up!")
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
							choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
							"tongue "+choose(["flings","shoots","slings","launches","darts"])+
							choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"])+
							choose([", wrapping around her neck!"," to wrap around her neck.",". It "+choose(["","","","","quickly ","suddenly ","easily ","skillfully ","nimbly ","swiftly ","forcefully "])+"wraps around her neck"+choose([".",".",".",". A cruel tug pulls her to the ground."," and yanks her to the ground."," to pull her to the ground."])])+
							choose([" CSUB's eyes bulge as she struggles against the constricting tongue"," CSUB starts turning blue"," CSUB gags"," CDOM laughs at SUB. She struggles her hardest","CSUB squirms on the ground"," CDOM drags SUB closer as she struggles"])+
							choose([", but soon she stops moving and goes limp.",". A quick tug later and SUB lies lifeless on the ground."," until she's lifeless on the ground."," until trying one final time to escape before running out of air."," before her face turns completely blue. CDOM's tongue flys back from the dead girl with a slurp."])
							
						)
					}
					Entrys.push(
					choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
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
				if(unit(s[1]).Tags[0] == "Mousegirl"){
					Entrys.push("CDOM chomps down onto SUB's ankle, She falls down defeated!")
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
	if(s[0]==1){//FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT
		if(s[1]==0 && s[2] < 100 && !map[party.y][party.x].hostile){
		// HERO GOOD PEACE
			Entrys.push("I pat SUB's head, she looks comforted by my touch.")
			Entrys.push("I give SUB's cute butt a squeeze. Her face is so cute when she's embarrassed.")
			Entrys.push("I sneak up behind SUB and cup her breasts. Her face is so cute when she's embarrassed.")
			if(s[4] > .50){
				Entrys.push("I use two fingers to rub SUB's bean, she moans as she grinds against my hand!")
				Entrys.push("I sneak up behind SUB, and give both nipples a squeeze, she pushes against me as she gasps for air!")
			}
		}else if(s[1]==0 && s[2] < 100 && map[party.y][party.x].hostile){
		// HERO GOOD HOSTILE
			Entrys.push("I pat SUB's head, she looks less nervous about the fight.")
			Entrys.push("I give SUB's cute butt a squeeze.  She wiggles out of my grasp, telling me to stay focused on the fight!")
			Entrys.push("I sneak up behind SUB and cup her breasts. She wiggles out of my touch, telling me to stay focused on the fight!")
		}else if(s[1]==0 && s[2] >=99 && !map[party.y][party.x].hostile){
		// HERO FOOD PEACE
			if(s[4] < .75){//DRY
				if(s[5]=="Forest"){
				Entrys.push("I put a flower behind SUB's ear, and she giggles from the ticklish stem.")
				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					Entrys.push("I see SUB trying to grab a plump mushroom growing on the cave wall. I pluck it from the stone and hand it to her, she nibbles on it contently.")
					Entrys.push("I stoop down and watch SUB nibble on a purple mushroom. We both blush when she realizes I'm staring at her.")
					Entrys.push("CSUB looks up at me and says she wishes she was my height. I tell her she's cute at her current height, but she only pouts at my statement.")
					Entrys.push("I see SUB struggling to move some heavy rocks. She's thankful when I offer to help. When I'm done, a crack is revealed in the stone wall thats perfect for SUB to hide in.")
					if(unit(s[2]).willing){
						Entrys.push("I ask SUB why such a cute little girl lives in a cave, she tells me she wants to digest in a slimegirl someday!")
					}else{
						if(party.units.length > 3 && unit(1).Tags[0] != "Mousegirl" && unit(2).Tags[0] != "Mousegirl"){
							Entrys.push("I see SUB looking at the other girls nervously. I tell her she doesn't have to worry, and that I won't let them eat her.")	
						}
						Entrys.push("I ask SUB if she wants to leave the cave, she tells me its too dangerous alone for a mouse in the wild. I tell her she could come with me if she wanted, and she thanks me for the offer.")
						Entrys.push("I tell SUB she must be brave to live in this dark cave. She blushes and says she doesn't think shes very brave.")
						Entrys.push("I ask SUB why such a cute little girl lives in a cave, she tells me its safer from predators to hide in the dark.")
					}
				}
				Entrys.push("I wave at SUB, and she waves back with a smile.")
				Entrys.push("I blow SUB a kiss, she smiles at the gesture.")
				
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
				if(s[5]=="Forest"){
					Entrys.push("I put a flower behind SUB's ear. she twirls and asks if it looks good on her.")
				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					Entrys.push("I notice SUB is peeking at my cock, I ask if she thinks it will fit. She says she'd be willing to try!")
					Entrys.push("I use a single finger to rub SUB's bean, she moans as her tiny body hugs my arm!")
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
					}
					
				}
			}
		}else if(s[1]==0 && s[2] >=99 && map[party.y][party.x].hostile){
		// HERO FOOD HOSTILE
			if(s[4] < .75){//DRY
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
				if(unit(s[2]).Slutty){
					Entrys.push("I blow SUB a kiss. She almost blows one back before remembering this is a fight.")
					Entrys.push("I wave at SUB, and she waves back before remembering this is a fight.")
				}
				Entrys.push("I blow SUB a kiss, and she's bewildered by the gesture. She still seems eager to fight, though.")
				
				Entrys.push("I playfully spank SUB's behind and leap out of her reach.")
				Entrys.push("Instead of fighting SUB, I keep my distance, telling her how cute she looks.")
				Entrys.push("While avoiding her attacks, I tell SUB how adorable her face is when she's fighting.")
				if(unit(s[2]).Tags[0] == "Batgirl"){
					Entrys = ["I blow SUB a kiss, she's bewildered by the gesture.","I tell SUB how adorable her face is when she's flying.","I wave at SUB, and tell her how cute she looks from below."]
				}
			}else{//WET
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("I push SUB until her back is against the wall, she braces for my fist, but instead feels my lips against hers.")
					Entrys.push("I press SUB against the table, and grind against her before letting go.")
				}
				if(unit(s[2]).Tags[0] == "Catgirl"){
					Entrys.push("I call SUB a naughty kitty. She bites her lip, looking flustered.")
					Entrys.push("I spin SUB around and with both hands I massage her furry ears. Her body goes slack against mine until she remembers she was fighting me!")
				}
				if(unit(s[2]).Tags[0] == "Foxgirl"){
					Entrys.push("I give SUB's tail a playful tug. Her gaze is less focused and her legs are wobbly!")
				}
				if(unit(s[2]).Tags[0] == "Froggirl"){
				
				}
				if(unit(s[2]).Slutty){
					Entrys.push("I give SUB's cute butt a squeeze. She moans before slapping my hand away.")
					Entrys.push("Instead of fighting SUB, I keep my distance, telling her all the naughty things I want to do to her. She's soaked between her legs!")
				}
				Entrys.push("I embrace SUB, and whisper sweet-nothings into her ear. She hesitates for a moment before suddenly pushing me away.")
				Entrys.push("I playfully spank SUB's behind and slip out of her reach. She rubs where my hand left its mark, her face flushed.")
				Entrys.push("Instead of fighting SUB, I keep my distance, telling her all the naughty things I want to do to her. She tries to look focused, but she's starting to breathe heavily!")
				Entrys.push("While avoiding her attacks, I ask SUB if she's this passionate in bed.")
					
				if(unit(s[2]).Tags[0] == "Batgirl"){
					Entrys = ["I blow SUB a kiss, and she blows one back!","I tell SUB how sexy she looks when she's flying.","I tell SUB all the naughty things I want to do to her when she lands."]
				}
			}
		}else
		//------------------------------------------------------------------------------------------
		if(s[1] < 100 && s[2] == 0 && map[party.y][party.x].hostile){
		// GOOD HERO PEACE
			Entrys.push("CDOM tells me I have a cute butt, I don't know if shes just joking or not.")
		}else if(s[1] < 100 && s[2] == 0 && !map[party.y][party.x].hostile){
		// GOOD HERO HOSTILE
			Entrys.push("CDOM tells me I look very manly fighting, but I doubt she's being serious.")
		}else if(s[1] >=99 && s[2] == 0 && map[party.y][party.x].hostile){
		// FOOD HERO PEACE
			Entrys.push("CDOM tells me I have a cute butt, I don't know if shes just joking or not.")
		}else if(s[1] >=99 && s[2] == 0 && !map[party.y][party.x].hostile){
		// FOOD HERO HOSTILE
			Entrys.push("CDOM tells me I look sexy in a fight, but I doubt she's being serious.")
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
			if(s[4] < .75){//DRY
				if(unit(s[2]).Tags[0] == "Mousegirl" && unit(s[2]).Size > 1){
					Entrys.push("CDOM picks up SUB and gives her a big hug. CSUB breaks free and hides behind a stalagmite. She says she doesn't like being picked up.")
					Entrys.push("CDOM wonders aloud if SUB would fit inside her pussy. CSUB blushes and hides behind a stalagmite. She says she doesn't want to find out.")
					Entrys.push("CDOM picks up a tiny phallic mushroom lying on a blanket and asks if DOM ever uses the fungus growing here to pleasure herself. CSUB tells DOM she does nothing of the sort while taking back the mushroom and hiding it under the blanket.")
				}
				Entrys.push("CDOM starts rubbing SUB's shoulders and whispering into her ear, I wonder what she's saying")  
			}else{//WET
				if(unit(s[2]).Tags[0] == "Mousegirl" && unit(s[2]).Size > 1){
					Entrys.push("CDOM picks up SUB and gives her a big kiss. CSUB tries kissing back, but her face is completely covered by DOM's lips.")
					Entrys.push("CDOM wonders aloud if SUB would fit inside her pussy. CSUB blushes and says she'd be willing to try!")
					Entrys.push("CDOM picks up a tiny phallic mushroom lying on a blanket and asks if DOM ever uses the fungus growing here to pleasure herself. CSUB tells DOM she does nothing of the sort while taking back the mushroom and hiding it under the blanket.")
				}
				Entrys.push("CDOM starts rubbing SUB's shoulders and whispering into her ear. SUB is clearly getting turned on by whatever she's hearing.")  
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		// DIFF HOSTILE
			if(s[4] < .75){//DRY
				Entrys.push("CDOM gives SUB a hug before being pushed away.")
				Entrys.push("CDOM gives SUB's breast a squeeze before being pushed away.")
				Entrys.push("CDOM kisses SUB before being pushed away.")
					
				if(unit(s[2]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM blows SUB a kiss, she's bewildered by the gesture.","CDOM tells SUB how adorable her face is when she's flying.","CDOM waves at SUB, and tells her how cute she looks."]
				}
			}else{//WET 
				Entrys.push("CSUB screams out as DOM pinches down hard on both of her exposed nipples! CDOM asks if SUB is going to be a good girl, and releases the sore nips when SUB whimpers that she will!")
				Entrys.push("CDOM grabs SUB's head and pulls her into a passionate kiss. CSUB struggles to escape, but her eyes are rolled back. All fighting stops as the two make out. Eventually DOM breaks the kiss and steps back.")
				Entrys.push("CDOM slips her hand between SUB's legs, she moans before weakly shoving DOM away.")
					
				if(unit(s[2]).Tags[0] == "Batgirl"){
					Entrys = ["CSUB pumps her hips at SUB, she's flustered by the gesture.","CSUB tells SUB how sexy her muscles looks when she's flying.","CDOM tells SUB all the naughty things she plans to do to her when she lands.","CSUB says she saw SUB's lust dripping when she flew by, SUB snaps her legs together, blushing in embarrassment!"]
				}
			}
		}
	}
//###########################################################################################################################################################################
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
				if(unit(s[2]).Tags[0] == "Bunnygirl" || unit(s[2]).Tags[0] == "Catgirl" || unit(s[2]).Tags[0] == "Foxgirl"){
					Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose before finishing her descent. I feel my belly jiggle as she cums!")	
				}
				Entrys.push("I grab SUB by the waist, and swallow her down!")
				Entrys.push("I ask SUB to close her eyes. She does so and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She giggles as my tongue plays with her breasts, and says it's about time I ate her! She fingers herself as I finish swallowing her down!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I get on my knees and tell SUB I need to have her. She approaches and starts licking the tip of my cock. She looks up at me and says its hungry. She sticks her hand into the tip and looks surprised how easy it fit. She blows me a kiss goodbye before sticking her other hand in and pushing herself deeper. She keeps pushing further until her behind reaches the tip. I start stroking myself and the rest of SUB is slowly pulled in. I feel her masturbate inside my sack and orgasm one last time before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["While I lie down, SUB walks over and straddles my face with her tail tickling my nose. I start eating her out and watch her shudder as my tongue teases her clit. When she cums, I gulp down her rear. She looks surprised but turned on even more! CSUB plays with her breasts as I gobble the rest of her down. She cums again just before her head and legs are swallowed and she slides into my belly!"]
					}
				}
			}else{//RELUCTANT
			
				Entrys.push("I ask SUB to close her eyes. She does so and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise as she stops being my lover and becomes my nutrition. Trembling, she asks if I wouldn't rather fuck her instead, but I keep gulping down to her waist. When I start swallowing her hips, she begs me to enjoy her properly at least! My tongue finds her slit and starts getting her off as her rump hangs out of my mouth. I give SUB one last orgasm before fully taking her down!")
				Entrys.push("I grab SUB by the waist, and swallow her down!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I get on my knees and tell SUB I need to have her. She approaches and starts licking the tip of my cock. She looks surprised when it almost pulls her in. I ask her to continue and she does nervously, this time shes slurped past her shoulders. She starts to struggle until I begin rubbing her slit. With my other hand I start stroking myself and SUB is slowly pulled in further. My progress is stopped by her wide rear end. I keep fingering her while her legs flail around. As SUB orgasms, I push her butt into my large member, and she slides the rest of the way in. I feel her curl up into a ball before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["While I lie down, SUB walks over and straddles my face with her tail tickling my nose. I start eating her out and watch her shudder as my tongue teases her clit. When she cums, I gulp down her rear. She looks surprised and tries to pull herself out as I swallow her deeper. She gives up when my tongue starts teasing her breasts. She cums again just before her head and legs are swallowed and she slides into my belly!"]
					}
				}
			}

		}else if(s[1]==0 && s[2] < 100 && map[party.y][party.x].hostile){
		// HERO GOOD HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("She's  too big for me to eat now, I need to find a way to increase my appetite...")
			}else if(s[4] == 1){//ASLEEP
				Entrys.push("I grab SUB while she's still sleeping, and swallow her down!")
			}else if(!unit(s[2]).willing){//UNWILLING
				Entrys.push("I grab SUB by the waist, and swallow her down! She definitely wasn't expecting that to happen during the fight!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and shove her headfirst into my cock. She asks me to pull her out, but doesn't struggle. I feel her curl up into a ball before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["I grab SUB with one hand and shove her headfirst into my mouth. She asks me to let her out, but doesn't struggle. I feel her curl up into a ball before digesting."]
					}
				}
			}else if(unit(s[2]).willing){//WILLING
				Entrys.push("I grab SUB by the waist, and swallow her down! She tries to say a last second goodbye, but I'm in a rush!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and shove her headfirst into my cock. She immediately starts to finger herself, knowing she doesn't have much time. I feel her orgasm just before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["I grab SUB with one hand and shove her headfirst into my mouth. She immediately starts to finger herself, knowing she doesn't have much time. I feel her orgasm just before digesting!"]
					}
				}
			}
		}else if(s[1]==0 && s[2] >=99 && !map[party.y][party.x].hostile){
		// HERO FOOD PEACE
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
					choose(["grab SUB,","grab SUB,","grab SUB,","grab SUB,","reach out to grab hold of SUB,","walk up to SUB. She asks if I need anything. I nod as I grab her by the waist with both hands,","grab hold of SUB,","lift SUB into the air over my hungry maw,","lift SUB above my hungry maw,"])+
					choose([" and"," and",choose([" and hastily"," and before she realizes whats happening, I"," and as she struggles in surprise, I"," and before she can struggle, I"," and before she has time to react, I"," and as she slaps at me, I"," and as she struggles in my grip, I"," and as she begs for me to stop, I"," and she screams in shock as I"," and her eyes grow wide as I"," and she begs for mercy as I"," and she asks me to let her go as I"," she says she can find something else for me to eat while she tries to escape. I tell her I'm not interested before I"," and she shuts her eyes when I"])])+
					choose([" swallow her."," swallow her down."," swallow her down."," gaze at her sexy body one last time before swallowing it down."," get one last look at her cute face before it, and the rest of her, slide down my throat."," get one last eyeful of her cute form before swallowing it down."," give her beautiful body one last look before swallowing it down."," swallow her down without even taking the time to get a proper taste."," gulp her down!"," start swallowing her down. I savor her unique flavor until the last of her slides down my throat."," start swallowing her down. My tongue explores the SUBRACELONG's body as I devour her whole."," gobble her down."," take several large gulps until she's completely inside me."," get her into my mouth. A few big swallows take her entirely down my throat."," give her a kiss on the cheek before swallowing her down."])+
					choose(["",
						choose([" I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle "," Her struggling almost takes me off balance as she tries one last time to escape"," I feel her struggle inside me for a while"," I feel her thrash around inside me"," She thrashes about for a while"," I feel her weakly pound against my stomach walls"," She makes muffled cries for help"," She begs for me to let her out"," She pushes hard against the sides of my stomach"," I feel her spin to get her head above my digestive juices and struggle to breath the putrid fumes"," Her fists pound against my belly"," Her hands make impressions against my belly"])+
						choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until my stomach acids melt her down."," until I start churning her into mush."," until I burp out the last of her air."])
						//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
					])
				)
						if(map[party.y][party.x].units.length == 2 && s[2]==100){
							Entrys.push("I gulp down SUB's head and shoulders! The "+String(map[party.y][party.x].units[1].Name).toLowerCase()+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The "+String(map[party.y][party.x].units[1].Name).toLowerCase()+" says she's not going down without a fight!")
						}else if(map[party.y][party.x].units.length == 2){
							Entrys.push("I gulp down SUB's head and shoulders! The "+String(map[party.y][party.x].units[0].Name).toLowerCase()+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The "+String(map[party.y][party.x].units[0].Name).toLowerCase()+" says she's not going down without a fight!")
						}else if(map[party.y][party.x].units.length > 2){//Larger group
							Entrys.push("I gulp down SUB's head and shoulders! The other girls look in horror as I keep swallowing until she's gone. I look at the remaining girl and lick my lips! They all look ready for a fight!")
						}
			
					if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && unit(s[2]).CPle > 0){
					
						if(unit(s[2]).Positive){
							Entrys.push("As SUB scrubs the floor I get on all fours behind her and start licking her butt. She giggles and tells me I won't have room for dinner if I eat her. When I swallow down her rump she realizes shes really getting eaten! She frantically tries to pull herself as I keep swallowing her down. I start licking her breasts and she nervously tells me its impolite to play with my food. She grabs at the smooth floor as I gobble the rest of her down.")
						}else if(unit(s[2]).Funny){
							Entrys.push("I ask SUB if I can try using her paints. She's excited to see someone else interested in art and sets up a fresh canvas for me. I ask her to lay on the bed so I can draw her. She almost refuses but ultimately strikes a sexy pose on her bed. I paint for a half hour before showing her my work. Its a rough outline of her inside my belly. She looks worried and asks why I chose to draw her like that. I walk up slowly and grab her hands as she fumbles with her words. I gulp them down and lift her over my head, she slides in until her behind and legs are all thats left of her. she says she'll show me how to paint propery if I let her out. I let her slide the rest of the way down, and tell her I'm fine being a bad artist.")
						}else if(unit(s[2]).Slutty){
							Entrys.push("CSUB and I almost finish a bottle of wine and start making out. She struggles when I drunkenly try eating her. We both are too tipsy to keep our balance and we fall to the floor. As she crawls under the table I grab her legs and swallow them down. When shes half inside of me she asks for the rest of the wine as a last request. I sit up at the side of the table and she grabs the bottle from the edge where we left it. She chugs it all and I continue swallowing her down. She hands me the bottle as her arms are forces up and slides the rest of the way in.")
						}else if(unit(s[2]).Hungry){
							Entrys.push("I lift SUB onto the table and take two meaty handfulls of her large behind. She rests on her elbows and tells me to pound her. Instead I start licking her behind. She tells me theres still some pie left over if I'm still hungry. I tell her shes the only pie I want right now. She sighs as I eat her slowly to enjoy my tasty morsel. Her lifetime of munching out is rewarded by being the tastiest meal I've ever had!")
						}else if(unit(s[2]).Negative){
							Entrys.push("I give SUB a foot massage and lick her soles seductively. She sleepily tells me to to massage her legs next as she nods off. When she wakes up again, she realizes she's halfway swallowed. She struggles to escape for less than a minute before laying back down and soon starts snoring as I finish gobbling her down. I've never met someone so sleepy!")
						}
						Entrys.push("My stomach growls loudly. I ask SUB if theres any food left. She smiles nervously before trying to run away! I leap at her and grab her ankles as she's halfway out the door. She sighs and stops struggling as I start swallowing her feet. She doesn't say anything else as I continue swallowing and tasting her delicious body. She tucks her arms in as I get to her hips. After a few more moments, I finish gulping her down.")
						Entrys.push("My stomach growls loudly. I ask SUB if theres any food left. She smiles nervously before trying to run away! I leap at her and grab her ankles as she's halfway out the door. She sighs and stops struggling as I start swallowing her feet. She doesn't say anything else as I continue swallowing and tasting her delicious body. She tucks her arms in as I get to her hips. When I reach her nipples I find them hard as rocks, she may not want to be eaten, but her body is getting into it! I tease her breasts with my tongue until I feel her small body shudder halfway inside me, the quietest moan escapes her lips, and I finish gulping her down.")
					}else if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" ){
						Entrys.push("I call SUB a cute bunny snack. Her eyes grow wide, and she tries to make a run for it! I lunge at her and barely grip her ankles. As she struggles, I shove her feet into my mouth and start swallowing. She stops squirming, and just looks back at me upset. I swallow her quickly, but try to be gentle. She tucks her arms into my maw and soon she's in my belly.")
					} 
				if(unit(s[2]).CPle > 0 && Math.random()<.5){
					Entrys.push(
					choose(["I ask SUB to close her eyes. She does so and puckers her lips for a kiss.","I approach SUB, and she puckers her lips for a kiss."])+choose([" Instead I gulp down her head and shoulders."," Instead I gulp her down until my tongue reaches her bellybutton."])+choose([" She yelps in surprise at suddenly becoming food!"," She starts to kick her legs, trying to escape."])+choose([" She gives up as I swallow down the rest of her."," She begs for me not to eat her while I swallow down the rest of her."]))
				}else if(unit(s[2]).willing){
					Entrys.push(
						choose(["I ","I ","I ","I ","I ","Licking my lips, I decide its time to eat. I ","I swiftly ","I quickly ","I decide that the SUBRACE's time has come. I ",(choose(["My stomach growls loudly","My stomach makes a deep rumble","My empty stomach gurgles"])+choose([".",", demanding to be sated.",", begging to be fed!"," telling me its time to eat.",", desperate for a meal!",", hungry for the snack in front of me.",", eager for the feminine meal before me."])+choose([" I eagerly "," I casually "," I slowly "," I "," I "," I "])) ])+
						choose(["grab SUB","grab SUB","grab SUB","grab SUB","reach out to grab hold of SUB","walk up to SUB. She blushes as I grab her by the waist with both hands","grab hold of SUB","lift SUB into the air over my hungry maw","lift SUB above my hungry maw"])+
						choose([", and",choose([". Understanding the hopelessness of her situation, she gives me a nod, and I",", and she starts to cry as I",". She looks shocked, but doesn't struggle. I",", and she only asks that I make it quick. I",". She only sighs as I",". She only shrugs. I"," and grip her tight as she struggles for a moment. She gives up quickly, and I",
							choose([,", and she tries weakly to break free",". She tries twisting out of my grip",". She tries struggling in my arms"])+
							choose([" for a moment before relaxing. She smiles and shifts her body to be eaten easier. I thank her, and"," before suddenly stopping to instead ask if she can get a last request. When I nod, she only asks for a kiss goodbye. We lock lips, I feel her tongue slip past my teeth towards her final destination. When we break apart, she gives me a nod, and I ",", but gives up quickly. I",", but quickly realizes she doesn't have a chance. I"," at first. When she realizes she can't escape, she simply asks me to be gentle. I nod before I"])
						])	])+
						choose([" swallow her."," swallow her down."," swallow her in one gulp."," start swallowing her down. My teeth scrape against her "+DescWord(unit(s[2]),"belly_noun",10)+" as she slides down into my stomach."," start swallowing her down. My tongue slips between her "+DescWord(unit(s[2]),"butt",75)+"thighs"+choose([" as I get a final taste before gulping her down."," as she slowly starts to moan louder and louder. Once I've tasted enough, I gulp down the rest of her."])," taste her "+DescWord(unit(s[2]),"breasts",75)+"breasts as I swallow her down."," gaze at her sexy body one last time before swallowing it down."," get one last look at her cute face before swallowing her down."," get one last eyeful of her cute form before swallowing her down."," give her beautiful body one last look before swallowing her down."," swallow her down without even taking the time to get a proper taste."," gulp her down."," start swallowing her down. I savor her unique flavor until the last of her slides down my throat."," start swallowing her down. My tongue explores the SUBRACELONG's body as I devour her whole."," gobble her down."," take several large gulps until she's completely inside me."," get her into my mouth. A few big swallows take her entirely down my throat."])+
						choose(["","",
							choose([" She merely rests against a side of my belly"," Instead of struggling, she only chats with me"," She stays calm inside, hardly making a sound"," She's calm at first, but starts struggling when my acids begin breaking her down. She thrashes around desperately"," Surprisingly, she masturbates"," She asks how she tastes, and I tell her she was great. She says she's glad and keeps chatting"," I hear her softly moan and slosh around"," Her hands push outward gently. She rubs my stomach walls"])+
							choose([" until she digests."," until she digests."," until she digests."," before passing out."," before she fully digests."," before digesting away."," until my stomach acids melt her down."," until I start churning her into mush."])
							//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
						])
					)
				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and hold her above my hard cock. She looks worried as I lower her down. When her feet touch my tip, they slip inside and I continue to lower her further. She looks in horror as shes slowly consumed by my large member. I let go after her butt slides in and watch her struggle in vain before being completely devoured by my rod. I feel her curl up inside my sack before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure... "]
					}else{
						Entrys = ["I grab SUB with one hand and hold her above my gaping mouth. She looks worried as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her further. She looks in horror as shes slowly consumed. I let go after her butt slides in and feel her struggle in vain before being completely devoured."]
					}
				}
				if(Entrys.length == 0){
					Entrys.push("I grab SUB, and swallow her down!")
					Entrys.push("I gulp down SUB, I feel her struggle inside me until she passes out!")
				}
			}else if(s[4] == 3){//WILLING
				Entrys.push(
					choose(["I ","I ","I ","I ","I ","Licking my lips, I decide its time to eat. I ","I swiftly ","I quickly ","I decide that the SUBRACE's time has come. I ",(choose(["My stomach growls loudly","My stomach makes a deep rumble","My empty stomach gurgles"])+choose([".",", demanding to be sated.",", begging to be fed!"," telling me its time to eat.",", desperate for a meal!",", hungry for the snack in front of me.",", eager for the feminine meal before me."])+choose([" I eagerly "," I casually "," I slowly "," I "," I "," I "])) ])+
					choose(["grab SUB,","grab SUB,","grab SUB,","grab SUB,","reach out and grab hold of SUB,","walk up to SUB. I grab her by the waist with both hands,","grab hold of SUB,","lift SUB into the air over my hungry maw,","lift SUB above my hungry maw,"])+
					choose([" and"," and",choose([" and slowly"," and she doesn't struggle as I"," and as she gasps in surprise, I"," and she tells me she's ready to be my meal! I"," and she tells me to eat up as I"," and as she gives me a smile, I"," and as she wiggles in my grip, I"," and as she begs for me to continue, I"," and she screams in glee as I"," and her eyes grow wide as I"," and she says I better enjoy her as I"," and she asks me to eat her slowly as I"," and she says she hopes she is delicious as I"," and she shuts her eyes when I"])])+
					choose([" swallow her."," swallow her down."," swallow her down."," gaze at her sexy body one last time before swallowing it down."," get one last look at her cute face before it, and the rest of her, slide down my throat."," get one last eyeful of her cute form before swallowing it down."," give her beautiful body one last look before swallowing it down."," swallow her down without even taking the time to get a proper taste."," gulp her down!"," start swallowing her down. I savor her unique flavor until the last of her slides down my throat."," start swallowing her down. She tells me to slow down when I reach her hips, and I slip my tongue between her legs. Her juices make my throat slick and she slides the rest of the way down."," start swallowing her down. She gasps for breath as I start tasting her mound. I lose my grip on her when she arches her back, and she slides down into my belly."," start swallowing her down. My tongue dips between the SUBRACELONG's legs and she humps her hips against it. Her humping gets more intense and soon she slips down the rest of the way."," start swallowing her down. My tongue explores the SUBRACELONG's body as I devour her whole."," gobble her down."," take several large gulps until she's completely inside me."," get her into my mouth. A few big swallows take her entirely down my throat."," give her a kiss on the cheek before swallowing her down."])+
					choose(["",
						choose([" She asks if she was tasty, and I tell her she was the best.",
							" She says it's cozy inside my tight belly."
						])
					])+
					choose(["",
						"I "+choose(["fondle","grope","squeeze"])+" her"+choose([" "," breast "," breasts ","behind ","rear "])+choose([" as she presses against my stomach. Her hand is between her legs as she tries getting off.","through my belly as she masturbates inside me."])+choose([" She cums just before digesting!"," Despite my help, she isn't able to cum before digesting."," She screams out in orgasm right before digesting!"," She shudders when she climaxes, and my body quickly digests her."]),
						choose([" I feel her masturbate "," I feel her masturbate "," I feel her masturbate "," I feel her masturbate "," Her masturbating almost takes me off balance as she tries getting off for one last time"," I feel her masturbate inside me for a while"," I hear her moan inside me"," She wiggles around and moans for a while"," I feel her hump against my stomach walls"," She moves rhythmically inside as she tries getting off"," She begs for me to melt her down as she masturbates"," She pushes hard against the sides of my stomach while she moans"," Her body presses against my belly, I see the outline of her hand between her legs"," Her hands make impressions against my belly as she begs for me to churn her into mush"])+
						choose([" until she cums right as I finish digesting her."," until she cums just before digesting."," she isn't able to climax before digesting unfortunately."," until she digests."," before she cums. She thanks me for choosing her before passes out."," before her body shudders in orgasm. She fully digests soon after."," before finally reaching her climax and digesting away."," before she gives up and digests without an orgasm."," until she cums. She cries out as my stomach acids melt her down."," before reaching her climax. We say our goodbyes as I start churning her into mush."," until my acids get to work and she starts panicking. I burp out the last of her air to stop her suffering."])
						//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
					])
				)
				if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && unit(s[2]).CPle > 0){
				
					if(unit(s[2]).Positive){
						Entrys.push("As SUB scrubs the floor I get on all fours behind her and start licking her butt. She giggles and tells me I won't have room for dinner if I eat her. When I swallow down her rump she realizes shes really getting eaten! She tells me her "+map[party.y][map.party.y].name+" is all mine if I keep it clean. I start licking her breasts and she jokingly tells me its impolite to play with my food, but she appreciates it. After she cums I gobble the rest of her down!")
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
				}
				if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
					Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose as I finish my meal. I feel my belly jiggle as she cums!")
					Entrys.push("I call SUB a cute bunny snack. She says if she's just a snack, I should eat her! My hands wrap around her waist and I lift her into a kiss before swallowing her head and shoulders. She cums before I even reach her hips, and I gulp down her still quivering legs!")
				}
				if(party.units.length == 2){
					if(unit(1).willing){
						Entrys.push(String("My "+party.units[1].Name +" watches as I start swallowing SUB head first! As I get to SUB's waist, I see that my "+party.units[1].Name+" has started fingering herself as she watches me taste SUB's lower lips. After I finish eating SUB, I watch as my "+party.units[1].Name +" orgasms loudly. Panting, she asks when I'm going to eat her!"))
					}else if(party.units[1].Hungry){
						Entrys.push(String("My "+party.units[1].Name +" watches as I start swallowing SUB head first! As I get to SUB's waist, I see that my "+party.units[1].Name+" has started fingering herself as she watches me taste SUB's lower lips. After I finish eating SUB, I watch as my "+party.units[1].Name +" orgasms loudly. Panting, she asks if she can eat the next one."))
					}
					Entrys.push(String("I grab SUB by her feet and start swallowing them down. My "+party.units[1].Name+" approaches and starts making out with her! I eat slowly, letting them have their fun. They keep at it until I swallow SUB's head. I lock lips with my "+party.units[1].Name+" to continue the kiss. Eventually we break away as a strand of saliva droops between us. She feels my belly with her hand, and a handprint emerges from inside to match hers."))
				}
				if(map[party.y][party.x].units.length > 1){
					if(s[2] == 100){
						Entrys.push(String("I grab SUB by her feet and start swallowing them down. The "+unit(101).Name+" approaches and starts making out with her! I eat slowly, letting them have their fun. They keep at it until I swallow SUB's head. The"+unit(101).Name+" feels my belly with her hand, and a handprint emerges from inside to match hers."))
					}else{
						Entrys.push(String("I grab SUB by her feet and start swallowing them down. The "+unit(100).Name+" approaches and starts making out with her! I eat slowly, letting them have their fun. They keep at it until I swallow SUB's head. The"+unit(100).Name+" feels my belly with her hand, and a handprint emerges from inside to match hers."))
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
					Entrys = ["I grab SUB with one hand and hold her above my gaping mouth. She looks excited as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her further. She starts to finger and fondle herself as shes slowly consumed. I let go after her butt slides in and feel it grind against my tongue until she orgasms. She kisses my lip before sliding down into my belly."]
				}
			}
				
			}
		}else if(s[1]==0 && s[2] >=99 && map[party.y][party.x].hostile){
		// HERO FOOD HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("She's  too big for me to eat now, I need to find a way to increase my appetite...")
			}else if(s[4] == 0){//FAILED
					if(unit(s[2]).flying){
						if(unit(s[2]).Funny){
							Entrys.push("My poor stomach grumbles as SUB flies above me. She sticks her tongue out to mock me.")
							Entrys.push("I leap at SUB, but she's too high up. She laughs at me from a safe distance")
							Entrys.push("I try catching SUB as she flies by, but she's just too quick. She shakes her tasty tush at me teasingly in the air.")
							Entrys.push("I grab SUB, but she deftly slips out of my grip. She quickly kisses my forehead before flapping back to safety.")
							Entrys.push("I grab SUB, but she bites down on my hand with her long fangs. I let go instantly, and she flys away. She laughs, and says I taste horrible.")
							Entrys.push("I grab SUB, but she easily slips out and escapes. She shakes her tush at me when shes safely in the air.")
						}else{
							Entrys.push("My poor stomach grumbles as SUB flies above me.")
							Entrys.push("I leap at SUB, but she's too high up.")
							Entrys.push("I try catching SUB as she flies by, but she's just too quick!")
							Entrys.push("I grab SUB, but she deftly slips out of my grip.")
							Entrys.push("I grab SUB, but she bites down on my hand with her long fangs. I let go instantly, and she flys away.")
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
						Entrys.push("CSUB swipes a claw at me as I shove her feet inside my mouth! She hisses and struggles until I get past her hips. Once she realizes she can't escape she shoves a hand down my throat and starts to finger herself. I hear her moan as I finish swallowing her down, and she cums shortly before digesting.")
					}
				}
				if(unit(s[2]).Tags[0] == "Catgirl"){
					Entrys.push("CSUB swipes a claw at me as I shove her feet inside my mouth! She hisses and struggles the whole way down!")
				}
				//Entrys.push("I gulp down SUB, I feel her struggle inside me until she passes out!")
				//Entrys.push("I swiftly grab hold of SUB, and before she could struggle, I gulp her down. I feel her struggle inside me for a while before she passes out.")
				Entrys.push(
					choose(["I ","I ","I ","I ","I ","Licking my lips, I decide its time to eat. I ","I swiftly ","I quickly ","I sense an opportunity to fill my belly. I ",(choose(["My stomach growls loudly","My stomach makes a deep rumble","My empty stomach gurgles"])+choose([".",", demanding to be sated.",", begging to be fed!"," telling me its time to eat.",", desperate for a meal!",", hungry for the treat in front of me.",", eager for the feminine meal fighting me."])+choose([" I eagerly "," I quickly "," I swiftly "," I "," I "," I "])) ])+
					choose(["grab SUB,","grab SUB,","grab SUB,","grab SUB,","reach out and grab hold of SUB,","lurch forward at SUB. I grab her by the waist with both hands,","grab hold of SUB,","lift SUB into the air over my hungry maw,","lift SUB above my hungry maw,"])+
					choose([" and"," and",choose([" and hastily"," and before she realizes whats happening, I"," and as she struggles, I"," and before she can struggle, I"," and before she has time to react, I"," and as she weakly slaps at me, I"," and as she weakly struggles in my grip, I"," and as she begs for help, I"," and she screams in terror as I"," and her eyes grow wide as I"," and she begs for mercy as I"])])+
					choose([" swallow her."," swallow her down."," swallow her down."," gaze at her sexy body one last time before swallowing it down."," get one last look at her cute face before it, and the rest of her, slide down my throat."," get one last eyeful of her cute form before swallowing it down."," give her beautiful body one last look before swallowing it down."," swallow her down without even taking the time to get a proper taste."," gulp her down!"," start swallowing her down. I savor her unique flavor until the last of her slides down my throat."," start swallowing her down. My tongue explores the SUBRACELONG's body as I devour her whole."," gobble her down."," take several large gulps until she's completely inside me."," get her into my mouth. A few big swallows take her entirely down my throat."," swallow her halfway down. Her squirming prevents me from finishing the job until my curious tongue makes a distraction long enough to gulp down the rest of her."])+
					choose(["",
						choose([" I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle "," Her struggling almost takes me off balance as she tries one last time to escape"," I feel her struggle inside me for a while"," I feel her thrash around inside me"," She thrashes about for a while"," I feel her weakly pound against my stomach walls"," She makes muffled cries for help"," She begs for me to let her out"," She pushes hard against the sides of my stomach"," I feel her spin to get her head above my digestive juices and struggle to breath the putrid fumes"," Her fists pound against my belly"," Her hands make impressions against my belly"])+
						choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until my stomach acids melt her down."," until I start churning her into mush."," until I burp out the last of her air."])
						//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
					])
				)
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and hold her above my hard cock. She looks worried as I lower her down. When her feet touch my tip, they slip inside and I continue to lower her further. She looks in horror as shes slowly consumed by my large member. I let go after her butt slides in and watch her struggle in vain before being completely devoured by my rod. I feel her curl up inside my sack before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure... "]
					}else{
						Entrys = ["I grab SUB with one hand and hold her above my gaping mouth. She looks worried as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her further. She looks in horror as shes slowly consumed. I let go after her butt slides in and feel her struggle in vain before being completely devoured."]
					}
				}
			if(unit(s[2]).Tags[0] == "Batgirl" && unit(s[2]).flying){
				Entrys = []
					/*
					Entrys.push(
						"I grab SUB"+
						choose(["",""," as she swoops down"," when she flies by"," when she's right above me"," as she glides too low"])+
						choose([", and pull her into an overly-tight embrace"," and wrap my arms around her middle",". I wrap one arm around her chest and another around her neck",". I squish her wings tightly against her body with both of my arms"])+
						choose([
							". My mouth envelopes the trapped girls head with ease. As her wings try flapping within the confines of my grip, I slide my mouth down to her shoulders. I continue to make my way across her tasty body until its completely inside me.",
							" before I swallow her down.",
							" as I give her cheek a goodbye kiss and swallow her down.",
							". I get one last look at her cute face before it, and the rest of her, slide down my throat. Her wings tickle as they pass my tongue.",
							". I give her cute form one last squeeze before swallowing it down.",
							" until she stops struggling. I then swallow her down without even getting a proper taste with her wings in the way.",
							" and quickly gobble her up without even taking the time to get a proper taste.",
							" and gulp her down as she frantically flaps her wings!",
							" and start nibbling on her ear. I swallow her down slowly and savor her unique flavor until cute toes slide down my throat.",
							" before I start swallowing her down. My tongue explores SUB's body as I devour her whole.",
							", and gobble the SUBRACELONG down.",
							" before I get her into my mouth. A few big swallows take her entirely down my throat, wings and all.",
							" before swallowing her halfway down. Her flapping wings prevents me from finishing the job until my curious tongue makes a distraction long enough to gulp down the rest of her."
						])+
						choose(["",
							choose([" I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle "," Her struggling almost takes me off balance as she tries one last time to escape"," I feel her struggle inside me for a while"," I feel her wings thrash around inside me"," She thrashes about with her wings for a while"," I feel her weakly pound against my stomach walls with her wings"," She makes muffled cries for help"," She begs for me to let her out"," She pushes hard against the sides of my stomach with her wings"," I feel her spin to get her head above my digestive juices and struggle to breath the putrid fumes"," Her wings pound against my belly"," Her wings make impressions against my belly"])+
							choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until my stomach acids melt her down."," until I start churning her into mush."," until I burp out the last of her air."," until she digests. I'm really starting to appreciate the taste of batgirl!"])
						
						])
					)//*/
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
						
						choose([", holding her tight",", and pull her into an overly-tight embrace",", and wrap my arms around her middle",". I wrap one arm around her chest and another around her neck",". I squish her wings tightly against her body with both of my arms"])+
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
							" and start nibbling on her ear. I swallow her down slowly and savor her unique flavor until cute toes slide down my throat.",
							" before I start swallowing her down. My tongue explores SUB's body as I devour her whole.",
							", and gobble the SUBRACELONG down.",
							" before I get her into my mouth. A few big swallows take her entirely down my throat, wings and all.",
							" before swallowing her halfway down. Her flapping wings prevents me from finishing the job until my curious tongue makes a distraction long enough to gulp down the rest of her."
						])+
						choose(["",
							choose([" I feel her struggle "," I feel her struggle "," I feel her struggle "," I feel her struggle "," Her struggling almost takes me off balance as she tries one last time to escape"," I feel her struggle inside me for a while"," I feel her wings thrash around inside me"," She thrashes about with her wings for a while"," I feel her weakly pound against my stomach walls with her wings"," She makes muffled cries for help"," She begs for me to let her out"," She pushes hard against the sides of my stomach with her wings"," I feel her spin to get her head above my digestive juices and struggle to breath the putrid fumes"," Her wings pound against my belly"," Her wings make impressions against my belly"])+
							choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until my stomach acids melt her down."," until I start churning her into mush."," until I burp out the last of her air."," until she digests. I'm really starting to appreciate the taste of batgirl!"])
						])
					
					
					
					
					)
				}
				if(unit(s[2]).Tags[0] == "Slimegirl"){
					Entry = "";
					Entry += choose([])
					
					
					/*
					Init
					grab
					latch
					suck
					taste
					shrink
					finish
					
					//*/
					//entrys = [entry]
					Entry = "";
					Entrys.push("I slurp down SUB, she has a great "+DescWord(unit(s[2]),"slime",100)+" flavor.")
				}
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
			if(s[4] == -2){//TOO SMALL
				Entrys.push("CSUB is too big for DOM to eat!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM bites down on SUB's neck. The girl yelps in pain and shoves the small bat off of her. I tell DOM she needs to choose smaller prey."]
				}
			}else if(unit(s[2]).willing){//WILLING
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the open maw. She's gulped down instantly, forming a large bulge inside DOM! I press my ear to her bloated belly, and hear SUB moan as she fingers herself one last time!")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB grabs the tongue and pulls DOM over to her. CSUB kisses the other girl and says she'd be glad to be a snack. She lets DOM swallow her down, and soon screams out in ecstasy while digesting inside the froggirl!")
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
							Entrys[Entrys.length-1] += " CSUB twists around and sits straddling the other girl. She grabs both of her winged arms and spreads them open, pinning the batgirl to the ground. CDOM looks surprised at being dominated by the other girl so unexpectedly. CSUB tells the bat it's rude to play with her food. While keeping the bats hands away from her folds, she starts to grind them against the girls stomach. CDOM blushes as a wet streak forms along her belly where the SUBRACE rubs. Sweat starts dripping onto the Batgirl as SUB grows closer to climax. She's exhausted when she cums, and collapses onto the batgirl. They share a weak kiss before the SUBRACE tilts her head away."
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
							Entrys[Entrys.length-1] += " CDOM respectfully lowers the depleted girl to the ground, and gives her a goodbye kiss on the forehead."
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
				}
				Entrys.push("CDOM just ate SUB!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = []
					if(unit(s[1]).Slutty){
						Entrys.push("CDOM wraps her wings around SUB from behind and starts to finger the other girl. When SUB's knees get weak, the batgirl pulls them both backward until they topple over together. When SUB tries to pull away, the bloodsucker strikes down on her neck, stopping her escape. CDOM keeps fingering the struggling girl as she slowly feeds. CSUB's last orgasm is weak due to the bloodloss, but she still dies with a smile on her face.")
					}
					if(unit(s[1]).Negative){
						Entrys.push("CDOM"+choose(["","",""," apologizes before she"," takes a deep breath before she "," nervously"," timidly"," slowly"])+" bites down to feed on SUB, but pulls back when the other girl yelps from the pain. I stand behind SUB and embrace her. She holds my hand with both of hers as DOM tries to feed again. CSUB squeezes my hand tightly as shes fed on until her grip goes limp. "+choose(["","","I gently lay SUB on the ground and close her eyes.","I rub DOM's head between her fluffy ears and she gives me a meek smile.","I rub DOM's head between her fluffy ears and tell her she did good."]))
					}
					//generic
					Entrys.push(choose(["CDOM apologizes before sinking her teeth into SUB's neck, she","CDOM says nothing before sinking her teeth into SUB's neck, she","CDOM hugs SUB before biting down on the girl's neck, she","CDOM gives SUB a quick kiss before biting down on the surprised girl's neck, she"])+choose([""," quickly"," slowly"," greedily", " hungrily"])+choose([" drains the color out of the other girls face "," taps into a juicy vein, feasting on the other girls warm blood. "," makes a bloody mess as she drinks her fill. "," sucks the life from the other girl. "," sucks down the other girls blood in time with her weakening heartbeat. "," drinks. "])+choose(["","CSUB simply closes her eyes and lets herself be taken.","CSUB passes out shortly after the feeding starts."]))
					Entrys.push("CDOM plants a large kiss right on SUB's lips! The SUBRACE seems surprised, but soon returns the affection. The makeout session seems normal at first, but soon DOM starts kissing the other girls cheek, then her jaw, then lower to the neck. The mood shifts when DOM bites down and starts feeding. CSUB winces at the pain and weakly struggles until passing out from bloodloss.")
					if(unit(s[2]).Tags[0] == "Batgirl"){
						Entrys = []
						Entrys.push("CDOM sneaks up behind SUB and starts nibbling her neck."+ choose([" The other bat nervously tilts her head, knowing what's coming next."," The other batgirl tenses up, knowing exactly what's coming next."," The other batgirl starts to tremble."])+choose([" She screams when DOM's teeth sink into her, and tears roll down her face throughout the feeding. "," She winces when DOM's teeth sink into her, and furrows her eyebrows throughout the feeding. "," I hold her hand as DOM's teeth sink into her neck. I put a hand on her cheek and stay close during her final moments. "])+choose([""," She quickly passes out."," The two girls are both silent as one feeds on the other."," She asks why the other bat girl chose her, but passes out before she can get an answer."," She blows me a last goodbye kiss before slumping over."," She gives me one last sad smile before slumping over."]))
					}
				}
				
			}
		}else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && map[party.y][party.x].hostile){
		// SAME HOSTILE
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
					Entrys = ["CDOM apologizes before sinking her teeth into SUB's neck, she quickly sucks the life from the other girl. CSUB dies with a look of peace on her face."] 
				}
				if(Entrys.length == 0){
					Entrys.push("Oh my, SUB just let DOM eat her!")
				}
			}else{//UNWILLING
				Entrys.push("CDOM just ate SUB!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM apologizes before sinking her teeth into SUB's neck, she quickly sucks the life from the other girl. CSUB dies with a look of panick on her face."] 
				}
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && !map[party.y][party.x].hostile){
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
				if(unit(s[1]).Tags[0] == "Froggirl"){ 
					Entrys.push(choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
					"tongue "+choose(["flings","shoots","slings","launches","darts"])+
					choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"," out seeking SUB. It moves quickly"])+
					choose([" and catches her.",
						choose([" to bind around her!"," to hook around her middle!"," and wraps around her!"," and latches on!"," to latch on!",", wrapping around her middle!"])
					])
					)
					if(unit(s[2]).Positive && Math.random()<.80){
						Entrys[Entrys.length-1]+= choose([" CSUB tries to politly ask to be released", " CSUB calmly asks me for help with a worried look on her face"])
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
						Entrys[Entrys.length-1]+= choose([", her body tenses when the tongue yanks her towards DOM."," as the tongue retracts, reeling her in."," as the tongue pulls her towards the open maw."," as the tongue coils back, pulling her closer.",", and soon DOM pulls back sharply, her tongue carrying its prize towards her open maw."," while DOM tugs her to the ground and drags her closer.",". Suddenly, the tongue snaps back, taking her with it."])
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
						choose([" She's gulped down"+choose([" instantly!"," quickly!"," easily!"," and digests quickly."," and starts to digest."," in a heartbeat!"]),+choose([" Soon SUB is just a "," Soon SUB is nothing more than a "])+choose(["","","shapely ","large ","squirming ","writhing ","wiggling "])+choose(["meal.","lump.","bulge inside DOM."]),
						choose([" CSUB is soon swallowed up to her chest as the long tongue that caught her gets a taste. Once DOM has properly enjoyed the flavor of the cute breasts, she gulps the last of her meal down."," She's gulped down instantly, forming a large bulge inside DOM!"," CSUB cries out before she's devoured in one massive gulp!"," CSUB is gulped down head first, she struggles inside the stretchy belly until getting digested!"," She's gulped down quickly, and digests even quicker!"," Soon only her head and shoulders are sticking out as she gets one final look of the outside world."])
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
					Entrys = [choose(["CDOM apologizes before sinking her teeth into SUB's neck, she","CDOM says nothing before sinking her teeth into SUB's neck, she","CDOM hugs SUB before biting down on the girl's neck, she","CDOM gives SUB a quick kiss before biting down on the surprised girl's neck, she"])+choose([""," quickly"," slowly"," greedily", " hungrily"])+choose([" drains the color out of the other girls face "," taps into a juicy vein, feasting on the other girls warm blood. "," makes a bloody mess as she drinks her fill. "," sucks the life from the other girl. "," drinks. "])+choose(["","CSUB simply closes her eyes and lets herself be taken.","CSUB passes out shortly after the feeding starts.","CSUB dies with a look of fright on her face."])] 
				}
				if(Entrys.length == 0 || Math.random()<.2){
					Entrys.push("CDOM eats SUB!")
				}
			}else if(s[4] == 3){//WILLING
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
				if(Entrys.length == 0){
					Entrys.push("Oh my, SUB just let DOM eat her!")
				}
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		// DIFF HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("CSUB is too big for DOM to eat!")
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = ["CDOM bites down on SUB's neck, but she yelps in pain, and shoves the small bat off of her. I tell DOM she needs to choose smaller prey."]
				}
			}else if(s[4] == 0){//FAILED
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
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
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push(choose(["CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM's ","CDOM ribbits before her ","CDOM croaks before her ","CDOM opens her mouth impossibly wide before her ","CDOM licks her lips before her "])+ choose(["","","slimey ","sticky ","long ","powerful "])+
					"tongue "+choose(["flings","shoots","slings","launches","darts"])+
					choose([" out at SUB"," out toward SUB"," straight toward SUB"," straight at SUB"," out seeking SUB. It moves quickly"])+
					choose([" and catches her.",
						choose([" to bind around her!"," to hook around her middle!"," and wraps around her!"," and latches on!"," to latch on!",", wrapping around her middle!"])
					])
					
					)
					if(unit(s[2]).Tags[0] == "Batgirl"  && unit(s[2]).flying){
						Entrys[Entrys.length-1]+= choose([" CSUB frantically flaps as she's pulled through the air towards the open maw."," CSUB tries to fly away, but gets yanked down."," She pulls back sharply, and SUB flaps in vain as she's drawn to her doom."," Suddenly, the tongue snaps back, pulling SUB down with it."])
					}else if(map[party.y][party.x].tag == "Water"){
						Entrys[Entrys.length-1]+= choose([" It coils back, pulling SUB closer through the water."," She pulls back sharply, and SUB struggles as she's drawn through the water."," She pulls back sharply, and SUB splashes across the water towards the open maw."," CSUB plunges under and is dragged through the water towards DOM."," Suddenly, the tongue snaps back, taking SUB with it."])
					}else{
						Entrys[Entrys.length-1]+= choose([" It coils back, pulling SUB closer."," She pulls back sharply, and SUB struggles as she's drawn to her doom."," She pulls back sharply, and SUB flies through the air towards the open maw."," CSUB falls down and is dragged along the ground towards DOM."," Suddenly, the tongue snaps back, taking SUB with it."])
					}
				
					if(unit(s[2]).willing && Math.random()<.5){
						Entrys[Entrys.length-1]+= choose([" Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. While digesting, SUB moans loudly as she fingers herself one last time!"," Surprisingly, SUB cries out in bliss before she's devoured in one massive gulp!"])
					}else if(unit(s[2]).Positive && s[2] < 100 && !unit(0).fled && Math.random()<.5 && s[2] < 100){
						Entrys[Entrys.length-1]+= " Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. She tells us not to give up as she digests."
					}else if(unit(s[2]).Negative && s[2] < 100 && !unit(0).fled && Math.random()<.5 && s[2] < 100){
						Entrys[Entrys.length-1]+= " Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. She begs for me to save her as she digests."
					}else if(unit(s[2]).Funny && s[2] < 100 && !unit(0).fled && Math.random()<.5){
						Entrys[Entrys.length-1]+= " Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+"bulge. She laughs and says that she's the one about to croak."+choose(["",""," She doesn't stop giggling until she digests."])
					}else if(unit(s[1]).Positive && Math.random()<.20){
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
						choose([" She's gulped down"+choose([" instantly!"," quickly!"," and digests quickly."," and starts to digest."," in a heartbeat!"])," Soon SUB is just a "+choose(["","","shapely ","large ","squirming ","writhing ","shrinking "])+choose(["bulge.","bulge.","bulge inside DOM."]),
						choose([" CSUB is soon swallowed up to her chest as the long tongue that caught her gets a taste. Once DOM has properly enjoyed the flavor of the cute breasts, she gulps the last of her meal down."," She's gulped down instantly, forming a large bulge inside DOM!"," CSUB cries out before she's devoured in one massive gulp!"," CSUB is gulped down head first, she struggles inside the stretchy belly until digesting!"," She's gulped down quickly, and digests even quicker!"," Soon only her head and shoulders are sticking out as she gets one final look of the outside world."])
						])
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
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUB starts to get eaten by DOM, she blows a kiss to me, and says she was hoping I'd be the one to eat her. I blow a kiss back as DOM quickly finishes eating.")
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUB starts to get eaten by DOM she begins to finger herself. She cums before DOM finishes swallowing her down!")
					}
					if(unit(s[2]).Funny && unit(s[2]).willing && !unit(0).fled){
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUB starts to get eaten by DOM, she laughs and says she can't believe she's going to get eaten by a DOMRACE of all things. She keeps giggling as DOM swallows her down.")
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUB starts to get eaten by DOM, she raises her index and middle finger at me. She maintains her peace sign as DOM swallows her down.")
						Entrys.push("CDOM pushes SUB to the ground and opens her mouth wide. As SUB starts to get eaten by DOM, she flips me off and demands that I eat the fat DOMRACE that bested her. She keeps her finger raised as DOM swallows her down.")
					}
				}
				
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys = []
					if(unit(s[1]).flying){
						Entrys.push("CDOM flies down and tackles SUB to the ground. On her back, the SUBRACE screams out as DOM's teeth sink into her neck and starts to feed. Soon the screaming stops and DOM leaps back into the air") 
						if(unit(s[1]).Funny){
							Entrys[Entrys.length-1] += choose([" laughing."," with a grin on her face!"," looking quite pleased with herself!"])
						}else if(unit(s[1]).Hungry){
							Entrys[Entrys.length-1] += choose([" still hungry for more!"," with blood dripping down her chin."," looking quite pleased with herself!"])
						}else{
							Entrys[Entrys.length-1] += "."
						}
						Entrys.push("CDOM swoops down to SUB and tilts the girls head back to bite her throat. CSUB's eyes grow wide as her blood is sucked down by the hungry bat. She falls backwards when DOM finishes her meal."+choose(["The Batgirl uses her wings to quickly get airborne again.","The Batgirl licks her lips before using her wings to get airborne once more."]))	
					}
					
						Entrys.push("CDOM leaps on SUB's back and bites down hard at the base of her neck to drink. CSUB falls to her knees as the color is drained from her face."+choose([""," CDOM wipes her bloody mouth and lets the depleted meal slump forward."]))
					
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
						Entrys.push("CSUB yelps as DOM grabs her, one hand quickly silencing the screams. CDOM slowly drags her into the shadows, fangs ready. ")
						if(unit(s[1]).Slutty && unit(s[2]).willing){
							Entrys[Entrys.length-1] += "From inside the darkness I hear sensual moaning and a wet slurping sound. Soon the moaning stops and all thats left is that sound of the batgirl feeding."
						}else if(unit(s[1]).Funny){
							Entrys[Entrys.length-1] += "From inside the darkness a wet slurping is the only sound to be heard, followed by "+choose(["a deep cackling!","the batgirl asking whose next...","loud laughter of the batgirl."])
						}else if(unit(s[1]).Hungry){
							Entrys[Entrys.length-1] += "From inside the darkness a wet slurping is the only sound to be heard, followed by a "+choose(["deep belch!","loud burp."])
						}else{
							Entrys[Entrys.length-1] += "From inside the darkness a wet slurping is the only sound to be heard..."
						}
					}
					if(unit(s[2]).Tags[0] == "Batgirl" && unit(s[1]).Tags[0] != "Slimegirl"){
						Entrys = []
						if(unit(s[1]).flying && unit(s[2]).flying){
							Entrys.push(choose(["CDOM outflies the other batgirl and soon has her by the neck","CDOM swoops up at SUB from below, latching onto her throat!","CDOM intercepts SUB and bites into her neck."])+choose([" They both fall to the ground in a mess of wings as DOM drinks her fill."," They spiral downward with a trail of blood as DOM drains the other girl."," Entangled, they tumble to the ground as DOM continues to feast! "])+ choose([" CSUB breaks DOM's fall with her depleted body. CDOM licks her bloody lips before flapping back into the air."," CDOM lands on top of the lifeless girl, and quickly leaps back into the air."," They land with SUB completely colorless, and DOM takes to the air once more.","They land and DOM keeps slurping down SUB's blood in time with her weakening heartbeat. She uses the other girls wing to wipe her mouth before leaping back into the air."]))
						}
						if(Entrys.length == 0 || Math.random()<.2){
						Entrys.push("CDOM sneaks up behind SUB and starts nibbling her neck. The other bat just tilts her head, knowing what's coming next. She remains stoic even when DOM's teeth sink into her, and is consumed without saying a word.")
						}
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
				}else if(unit(s[2]).Tags[0] == "Batgirl"  && unit(s[2]).flying && unit(s[1]).Tags[0] != "Froggirl"){
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
						
						choose([", holding her tight",", and pull her into an overly-tight embrace",", wrapping her arms around the bats middle",". CDOM wraps one arm around the bats chest and another around her neck",", then squishes her wings together"])+
						choose([
							". CDOM's mouth envelopes the trapped girls head with ease. As her wings try flapping within the confines of DOM's grip, she slide her mouth down to the bats shoulders. CDOM continues to make her way across the bats tasty body until its completely inside.",
							" before she swallows the bat down.",
							" as she gives the bat a goodbye kiss and swallows her down.",
							". CDOM gets one last look at the bats face before it, and the rest of her, slide down her throat. She almost chokes as she swallows struggling wings.",
							". CDOM gives the bat one last squeeze before swallowing her down.",
							". When SUB's struggling stops, DOM wraps the bat wings into a burrito before swallowing her down."+choose(["",""," I bet she would have been better with hot sause!"]),
							" until she stops struggling. CDOM then swallows her down without even getting a proper taste with the bat wings in the way.",
							" and quickly gobbles SUB up without even taking the time to get a proper taste.",
							" and gulps her down as she frantically flaps her wings!",
							" to start nibbling on SUB's ear. CDOM swallows her down slowly and savors her flavor.",
							" before swallowing her down. ",
							", and gobble the bat down.",
							" before engulfing her head. A few big swallows take the bat entirely down DOM's throat, wings and all.",
							" before swallowing her halfway down. Flapping wings prevents DOM from finishing the job until the bat suddenly goes stiff and gets slurped down peacefully."
						])
					)
						if(unit(0).fled == false && Math.random() < .5){
							Entrys[Entrys.length-1] += choose([" I see SUB struggle inside DOM"," I see SUB struggle inside DOM"," Her struggling almost takes DOM off balance as she tries one last time to escape"," I see her wings thrash around inside DOM"," She thrashes about with her wings for a while"," I see her weakly pound against DOM's stomach walls with her wings"," She makes muffled cries for help"," She begs for DOM to let her out"," She begs for someone to save her"," She pushes hard against the sides of DOM's stomach with her wings"," Her wings pound against DOM's belly"," Her wings make impressions against DOM's belly"])
							Entrys[Entrys.length-1] += choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until DOM's stomach melts her down."," until DOM starts churning her into mush."," until DOB burps out the last of her air."])
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
							"CSUB gets too close to DOM, and can't react when DOM",
						])])
						if(unit(s[2]).Tags[0] == "Batgirl" && unit(s[2]).flying){
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
							Entry += choose([" tackles her to the ground. She completely covers the SUBRACE's prone form in "+SlimeColor+" goo.",
							" stretches out her arms to loop around her. CDOM pulls back and the SUBRACE is plunged inside her.",
							" stretches out to grab her arm. CDOM pulls back and the SUBRACE is submerged inside her.",
							" stretches out and wraps around her, completely enveloping her body.",
							" reforms into a flat pancake shape and quickly engulfs her legs. CDOM then rises, returning to a humanoid form and enveloping the SUBRACE in the process.",
							" reforms into a flat blob shape and quickly engulfs her legs. CDOM then rises, returning to a humanoid form and enveloping the SUBRACE in the process."])
						}
						if(Math.random()<.4 || !unit(s[2]).Vanilla){
							if(unit(s[2]).Tags[0] == "Batgirl" && Math.random()<.8){
								Entry += choose([" CSUB watches in horror as her wings melt away first."," CSUB thrashes her wings trying to escape as she starts to melt away."])
							}if((unit(s[2]).Tags[0] == "Bunnygirl" || unit(s[2]).Tags[0] == "Catgirl" || unit(s[2]).Tags[0] == "Foxgirl" || unit(s[2]).Tags[0] == "Wolfgirl")&&Math.random()<.8){
								Entry += choose([" CSUB watches in horror as her fur dissolves away."])
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
										Entry += " My SUBRACELONG seems unconcerned about her own demise and masturbates furiously"+choose([""," with both hands. Despite her best efforts, she can't manage to cum. She keeps trying"," She barely manages to cum"," She has a massive orgasm"])
									}else{
										Entry += choose([" I watch My SUBRACELONG struggle to escape"," I watch My SUBRACELONG writhe in pain"," My SUBRACELONG locks eyes with me"])
									}
									Entry += choose([" while she"," before she"," as she"," until she"])+choose(["","","",""," slowly"," quickly"])+choose([" digests."," passes out."," dissolves."," melts away."])
									//choose([" while she"," before she"," as she"," until she"])+choose(["BLANK"," slowly"," quickly"])+choose([" digests."," passes out."," breaks apart."," melts away."])+
								}else{
									Entry += choose([""," CDOM approaches me and proudly displays her belly."," CDOM waves at me, and points to her belly."])+choose([" I watch"," I stare"," I crouch and watch"])+choose([" SUB start to dissolve."," as SUB melts away."," through her transparent slime. CSUB looks back at me as she digests."])
								}
							}else{
								if(3==4){
								
								}else{
									Entry += choose([ 
									"CSUB manages to breach her head free out of the "+SlimeColor+choose([" goop"," slime, she's able to take a deep breath"," goo! She calls out for help"])+choose([", but is quickly shoved back in."," before getting pulled back in."," before sinking back in."]),
									"CSUB manages to breach a hand free out of the "+SlimeColor+choose([" goop, but its quickly shoved it back in."," goo! She waves it around before getting slowly pulled back in."]),
									
									choose([" CSUB writhes in pain"," CSUB watches in horror"])+choose([" as her skin melts away."," as her limbs start dissolving."," as her left arm melts away."," as her right arm falls apart."]),
									" CSUB curls up into a ball as she melts away.",
									" CSUB tries to scream, but "+SlimeColor+" slime rushes into her mouth instead.",
									" CSUB screams out, filling DOM with little airbubbles that slowly rise to the surface and pop.",
									+choose([" CSUB stops struggling and closes her eyes, she almost looks at peace"," CSUB just relaxes"," CSUB doesn't struggle once she's inside, she stays still"])+choose([" while she"," as she"])+choose(["","",""," calmly"," slowly"," quickly"])+choose([" digests."," dissolves."," melts away."]),
									" CSUB's limbs melt away first as she thrashes around."])
								}
							}
							Entry += choose([" Soon she's completely digested!"," Soon DOM's belly is completely empty!"," Soon, theres nothing left of her iside DOM!"," Soon, even her bones are broken down!"," Soon, only her bones remain inside DOM!"," Soon, theres nothing but her bones inside DOM!"])
						}else{
							Entry += choose([" She quickly dissolves inside."," She slowly melts away."])
						}
						Entrys = [Entry]
					}
				}
				if(Entrys.length == 0){
					Entrys.push(
						choose(["CDOM ","CDOM ","CDOM ","CDOM ","CDOM ","Licking her lips, DOM looks ready for a meal. She ","CDOM swiftly ","CDOM quickly ",(choose(["CDOM's stomach growls loudly.","CDOM's stomach makes a deep rumble.","CDOM's empty stomach gurgles."])+" She ") ])+
						choose(["grabs SUB,","grabs SUB,","grabs SUB,","grabs SUB,","reachs out and grabs hold of SUB,","lurchs forward at SUB. She grabs her by the waist with both hands,","grabs hold of SUB,","lifts SUB into the air over her open maw,","lifts SUB above her open maw,"])+
						choose([" and"," and"," and"," and"," and hastily"," and before SUB realizes whats happening, DOM"," and as SUB struggles, DOM"," and before SUB can struggle, DOM"," and before SUB has time to react, DOM"," and as SUB weakly slaps at her, DOM"," and as she weakly struggles, DOM"," and as SUB begs for help, DOM"," and SUB screams in terror as DOM"," and SUB's eyes grow wide as DOM"," and SUB flails her free limbs as DOM"])+
						choose([" swallows her."," swallows her down."," swallows her down."," swallows her down without even taking the time to get a proper taste."," gulps her down!"," starts swallowing her down. She looks in bliss as she finishes her meal."," starts swallowing her down."," gobbles her down."," takes several large gulps until SUB is completely inside her."," gets SUB into her mouth. A few big swallows take her entirely down."," swallows her halfway down. She takes a moment before gulping down the rest of her."])+
						choose(["","","",
							choose([" Her struggling almost takes DOM off balance as she tries one last time to escape"," CSUB struggles inside for a while"," CSUB thrashes around inside"," CSUB thrashes about for a while"," CSUB pounds against the stomach walls"," CSUB makes muffled cries for help"," CSUB screams for someone to let her out"," CSUB pushes hard against the stomach sides"," CSUB's fists pound against DOM's belly"," CSUB's hands make impressions against DOM's belly"])+
							choose([" until she digests."," until she digests."," until she digests."," before she passes out."," before she fully digests."," before finally digesting away."," before she gives up and digests peacefully."," until DOM's stomach acids melt her down."," until DOM starts churning her into mush."," until DOM burps out the last of her air."])
							//,choose([" Her frame causes my stomach to bloat exponentially."," An outline of her body pushes juts out of my belly."])
						])
					)
					Entrys.push("CDOM just ate SUB!")
				} 
			}
		}
	}
//###########################################################################################################################################################################
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
				Entrys = ["I grab SUB by the hips, and thrust until we both orgasm! With my balls swollen from the "+Cocked.Name+", I cum buckets into SUB and her belly bloats out!"]
			}else{
				Entrys = ["CSUB wraps her hand around my swollen member and starts to lick the tip. Soon shes bobbing down the shaft as far as she can take. With my balls swollen from the "+Cocked.Name+" my cum overwhelms SUB and it dribbles down her nose as I fill her belly!"]
			}
		}else if(s[1]==0 && s[2] < 100 && !map[party.y][party.x].hostile){
		// HERO GOOD PEACE
			if(s[5]=="Forest" && (party.units[s[2]].Tags[0] == "Bunnygirl" || party.units[s[2]].Tags[0] == "Catgirl" || party.units[s[2]].Tags[0] == "Foxgirl")){
				if(unit(s[2]).willing){
					Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her bean. She grinds her thighs together as they become soaked. Her legs buckle, and she falls into the grass. I straddle her legs and start to pound her from behind! She moans for more, and I dont stop until she shudders under me. As we both lie in the grass afterward, she says she really though I was going to eat her this time!")
				}else{
					Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her bean. She grinds her thighs together as they become soaked. Her legs buckle, and she falls into the grass. I straddle her legs and start to pound her from behind! She moans for more, and I dont stop until she shudders under me. As we both lie in the grass afterward, she says she loves me!")
				}
			}
			if(s[5]=="Indoors"){
				Entrys.push("I gently push SUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!")
				Entrys.push("Without a word, I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture.")
			}
			//LONG ENTRYS ########################################################################################################
			if(Entrys.length == 0 || Math.random()<1){
				Entrys = []
				Entry = "";
				s[11] = choose(["talk","behind"])//initial setup
				s[12] = "doggy"//sex position. doggy, missionary, cowgirl, against something tall, against something short.
				s[13] = "none"//sex position second
				s[14] = choose(["none","start","end","normal"])//foreplay
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
							"I step behind SUB"
						])
					}else{
						Entry += choose([
							" I approach her from behind",
							" I walk up from behind",
							" I step behind her"
						])
					}
						Entry += choose([
							" and rest my hands on her "+choose(["","tense ","stiff "])+" shoulders. "+choose(["","","","When she asks, ","She stands still while "])+"I give her a massage"+
								choose([
									", digging my palms against her back with my fingers draped over her.",
									" until I feel the "+choose(["stiffness","tension"])+" is worked away.",
									". My fingers dig in deep to work out the knots in her muscles."
								])
							,
							" and wrap my arms around her.",
							" and wrap my arms around her"+DescWord(unit(s[2]),"belly",100)+choose([" belly."," midriff."," stomach."," middle."]),
							" to drape my arms "+choose(["over","around","across"])+" her shoulders.",
							" and rest my hands on her "+choose(["","soft "])+"hips.",
							" to pull her close by the "+choose(["hips.","waist."]),
							" and grip her hips, my fingers making small "+choose(["dimples","divots","indents"])+" in her "+choose(["","soft "])+"skin.",
							", embracing her with my chest against her back.",
							", sliding my arms under hers"+
								choose([
									".",
									". My fingers make impressions against her belly as I pull her close.",
									" to "+choose(["fondle","grope","caress","feel","cup"])+" her "+choose(["bosom","bust",DescWord(unit(s[2]),"breasts",50)+"breasts"])+choose([".",". Her nipples harden under my touch"]),
									". My fingers explore her "+DescWord(unit(s[2]),"belly_noun",100)+choose(["."," as goosebumps form under their touch."])
								])
						
						
						
						])
						if(s[14] == "normal" || s[14] == "start"){//Foreplay
							Entry += choose([
							" SheCONTINUE",
							" SheCONTINUE",
							" SheCONTINUE",
							" SheCONTINUE",
							" Her hand moves back, and she wraps her fingers around "+choose(["me.","my shaft.","me, stroking until I'm hard.","my member. I feel myself harden as she teases the tip.","me, she seems "+choose(["surprised","pleased","excited"])+" that I'm already hard."]),
							" She leans against me"+choose(["."," with a relaxed sigh."]),
							" She lays her head against me"+choose(".",", breathing in my scent."),
							" She lays her hands over mine"+choose([".",", giving both a squeeze."]),
							" Her fingers curl around my wrists"+choose(["."," as sheCONTINUE"])
							])
							if(Entry.includes("CONTINUE") && Math.random()<.25){
								Entry = Entry.replace("CONTINUE"," ");
								Entry += "grinds against my body"+choose([
								choose([".",".",", andCONTINUE"]),
								", her crotch leaving a juicy trail down my leg."+choose(["","","",""," SheCONTINUE"]),
								", her crotch leaving a wetness on my leg."+choose(["","","",""," SheCONTINUE"]),
								". I feel her cute cheeks "+choose(["sandwich","around","squeeze"])+" my rod as she moves."+choose(["","","",""," I stiffen between her until I'm fully erect."])+choose(["","",""," SheCONTINUE"])
								])
									
							}
							if(Entry.includes("CONTINUE") && Math.random()<.25){
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
							+choose([" Her thighs become soaked"," She gasps in delight"," One of her legs starts to shake"," Her legs start grinding together"," She spreads her legs open"])+
							choose([" as I find the right rhythm."," when I pick up the pace."," as I keep pleasuring her."])+
							choose(["","",
								choose([" I dont stop and soon she"," Soon she"])+
								choose([" cries out"," bites down on her finger"," starts bucking her hips"])+
								choose([" as she cums from my touch."," when a violent orgasm wracks her body."," while she gushes down her thighs."," going over the edge."])])
						}
					
				}
				if(s[12] == "doggy"){
					if(s[11] == "talk"){
						Entry += choose([
							" Without saying a word, she turns and "+choose(["dips","drops","gets","goes"]),
							" She "+choose(["","","quietly ","softly ","loudly "])+choose(["tells me ","says "])+choose(["she wants it from behind","she wants it hard","she wants me to pound her","she wants me to mount her","she wants to be mounted"])+choose([". She turns and "," as she turns and "," as she turns away. I watch as she ",", as she spins around and "])+choose(["dips","drops","gets","goes"])
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
								" takes the initiative by pushing away from me to "+choose(["dip","drop","get","go"]),
								" pushes away from me to "+choose(["dip","drop","get","go"]),
								" slips away, and "+choose(["dips","drops","gets","goes"]),
								" pushes me back, and "+choose(["dips","drops","gets","goes"]),
								" takes the initiative by pushing away from me to "+choose(["dip","drop","get","go"]),
								
							])
						}
					}
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
					
					if(Math.random()<.25){
						Entry += " I "+choose(["kneel","drop to my knees","get down","join her on the ground"])+choose([" and"," to"])+choose([" take her from behind."])
					}else { 
						Entry += 
						choose([" I drop"," I get down"," I get on my knees"," I stoop"," I kneel"+choose([""," down"])])+choose([" behind her"," between her legs"])+
						
						
							
						choose([
							choose([", and "," then "," to "," so I can "])+choose(["slip","slide","sink","plunge"])+choose([" "," myself "," my rod "," my member "," my cock "])+choose(["into her.","into her folds.","inside.","inside her.","deep inside her."]),
							choose([", and "," then "," to "," so I can "])+"start rubbing my member against her"+choose(["",""," entrance"," folds"," wet lips"," slit"])+
								choose([
									" before sliding inside."," before sticking it inside."
									,choose([". Between heavy breaths, she",". In a soft voice she",". With a hint of frusteration in her voice, she",". She"," while she",". She sounds desperate when she"," Her lips drip more as she"," Her body trembles as she"])+choose([" tells me to stick it in already."," begs for me to fuck her already."," tells me to stop teasing and give it to her already."])+choose([" When I do, she moans loudly!"," She gasps when I do."," I feel her jolt when I do!"," Her body shudders when I do!"])
								])
							
							,choose([", and when I",". As I",])+choose([" position myself against her "," stick the tip inside her "])+choose([""," folds"," entrance"," lips"," slit"])+choose([", she suddenly pushes back, taking me entirely.",", she pushes against me until I slide inside.",", she pushes back, sinking me into her."])
						])
						
					}
					Entry += choose([
						" She pumps her hips"+choose([" against me.",", taking my full length each time.",", pushing me deeper and deeper."]),
						choose([" I thrust myself into her as she "," I pound her as she "," I ride her as she "," I start thrusting into her faster and faster. I give her "+DescWord(unit(s[2]),"butt",75)+"cheek a spank, and she "])+
							choose(["moans loudly."," throws her head back in pleasure.","begs for more.","cries out for more.","pushes back against me."]),
						choose([" We move in unison"])+choose([" as I tightly grip her "+DescWord(unit(s[2]),"butt",100)+"hips.",", both desperate for more."])
					
					])
					Entry += choose(["",choose([
						" Soon we are both "+choose(["covered","soaked","dripping","slick","drenched"])+" in sweat.",
						" Soon she's panting heavily.",
						" Soon her breath is ragged.",
						" Soon I'm ready to burst, but keep making long strokes into her.",
						" Soon she's panting and covered in sweat."+choose([""," Her arms give out and "+choose(["","her upper body lies limp."])+" I start thrusting harder, pressing her into the ground."]),
						" I rub my thumb against the rim of her anus, and feel her tighten around me.",
						" We make love, losing ourselves to the pleasure.",
						])
					])
					Entry += choose([
						
						choose([" After a few minutes,"," After a few more moments"," After a while"," Not before long,"])+" she's a quivering mess, and I feel her gush around me as I "+choose(["cum.",choose(["cum","shoot my seed","shoot my warm seed","shoot my hot seed"])+choose([" deep inside!"," inside her!"," until she's full to the brim!"]) ]),
						choose([" We keep going at it until I lose control and start filling her. "," She tells me she loves me, and her words send me over the edge. "])+choose(["I slip a hand around towards her clit and rub it until she cums!","My thrusting doesn't stop until she climaxes as well.","Soon she gasps and"+choose([" tightens like a vice ","tightens"," squeezes me "])+"as she finally finishes."," She stops pumping her hips and pushes against me. Her leg starts to quiver as she finishes."]),
						choose([" I whisper into her ear that I love her, and my words send her over the edge! "," She suddenly gasps and "+choose([" tightens like a vice ","tightens"," squeezes me "])+" as she climaxes. "])+choose(["I keep thrusting until I cum inside.","She keeps moving her hips until I start filling her.","She pulls away and turns around to start sucking me, determined to finish the job."+choose([" Soon she shoves me down her throat and I start cumming."," She swallows every drop when I cum."])]),
						" When her legs give out, I join her prone form, and again thrust"+choose([" "," myself "])+choose(["","repeatedly "])+choose(["into her","into her until she's helplessly quivering"])+choose([". As an orgasm wracks her body, I push myself in deep to cum inside."])
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
				Entrys.push("I make love to SUB.")
				Entrys.push("CSUB and I fuck until we're both exhausted.")
			}
			if(unit(0).CPle>=unit(0).MPle){
				if(unit(s[2]).willing){
					Entrys.push("CSUB and I make love until we're both exhausted. When we finish, my stomach grumbles loudly. She tells me shes ready to be eaten whenever I want her.")
				}else{
					Entrys.push("CSUB and I make love until we're both exhausted. When we finish, my stomach grumbles loudly. She looks worried when she hears how hungry I am.")
				}
			}
		}else if(s[1]==0 && s[2] < 100 && map[party.y][party.x].hostile){
		// HERO GOOD HOSTILE
			Entrys.push("I grab SUB by the hips, and thrust until we both cum!")
		}else if(s[1]==0 && s[2] >=99 && !map[party.y][party.x].hostile){
		// HERO FOOD PEACE
			if(s[3] == 1){//FUCK
				if(s[5]=="Indoors"){
					Entrys.push("I gently push SUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","Without a word, I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture.")
				}
				if(s[5]=="Forest" && (map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl")){
					Entrys.push("I approach SUB while she's leaning against a large tree. She bites her lip as I lift her leg. She gives me a nod and I plunge myself deep inside her! She moans as she's fucked in the middle of the forest!")
					if(unit(s[2]).willing){
						Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her bean. She grinds her thighs together as they become soaked. Her legs buckle, and she drops onto the grass. I straddle her legs and start to pound her from behind! She moans for more, and I dont stop until she shudders under me. As we both lie in the grass afterward, she says I can eat her next time if I want...")
					}
				}		
				Entrys.push("I start kissing SUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me, she leans in for another kiss as we both finish!")
				Entrys.push("I grab SUB by the hips and start thrusting! She's timid at first, but soon she's crying for more!")
				Entrys.push("I turn SUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We mate until she cries out in bliss!")
				if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && unit(s[2]).CPle > 0){
					Entrys = []
					if(unit(s[2]).Positive){
						Entrys.push("I bend SUB over the kitchen counter and start rubbing between her legs. She stands on her tiptoes and tells me to put it in. We make a mess out of her kitchen!")
					}else if(unit(s[2]).Funny){
						Entrys.push("I ask SUB if I can try using her paints. She's excited to see someone else interested in art and sets up a fresh canvas for me. I ask her to lay on the bed so I can draw her. She almost refuses but ultimately strikes a sexy pose on her bed. I paint for a half hour before showing her my work. Its a rough outline of her and I making love on her bed. She blushes and says its not bad for a first try. I ask if I can get more intimate with my subject matter. She smiles and assumes the position in the painting and we go at it until she gushes against my member. I pull out and try my hand at painting again and coat her breasts. CSUB laughs and says my painting skills have improved greatly!")
					}else if(unit(s[2]).Slutty){
						Entrys.push("CSUB and I finish a bottle of wine and start making out, soon she's riding my cock as I fondle her chest. She pulls me into a hug before we both cum!")
					}else if(unit(s[2]).Hungry){
						Entrys.push("I lift SUB onto the table and take two meaty handfulls of her large behind. She rests on her elbows and tells me to pound her. I thrust until we both cum!")
					}else if(unit(s[2]).Negative && party.units.length <= 2){
						Entrys.push("I straddle SUB as she lies on her back. With one hand she spreads her lips and I slide myself inside. She moans into a pillow as I pound her from behind!")
					}else if(unit(s[2]).Negative){
						Entrys.push("I give SUB a back massage and slip my hands around until I find her nipples. She moans as I tease her and begs me to fuck her. She moans into her pillow as I pound her from behind!")
					}else{
						if(unit(s[2]).willing){
							if(Math.random()<.90){
								Entrys.push("I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I plunge myself inside her, and she arches her back. I continue to thrust until we both cum!")
							}else{
								Entrys.push("I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I get a different idea however, and ram myself into her other hole! She yelps at the intrusion and looks back in shock. I continue to pump her asshole as she wiggles and writhes under me. she starts to scream out, first in pain, but then in pleasure. CSUBs soon crying for me to fuck her harder, and a few deep thrusts later she's cumming as I fill her behind!")
							}
						}else{
						Entrys.push("I gently push SUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","Without a word, I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture.")
						}
					}
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
		// HERO FOOD HOSTILE
			if(s[3] == 1){//FUCK
				if(s[5]=="Indoors"){
					Entrys.push("I push SUB's back against the wall. She hesitates before lifting her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!")
					Entrys.push("I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture.")
				}
				if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.25){
					Entrys.push("I call SUB a naughty kitty. She tells me to shut up and fuck her! My hands wrap around her waist and I lift her over my member. She purrs as I slowly lower her down. Once I'm fully in her, she wraps her arms and tail around me and starts moving her hips. She bounces on my cock as I thrust into her! Soon we are both covered in sweat as we cum together!")
					Entrys.push("I start caressing SUB's furry ears. I watch as all the anger drains from her face at my touch, I have definitly found her weak spot! She moves closer to rest her head against my chest, but looks down in surprise when she bumps my erection. She makes a naughty grin as she gets an idea. CSUB lowers herself to my member and starts to blow me while I continue to stimulate her with my massage. She orgasms from me rubbing her ears before her blowjob makes me cum too!")
					
				}
				if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl"){
					Entrys.push("I lift SUB's tail and thrust myself inside from behind. She looks bewildered at first, but after a moment her body starts moving with mine. Soon I firmly grip both of her hips and fill her with my seed as she cries out in ecstasy!")
				}
				if((map[party.y][party.x].units[s[2]-100].Tags[0] == "Wolfgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Froggirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl") && Math.random()<.25){
					//Has Legs
					Entrys.push("I tackle SUB and ask if she really wants to fight. She responds with a kiss. We lock lips as she guides my member into her. She moans as I start thrusting, and soon we both cum together!")
					Entrys.push("I start kissing SUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me, she leans in for another kiss as we both finish!")
					Entrys.push("I grab SUB by the hips and start thrusting! She's timid at first, but soon she's crying for more!")
					Entrys.push("I turn SUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We make love until she cries out in bliss!")
				}else{		
					Entrys = ["I tackle SUB and ask if she really wants to fight. She responds with a kiss. We lock lips as she guides my member into her. She moans as I start thrusting, and soon we both cum together!","I grab SUB by the hips and start thrusting! She's timid at first, but soon she's crying for more!"]
				}
				if(map[party.y][party.x].units[s[2]-100].flying){//THIS WONT WORK FOR FAERIES!!!
					Entrys = ["I ask SUB if she's interested in a good time down here, and she swoops down and tackles me to the ground. As I regain my senses I feel her guiding my member into herself. She moans when I start thrusting, and soon we both cum together!","I ask SUB if she's interested in a good time down here, and she swoops down to kiss me. I grab her by the hips and start thrusting! She's timid at first, but soon she's crying for more!","I ask SUB if she's interested in a good time down here. She swoops by and knocks me to the ground. She quickly lands and straddles me. I hold her hips as she rides me, she wraps her wings around me as we finish together!"]
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
			Entrys.push("Oh god, DOM just fucked my brains out!")
		}else if(s[1] < 100 && s[2] == 0 && map[party.y][party.x].hostile){
		// GOOD HERO HOSTILE
			Entrys.push("Oh god, DOM just fucked my brains out!")
		}else if(s[1] >=99 && s[2] == 0 && map[party.y][party.x].hostile){
		// FOOD HERO PEACE

		}else if(s[1] >=99 && s[2] == 0 && !map[party.y][party.x].hostile){
		// FOOD HERO HOSTILE

		}else
		//------------------------------------------------------------------------------------------
		if(((s[1] < 100 && s[2] < 100) || (s[1] >= 100 && s[2] >= 100)) && !map[party.y][party.x].hostile){
		// SAME PEACE
			Entrys.push("Oh wow, DOM just fucked SUB in front of me!")
		}else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && map[party.y][party.x].hostile){
		// SAME HOSTILE
			Entrys.push("Oh wow, DOM just fucked SUB!")
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && !map[party.y][party.x].hostile){
		// DIFF PEACE
			if(s[3] == 1){//FUCK
				Entrys.push("CDOM just ate out SUB until she was screaming!")
				Entrys.push("Oh wow, DOM just fucked SUB in front of me!")
			}else{//FAIL
				Entrys.push("CDOM trys to make a move on SUB but gets rejected.")
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		// DIFF HOSTILE
			if(s[3] == 1){//FUCK
				Entrys.push("Oh wow, DOM and SUB just made love! Now they're cuddling while they sleep.")
			}else{//FAIL
				Entrys.push("CDOM trys to make a move on SUB but gets rejected.")
			}
		}
	}
//###########################################################################################################################################################################
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
				if(s[1]>0){
					Entrys.push("CDOM doesn't look interested in getting eaten.")
					Entrys.push("CDOM isn't into being digested.")
					Entrys.push("CDOM shakes her head, she doesn't want to feed herself to SUB.")
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
			if(unit(s[1]).Tags[0] == "Froggirl"){//
				
			}
			Entrys.push("CDOM just fed herself to SUB!")
		}else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && map[party.y][party.x].hostile){
		// SAME HOSTILE

			Entrys.push("CDOM just fed herself to SUB!")
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
	 if(s[1] == 0){
		Entry = Entry.replace(/DOM/g, "me");
	 }else if(s[1] < 100){
		Entry = Entry.replace(/CDOM/g, "My "+String(unit(s[1]).Name).toLowerCase());
		Entry = Entry.replace(/DOM/g, "my "+String(unit(s[1]).Name).toLowerCase());
	 }else{
		Entry = Entry.replace(/CDOM/g, "The "+String(unit(s[1]).Name).toLowerCase()); 
		Entry = Entry.replace(/DOM/g, "the "+String(unit(s[1]).Name).toLowerCase()); 
	 }
	 if(s[2] == 0){
		Entry = Entry.replace(/SUB/g, "me");
	 }else if(s[2] < 100){
		Entry = Entry.replace(/CSUB/g, "My "+String(party.units[s[2]].Name).toLowerCase());
		Entry = Entry.replace(/SUB/g, "my "+String(party.units[s[2]].Name).toLowerCase());
	 }else{
		Entry = Entry.replace(/CSUB/g, "The "+String(map[party.y][party.x].units[s[2]-100].Name).toLowerCase());
		Entry = Entry.replace(/SUB/g, "the "+String(map[party.y][party.x].units[s[2]-100].Name).toLowerCase());
	 }
	 if(s[5]=="Dungeon"){
		Entry = Entry.replace(/GROUND/g, "brick");
	 }
	 if(s[5]=="Indoors"){
		Entry = Entry.replace(/GROUND/g, "floor");
	 }
	 if(s[5]=="Forest"){
		Entry = Entry.replace(/GROUND/g, "grass");
	 }
	 if(s[5]=="Cave"){
		Entry = Entry.replace(/GROUND/g, "stone");
	 }
	 Entry = Entry.replace(/GROUND/g, "ground");
	 
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
	if(Basic == 1){//HOSTILE-------------------------------------------------------------------------------------
		if(party.units.length == 1){//ALONE
			if(map[party.y][party.x].units.length == 1){//ONE THREAT
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Batgirl"){
						Entrys.push("While exploring inside AMAP AHOS finds me. She swoops down from the ceiling with a flourish. She looks ready for a fight!")
						if(map[party.y][party.x].units[0].Funny){
							Entrys.push("I hear laughing while exploring inside AMAP. From above AHOS swoops down and attacks me with a grin on her face!")
						}
					}else if(map[party.y][party.x].units[0].Tags[0] == "Slimegirl"){
						Entrys.push("While exploring inside AMAP AHOS finds me. She looks hungry, and ready for a meal!")
					}else{
						Entrys.push("While exploring inside AMAP AHOS finds me. She looks angry, and ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Dungeon"){
					if(map[party.y][party.x].name == "Boss"){
						Entrys.push("I walk into the Throneroom alone, ready for the final fight.")
						if(unit(100).Name == "Wolf Queen"){
							Entrys[Entrys.length-1] += "The Queen sits on her throne as I approach. She asks how such a meek creature like me is expecting to beat her. Words fail me as I nervously stand before her. The beautiful wolf stands and sets her crown on the throne before getting ready for our fight."
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
						Entrys.push("I hop into the MAP, and enjoy the feel of the water against my skin."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" From out of the water AHOS emerges looking angry at me. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt shes far away...")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("I wade through the waters of the MAP and feel refreshed."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" A bathing TAG looks pissed at my intrusion. She calls me a pervert and gets ready for a fight!")
					Entrys.push("I wade through the waters of the MAP and feel refreshed."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" A relaxing TAG looks surprised by my intrusion. She calls me a pervert and gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("I wade through the waters of the MAP, and feel refreshed."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" From out of the water AHOS emerges looking angry at me. She dives back down and starts swimming toward me, ready for a fight!")
						Entrys.push("I wade through the waters of the MAP, and feel refreshed."+choose([""," I don’t get to relax for long, though."," My time to relax is short lived however."," Not before long, my solitude is broken."," The water soaks into my pores and calms me. Such a moment can never last forever unfortunately."])+" From out of the water AHOS emerges looking angry at me. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt shes far away...")
					}
				}else{
					Entrys.push("I travel to AMAP, where I run into AHOS. She looks angry, and ready for a fight!")
				}
			}else{//MULTIPLE THREATS
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Batgirl"){
						Entrys.push("While exploring inside AMAP, a group of flying Batgirls found me! They look ready for a fight!")
					}else{
						Entrys.push("While exploring inside AMAP, a group of "+randomEntry("HostileDesc")+" TAGs found me! They look ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Dungeon"){
					if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Door"){
						Entrys.push("I walk farther into the castle and hear a low grumbling behind me, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway I just walked through! A group of TAGs come to investigate the noise, ready to fight!")
						map[party.y-lastMove[0]][party.x-lastMove[1]].travel = -1;
					}else{
						Entrys.push("I kick open the wooden door and charge inside. An alert group of TAGs stand guard in the next room, ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Foxgirl"){
						Entrys.push("I walk inside AMAP. A group of meditating TAGs glare at me! They stand, ready for a fight!")
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
						Entrys.push("I wade through the waters of the MAP, and feel refreshed. From out of the water, multiple TAGs emerge looking angry at me. They dive back down and start swimming toward me, ready for a fight!")
						Entrys.push("I wade through the waters of the MAP, and feel refreshed. From out of the water, multiple TAGs emerge looking angry at me. One flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see them anywhere, but I doubt they're far away...")
					}
				}else{
					Entrys.push("I travel to AMAP, and found a group of angry TAGs! They look ready for a fight!")
				}
			}
		}else{//HAVE FRIENDS
			if(map[party.y][party.x].units.length == 1){//ONE THREAT
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Batgirl"){
						Entrys.push("We spelunk inside AMAP. Above us, AHOS hangs from the ceiling and spots our group walking below. She drops and starts flying at us, ready for a fight!")
						Entrys.push("We spelunk inside AMAP. "+choose(["A drop of drool falls down onto my face.","I hear someone sneeze above us.","A bit of dirt sprinkles down onto "+AnyUnit.Name+"'s head."])+" I look up and see AHOS hanging from above as she watches our group pass below. She drops from the ceiling and glides down, ready for a fight!")
						Entrys.push("We spelunk inside AMAP. A drop of blood falls down onto my face. Trembling, I look up and see AHOS hanging from the ceiling."+choose([""," Her fangs are bright red from her last meal."," Her fangs are piercing the neck of a dead mousegirl, sucking out the last drops before tossing the body into the darkness!"])+" When she sees my group she smiles, revealing her bloody teeth. She's clearly ready for a fight!")
					}else if(map[party.y][party.x].units[0].Tags[0] == "Slimegirl"){
						Entrys.push("We spelunk inside AMAP. We stumble upon AHOS"+choose([" with drool running down her face. She must be hungry!"," drooling while she looks at us. She must be ready for a meal!"]))
						Entrys.push("We spelunk inside AMAP. We stumble upon a"+String(choose([" "," "," shiny "," transparent "," rippling "])+map[party.y][party.x].units[0].Name.replace(" Slimegirl"," ")).toLowerCase()+choose(["puddle","orb of goo","glob of goo stuck to a stalagmite","glob of goo hanging from a stalactite","blob"])+choose([" with a struggling mousegirl inside it. The mousegirl looks at me and waves frantically. She digests almost instantly when the slime suddenly takes the form of a woman"," with a humanoid skull within it. it plops out and rolls away haphazardly when the slime slowly takes the form of a woman"," with bones floating within it. They clatter to the ground as the slime slowly takes the form of a woman"," that quicky forms a humanoid shape",". It slowly takes on a feminine form",". When we get closer it morphs into a shapely woman"])+choose([". She looks ready for another meal!"," looking at us while licking her transparent lips. She must be hungry!"," whose drooling while she looks at us. She must be ready for a meal!",". She starts walking towards us, ready for a fight!"]))
					}else{
						Entrys.push("We spelunk inside AMAP. We stumble upon AHOS who looks ready for a fight!")
					}
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
							if(party.units.length == 2){
								Entrys[Entrys.length-1] += " My ANY gives my shoulder a reassuring squeeze before she shoves me forward and steps back."
							}else{
								Entrys[Entrys.length-1] += " The other girls sit on a bench along the back wall as I continue walking foward."
							}
						}
						Entrys[Entrys.length-1] += " I guess its expected that I fight alone. "
						if(unit(100).Name == "Wolf Queen"){
							Entrys[Entrys.length-1] += "The Queen sits on her throne as I approach. She asks how such a meek creature like me is expecting to beat her. Words fail me as I nervously stand before her. The beautiful wolf stands and sets her crown on the throne before getting ready for our fight."
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
							Entrys.push("My POS kicks open the wooden door and we charge inside. An alert TAG stands guard in the next room, ready for a fight!")
						}else{
							Entrys.push("I kick open the wooden door and we charge inside. An alert TAG stands guard in the next room, ready for a fight!")
						}
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Catgirl"){
						Entrys.push("We knock before entering AMAP. A "+choose(["sleeping ","snoring ","napping ","snoozing "])+"TAG suddenly wakes, looking pissed at her unexpected guests. She stands up with her claws out, ready for a fight!")
					}else{
						Entrys.push("We knock before entering AMAP. A relaxing TAG looks pissed at our intrusion. She stands up, ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A bathing TAG looks pissed at our intrusion. She gets ready for a fight!")
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A relaxing TAG looks surprised by our intrusion. She gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("We hop into the MAP, and enjoy a peaceful swim. From out of the water AHOS emerges looking angry at us. She dives back down and starts swimming our way, ready for a fight!")
						Entrys.push("We hop into the MAP, and enjoy a peaceful swim. From out of the water AHOS emerges looking angry at us. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt shes far away...")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("We wade through the waters of the MAP and feel refreshed. A bathing TAG looks pissed at our intrusion. She gets ready for a fight!")
					Entrys.push("We wade through the waters of the MAP and feel refreshed. A relaxing TAG looks surprised by our intrusion. She gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("We wade through the waters of the MAP, and feel refreshed. From out of the water AHOS emerges looking angry at us. She dives back down and starts swimming our way, ready for a fight!")
						Entrys.push("We wade through the waters of the MAP, and feel refreshed. From out of the water AHOS emerges looking angry at us. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt shes far away...")
					}
				}else{
					if(map[party.y][party.x].units[0].Positive){
						Entrys.push("We travel to AMAP. We run into AHOS who claims we are in her territory as she gets ready for a fight!")
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
					}else{
						Entrys.push("We spelunk inside AMAP. A group of "+randomEntry("HostileDesc")+" TAGs find us! They look ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Dungeon"){
					if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Door"){
						map[party.y-lastMove[0]][party.x-lastMove[1]].travel = -1;
						if(NegativeUnit != null){
							Entrys.push("We walk farther into the dungeon and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through! My NEG shrieks when she realizes we are trapped inside. A group of alert TAGs come to investigate the scream, ready to fight!")
						}else{
							Entrys.push("We walk farther into the dungeon and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through! A group of alert TAGs come to investigate the noise, ready to fight!")
						}
					}else{
						if(PositiveUnit != null){
							Entrys.push("My POS kicks open the wooden door and we charge inside. A group of alert TAGs stand guard in the next room, ready for a fight!")
						}else{
							Entrys.push("I kick open the wooden door and we charge inside. An alert group of TAGs stand guard in the next room, ready for a fight!")
						}
					}
				}else if(map[party.y][party.x].tag == "Indoors"){
					if(map[party.y][party.x].units[0].Tags[0] == "Foxgirl"){
						Entrys.push("We knock before entering AMAP. A group of meditating TAGs glare at us! They stand, ready for a fight!")
					}else{
						Entrys.push("We knock before entering AMAP. A group of angry TAGs glare at us! They look ready for a fight!")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A bathing TAG looks pissed at our intrusion. She gets ready for a fight!")
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A relaxing TAG looks surprised by our intrusion. She gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("We hop into the MAP, and enjoy a peaceful swim. From out of the water AHOS emerges looking angry at us. She dives back down and starts swimming our way, ready for a fight!")
						Entrys.push("We hop into the MAP, and enjoy a peaceful swim. From out of the water AHOS emerges looking angry at us. She flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see her anywhere, but I doubt shes far away...")
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("We wade through the waters of the MAP and feel refreshed. A bathing TAG looks pissed at our intrusion. She gets ready for a fight!")
					Entrys.push("We wade through the waters of the MAP and feel refreshed. A relaxing TAG looks surprised by our intrusion. She gets ready for a fight!")
					if(map[party.y][party.x].units[0].Tags[0] == "Froggirl"){
						Entrys = []
						Entrys.push("We wade through the waters of the MAP, and feel refreshed. From out of the water multiple TAGs emerge looking angry at us. They dive back down and start swimming our way, ready for a fight!")
						Entrys.push("We wade through the waters of the MAP, and feel refreshed. From out of the water multiple TAGs emerge looking angry at us. One flings her tongue at me forcing me to dive underwater! When I come up for air, I don't see them anywhere, but I doubt they're far away...")
					}
				}else{
					Entrys.push("We travel to AMAP, and found a group of angry TAGs! They look ready for a fight!")
				}
			}
		}
	}
	if(Basic == 2){//PASSIVE-------------------------------------------------------------------------------------
		if(party.units.length == 1){//ALONE
			if(map[party.y][party.x].units.length == 1){//ONE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Mousegirl"){
						Entrys.push("While exploring inside AMAP AHOS"+choose([" approaches me. She seems cautious, but puts on a friendly face."," approaches me. She was peaking behind a rock before coming forward.", " approaches me. She doesn't look like she wants to fight."," approaches me. She waves at me with a smile, I guess she doesn't consider me a threat."," approaches me. She was crawling out of the crevice she hid in, it looks like she just woke up."," approaches me. She seems friendly, I wonder why she lives in this cave."," approaches me. She clearly doesn't want to fight."," approaches me. She seems nice."," approaches me. She's smiling, but she nervously looks around the cave."," approaches me. She smiles when she sees me."," approaches me. Her face looks so cute!"," approaches me. She looks like easy prey!"," approaches me. My mouth is watering at the sight of her!"," approaches me. I wonder if she's interested in a little fun?"]))
					}else{
						Entrys.push("While exploring inside AMAP  AHOS finds me. She looks friendly, I dont think she wants to fight.")
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
							Entrys.push("I open the door to AMAP"+choose([", and walk inside. I'm greeted by ",", and make my way inside. I'm greeted by "])+"AHOS. While looking at me, she takes a meaty grip of her behind and says she's all mine!")
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
						Entrys.push("I travel to AMAP"+choose([" and meet AHOS. She seems friendly."," just in time to see AHOS fall out of a tree! I help her up as she laughs at her clumsiness.",". CAHOS peeks out from behind a tree. I give her a wave. She waves back as she approaches.",", and find AHOS leaning against a tree.",". CAHOS waves at me while she sits on a stump."]))
					}else if(unit(100).Positive){
						Entrys.push("I travel to AMAP"+choose([" and find AHOS"])+choose([" plucking mushrooms out of the ground. She has a small basket near her full of them."," digging out wild carrots growing in tall grass. She proudly shows me her overflowing basket of them."," picking berries. Her basket is almost full."," in a tree collecting apples. She tosses them into a basket with impressive aim!"]))
					}else if(unit(100).Negative){
						Entrys.push("I travel to AMAP"+choose([" and find AHOS"])+choose([" snoozing"," sleeping"," asleep"])+choose([" in the tall grass."," against a log."," beneath a tree."," under the shade of a tree."])+choose([" When she hears me approach, she leaps to her feet."," She wakes with a start."," Her eyes open and she looks at me nervously."," She wakes up as I approach, looking at me cautiously."]))
					}else if(unit(100).Funny){
						Entrys.push("I travel to AMAP."+choose([" CAHOS leaps out of a bush to scare me."," CAHOS leaps down from a tree to scare me."," CAHOS leaps out from behind a tree to scare me."])+choose([" I scream loudly until I realize she's just a small bunnygirl."," I fall back and shuffle away until I notice she's just a small bunnygirl."," I start to run away when she calls out. I turn and see she's just a small bunnygirl."])+choose([" She enjoys a laugh at my expense."," She grins as I try catching my breath."," She giggles when I admit she scared me."]))
						Entrys.push("I travel to AMAP"+choose([" and meet AHOS. She makes a funny face at me."," just in time to see AHOS fall out of a tree! I help her up as she laughs at her clumsiness.",". CAHOS peeks out from behind a tree. I give her a wave, and she does a cartwheel as she approaches.",", and find AHOS leaning against a tree. She makes a silly face at me.",". CAHOS waves at me while she sits on a stump."]))
					}else if(unit(100).Hungry){
						Entrys.push("I travel to AMAP"+choose([" and find AHOS"])+choose([" plucking mushrooms out of the ground. She gobbles them down one by one."," digging out wild carrots growing in tall grass. She munches each one down as she find them."," picking berries. Her face is covered in their juices."," in a tree looking for apples. She tosses the half eaten apples to the ground whenever she finds a new one."]))
					}else if(unit(100).Slutty){
						Entrys.push("I hear moaning as I travel to AMAP."+choose([" The sound is coming from around a tree."," The sound is coming from behind a log."," The sound is coming from inside a patch of tall grass."])+choose([" The moaning stops when I call out. A moment of silence grows until I hear a muffles squeal of pleasure from the same direction as earlier. CAHOS pokes her head out before walking up to me as if nothing had just happened, but I can see that her inner thighs are soaked."," The moaning stops as I approach, and AHOS pokes her head out before sauntering over to me."," A feminine voice squeals out in pleasure as I approach, AHOS pokes her head out to look at me. Her face is flush and she has a dopey grin. She greets me as she saunters over."]))
						unit(100).CPle += 2
					}
				}
				if(Entrys.length == 0){
					Entrys.push("I travel to AMAP, and meet AHOS."+choose([" She seems friendly!"," She doesn't seem hostile."]))//," A gust of wind coveres us in tiny leaves. We help brush eachother off."
				}
			}else{//MULTIPLE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Mousegirl"){
						Entrys.push("While exploring inside AMAP, a group of TAG"+choose(["s approach. They seem cautious, but friendly.","s approach me. They were peaking behind a rock before coming forward.", "s approach me. They don't look like they want to fight","s approach me. One waves at me with a smile, I guess they don't consider me a threat."]))
					}else{
						Entrys.push("While exploring inside AMAP, a group of TAGs find me. They look friendly, I dont think they want to fight.")
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
						Entrys.push("We spelunk inside AMAP and AHOS"+choose([" approaches us. She seems cautious, but puts on a friendly face."," approaches us. She was peaking behind a rock before coming forward.", " approaches us. She doesn't look like she wants to fight."," approaches us. She waves at me with a smile."," approaches us. She was crawling out of the crevice she hid in, it looks like she just woke up."," approaches us. She seems friendly, I wonder why she lives in this cave."," approaches us. She clearly doesn't want to fight."," approaches us. She seems nice."," approaches us. She's smiling, but she nervously looks around at my group."," approaches us. Her face looks so cute!"," approaches us. She looks like easy prey!"," approaches us. My mouth is watering at the sight of her!"," approaches us. I wonder if she's interested in a little fun?"]))
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
							unit(100).CPle = Math.round(unit(100).MPle - 3 - (Math.random()*4))
								Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS. With a naughty grin she asks if anyone need a bite!")
								Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS. While playing with her breasts she says we look hungry!")
								Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS. She shakes her tush at us and asks if she looks tasty!")
								Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS. While looking at us, she takes a meaty grip of her behind and says she's all ours!")
						}else if(map[party.y][party.x].units[0].Positive){
							Entrys.push(NPCstring+" AMAP, and we walk inside. We're greeted by  AHOS "+choose(["cleaning up her home.","chopping up some carrots.","washing some dishes."," sweeping the floor."]))
						}else if(map[party.y][party.x].units[0].Negative){
							Entrys.push(NPCstring+" AMAP, and we walk inside. A "+choose(["sleeping ","snoring ","napping ","snoozing "])+"TAG suddenly wakes, looking at us"+choose([" with groggy eyes"," surprised"," still half asleep"])+". She stands and stretches her arms, she doesn't seem too upset to be woken up.")
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
								Entrys.push(NPCstring+" AMAP, and we walk inside. A"+choose(["n eating "," munching "," snacking "])+"TAG sits at a table eating some "+choose(["carrot cake","chocolate cake","pumpkin pie","cheezy pizza","freshly baked bread","oranges","sliced watermelon","chopped apples"])+". She asks if there's something we'd like to eat, or maybe some bunny...")
							}else{
								Entrys.push(NPCstring+" AMAP, and we walk inside. A"+choose(["n eating "," munching "," snacking "])+"TAG sits at a table eating some "+choose(["carrot cake","chocolate cake","pumpkin pie","cheezy pizza","freshly baked bread","oranges","sliced watermelon","chopped apples"])+". She asks if anyone would like a slice.")
							}
						}else{
							Entrys.push("A"+choose([" cheerful "," happy "," friendly ","n energetic "])+"TAG opens the door to her MAP, and invites us inside. I duck my head as I walk in last, following the girls indoors.")
							Entrys.push(NPCstring+" AMAP, and we walk inside. A relaxing TAG greets us.")
						}
					}
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag != "Water" ){
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A bathing TAG looks shocked when she sees us. She calms down when I tell her we're just enjoying the water too.")
					Entrys.push("We hop into the MAP, and enjoy a peaceful swim. A relaxing TAG looks surprised by our intrusion. She calms down when I tell her we're just cooling off in the water.")
				}else if(map[party.y][party.x].tag == "Water" && map[party.y-lastMove[0]][party.x-lastMove[1]].tag == "Water" ){
					Entrys.push("We wade through the waters of the MAP, and enjoy a peaceful swim. A bathing TAG looks shocked when she sees us. She calms down when I tell her we're just enjoying the water too.")
					Entrys.push("We wade through the waters of the MAP, and enjoy a peaceful swim. A relaxing TAG looks surprised by our intrusion. She calms down when I tell her we're just cooling off in the water.")
				}else{
					Entrys.push("We travel to AMAP and meet AHOS. She seems friendly!")
					if(PositiveUnit != null){ 
						Entrys.push("We travel to AMAP and meet AHOS. My POS greets her with a cheerful smile!" )
						if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS returns the smile and says she's happy to meet us."}
						if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS is too shy to return the greeting, she barely manages to wave at us."}
						if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS walks past her to approach me. She pinches my cheek and says my face looks goofy. What kind of introduction is that!"}
						if(unit(100).Slutty){Entrys[Entrys.length-1] += " As the HOS greets her back, she doesn't take her eyes off my POST's chest."}
					}
					if(NegativeUnit != null){ 
						Entrys.push("We travel to AMAP and meet AHOS. My NEG hides behind me as I greet the other girl." )
						if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS tells my shy friend she doesnt need to hide. My NEG walks up nervously, and the two share a friendly hug."}
						if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS seems cautious as well, I guess it can scary meeting new people in this world..."}
						if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS makes a funny face at her. My NEG laughs and stops hiding behind me. I guess thats all it takes to make a new friend."}
						if(unit(100).Slutty){Entrys[Entrys.length-1] += " As the HOS greets us, she keeps taking peeks at my NEGT."}
					}
					if(FunnyUnit != null){ 
						Entrys.push("We travel to AMAP and meet AHOS. My FUN makes a funny face at her.")
						if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS laughs heartily and says we must have lots of fun on our travels."}
						if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS rolls her eyes unimpressed."}
						if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS makes an even goofier face back!"}
						if(unit(100).Slutty){Entrys[Entrys.length-1] += " The HOS pretends to laugh, but her attention is locked on my FUNT's chest instead."}
					}
					if(SluttyUnit != null){ 
						Entrys.push("We travel to AMAP and meet AHOS. My SLU looks her up and down with a naughty look in her eye." )
						if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS does a curtsy before introducing herself to us."}
						if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS blushes when she notices the other girls gaze."}
						if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS strikes a pose, and asks my SLU if she likes what she sees."}
						if(unit(100).Slutty){Entrys[Entrys.length-1] += " The HOS walks up and greets her with a kiss!"}
					}
					if(HungryUnit != null && HungryUnit.Feas > 6){ 
						Entrys.push("We travel to AMAP and meet AHOS. My HUN licks her lips at the sight of her!" )
						if(unit(100).willing){
							if(unit(100).Positive){Entrys[Entrys.length-1] += " The HOS doesn't seem bothered by my drooling HUNT and greets us with a smile."}
							if(unit(100).Funny){Entrys[Entrys.length-1] += " The HOS strikes a pose, and asks my HUN if she likes what she sees."}
							if(unit(100).Slutty){Entrys[Entrys.length-1] += " The HOS blows her a kiss!"}
						}else{
							if(unit(100).Negative){Entrys[Entrys.length-1] += " The HOS looks startled when she notices the other girls gaze."}
							if(unit(100).Hungry && HungryUnit.Feas > 6){Entrys[Entrys.length-1] += " The HOS give her a ravenous look back."}
						}
					
					}
				}
			}else{//MULTIPLE PASSIVE
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					if(map[party.y][party.x].units[0].Tags[0] == "Mousegirl"){
						Entrys.push("We spelunk inside AMAP. A group of TAG"+choose(["s approach us. They seem cautious, but friendly.","s approach us. They were peaking behind a rock before coming forward.", "s approach us. They don't look like they want to fight","s approach us. One waves at me with a smile, I guess they don't consider us a threat."]))
					}else{
						Entrys.push("We spelunk inside AMAP. A group of TAGs find us. They look friendly, I dont think they want to fight.")
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
	if(Basic == 3){//EMPTY-------------------------------------------------------------------------------------	
		if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "My Hut"){
			if(travel < 2){
				Logbook = "";
				if((map[party.y+lastMove[0]][party.x+lastMove[1]].name.includes("Cave") || map[party.y+lastMove[0]][party.x+lastMove[1]].name.includes("Cliff")) && (lastMove[1] == 0 || lastMove[0] == 0)){
					
					Entrys.push("My grand journey begins as I walk out of my hut towards AMAP. I'm immediately thwarted by a massive cliff! Why must my journey come to such an end! If only there was a path or trail I could follow instead of this insurmountable obstacle blocking my progress...")
				}else{
					Entrys.push("My grand journey begins as I walk out of my hut towards AMAP. A strong wind sends a shiver up my spine, reminding me that I'm completely nude.")
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
				Entrys.push("We return to my hut, I point at the spot where I was brought into this world from my own, but my "+unit(1).Name+" don't seem very interested...")
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
						Entrys.push("We enter a large cave. There is a faint light from some strange glowing mushrooms emerging from the stone walls. My FUN shouts as loudly as she can into the cave, and her voice echos back. If anyone is inside, they definitely heard her!")
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
						Entrys.push("I run ahead when I see a beam of light. It reveals a different way out of the cave!")
						Entrys.push("I run ahead when I see a beam of light. It reveals a different way out of the cave!")
						Entrys.push("I run ahead when I see a beam of light. It reveals a different way out of the cave!")
						Entrys.push("While wondering how far deep we are in the cave, I find a ladder leading up to a wooden hatch. When I flip it open, I feel the sun shining in my face. We found a new way out of the cave!")
						Entrys.push("I find a large stone disk resting against the cave wall. With some help I'm able to roll it to the side, revealing a path out of the cave!")
					}else{
						Entrys.push("My POS hurries ahead, saying she feels a breeze! She finds a different way out of the cave!")
					}
					Entrys.push("A beam of light reveals a different way out of the cave!")
					Entrys.push("We walk out of the cave as our eyes adjust to the bright daylight.")
					Entrys.push("The warmth of the sun hits my body as we make our way out of the cave.")
				}
			}
		}else if(map[party.y][party.x].tag == "Cave"){
			if(party.units.length == 1){//ALONE
				Entrys.push(choose(["Without anyone else I ","I ","While shivering in fear I ","Alone in the darkness I "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP.")
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
					Entrys.push(choose(["In the soft glow of the mushrooms, we ","Huddled together we ","Together we ","Through the darkness we ","We "])+choose(["explore","wander around","walk slowly","creep","lurk","spelunk","delve"])+" inside AMAP."+choose(["","","","",""," My NEG says she misses the sunlight."," My NEG asks how much farther do we have to go?"," My NEG says shes starting to get scared!"," My NEG is jumping at the slightest noise."," My NEG says shes sticky from the slimy ground."," My NEG says she has a cobweb stuck to her."]))
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
				}
			}
		}else if(map[party.y][party.x].tag == "Trail" || map[party.y][party.x].tag == "Road"){
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
					Entrys.push("I "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP."+GetMapHint())
				}else{//HAVE FRIENDS
					if(PositiveUnit != null && Math.random()<.5){
						Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My POS"+choose([" takes the lead"," walks ahead"," walks in front"," stays in front"," stays ahead"])+choose([".",".",".",".",".",".",", keeping an eye out for danger.",", alert for any threats."," to make sure its safe."]))
						if(party.units.length > 2){
							Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My POS"+choose([" leads us"," walks in front us"," walks ahead of us"," stays in front of us"," stays ahead of us"])+choose([".",".",".",".",".",".",", keeping an eye out for danger.",", alert for any threats."," to make sure its safe."]))
						}
					}
					if(NegativeUnit != null && Math.random()<.5){
						if(Math.random()<.20){
							Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My NEG"+choose([" sighs loudly and complains about"," whines about"," lags behind and gripes about"," doesn't stop complaining about"])+choose([" her feet hurting."," how tired she is."," how boring it is to travel."," wanting to take a nap."]))
						}
						if(party.units.length > 2){
							Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My NEG"+choose([" slows us down the whole way."," lags far behind us."," lags behind the whole way."," is slowly walking far behind us."," drags her feet the whole way."," struggles to keep up."," struggles to keep up, and makes us wait multiple times."]))
							if(Math.random()<.20){
								if(PositiveUnit != null && party.units.length > 3){
									Entrys[Entrys.length-1] += " My POS"+choose([" holds her hand and keeps her motivated."," stays by her side and keeps her spirits up."," stays behind with her and tells us to walk ahead."])
								}
								if(FunnyUnit != null){
									Entrys[Entrys.length-1] += " My FUN"+choose([" asks if we can just leave her behind."," calls her lazy."," tells her to keep up or go home."," says we should run as fast as we can to lose her."])
								}else if(HungryUnit != null && HungryUnit.Size >= NegativeUnit.Size){
									Entrys[Entrys.length-1] += " My HUN"+choose([" asks if we can just eat her."," threatens to eat her if she doesn't catch up."," asks if she can eat her so we don't have to walk so slow."," says we should just eat her."])
								}else if(SluttyUnit != null){
									Entrys[Entrys.length-1] += " My SLU"+choose([" asks if we have time for a quicky while we wait for her to catch up."])
								}
							}
						}
					}
					if(FunnyUnit != null && Math.random()<.1){
						Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My FUN"+choose([" tells a story"," holds my hand and tells me a story"," keeps us entertained by telling a story"," smiles while she tells a story"," helps pass the time by telling a story"])+choose([".",".",".",".","."," about a mousegirl who got caught by a spider."," about the time she ate a mermaid she found in a well."," about her sister who got eaten last year."," about when she fought the demon queen and won. She sounds serious the whole time."," about the time her mother caught her masturbating."," of the time she walked in on her sister and three other girls having an orgy."," of the time her sister came during dinner."," of the time her sister almost got eaten."," of the time she pulled her sister out of another girls maw."," about a haunted house full of ghosts."," about the time she got a cucumber stuck up her butt!"," about the time she ate the spiciest pepper ever!"," about the time she found her sister stuck in a tree."," about the time her sister pushed her into a raging river."," about the time she ate all of her sisters chocolate."," about an ogre made of layers."," about where she got her fist stuck inside for a full day."," about the time she sat on a mushroom."," of the time when the moon turned purple for a whole month."," of the time she ate a big purple mushroom and it turned her pee purple ever since."," of the time she almost got eaten by her mother after making her mad."," of the time she made another girl cum with just her toe."," about the time she got her whole leg stuck inside another girls muff."," about the time she swallowed an entire watermelon and it sprouted inside her."," about the time she came so hard she broke her bed."]))
						if(Math.random()<.25){
							if(PositiveUnit != null){
								Entrys[Entrys.length-1] += " My POS"+choose([" listens with interest the whole time."," asks a bunch of questions when she's done."," looked amazed the whole time."])
							}else if(NegativeUnit != null){
								Entrys[Entrys.length-1] += " My NEG"+choose([" sighs and said she's never heard such a boring story."," yawns and doesn't seem very impressed."," asks if she knows any better stories."," doesn't bother to listen."])
							}
						}
						Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My FUN"+choose([" tells a bunch of jokes"," holds my hand and tells me a long joke"," tells silly jokes"," smiles as she tells a silly tale"," grins as she tells me horrible jokes"])+choose([".",".",".",".","."," to help pass the time"," while we walk.",". I laugh throughout the journey.",", it helps the journey go faster."," about passing gas."," about all the places a mousegirl will fit."," about the demon queen."]))
					}
					if(SluttyUnit != null && Math.random()<.1){
						Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My SLU"+choose([" keeps grabbing my butt throughout the journey"," walks right behind me"," spanks me as we walk"," keeps checking me out"," stares at my butt throughout the journey"])+choose([".",".","."," while she casually fingers herself!"," while asking if I want to get frisky."," while saying she wants me.",". She says she's getting too turned on to travel.",". She asks if we can take a break to get randy."]))
					}
					if(HungryUnit != null && Math.random()<.1){
						Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My HUN"+choose([" sighs loudly and complains about"," whines about"," lags behind and gripes about"," doesn't stop talking about","'s stomach grumbles as she talks about"])+choose([" needing something to eat."," how empty her belly is."," how hungry she is."," how long its been since her last meal."," how she's withering away from all this travel without anything to eat."," stopping to find some food."]))
						if(WillingUnit != null && HungryUnit.Size >= WillingUnit.Size && WillingUnit != HungryUnit){
						Entrys[Entrys.length-1] += " My WIL"+choose([" tells her she wouldn't mind getting eaten."," says we can eat her whenever we want."," tells us she's ready to be eaten."," tells us we should eat her before someone else gets the chance."," tells her she's the perfect meal for a long journey."])
						}
					}
					if(WillingUnit != null && Math.random()<.1){
						Entrys.push("We "+choose(["walk along","follow", "travel"," continue along"])+" AMAP. My WIL"+choose(["","","","",""," rubs my stomach while she"," pats my stomach and"," walks besides me and"," holds my hand as she"])+choose([" asks if all this travel is giving me an appetite."," asks if all this walking is making me hungry."," asks if I want to stop and eat."," asks if my belly is getting hungry."," asks if we should take a break to eat."," asks how I'm not already starving from our long journey."])+choose(["","","",""," She says she wouldn't mind if I ate her."," She says I can eat her whenever I want."," She says I should eat her so I don't become malnourished!"," She tells me she's ready to be eaten whenever I get a craving for her."," She tells me I should eat her before someone else gets the chance."," She tells me she's the perfect meal for a long journey."]))
					}
					if(Entrys.length == 0){
						if(Math.random() < .1 && map[party.y][party.x].name.includes("Rocky")){
							Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet start to hurt on the rough stones.")
						}else if(Math.random() < .1 && map[party.y][party.x].name.includes("Muddy")){
							Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet are totally covered in grime now.")
						}else if(Math.random() < .1 && map[party.y][party.x].name.includes("Overgrown")){
							Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. My feet are getting cut from the wild bramble on the path.")
						}else if(Math.random() < .1 && map[party.y][party.x].name.includes("Faded")){
							Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. I wonder how long its been since someone else came this way.")
						}else if(Math.random() < .1 && map[party.y][party.x].name.includes("Narrow")){
							Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. We have to walk single file at times.")
						}else if(Math.random() < .1 && map[party.y][party.x].name.includes("Rutted")){
							Entrys.push("We "+choose(["walk along ","follow", "travel"," continue along"])+" AMAP. I almost trip on the large grooves made by a wagon or cart.")
						}
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
				LogEntry((map[party.y-lastMove[0]][party.x-lastMove[1]].travel) +" - "+ (travel))
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
						if(PositiveUnit != null){
							Entrys.push("My POS steps into the massive entranceway of the castle before motioning us to follow.")
						}else if(NegativeUnit != null){
							Entrys.push("We step into the massive entranceway of the castle. My NEG grabs my arm and tries to walk us back outside. I give her a hug and tell her she'll be safe.")
						}else{
							Entrys.push("We step into the massive entranceway of the castle.")
						}
						if(FunnyUnit != null){
							Entrys[Entrys.length-1] += " The seriousness of the situation is broken when my FUN toots. She only shrugs when I look back at her."
						}else if(HungryUnit != null){
							Entrys[Entrys.length-1] += " The seriousness of the situation is broken when my HUNs stomach growls loudly. She pouts when I look back at her."
						}else if(SluttyUnit != null){
							Entrys[Entrys.length-1] += " The seriousness of the situation is broken when my SLU smacks my ass. She grins and tells me to relax."
						}
					}else{
						Entrys.push("We once again step into the massive entranceway of the castle.")
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
					}else{
						Entrys.push("I kick open the wooden door and charge inside. I rush into the room before realizing its empty.")
					}
				}else{
					if(map[party.y-lastMove[0]][party.x-lastMove[1]].name == "Door" && map[party.y][party.x].travel == -1){
						map[party.y-lastMove[0]][party.x-lastMove[1]].travel = -1;
						if(NegativeUnit != null){
							Entrys.push("We walk farther into the dungeon and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through! My NEG shrieks when she realizes we are trapped inside.")
						}else{
							Entrys.push("We walk farther into the dungeon and hear a low grumbling behind us, I turn expecting to see a monstergirl but find the noise is from a stone door sliding closed over the hallway we just walked through!")
						}
					}else if(map[party.y][party.x].travel > -1){
						Entrys.push("We retrace our steps and walk into an empty room.")
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
								Entrys.push("I kick open the wooden door and we charge inside before noticing the rooms empty. My SLU hugs me from behind, telling me how brave I am. She starts reaching between my legs, but I slap her hand away, we need to stay focused in here!")
							}
							Entrys.push("I kick open the wooden door and we charge inside before noticing the rooms empty.")
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
						Entrys.push("We travel to AMAP.")
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
	
	
	return Entry
}
function GetMapHint(){
	var NPC = FindPersonality("Positive",true)
	var NPCstring = ""
	var Entrys = []
	if(NPC == null){
		NPCstring = choose([" I see"," I spot"," I notice"])
	}else{
		NPCstring = choose([" My POS sees"," My POS spots"," My POS notices"])
	}
	if(GetMap(party.y,party.x).travel == -1){
		if(GetMap(party.y-1,party.x).tag == "Forest" && GetMap(party.y-1,party.x).units.length == 1 && lastMove[0] != -1){
			if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Bunnygirl"){
				Entrys.push(NPCstring+" small footprints heading north...") 
				Entrys.push(NPCstring+" a bunch of carrot bits making a trail north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small footprints heading north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" small footprints heading north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" footprints heading north...")
			}else if(GetMap(party.y-1,party.x).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying north...")
			} 
		}else if(GetMap(party.y+1,party.x).tag == "Forest" && GetMap(party.y+1,party.x).units.length == 1 && lastMove[0] != 1){
			if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Bunnygirl"){
				Entrys.push(NPCstring+" small footprints heading south...") 
				Entrys.push(NPCstring+" a bunch of carrot bits making a trail south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small footprints heading south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" small footprints heading south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" footprints heading south...")
			}else if(GetMap(party.y+1,party.x).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying south...")
			} 
		}else if(GetMap(party.y,party.x-1).tag == "Forest" && GetMap(party.y,party.x-1).units.length == 1 && lastMove[1] != -1){
			if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Bunnygirl"){
				Entrys.push(NPCstring+" small footprints heading west...") 
				Entrys.push(NPCstring+" a bunch of carrot bits making a trail west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small footprints heading west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" small footprints heading west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" footprints heading west...")
			}else if(GetMap(party.y,party.x-1).units[0].Tags[0] == "Batgirl" && Math.random()<.1){
				Entrys.push(NPCstring+" a Batgirl overhead. Shes flying west...")
			} 
		}else if(GetMap(party.y,party.x+1).tag == "Forest" && GetMap(party.y,party.x+1).units.length == 1 && lastMove[1] != 1){
			if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Bunnygirl"){
				Entrys.push(NPCstring+" small footprints heading east...") 
				Entrys.push(NPCstring+" a bunch of carrot bits making a trail east...") 
			}else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Foxgirl"){
				Entrys.push(NPCstring+" small footprints heading east...")
			}else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Catgirl"){
				Entrys.push(NPCstring+" small footprints heading east...")
			}else if(GetMap(party.y,party.x+1).units[0].Tags[0] == "Wolfgirl"){
				Entrys.push(NPCstring+" footprints heading east...")
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
				Entrys.push(" The wind is very strong here.")
				Entrys.push(" The wind is very strong here. I almost topple over.")
				Entrys.push(" The wind is pretty strong here.")
				Entrys.push(" The wind is pretty strong here, it feels refreshing.")
				Entrys.push(" The wind sends ripples along the grass, making the plains look like an ocean!")
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
function DescWord(Entry,Bod, Chance=50){
	//-1:flat _ 0:normal _ 1:perky _ 2:Large
	//-1:slim _ 0:normal _ 1:toned _ 2:heavy
	if(Math.random()*100 > Chance){
		return ""
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
			return choose(["midriff",choose(["","hard ","firm "])+"abs","ribs"])
		}
		if(Entry.butt == 2){
			return (choose(["","","squishy ","soft "])+choose(["belly","middle","stomach"]))
		}
	}
	if(Bod == "butt"){
		if(Entry.butt == -1){
			return choose(["cute little "])
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
			return choose(["modest ","soft ","tiny "])
		}
		if(Entry.bust == 0){
			return choose(["","","soft "])
		}
		if(Entry.bust == 1){
			return choose(["pert ","firm ","full ","soft ","perfect "])
		}
		if(Entry.bust == 2){
			return choose(["ample ","heavy ","large ","full "])
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
}
function AR(Entry){// ACTION RANDOMIZER
	//return Math.round((Entry*.75)+(Math.random()*Entry)*.50)
	return Math.max(Math.round(Entry + (Math.random()*3) - (Math.random()*3)),1)
}
function SR(Entry){// STAT RANDOMIZER 7 = 5-9
	return Math.max(Math.round(Entry + (Math.random()*2) - (Math.random()*2)),1)
}
function choose(Entrys){
	if(Entrys.length == 0){Entrys.push("not available yet");}
	return Entrys[Math.floor(Math.random()*Entrys.length)];
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
			if(Personality == "Positive" && unit(i).Positive && Entrys.length == 0){Entrys.push(unit(i))}
			if(Personality == "Negative" && unit(i).Negative){Entrys.push(unit(i))}
			if(Personality == "Funny" && unit(i).Funny){Entrys.push(unit(i))}
			if(Personality == "Slutty" && unit(i).Slutty){Entrys.push(unit(i))}
			if(Personality == "Hungry" && unit(i).Hungry){Entrys.push(unit(i))}
			if(Personality == "Vanilla" && unit(i).Vanilla){Entrys.push(unit(i))}
			if(Personality == "Any"){Entrys.push(unit(i))}
			if(Personality == "Willing" && unit(i).willing && unit(i).Vanilla){Entrys.push(unit(i))}
			i++;
		}
	}else{
		while(i < party.units.length){
			if(!unit(i).fled && !unit(i).asleep && Personality == "Positive" && unit(i).Positive && Entrys.length == 0){Entrys.push(unit(i))}
			if(!unit(i).fled && !unit(i).asleep && Personality == "Negative" && unit(i).Negative){Entrys.push(unit(i))}
			if(!unit(i).fled && !unit(i).asleep && Personality == "Funny" && unit(i).Funny){Entrys.push(unit(i))}
			if(!unit(i).fled && !unit(i).asleep && Personality == "Slutty" && unit(i).Slutty){Entrys.push(unit(i))}
			if(!unit(i).fled && !unit(i).asleep && Personality == "Hungry" && unit(i).Hungry){Entrys.push(unit(i))}
			if(!unit(i).fled && !unit(i).asleep && Personality == "Vanilla" && unit(i).Vanilla){Entrys.push(unit(i))}
			if(!unit(i).fled && !unit(i).asleep && Personality == "Any"){Entrys.push(unit(i))}
			if(!unit(i).fled && !unit(i).asleep && Personality == "Willing" && unit(i).willing && unit(i).Vanilla){Entrys.push(unit(i))}
			i++;
		}
	}
	if(Entrys.length == 0){Entrys.push(null);}
	return Entrys[Math.floor(Math.random()*Entrys.length)];
}
function SpawnMobs(i,o,land){
	var dice = (Math.floor(Math.random()*1000))/10//0-99.9
	var quantity = 0;
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
		}else if(dice > 64.9){//.01 chance
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
		 }
		
	}else if(land == "DungeonWolf"){
		quantity = .5 + Math.random()*2;
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
	}else if(land == "BossWolf"){
		map[i][o].hostile=true;
		map[i][o].units.push({
		Name:"Wolf Queen",
		CPun:0,
		CPle:0,
		MPun:defaultstat("Wolfgirl","MPun")+10,
		MPle:defaultstat("Wolfgirl","MPle")+10,
		Figh:SR(defaultstat("Wolfgirl","Figh")),
		Feas:SR(defaultstat("Wolfgirl","Feas")),
		Flir:SR(defaultstat("Wolfgirl","Flir")),
		Fuck:SR(defaultstat("Wolfgirl","Fuck")),
		Flee:SR(defaultstat("Wolfgirl","Flee")),
		Feed:SR(defaultstat("Wolfgirl","Feed")),
		Tags:["Wolfgirl","Medium"],
		willing:false,
		Cond:[]
		})
	}else if(land == "FortWolf"){
		map[i][o].hostile=true;
		quantity = .5 + Math.random()*3;
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
		if(dice > 90){
			map[i][o] = {tag:"Forest",name:randomEntry("WolfForest"),units:[],hostile:true};
			quantity = .5 + Math.random()*1;
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
		 }else if(dice > 88){
			map[i][o] = {tag:"Indoors",name:"Spacious Lodge",units:[],hostile:true};
			quantity = .8 + Math.random()*4;
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
		 }
	}else if(land == "RiverMundane"){
		if(dice > 70){
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
		if(dice > 96){
			map[i][o].name="Flowery Plains";
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
		}else if(dice > 94){
			map[i][o].name="Flowery Plains";
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
	}else if(land == "Cave"){
		if(dice > 70){
			map[i][o].hostile = true;
			if(Math.random()<.8){
				quantity = 1 + Math.random()*1.2;
			}else{
				quantity = 1
			}
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
		}else if(dice > 40){
			map[i][o].hostile = true;
			quantity = .2 + Math.random()*1;
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
		}else if(dice > 30){
			map[i][o].hostile = false;
			quantity = .05 + Math.random()*1;
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
			quantity = .01 + Math.random()*3;
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
			quantity = .2 + Math.random()*2;
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
			quantity = .2 + Math.random()*2;
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
	}
	//--------------------

	
//SET UNIQUE LAND
	if(map[i][o].name == "Cave Entranceasdf"){
		map[i][o].clr="#999977";
		map[i][o].tag="Underground"
	}else if(map[i][o].name == "Sunny Clearing"){
		map[i][o].clr="#55ee88";
		map[i][o].tag="Clearing"
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
		map[i][o].tag="Water"
	}else if((map[i][o].name.includes("Oak") || map[i][o].name.includes("Pine")|| map[i][o].name.includes("Maple")|| map[i][o].name.includes("Cedar")|| map[i][o].name.includes("Birch")|| map[i][o].name.includes("Redwood")|| map[i][o].name.includes("Apple-Tree")) ){
		map[i][o].clr = "#22bb55" 
	}else if(map[i][o].name == "Cozy Burrow" ||map[i][o].name == "Spacious Lodge" || map[i][o].name == "Treehouse" || map[i][o].name == "Strange Temple" || map[i][o].name.includes("Farmhouse") || map[i][o].name.includes("Hut") || map[i][o].name.includes("Cabin") || map[i][o].name.includes("Cottage") || map[i][o].name.includes("House") || map[i][o].name.includes("Shack") || map[i][o].name.includes("Red Barn") || map[i][o].name.includes("Shed") || map[i][o].name.includes("Windmill")){
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

//
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
		if(o < 100){
			party.units[0].CPle = Math.max(party.units[0].CPle-party.units[o].Size*eatValue*2,0)
			increaseValue = party.units[o].Size
		}else{
			party.units[0].CPle = Math.max(party.units[0].CPle-map[party.y][party.x].units[o-100].Size*eatValue*2,0)
			increaseValue = map[party.y][party.x].units[o-100].Size
		}
	}else if(i < 100){//GOOD
		if(unit(i).CPle < unit(i).CPle.MPle){
			if(action == 5){
				unit(i).CPle = Math.min(unit(i).CPle+AR(unit(o).Size*unit(o).Feed),unit(i).MPle-1)
			}else{
				unit(i).CPle = Math.min(unit(i).CPle+AR(unit(o).Size),unit(i).MPle-1)
			}
		}
	}
	increaseValue = 1;
	while(eatQuantity > 0){
		eatQuantity--;
		increases+=increaseValue;
		u = Math.floor(Math.random()*6)
		if(u <= 1 && unit(i).Figh < defaultstat(unit(i).Tags[0],"Figh")+unit(o).Feed){//DOUBLE CHANCE FOR FIGHT TO INCREASE
			unit(i).Figh+=increaseValue;
			Figh+=increaseValue;
		}else if(u <= 2 && unit(i).Flir < defaultstat(unit(i).Tags[0],"Flir")+unit(o).Feed){
			unit(i).Flir+=increaseValue;
			Flir+=increaseValue;
		}else if(u <= 3 && unit(i).Flee < defaultstat(unit(i).Tags[0],"Flee")+unit(o).Feed){
			unit(i).Flee+=increaseValue;
			Flee+=increaseValue;
		}else if(u <= 4 && unit(i).Feas < defaultstat(unit(i).Tags[0],"Feas")+unit(o).Feed){
			unit(i).Feas+=increaseValue;
			Feas+=increaseValue;
		}else if(u <= 5 && unit(i).Fuck < defaultstat(unit(i).Tags[0],"Fuck")+unit(o).Feed){
			unit(i).Fuck+=increaseValue;
			Fuck+=increaseValue;
		}else if(unit(i).Feed < defaultstat(unit(i).Tags[0],"Feed")+unit(o).Feed){
			unit(i).Feed+=increaseValue;
			Feed+=increaseValue;
		}
	}
	return ("<br>Increases(Figh:"+Figh+" Flir:"+Flir+" Flee:"+Flee+" Feas:"+Feas+" Fuck:"+Fuck+" Feed:"+Feed+")")
	//LogEntry("Stats increased by:"+increases)
}
function unit (Entry){
	if(Entry<100){
		return party.units[Entry];
	}else{
		return map[party.y][party.x].units[Entry-100];
	}
}

function defaultstat(R,F){
	if(R == "Human"){
		if(F == "MPun"){
		 return 30;//30
		}
		if(F == "MPle"){
		 return 10;
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
		 return 15;
		}
		if(F == "Fuck"){
		 return 15;
		}
		if(F == "Feed"){
		 return 5;
		}
	}
	if(R == "Bunnygirl"){
		if(F == "MPun"){
		 return 5;
		}
		if(F == "MPle"){
		 return 15;
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
		 return 10;
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
}
//RAND-END--------------------------------------------------------------------
</script>
</html>
