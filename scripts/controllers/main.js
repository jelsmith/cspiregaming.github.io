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
    $scope.totalMembers = 315;

    // Social Links
    $scope.discordUrl = 'https://discord.gg/95UuTvu';
    $scope.twitchUrl = 'https://www.twitch.tv/cspiregaming';
    $scope.facebookUrl = 'https://www.facebook.com/cspiregaming';
    $scope.instagramUrl = 'https://www.instagram.com/cspiregaming/';
    $scope.twitterUrl = 'https://twitter.com/cspiregaming';
    // This link is separated to fool spam bots
    $scope.emailUrl = 'mai' + 'lto:csp' + 'iregaming@' + 'cspire.com';
    $scope.subscribeUrl = 'http://eepurl.com/gjdvGT';
//    $scope.subscribeUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScxlvs7cCmJcRvM_2DAM0G6cruxFQc_2kmYRstIAGaAnO1_IQ/viewform?usp=sf_link';

    // Event List
    // You may leave any field in the event object blank.
    $scope.events = [{
                       title: 'July Meetup',
                       subtitle: 'July 20, 2019 | 12 - 6 pm | C Spire HQ, 6th Floor',
                       imagePath: undefined,
                       description: `Bring your favorite board and/or video games as well as monitors and hang out with some awesome people around C Spire. Feel free to bring children or guests. (Please note you are responsible for any guests you bring.) <br><br><b>SEE FULL DETAILS IN THE TICKET LINK BELOW</b>`,
                       actionButtonText: 'Get your ticket now!',
                       actionButtonUrl: 'http://rsvp.cspiregaming.com',
                       googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.302949692359!2d-90.14876303455075!3d32.43782485850925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a4fd75c35116d%3A0xdb39af80dc9a1b47!2sC+Spire!5e0!3m2!1sen!2sus!4v1552573649044'
                    }];

    /* Example event below. DO NOT DELETE */

    //    {
//                  title: 'May Meetup',
//                  subtitle: 'May 18, 2019 | 12 - 6 pm | C Spire HQ, 6th Floor',
//                  imagePath: undefined,
//                  description: `Bring your favorite board and/or video games as well as monitors and hang out with some awesome people around C Spire. Feel free to bring children or guests. (Please note you are responsible for any guests you bring.) <br><br><b>SEE FULL DETAILS IN THE TICKET LINK BELOW</b>`,
//                  actionButtonText: 'Get your ticket now!',
//                  actionButtonUrl: 'http://rsvp.cspiregaming.com',
//                  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.302949692359!2d-90.14876303455075!3d32.43782485850925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a4fd75c35116d%3A0xdb39af80dc9a1b47!2sC+Spire!5e0!3m2!1sen!2sus!4v1552573649044'
//                         }

    /* Example event above. DO NOT DELETE */

    // Officer List
    $scope.officers = [{
        name: 'Cole<br>Cochran',
        image: 'cole-cochran.png',
        about: `<strong>Cole Cochran</strong> is a recruiter, gamer, and undercover nerd. @ me, bro. Seriously. @ColeJunior on PS4.`
    }, {
        name: 'Jeana<br>Smith',
        image: 'jeana-smith.png',
        about: `<strong>Jeana Smith</strong> is a system analyst at C Spire. She'd like to make a Legend of Zelda pun here, but she doesn't want to Tri and force it. She grew up on the Mississippi Gulf Coast and currently resides in Brandon with her awesome hubs, Micah, and two pups, Kirby and Zelda.`
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
        name: 'Tommy<br>Naugle',
        image: 'tommy-naugle.png',
        about: `<strong>Tommy Naugle</strong> is a data scientist at C Spire and Mississippi's favorite TensorBro. He enjoys playing with Pokemon cards when his wife allows it.`
    }, {
        name: 'Chris<br>Ellis',
        image: 'chris-ellis.jpg',
        about: `By day, <strong>Chris Ellis</strong> is a Sales Operations Specialist. By night, he maintains a 1:47 KDR (Hey, we said these people LOVED gaming, not that they were particularly good at it). <strong>Chris Ellis</strong> is one of those weirdos who actually enjoys playing Monopoly. He would love to tell you about his cats.`
    }, {
        name: 'Rob<br>Jones',
        image: 'rob-jones.jpeg',
        about: `“I am the hope of the universe; I am the hope of all living things that cry out for peace; I am protector of the innocent; I am the light in the darkness; I am truth. Ally to good — nightmare to people who resist cord cutting and amazing 1Gbps internet speeds provided by C Spire.” - <strong>Rob Jones </strong>`
    }, {
        name: 'Mat Brown',
        image: 'mat-brown.jpg',
        about: '<strong>Mathew Brown</strong> is a project manager extraordinnaire with a penchant for making grown men cry in Super Smash Bros. Ultimate. He relocated to Nashville from Santa Barabara, California, and thinks the south is new and interesting.'
    }, {
        name: 'Marcus Johnson',
        image: 'marcus-johnson.jpg',
        about: 'There was never a <strong>Marcus Johnson</strong> more dedicated than this one. Maybe he\'s a jack of all trades, but that doesn\'t mean he\'s not a master at NBA 2k games. You can find him on a real life court or a digital one if you are brave enough to challenge him.'
    }];

    $scope.scrollTo = function (id, offset) {
        console.log('attempting to scroll to element: ' + id);

        try {
            console.log('closing sidenav just in case');
            $('html').removeClass('nav-open');
        } catch (error) {
            console.log('sidenav doesn\'t exist. ignoring error.');
        }

        if (offset === undefined) offset = 0;
        var target = document.getElementById(id);
        var targetPosition = getPosition(target);
        var navBar = document.getElementById('nav');
        var navBarHeight = navBar.offsetHeight;
        if (targetPosition.y === navBarHeight && id !== 'home') {
            console.log('target already in frame');
        } else {
            $('html, body').animate({
                scrollTop: (target.offsetTop - navBarHeight - offset),
                easing: 'slow'
            }, 1000, function () {
                // Callback after animation
            });
        }
    };

    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;

        while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }

        return {
            x: xPosition,
            y: yPosition
        };
    }

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
