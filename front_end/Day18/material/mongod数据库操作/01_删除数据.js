const { student_model } = require("./db/student");

// deleteOne() 
// deleteMany()


// student_model
//     .deleteOne( { score : 6 } )
//     .then( function( message ){
//         console.log( message );
//     })

student_model
    .deleteMany( { score : 6 } )
    .then( function( message ){
        console.log( message );
    })