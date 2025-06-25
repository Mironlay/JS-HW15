// Завдання 1

// array.reduce((acc, item, index, array) => {}, 0) // Синтаксис .reduce()

// Отримати загальну суму балансу (поле balance) всіх користувачів.

const users1 = [
  { name: "Alice", balance: 3200 },
  { name: "Bob", balance: 4100 },
  { name: "Charlie", balance: 5900 },
  { name: "David", balance: 5100 },
  { name: "Eva", balance: 2816 },
];

const calculateTotalBalance = users1 => users1.reduce((acc, item) => acc + item.balance, 0);
console.log(calculateTotalBalance(users1));


// Завдання 2
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const users2 = [
  {name: "Sharlene Bush",friends: ["Briana Decker", "Goldie Gentry"],},
  {name: "Elma Head",friends: ["Goldie Gentry"],},
  {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry"],},
  {name: "Ross Vazquez",friends: ["Marilyn Mcintosh"],},
];

const getUsersWithFriend = (users, friendName) => users.filter(item => item.friends.includes(friendName)).map(item => item.name);

console.log(getUsersWithFriend(users2, 'Briana Decker'));
console.log(getUsersWithFriend(users2, 'Goldie Gentry'));

// Завдання 3

// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const users3 = [
  { name: "Sharlene Bush", friends: ["Briana Decker", "Goldie Gentry"] },
  { name: "Elma Head", friends: ["Goldie Gentry"] },
  {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry", "Ross Vazquez"] },
  {name: "Ross Vazquez",friends: ["Marilyn Mcintosh","Elma Head","Carey Barr","Blackburn Dotson",]},
  { name: "Moore Hensley", friends: [] },
  { name: "Carey Barr", friends: ["Sharlene Bush"] },
  { name: "Blackburn Dotson", friends: ["Elma Head", "Ross Vazquez"] },
];

const getNamesSortedByFriendsCount = users => {
    return users
    .slice()
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
}
console.log(getNamesSortedByFriendsCount(users3));



// Завдання 4
// Отримати масив всіх умінь всіх користувачів (поле skills), 
// при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const users4 = [
    { name: "Alice", skills: ["html", "css", "js"] },
    { name: "Bob", skills: ["css", "react", "nodejs"] },
    { name: "Charlie", skills: ["nodejs", "express", "mongo"] },
];

const getSortedUniqueSkills = users => {
    const allSkills = users.flatMap(user => user.skills);
    const uniqueSkills = [];
    for (let skill of allSkills) {
        if (!uniqueSkills.includes(skill)) {
            uniqueSkills.push(skill);
        }
    }
    return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users4));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]