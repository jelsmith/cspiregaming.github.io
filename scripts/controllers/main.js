'use strict';

/**
 * @ngdoc function
 * @name cSpireGamingWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cSpireGamingWebApp
 */
angular.module('cSpireGamingWebApp').controller('MainCtrl', function ($scope, $filter) {

    $scope.totalMembers = 173;

    // Social Links
    $scope.discordUrl = 'https://discord.gg/95UuTvu';
    $scope.facebookUrl = 'https://www.facebook.com/cspiregaming';
    $scope.instagramUrl = 'https://www.instagram.com/cspiregaming/';
    $scope.twitterUrl = 'https://twitter.com/cspiregaming';
    $scope.emailUrl = 'mailto:cspiregaming@cspire.com';

    // Officer List
    $scope.officers = [{
        name: 'Cole<br>Cochran',
        image: 'cole-cochran.png',
        about: `<strong>Cole Cochran</strong> is a recruiter, gamer, and undercover nerd. @ me, bro. Seriously. @ColeJunior on PS4.`
    }, {
        name: 'Duk<br>Lee',
        image: 'duk-lee.png',
        about: `<strong>Duk Lee</strong>, aka Quackers, is a former Army dude who now only "pew pew's" in FPS which he has to stop every 30 minutes due to motion sickness. His current hobbies are: paying his mortgage and ironing his clothes on Sunday afternoons while watching StarCraft games`
    }, {
        name: 'Jason<br>Stewart',
        image: 'jason-stewart.png',
        about: `While once a Dota 2 addict, <strong>Jason Stewart</strong> is now a recovered couch competitor. Sometimes software developer, always tryhard. Occasionally he admits he's wrong.`
    }, {
        name: 'Jeana<br>Smith',
        image: 'jeana-smith.png',
        about: `<strong>Jeana Smith</strong> is a system analyst at C Spire. She'd like to make a Legend of Zelda pun here, but she doesn't want to Tri and force it. She grew up on the Mississippi Gulf Coast and currently resides in Brandon with her awesome hubs, Micah, and two pups, Kirby and Zelda.`
    }, {
        name: 'Jennie<br>Brantley',
        image: 'jennie-brantley.png',
        about: `A caffeine addict with a writing problem, <strong>Jennie Brantley</strong>, is simply a human. Being. She gets paid to be a software application tester, but she will test cheesy jokes, random dares, new board games, and your patience for free.`
    }, {
        name: 'Matt<br>Bolian',
        image: 'matt-bolian.png',
        about: `Vivamus congue congue velit, eget tristique mi tincidunt et. Nullam iaculis tellus ut lorem sollicitudin aliquam. Phasellus purus tortor, iaculis vel porta non, congue eget leo. Donec malesuada ex ipsum, quis tempor felis porta sit amet. Nunc pretium quam sit amet egestas malesuada.`
    }, {
        name: 'Matt<br>Turner',
        image: 'matt-turner.png',
        about: `<strong>Matthew Turner</strong> is a LTE wizard who uses his powers for good. Once a hardcore MMO raider, he now prefers games with a little less commitment. He also has a passion for all things hardware.`
    }, {
        name: 'Michael<br>Lamb',
        image: 'michael-lamb.png',
        about: `<strong>Michael Lamb</strong> is a software developer during the day and a casual gamer at night. He loves board games and long walks but sticks with board games because the humidity is oppressive.`
    }, {
        name: 'Rashad<br>Collier',
        image: 'rashad-collier.png',
        about: `Coding, tech knowledge and everything nerd; these were the ingredients chosen to create the perfect software developer. But Professor Utonium accidentally added an extra ingredient to the concoction: video games. Thus, <strong>Rashad Collier</strong> was born! Using his ultra-super powers, <strong>Rashad</strong> has dedicated his life to smash at fighting games and the forces of evil.`
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
