
// Using Function at the DOM TREE level
// function funn(){
//    var y = document.getElementById('change').value
//    var yy = new Date(y).getTime()
//    var x = setInterval(function(){
//     var timenow = new Date().getTime();
//     var timediff = yy - timenow
//     var days = Math.floor(timediff / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((timediff%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
//   var minutes = Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((timediff % (1000 * 60)) / 1000);
//   document.getElementById("day").innerHTML =days ;
//   document.getElementById("hour").innerHTML =hours;
//   document.getElementById("minute").innerHTML = minutes; 
//   document.getElementById("second").innerHTML =seconds; 
  
//   if(timediff<0){
//     clearInterval(x)
//     document.getElementById("endtime").innerHTML = "TIME UP";
//     document.getElementById("day").innerHTML ='0';
//     document.getElementById("hour").innerHTML ='0';
//     document.getElementById("minute").innerHTML ='0' ; 
//     document.getElementById("second").innerHTML = '0'; 
//   }
//   },1000)
   
// }

//Using the eventListener 
document.getElementById("change").addEventListener('change',()=>{
  var y = document.getElementById("change").value
  var yy = new Date(y).getTime()
  var x = setInterval(function(){
    var timenow = new Date().getTime();
    var timediff = yy - timenow
    var days = Math.floor(timediff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timediff%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timediff % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML =days ;
  document.getElementById("hour").innerHTML =hours;
  document.getElementById("minute").innerHTML = minutes; 
  document.getElementById("second").innerHTML =seconds; 
  
  if(timediff<0){
    clearInterval(x)
    document.getElementById("endtime").innerHTML = "TIME UP";
    document.getElementById("day").innerHTML ='0';
    document.getElementById("hour").innerHTML ='0';
    document.getElementById("minute").innerHTML ='0' ; 
    document.getElementById("second").innerHTML = '0'; 
  }
  },1000)

})


//Manually pre defined date timer
var endtime = new Date("may 18, 2023 12:58:00").getTime();

// var x = setInterval(function(){
//   var timenow = new Date().getTime();
//   var timediff = endtime - timenow
//   var days = Math.floor(timediff / (1000 * 60 * 60 * 24));
// var hours = Math.floor((timediff%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((timediff % (1000 * 60)) / 1000);
// document.getElementById("day").innerHTML =days ;
// document.getElementById("hour").innerHTML =hours;
// document.getElementById("minute").innerHTML = minutes; 
// document.getElementById("second").innerHTML =seconds; 

// if(timediff<0){
//   clearInterval(x)
//   document.getElementById("endtime").innerHTML = "TIME UP";
//   document.getElementById("day").innerHTML ='0';
//   document.getElementById("hour").innerHTML ='0';
//   document.getElementById("minute").innerHTML ='0' ; 
//   document.getElementById("second").innerHTML = '0'; 
// }
// },1000)