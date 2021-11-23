$(document).ready(function(){
  $.getJSON("lab8.json", function(data){
      var lectures_array= "";
      var lab_array= "";
      for(var i= 0; i< data.websys_course[0].lectures.length; i++){
          var lecnum= Object.keys(data.websys_course[0].lectures[i])[0];
          lectures_array += '<li id=lecturePost' + (1+i).toString() + '>' + lecnum + '</li>';
      }
      $("#lec_nav").append(lectures_array);
      for(var i= 0; i< data.websys_course[1].labs.length; i++){
          var labnum= Object.keys(data.websys_course[1].labs[i])[0];
          lab_array += '<li id=labPost' + (1+i).toString() + '>' + labnum + '</li>';
      }
      $("#lab_nav").append(lab_array);
  });
});


