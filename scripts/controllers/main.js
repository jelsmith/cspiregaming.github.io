'use strict';

/**
 * @ngdoc function
 * @name cSpireGamingWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cSpireGamingWebApp
 */
angular.module('cSpireGamingWebApp').controller('MainCtrl', function ($scope, $filter) {

    // Other
    $scope.totalMembers = 186;

    // Social Links
    $scope.discordUrl = 'https://discord.gg/95UuTvu';
    $scope.facebookUrl = 'https://www.facebook.com/cspiregaming';
    $scope.instagramUrl = 'https://www.instagram.com/cspiregaming/';
    $scope.twitterUrl = 'https://twitter.com/cspiregaming';
    $scope.meetupUrl = 'https://www.meetup.com/C-Spire-Gaming-Club-Meetup/';
    $scope.emailUrl = 'mailto:cspiregaming@cspire.com';

    // Event List
    // You may leave any field in the event object blank.
    $scope.events = [];

    /* Example event below. DO NOT DELETE */

    //    {
    //        title: 'June Meetup',
    //        subtitle: 'June 16, 2018 | 12 - 6 pm | C Spire HQ',
    //        description: `Bring your favorite video/table top games along with your consoles/PCs and hang out with some great people! (Please bring your own monitors too.) We'll provide pizza and drinks.`,
    //        rsvpUrl: 'https://goo.gl/forms/dugVj8NzyKpO1AkB2',
    //        googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.32056261248!2d-90.14942564895313!3d32.43735330844005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8629d207b2c2666d%3A0x71060b74ef728cfe!2s1018+Highland+Colony+Pkwy%2C+Ridgeland%2C+MS+39157!5e0!3m2!1sen!2sus!4v1527884443275'
    //    }

    /* Example event above. DO NOT DELETE */

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
        about: `<strong>Matt Bolian</strong> was a Military Intelligence Officer who now uses his experience to drive C Spire's development and unlock the company's full potential. He thrives under pressure so challenge him to any game any time.`
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
         about: `<strong>Ryan Carey</strong> is a superhero whose abilities include levitating inches off the ground, turning his nose invisible, and transforming into a single cheeto.`
    }, {
         name: 'Thomas<br>Grout',
         image: 'thomas-grout.png',
         about: `Former CS:GO Global Elite and current title-holder for World’s Least Interesting Person. Everywhere <strong>Thomas Grout</strong> goes, phones deactivate themselves to avoid hearing him speak.`
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
