// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const todoList = require('../data/todo.js');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get('/api/todo', function(req, res) {
    res.json(todoList);
  });


  app.post('/api/todo', function(req, res) {

    for(let key in req.body) {
      if(!sampleTable.hasOwnProperty(key)) {
        return res.json({ success: false });
      }
    }

   
    for(let key in sampleTable) {
      if(!req.body.hasOwnProperty(key)) {
        return res.json({ success: false });
      }
    }
    
    const confirmation = { success: true, waitlist: false }
    todolistArray.push(req.body);

    res.json(confirmation);
  });

  
  app.delete('/api/todo', function(req, res) {

    todoList.splice(req.params.index, 1, req.body);
    res.json({ success: true });
  });}
