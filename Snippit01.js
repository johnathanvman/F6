
Entry = "";
s[11] = choose(["talk","behind"])//initial setup
s[12] = "doggy"//sex position
s[13] = "none"//sex position second
s[14] = choose(["none","start","end","normal"])//foreplay
if(s[11] == "talk"){
	Entry += choose([
		"","",choose([
			"I look at SUB's beautiful form and realize I need to have her again.",
			"I look at SUB's beautiful form and realize I need to have her.",
			"CSUB walks by me and as I watch her cute cheeks in motion, my lust for her becomes too much.",
			"My lust for SUB becomes too much to bear.",
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
		Entry += choose([
			"tell SUB I want her.",
			"tell SUB I need to have her.",
			"ask SUB if she wants to have some fun.",
			"ask SUB how she wants it.",
		])
	}else{
		Entry += choose([
			"tell her I want her.",
			"tell her I need to have her.",
			"ask her if she wants to have some fun.",
			"ask her how she wants it.",
		])
	}
	
}
if(s[11] == "behind"){
	Entry += choose([
		"","",choose([
			"I look at SUB's beautiful form and realize I need to have her again.",
			"I look at SUB's beautiful form and realize I need to have her.",
			"CSUB walks by me and as I watch her cute cheeks in motion, my lust for her becomes too much.",
			"My lust for SUB becomes too much to bear.",
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
			" and wrap my arms around her"+choose([".","."," belly."," midriff."," stomach."," middle."]),
			" to drape my arms "+choose(["over","around","across"])+" her shoulders.",
			" and rest my hands on her "+choose(["","soft "])+"hips.",
			" to pull her close by the "+choose(["hips.","waist."]),
			" and grip her hips, my fingers making small "+choose(["dimples","divots","indents"])+" in her "+choose(["","soft "])+"skin.",
			", embracing her with my chest against her back.",
			", sliding my arms under hers"+
				choose([
					".",
					". My fingers make impressions against her belly as I pull her close.",
					" to "+choose(["fondle","grope","caress","feel","cup"])+" her "+choose(["bosom","bust","breasts"])+choose([".",". I feel her nipples harden under my touch"]),
					". My fingers explore her belly"+choose(["."," as goosebumps form under their touch."])
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
				"I rub her hood until it pulls back and start teasing her "+choose(["button","clit","nub"])+" directly." 
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
			" She "+choose(["","","quietly ","softly ","loudly "])+choose(["tells me ","says "])+choose(["she wants it","she's all mine","she's been waiting for me","she can't wait"])+choose([". She turns and "," as she turns and "," as she turns away. I watch as she "," then turns around and "])+choose(["dips","drops","gets","goes"])
		])
	}
	if(s[11] == "behind"){
		if(s[14] == "start"){
			Entry += " Before I can go further, she slips away, and "+choose(["dips","drops","gets","goes"])
		}else if(s[14] == "normal" || s[14] == "end"){
			Entry += " Once I have her warmed up, she slips away to "+choose(["dip","drop","get","go"])
		}else{
			Entry += 
			choose([" Before I can go further, she"," Before I can make a move, she"," She","Suddenly, she"])+
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
	choose([".",".",".",".",".","."," looking up at me expectantly.",". Her eyes silently plead for me!"," as she arches her back."," waiting.",", spreading her legs wider as she glances back.","."+choose([" She lays her head on the ground while keeping her "," Her head stays low while she keeps her "," With her head to the ground she keeps her "])+choose(["cheeks","rear","butt","ass"])+choose([" up."," in the air."," raised."," raised towards me!"])])
	
	if(unit(s[2]).Tags[0] == "Foxgirl" && Math.random()<.25){
		Entry += choose([" Her"+choose([""," lush"," fluffy"])+" tail "+choose(["shifts to the side.","swishes back and forth.","raises straight up, revealing her dripping "+choose(["sex.","lips.","nethers."]),"is lifted, curling around towards her back."])," She makes a loud yip for me to come, and her tail shifts to the side."])
	}else if(Math.random()<.25){
		Entry += choose([" Her glistening sex drives me forward.",
		" Her juices drip down to the ground as she waits for me.",
		" She"+choose([""," slowly"," seductively"," hypnotically"])+" sways her behind side to side"+choose(["."," eager to be pleased."," ready for what's to come."," desperate for more."])])
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
					,choose([". Between heavy breaths, she",". In a soft voice she",". With a hint of frusteration in her voice, she",". She"," while she",". She sounds desperate when she"," Her lips drip more as she"," Her body trembles as she"])+choose([" tells me to stick it in already."," begs for me to fuck her already."," pleads for me to give it to her already."])+choose([" When I do, she moans loudly!"," She gasps when I do."," I feel her jolt when I do!"," Her body shudders when I do!"])
				])
			
			,choose([", and when I",". As I",])+choose([" position myself against her "," stick the tip inside her "])+choose([""," folds"," entrance"," lips"," slit"])+choose([", she suddenly pushes back, taking me entirely.",", she pushes against me until I slide inside.",", she pushes back and I sink into her."])
		])
		
	}
	Entry += choose([
		" While maintaining eye contact, she starts to slide up and down my shaft.",
		" She starts to slide up and down my shaft.",
		" She pumps her hips"+choose([" against me.",", taking my length each time!",", pushing me further and further into her!"]),
		choose([" I thrust myself into her as she "," I pound her as she ","I ride her as she "])+
			choose(["moans loudly!","cries out for more!","cries out for more!"]),
		choose([" We move in unison"])+choose([", both desperate for more."])
	
	])
	Entry += choose([
		" Soon we are both "+choose(["covered","soaked","dripping","slick","drenched"])+" in sweat.",
		" Soon she's panting heavily.",
		" Soon I'm ready to burst, but keep making long strokes into her.",
		" Soon she's whimpering and covered in sweat."+choose([""," Her arms give out and "+choose(["","her upper body lies limp."])+" I start thrusting harder, pressing her into the ground."]),
		" I rub my thumb against the rim of her anus, and feel her tighten around my rod.",
		" We make love, fully focusing on the other.",
	])
	Entry += choose([
		choose([" After a few more minutes,"," After a few more moments"," After a while"," Not before long,"])+" she's a quivering mess, and I feel her gush around me as I "+choose(["cum","cum","cum","cum","shoot","shoot my seed","shoot my warm seed","shoot hot seed"])+choose([".",".",".","."," deep inside!"," inside her!"," into her!"," into her depths."]),
		choose([" We keep going at it until I lose control and start filling her. "])+choose(["Soon she gasps and tightens like a vice as she finally finishes."]),
		choose([" She suddenly gasps and tightens like a vice as she climaxes. "])+choose(["I keep thrusting until I finish too, and start filling her."]),
		" When her legs give out, I join her prone form, and again thrust"+choose([" "," myself "])+choose(["","repeatedly "])+choose(["into her","into her until she's helplessly quivering"])+choose([". As an orgasm wracks her body, I push myself in deep to cum inside."])
	])
	//*/
	/*"[and [slip/slide] myself inside/and slide ["",it]into her./and [slip/sink] inside her./ and start rubbing my member against her entrance[ before sliding inside/ before sticking it inside/. [She looks back [frustrated/with desperate eyes] and tells me to stick it in already!/Between heavy breaths, she [pleads]] [I feel her [jolt/shudder] when I do./When I position myself at her entrance[she suddenly pushes back, taking me entirely/she pushes against me until I slide in./ she pushes back and I sink inside her.]]/]]"//*/
	
}//*/
Entrys.push(Entry)
