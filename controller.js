$(document).ready(function () {
							
					 
	var gamePosition=1;
	var questionNumber=0;
	var myloader='activity.json';
	var clock=0;
	var dotLength=0;
	var clockVar;
	var correct=0;
	var wrong=0;
	qbank=new Array();
	typeArray=new Array();
 		
 		$.getJSON(myloader, function(data) { 
		qbank=[];
		
		for(i=0;i<data.questionlist.length;i++){ 
			typeArray=[];
			typeArray[0]=data.questionlist[i].passage;
			typeArray[1]=data.questionlist[i].option1;
			typeArray[2]=data.questionlist[i].option2;
			typeArray[3]=data.questionlist[i].option3;
			qbank[i]=typeArray;
		}
		  
		
		 introPage();
		 
		})//gtjson
	
	
	
	function introPage(){
		 
		var loads="assets.html #intro";
	$("#inner").empty();$('#inner').load(loads);
		$('#mainStage').append('<div id="nextButton">NEXT</div>');
		
	
							
							
							
	$('#nextButton').click(function(){						
	$('#nextButton').off("click");
 changeQuestion();	
									
	})//button						
							
	 function changeQuestion(){gamePosition=1;questionLock=false;
		 $("#inner").empty();$("#inner2").empty();
		 $("#inner").css("right","0px");
		 $("#inner2").css("right","-800px");
		 clock=6;var q1;var q2;var q3; var questionLock=false;
		 var rnd=Math.ceil(Math.random()*3);
		 if(rnd==1){q1=qbank[questionNumber][1];q2=qbank[questionNumber][2];q3=qbank[questionNumber][3];}
		 if(rnd==2){q2=qbank[questionNumber][1];q3=qbank[questionNumber][2];q1=qbank[questionNumber][3];}
		 if(rnd==3){q3=qbank[questionNumber][1];q1=qbank[questionNumber][2];q2=qbank[questionNumber][3];}
		 
		 
		 
		  
		 $('#inner').append('<div class="text1">'+qbank[questionNumber][0]+'</div>');
		 
		 
		 $('#inner').append('<div id="1" class="option">'+q1+'</div>');
		 $('#inner').append('<div id="2" class="option">'+q2+'</div>');
		 $('#inner').append('<div id="3" class="option">'+q3+'</div>');
		 
		 $('.option').click(function(){
			if(!questionLock){questionLock=true;
			if(this.id==rnd){correct++;
				$('#inner').append('<div class="feedback1">CORRECT</div>');
				}//corect						
				
				else{wrong++;
					$('#inner').append('<div class="feedback2">WRONG</div>');
				}//wrong
				
			}//questionlock
		})//click option
		 
		 function finalSlide(){
			 $("#inner").empty();$("#inner2").empty();
			 $("#nextButton").css("display","none");
			 $('#inner').append('<br><br><div class="text1">You have finished the activity.</div>');
			 $('#inner').append('<br><div class="feedback1b">Correct answers: '+correct+'</div>');
			 $('#inner').append('<br><div class="feedback2b">Wrong answers: '+wrong+'</div>');
			 }
			 
			 
			 $('#nextButton').off("click");
			 $('#nextButton').click(function(){
				questionNumber++;
				if(questionNumber==qbank.length){finalSlide();}else{changeQuestion();}
				
				})
		 
	 }//change question
							
							
							
	}//intro page						
	});//doc ready