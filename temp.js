const memberDAL = require("./dal/member");
const Member = require("./model/Member");

// let members = memberDAL.fetchAll().then((members) => {
//     console.log(members);
// });

//
// let m = new Member({first_name: "Håkan", last_name: "Bråkan", personal_number: 23});
// console.log(m.firstName);
// console.log(m._firstName);
// m.removeBoat(2);
// console.log(m);
//
// let members = memberDAL.create({
//     firstName: "CHRISTOFFER",
//     lastName: "EKBANG",
//     personalNumber: "010189898"
// }).then((member) => {
//     console.log(member);
// }).catch((err) => {
//     console.log(err);
// });



memberDAL.fetchOne(3)
    .then((member) => {
        console.log(member);
    });
