/**
* Created with json-array-builder.
* User: odinkirk
* Date: 2014-06-28
* Time: 08:23 PM
* Copyright John Allison 2014
*/

// The app and concontroller
(function() {
   var app = angular.module('jsonBuilder',[]);
    app.controller('BuilderController',function(){
        
        this.properties = [];
        this.objects = [];
        this.newProperty = "";
        
        this.addProperty = function(){
            this.properties.push(this.newProperty);
            this.newProperty = "";
            
        } // end addProperty function
        
    }); // end controller
})(); // end wrapper module