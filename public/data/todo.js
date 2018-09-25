// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var todolistArray = [{
text:"clean room",
completed: false },
{text:"clean car",
completed:true},

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = todolistArray;
