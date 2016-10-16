window.addEventListener("load",init);
function init(){
    document.getElementById("computeBt").disabled=true;
   document.getElementById("salary").focus(); document.getElementById("salary").addEventListener("change",clearMsg);
    
    var buttons = document.getElementsByTagName("button");
    for(var i = 0 ; i<buttons.length; i++){
        buttons[i].addEventListener("click",doOperation);
    }
}

function clearMsg(){
    console.log("I am Call....");
    var salary = parseInt(document.getElementById("salary").value);
    if(!isNaN(salary)){
       document.getElementById("computeBt").disabled=false; document.getElementById("errormsg").innerHTML="";
        document.getElementById("errormsg").className="red";
        document.getElementById("computeBt").dis
        return ;
    }
    else
    if(!salary<=0){
        document.getElementById("computeBt").disabled=false;
       document.getElementById("errormsg").innerHTML="";
        document.getElementById("errormsg").className="red";
        return ; 
    }
}

function doOperation(){
    var salary = parseInt(document.getElementById("salary").value);
    if(isNaN(salary)){
        document.getElementById("errormsg").innerHTML="Salary Can't Be Blank !";
        document.getElementById("errormsg").className="red";
        return ;
    }
    else
    if(salary<=0){
       document.getElementById("errormsg").innerHTML="Salary Can't Be Zero or Negative !";
        document.getElementById("errormsg").className="red";
        return ; 
    }
    document.getElementById("hralbl").innerHTML = hra(salary);
    document.getElementById("dalbl").innerHTML = da(salary);
    document.getElementById("talbl").innerHTML = ta(salary);
   document.getElementById("pflbl").innerHTML=pf(); document.getElementById("netsalarylbl").innerHTML=netSalary(salary);
}