/*
GET project page
*/

exports.viewProject = function(req, res) {
  var name = req.params.name;
  if (name == "Fruitful") {
    var context_json = {
      "one_liner": "A self-rewarding productivity app",
      "first_desc": "The App was built using the Django framework for web development using python.",
      "second_desc": "The App was actually deployed using GitHub, Travis, and Heroku and is available on the Web.",
      "link": "http://www.afruitfulday.com"
    };
  }
  else if (name == "Profesh") {
    var context_json = {
      "one_liner": "A startup for matching candidates to jobs",
      "first_desc": "The website is currently in development.",
      "second_desc": "We have purchased a domain name, and are using Webflow to build the content of the site.",
      "link": "http://www.getprofesh.com"
    };
  }
  else if (name == "Habit Tracker") {
    var context_json = {
      "one_liner": "A repository for a habit tracking application",
      "first_desc": "The App is open source and was developed using the Flask framework for web development in python.",
      "second_desc": "Originally the App was built for the UCSD class CSE210.",
      "link": "https://github.com/tschelbs18/210habit"
    };
  }
  else if (name == "Sudoku Solver") {
    var context_json = {
      "one_liner": "A github repo for an automated sudoku solver",
      "first_desc": "The code here allows the user to automatically solve sudoku puzzles using only vanilla python.",
      "second_desc": "Pull requests are welcome if you'd like to collaborate!",
      "link": "https://github.com/tschelbs18/OLD_sudoku_solver"
    };
  }
  else {
    var context_json = {};
  }
  //console.log("The project name is: " + name);
  res.render("project", {
    "projectName": name,
    "context": context_json
  });
};
