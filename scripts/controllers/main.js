'use strict';

/**
 * @ngdoc function
 * @name cSpireGamingWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cSpireGamingWebApp
 */
angular.module('cSpireGamingWebApp').controller('MainCtrl', function ($scope, $filter) {

    // Social Links
    $scope.discordUrl = 'https://discord.gg/95UuTvu';
    $scope.facebookUrl = 'https://www.facebook.com/cspiregaming';
    $scope.instagramUrl = 'https://www.instagram.com/cspiregaming/';
    $scope.twitterUrl = 'https://twitter.com/cspiregaming';

    // Officer List
    $scope.officers = [{
        name: 'Cole<br>Cochran',
        image: 'cole-cochran.png',
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum id ex laoreet finibus. Sed vel tincidunt enim, a semper ex. Maecenas pretium ac diam sed blandit. Donec varius fermentum aliquam. Donec nec finibus lorem. Nullam lobortis velit ac dui lobortis suscipit.`
    }, {
        name: 'Duk<br>Lee',
        image: 'duk-lee.png',
        about: `Sed nisl sem, tristique eu mi at, dapibus dignissim lorem. Morbi interdum sapien a velit bibendum posuere. Fusce accumsan vitae enim sit amet pellentesque. Phasellus nec iaculis justo. Praesent interdum diam quis odio lacinia scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    }, {
        name: 'Jason<br>Stewart',
        image: 'jason-stewart.png',
        about: `Donec faucibus elementum sapien vitae dapibus. Pellentesque eu velit pretium, viverra enim ullamcorper, dignissim libero. Quisque est orci, dignissim nec orci quis, placerat pulvinar risus. Sed posuere eget leo ut auctor.`
    }, {
        name: 'Jeana<br>Smith',
        image: 'jeana-smith.png',
        about: `Suspendisse pulvinar, est sed accumsan maximus, quam nibh tristique eros, sed vestibulum erat purus at nulla. Aliquam euismod eros quis ipsum consequat, vitae rutrum diam fermentum. Fusce auctor lacus turpis, et finibus mauris rhoncus venenatis. Fusce sem massa, gravida ac neque quis, posuere sodales nisi.`
    }, {
        name: 'Jennie<br>Brantley',
        image: 'jennie-brantley.png',
        about: `Donec pretium magna ut leo pulvinar, pulvinar dignissim elit imperdiet. Sed sapien nulla, commodo sed arcu nec, malesuada pharetra tortor. Vivamus scelerisque erat et ipsum pellentesque, vitae auctor nibh ultricies. Morbi vulputate diam non pharetra tempus.`
    }, {
        name: 'Matt<br>Bolian',
        image: 'matt-bolian.png',
        about: `Vivamus congue congue velit, eget tristique mi tincidunt et. Nullam iaculis tellus ut lorem sollicitudin aliquam. Phasellus purus tortor, iaculis vel porta non, congue eget leo. Donec malesuada ex ipsum, quis tempor felis porta sit amet. Nunc pretium quam sit amet egestas malesuada.`
    }, {
        name: 'Matt<br>Turner',
        image: 'matt-turner.png',
        about: `Vestibulum convallis facilisis est vitae malesuada. Nam a fringilla enim, vitae vulputate mi. Praesent condimentum, massa ut mollis congue, lacus mi porttitor est, eu vulputate mi metus in lorem.`
    }, {
        name: 'Michael<br>Lamb',
        image: 'michael-lamb.png',
        about: `uisque tempor libero non massa placerat, eget accumsan sapien tempus. Proin semper est sed mollis tempus. Phasellus accumsan massa eros, sed pulvinar velit porttitor in. Donec nibh urna, interdum vel malesuada quis, faucibus eget odio.`
    }, {
        name: 'Rashad<br>Collier',
        image: 'rashad-collier.png',
        about: `Praesent eu ornare orci. Nulla facilisi. Sed tincidunt consequat justo non elementum. Aliquam erat volutpat. Aenean malesuada massa eu leo imperdiet maximus. Pellentesque mollis, nunc id egestas dapibus, libero diam fermentum nisi, sed luctus arcu ante et libero. `
    }, {
        name: 'Ryan<br>Carey',
        image: 'ryan-carey.png',
        about: `Donec diam lectus, bibendum vitae quam id, commodo gravida sem. Proin a aliquet mi, eget euismod ex. Donec porttitor magna nulla, in dignissim odio consequat id. Duis molestie lobortis condimentum.`
    }];



    function shuffle(list) {
        var m = list.length,
            t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            t = list[m];
            list[m] = list[i];
            list[i] = t;
        };

        return list;
    };
    
    $scope.officers = shuffle($scope.officers);

});
