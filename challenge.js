var prettyPrintWilder = function (users) { return users.map(function (user) {
    console.log("".concat(user.name, " is ").concat(user.age, " years old ").concat(user.birthday));
}); };
var user1 = { name: "Pierre", age: 23 };
var user2 = { name: "Paul", birthday: "10/02/1990" };
var user3 = { name: "Jacques", age: 25 };
var wilders = [{}];
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
