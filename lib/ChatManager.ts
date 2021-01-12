import {slackAuthFunction, teamsAuthFunction} from "./auth/auth";
import {Client} from "./Client";
//const getTokenSlack = require('./auth/getTokenSlack.js');


export class ChatManager{
    app: string
    devKey: any
    web: any
    clientList: Client[]
    constructor(devKey: any, app: string) {
        this.clientList = []
        this.app = app
        this.devKey = devKey
    };
    addClient(new_client: Client) {
        this.clientList.push(new_client);
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


