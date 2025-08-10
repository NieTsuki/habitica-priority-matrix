export default class Habitica {
    private static _instance?: Habitica;
    headers: { [key: string]: string };

    static get instance() {
        if (!this._instance) {
            const auth = localStorage.getItem("auth-persistence");

            if (auth) {
                const [apiUser, apiKey] = auth.split(":");
                this._instance = new Habitica(apiUser, apiKey);
            }
        }

        return this._instance;
    }

    static set instance(value: Habitica | undefined) {
        this._instance = value;

        if (value) {
            localStorage.setItem("auth-persistence", `${value.headers["x-api-user"]}:${value.headers["x-api-key"]}`);
        } else {
            localStorage.removeItem("auth-persistence");
        }
    }

    constructor(apiUser: string, apiKey: string) {
        this.headers = {
            "Content-Type": "application/json",
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
