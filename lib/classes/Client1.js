class Client {
    client_id
    scope
    access_token
    constructor(client_id, scope, access_token) {
        this.client_id = client_id;
        this.scope = scope;
        this.access_token = access_token;
    }
    get_id(){
        return this.client_id;
    }
}

module.exports = Client


