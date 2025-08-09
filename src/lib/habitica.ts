export default class Habitica {
    static instance?: Habitica;
    headers: { [key: string]: string };

    constructor(apiUser: string, apiKey: string) {
        this.headers = {
            "X-Client": "d94d6f6c-2be5-46a4-ba68-e081d9462d87-habitica-priority-matrix",
            "x-api-user": apiUser,
            "x-api-key": apiKey,
        };
    }

    async call(url: string, method: string = "GET", body?: any) {
        const options: RequestInit = {
            method: method,
            headers: this.headers,
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        return await fetch(url, options);
    }
}
