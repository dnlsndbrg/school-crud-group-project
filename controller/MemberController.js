"use strict";

// Util
const inquirer = require('inquirer');
const chalk = require("chalk");
const helpers = require("./../util/helpers");

// Models
const BoatModel = require("./../model/BoatModel");
const MemberModel = require("./../model/MemberModel");

// Views
const MemberView = require("./../view/MemberView");


class MemberController {

    static viewCompactList() {
        MemberModel.getList()
        .then((memberList) => {
            MemberView.createCompactList(memberList)
        });
    }

    static viewVerboseList() {
        MemberModel.getList()
        .then((memberList) => {
            MemberView.createVerboseList(memberList);
        });
    }

    static viewRegisterMemberForm() {
        let questions = [
            {
                type: "input",
                name: "firstName",
                message: "First name"
            },
            {
                type: "input",
                name: "lastName",
                message: "Last name"
            },
            {
                type: "input",
                name: "personalNumber",
                message: "Personal number"
            }
        ]

        inquirer.prompt(questions)
        .then(function (answers) {
            return MemberModel.create(answers)
        }).then((member) => {
            console.log(`Member ${member.firstName} has been registered`);
        }).catch((e) => {
            console.log(e.message);
        });
    }

    static viewMember(memberID) {
         MemberModel.getByID(memberID)
        .then(function(memberData) {
            MemberView.logMemberAndGetInput(memberData);
        });
    }

    static updateMember(memberID, field, fieldName) {
        MemberModel.getByID(memberID)
       .then(function(member) {
           MemberView.logUpdateMemberField(member, field, fieldName);
       });
    }

    static register(memberData) {
        console.log("Registering member");
        MemberModel.create(memberData)
        .then((member) => {
            console.log(`Member ${member.firstName} has been registered`);
        })
        .catch((e) => {
            console.log(e.message);
        })
    }
}

module.exports = MemberController;
