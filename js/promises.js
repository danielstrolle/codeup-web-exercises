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

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    function lastCommit(username) {
        return fetch(
            `https://api.github.com/users/${username}/events`,
            {headers: {'Authorization': 'token 9a0b5cc70f28ec51b12ead281ee35e7141805cd3'}}
        )
            .then((response) => response.json())
            .then(events => console.log(events[0].created_at));
    }

    lastCommit("danielstrolle");


// .then((response) => console.log(response.json())
//         .then(users => users.map(user => user.created_at));

})();