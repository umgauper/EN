/**
 * Created by una on 1/12/15.
 */
var myApp = angular.module('myApp', []);
var path = '/images/';
myApp.controller('myController', function () {
    this.photos = [
        {name: '1.jpg',
         description: 'this one is cool'},
        {name: '2.jpg'}
    ];
    this.path = function(name) {
        return path + name;
    };
});