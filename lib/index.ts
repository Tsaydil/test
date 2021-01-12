//import 'dotenv/config';
//import { WebClient, WebAPICallResult } from '@slack/web-api';
const dotenv = require('dotenv')
//const {WebClient} = require('@slack/web-api');
import { WebClient, WebAPICallResult } from '@slack/web-api';
import { ChatManager } from "./ChatManager";
const axios = require('axios');
//const getTokenSlack = require('./auth/getTokenSlack');



dotenv.config();

// CREATE A CLIENT CLASS WITH TOKEN INITILIAZER AND MAKE POST MESSAGE ITS METHOD

//const web = new WebClient(process.env.SLACK_TOKEN);

/*export function getToken(app: string) {
    if (app == "Slack" || "slack")
        return getTokenSlack();
}*/


/**
 * @Method: Post a message to Slack.
 * @Param {string}
 * @Return {Promise<any>}
 */

const currentTime = new Date().toTimeString();

interface ChatPostMessageResult extends WebAPICallResult {
    channel: string;
    ts: string;
    username: string;
    as_user: boolean;
    message: {
        text: string;
    }
}

let usersStore: any = {};

const getUsersInfo  = async (web: any) => {
    try{
        const result = await web.users.list();
        saveUsers(result.members);
        console.log(usersStore);
    }
    catch (err) {
        console.error(err);
    }
}

const saveUsers = (usersArray: any) => {
    let userId = '';
    usersArray.forEach((user: any) => {
        userId = user["id"];
        usersStore[userId] = user;
    })
}

const sendMessageWebHook = async () => {
    const hookUrl = 'https://hooks.slack.com/services/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'
    const res =  await axios.post(hookUrl, {
        text: "Hook Test"
    });
}

const testFunc2 = async (web: any) => {

    const url = 'https://slack.com/api/chat.postMessage';
    const res = await axios.post(url, {
        channel: 'test',
        text: 'Tsa test'
    }, {headers: {authorization: `Bearer ${process.env.BOT_SLACK_TOKEN}`}});
    console.log('Done', res.data);

}


/*let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = () => {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    let text = "";
    let i;
    let d = 0;
    for (i = 0; i < myObj.members.length; i++){
      text += myObj.members[i].name;
      d = myObj.members.length;
    }
  }
};
xmlhttp.open("GET", )*/



const testFunc = async (web: any) => {
    // The result is cast to the interface
    const res = (await web.chat.postMessage({ text: 'Auth web test', channel: 'test', as_user: true }) as ChatPostMessageResult);

    // Properties of the result are now typed
    console.log(
        `A message was posed to conversation ${res.channel} with id ${res.ts} which contains the message ${res.message}`
    );
};


/*export function postMessageSlack (str: string) : Promise<any> {
  const res = (async () => {
    // The result is cast to any
    const res = (await web.chat.postMessage({ text: str, channel: 'test' }) as any);

    // Properties of the result are not typed, but at least the typechecker doesn't label them as errors
    console.log(
      `A message was posed to conversation ${res.channel} with id ${res.ts} which contains the message ${res.message}`
    );
    return res
  })();
  return res
}*/

/**
 * @Method: Returns test string.
 * @Param {string}
 * @Return {string}
 */
export function getTest (str: any) : string {
    return "test" + str
}

export function tsaTest () {
    /*(async () => {

      try {
        // Use the `chat.postMessage` method to send a message from this app
        await web.chat.postMessage({
          channel: '#general',
          text: `The current time is ${currentTime}`,
        });
      } catch (error) {
        console.log(error);
      }

      console.log('Message posted!');
    })();*/
    //testFunc();
}

export function testChatManager () {
    let chatManObj = new ChatManager(process.env.TEST_TOKEN, "Slack");
    chatManObj.authManager();
    //sendMessageWebHook();
    //getUsersInfo(chatManObj.web);
    testFunc(chatManObj.web);
}



