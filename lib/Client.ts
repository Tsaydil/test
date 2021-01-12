export class Client {
    client_id: string
    scope: string
    access_token: string
    constructor(client_id: string, scope: string, access_token: string) {
        this.client_id = client_id;
        this.scope = scope;
        this.access_token = access_token;
    }

}


