//import {slackAuthFunction, teamsAuthFunction} from "../auth/auth";
const {slackAuthFunction, teamsAuthFunction} = require("../auth/auth1");
const Client = require("./Client1");
//const getTokenSlack = require('./auth/getTokenSlack.js');


class ChatManager{
    app
    devKey
    web
    clientList
    constructor(devKey, app) {
        this.clientList = []
        this.app = app
        this.devKey = devKey
    };
    addClient(new_client) {
        this.clientList.push(new_client);
    }
    getObj(){
        return this;
    }


    /*getToken() {
        if (this.app == "Slack")
            return getTokenSlack();
    }*/
    authManager() {
        if (this.app === "Slack")
            this.web =  slackAuthFunction(this.devKey);
        else if(this.app === "Teams")
            teamsAuthFunction(this.devKey);
        else
            console.error('Wrong app name! Enter "Slack" or "Teams" for app name');
    }

}

module.exports = ChatManager;

