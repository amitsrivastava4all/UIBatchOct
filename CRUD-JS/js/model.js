/*
Function Constructor
*/
function Student(id,rollno,name,course ,city){
this.id = id;
this.rollno = rollno;    
this.name = name;
this.course = course;
this.city = city;
}

// studentOperations Object
var studentOperations={
    studentArray:[],
    sno:0,
    addNewStudent:function(rollno,name,course,city){
        this.sno++;
        var studentObject = new Student(this.sno,rollno,name,course,city);
        this.studentArray.push(studentObject);
        
    },
    searchStudent:function(course){
        return this.studentArray.filter(function(studentobject){
            return studentobject.course == course;
        });
    },
    deleteStudent:function(course){
        this.studentArray= this.studentArray.filter(function(studentobject){
            return !(studentobject.course == course);
        });
        return this.studentArray;
    },
    sortByCity:function(){
        return this.studentArray.sort(function(firstObject,secondObject){
            return firstObject.city.localeCompare(secondObject.city);
        })
        
    }
//        function compare(studentobject){
//            return studentobject.course == course;
//        }
//        var studentcourseArray=this.studentArray.filter(compare);
//        return studentcourseArray;
    
}