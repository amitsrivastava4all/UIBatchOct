window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",addStudent);
    document.getElementById("search").addEventListener("click",searchStudent);
    document.getElementById("sort").addEventListener("click",sortByCity);
    
}

function sortByCity(){
    var studentArray = studentOperations.sortByCity();
    
    printStudentData(studentArray);
}

function printStudentData(studentArray){
    var table = document.getElementById("tablebody");
    table.innerHTML="";
    //alert("Clear...");
    studentArray.forEach(function(studentObject){
        printObject(studentObject);
    });
}


function addStudent(){
    var rollno = document.getElementById("rollno").value;
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var course = document.getElementById("course").value;
    console.log("Rollno "+rollno+" Name "+name+" Course "+course+" City "+city);
    studentOperations.addNewStudent(rollno,name,course,city);
    var table = document.getElementById("tablebody");
    var row = table.insertRow(table.rows.length);
    
    row.insertCell(0).innerHTML=studentOperations.sno;
    row.insertCell(1).innerHTML=rollno;
    row.insertCell(2).innerHTML=name;
    row.insertCell(3).innerHTML=course;
    row.insertCell(4).innerHTML=city;
    clearData();
    
}
function clearData(){
    document.getElementById("rollno").value="";
     document.getElementById("name").value="";
    document.getElementById("rollno").focus();
}
function searchStudent(){
    var course = document.getElementById("course").value;
    var subArray = studentOperations.searchStudent(course);
    printData(subArray);
    
}

function printData(subArray){
//    var table = document.getElementById("studenttable");
//    table.innerHTML="<tr><th>S.no</th><th>Rollno</th><th>Name</th><th>Course</th><th>City</th>";
    
    
    subArray.forEach(printObject);
    
}

function printObject(studentObject){ 
    var table = document.getElementById("tablebody");
    
    var row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML=studentObject.id;
    row.insertCell(1).innerHTML=studentObject.rollno;
    row.insertCell(2).innerHTML=studentObject.name;
    row.insertCell(3).innerHTML=studentObject.course;
    row.insertCell(4).innerHTML=studentObject.city;
    }


