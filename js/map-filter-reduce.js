"use strict";
(function () {

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
        },
    ];

//     let language = users.languages;
// let languageLength = language.length;
//     console.log(languageLength);

    function moreThan3Languages(user) {
        return user.languages.length >= 3;
    }
    let filterArray = users.filter(moreThan3Languages);
    console.log(filterArray);
    // 2 ways to do the same thing!!
    let filteredList = users.filter(moreThan3Languages => moreThan3Languages.languages.length >=3);
    console.log(filteredList);


    let userEmail = users.map(user => user.email);
    console.log(userEmail);


    function findObjectKey(objectKey, user) {
        objectKey[user.id] = user;
        return objectKey;
    }


    let objectReduce = users.reduce(findObjectKey, {});
    // for (let user of users) {
    //     objectKey = findObjectKey(objectKey, user);
    // }
    console.log(objectReduce);
})();