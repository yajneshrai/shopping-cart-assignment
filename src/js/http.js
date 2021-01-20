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

    invoke() {
        
        return new Promise((resolve, reject) => {
            this.request = new XMLHttpRequest();

            this.request.open(this.method, `${this.apiUrl}/${this.api}`);
    
            this.request.send(this.data);

            this.request.onreadystatechange = () => {
                if(this.request.readyState == 4) {
                    if(this.request.status == 200)
                        resolve(JSON.parse(this.request.responseText));
                    else
                        reject(this.request.statusText);

                }
            }

            this.request.onerror = () => {
                reject(this.request.statusText);
            }
        });
        
    }
}

export default HttpRequest;