const $ = require('jQuery');
const bootstrap = require('bootstrap')
const auth = require('./apps/auth/auth.js')
const profile = require('./apps/profile/profile.js')
const alert = require('./apps/alert/alert.js')

auth.initAuth({
    apiKey: "AIzaSyDByoKRhcKOCVY-9YTPMGcSTwXJyFm4LXM",
    authDomain: "tmnt-rpg.firebaseapp.com",
    databaseURL: "https://tmnt-rpg.firebaseio.com",
    projectId: "tmnt-rpg",
    storageBucket: "tmnt-rpg.appspot.com",
    messagingSenderId: "719978376686"
})

auth.detectUser()

$('#btn-login').bind('click', function (ev) {
    let email = $('#field-email').val()
    let pass = $('#field-password').val()

    ev.preventDefault();
    auth.logIn(email, pass)
});

$('#btn-signup').bind('click', function (ev) {
    let email = $('#field-email').val()
    let pass = $('#field-password').val()

    ev.preventDefault()
    auth.createUser(email, pass)
})

$('#btn-logout').bind('click', function (ev) {
    ev.preventDefault()
    auth.logOut()
});

$('#btn-profile').bind('click', function (ev) {
    let data = {
        displayName: $('#field-username').val()
    }

    profile.updateProfileData(data, function (data) {
        $('#field-username').text(data.displayName)
        alert.appendAlert('success', 'Your profile was updated successfully')
    }, function (err) {
        alert.appendAlert('warning', 'Something went wrong')
    });
})





