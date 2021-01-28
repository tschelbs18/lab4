
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    "projects": [
      {"name": "Fruitful",
      "image": "cool_pineapple.png",
      "id": "project1"},
      {"name": "Habit Tracker",
      "image": "habit_tracker.png",
      "id": "project2"},
      {"name": "Profesh",
      "image": "p_logo.jpg",
      "id": "project3"},
      {"name": "Sudoku Solver",
      "image": "sudoku.png",
      "id": "project4"}
    ]
  });
};
