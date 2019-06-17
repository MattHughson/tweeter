"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");
function callback(str){
  console.log("HERE")
}
// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  // console.log("test datahelpers", db)
  return {
    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweet")
      .insertOne(newTweet)
      .then(() => callback(null, newTweet))
      .catch(err => callback(err));
    },

    // Get all tweets in `db`, sorted by newest first

    getTweets: function(callback){
      const sortNewestFirst = (a, b) => b.created_at - a.created_at;
      db.collection("tweet")
      .find()
      .sort({ created_at: -1 })
      .toArray()
      .then(tweets => callback(null, tweets))
      .catch(err => callback(err));
   

    }
    
    
    
  
   
    


  };
  

}
