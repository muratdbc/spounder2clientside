$(document).ready(function(){
var tracksCollectionInstance = new TracksCollection();
tracksCollectionInstance.fetch({
  success: function(response,xhr) {
     console.log("Inside success");
     console.log(response);
  },
  error: function (errorResponse) {
         console.log(errorResponse)
  }
});
});