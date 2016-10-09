 function displayFullName(){
        var firstName = document.getElementById("firstname").value ;
        var lastName = document.getElementById("lastname").value;
        var fullName = "Your Name is "+initcap(firstName)+" "+initcap(lastName);
     //console.log("First Name is ",firstName);
     //console.log("Last Name is ",lastName);
        document.getElementsByTagName("h1")[0].innerHTML=fullName;
    }

function initcap(x){
return x.charAt(0).toUpperCase() + x.substring(1).toLowerCase();
}