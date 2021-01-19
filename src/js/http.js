export class HttpRequest {
    apiUrl = 'http://localhost:5000';

    method;
    api;
    data;
    request;

    constructor(method, api, data) {
        this.method = method;
        this.api = api;
        this.data = JSON.stringify(data);
    }

    makeCall(callback) {
        this.request = new XMLHttpRequest();

        this.request.open(this.method, `${this.apiUrl}/${this.api}`);
    
        this.request.send(this.data);

        return this.request.onreadystatechange = () => {
            if(this.request.readyState == 4 && this.request.status == 200) {
                callback(JSON.parse(this.request.response))
            }
        }
    }
}

export default HttpRequest;