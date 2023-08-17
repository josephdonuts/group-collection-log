import log from "./LOGTEMPLATE.js";

class LogCombiner {
    constructor(logs = []) {
        this.logs = logs;
        //log template
        this.groupedLog = log;
    }
    combine() {
        this.logs.forEach(log => {
            for (const tab in log.collectionLog.tabs) {
                for (const item in log.collectionLog.tabs[tab].items) {
                    if (log.collectionLog.tabs[tab].items[item].quantity > 0) {
                        this.groupedLog.collectionLog.tabs[tab].items[item].quantity += log.collectionLog.tabs[tab].items[item].quantity;
                    }
                }
            }
        })
    }
}

export default LogCombiner;