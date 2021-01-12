//import { WebClient } from '@slack/web-api';
const {WebClient} =  require('@slack/web-api');

const slackAuthFunction = (devKey) => {
    const web = new WebClient(devKey);
    console.log("Authenticated the Slack");
    return web;
}

const teamsAuthFunction = (devKey) => {
    console.log("Teams");
}

module.exports = {slackAuthFunction, teamsAuthFunction};