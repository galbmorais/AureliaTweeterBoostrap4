import {transient} from 'aurelia-framework';

@transient()
export class ApiService {
    get(path) {
        // Call our API
    }

    post(path, data) {
        // Post some data to the API
    }
}