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
	font-family: "Consolas", "Lucida Console", Monaco, monospace;
	font-size: 12px;
	background-color: grey;
	text-align: center;
	margin: auto;

}
.mapspan {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
	display: inline-block;
	
}
.btn {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
}
.btndis {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
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
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
	padding: 10px;
	margin: 5px;
	border: none;
	background-color:#ffee88;
	font-weight: bold;
	border-radius: 4px;
}
.btnavl {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
  padding: 10px;
  margin: 5px;
  border: none;
  background-color:#88cccc;
  border-radius: 4px;
}
.land {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
  padding: 10px;
  margin: 0px;
  border: none;
  border-radius: 4px;
}
.landdis {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
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
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bolder;
	font-size: 14px;
	padding: 10px;
	margin: 0px;
	border: none;
	background-color:#ffee88;
	font-weight: bold;
	border-radius: 4px;
}
.landactdis {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bolder;
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
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
  padding: 10px;
  margin: 0px;
  border: none;
  background-color:#88cccc;
  border-radius: 4px;
}
.nam {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
	border: none;
	border-radius: 2px;
}
.namdis {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
	border: none;
	pointer-events: none;
	user-select: none;
	background-color: #cccccc;
	color:#333333;
	border-radius: 2px;
}
.namact {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
	border: none;
	background-color:#ffee88;
	font-weight: bold;
	border-radius: 2px;
}
.namavl {
	font-family: "Segoe Print","Segoe Print", cursive;font-weight: bold;
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
        </style>
</head>

<body>

<div id="content" class="container">
<div id="status">
Put a status and menu bar here someday!
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
//document.getElementById("content").innerHTML = "404";


function GetMapTile(i,o){//NEW TILES TO MAKE 5,16,19
	if(i < 0){i = map.length-1;}
	if(i == map.length){i = 0;}
	if(o < 0){o = map[0].length-1;}
	if(o == map[0].length){o = 0;}
	
	if(map[i][o].name == undefined){
		EventCountdown--;
		if(map[i][o] == 0){
			map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
		}
		if(map[i][o] == 1){
			map[i][o] = {tag:"Forest",name:randomEntry("Forest"),units:[],hostile:false,clr:"#77cc55"};
			SpawnMobs(i,o,"Forest");//will also change name of map tile
		}
		if(map[i][o] == 2){
			map[i][o] = {tag:"ForestWolf",name:randomEntry("Forest"),units:[],hostile:false,clr:"#77cc55"};
			SpawnMobs(i,o,"ForestWolf");//will also change name of map tile
		}
		if(map[i][o] == 4){
			map[i][o] = {tag:"Plains",name:randomEntry("Plains"),units:[],hostile:false,clr:"#aaff77"};
			SpawnMobs(i,o,"Plains");//will also change name of map tile
		}
		if(map[i][o] == 5){
			map[i][o] = {tag:"Farm",name:randomEntry("Farm"),units:[],hostile:false,clr:"#88cc22"};
			SpawnMobs(i,o,"Farm");//will also change name of map tile
		}
		if(map[i][o] == 7){//SAFE
			map[i][o] = {tag:"Trail",name:randomEntry("Trail"),units:[],hostile:false,clr:"#eeee88"};
		}
		if(map[i][o] == 8){//SAFE
			map[i][o] = {tag:"Road",name:randomEntry("Road"),units:[],hostile:false,clr:"#cccc77"};
		}
		if(map[i][o] == 9){//SAFE
			map[i][o] = {tag:"Bridge",name:"Bridge",units:[],hostile:false,clr:"#888866"};
		}
		if(map[i][o] == 13){//SAFE
			map[i][o] = {tag:"Water",name:"River",units:[],hostile:false,clr:"#77bbdd"};
		}
		if(map[i][o] == 16){//SAFE
			map[i][o] = {tag:"Water",name:"Lake",units:[],hostile:false,clr:"#4488bb"};
		}
		if(map[i][o] == 19){//SAFE
			map[i][o] = {tag:"Water",name:"Beach",units:[],hostile:false,clr:"#eeeeaa"};
		}
		if(map[i][o] == 22){//Cave Entrance 
			map[i][o] = {tag:"Entrance",name:"Cave Opening",altname:"Cave Opening",units:[],hostile:false,clr:"#999977"};
		}
		if(map[i][o] == 23){//Cave Entrance LIGHT
			if(Math.random()<.50){
				map[i][o] = {tag:"Entrance",name:"Cave Opening",altname:"Cave Opening",units:[],hostile:false,clr:"#999977"};
			}else{
				map[i][o] = {tag:"Cave",name:randomEntry("Cliff"),altname:"Big Cave",units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"CaveEnd");//will also change name of map tile
				//Spawn Cave Mobs CaveEnd
			}
		}
		if(map[i][o] == 24){//Cave Entrance BOSS
			if(Math.random()<.25){
				map[i][o] = {tag:"Entrance",name:"Cave Opening",altname:"Cave Opening",units:[],hostile:false,clr:"#999977"};
			}else{
				map[i][o] = {tag:"Cave",name:randomEntry("Cliff"),altname:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
				//Spawn Light Boss Fight
			}
		}
		if(map[i][o] == 25){//Cave Entrance BOSS
			if(CavePath != 0){
				map[i][o] = {tag:"Cave",name:randomEntry("Cliff"),altname:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"Cave");//will also change name of map tile
			}else{
				map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
			}
		}
		if(map[i][o] == 26){//Cave Entrance BOSS
			if(CavePath != 1){
				map[i][o] = {tag:"Cave",name:randomEntry("Cliff"),altname:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"Cave");//will also change name of map tile
			}else{
				map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
			}
		}
		if(map[i][o] == 27){//Cave Entrance BOSS
			if(CavePath != 2){
				map[i][o] = {tag:"Cave",name:randomEntry("Cliff"),altname:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
				SpawnMobs(i,o,"Cave");//will also change name of map tile
			}else{
				map[i][o] = {tag:"Cliff",name:randomEntry("Cliff"),units:[],hostile:false,clr:"#cccccc"};
			}
		}
		if(map[i][o] == 28){//Cave LIGHT
			map[i][o] = {tag:"Cave",name:randomEntry("Cliff"),altname:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
			SpawnMobs(i,o,"Cave");//will also change name of map tile
		}
		if(map[i][o] == 31){//NEED TO MAKE LIGHT BOSS SETUP
			map[i][o] = {tag:"Cave",name:randomEntry("Cliff"),altname:randomEntry("Cave"),units:[],hostile:false,clr:"#cccccc"};
			SpawnMobs(i,o,"Cave");//will also change name of map tile
		}
		if(map[i][o] == 37){
			map[i][o] = {tag:"Indoors",name:"Guard Tower",units:[],hostile:false,clr:"#aaaa66"};
			SpawnMobs(i,o,"FortWolf");//will also change name of map tile
		}
		if(map[i][o] == 97){//
			map[i][o] = {tag:"Water",name:"Waterfall",units:[],hostile:false,clr:"#4488aa"};
		}
		if(map[i][o] == 98){//MAKE WOLF QUEEN HERE
			map[i][o] = {tag:"Indoors",name:"Guard Tower",units:[],hostile:false,clr:"#77cc55"};
			SpawnMobs(i,o,"FortWolf");//will also change name of map tile
		}
	}//CavePath25
	
	//---------------------------------------------------------------------------------------------------------------------
	
	if(map[party.y][party.x].tag == "Entrance"){
		if(map[i][o].tag == "Entrance"){
			return "<span class=\"caveText\">"+map[i][o].altname+"</span>";
		}else if(map[i][o].tag == "Cave"){
			return "<span class=\"caveText\">"+map[i][o].altname+"</span>";
		}else if(map[i][o].tag == "Cliff"){
			return "<span class=\"caveText\">. . . . . .</span>";
		}else{
			return map[i][o].name;
		}
	}else if(map[party.y][party.x].tag == "Cave"){
		if(map[i][o] == map[party.y][party.x]){
			return "<span class=\"caveText\">"+map[i][o].altname+"</span>";
		}else if(map[i][o].tag == "Cave" || map[i][o].tag == "Entrance"){
			return "<span class=\"caveText\">? ? ? ?</span>";
		}else{
			return "<span class=\"caveText\">. . . .</span>";
		}
	}else{
		return map[i][o].name;
	}
}
function GetMapTileColor(i,o){
	if(i < 0){i = map.length-1;}
	if(i == map.length){i = 0;}
	if(o < 0){o = map[0].length-1;}
	if(o == map[0].length){o = 0;}

	if(map[party.y][party.x].tag == "Entrance"){
		if(map[i][o].tag == "Cave" || map[i][o].tag == "Entrance"){
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
//WALKMAIN--------------------------------------------------------------------
function Walk(i,o){
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
	party.y += i

	GetMapTile(party.y,party.x)
	if(map[party.y][party.x].tag == "Trail"){//EVENTS CAN HAPPEN OFF OF TRAILS??
		if(EventCountdown <= 0 && Math.random()<.1){
			//MAKE AN EVENT
			LogEntry("An event could have fired now!")
			EventCountdown = (Math.round(Math.random()*100+50))
		}
	}
	
	Status()//NOT SURE THIS CAN BE HERE
	
	
	if(map[party.y][party.x].tag == "Cliff" || map[party.y][party.x].tag == "Wall"){
		party.x -= o;
		party.y -= i;
		if(map[party.y][party.x].tag != "Entrance" && map[party.y][party.x].tag != "Cave"){
			LogEntry(randomEntry("Cliffhit"));
		}else{
			LogEntry("There doesn't seem to be anything this way. I hope I'm not getting lost in here...");
		}
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
		if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
			if(party.units.length == 1){
				if(map[party.y][party.x].units.length > 1){
					LogEntry("Inside"+N(map[party.y][party.x].altname)+" a group of "+randomEntry("HostileDesc")+" "+map[party.y][party.x].units[0].Tags[0]+"s found me! They look ready for a fight!")
				}else{
					LogEntry("Inside"+N(map[party.y][party.x].altname)+" "+N(map[party.y][party.x].units[0].Name)+"found me. She looks "+randomEntry("HostileDesc")+randomEntry("Hostile"+map[party.y][party.x].units[0].Tags[0]))
				}
			}else{
				if(map[party.y][party.x].units.length > 1){
					LogEntry("We spelunked inside"+N(map[party.y][party.x].altname)+", and found a group of "+randomEntry("HostileDesc")+" "+map[party.y][party.x].units[0].Tags[0]+"s! They look ready for a fight!")
				}else{
					LogEntry("We spelunked inside"+N(map[party.y][party.x].altname)+". We ran into"+N(map[party.y][party.x].units[0].Name)+" who looks "+randomEntry("HostileDesc")+randomEntry("Hostile"+map[party.y][party.x].units[0].Tags[0]))
				}
			}
		}else{
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
		}

		//unclickable buttons
		document.getElementById("west").innerHTML = 
		"<button id=\"NW\" class=\"landdis\">"+GetMapTile(party.y-1,party.x-1)+"</button><br><br>"+
		"<button id=\"CW\" class=\"landdis\">"+GetMapTile(party.y  ,party.x-1)+"</button><br><br>"+
		"<button id=\"SW\" class=\"landdis\">"+GetMapTile(party.y+1,party.x-1)+"</button><br><br>";
		document.getElementById("cent").innerHTML = 
		"<button id=\"NC\" class=\"landdis\">"+GetMapTile(party.y-1,party.x)+"</button><br><br>"+
	    "<button id=\"CC\" class=\"landactdis\"> > "+GetMapTile(party.y  ,party.x)+" < </button><br><br>"+
		"<button id=\"SC\" class=\"landdis\">"+GetMapTile(party.y+1,party.x)+"</button><br><br>";
		document.getElementById("east").innerHTML = 
		"<button id=\"NE\" class=\"landdis\">"+GetMapTile(party.y-1,party.x+1)+"</button><br><br>"+
		"<button id=\"CE\" class=\"landdis\">"+GetMapTile(party.y  ,party.x+1)+"</button><br><br>"+
		"<button id=\"SE\" class=\"landdis\">"+GetMapTile(party.y+1,party.x+1)+"</button><br><br>";
		document.getElementById("CC").style.backgroundColor  = GetMapTileColor(party.y,party.x);
		document.getElementById("CC").style.color  = "#000000";
	}else{
		lastMove = [i,o]
		if(i != 0 || o != 0){
			if(party.units.length == 1){
				if(map[party.y][party.x].units.length > 1){
					if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
						LogEntry("I spelunked inside"+N(map[party.y][party.x].altname)+". I met a group of "+map[party.y][party.x].units[0].Tags[0]+"s! They don't look hostile.")
					}else{
						LogEntry("I traveled to"+N(map[party.y][party.x].name)+". I met a group of "+map[party.y][party.x].units[0].Tags[0]+"s! They look friendly!")
					}
				}else if(map[party.y][party.x].units.length == 1){
					LogEntry("I traveled to"+N(map[party.y][party.x].name)+", and met"+N(map[party.y][party.x].units[0].Name)+". "+randomEntry("Calm"+map[party.y][party.x].units[0].Tags[0]))
				}else{
					if(map[party.y][party.x].tag == "Entrance" && map[party.y-i][party.x-o].tag != "Cave"){
						LogEntry(randomEntry("CaveEntranceSolo"))
					}else if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
						LogEntry("I "+randomEntry("WalkInside")+" inside "+N(map[party.y][party.x].altname)+".")
					}else if(map[party.y][party.x].tag == "Trail"){
						LogEntry("I "+randomEntry("Walk")+" along"+N(map[party.y][party.x].name)+".")
					}else{
						LogEntry("I "+randomEntry("Walk")+" to"+N(map[party.y][party.x].name)+".")
					}
				}
			}else if(map[party.y][party.x].hostile){
				if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
					LogEntry("Inside "+N(map[party.y][party.x].altname)+" we saw "+N(map[party.y][party.x].units[0].Name)+" slip past us and run away! She must have heard our large group.")
					Removal(100)
					map[party.y][party.x].hostile = false;
				}else{
					LogEntry("We traveled to"+N(map[party.y][party.x].name)+", "+N(map[party.y][party.x].units[0].Name)+" heard our large group coming and swiftly ran away!")
					Removal(100)
					map[party.y][party.x].hostile = false;
				}
			}else{
				if(map[party.y][party.x].units.length > 1){
					if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
						LogEntry("We found a group of "+map[party.y][party.x].units[0].Tags[0]+"s living inside "+N(map[party.y][party.x].altname)+". They don't look hostile.")
					}else{
						LogEntry("We traveled to"+N(map[party.y][party.x].name)+" where we met a group of "+map[party.y][party.x].units[0].Tags[0]+"s! They look friendly!")
					}
				}else if(map[party.y][party.x].units.length == 1){
					if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
						LogEntry("We spelunked inside"+N(map[party.y][party.x].altname)+". We met"+N(map[party.y][party.x].units[0].Name)+". "+randomEntry("Calm"+map[party.y][party.x].units[0].Tags[0]))
					}else{
						LogEntry("We traveled to"+N(map[party.y][party.x].name)+". We met"+N(map[party.y][party.x].units[0].Name)+". "+randomEntry("Calm"+map[party.y][party.x].units[0].Tags[0]))
					}
				}else{
				
				//		party.y -= lastMove[0]
				//		party.x -= lastMove[1]
					if(map[party.y][party.x].tag == "Entrance" && map[party.y-i][party.x-o].tag != "Cave"){
						LogEntry(randomEntry("CaveEntranceGroup"))
					}else if(map[party.y][party.x].tag == "Cave" || map[party.y][party.x].tag == "Entrance"){
						LogEntry("We "+randomEntry("WalkInside")+" together inside"+N(map[party.y][party.x].altname)+".")
					}else if(map[party.y][party.x].tag == "Trail"){
						LogEntry("We "+randomEntry("Walk")+" together along"+N(map[party.y][party.x].name)+".")
					}else{
						LogEntry("We "+randomEntry("Walk")+" to"+N(map[party.y][party.x].name)+".")
					}
				
				}
			}
		}
		//clickable buttons
		document.getElementById("west").innerHTML = 
		"<button id=\"NW\" class=\"land\" onclick=\"Walk(-1,-1)\">"+GetMapTile(party.y-1,party.x-1)+"</button><br><br>"+
		"<button id=\"CW\" class=\"land\" onclick=\"Walk( 0,-1)\">"+GetMapTile(party.y  ,party.x-1)+"</button><br><br>"+
		"<button id=\"SW\" class=\"land\" onclick=\"Walk(+1,-1)\">"+GetMapTile(party.y+1,party.x-1)+"</button><br><br>";
		document.getElementById("cent").innerHTML = 
		"<button id=\"NC\" class=\"land\" onclick=\"Walk(-1,0)\">"+GetMapTile(party.y-1,party.x)+"</button><br><br>"+
	 "<button id=\"CC\" class=\"landact\" onclick=\"Walk( 0,0)\"> > "+GetMapTile(party.y  ,party.x)+" < </button><br><br>"+
		"<button id=\"SC\" class=\"land\" onclick=\"Walk(+1,0)\">"+GetMapTile(party.y+1,party.x)+"</button><br><br>";
		document.getElementById("east").innerHTML = 
		"<button id=\"NE\" class=\"land\" onclick=\"Walk(-1,+1)\">"+GetMapTile(party.y-1,party.x+1)+"</button><br><br>"+
		"<button id=\"CE\" class=\"land\" onclick=\"Walk( 0,+1)\">"+GetMapTile(party.y  ,party.x+1)+"</button><br><br>"+
		"<button id=\"SE\" class=\"land\" onclick=\"Walk(+1,+1)\">"+GetMapTile(party.y+1,party.x+1)+"</button><br><br>";
		
		document.getElementById("NW").style.backgroundColor = GetMapTileColor(party.y-1,party.x-1);
		document.getElementById("CW").style.backgroundColor = GetMapTileColor(party.y  ,party.x-1);
		document.getElementById("SW").style.backgroundColor = GetMapTileColor(party.y+1,party.x-1);
		document.getElementById("NC").style.backgroundColor = GetMapTileColor(party.y-1,party.x  );
		document.getElementById("CC").style.backgroundColor = GetMapTileColor(party.y  ,party.x  );
		document.getElementById("SC").style.backgroundColor = GetMapTileColor(party.y+1,party.x  );
		document.getElementById("NE").style.backgroundColor = GetMapTileColor(party.y-1,party.x+1);
		document.getElementById("CE").style.backgroundColor = GetMapTileColor(party.y  ,party.x+1);
		document.getElementById("SE").style.backgroundColor = GetMapTileColor(party.y+1,party.x+1);
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
	while(e < party.units.length){
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
		map[party.y][party.x].units[e].belly = 0;
		map[party.y][party.x].units[e].clumsy = false;
		map[party.y][party.x].units[e].Init = 1+(e*100)+(AR(map[party.y][party.x].units[e].Flee)*1000)
		tempInits.push(map[party.y][party.x].units[e].Init)
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
			if( map[party.y][party.x].units[e].Tags[a] == "Flying" && map[party.y][party.x].tag != "Indoors"){map[party.y][party.x].units[e].flying = true;map[party.y][party.x].units[e].antiflying = true;map[party.y][party.x].units[e].Cond.push("Flying")}
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
	var fstats = ["","","","","",""]
	while(e < party.units.length){
		showstats = false;
		if(map[party.y][party.x].hostile){
			
			if(currInit == party.units[e].Init){
				Init = " ("+Math.abs(party.units[e].Init-tempInits.length-1)+")"
				showstats = true;
			}else{
				Init = " ("+Math.abs(party.units[e].Init-tempInits.length-1)+")"
			}
			if(currInit == party.units[e].Init && party.units[e].asleep){
				//Init = " - Active - Asleep"
					skiptaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+" is asleep, Skip Turn</button>"
					showstats = true;
			}
			if(currInit == party.units[e].Init && party.units[e].fled){
				//Init = " - Active - Fled"
					skiptaketurn= "<button id=\"CON\"class=\"btnavl\" onclick=\"SkipAction("+e+")\">"+party.units[e].Name+" has fled, Skip Turn</button>"
					showstats = true;
			}
		}
		if(pick1 == -1 && pick2 == -1 && (!map[party.y][party.x].hostile || party.units[e].Init==currInit) && !party.units[e].asleep && !party.units[e].fled){//(No picks. not hostile, or current initiative)or someone else was picked and an action is picked
		Good += "<button class=\"namavl\" onclick=\"SelectDom("+e+")\">"+party.units[e].Name+Init+"</button>"
		}else if(pick1 == e){//pick one chosen, is hero.
		Good += "<button class=\"namact\" onclick=\"SelectDom(-1)\">"+party.units[e].Name+Init+"</button>"
		showstats = true;
		}else if(pick1 != e && action > -1 && action != 2 && !party.units[e].fled && (!party.units[e].asleep || (action == 3)) && (e > 0 || action != 3)){//pick one chosen. action chosen
		Good += "<button class=\"namavl\" onclick=\"SelectSub("+e+")\">"+party.units[e].Name+Init+"</button>"
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
		Good += "</span>"
		
		if(e == 0){
			Good += "<BR>&nbsp&nbspPunishment: "+party.units[e].CPun+"/"+party.units[e].MPun+""
			Good += " Hungry:"+stat(party.units[e].CPle)+" Horny:"+stat(party.units[e].MPle-party.units[e].CPle)+"<BR>"
		}else{
			Good += "<br>&nbsp&nbspPunishment: "+(party.units[e].CPun)+"/"+(party.units[e].MPun)+"&nbsp"
			Good += "&nbsp&nbspPleasure: "+(party.units[e].CPle)+"/"+(party.units[e].MPle)+"&nbsp&nbsp<BR>"
		}
		
		//Good += "<center>"

		//Good += "</center><br>"
		
		if(showstats){
			Good += "&nbsp&nbspFight:"+stat(party.units[e].Figh)+"  Flirt:"+stat(party.units[e].Flir)+"  Flee:"+stat(party.units[e].Flee)+"<BR>"
			Good += "&nbsp&nbspFeast:"+stat(party.units[e].Feas)+"&nbsp; Fuck:"+stat(party.units[e].Fuck)+"  Feed:"+stat(party.units[e].Feed)+"<br>"
			fstats = [party.units[e].Figh,party.units[e].Flir,party.units[e].Flee,party.units[e].Feas,party.units[e].Fuck,party.units[e].Feed]
		}

		//if(a > 0){Food += "<br>"}
		//Food += "<br><br>"

		e++;
	}
	//FOOD - all picks are +100
	e = 0;
	a = 0;
	while(e < map[party.y][party.x].units.length){
		showstats = false;
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
				Init = " ("+Math.abs(map[party.y][party.x].units[e].Init-tempInits.length-1)+")"
			}else{
				Init = " ("+Math.abs(map[party.y][party.x].units[e].Init-tempInits.length-1)+")"
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
			Food += "<button class=\"namact\">"+map[party.y][party.x].units[e].Name+Init+"</button>"
			showstats = true;
		}else{
			Food += "<button class=\"namdis\">"+map[party.y][party.x].units[e].Name+Init+"</button>"
		}

		
		Food += "<br>&nbspPunishment: "+(map[party.y][party.x].units[e].CPun)+"/"+(map[party.y][party.x].units[e].MPun)+"&nbsp&nbsp"
		Food += "&nbspPleasure: "+stat2(map[party.y][party.x].units[e].CPle)+"/"+(map[party.y][party.x].units[e].MPle)+"&nbsp&nbsp<BR>"
		if(showstats){
			Food += "&nbsp&nbspFight:"+stat(map[party.y][party.x].units[e].Figh)+"  Flirt:"+stat(map[party.y][party.x].units[e].Flir)+"  Flee:"+stat(map[party.y][party.x].units[e].Flee)+"<BR>"
			Food += "&nbsp&nbspFeast:"+stat(map[party.y][party.x].units[e].Feas)+"&nbsp; Fuck:"+stat(map[party.y][party.x].units[e].Fuck)+"  Feed:"+stat(map[party.y][party.x].units[e].Feed)+"<br>"
			fstats = [map[party.y][party.x].units[e].Figh,map[party.y][party.x].units[e].Flir,map[party.y][party.x].units[e].Flee,map[party.y][party.x].units[e].Feas,map[party.y][party.x].units[e].Fuck,map[party.y][party.x].units[e].Feed]
		}
		//if(a > 0){Food += "<br>"}
		//Food += "<br><br>"

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
	"<button id=\"FIG\"class=\"btndis\" onclick=\"SelectAction(0)\">Fight "+fstats[0]+"</button><button id=\"FON\" class=\"btndis\" onclick=\"SelectAction(1)\">Flirt "+fstats[1]+"</button><button id=\"FLE\" class=\"btndis\" onclick=\"SelectAction(2)\">Flee "+fstats[2]+"</button><br>"+
	"<button id=\"FEA\"class=\"btndis\" onclick=\"SelectAction(3)\">Feast "+fstats[3]+"</button><button id=\"FUC\" class=\"btndis\" onclick=\"SelectAction(4)\"  >Fuck "+fstats[4]+"</button><button id=\"FEE\" class=\"btndis\" onclick=\"SelectAction(5)\">Feed "+fstats[5]+"</button>"
	}else{
	document.getElementById("actions").innerHTML = 
	"<button id=\"FIG\"class=\"btnavl\" onclick=\"SelectAction(0)\">Fight "+fstats[0]+"</button><button id=\"FON\" class=\"btnavl\" onclick=\"SelectAction(1)\">Flirt "+fstats[1]+"</button><button id=\"FLE\" class=\"btnavl\" onclick=\"SelectAction(2)\">Flee "+fstats[2]+"</button><br>"+
	"<button id=\"FEA\"class=\"btnavl\" onclick=\"SelectAction(3)\">Feast "+fstats[3]+"</button><button id=\"FUC\" class=\"btnavl\" onclick=\"SelectAction(4)\"  >Fuck "+fstats[4]+"</button><button id=\"FEE\" class=\"btnavl\" onclick=\"SelectAction(5)\">Feed "+fstats[5]+"</button>"
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
			map[party.y][party.x].units[pick2-100].CPle = 0;
			map[party.y][party.x].units[pick2-100].CPun += domval;
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
				stats = StatGain(pick1,pick2)
			}else if(map[party.y][party.x].hostile){
				if(unit(pick2).asleep){
					subval = 1;
					stats = StatGain(pick1,pick2)
				}else{
					domval = AR(party.units[pick1].Feas)
					if((map[party.y][party.x].units[pick2-100].flying) && !party.units[pick1].antiflying && Math.random()<.5){//EVADE
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
				}else if(domval >= map[party.y][party.x].units[pick2-100].MPun-map[party.y][party.x].units[pick2-100].CPun && (!map[party.y][party.x].units[pick2-100].flying ||  party.units[pick1].antiflying || Math.random()<.5)){
					subval = 2;
					stats = StatGain(pick1,pick2)
				}else{
					subval = 0;
					if(!unit(pick2).willing){
						unit(pick2).CPle = 0;
					}
				}
					
			}
			if(pick1 == 0 && Cocked == null && subval >= 1){Cocked = unit(pick2)}
			LogEntry(Cocked)
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
					
					party.units[0].CPun = Math.max(party.units[0].CPun-AR(party.units[0].Fuck),0)
					party.units[pick1].CPle = Math.min(party.units[pick1].CPle+AR(party.units[0].Fuck),party.units[pick1].MPle)
					party.units[pick1].CPun = Math.max(party.units[pick1].CPun-AR(party.units[0].Fuck),0)
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
			DetailedEntry(randomAction([4,pick1,pick2,domval,subval,map[party.y][party.x].tag]),stats)
			Cocked = null;
			map[party.y][party.x].units.pop();
		}else if(pick2 == 0 && Cocked != null && domval == 1){
			map[party.y][party.x].units.push(Cocked)
			stats = StatGain(pick1,map[party.y][party.x].units.length+99)
			DetailedEntry(randomAction([4,pick1,pick2,domval,subval,map[party.y][party.x].tag]),stats)
			Cocked = null;
			map[party.y][party.x].units.pop();
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
	//LogEntry("Food Action:"+u)
	if(party.units.length > 1 && Math.random()<.9){
		u = Math.floor(Math.random()*(party.units.length-1))+1;//makes enemies focus on other girls
	}
	while(party.units[u].asleep || party.units[u].fled){
	LogEntry(u+ ":"+party.units[u].asleep + " " + party.units[u].fled)
		if(party.units.length > 1 && Math.random()<.90){
			u = Math.floor(Math.random()*party.units.length-1)+1;//makes enemies focus on other girls
		}
		u = Math.floor(Math.random()*party.units.length)	
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
					party.units[u].CPun += domval;
					if(u>0){party.units[u].CPle = 0;}
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
	//Check for Passive, Horny, Hungry, Asleep
	if(party.units[Entry].asleep){
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
	party = {
	  x:12,
	  y:12,
	  units:[]
	};
	party.units.push({
		Name:"The Protagonist",
		CPun:0,
		MPun:25,
		CPle:5,
		MPle:10,
		Figh:5,//+Math.round(Math.random()*5),
		Feas:10,//+Math.round(Math.random()*5),
		Flir:10,//+Math.round(Math.random()*5),
		Fuck:10,//+Math.round(Math.random()*5),
		Flee:10,//+Math.round(Math.random()*5),
		Feed:5,//+Math.round(Math.random()*5),
		Init:0,
		willing:false,
		Tags:["Medium"],
		Cond:["Medium"]
	})
	/*
	party.units.push({
		Name:"Assassin Bunny",
		CPun:0,
		MPun:15,
		CPle:0,
		MPle:50,
		Figh:10,
		Feas:10,
		Flir:10,
		Fuck:10,
		Flee:10,
		Feed:20,
		Tags:["Bunnygirl","Small"],
		Cond:[,"Passive"]
	})
	//*/
	
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
	
	37	CAMP	?	
	38	CAMP	?
	39	CAMP	?
	
	40	CAMP	?	
	41	CAMP	?
	42	CAMP	?
	-
	97	WATERFALL
	98	BOSS	WOLF
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
		[ 1, 1, 1, 4, 4, 7, 4, 4,28, 0, 0,28, 0, 0, 4, 4, 7, 4, 4, 5, 5, 7, 5, 5, 4],
		[ 1, 1, 1, 4, 4, 7, 4, 4,31, 0, 0,24, 0, 0, 4, 4, 7, 4, 4, 4, 4, 8, 4, 4, 4],
		[ 1, 1, 1, 4, 4, 4, 7, 4, 4, 0, 0,97, 0, 4, 4, 4, 7, 4, 4, 4, 4, 8, 4, 4, 4],
		[ 1, 1, 1, 4, 4, 4, 7, 4, 4, 4, 4,13, 4, 4, 4, 4, 4, 8, 8, 8, 8,37, 4, 4, 4],
		[ 1, 1, 1, 1, 4, 4, 4, 7, 4, 4, 4,13, 4, 4, 4, 4, 8, 4, 4, 4, 4, 8, 4, 4, 4],
		[ 1, 1, 1, 1, 4, 4, 4, 7, 4, 4, 4,13, 4, 4, 4, 4, 8, 4, 4, 4, 4, 8, 4, 4, 4],
		[ 1, 1, 1, 1, 4, 4, 4, 7, 0, 0, 4, 4,13,13, 4, 4, 8, 4,16,16,16,19, 8, 4, 4],
		[ 1, 1, 1, 1, 4, 7, 7, 4, 0, 0, 2, 2, 2, 2,13,13, 9,13,16,16,16,19, 4, 8, 4],
		[ 7, 7, 7, 7, 7, 4, 4, 0, 0, 2, 2, 2, 2, 2, 2, 2, 8, 2,16,16,16,19, 4,37, 8],
		[ 1, 1, 1, 4, 4, 4, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 8, 2, 2,19,19,19, 4, 8, 4],
		[ 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2,37, 2, 2, 4, 4, 4, 8, 4, 4],
		[ 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 8, 4, 4, 4],
		[ 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 8, 4, 4, 4],
		[ 1, 0,23, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,23, 0, 0, 4, 5, 5, 5, 4, 4],
		[ 1,28, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,28, 0, 0, 4, 5, 5, 5, 4, 4],
		[ 1, 0,28,28, 2, 2, 2, 2,98, 2, 2, 2, 2, 2,28, 0,26, 0, 0, 4, 4, 7, 4, 4, 4],
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
		[ 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,23, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0,28,25, 0, 0,28, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 1, 0, 0, 0,22, 0, 0,25,28, 0, 0,23, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0,28,28, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,23, 0,26, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,28, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,23, 1, 1, 1, 1, 1, 1, 1],
		[ 4, 4, 4, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[ 7, 7, 7, 4, 4, 1, 1, 7, 1, 1, 7, 7,99, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
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
	map[party.y][party.x] = {name:"Empty Hut",units:[],hostile:false,clr:"#ccbb77",tag:"Indoors"};
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
	LogEntry("After being ran over by a truck isekai style, I woke up in a strange land full of monstergirls! I must start anew in this dangerous world and try to survive. I should find a way to make companions, and later get something to eat, or maybe someone to eat! As I look through a window at the trees outside I decide that my new quest in this world will be to gobble down the Demon Queen, the tastiest monstergirl of them all!")	
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
	else if(Entry == "Cliff"){Entrys = ["Steep Cliff","Muddy Cliff","Towering Cliff","Jagged Cliff"]}
	else if(Entry == "Cliffhit"){Entrys = ["Fuck climbing!","I'm afraid of heights!","It's too steep for me!","That cliff is too tall!","Lets go another way!","We should go somewhere else!"]}
	else if(Entry == "Forest"){Entrys = ["Misty Forest", "Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Peaceful Forest","Quiet Forest","Pleasant Forest","Sunny Forest"]}
	else if(Entry == "ForestWolf"){Entrys = ["Logged Forest","Logged Forest","Logged Forest","Logged Forest","Misty Forest", "Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Peaceful Forest","Quiet Forest","Pleasant Forest","Sunny Forest"]}
	else if(Entry == "Plains"){Entrys = ["Grassy Plains","Peaceful Plains","Flowery Plains","Muddy Plains","Pleasant Plains","Quiet Plains","Hilly Plains"]}
	else if(Entry == "Farm"){Entrys = ["Cozy Farmhouse","Small Shack","Red Barn","Rundown Barn","Old Shed","Canvas Windmill","Fenced Pasture","Grassy Pasture","Corn Field","Corn Field","Overgrown Field","Flowery Field","Muddy Field","Quiet Field","Cabbage Patch","Cabbage Patch"]}
	else if(Entry == "Cave"){Entrys = ["Cold Cave","Chilly Cave","Muddy Cave","Dirty Cave","Narrow Cave","Grimy Cave","Grubby Cave","Warm Cave","Misty Cave","Jagged Cave","Crumbling Cave","Overgrown Cave","Cozy Cave","Eroded Cave","Quiet Cave","Twisting Cave","Echoing Cave","Mossy Cave","Stuffy Cave","Creepy Cave ","Spooky Cave","Gloomy Cave"]}
	else if(Entry == "CaveEntranceSolo"){Entrys = ["I approach the mouth of a dark cave. There is a faint light from strange glowing mushrooms that sprout from the stone walls, but otherwise there is only blackness and large shadows, I don't think I should continue further alone...","I walk up to the maw of a dark cave. There is a faint light from strange glowing mushrooms that spring from the stone walls, sounds of skittering come from inside. I don't think I should continue further alone...","I enter a large cave. There is a faint light from strange glowing mushrooms emerging from the stone walls, the sheen of a slimy trail leads further into the depths. I don't think I should continue further alone...","I stand at the entrance of a rocky descent into the mountain. There is a faint light from strange glowing mushrooms that cover the stone walls, large webs stretch across the ceiling, I don't think I should continue further alone..."]}
	else if(Entry == "CaveEntranceGroup"){Entrys = ["We approach the mouth of a dark cave. There is a faint light from strange glowing mushrooms that sprout from the stone walls, but otherwise there is only blackness and large shadows, I hope we don't get lost.","We walk up to the maw of a dark cave. There is a faint light from strange glowing mushrooms that spring from the stone walls, we hear skittering from inside","We enter a large cave. There is a faint light from strange glowing mushrooms emerging from the stone walls, the sheen of a slimy trail leads further into the depths...","We stand at the entrance of a rocky descent into the mountain. There is a faint light from strange glowing mushrooms that cover the stone walls, large webs stretch across the ceiling, the girls look worried about going further inside."]}
	else if(Entry == "Trail"){Entrys = ["Dirt Trail","Dirt Trail","Dirt Trail","Dirt Trail","Muddy Trail","Rocky Trail","Worn Trail","Dusty Trail","Narrow Trail","Steep Trail","Faded Trail","Shabby Trail","Eroded Trail"]}
	else if(Entry == "Road"){Entrys = ["Cobblestone Road","Cobblestone Road","Cobblestone Road","Cobblestone Road","Fencelined Road","Crumbling Road","Muddy Road","Narrow Road"]}
	else if(Entry == "BunnyForest"){Entrys = ["Sunny Forest","Sunny Forest","Bubbling Spring", "Shady Clearing", "Sunny Clearing","Flowery Clearing", "Cozy Burrow", "Cozy Burrow", "Shabby Hut", "Sturdy Cabin", "Homely Cottage"]}
	else if(Entry == "BunnyDesc"){Entrys = ["Buck-toothed Bunnygirl","Green-Eyed Bunnygirl","Blue-Eyed Bunnygirl","Wide-Eyed Bunnygirl","Flat-Chested Bunnygirl","Stacked Bunnygirl","Busty Bunnygirl","Petite Bunnygirl","Perky Bunnygirl","Long-Eared Bunnygirl","Short-Eared Bunnygirl","Droopy-Eared Bunnygirl","Short Bunnygirl","Chubby Bunnygirl","Speckled Bunnygirl","Fat-Bottomed Bunnygirl","Curvy Bunnygirl","Pink Bunnygirl"]}
	else if(Entry == "CalmBunnygirl" && map[party.y][party.x].tag == "Indoors"){Entrys = ["She seems happy to see me!","She looks ready for a nap.", "She doesn't look like she wants to fight.","She waves at me with a smile on her face!","She looks like she just woke up, the bed in the corner is a mess of twisted blankets and pillows.","She seems friendly.","She clearly doesn't want to fight.","She seems nice.","She's smiling, but she looks nervous.","She smiles when she sees me.","Her face looks so cute!","She looks like easy prey!","My mouth is watering at the sight of her!","I wonder if she's interested in a little fun?","She waves at me while sitting at the table","Shes giving the place a good cleaning.","She sips some tea while looking out the window","She greets me at the door and invites me inside.","She quickly cleans up the messy room, she must not have been expecting company!","She asks if I'd like something to drink or eat. Watching her cute behind walk towards the kitchen gives me some ideas..."]}
	else if(Entry == "CalmBunnygirl"){Entrys = ["She seems happy to see me!","She looks ready for a nap.", "She doesn't look like she wants to fight.","She waves at me with a smile on her face!","She looks like she just woke up.","She seems friendly.","She clearly doesn't want to fight.","She seems nice.","She's smiling, but she looks nervous.","She smiles when she sees me.","Her face looks so cute!","She looks like easy prey!","My mouth is watering at the sight of her!","I wonder if she's interested in a little fun?","She's looking at me with a naughty face!"]}
	else if(Entry == "MouseDesc"){Entrys = ["Buck-toothed Mousegirl","Hairless Mousegirl","Wide-Eyed Mousegirl","Flat-Chested Mousegirl","Petite Mousegirl","Perky Mousegirl","Big-Eared Mousegirl","Small-Eared Mousegirl","Short-Tailed Mousegirl","Fat Mousegirl","Chubby Mousegirl","Speckled Mousegirl","Fat-Bottomed Mousegirl","Curvy Mousegirl","Pale Mousegirl","Timid Mousegirl","Slim Mousegirl","Slender Mousegirl","Dirty Mousegirl","Skittish Mousegirl","Fanged Mousegirl"]}
	else if(Entry == "CalmMousegirl"){Entrys = ["She seems cautious, but puts on a friendly face.","She was peaking behind a rock before coming forward.", "She doesn't look like she wants to fight.","She waves at me with a smile, I guess she doesn't consider me a threat.","She was crawling out of the crevice she hid in, it looks like she just woke up.","She seems friendly, I wonder why she lives in this cave.","She clearly doesn't want to fight.","She seems nice.","She's smiling, but she looks nervous.","She smiles when she sees me.","Her face looks so cute!","She looks like easy prey!","My mouth is watering at the sight of her!","I wonder if she's interested in a little fun?","She's looking at me with a naughty face!"]}
	else if(Entry == "CatForest"){Entrys = ["Blooming Forest","Blooming Forest","Blooming Forest","Flowery Clearing", "Treehouse", "Shady Clearing"]}
	else if(Entry == "CatDesc"){Entrys = ["Green-Eyed Catgirl","Blue-Eyed Catgirl","Purple-Eyed Catgirl","Flat-Chested Catgirl","Stacked Catgirl","Busty Catgirl","Perky Catgirl","Long-Tailed Catgirl","Bushy-Tailed Catgirl","Fluffy-Eared Catgirl","Short Catgirl","Slender Catgirl","Pouty Catgirl","Curvy Catgirl","Blue Catgirl"]}
	else if(Entry == "HostileCatgirl"){Entrys = [", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and her claws are out!",", I don't think she's willing to talk!",", I think its too late to turn back!",", this is clearly her territory!",", I hope she doesn't bite!",", her tail is puffed out!",", her fangs look sharp!"]}
	else if(Entry == "FoxForest"){Entrys = ["Lush Forest","Lush Forest","Lush Forest","Bubbling Spring","Treehouse", "Shabby Hut", "Sturdy Cabin", "Homely Cottage", "Shady Clearing"]}
	else if(Entry == "FoxDesc"){Entrys = ["Silver-Eyed Foxgirl","Blue-Eyed Foxgirl","Gold-Eyed Foxgirl","Flat-Chested Foxgirl","Busty Foxgirl","Stacked Foxgirl","Perky Foxgirl","White-Tailed Foxgirl","White-Ears Foxgirl","Black-Ears Foxgirl","Long-Eared Foxgirl","Short Foxgirl","Voluptuous Foxgirl","Curvy Foxgirl","Silver Foxgirl"]}
	else if(Entry == "HostileFoxgirl"){Entrys = [", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and her claws are out!",", I don't think she's willing to talk!",", I think its too late to turn back!",", this is clearly her territory!",", I hope she doesn't bite!",", her hackles are raised!",", her fangs look sharp!"]}
	else if(Entry == "WolfForest"){Entrys = ["Misty Forest", "Muddy Forest","Gloomy Forest","Lush Forest","Blooming Forest","Quiet Forest","Bubbling Spring","Shady Clearing", "Shabby Hut", "Sturdy Cabin", "Homely Cottage"]}
	else if(Entry == "WolfDesc"){Entrys = ["Red-Eyed Wolfgirl","Grey-Eyed Wolfgirl","Black-Eyed Wolfgirl","Flat-Chested Wolfgirl","Busty Wolfgirl","Stacked Wolfgirl","Perky Wolfgirl","Black-Tailed Wolfgirl","White-Ears Wolfgirl","Black-Ears Wolfgirl","Long-Fanged Wolfgirl","Muscular Wolfgirl","Tough Wolfgirl","Stern Wolfgirl","Curvy Wolfgirl","Pitch-Black Wolfgirl","Tall Wolfgirl","Buff Wolfgirl"]}
	else if(Entry == "HostileWolfgirl"){Entrys = [", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and her claws are out!",", I don't think she's willing to talk!",", I think its too late to turn back!",", this is clearly her territory!",", I hope she doesn't bite!",", her hackles are raised!",", her fangs look sharp!",", she's growling at me angrily!"," she's growling at me with hate in her eyes!",", she's drooling as she sizes me up!"]}
	else if(Entry == "FrogForest"){Entrys = ["Muddy Forest","Muddy Forest","Muddy Forest", "Murky Pond", "Bubbling Spring", "Shady Clearing"]}
	else if(Entry == "FrogDesc"){Entrys = ["Orange-Eyed Froggirl","Blue-Eyed Froggirl","Purple-Eyed Froggirl","Flat-Chested Froggirl","Perky Froggirl","Pale Froggirl", "Glistening Froggirl", "Slick Froggirl","Slimy Froggirl","Spotted Froggirl","Striped Froggirl","Slim Froggirl","Slender Froggirl","Petite Froggirl","Short Froggirl","Fat-Bottomed Froggirl", "Chubby Froggirl","Purple Froggirl"]}
	else if(Entry == "HostileFroggirl"){Entrys = [", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and her long tongue is out!",", I don't think she's willing to talk!",", I think its too late to turn back!",", this is clearly her territory!",", her tongue flings out at me, and I barely dodge it!",", she's hopping this way!",", she's hopping my way!"]}
	else if(Entry == "BatForest"){Entrys = ["Gloomy Forest","Gloomy Forest","Gloomy Forest", "Shady Clearing"]}
	else if(Entry == "BatDesc"){Entrys = ["Green-Eyed Batgirl","Blue-Eyed Batgirl","Purple-Eyed Batgirl","Flat-Chested Batgirl","Busty Batgirl","Perky Batgirl","Swift Batgirl","Agile Batgirl","Fluffy-Eared Batgirl","Fuzzy Batgirl","Slender Batgirl","Snarky Batgirl","Curvy Batgirl","Pale Batgirl"]}
	else if(Entry == "HostileBatgirl"){Entrys = [", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready for a fight!",", and ready to swoop down!",", I don't think she's willing to talk!",", I think its too late to turn back!",", this is clearly her territory!",", she swoops down, and I barely duck in time!",", she's flying this way!",", she's flying my way!"]}
	else if(Entry == "SlimeDesc"){Entrys = ["Red Slimegirl","Blue Slimegirl","Yellow Slimegirl","Green Slimegirl","Purple Slimegirl","Orange Slimegirl"]}
	else if(Entry == "HostileSlimegirl"){Entrys = [", and ready for a fight!",", and ready for a meal!",", she leaves a colorful trail as she comes at me.",", I can see the bones of her last meal still inside her!",", her last victom sizzles away as she walks toward me!"]}
	
	if((Entry == "CalmBunnygirl" || Entry == "CalmMousegirl")){//nonhostile 
		if(unit(100).willing && Math.random()<.1){
			unit(100).CPle = Math.round(unit(100).MPle - 3 - (Math.random()*4))
			Entrys = []//remove
			Entrys.push("With a naughty grin she asks if I need a bite!")
			Entrys.push("While playing with her breasts, she says I look hungry!")
			Entrys.push("She shakes her tush at me and asks if she looks tasty!")
			Entrys.push("While looking at me she takes a meaty grip of her behind and licks her lips!")
		}
		if((party.units.length == 1 || Math.random()<.1) && Entry == "CalmBunnygirl"  ){//Horny
			unit(100).CPle = Math.round(unit(100).MPle - 3 - (Math.random()*4))
			Entrys = []
			Entrys.push("With a naughty grin she ogles my hanging member!")
			Entrys.push("While playing with her breasts, she asks if I'm looking for some action!")
			Entrys.push("She shakes her tush at me and asks if she looks tasty!")
			
		}
	}
	if(Entrys.length == 0){Entrys = ["No Entry Found"]}
	return Entrys[Math.floor(Math.random()*Entrys.length)];
}//SlimeDesc
//###########################################################################################################################################################################
//###########################################################################################################################################################################
//###########################################################################################################################################################################
function randomAction(s){//randomAction:[action,dom,sub,offence,defence,terrain]
	var Entrys = [];
	var Entry = ""
	
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
				Entrys.push("I swing my fist at SUB, but she's flying to high to hit. She laughs at my frustration!")
				Entrys.push("I kick at SUB, but she flies away too quick. She asks if I'm even trying!")
				Entrys.push("I try headbutting SUB, but she's too swift while flying around. She giggles as she soars through the air.")
				Entrys.push("I swing my fist at SUB, but she's flying to high to hit.")
				Entrys.push("I kick at SUB, but she flies away too quick.")
				Entrys.push("I try headbutting SUB, but she's too swift while flying around.")
				}
			}else if(s[4] < .5){//Healthy
					if(s[5]=="Indoors"){
						Entrys.push("I shove SUB into a wall.")
						Entrys.push("I throw a chair at SUB, it breaks into pieces against her!")
					}
				Entrys.push("I swing my fist at SUB!")
				Entrys.push("I kick SUB!")
				Entrys.push("I headbutt SUB!")
			}else if(s[4] < 1){//Hurt
				Entrys.push("I swing my fist at SUB, giving her a bloody nose!")
				Entrys.push("I kick the SUB in the stomach, she grimaces at the pain!")
				Entrys.push("I headbutt SUB, she stumbles back!")
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
					Entrys.push("CDOM bites down on my shoulder, she doen't let go until I hit her nose!")
					Entrys.push("I lose track of DOM until I feel her elbow strike between my shoulder blades, knocking the breath out of me!")
					Entrys.push("CDOM leaps into the air and knees me in the face! I barely manage to keep standing.")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push("CDOM's tongue flings out at me, it hits like a fist!")
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys.push("CDOM lets go of a rock while flying above me, it crashes into my shoulder!") 
					Entrys.push("CDOM swoops down and attacks me, the pain is unbearable!")
					Entrys.push("CDOM flies by and kicks me in the head!")
				}
				Entrys.push("CDOM attacks me!");
				//RESET ENTRYS TO THE BOTTOM IF STANDARD ONES WONT WORK
				//Entrys = [asdf]
			}else if(s[4] < 1){//Hurt
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM smashes my head into the table, I see a bloody spot is left behind!")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM's claws slash out, leaving bloody streaks in my chest!")
					Entrys.push("CDOM reveals her fangs before biting my shoulder, she leaves a nasty wound behind!")		
				}
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on my shoulder, she doesn't let go until I fall to my knees in pain!")
					Entrys.push("I lose track of DOM until I feel her elbow strike between my shoulder blades, knocking me to my knees!")
					Entrys.push("CDOM leaps into the air and knees me in the face! My head spins while I see little stars everywhere I look!")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push("CDOM's tongue flings out at my face, all I can hear after is a high pitched whine, and I stumble to keep my balance!")
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys.push("CDOM lets go of a rock while flying above me, it crashes into my head!")
				}
				Entrys.push("CDOM attacks me! I hold back tears from the pain!");
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
					Entrys.push("CDOM shakes her fist at SUB as she flies above safely. CSUB giggles as she soars through the air out of reach.")
					Entrys.push("CDOM tries attacking SUB, but she flies away too quickly. CSUB asks DOM if she's even trying!")
					Entrys.push("CDOM shakes her fist at SUB as she flies above safely.")
					Entrys.push("CDOM tries attacking SUB, but she flies away too quickly.")
				}
			}else if(s[4] < .5){//Healthy
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM shoves SUB into the door, she screams that we better leave now while we still can!")
					Entrys.push("With no regard for her own furnature, DOM throws a chair, it crashes into SUB's face!")
					Entrys.push("With a running start, DOM tackles SUB into a wall!")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM's claws slash out at SUB, leaving scratchmarks!")
					Entrys.push("CDOM reveals her fangs before biting SUB's arm!")		
				}
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on SUB's shoulder, she doesn't let go until hit on the nose!")
					Entrys.push("CDOM sneaks behind SUB and slams her elbow between SUB's shoulder blades!")
					Entrys.push("CDOM leaps into the air and knees SUB in the face!")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push("CDOM's tongue flings out at SUB, it hits like a fist!")
				}
				if(unit(s[1]).Tags[0] == "Froggirl" && unit(s[1]).Size >= unit(s[2]).Size){
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB is almost pulled to the ground before breaking free!")		
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys.push("CDOM lets go of a rock while flying above, it crashes into SUB's shoulder!") 
					Entrys.push("CDOM swoops down and attacks SUB before slipping out of reach again!")
					Entrys.push("CDOM flies by and kicks SUB!")
				}
				if(unit(s[1]).Tags[0] == "Mousegirl"){
					Entrys.push("CDOM chomps down onto SUB's ankle!")
				}
				Entrys.push("CDOM attacks SUB!");
				//RESET ENTRYS TO THE BOTTOM IF STANDARD ONES WONT WORK
				//Entrys = [asdf]
			}else if(s[4] < 1){//Hurt
				if(s[5]=="Indoors" && Math.random()<.25){
					Entrys.push("CDOM smashes SUB's head into the table, a bloody spot is left behind!")
				}
				if(unit(s[1]).Tags[0] == "Catgirl"){
					Entrys.push("CDOM's claws slash out, leaving bloody streaks in SUB's chest!")
					Entrys.push("CDOM reveals her fangs before biting SUB's shoulder, she leaves a nasty wound behind!")		
				}
				if(unit(s[1]).Tags[0] == "Foxgirl"){
					Entrys.push("CDOM bites down on SUB's shoulder, she doesn't let go until the other girl falls to her knees in pain!")
					Entrys.push("CDOM sneaks behind SUB and slams her elbow between SUB's shoulder blades, knocking her to the ground!")
					Entrys.push("CDOM leaps into the air and knees SUB in the face! She stumbles around with a blank expression until regaining her composure.")
				}
				if(unit(s[1]).Tags[0] == "Froggirl"){
					Entrys.push("CDOM's tongue flings out at SUB's face, she looks dazed after the hit!")
				}
				if(unit(s[1]).Tags[0] == "Froggirl" && unit(s[1]).Size >= unit(s[2]).Size){
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB falls over and is dragged along the ground before she's able to pull it off!")
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys.push("CDOM lets go of a rock while flying above, it crashes into SUB's head!")
					Entrys.push("CDOM swoops down and attacks SUB, leaving her bruised and bleeding!")
					Entrys.push("CDOM flies by and kicks SUB in the head!")
				}
				if(unit(s[1]).Tags[0] == "Mousegirl"){
					Entrys.push("CDOM chomps down onto SUB's ankle, leaving a bloody wound behind!")
				}
				Entrys.push("CDOM attacks SUB!");
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
					Entrys.push("CDOM's tongue flings out and wraps around SUB's neck, she doesn't let go until SUB collapses to the ground with a blue face!")
				}
				if(unit(s[1]).Tags[0] == "Batgirl"){
					Entrys.push("CDOM lets go of a rock while flying above. When it crashes into SUB's head, she falls to the ground!")
				}
				if(unit(s[1]).Tags[0] == "Mousegirl"){
					Entrys.push("CDOM chomps down onto SUB's ankle, She falls down defeated!")
				}
				//
				if(unit(s[2]).Tags[0] == "Mousegirl"){//SUB IS ASDF
					Entrys.push("CDOM punts SUB off into the distance!")
				}
				Entrys.push("CDOM kills SUB!")
			}
		}
	}
//###########################################################################################################################################################################
	if(s[0]==1){//FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT - FLIRT
		if(s[1]==0 && s[2] < 100 && !map[party.y][party.x].hostile){
		// HERO GOOD PEACE
			Entrys.push("I pat SUB's head, she looks comforted by my touch.")
			Entrys.push("I give SUB's cute butt a squeeze. Her face is so cute when she's embarrased.")
			Entrys.push("I sneak up behind SUB and cup her breasts. Her face is so cute when she's embarrased.")
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
				if(s[5]=="Indoors"){
					Entrys.push("I sit down at the table, and have some tea with SUB.")
					Entrys.push("I help SUB with cleaning the place, we make idle chitchat as we work together.")
					Entrys.push("I sit down across from SUB as she sips from a cup and tell her how cute she is. She says I'm exaggerating.")
					}
					if(s[5]=="Forest"){
					Entrys.push("I put a flower behind SUB's ear, she giggles from the ticklish stem.")
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

			}else{//WET
				if(s[5]=="Indoors"){
					Entrys.push("I sit down at the table, and share a drink with SUB, the booze makes us both open up.")
					Entrys.push("I help SUB with cleaning the place, we keep finding excuses to rub against each-other.")
					Entrys.push("I tell SUB how sexy she looks, she spills her drink in surprise.")
				}
				if(s[5]=="Forest"){
				Entrys.push("I put a flower behind SUB's ear, she gives me a hug in return.")
				}
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					Entrys.push("I notice SUB is peeking at my cock, I ask if she thinks it will fit. She says she'd be willing to try!")
					Entrys.push("I use a single finger to rub SUB's bean, she moans as her tiny body hugs my arm!")
				}
				Entrys.push("I blow SUB a kiss, and she blows one back.")
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
				Entrys.push("I wave at SUB, and she waves back before remembering this is a fight.")
				Entrys.push("I blow SUB a kiss, she's bewildered by the gesture.")
				Entrys.push("I playfully spank SUB's behind and leap out of her reach.")
				Entrys.push("Instead of fighing SUB, I keep my distance, telling her how cute she looks.")
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
					Entrys.push("I pin SUB's arms up, with both hands I massage her furry ears. Her body goes slack against mine until she remembers she was fighting me!")
				}
				if(unit(s[2]).Tags[0] == "Foxgirl"){
					Entrys.push("I give SUB's tail a playful tug. Her gaze is less focused and her legs are wobbly!")
				}
				if(unit(s[2]).Tags[0] == "Froggirl"){
				
				}
				Entrys.push("I blow SUB a kiss. She almost blows one back before remembering this is a fight.")
				Entrys.push("I embrace SUB, and whisper sweet nothings into her ear, she hesitates a moment before pushing me away.")
				Entrys.push("I playfully spank SUB's behind and slip out of her reach, she rubs where my hand left its mark, her face looks flushed.")
				Entrys.push("Instead of fighing SUB, I keep my distance, telling her all the naughty things I want to do to her. She tries to look focused, but she's breathing heavily!")
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
				Entrys.push("CDOM starts rubbing SUB's shoulders and whispering into her ear, SUB is clearly getting turned on by whatever she's saying.")  
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
					Entrys = ["CSUB pumps her hips at SUB, she's flustered by the gesture.","CSUB tells SUB how sexy her body looks when she's flying.","CDOM tells SUB all the naughty things she plans to do to her when she lands.","CSUB says she saw SUB's lust when she flew by, SUB tells her to shutup!"]
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
				Entrys.push("I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She giggles as my tongue plays with her breasts, and says it's about time I ate her! She plays with herself as I finish swallowing her down!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I get on my knees and tell SUB I need to have her. She approaches and starts licking the tip of my cock. She looks up at me and says its hungry. She sticks her hand into my cock and looks surprised how easy it fit. She blows me a kiss goodbye before sticking her other hand in and pushing herself in further. She keeps pushing further until her behind reaches the tip. I start stroking myself and SUB is slowly pulled in further. I feel her curl up once her feet are sucked in. I feel her orgasm one last time before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["While I lie down, SUB walks over and straddles my face with her tail tickling my nose. I start eating her out and watch her shudder as my tongue teases her clit. When she cums, I gulp down her rear. She looks surprised but turned on even more! CSUB plays with her breasts as I gobble the rest of her down. She cums again just before her head and legs are swallowed and she slides into my belly!"]
					}
				}
			}else{//RELUCTANT
				Entrys.push("I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise as she stops being my lover and becomes my nutrition. Trembling, she asks if I wouldn't rather fuck her instead, but I keep gulping down to her waist. When I start swallowing her hips, she begs me to enjoy her properly at least! My tongue finds her slit and starts getting her off as her rump hangs out of my mouth. I give SUB one last orgasm before fully taking her down!")
				Entrys.push("I grab SUB by the waist, and swallow her down!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I get on my knees and tell SUB I need to have her. She approaches and starts licking the tip of my cock. She looks surprised when it almost pulls her in. I ask her to continue and she does nervously, this time shes slurped past her shoulders. She starts to struggle until I start rubbing her slit. With my other hand I start stroking myself and SUB is slowly pulled in further. My progress is stopped by her wide rear end. I keep fingering her while her legs flail around. As SUB orgasms, I push her butt into my large member, and she slides the rest of the way in. I feel her curl up into a ball before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
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
				Entrys.push("I grab SUB by the hips, and swallow her down! She definitely wasn't expecting that to happen!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and shove her headfirst into my cock. She asks me to pull her out, but doesn't struggle. I feel her curl up into a ball before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure..."]
					}else{
						Entrys = ["I grab SUB with one hand and shove her headfirst into my mouth. She asks me to let her out, but doesn't struggle. I feel her curl up into a ball before digesting."]
					}
				}
			}else if(unit(s[2]).willing){//WILLING
				Entrys.push("I grab SUB by the hips, and swallow her down! She tries to say a last second goodbye, but I'm in too big of a hurry!")
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
			
						if(map[party.y][party.x].units.length == 2 && s[2]==100){
							Entrys.push("I gulp down SUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The" +map[party.y][party.x].units[1].Name+" says she's not going down without a fight!")
						}else if(map[party.y][party.x].units.length == 2){
							Entrys.push("I gulp down SUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The" +map[party.y][party.x].units[0].Name+" says she's not going down without a fight!")
						}else if(map[party.y][party.x].units.length > 2){//Larger group
							Entrys.push("I gulp down SUB's head and shoulders! The other girls look in horror as I keep swallowing until she's gone. I look at the remaining girl and lick my lips! They all look ready for a fight!")
						}
			
			
					if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
						Entrys.push("My stomach growls loudly. I ask SUB if theres any food left. She smiles nervously before trying to run away! I leap at her and grab her ankles as she's halfway out the door. She sighs and stops struggling as I start swallowing her feet. She doesn't say anything else as I continue swallowing and tasting her delicious body. She tucks her arms in as I get to her hips. When I reach her nipples I find them hard as rocks, she may not want to be eaten, but her body is getting into it! I tease her breasts with my tongue until I feel her small body shudder halfway inside me, the quietest moan escapes her lips, and I finish gulping her down.")
					}
					if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
						Entrys.push("I call SUB a cute bunny snack. Her eyes grow wide, and she tries to make a run for it! I lunge at her and barely grip her legs. As she struggles, I shove her feet into my mouth and start swallowing. She stops squirming, and just looks back at me upset. I swallow her quickly, but try to be gentle. She tucks her arms into my maw and soon she's in my belly.")
					}		
					Entrys.push("I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise at suddenly becoming food! She begs for me not to eat her while I swallow down the rest of her.","I gulp down SUB, I feel her struggle inside me until she passes out!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and hold her above my hard cock. She looks worried as I lower her down. When her feet touch my tip, they slip inside and I continue to lower her down. She looks in horror as shes slowly consumed by my large member. I let go after her butt slides in and watch her struggle in vain before being completely devoured by my rod. I feel her curl up inside my sack before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure... "]
					}else{
						Entrys = ["I grab SUB with one hand and hold her above my gaping mouth. She looks worried as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her down. She looks in horror as shes slowly consumed. I let go after her butt slides in and feel her struggle in vain before being completely devoured."]
					}
				}
			}else if(s[4] == 3){//WILLING
				if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
					Entrys.push("My stomach growls loudly. I ask SUB if theres any food left. She smiles before saying she has an idea. I watch SUB hop onto the table and offer me her legs, I start by sucking on her feet before swallowing down to her hips. My tongue finds her slit and I give her one last orgasm before gulping the rest of her down!")
					Entrys.push("I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too delicious not to eat! I start swallowing one cheek, and soon get both into my maw. CSUB looks back and sees her behind completely engulfed. Her smile widens, and she says she hopes I enjoy my tasty bunny snack. She yelps when I gulp her down to her breasts. My tongue teases her nipples until she cums, and I gobble the rest of her down!")
				}else{
					if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
						Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose as I finish my meal. I feel my belly jiggle as she cums!")
						Entrys.push("I call SUB a cute bunny snack. She says if she's just a snack, I should eat her! My hands wrap around her waist and I lift her into a kiss before swallowing her head and shoulders. She cums before I even reach her hips, and I gulp down her still quivering legs!")
					}
					if(party.units.length == 2){
						if(unit(1).willing){
							Entrys.push(String("My "+party.units[1].Name +" watches as I start swallowing SUB head first! As I get to SUB's waist, I see that my "+party.units[1].Name+" has started fingering herself as she watches me taste SUB's lower lips. After I finish eating SUB, I watch as my "+party.units[1].Name +" orgasms loudly. Panting, she asks when I'm going to eat her!"))
						}else{
							Entrys.push(String("My "+party.units[1].Name +" watches as I start swallowing SUB head first! As I get to SUB's waist, I see that my "+party.units[1].Name+" has started fingering herself as she watches me taste SUB's lower lips. After I finish eating SUB, I watch as my "+party.units[1].Name +" orgasms loudly. Panting, she asks if she can eat the next one."))
						}
						Entrys.push(String("I grab SUB by her feet and start swallowing them down. My "+party.units[1].Name+" approaches and starts making out with SUB! As I continue up my tasty meal they keep at it until I swallow SUB's head. I lock lips with my "+party.units[1].Name+" to continue the kiss. Eventually we break away as a strand of saliva droops between us. She feels my belly with her hand, and a handprint emerges from inside to match hers."))
					}		
					Entrys.push("I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. Instead of struggling she says it's about time somebody ate her! She plays with herself as I finish swallowing her down!")
					Entrys.push("I gulp down SUB, I feel her masturbate inside me until she passes out!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and hold her above my hard cock. She looks excited as I lower her down. When her feet touch my tip, they slip inside and I continue to lower her down. She starts to finger and fondle herself as shes slowly consumed by my large member. I let go after her butt slides in and watch her orgasm before being completely devoured by my rod. I feel her cum again before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure... "]
					}else{
						Entrys = ["I grab SUB with one hand and hold her above my gaping mouth. She looks excited as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her down. She starts to finger and fondle herself as shes slowly consumed. I let go after her butt slides in and feel it grind against my tongue until she orgasms. She kisses my lip before sliding down into my belly."]
					}
				}
				}
			}
		}else if(s[1]==0 && s[2] >=99 && map[party.y][party.x].hostile){
		// HERO FOOD HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("She's  too big for me to eat now, I need to find a way to increase my appetite...")
			}else if(s[4] == 0){//FAILED
					if(unit(s[2]).flying){
						Entrys.push("My poor stomach grumbles as SUB flies above me. She sticks her tongue out to mock me.")
						Entrys.push("I leap at SUB, but she's too high up. She laughs at me from a safe distance")
						Entrys.push("I try catching SUB as she flies by, but she's just too quick. She shakes her tasty tush at me teasingly in the air.")
						Entrys.push("My poor stomach grumbles as SUB flies above me.")
						Entrys.push("I leap at SUB, but she's too high up.")
						Entrys.push("I try catching SUB as she flies by, but she's just too quick!")
					}else{
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
				Entrys.push("I gulp down SUB, I feel her struggle inside me until she passes out!")
				if(unit(s[2]).Tags[0] == "Mousegirl"){
					if(Cocked == unit(s[2])){
						Entrys = ["I grab SUB with one hand and hold her above my hard cock. She looks worried as I lower her down. When her feet touch my tip, they slip inside and I continue to lower her down. She looks in horror as shes slowly consumed by my large member. I let go after her butt slides in and watch her struggle in vain before being completely devoured by my rod. I feel her curl up inside my sack before melting into spunk! My balls are swollen, I should find someone to help relieve the pressure... "]
					}else{
						Entrys = ["I grab SUB with one hand and hold her above my gaping mouth. She looks worried as I lower her down. When her feet touch my tongue, I close my lips around her ankles and continue to lower her down. She looks in horror as shes slowly consumed. I let go after her butt slides in and feel her struggle in vain before being completely devoured."]
					}
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
			}else if(unit(s[2]).willing){//WILLING
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside DOM! I press my ear to her bloated belly, and hear SUB moan as she fingers herself one last time!")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB grabs the tongue and pulls DOM over to her. CSUB kisses the other girl and says she'd be glad to be a snack. She lets DOM swallow her down, and soon screams out in ecstasy while digesting inside the froggirl!")
				}
				Entrys.push("Oh my, SUB just let DOM eat her!")
			}else{//UNWILLING
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down to her hips, and I hear her muffled calls for help. I approach and grab her legs. Instead of saving her, I eat her out until she cums and let DOM finish swallowing her down. Inside I hear SUB thank me for the goodbye.")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! CSUB calls out to me as she's pulled towards DOM. I run over and kiss her cheek as she struggles against the sticky tongue. I tell SUB she needs to be a good meal and stop struggling. She gives me a kiss goodbye and lets DOM eat her.")
				}
				Entrys.push("CDOM just ate SUB!")
			}
		}else if(((s[1] < 100 && s[2] < 100)||(s[1] >= 100 && s[2] >= 100)) && map[party.y][party.x].hostile){
		// SAME HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("CSUB is too big for DOM to eat!")
			}else if(s[4] == 1){//ASLEEP
				Entrys.push("CDOM grabs SUB while she's still sleeping, and swallows her down!")
			}else if(unit(s[2]).willing){//WILLING
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside DOM! While digesting, SUB moans as she fingers herself one last time!")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB grabs the tongue and pulls DOM over to her. CSUB kisses the other girl before shoving herself down the froggirls throat!")
				}
				Entrys.push("Oh my, SUB just let DOM eat her!")
			}else{//UNWILLING
				Entrys.push("CDOM just ate SUB!")
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
			}else if(s[4] == 2){//UNWILLING
				Entrys.push("CDOM eats SUB!")
				if(map[party.y][party.x].units.length == 2 && s[2]==100){
						Entrys.push(String("CDOM gulps down SUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" looks pissed and tries to pull SUB out, but DOM just keep swallowing until she's gone. The" +map[party.y][party.x].units[1].Name+" says she's not going down without a fight!"))
				}else if(map[party.y][party.x].units.length == 2){
						Entrys.push(String("CDOM gulps down SUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull SUB out, but DOM just keep swallowing until she's gone. The" +map[party.y][party.x].units[0].Name+" says she's not going down without a fight!"))
				}else if(map[party.y][party.x].units.length > 2){//Larger group
						Entrys.push("CDOM gulps down SUB's head and shoulders! The other girls look in horror as she keep swallowing until she's gone. I try to say something to keep the peace, but they all look ready for a fight!")
				}
			}else if(s[4] == 3){//WILLING
				if(party.units[s[1]].Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside DOM! I press my ear to her bloated belly, and hear SUB moan as she fingers herself one last time!")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB grabs the tongue and pulls DOM over to her. CSUB says she'd be glad to be a snack and lets DOM swallow her down!")
				}
				Entrys.push("Oh my, SUB just let DOM eat her!")
				
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		// DIFF HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("CSUB is too big for DOM to eat!")
			}else if(s[4] == 0){//FAILED
				if(unit(s[2]).flying && !unit(s[1]).flying){
					Entrys.push("CSUB's poor stomach grumbles as SUB flies above her. She sticks her tongue out mockingly.")
					Entrys.push("CSUB leaps at SUB, but she's too high up. CSUB laughs at her from a safe distance.")
					Entrys.push("CSUB tries catching SUB as she flies by, but SUB's just too quick. She shakes her tasty tush teasingly in the air.")
					Entrys.push("CSUB's poor stomach grumbles as SUB flies above her.")
					Entrys.push("CSUB leaps at SUB, but she's too high up.")
					Entrys.push("CSUB tries catching SUB as she flies by, but SUB's just too quick.")
				}else{
					Entrys = ["CDOM just tried to eat SUB, but she wiggled out of her grasp."]
				}
			}else if(s[4] == 1){//ASLEEP
				Entrys.push("CDOM grabs SUB while she's still sleeping, and swallows her down!")
			}else if(s[4] == 2){//UNWILLING
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside DOM!")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! CSUB falls down and is dragged along the ground towards DOM. CSUB cries out before she's devoured in one massive gulp!")
					if(unit(s[2]).willing){
						Entrys.push("CDOM's tongue flings out at SUB and latches on! CSUB falls down and is dragged along the ground towards DOM. Surprisingly, SUB cries out in bliss before she's devoured in one massive gulp!")
					}
				}
				Entrys.push("CDOM just ate SUB!")
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
				Entrys = ["CSUB wraps her hand around my swollen member and starts to lick the tip. Soon shes bobbing down the shaft as far as she can take. With my balls swollen from the "+Cocked.Name+" my cum overwhelms SUB and it dribbles out her nose as I fill her belly!"]
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
				Entrys.push("I gently push SUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","Without a word, I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture.")
			}
			Entrys.push("I grab SUB by the hips, and thrust until we both cum!")
		}else if(s[1]==0 && s[2] < 100 && map[party.y][party.x].hostile){
		// HERO GOOD HOSTILE
			Entrys.push("I grab SUB by the hips, and thrust until we both cum!")
		}else if(s[1]==0 && s[2] >=99 && !map[party.y][party.x].hostile){
		// HERO FOOD PEACE
			if(s[3] == 1){//FUCK
			if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
					if(Math.random()<.90){
						Entrys.push("I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I plunge myself inside her, and she arches her back. I continue to thrust until we both cum!")
					}else{
						Entrys.push("I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I get a different idea however, and ram myself into her other hole! She yelps at the intrusion and looks back in shock. I continue to pump her asshole as she wiggles and writhes under me. she starts to scream out, first in pain, but then in pleasure. CSUBs soon crying for me to fuck her harder, and a few deep thrusts later she's cumming as I fill her behind!")
					}
			}
			if(s[5]=="Indoors"){
				Entrys.push("I gently push SUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","Without a word, I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture.")
			}
			if(s[5]=="Forest" && (map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl")){
				Entrys.push("I approach SUB while she's leaning against a large tree. She bites her lip as I lift her leg. She gives me a nod and I plunge myself deep inside her! She moans as she's fucked in the middle of the forest!")
				Entrys.push("I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her bean. She grinds her thighs together as they become soaked. Her legs buckle, and she drops onto the grass. I straddle her legs and start to pound her from behind! She moans for more, and I dont stop until she shudders under me. As we both lie in the grass afterward, she says I can eat her next time if I want...")
			}		
			Entrys.push("I start kissing SUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me, she leans in for another kiss as we both cum!")
			Entrys.push("I grab SUB by the hips, and start thrusting! She's timid at first, but soon she's crying for more!")
			Entrys.push("I turn SUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We mate until she cries out in bliss!")
							
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
					Entrys.push("I tackle SUB, and ask if she really wants to fight. She responds with a kiss. We lock lips as she guides my member into her. She moans as I start thrusting, and soon we both cum together!")
					Entrys.push("I start kissing SUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me, she leans in for another kiss as we both cum!")
					Entrys.push("I grab SUB by the hips, and start thrusting! She's timid at first, but soon she's crying for more!")
					Entrys.push("I turn SUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We make love until she cries out in bliss!")
				}else{		
					Entrys = ["I tackle SUB, and ask if she really wants to fight. She responds with a kiss. We lock lips as she guides my member into her. She moans as I start thrusting, and soon we both cum together!","I grab SUB by the hips, and start thrusting! She's timid at first, but soon she's crying for more!"]
				}
				if(map[party.y][party.x].units[s[2]-100].flying){//THIS WONT WORK FOR FAERIES!!!
					Entrys = ["I ask SUB if she's interested in a good time down here, she swoops down and tackles me to the ground. As I regain my senses I feel her guiding my member into herself. She moans when I start thrusting, and soon we both cum together!","I ask SUB if she's interested in a good time down here, she swoops down and kisses me. I grab her by the hips, and start thrusting! She's timid at first, but soon she's crying for more!","I ask SUB if she's interested in a good time down here, she swoops by and knocks me to the ground. She quickly lands and straddles me. I hold her hips as she rides me, she wraps her wings around me as we both cum!"]
				}
			}else{//FAIL
				Entrys.push("I try to make a move on SUB, but she's not in the mood.")
				if(map[party.y][party.x].units[s[2]-100].flying){
					Entrys = ["I ask SUB if she's interested in a good time down here, she says at her altitude my prick looks tiny. Ouch that hurt!","I ask SUB if she's interested in a good time down here, she shakes her tush and says maybe another time.","I ask SUB if she's interested in a good time down here, she sticks out her tongue and says she's not falling for any of my tricks.","I ask SUB if she's interested in a good time down here, she blows me a kiss and says she'll think about it."]
				}
			}
		}else
		//------------------------------------------------------------------------------------------
		if(s[1] < 100 && s[2] == 0 && map[party.y][party.x].hostile){
		// GOOD HERO PEACE
			Entrys.push("Oh god, DOM just fucked my brains out!")
		}else if(s[1] < 100 && s[2] == 0 && !map[party.y][party.x].hostile){
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
				Entrys.push("DOM trys to make a move on SUB but gets rejected.")
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		// DIFF HOSTILE
			if(s[3] == 1){//FUCK
				Entrys.push("Oh wow, DOM and SUB just made love! Now they're cuddling while they sleep.")
			}else{//FAIL
				Entrys.push("DOM trys to make a move on SUB but gets rejected.")
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*/OLD SETUP
	 if(s[0]==0){//FIGHT------------------------------------------------------------------------------------------------------------------------------
		if(s[4] < 1){
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					if(party.units[s[2]].asleep){
						Entrys = ["I should let her sleep, she looks tired."]
					}else{
						Entrys = ["I roughly spank SUB's behind, she pouts as she rubs where my hand left its mark."]
					}
				}else{
					if(s[5]=="Indoors" && Math.random()<.25){
						Entrys = ["I shove SUB into a wall.","I throw a chair at SUB, it breaks into pieces against her!"]
					}else{
						if(map[party.y][party.x].units[s[2]-100].flying && s[3] == 0){
							Entrys = ["I swing my fist at SUB, but she's flying to high to hit!","I kick at SUB, but she flies away too quick","I try headbutting SUB, but she's too swift while airborne!"]
						}else{
							Entrys = ["I swing my fist at SUB!","I kick the SUB!","I headbutt SUB, she stumbles back!"]
						}
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
				//DOUBLE CHECK WHAT HAPPENS WHEN ATTACKING PROTAG
					Entrys = ["CGOODDOM tries to attack SUB, but I quickly get between them and stop her!"]
				}else{
					if(map[party.y][party.x].units[s[2]-100].flying && s[3] == 0){
						Entrys = ["CGOODDOM shakes her fist at SUB as she flies above safely.","CGOODDOM tries attacking SUB, but she flies away too quickly."]
					}else{
						if(party.units[s[1]].Tags[0] == "Catgirl" && Math.random()<.25){
							if(s[4] < .5){
								Entrys = ["CGOODDOM's claw slashes at SUB, leaving scratchmarks!","CGOODDOM reveals her fangs before biting SUB!"]
							}else{
								Entrys = ["CGOODDOM's claw slashes at SUB, leaving bloody streaks!","CGOODDOM reveals her fangs before biting SUB. She pulls away to reveal a bloody wound"]
							}
						}else if(party.units[s[1]].Tags[0] == "Foxgirl" && Math.random()<.25){
							Entrys = ["CGOODDOM sneaks behind SUB and sweeps out her leg, cleverly tripping SUB!","CGOODDOM leaps into the air and slams SUB into the ground!","CGOODDOM bites down on SUB, she doen't let go until she's hit on the nose!"]
						}else if(party.units[s[1]].Tags[0] == "Froggirl" && Math.random()<.25){
							if(s[4] < .5){
								Entrys = ["CGOODDOM's tongue flings out at SUB and latches on! SUB is almost pulled to the ground before breaking free!"]
							}else{
								Entrys = ["CGOODDOM's tongue flings out at SUB and latches on! SUB falls over and is dragged along the ground before she's able to pull it off!"]
							}
						}else{
							Entrys = ["CGOODDOM attacks SUB!"]
						}
					}
				}
			}else{//dom=food
				if(s[5]=="Indoors" && s[2]==0 && Math.random()<.25){
					Entrys = ["CFOODDOM shoves me into the door, she screams that I better leave now while I still can!","With no regard for her own furnature, FOODDOM throws a chair, it hits SUB right in the face!","With a running start, FOODDOM uses her shoulder to slam SUB into a wall!"]
				}else{
					if(party.units[s[2]].flying && s[3] == 0){
						Entrys = ["CFOODDOM shakes her fist at SUB as she flies above safely.","CFOODDOM tries attacking SUB, but she flies away too quickly."]
					}else{
						if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Catgirl" && Math.random()<.25){
							if(s[4] < .5){
								Entrys = ["CFOODDOM's claw slashes at SUB, leaving scratchmarks!","CFOODDOM reveals her fangs before biting SUB!"]
							}else{
								Entrys = ["CFOODDOM's claw slashes at SUB, leaving bloody streaks!","CFOODDOM reveals her fangs before biting SUB. She pulls away to reveal a bloody wound"]
							}
						}else if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Foxgirl" && Math.random()<.25){
							if(s[2] == 0){
								Entrys = ["I lose sight of FOODDOM until I feel her leg sweep into mine, knocking me to the ground!","CFOODDOM leaps into the air and slams SUB into the ground!","CFOODDOM bites down on SUB, she doen't let go until I hit her nose!"]
							}else{
								Entrys = ["CFOODDOM sneaks behind SUB and sweeps out her leg, cleverly tripping her!","CFOODDOM's leaps into the air and slams SUB into the ground!","CFOODDOM bites down on SUB, she doen't let go until she's hit on the nose!"]
							}
						}else if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Froggirl" && Math.random()<.25){
							if(s[2] == 0){
								Entrys = ["CFOODDOM's tongue flings out at me, it hits like a fist!"]
							}else{
								if(s[4] < .5){
									Entrys = ["CFOODDOM's tongue flings out at SUB and latches on! SUB is almost pulled to the ground before breaking free!"]
								}else{
									Entrys = ["CFOODDOM's tongue flings out at SUB and latches on! SUB falls over and is dragged along the ground before she's able to pull it off!"]
								}
							}
						}else{
							Entrys = ["CFOODDOM attacks SUB!"]
						}
					}
				}
			}
		}else{
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					Entrys = ["I lose my temper and kill SUB, I feel fucking horrible afterwards!","I kill SUB for no reason at all!"]
				}else{
					if(s[5]=="Indoors" && Math.random()<.5){
						Entrys = ["I shove SUB into a wall, she crumbles to the ground in defeat!","I throw a chair at SUB, it breaks against her face! She falls to the floor defeated!"]
					}else{
						Entrys = ["I swing my fist at SUB, she falls in defeat!","I kick the SUB, she falls down in defeat!","I headbutt SUB, she stumbles back before falling over in defeat!"]
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
					Entrys = ["We are supposed to be a team but GOODDOM just killed SUB!"]
				}else{
					Entrys = ["CGOODDOM kills SUB!"]
				}
			}else{//dom=food
				Entrys = ["CFOODDOM kills SUB!"]
			}
		}
	 }		
	if(s[0]==1){//FLIRT------------------------------------------------------------------------------------------------------------------------------
		if(s[4] < .5+(Math.random()*.5)){//NOT HORNY
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					Entrys = ["I pat SUB's head, she looks comforted by my touch.","I give SUB's cute butt a squeeze, her face is so cute when she's embarrased.","I sneak up behind SUB, and cup her breasts. She wiggles out of my touch, telling me to stay focused on my quest."]
				}else if(map[party.y][party.x].hostile){
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["I blow SUB a kiss, she's bewildered by the gesture.","I tell SUB how adorable her face is when she's flying.","I wave at SUB, and tell her how cute she looks."]
					}else{
						if(s[5]=="Indoors" && Math.random()<.25){
							Entrys = ["I push SUB until her back is against the wall, she braces for an attack, but I only kiss her cheek.","I press SUB against the table, I give her ass a smack before backing away."]
						}else{
							if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
								Entrys = ["I grapple SUB, with one hand I rub her inner ear. She pushes me away confused, her face looks flustered.","I give SUB's tail a playful tug. She looks indignant, and keeps fighting."]
							}else{
								Entrys = ["I blow SUB a kiss, she's bewildered by the gesture.","I playfully spank SUB's behind and leap out of her reach.","Instead of fighing SUB, I keep my distance, telling her how cute she looks.","While avoiding her attacks, I tell SUB how adorable her face is while she's fighting."]
							}
						}
					}
				}else{//PASSIVE 
					if(s[5]=="Indoors" && Math.random()<.25){
						Entrys = ["I sit down at the table, and have some tea with SUB","I help SUB with cleaning the place, we make idle chitchat as we work together","I sit down across from SUB as she sips from a cup and tell her how cute she is. she says I'm exaggerating before returning to her drink."]
					}else{
						Entrys = ["I wave at SUB, and she waves back before remembering this is a fight.","I blow SUB a kiss, she smiles at the gesture.","I put a flower behind SUB's ear, she giggles from the ticklish stem.","I tell SUB that her eyes are beautiful, she thanks me for the complement."]
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
					Entrys = ["We are supposed to stay focused, but GOODDOM keeps kissing SUB!"]
				}else{
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["CGOODDOM blows SUB a kiss, she's bewildered by the gesture.","CGOODDOM tells SUB how adorable her face is when she's flying.","CGOODDOM waves at SUB, and tells her how cute she looks."]
					}else{
						Entrys = ["CGOODDOM gives SUB a hug, before being pushed away.","CGOODDOM gives SUB's breast a squeese, before being pushed away.","CGOODDOM kisses SUB, before being pushed away."]
					}
				}
			}else{//dom=food
				Entrys = ["Surprisingly, FOODDOM hugs SUB!"]
			}
		}else{//VERY HORNY
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					Entrys = ["I use two fingers to rub SUB's bean, she moans as she grinds against my hand!","I sneak up behind SUB, and give both nipples a squeese, she pushes against me as she gasps for air!"]
				}else if(map[party.y][party.x].hostile){
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["I blow SUB a kiss, she's bewildered by the gesture.","I tell SUB how sexy she looks when she's flying.","I tell SUB all the naughty things I want to do to her when she lands."]
					}else{
						if(s[5]=="Indoors" && Math.random()<.25){
							Entrys = ["I push SUB until her back is against the wall, she braces for my fist, but instead feels my lips against hers.","I press SUB against the table, and grind against her before letting go."]
						}else{
							if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
								Entrys = ["I call SUB a naughty kitty. She bites her lip, looking flustered.","I pin SUB's arms up, with both hands I massage her furry ears. Her body goes slack against mine until she remembers she was fighting me!","I give SUB's tail a playful tug. She moans under her breath!"]
							}else{																																																												
								Entrys = ["I embrace SUB, and whisper sweet nothings into her ear, she hesitates a moment before pushing me away.","I playfully spank SUB's behind and slip out of her reach, she rubs where my hand left its mark, her face looks flushed.","Instead of fighing SUB, I keep my distance, telling her all the naughty things I want to do to her. She tries to look focused, but she's breathing heavily!","While avoiding her attacks, I ask SUB if she's this passionate in bed."]
							}
						}
					}
				}else{//PASSIVE
					if(s[5]=="Indoors" && Math.random()<.25){
						Entrys = ["I sit down at the table, and share a drink with SUB, the booze makes us both open up.","I help SUB with cleaning the place, we keep finding excuses to rub against each-other.","I tell SUB how sexy she looks, she spills her drink in surprise."]
					}else{
						Entrys = ["I blow SUB a kiss, she smiles at the gesture.","I put a flower behind SUB's ear, she gives me a hug in return.","I tell SUB that her eyes are beautiful, she thanks me for the complement."]
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
					Entrys = ["We are supposed to stay focused, but GOODDOM keeps making out with SUB."]
				}else{
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["CSUB pumps her hips at SUB, she's flustered by the gesture.","CSUB tells SUB how sexy her body looks when she's flying.","CGOODDOM tells SUB all the naughty things she plans to do to her when she lands.","CSUB says she saw SUB's lust when she flies by, SUB tells her to shutup!"]
					}else{
						Entrys = ["CSUB screams out as GOODDOM pinches down hard on both of her exposed nipples! CGOODDOM asks if SUB is going to be a good girl, and releases the sore nipples when SUB whimpers that she will!","CGOODDOM grabs SUB's head and pulls her into a passionate kiss. CSUB struggles to escape, but her eyes are rolled back. All fighting stops as the two make out. Eventually GOODDOM breaks the kiss and steps back.","CGOODDOM slips her hand between SUB's legs, she moans before shoving GOODDOM away."]
					}
				}
			}else{//dom=food
				Entrys = ["Surprisingly, FOODDOM kisses SUB!"]
			}
		}
	 }
	if(s[0]==2){//FLEE------------------------------------------------------------------------------------------------------------------------------
		if(s[3] == 1){//Successfully fled!
			if(s[1] == 0){
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["I sneak under the table, and slip out the door before SUB can stop me!"]
				}else{
					Entrys = ["I slip past SUB and keep running! I successfully escape the fight!"]
				}
			}else{
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["CGOODDOM sneaks under the table, and slips through the doorway before SUB can stop her!"]
				}else{
					Entrys = ["CGOODDOM slips past SUB and keeps running! She got away!"]
				}
			 }
		}else if(map[party.y][party.x].hostile){
			if(s[1] == 0){
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["I try to escape, but SUB throws a chair at me, knocking me away from the door! Tears start to run down my face as I realize SUB has me right where she wants me!"]
				}else{
					Entrys = ["I try to escape, but SUB blocks my way. Sweat starts to pour down my face as I worry this fight might be my last!"]
				 }
			}else{
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["CGOODDOM tries to escape, but SUB quickly blocks the door! Tears start to run down her face as SUB laughs!"]
				}else{
					Entrys = ["CGOODDOM tries to run away, but she's blocked by SUB! She looks panicked as the other girl laughs at the failed escape attempt!"]
				}
			}
		}else{//NOT HOSTILE, FUNNY
			if(s[1] == 0){
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["I try to leave, but SUB offers me a warm cookie from a plate! I sit at the table with SUB and munch down the tasty treat. If her cooking is this good, I wonder how great she tastes!"]
				}else{
					Entrys = ["I turn to leave, but SUB grabs my hand. I look back and she pulls me into a kiss! I guess I can stay a little longer."]
				 }
			}else{
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["CGOODDOM tries to leave, but SUB offers her a warm cookie from a plate! CGOODDOM sits at the table with SUB and munches down her tasty treat!"]
				}else{
					Entrys = ["CGOODDOM turns to leave, but SUB asks if she will stay a little longer. They walk back to us holding hands."]
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
						Entrys = ["I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose before finishing her descent. I feel my belly shudder as she cums!"]
					
					}else{
						Entrys = ["I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She giggles as my tongue plays with her breasts, and says it's about time I ate her! She plays with herself as I finish swallowing her down!","I grab SUB by the hips, and swallow her down!","I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise as she stops being my lover and becomes my nutrition. Trembling, she asks if I wouldn't rather fuck her instead, but I keep gulping down to her waist. When I start swallowing her hips, she begs me to enjoy her properly at least! My tongue finds her slit and starts getting her off as her rump hangs out of my mouth. I give SUB one last orgasm before fully taking her down!"]
					}
				}else{//FOOD
					if(s[4] == 3){//WILLING
						if(s[5]=="Indoors" && Math.random()<.25 && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
							Entrys = ["My stomach growls loudly. I ask SUB if theres any food left. She smiles before saying she has an idea. I watch SUB hop onto the table and offer me her legs, I start by sucking on her feet before swallowing down to her hips. My tongue finds her slit and I give her one last orgasm before gulping the rest of her down!","I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too delicious not to eat! I start swallowing one cheek, and soon get both into my maw. CSUB looks back and sees her behind completely engulfed. Her smile widens, and she says she hopes I enjoy my tasty bunny snack. She yelps when I gulp her down to her breasts. My tongue teases her nipples until she cums, and I gobble the rest of her down!"]
						}else{
							if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
								Entrys = ["I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose as I finish my meal. I feel my belly shudder as she cums!","I call SUB a cute bunny snack. She says if she's just a snack, I should eat her! My hands wrap around her waist and I lift her into a kiss before swallowing her head and shoulders. She cums before I even reach her hips, and I gulp down her still quivering legs!"]
							}else if(party.units.length == 2 && Math.random()<.50){
								Entrys = [String("My "+party.units[1].Name +" watches as I start swallowing SUB head first! As I get to SUB's waist, I see that my "+party.units[1].Name+" has started fingering herself as she watches me taste SUB's lower lips. After I finish eating SUB, I watch as my "+party.units[1].Name +" orgasms loudly. Panting, she asks when I'm going to eat her!"),String("I grab SUB by her feet and start swallowing them down. My "+party.units[1].Name+" approaches and starts making out with SUB! As I continue up my tasty meal they keep at it until I swallow SUB's head. I lock lips with my "+party.units[1].Name+" to continue the kiss. Eventually we break away as a strand of saliva droops between us. She feels my belly with her hand, and a handprint emerges from inside to match hers.")]
							}else{		
								Entrys = ["I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. Instead of struggling she says it's about time somebody ate her! She plays with herself as I finish swallowing her down!","I gulp down SUB, I feel her masturbate inside me until she passes out!"]
							}
						}
						
					}else if(s[4] == 2){//UNWILLING
						if(!map[party.y][party.x].hostile){//NOT HOSTILE
							if(map[party.y][party.x].units.length == 1){//Alone
								if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
									Entrys = ["I call SUB a cute bunny snack. Her eyes grow wide, and she tries to run away! I leap at her and barely grab her ankles. As she struggles, I shove her feet into my mouth and start swallowing. She stops squirming, and just looks back at me upset. I swallow her quickly, but try to be gentle. She tucks her arms into my maw and soon she's in my belly."]
								}else{		
									Entrys = ["I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise at suddenly becoming food! She begs for me not to eat her while I swallow down the rest of her.","I gulp down SUB, I feel her struggle inside me until she passes out!"]
								}
							}else if(map[party.y][party.x].units.length == 2 && s[2]==100){
								Entrys = ["I gulp down SUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The" +map[party.y][party.x].units[1].Name+" says she's not going down without a fight!"]
							}else if(map[party.y][party.x].units.length == 2){
								Entrys = ["I gulp down SUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The" +map[party.y][party.x].units[0].Name+" says she's not going down without a fight!"]
							}else{//Larger group
								Entrys = ["I gulp down SUB's head and shoulders! The other girls look in horror as I keep swallowing until she's gone. I look at the remaining girl and lick my lips! They all look ready for a fight!"]
							}
						}else if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
							Entrys = ["CSUB swipes a claw at me as I shove her feet inside my mouth! She hisses and struggles the whole way down!"]
						}else{
							Entrys = ["I gulp down SUB, I feel her struggle inside me until she passes out!"]
						}
					}else{//UNSUCCESSFUL
						if(map[party.y][party.x].hostile){
							if(map[party.y][party.x].units[s[2]-100].flying){
								Entrys = ["My poor stomach grumbles as SUB flies above me.","I leap at SUB, but she's too high up.","I try catching SUB as she flies by, but she's just too quick."]
							}else{
								Entrys = ["I try to eat SUB, but she fights back, and wiggles out of my grasp."]
							}
						}else{
							if(map[party.y][party.x].units.length == 1 || Math.random()<.5){
								Entrys = ["I try to eat SUB, but she wiggles out of my grasp. She looks pissed at my betrayal, and ready for a fight!"]
							}else{
								Entrys = ["I gulp down SUB's head and shoulders, but another girl quickly pushes me over and pulls SUB back out. It looks I'll have to fight for my dinner this time!"]
							}
						}
					}
				}
			}
		}else if(s[1] < 100){
			if(s[2] == 0){
				Entrys = ["Oh FUCK, GOODDOM just ate me!"]
			}else if(s[2]<100){
				Entrys = ["CGOODDOM just ate SUB!"]
			}else{
				if(s[4] == 3){//WILLING
					if(party.units[s[1]].Tags[0] == "Froggirl"){//
						Entrys = ["CGOODDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside GOODDOM! I press my ear to her bloated belly, and hear SUB moan as she fingers herself one last time!","CGOODDOM's tongue flings out at SUB and latches on! SUB grabs the tongue and pulls GOODDOM over to her. SUB says she'd be glad to be a snack and lets GOODDOM swallow her down!"]
					}else{
						Entrys = ["Oh my, SUB just let GOODDOM eat her!"]
					}
				}else if(s[4] == 2){
					if(map[party.y][party.x].hostile){//HOSTILE
						if(party.units[s[1]].Tags[0] == "Froggirl"){//
							Entrys = ["CGOODDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside GOODDOM!","CGOODDOM's tongue flings out at SUB and latches on! CSUB falls down and is dragged along the ground towards GOODDOM. CSUB cries out before she's devoured in one massive gulp!"]
						}else{
							Entrys = ["CGOODDOM just ate SUB!"]
						}
					}else{//NONHOSTILE
						if(map[party.y][party.x].units.length == 1){
						Entrys = ["CGOODDOM eats SUB!"]
						}else if(map[party.y][party.x].units.length == 2 && s[2]==100){
								Entrys = ["CGOODDOM gulps down SUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" looks pissed and tries to pull SUB out, but GOODDOM just keep swallowing until she's gone. The" +map[party.y][party.x].units[1].Name+" says she's not going down without a fight!"]
						}else if(map[party.y][party.x].units.length == 2){
								Entrys = ["CGOODDOM gulps down SUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull SUB out, but GOODDOM just keep swallowing until she's gone. The" +map[party.y][party.x].units[0].Name+" says she's not going down without a fight!"]
						}else{//Larger group
								Entrys = ["CGOODDOM gulps down SUB's head and shoulders! The other girls look in horror as she keep swallowing until she's gone. I try to say something to keep the peace, but they all look ready for a fight!"]
						}
					}
				}else{
					if(map[party.y][party.x].hostile){
						if(map[party.y][party.x].units[s[2]-100].flying){
							Entrys = ["I hear GOODDOM's stomach grumble as SUB flies above her.","CGOODDOM leaps at SUB, but she's too high up.","CGOODDOM tries catching SUB as she flies by, but isn't fast enough."]
						}else{
							Entrys = ["CGOODDOM just tried to eat SUB, but she wiggled out of her grasp."]
						}
					}else{
						if(map[party.y][party.x].units.length == 1 || Math.random()<.5){
							Entrys = ["CGOODDOM tries to eat SUB, but she wiggles out of her grasp. She looks pissed at GOODDOM's betrayal, and ready for a fight!"]
						}else{
							Entrys = ["CGOODDOM gulps down SUB's head and shoulders, but another girl quickly pushes her over and pulls SUB back out. It looks we'll have to fight for our dinner this time!"]
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
						Entrys = ["CFOODDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside FOODDOM!","CFOODDOM's tongue flings out at SUB and latches on! SUB falls down and is dragged along the ground towards FOODDOM. CSUB cries out before she's devoured in one massive gulp!"]
					}else{
						Entrys = ["CFOODDOM just ate SUB!"]
					}
				}else{
					Entrys = ["CFOODDOM just tried to eat SUB, but she wiggled out of her grasp."]
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
						Entrys = ["I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her bean. She grinds her thighs together as they become soaked. Her legs buckle, and she falls into the grass. I straddle her legs and start to pound her from behind! She moans for more, and I dont stop until she shudders under me. As we both lie in the grass afterward, she says she really though I was going to eat her this time!"]
					}else{
						Entrys = ["I grab SUB by the hips, and thrust until we both cum!"]
					}
				}else{//FOOD
					if(s[3] == 1){
						if(map[party.y][party.x].hostile){//HOSTILE
							if(map[party.y][party.x].units[s[2]-100].flying){//THIS WONT WORK FOR FAERIES!!!
								Entrys = ["I ask SUB if she's interested in a good time down here, she swoops down and tackles me to the ground. As I regain my senses I feel her guiding my member into herself. She moans when I start thrusting, and soon we both cum together!","I ask SUB if she's interested in a good time down here, she swoops down and kisses me. I grab her by the hips, and start thrusting! She's timid at first, but soon she's crying for more!","I ask SUB if she's interested in a good time down here, she swoops by and knocks me to the ground. She quickly lands and straddles me. I hold her hips as she rides me, she wraps her wings around me as we both cum!"]
							}else if(s[5]=="Indoors" && Math.random()<.25){
								Entrys = ["I push SUB's back against the wall. She hesitates before lifting her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture."]
							}else{
								if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.25){
									Entrys = ["I call SUB a naughty kitty. She tells me to shut up and fuck her! My hands wrap around her waist and I lift her over my member. She purrs as I slowly lower her down. Once I'm fully in her, she wraps her arms and tail around me and starts moving her hips. She bounces on my cock as I thrust into her! Soon we are both covered in sweat as we cum together!","I start caressing SUB's furry ears. I watch as all the anger drains from her face at my touch, I have definitly found her weak spot! She moves closer to rest her head against my chest, but looks down in surprise when she bumps my erection. She makes a naughty grin as she gets an idea. CSUB lowers herself to my member and starts to blow me while I continue to stimulate her with my massage. She orgasms from me rubbing her ears before her blowjob makes me cum too!","I lift SUB's tail and thrust myself inside from behind. She looks bewildered at first, but after a moment her body starts moving with mine. Soon I firmly grip both of her hips and fill her with my seed as she cries out in ecstasy!"]
								}else if((map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl") && Math.random()<.25){
									//Has Legs
									Entrys = ["I tackle SUB, and ask if she really wants to fight. She responds with a kiss. We lock lips as she guides my member into her. She moans as I start thrusting, and soon we both cum together!","I start kissing SUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me, she leans in for another kiss as we both cum!","I grab SUB by the hips, and start thrusting! She's timid at first, but soon she's crying for more!","I turn SUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We make love until she cries out in bliss!"]
								}else{		
									Entrys = ["I tackle SUB, and ask if she really wants to fight. She responds with a kiss. We lock lips as she guides my member into her. She moans as I start thrusting, and soon we both cum together!","I grab SUB by the hips, and start thrusting! She's timid at first, but soon she's crying for more!"]
								}
							}
						}else{//NOT HOSTILE		VERY PASSIVE
							if(s[5]=="Indoors" && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
									if(Math.random()<.90){
										Entrys = ["I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I plunge myself inside her, and she arches her back. I continue to thrust until we both cum!"]
									}else{
										Entrys = ["I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too sexy not to fuck! I get a different idea however, and ram myself into her other hole! She yelps at the intrusion and looks back in shock. I continue to pump her asshole as she wiggles and writhes under me. she starts to scream out, first in pain, but then in pleasure. CSUBs soon crying me to fuck her harder, and a few deep thrusts later she's cumming as I fill her behind!"]
									}
							}else if(s[5]=="Indoors" && Math.random()<.25){
								Entrys = ["I gently push SUB's back against the wall. She lifts her leg, revealing her wet lips. I fuck her against the wall until she cries out in pleasure!","Without a word, I bend SUB over the table and start pounding her from behind! She cries for more before we both finish together against the wooden furniture."]
							}else{
								if(s[5]=="Forest"&& Math.random()<.5 && (map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" || map[party.y][party.x].units[s[2]-100].Tags[0] == "Foxgirl")){
									Entrys = ["I approach SUB while she's leaning against a large tree. She bites her lip as I lift her leg. She gives me a nod and I plunge myself deep inside her! She moans as she's fucked in the middle of the forest!","I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her bean. She grinds her thighs together as they become soaked. Her legs buckle, and she drops onto the grass. I straddle her legs and start to pound her from behind! She moans for more, and I dont stop until she shudders under me. As we both lie in the grass afterward, she says I can eat her next time if I want..."]
								}else{		
									Entrys = ["I start kissing SUB, and soon she's kissing back. She pushes me onto the ground and straddles me. I hold her hips as she rides me, she leans in for another kiss as we both cum!","I grab SUB by the hips, and start thrusting! She's timid at first, but soon she's crying for more!","I turn SUB around and start rubbing my member between her legs. She tells me to stop teasing her and stick it in. We mate until she cries out in bliss!"]
								}
							}
						}
					}else{
						if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
							Entrys = ["Hissing, SUB swipes a claw at me as I try to make a move."]
						}else{
							if(map[party.y][party.x].units[s[2]-100].flying){
								Entrys = ["I ask SUB if she's interested in a good time down here, she says at her altitude my prick looks tiny. Ouch that hurt!","I ask SUB if she's interested in a good time down here, she shakes her tush and says maybe another time.","I ask SUB if she's interested in a good time down here, she sticks out her tongue and says she's not falling for any of my tricks.","I ask SUB if she's interested in a good time down here, she blows me a kiss and says she'll think about it."]
							}else{
								Entrys = ["I try to make a move on SUB, but she's not in the mood."]
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
				Entrys = ["Oh wow, GOODDOM just fucked SUB in front of me!"]
			}else{
				if(map[party.y][party.x].hostile){
					if(s[3] == 1){
						if(s[4] == 0){
							Entrys = ["Oh wow, GOODDOM just fucked SUB until she was exhausted, she's out like a light!"]
						}else{//both fall asleep
							Entrys = ["Oh wow, GOODDOM and SUB just made love! Now they're cuddling while they sleep."]
						}
					}else{
						Entrys = ["GOODDOM trys to make a move on SUB but she's not in the mood."]
					}
				}else{//FRIENDLY AKA NO SLEEPING
					if(s[3] == 1){
						if(s[4] == 0){
							Entrys = ["CGOODDOM just ate out SUB until she was screaming! Afterwards she asked if SUB wanted to join our adventure!"]
						}else{//both fall asleep
							Entrys = ["Oh wow, GOODDOM and SUB just made love!"]
						}
					}else{
						Entrys = ["GOODDOM trys to make a move on SUB but got rejected."]
					}
				}
			}
		}
	 }	
	 
	 //*/
	 if(Entrys.length == 0){Entrys.push("not available yet");}
	 Entry = Entrys[Math.floor(Math.random()*Entrys.length)]
	 //REPLACE
	 
	 if(s[1] == 0){
		Entry = Entry.replace(/DOM/g, "me");
	 }else if(s[1] < 100){
		Entry = Entry.replace(/CDOM/g, "My "+party.units[s[1]].Name);
		Entry = Entry.replace(/DOM/g, "my "+party.units[s[1]].Name);
	 }else{
		Entry = Entry.replace(/CDOM/g, "The "+map[party.y][party.x].units[s[1]-100].Name); 
		Entry = Entry.replace(/DOM/g, "the "+map[party.y][party.x].units[s[1]-100].Name); 
	 }
	 if(s[2] == 0){
		Entry = Entry.replace(/SUB/g, "me");
	 }else if(s[2] < 100){
		Entry = Entry.replace(/CSUB/g, "My "+party.units[s[2]].Name);
		Entry = Entry.replace(/SUB/g, "my "+party.units[s[2]].Name);
	 }else{
		Entry = Entry.replace(/CSUB/g, "The "+map[party.y][party.x].units[s[2]-100].Name);
		Entry = Entry.replace(/SUB/g, "the "+map[party.y][party.x].units[s[2]-100].Name);
	 }//*/
	 //
	return Entry;
}
function AR(Entry){// ACTION RANDOMIZER
	//return Math.round((Entry*.75)+(Math.random()*Entry)*.50)
	return Math.max(Math.round(Entry + (Math.random()*3) - (Math.random()*3)),1)
}
function SR(Entry){// STAT RANDOMIZER 7 = 5-9
	return Math.max(Math.round(Entry + (Math.random()*2) - (Math.random()*2)),1)
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
		if(dice > 99.9){//BunnyGirls
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
				Feed:5,
				Tags:["Bunnygirl","Small"],
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
				Feed:5,
				Tags:["Bunnygirl","Small"],
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
				Feed:5,
				Tags:["Bunnygirl","Small"],
				Cond:[]
			})
		}else if(dice > 90){
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
				Feed:5,
				Tags:["Bunnygirl","Small"],
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
					Feed:5,
					Tags:["Bunnygirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 89.9){
			map[i][o] = {tag:"Forest",name:randomEntry("CatForest"),units:[],hostile:true};
			map[i][o].units.push({
				Name:"Twin Catgirl",
				CPun:0,
				CPle:0,
				MPun:20,
				MPle:10,
				Figh:SR(8),
				Feas:SR(5),
				Flir:SR(5),
				Fuck:SR(5),
				Flee:SR(5),
				Feed:5,
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
			map[i][o] = {tag:"Forest",name:randomEntry("CatForest"),units:[],hostile:true};
			map[i][o].units.push({
				Name:randomEntry("CatDesc"),
				CPun:0,
				CPle:0,
				MPun:20,
				MPle:10,
				Figh:SR(8),
				Feas:SR(5),
				Flir:SR(5),
				Fuck:SR(5),
				Flee:SR(5),
				Feed:5,
				Tags:["Catgirl","Small"],
				Cond:[]
			})
		}else if(dice > 84.9){
			map[i][o] = {tag:"Forest",name:"Strange Shrine",units:[],hostile:true};
			map[i][o].units.push({
				Name:"Nine-Tailed Foxgirl",
				CPun:0,
				CPle:0,
				MPun:40,
				MPle:20,
				Figh:SR(8),
				Feas:SR(5),
				Flir:SR(5),
				Fuck:SR(3),
				Flee:SR(5),
				Feed:5,
				Tags:["Foxgirl","Small"],
				Cond:[]
			})
			while(Math.random()< 1 - (map[i][o].units.length/4)){
				map[i][o].units.push({
					Name:randomEntry("FoxDesc"),
					CPun:0,
					CPle:0,
					MPun:20,
					MPle:20,
					Figh:SR(8),
					Feas:SR(5),
					Flir:SR(5),
					Fuck:SR(3),
					Flee:SR(5),
					Feed:5,
					Tags:["Foxgirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 77.5){//7.5 chance
			map[i][o] = {tag:"Forest",name:randomEntry("FoxForest"),units:[],hostile:true};
			while(map[i][o].units.length == 0 || Math.random()<.05){
				map[i][o].units.push({
					Name:randomEntry("FoxDesc"),
					CPun:0,
					CPle:0,
					MPun:20,
					MPle:20,
					Figh:SR(8),
					Feas:SR(5),
					Flir:SR(5),
					Fuck:SR(3),
					Flee:SR(5),
					Feed:5,
					Tags:["Foxgirl","Small"],
					Cond:[]
				})
			}
		}else if(dice > 75){//2.5 chance
			map[i][o] = {tag:"Forest",name:randomEntry("FrogForest"),units:[],hostile:true};
			map[i][o].units.push({
				Name:randomEntry("FrogDesc"),
				CPun:0,
				CPle:0,
				MPun:20,
				MPle:20,
				Figh:SR(5),
				Feas:SR(15),
				Flir:SR(5),
				Fuck:SR(5),
				Flee:SR(3),
				Feed:5,
				Tags:["Froggirl","Small","AntiFlying"],
				Cond:[]
			})
		}else if(dice > 72.5){//2.5 chance
			map[i][o] = {tag:"Forest",name:randomEntry("BatForest"),units:[],hostile:true};
			map[i][o].units.push({
				Name:randomEntry("BatDesc"),
				CPun:0,
				CPle:0,
				MPun:10,
				MPle:20,
				Figh:SR(8),
				Feas:SR(5),
				Flir:SR(3),
				Fuck:SR(5),
				Flee:SR(10),
				Feed:5,
				Tags:["Batgirl","Small","Flying"],
				Cond:[]
			})
		}else if(dice > 72.4){//.01 chance
			map[i][o].hostile=true;
			map[i][o].units.push({
				//Name:randomEntry("WolfDesc"),
				Name:"Lone Wolf",
				CPun:0,
				CPle:0,
				MPun:40,
				MPle:40,
				Figh:SR(20),
				Feas:SR(15),
				Flir:SR(5),
				Fuck:SR(5),
				Flee:SR(5),
				Feed:10,
				Tags:["Wolfgirl","Medium"],
				Cond:[]
			})
		 }
		
	}else if(land == "FortWolf"){
			while(Math.random()<1-(map[i][o].units.length*.20) || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("WolfDesc"),
					CPun:0,
					CPle:0,
					MPun:40,
					MPle:40,
					Figh:SR(20),
					Feas:SR(15),
					Flir:SR(5),
					Fuck:SR(5),
					Flee:SR(5),
					Feed:10,
					Tags:["Wolfgirl","Medium"],
					Cond:[]
				})
			 }
	}else if(land == "ForestWolf"){
		if(dice > 90){
			map[i][o] = {tag:"Forest",name:randomEntry("ForestWolf"),units:[],hostile:true};
			while(Math.random()<.1 || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("WolfDesc"),
					CPun:0,
					CPle:0,
					MPun:40,
					MPle:40,
					Figh:SR(20),
					Feas:SR(15),
					Flir:SR(5),
					Fuck:SR(5),
					Flee:SR(5),
					Feed:10,
					Tags:["Wolfgirl","Medium"],
					Cond:[]
				})
			 }
		 }else if(dice > 90){
			map[i][o] = {tag:"Forest",name:randomEntry("WolfForest"),units:[],hostile:true};
			while(Math.random()<.50 || map[i][o].units.length < 1){
				map[i][o].units.push({
					Name:randomEntry("WolfDesc"),
					CPun:0,
					CPle:0,
					MPun:40,
					MPle:40,
					Figh:SR(20),
					Feas:SR(15),
					Flir:SR(5),
					Fuck:SR(5),
					Flee:SR(5),
					Feed:10,
					Tags:["Wolfgirl","Medium"],
					Cond:[]
				})
			 }
		 }else if(dice > 85){
			map[i][o] = {tag:"Indoors",name:"Spacious Lodge",units:[],hostile:true};
			while(Math.random()<.75 || map[i][o].units.length < 2){
				map[i][o].units.push({
					Name:randomEntry("WolfDesc"),
					CPun:0,
					CPle:0,
					MPun:40,
					MPle:40,
					Figh:SR(20),
					Feas:SR(15),
					Flir:SR(5),
					Fuck:SR(5),
					Flee:SR(5),
					Feed:10,
					Tags:["Wolfgirl","Medium"],
					Cond:[]
				})
			 }
		 }
	}else if(land == "Plains"){
		if(dice > 98){
			map[i][o].name="Flowery Plains";
			while(Math.random()<.1 || map[i][o].units.length == 0){
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
					Feed:10,
					Tags:["Bunnygirl","Small"],
					Cond:[]
				})
			}
		}
		if(dice > 96){
			map[i][o].name="Flowery Plains";
			while(Math.random()<.01 || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("CatDesc"),
					CPun:0,
					CPle:0,
					MPun:20,
					MPle:10,
					Figh:SR(8),
					Feas:SR(5),
					Flir:SR(5),
					Fuck:SR(5),
					Flee:SR(5),
					Feed:5,
					Tags:["Catgirl","Small"],
					Cond:[]
				})
			}
		}
	}else if(land == "Cave"){
		if(dice > 90){
			map[i][o].hostile = true;
			map[i][o].units.push({
				Name:randomEntry("BatDesc"),
				CPun:0,
				CPle:0,
				MPun:10,
				MPle:20,
				Figh:SR(8),
				Feas:SR(5),
				Flir:SR(3),
				Fuck:SR(5),
				Flee:SR(10),
				Feed:5,
				Tags:["Batgirl","Small","Flying"],
				Cond:[]
			})
			while(Math.random()<.50){
				map[i][o].units.push({
					Name:randomEntry("BatDesc"),
					CPun:0,
					CPle:0,
					MPun:10,
					MPle:20,
					Figh:SR(8),
					Feas:SR(5),
					Flir:SR(3),
					Fuck:SR(5),
					Flee:SR(10),
					Feed:5,
					Tags:["Batgirl","Small","Flying"],
					Cond:[]
				})
			}
		}else if(dice > 70){
			map[i][o].hostile = true;
			while(Math.random()<.10 || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("SlimeDesc"),
					CPun:0,
					CPle:0,
					MPun:40,
					MPle:40,
					Figh:SR(15),
					Feas:SR(19),
					Flir:SR(5),
					Fuck:SR(5),
					Flee:SR(5),
					Feed:15,
					Tags:["Slimegirl","Medium"],
					Cond:[]
				})
			}
		}else if(dice > 50){
			map[i][o].hostile = false;
			while(Math.random()<.10 || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("MouseDesc"),
					CPun:0,
					MPun:5,
					CPle:0,
					MPle:20,
					Figh:SR(10),
					Feas:SR(10),
					Flir:SR(5),
					Fuck:SR(5),
					Flee:SR(20),
					Feed:10,
					Tags:["Mousegirl","Tiny"],
					Cond:[]
				})
			}
		}
	}else if(land == "CaveEnd"){
		if(dice > 80){
			map[i][o].hostile = true;
			while(Math.random()<.50 || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("BatDesc"),
					CPun:0,
					CPle:0,
					MPun:10,
					MPle:20,
					Figh:SR(8),
					Feas:SR(5),
					Flir:SR(3),
					Fuck:SR(5),
					Flee:SR(10),
					Feed:5,
					Tags:["Batgirl","Small","Flying"],
					Cond:[]
				})
			}
		}else if(dice > 30){
			map[i][o].hostile = true;
			while(Math.random()<.25 || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("SlimeDesc"),
					CPun:0,
					CPle:0,
					MPun:40,
					MPle:40,
					Figh:SR(15),
					Feas:SR(19),
					Flir:SR(5),
					Fuck:SR(5),
					Flee:SR(5),
					Feed:15,
					Tags:["Slimegirl","Medium"],
					Cond:[]
				})
			}
		}else if(dice > 05){
			map[i][o].hostile = false;
			while(Math.random()<.50 || map[i][o].units.length == 0){
				map[i][o].units.push({
					Name:randomEntry("MouseDesc"),
					CPun:0,
					MPun:5,
					CPle:0,
					MPle:15,
					Figh:SR(10),
					Feas:SR(10),
					Flir:SR(5),
					Fuck:SR(5),
					Flee:SR(20),
					Feed:10,
					Tags:["Mousegirl","tiny"],
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
	}else if(map[i][o].name == "Shady Clearing"){
		map[i][o].clr="#22bb55";
	}else if(map[i][o].name == "Flowery Clearing"){
		map[i][o].clr="#cc88cc";
	}else if(map[i][o].name == "Murky Pond"){//["Gloomy Forest","Gloomy Forest","Gloomy Forest","Small Cave","Small Cave", "Shady Clearing"]}
		map[i][o].clr="#66bbaa";
	}else if(map[i][o].name == "Bubbling Spring"){
		map[i][o].clr="#77bbdd";
	}else if(map[i][o].name == "Cozy Burrow" || map[i][o].name == "Treehouse" || map[i][o].name == "Strange Temple" || map[i][o].name == "Shabby Hut" || map[i][o].name == "Sturdy Cabin" || map[i][o].name == "Homely Cottage" || map[i][o].name == "Small Shack" || map[i][o].name == "Red Barn" || map[i][o].name == "Rundown Barn" || map[i][o].name == "Old Shed" || map[i][o].name == "Canvas Windmill"){
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
			party.units[0].CPle = Math.max(party.units[0].CPle-AR(party.units[o].Size*eatValue*2),0)
			increaseValue = party.units[o].Size
		}else{
			party.units[0].CPle = Math.max(party.units[0].CPle-AR(map[party.y][party.x].units[o-100].Size*eatValue*2),0)
			increaseValue = map[party.y][party.x].units[o-100].Size
		}
	}else if(i < 100){//GOOD
		if(o < 100 && party.units[i].CPle < party.units[i].MPle){
			party.units[i].CPle = Math.min(party.units[i].CPle+AR(party.units[o].Size*eatValue),party.units[0].MPle-1)
		}else if(party.units[i].CPle < party.units[i].MPle){
			party.units[i].CPle = Math.min(party.units[i].CPle+AR(map[party.y][party.x].units[o-100].Size*eatValue),party.units[i].MPle-1)
		}
	}else{
		if(o < 100 && map[party.y][party.x].units[i-100].CPle<map[party.y][party.x].units[i-100].MPle){
			map[party.y][party.x].units[i-100].CPle = Math.min(map[party.y][party.x].units[i-100].CPle+AR(party.units[o].Size*eatValue),map[party.y][party.x].units[i-100].MPle-1)
		}else if(map[party.y][party.x].units[i-100].CPle<map[party.y][party.x].units[i-100].MPle){
			map[party.y][party.x].units[i-100].CPle = Math.min(map[party.y][party.x].units[i-100].CPle+AR(map[party.y][party.x].units[o-100].Size*eatValue),map[party.y][party.x].units[i-100].MPle-1)
		}
	}
	increaseValue = 1;
	while(unit(i).Feed < unit(o).Feed+(unit(o).Size*eatValue)){
		unit(o).Feed--;
		increases+=increaseValue;
		u = Math.floor(Math.random()*6)
		if(u <= 1){//DOUBLE CHANCE FOR FIGHT TO INCREASE
			unit(i).Figh+=increaseValue;
			Figh+=increaseValue;
		}else if(u == 2){
			unit(i).Flir+=increaseValue;
			Flir+=increaseValue;
		}else if(u == 3){
			unit(i).Flee+=increaseValue;
			Flee+=increaseValue;
		}else if(u == 4){
			unit(i).Feas+=increaseValue;
			Feas+=increaseValue;
		}else if(u == 5){
			unit(i).Fuck+=increaseValue;
			Fuck+=increaseValue;
		}
	}
	if(Figh+Flir+Flee+Feas+Fuck>0){Feed++;unit(i).Feed++;}
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
//RAND-END--------------------------------------------------------------------
</script>
</html>says she's not going down without a fight!"))
				}else if(map[party.y][party.x].units.length == 2){
						Entrys.push(String("CDOM gulps down SUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull SUB out, but DOM just keep swallowing until she's gone. The" +map[party.y][party.x].units[0].Name+" says she's not going down without a fight!"))
				}else if(map[party.y][party.x].units.length > 2){//Larger group
						Entrys.push("CDOM gulps down SUB's head and shoulders! The other girls look in horror as she keep swallowing until she's gone. I try to say something to keep the peace, but they all look ready for a fight!")
				}
			}else if(s[4] == 3){//WILLING
				if(party.units[s[1]].Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside DOM! I press my ear to her bloated belly, and hear SUB moan as she fingers herself one last time!")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! SUB grabs the tongue and pulls DOM over to her. CSUB says she'd be glad to be a snack and lets DOM swallow her down!")
				}
				Entrys.push("Oh my, SUB just let DOM eat her!")
				
			}
		}else if(((s[1] < 100 && s[2] >= 100)||(s[1] >= 100 && s[2] < 100)) && map[party.y][party.x].hostile){
		// DIFF HOSTILE
			if(s[4] == -2){//TOO SMALL
				Entrys.push("CSUB is too big for DOM to eat!")
			}else if(s[4] == 0){//FAILED
				if(unit(s[2]).flying && !unit(s[1]).flying){
					Entrys.push("CSUB's poor stomach grumbles as SUB flies above her. She sticks her tongue out mockingly.")
					Entrys.push("CSUB leaps at SUB, but she's too high up. CSUB laughs at her from a safe distance.")
					Entrys.push("CSUB tries catching SUB as she flies by, but SUB's just too quick. She shakes her tasty tush teasingly in the air.")
					Entrys.push("CSUB's poor stomach grumbles as SUB flies above her.")
					Entrys.push("CSUB leaps at SUB, but she's too high up.")
					Entrys.push("CSUB tries catching SUB as she flies by, but SUB's just too quick.")
				}else{
					Entrys = ["CDOM just tried to eat SUB, but she wiggled out of her grasp."]
				}
			}else if(s[4] == 1){//ASLEEP
				Entrys.push("CDOM grabs SUB while she's still sleeping, and swallows her down!")
			}else if(s[4] == 2){//UNWILLING
				if(unit(s[1]).Tags[0] == "Froggirl"){//
					Entrys.push("CDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside DOM!")
					Entrys.push("CDOM's tongue flings out at SUB and latches on! CSUB falls down and is dragged along the ground towards DOM. CSUB cries out before she's devoured in one massive gulp!")
					if(unit(s[2]).willing){
						Entrys.push("CDOM's tongue flings out at SUB and latches on! CSUB falls down and is dragged along the ground towards DOM. Surprisingly, SUB cries out in bliss before she's devoured in one massive gulp!")
					}
				}
				Entrys.push("CDOM just ate SUB!")
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*/OLD SETUP
	 if(s[0]==0){//FIGHT------------------------------------------------------------------------------------------------------------------------------
		if(s[4] < 1){
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					if(party.units[s[2]].asleep){
						Entrys = ["I should let her sleep, she looks tired."]
					}else{
						Entrys = ["I roughly spank SUB's behind, she pouts as she rubs where my hand left its mark."]
					}
				}else{
					if(s[5]=="Indoors" && Math.random()<.25){
						Entrys = ["I shove SUB into a wall.","I throw a chair at SUB, it breaks into pieces against her!"]
					}else{
						if(map[party.y][party.x].units[s[2]-100].flying && s[3] == 0){
							Entrys = ["I swing my fist at SUB, but she's flying to high to hit!","I kick at SUB, but she flies away too quick","I try headbutting SUB, but she's too swift while airborne!"]
						}else{
							Entrys = ["I swing my fist at SUB!","I kick the SUB!","I headbutt SUB, she stumbles back!"]
						}
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
				//DOUBLE CHECK WHAT HAPPENS WHEN ATTACKING PROTAG
					Entrys = ["CGOODDOM tries to attack SUB, but I quickly get between them and stop her!"]
				}else{
					if(map[party.y][party.x].units[s[2]-100].flying && s[3] == 0){
						Entrys = ["CGOODDOM shakes her fist at SUB as she flies above safely.","CGOODDOM tries attacking SUB, but she flies away too quickly."]
					}else{
						if(party.units[s[1]].Tags[0] == "Catgirl" && Math.random()<.25){
							if(s[4] < .5){
								Entrys = ["CGOODDOM's claw slashes at SUB, leaving scratchmarks!","CGOODDOM reveals her fangs before biting SUB!"]
							}else{
								Entrys = ["CGOODDOM's claw slashes at SUB, leaving bloody streaks!","CGOODDOM reveals her fangs before biting SUB. She pulls away to reveal a bloody wound"]
							}
						}else if(party.units[s[1]].Tags[0] == "Foxgirl" && Math.random()<.25){
							Entrys = ["CGOODDOM sneaks behind SUB and sweeps out her leg, cleverly tripping SUB!","CGOODDOM leaps into the air and slams SUB into the ground!","CGOODDOM bites down on SUB, she doen't let go until she's hit on the snout!"]
						}else if(party.units[s[1]].Tags[0] == "Froggirl" && Math.random()<.25){
							if(s[4] < .5){
								Entrys = ["CGOODDOM's tongue flings out at SUB and latches on! SUB is almost pulled to the ground before breaking free!"]
							}else{
								Entrys = ["CGOODDOM's tongue flings out at SUB and latches on! SUB falls over and is dragged along the ground before she's able to pull it off!"]
							}
						}else{
							Entrys = ["CGOODDOM attacks SUB!"]
						}
					}
				}
			}else{//dom=food
				if(s[5]=="Indoors" && s[2]==0 && Math.random()<.25){
					Entrys = ["CFOODDOM shoves me into the door, she screams that I better leave now while I still can!","With no regard for her own furnature, FOODDOM throws a chair, it hits SUB right in the face!","With a running start, FOODDOM uses her shoulder to slam SUB into a wall!"]
				}else{
					if(party.units[s[2]].flying && s[3] == 0){
						Entrys = ["CFOODDOM shakes her fist at SUB as she flies above safely.","CFOODDOM tries attacking SUB, but she flies away too quickly."]
					}else{
						if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Catgirl" && Math.random()<.25){
							if(s[4] < .5){
								Entrys = ["CFOODDOM's claw slashes at SUB, leaving scratchmarks!","CFOODDOM reveals her fangs before biting SUB!"]
							}else{
								Entrys = ["CFOODDOM's claw slashes at SUB, leaving bloody streaks!","CFOODDOM reveals her fangs before biting SUB. She pulls away to reveal a bloody wound"]
							}
						}else if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Foxgirl" && Math.random()<.25){
							if(s[2] == 0){
								Entrys = ["I lose sight of FOODDOM until I feel her leg sweep into mine, knocking me to the ground!","CFOODDOM leaps into the air and slams SUB into the ground!","CFOODDOM bites down on SUB, she doen't let go until I hit her snout!"]
							}else{
								Entrys = ["CFOODDOM sneaks behind SUB and sweeps out her leg, cleverly tripping her!","CFOODDOM's leaps into the air and slams SUB into the ground!","CFOODDOM bites down on SUB, she doen't let go until she's hit on the snout!"]
							}
						}else if(map[party.y][party.x].units[s[1]-100].Tags[0] == "Froggirl" && Math.random()<.25){
							if(s[2] == 0){
								Entrys = ["CFOODDOM's tongue flings out at me, it hits like a fist!"]
							}else{
								if(s[4] < .5){
									Entrys = ["CFOODDOM's tongue flings out at SUB and latches on! SUB is almost pulled to the ground before breaking free!"]
								}else{
									Entrys = ["CFOODDOM's tongue flings out at SUB and latches on! SUB falls over and is dragged along the ground before she's able to pull it off!"]
								}
							}
						}else{
							Entrys = ["CFOODDOM attacks SUB!"]
						}
					}
				}
			}
		}else{
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					Entrys = ["I lose my temper and kill SUB, I feel fucking horrible afterwards!","I kill SUB for no reason at all!"]
				}else{
					if(s[5]=="Indoors" && Math.random()<.5){
						Entrys = ["I shove SUB into a wall, she crumbles to the ground in defeat!","I throw a chair at SUB, it breaks against her face! She falls to the floor defeated!"]
					}else{
						Entrys = ["I swing my fist at SUB, she falls in defeat!","I kick the SUB, she falls down in defeat!","I headbutt SUB, she stumbles back before falling over in defeat!"]
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
					Entrys = ["We are supposed to be a team but GOODDOM just killed SUB!"]
				}else{
					Entrys = ["CGOODDOM kills SUB!"]
				}
			}else{//dom=food
				Entrys = ["CFOODDOM kills SUB!"]
			}
		}
	 }		
	if(s[0]==1){//FLIRT------------------------------------------------------------------------------------------------------------------------------
		if(s[4] < .5+(Math.random()*.5)){//NOT HORNY
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					Entrys = ["I pat SUB's head, she looks comforted by my touch.","I give SUB's cute butt a squeeze, her face is so cute when she's embarrased.","I sneak up behind SUB, and cup her breasts. She wiggles out of my touch, telling me to stay focused on my quest."]
				}else if(map[party.y][party.x].hostile){
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["I blow SUB a kiss, she's bewildered by the gesture.","I tell SUB how adorable her face is when she's flying.","I wave at SUB, and tell her how cute she looks."]
					}else{
						if(s[5]=="Indoors" && Math.random()<.25){
							Entrys = ["I push SUB until her back is against the wall, she braces for an attack, but I only kiss her cheek.","I press SUB against the table, I give her ass a smack before backing away."]
						}else{
							if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
								Entrys = ["I grapple SUB, with one hand I rub her inner ear. She pushes me away confused, her face looks flustered.","I give SUB's tail a playful tug. She looks indignant, and keeps fighting."]
							}else{
								Entrys = ["I blow SUB a kiss, she's bewildered by the gesture.","I playfully spank SUB's behind and leap out of her reach.","Instead of fighing SUB, I keep my distance, telling her how cute she looks.","While avoiding her attacks, I tell SUB how adorable her face is while she's fighting."]
							}
						}
					}
				}else{//PASSIVE 
					if(s[5]=="Indoors" && Math.random()<.25){
						Entrys = ["I sit down at the table, and have some tea with SUB","I help SUB with cleaning the place, we make idle chitchat as we work together","I sit down across from SUB as she sips from a cup and tell her how cute she is. she says I'm exaggerating before returning to her drink."]
					}else{
						Entrys = ["I wave at SUB, and she waves back before remembering this is a fight.","I blow SUB a kiss, she smiles at the gesture.","I put a flower behind SUB's ear, she giggles from the ticklish stem.","I tell SUB that her eyes are beautiful, she thanks me for the complement."]
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
					Entrys = ["We are supposed to stay focused, but GOODDOM keeps kissing SUB!"]
				}else{
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["CGOODDOM blows SUB a kiss, she's bewildered by the gesture.","CGOODDOM tells SUB how adorable her face is when she's flying.","CGOODDOM waves at SUB, and tells her how cute she looks."]
					}else{
						Entrys = ["CGOODDOM gives SUB a hug, before being pushed away.","CGOODDOM gives SUB's breast a squeese, before being pushed away.","CGOODDOM kisses SUB, before being pushed away."]
					}
				}
			}else{//dom=food
				Entrys = ["Surprisingly, FOODDOM hugs SUB!"]
			}
		}else{//VERY HORNY
			if(s[1]==0){//dom=me
				if(s[2] < 100){//sub=good
					Entrys = ["I use two fingers to rub SUB's bean, she moans as she grinds against my hand!","I sneak up behind SUB, and give both nipples a squeese, she pushes against me as she gasps for air!"]
				}else if(map[party.y][party.x].hostile){
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["I blow SUB a kiss, she's bewildered by the gesture.","I tell SUB how sexy she looks when she's flying.","I tell SUB all the naughty things I want to do to her when she lands."]
					}else{
						if(s[5]=="Indoors" && Math.random()<.25){
							Entrys = ["I push SUB until her back is against the wall, she braces for my fist, but instead feels my lips against hers.","I press SUB against the table, and grind against her before letting go."]
						}else{
							if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
								Entrys = ["I call SUB a naughty kitty. She bites her lip, looking flustered.","I pin SUB's arms up, with both hands I massage her furry ears. Her body goes slack against mine until she remembers she was fighting me!","I give SUB's tail a playful tug. She moans under her breath!"]
							}else{																																																												
								Entrys = ["I embrace SUB, and whisper sweet nothings into her ear, she hesitates a moment before pushing me away.","I playfully spank SUB's behind and slip out of her reach, she rubs where my hand left its mark, her face looks flushed.","Instead of fighing SUB, I keep my distance, telling her all the naughty things I want to do to her. She tries to look focused, but she's breathing heavily!","While avoiding her attacks, I ask SUB if she's this passionate in bed."]
							}
						}
					}
				}else{//PASSIVE
					if(s[5]=="Indoors" && Math.random()<.25){
						Entrys = ["I sit down at the table, and share a drink with SUB, the booze makes us both open up.","I help SUB with cleaning the place, we keep finding excuses to rub against each-other.","I tell SUB how sexy she looks, she spills her drink in surprise."]
					}else{
						Entrys = ["I blow SUB a kiss, she smiles at the gesture.","I put a flower behind SUB's ear, she gives me a hug in return.","I tell SUB that her eyes are beautiful, she thanks me for the complement."]
					}
				}
			}else if(s[1] < 100){//dom=good
				if(s[2] < 100){//sub=good
					Entrys = ["We are supposed to stay focused, but GOODDOM keeps making out with SUB."]
				}else{
					if(map[party.y][party.x].units[s[2]-100].flying){
						Entrys = ["CSUB pumps her hips at SUB, she's flustered by the gesture.","CSUB tells SUB how sexy her body looks when she's flying.","CGOODDOM tells SUB all the naughty things she plans to do to her when she lands.","CSUB says she saw SUB's lust when she flies by, SUB tells her to shutup!"]
					}else{
						Entrys = ["CSUB screams out as GOODDOM pinches down hard on both of her exposed nipples! CGOODDOM asks if SUB is going to be a good girl, and releases the sore nipples when SUB whimpers that she will!","CGOODDOM grabs SUB's head and pulls her into a passionate kiss. CSUB struggles to escape, but her eyes are rolled back. All fighting stops as the two make out. Eventually GOODDOM breaks the kiss and steps back.","CGOODDOM slips her hand between SUB's legs, she moans before shoving GOODDOM away."]
					}
				}
			}else{//dom=food
				Entrys = ["Surprisingly, FOODDOM kisses SUB!"]
			}
		}
	 }
	if(s[0]==2){//FLEE------------------------------------------------------------------------------------------------------------------------------
		if(s[3] == 1){//Successfully fled!
			if(s[1] == 0){
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["I sneak under the table, and slip out the door before SUB can stop me!"]
				}else{
					Entrys = ["I slip past SUB and keep running! I successfully escape the fight!"]
				}
			}else{
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["CGOODDOM sneaks under the table, and slips through the doorway before SUB can stop her!"]
				}else{
					Entrys = ["CGOODDOM slips past SUB and keeps running! She got away!"]
				}
			 }
		}else if(map[party.y][party.x].hostile){
			if(s[1] == 0){
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["I try to escape, but SUB throws a chair at me, knocking me away from the door! Tears start to run down my face as I realize SUB has me right where she wants me!"]
				}else{
					Entrys = ["I try to escape, but SUB blocks my way. Sweat starts to pour down my face as I worry this fight might be my last!"]
				 }
			}else{
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["CGOODDOM tries to escape, but SUB quickly blocks the door! Tears start to run down her face as SUB laughs!"]
				}else{
					Entrys = ["CGOODDOM tries to run away, but she's blocked by SUB! She looks panicked as the other girl laughs at the failed escape attempt!"]
				}
			}
		}else{//NOT HOSTILE, FUNNY
			if(s[1] == 0){
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["I try to leave, but SUB offers me a warm cookie from a plate! I sit at the table with SUB and munch down the tasty treat. If her cooking is this good, I wonder how great she tastes!"]
				}else{
					Entrys = ["I turn to leave, but SUB grabs my hand. I look back and she pulls me into a kiss! I guess I can stay a little longer."]
				 }
			}else{
				if(s[5]=="Indoors" && Math.random()<.5){
					Entrys = ["CGOODDOM tries to leave, but SUB offers her a warm cookie from a plate! CGOODDOM sits at the table with SUB and munches down her tasty treat!"]
				}else{
					Entrys = ["CGOODDOM turns to leave, but SUB asks if she will stay a little longer. They walk back to us holding hands."]
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
						Entrys = ["I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose before finishing her descent. I feel my belly shudder as she cums!"]
					
					}else{
						Entrys = ["I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She giggles as my tongue plays with her breasts, and says it's about time I ate her! She plays with herself as I finish swallowing her down!","I grab SUB by the hips, and swallow her down!","I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise as she stops being my lover and becomes my nutrition. Trembling, she asks if I wouldn't rather fuck her instead, but I keep gulping down to her waist. When I start swallowing her hips, she begs me to enjoy her properly at least! My tongue finds her slit and starts getting her off as her rump hangs out of my mouth. I give SUB one last orgasm before fully taking her down!"]
					}
				}else{//FOOD
					if(s[4] == 3){//WILLING
						if(s[5]=="Indoors" && Math.random()<.25 && map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl"){
							Entrys = ["My stomach growls loudly. I ask SUB if theres any food left. She smiles before saying she has an idea. I watch SUB hop onto the table and offer me her legs, I start by sucking on her feet before swallowing down to her hips. My tongue finds her slit and I give her one last orgasm before gulping the rest of her down!","I watch SUB hop onto the table and shake her cute tail at me. I approach and ask what she has in mind. Seductively, she asks if I'd rather fuck her or eat her. I kneel down and start licking her muff until she's soaked in drool and juices. She's too delicious not to eat! I start swallowing one cheek, and eventually get both into my maw. CSUB looks back and sees her behind completely engulfed. Her smile widens, and she says she hopes I enjoy my tasty bunny snack. She yelps when I gulp her down to her breasts. My tongue teases her nipples until she cums, and I gobble the rest of her down!"]
						}else{
							if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
								Entrys = ["I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by swallowing her feet, and work my way up her body. She watches the whole way down while fingering herself. She kisses my nose as I finish my meal. I feel my belly shudder as she cums!","I call SUB a cute bunny snack. She says if she's just a snack, I should eat her! My hands wrap around her waist and I lift her into a kiss before swallowing her head and shoulders. She cums before I even reach her hips, and I gulp down her still quivering legs!"]
							}else if(party.units.length == 2 && Math.random()<.50){
								Entrys = [String("My "+party.units[1].Name +" watches as I start swallowing SUB head first! As I get to SUB's waist, I see that my "+party.units[1].Name+" has started fingering herself as she watches me taste SUB's lower lips. After I finish eating SUB, I watch as my "+party.units[1].Name +" orgasms loudly. Panting, she asks when I'm going to eat her!"),String("I grab SUB by her feet and start swallowing them down. My "+party.units[1].Name+" approaches and starts making out with SUB! As I continue up my tasty meal they keep at it until I swallow SUB's head. I lock lips with my "+party.units[1].Name+" to continue the kiss. Eventually we break away as a strand of saliva droops between us. She feels my belly with her hand, and a handprint emerges from inside to match hers.")]
							}else{		
								Entrys = ["I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. Instead of struggling she says it's about time somebody ate her! She plays with herself as I finish swallowing her down!","I gulp down SUB, I feel her masturbate inside me until she passes out!"]
							}
						}
						
					}else if(s[4] == 2){//UNWILLING
						if(!map[party.y][party.x].hostile){//NOT HOSTILE
							if(map[party.y][party.x].units.length == 1){//Alone
								if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Bunnygirl" && Math.random()<.25){
									Entrys = ["I call SUB a cute bunny snack. Her eyes grow wide, and she tries to run away! I leap at her and barely grab her ankles. As she struggles, I shove her feet into my mouth and start swallowing. She stops squirming, and just looks back at me upset. I swallow her quickly, but try to be gentle. She tucks her arms into my maw and soon she's in my belly."]
								}else{		
									Entrys = ["I ask SUB to close her eyes. She does so, and puckers her lips for a kiss. Instead I gulp down her head and shoulders. She yelps in surprise at suddenly becoming food! She begs for me not to eat her while I swallow down the rest of her.","I gulp down SUB, I feel her struggle inside me until she passes out!"]
								}
							}else if(map[party.y][party.x].units.length == 2 && s[2]==100){
								Entrys = ["I gulp down SUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The" +map[party.y][party.x].units[1].Name+" says she's not going down without a fight!"]
							}else if(map[party.y][party.x].units.length == 2){
								Entrys = ["I gulp down SUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull SUB out, but I keep swallowing until she's gone. I look at the remaining girl and lick my lips! The" +map[party.y][party.x].units[0].Name+" says she's not going down without a fight!"]
							}else{//Larger group
								Entrys = ["I gulp down SUB's head and shoulders! The other girls look in horror as I keep swallowing until she's gone. I look at the remaining girl and lick my lips! They all look ready for a fight!"]
							}
						}else if(map[party.y][party.x].units[s[2]-100].Tags[0] == "Catgirl" && Math.random()<.5){
							Entrys = ["CSUB swipes a claw at me as I shove her feet inside my mouth! She hisses and struggles the whole way down!"]
						}else{
							Entrys = ["I gulp down SUB, I feel her struggle inside me until she passes out!"]
						}
					}else{//UNSUCCESSFUL
						if(map[party.y][party.x].hostile){
							if(map[party.y][party.x].units[s[2]-100].flying){
								Entrys = ["My poor stomach grumbles as SUB flies above me.","I leap at SUB, but she's too high up.","I try catching SUB as she flies by, but she's just too quick."]
							}else{
								Entrys = ["I try to eat SUB, but she fights back, and wiggles out of my grasp."]
							}
						}else{
							if(map[party.y][party.x].units.length == 1 || Math.random()<.5){
								Entrys = ["I try to eat SUB, but she wiggles out of my grasp. She looks pissed at my betrayal, and ready for a fight!"]
							}else{
								Entrys = ["I gulp down SUB's head and shoulders, but another girl quickly pushes me over and pulls SUB back out. It looks I'll have to fight for my dinner this time!"]
							}
						}
					}
				}
			}
		}else if(s[1] < 100){
			if(s[2] == 0){
				Entrys = ["Oh FUCK, GOODDOM just ate me!"]
			}else if(s[2]<100){
				Entrys = ["CGOODDOM just ate SUB!"]
			}else{
				if(s[4] == 3){//WILLING
					if(party.units[s[1]].Tags[0] == "Froggirl"){//
						Entrys = ["CGOODDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside GOODDOM! I press my ear to her bloated belly, and hear SUB moan as she fingers herself one last time!","CGOODDOM's tongue flings out at SUB and latches on! SUB grabs the tongue and pulls GOODDOM over to her. SUB says she'd be glad to be a snack and lets GOODDOM swallow her down!"]
					}else{
						Entrys = ["Oh my, SUB just let GOODDOM eat her!"]
					}
				}else if(s[4] == 2){
					if(map[party.y][party.x].hostile){//HOSTILE
						if(party.units[s[1]].Tags[0] == "Froggirl"){//
							Entrys = ["CGOODDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside GOODDOM!","CGOODDOM's tongue flings out at SUB and latches on! CSUB falls down and is dragged along the ground towards GOODDOM. CSUB cries out before she's devoured in one massive gulp!"]
						}else{
							Entrys = ["CGOODDOM just ate SUB!"]
						}
					}else{//NONHOSTILE
						if(map[party.y][party.x].units.length == 1){
						Entrys = ["CGOODDOM eats SUB!"]
						}else if(map[party.y][party.x].units.length == 2 && s[2]==100){
								Entrys = ["CGOODDOM gulps down SUB's head and shoulders! The "+map[party.y][party.x].units[1].Name+" looks pissed and tries to pull SUB out, but GOODDOM just keep swallowing until she's gone. The" +map[party.y][party.x].units[1].Name+" says she's not going down without a fight!"]
						}else if(map[party.y][party.x].units.length == 2){
								Entrys = ["CGOODDOM gulps down SUB's head and shoulders! The "+map[party.y][party.x].units[0].Name+" looks pissed and tries to pull SUB out, but GOODDOM just keep swallowing until she's gone. The" +map[party.y][party.x].units[0].Name+" says she's not going down without a fight!"]
						}else{//Larger group
								Entrys = ["CGOODDOM gulps down SUB's head and shoulders! The other girls look in horror as she keep swallowing until she's gone. I try to say something to keep the peace, but they all look ready for a fight!"]
						}
					}
				}else{
					if(map[party.y][party.x].hostile){
						if(map[party.y][party.x].units[s[2]-100].flying){
							Entrys = ["I hear GOODDOM's stomach grumble as SUB flies above her.","CGOODDOM leaps at SUB, but she's too high up.","CGOODDOM tries catching SUB as she flies by, but isn't fast enough."]
						}else{
							Entrys = ["CGOODDOM just tried to eat SUB, but she wiggled out of her grasp."]
						}
					}else{
						if(map[party.y][party.x].units.length == 1 || Math.random()<.5){
							Entrys = ["CGOODDOM tries to eat SUB, but she wiggles out of her grasp. She looks pissed at GOODDOM's betrayal, and ready for a fight!"]
						}else{
							Entrys = ["CGOODDOM gulps down SUB's head and shoulders, but another girl quickly pushes her over and pulls SUB back out. It looks we'll have to fight for our dinner this time!"]
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
						Entrys = ["CFOODDOM's tongue flings out at SUB and latches on! She pulls back sharply, and SUB flies through the air towards the awaiting maw. She's gulped down instantly, forming a large buldge inside FOODDOM!","CFOODDOM's tongue flings out at SUB and latches on! SUB falls down and is dragged along the ground towards FOODDOM. CSUB cries out before she's devoured in one massive gulp!"]
					}else{
						Entrys = ["CFOODDOM just ate SUB!"]
					}
				}else{
					Entrys = ["CFOODDOM just tried to eat SUB, but she wiggled out of her grasp."]
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
						Entrys = ["I tell SUB I need to have her! She asks if I'm going to fuck her, or eat her. I answer by using two fingers to rub her bean. She grinds her thighs together as they become soaked. Her legs buckle, and she falls into the grass. I straddle her legs and start to pound her from behind! She moans for more, and I dont stop until she shudders under me. As we both lie in the grass afterward, she says she really though I was going to eat her this time!"]
					}else{
						Entrys = ["I grab SUB by the hips, and thrust until we both cum!"]
					}
				}else{//FOOD
					if(s[3] == 1){
						if(map[party.y][party.x].hostile){//HOSTILE
							if(map[party.y][party.x].units[s[2]-100].flying){//THIS WONT WORK FOR FAERIES!!!
								Entrys = ["I ask SUB if she's interested in a good time down here, she swoops down and tackles me to the ground. As I regain my senses I feel her guiding my member into herself. She moans when I start thrusting, and soon we both cum together!","I ask SUB if she's interested in a good time down here, she swoops down and kisses me. I grab her by the hips, and start thrusting! She's timid at first, but soon she's crying for more!","I ask SUB if she's interested in a good time down here, she swoops by and knocks me to the ground. She quickly lands and straddles me. I hold her hips as she rides me, she wraps her wings around me as we both cum!"]
							}else if(s[5]=="Indoors" && Math.random()<.25){
								Entrys = ["I push SUB's back against the wall. She 
