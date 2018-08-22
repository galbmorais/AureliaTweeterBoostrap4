export class JsonValueConverter {
    toView(obj) {
        if (obj) {
            return JSON.stringify(obj, null, 2);
        }

        return obj;
    }
}