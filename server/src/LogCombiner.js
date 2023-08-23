class LogCombiner {
    constructor(logs = []) {
        this.logs = logs;
        this.groupedLog = {};
        this.uniqueItems = 0;
    }

    combine() {
        this.groupedLog = LogCombiner.sumObjectsArray(this.logs);
        //this.uniqueItems = LogCombiner.countUniqueItems(this.groupedLog);
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
                } 
                // ^^^ don't change arrays to objects ^^^
                //else if its not an array...
                else if (typeof obj2[key] === 'number') {
                    if (!(key === 'id' || key === 'uniqueObtained' || key === 'uniqueItems')) { //dont sum these
                        if (!obj1[key]) {
                            obj1[key] = 0;
                        }
                        obj1[key] += obj2[key];
                    }
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

    static countUniqueItems = (groupedLog) => {
        let uniqueItems = 0;
        for (let key in groupedLog) {
            if (groupedLog.hasOwnProperty(key)) {
                if (typeof groupedLog[key] === 'object' && groupedLog[key] !== null) {
                    uniqueItems += LogCombiner.countUniqueItems(groupedLog[key]);
                } else if (key === 'obtained' && groupedLog[key] === true) {
                    uniqueItems++;
                }
            }
        }
    }
}

export default LogCombiner