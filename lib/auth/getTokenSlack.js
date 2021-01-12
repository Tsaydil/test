require('dotenv').config();
//const request = require("request");
//import {request} from "request";
const {Client} = require("../classes/Client");
//import {Client} from "../Client";


const getTokenSlack = async (server, url) => {

    await server.get(url, function (req, res){
        if (!req.query.code) {
            return;
        };
        let data = {form: {
                client_id: process.env.SLACK_CLIENT_ID,
                client_secret: process.env.SLACK_CLIENT_SECRET,
                code: req.query.code
            }};
        //console.log(data);
        //testPost(data);
        request.post('https://slack.com/api/oauth.v2.access', data, function (error, response, body){
            if (!error && response.statusCode == 200) {
                // Get an auth token
                let user = JSON.parse(body).authed_user;
                let client_id = user.id;
                let scope = user.scope;
                let access_token = user.access_token;
                let new_client = new Client(client_id, scope, access_token);
                //let oauthToken = JSON.parse(body);
                // OAuth done- redirect the user to wherever
                res.send(new_client);
                //console.log(typeof oauthToken);
            }
        });
    });



}



module.exports = getTokenSlack;
