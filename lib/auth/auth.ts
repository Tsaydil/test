import { WebClient } from '@slack/web-api';

export const slackAuthFunction =  (devKey: any) => {
    const web = new WebClient(devKey);
    console.log("Authenticated the Slack");
    return web;
}

export const teamsAuthFunction = (devKey: any) => {
    console.log("Teams");
}

