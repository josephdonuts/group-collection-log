import log from "./LOGTEMPLATE.js";

class LogCombiner {
    constructor(logs = []) {
        this.logs = logs;
        this.groupedLog = {};
    }

    combine() {
        this.groupedLog = LogCombiner.sumObjectsArray(this.logs);
        }

    static sumObjects = (obj1, obj2) => {
        for (let key in obj2) {
            if (obj2.hasOwnProperty(key)) {
                if (Array.isArray(obj2[key])) {
                    if (!obj1[key]) {
                        obj1[key] = [...obj2[key]];
                    } else {
                        for (let i = 0; i < obj2[key].length; i++) {
                            if (typeof obj2[key][i] === 'object' && obj2[key][i] !== null) {
                                if (!obj1[key][i]) {
                                    obj1[key][i] = {};
                                }
                                LogCombiner.sumObjects(obj1[key][i], obj2[key][i]);
                            }
                        }
                    }
                } else if (typeof obj2[key] === 'number') {
                    if (!obj1[key]) {
                        obj1[key] = 0;
                    }
                    obj1[key] += obj2[key];
                } else if (typeof obj2[key] === 'object' && obj2[key] !== null) {
                    if (!obj1[key]) {
                        obj1[key] = {};
                    }
                    LogCombiner.sumObjects(obj1[key], obj2[key]);
                } else {
                    if (!obj1[key]) {
                        obj1[key] = obj2[key];
                    }
                }
            }
        }
    }

    static sumObjectsArray = (objectsArray) => {
        let result = {};
        for (let obj of objectsArray) {
            LogCombiner.sumObjects(result, obj);
        }
        return result;
    }
}

export default LogCombiner;