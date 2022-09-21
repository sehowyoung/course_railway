const { student_model } = require("./db/student");


student_model.find( { username : "班长" } , "username score avatar",function( err , data ){
    if(err) { return console.log(err)};
    console.log(data);
})