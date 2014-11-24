var Track= Backbone.Model.extend({

});

var TracksCollection=Backbone.Collection.extend({
  url:'https://spounder2.herokuapp.com/api/v1/users/1/tracks.json',
  initialize: function () {
    this.bind("reset", function (model, options) {
      console.log("Inside event");
      console.log(model);

    });
  }
})

// // var track=new Track();
// var tracks= new TracksCollection();
// var murat=tracks.fetch();
// console.log("here")
// console.log(murat.responseText);
// // console.log(tracks.responseText);

// console.log(track.get('tracknumber'));
// track.set('title','new track assigned');


