$(document).ready(function(){
  debugger
  console.log("Murat");
  $.ajax({
    type :"GET",
    url :"https://spounder2.herokuapp.com/api/v1/users/1/tracks.json",
    success :function(response){
      console.log(response);
    }
  });
});