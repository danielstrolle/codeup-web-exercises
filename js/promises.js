"use strict";
(function () {
    function wait(userInput) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!isNaN(userInput)) {
                    resolve();
                } else {
                    reject()
                }
            }, userInput);
        });
    }

    //ANOTHER WAY TO ACCOMPLISH THE SAME FUNCTIONALITY //
    // const wait = (milliseconds) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve();
    //         }, milliseconds);
    //     });
    // };

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    function lastCommit(username) {
        return fetch(
            `https://api.github.com/users/${username}/events`,
            {headers: {'Authorization': 'token MY_TOKEN'}}
        )
            .then((response) => response.json())
            .then(events => console.log(events[0].created_at));
    }
    lastCommit("danielstrolle");


    // ANOTHER WAY TO ACCOMPLISH THE SAME FUNCTIONALITY //
    // const optionalHeaders = {
    //     headers: {
    //         "Authorization": "token MY_TOKEN"
    //     }
    // };

    // const getCommit = (username) => {
    //     return fetch(`https://api.github.com/users/${username}/events`, optionalHeaders)
    // };
    // let githubPromise = getCommit("danielstrolle");
    //
    // githubPromise.then((data) => {
    //     data.json().then((response) => {
    //         console.log(response[0].created_at);
    //     });
    // });
})();