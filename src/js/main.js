const $ = require('jQuery');
const bootstrap = require('bootstrap')
const firebase = require('firebase')

var config = {
    apiKey: "AIzaSyDByoKRhcKOCVY-9YTPMGcSTwXJyFm4LXM",
    authDomain: "tmnt-rpg.firebaseapp.com",
    databaseURL: "https://tmnt-rpg.firebaseio.com",
    projectId: "tmnt-rpg",
    storageBucket: "tmnt-rpg.appspot.com",
    messagingSenderId: "719978376686"
};

firebase.initializeApp(config);

$('#btn-login').bind('click', function (ev) {
    ev.preventDefault();
    console.log('click')
});


