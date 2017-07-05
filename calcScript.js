var hist=[];
var num=[];
var acceptedNums= [0,1,2,3,4,5,6,7,8,9,'.'];
var limit = 20;
var ans=0;

function isOpBefore(){
  var operators =["*","/","+","-"];
  if(operators.indexOf(hist[hist.length-1])!==-1)
    return true;
  else
    return false;
}

function display(){
  if(hist.length>12){
    var temp= hist.slice(hist.length-12);
    $(".current").html(temp.join(""));
  }
  else if(hist.length==0){
    $(".current").html(0);
  }
  else{
    $(".current").html(hist.join(""));  
  }
  
}

function isNumBefore(index){
  var e= hist[index-1];
  e = parseInt(e);
  if(isInteger(e)||e=="."){
    return true;
  }
  else{
    return false;
  }
}

function getNumBefore(){
  var num=[];
  var i=hist.length;
  while(isNumBefore(i)){
    num.unshift(hist[i-1]);
    i--;
  }
return num.join("");
}
               
$(".num").on("click",function(){
  var val = this.innerHTML;
  hist.push(val);
  display();
})

$(".other").on("click",function(){
  var v= this.id;
  switch (v){
    case "on":
      $(".current").text("0");
      $(".screen").css({"background-color":"#C4B4AA", "color" : "black"}); 
      hist =[];
      ans =0;
      break;
    case "off":
      $(".current").text("-");
      $(".screen").css({"background-color":"#403F3F", "color" : "#403F3F"});
      hist=[];
      ans =0;
      break;
    case "divide":
      if(hist.length==0){
        hist.push(ans);
      }
      if(!isOpBefore()){
        hist.push("/"); 
      }
      display();
      break;
    case "multiply":
      if(hist.length==0){
        hist.push(ans);
      }
      if(!isOpBefore())
        hist.push("*");
      display();
      break;
    case "plus":
      if(hist.length==0){
        hist.push(ans);
      }
      if(!isOpBefore())
        hist.push("+");
      display();
      break;
    case "minus":
      if(hist.length==0){
        hist.push(ans);
      }
      if(!isOpBefore())
        hist.push("-");
      display();
      break;
    case "equal":
      ans = eval(hist.join(""));
      hist = [];
      //hist.push(ans);
      $(".current").text(ans);
      ans=ans.toPrecision(10);
      break;
    case "ans":
      if(isOpBefore())
        hist.push(ans);
      display();
      break;
    case "del":
      if(hist.length>0)
        hist.pop();
      display();
      break;
    default:
      $(".current").text("length: "+ hist.length)
      
  }
});
