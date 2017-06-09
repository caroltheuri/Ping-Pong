//business logic
var inputs= parseInt($("input#divisible").val());
var resultArray=[];
for(var i=1; i<=inputs.length;  i++){
  resultArray.push(number);
}
//beginning of function
resultArray.map(function(number){
  if(number % 15 ===0){
      number="pingpong";
      } else if(number % 5 ===0){
         number="pong";
          }
      else if(number % 3 ===0){
        number="ping";
      } else{
        number=number;
      }
});// end of function
//user logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();




       console.log(resultArray);
  });
});
