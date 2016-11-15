window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",addNewItem);
    printIncrementedId();
    document.getElementById("desc").addEventListener("keydown",charLeft);
    document.getElementById("charleft").innerHTML = 50;
    
}
function printIncrementedId(){
    document.getElementById("itemno").innerHTML=itemOperations.id;
}

function addNewItem(){
    var name = document.getElementById("name").value;
    var desc = document.getElementById("desc").value;
    var price = document.getElementById("price").value;
    var url = document.getElementById("url").value;
    itemOperations.addItem(name,desc,price,url);
    printItem(itemOperations.getAllItems()[itemOperations.itemList.length-1]);
    clearFields();
    
    
}

function charLeft(event){
    var TOTALCHAR = 50;
    var length = this.value.length;
    length = TOTALCHAR - length;
    length = length>=0?length:0;
    if(length<=0){
        event.preventDefault();
    }
    document.getElementById("charleft").innerHTML=length;
    
}

function printItem(itemObject){
    var tableBody = document.getElementById("itembody");
    var tableRow = tableBody.insertRow();
    var index = 0;
    for(var key in itemObject){
        if(key=="isDeleted"){
            continue;
        }
        else
        if(key=="url"){
            tableRow.insertCell(index).innerHTML  = "<img class='img-circle img-responsive' src='"+itemObject[key]+"'>";
        }
        //console.log(key +" "+itemObject[key]);
        else{
        tableRow.insertCell(index).innerHTML  = itemObject[key];
    
        }
        index++;
    }
    var delBt = document.createElement("button");
    
    delBt.addEventListener("click",markForDeleteion);
    delBt.className="btn btn-success";
    var id = itemOperations.id;
    delBt.setAttribute("itemno",--id);
    var span = document.createElement("span");
    span.className="glyphicon glyphicon-trash";
    delBt.appendChild(span);
     tableRow.insertCell(index).appendChild(delBt);
//    tableRow.insertCell(index).innerHTML="<button class='btn btn-success'><span class='glyphicon glyphicon-trash'></span></button> <button class='btn btn-default'><span class='glyphicon glyphicon-pencil'></span></button>";
    }
function markForDeleteion(){
//alert("Delete....");
var id = this.getAttribute("itemno");
console.log("Id ",id);    
this.className=itemOperations.toggleMarking(id)?"btn-danger":"btn-success";
}

function clearFields(){
    var fields= document.getElementsByClassName("cleardata");
    Array.prototype.forEach.apply(fields,[function(field){
        field.value="";
}]);
    printIncrementedId();
    document.getElementById("name").focus();
    
    //document.getElementById("name").value="";
}