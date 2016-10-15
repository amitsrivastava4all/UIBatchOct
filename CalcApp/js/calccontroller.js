// Binding Event with Buttons
//alert("Before Load....");
window.addEventListener("DOMContentLoaded",init);
//window.addEventListener("DOMContentLoaded",function(){
//    alert("Inside DOMContentLoaded..");
//});
//window.addEventListener("load",function(){
//    alert("Inside Load...")
//});
function init(){
    //alert("After Load");

   var buttons = document.getElementsByTagName("button");
   Array.prototype.forEach.apply(buttons,[function(bt){
       bt.addEventListener("click",doOperation);
   }]);
                                 
                                 
//   for(var i = 0 ; i<buttons.length; i++){
//       var bt = buttons[i];
//       bt.addEventListener("click",doOperation);
//   } //document.getElementById("addbt").addEventListener("click",doOperation);
//document.getElementById("subbt").addEventListener("click",doOperation);
}
function doOperation(){
    console.log("Operation is "+this.innerHTML);
    var operator = this.innerHTML;
    var firstNo = document.getElementById("firstno").value;
    var secondNo = document.getElementById("secondno").value;
    var result = 0 ;
if(operator=='+'){
    result = add(firstNo,secondNo);
}
    else
    if(operator=='-'){
    result = subtract(firstNo,secondNo);
}
       else
    if(operator=='*'){
    result = multiply(firstNo,secondNo);
}
           else
    if(operator=='/'){
    result = divide(firstNo,secondNo);
}
    document.getElementById("result").innerHTML=result;
}
