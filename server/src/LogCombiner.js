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
                for (const entry in log.collectionLog.tabs[tab]) {
                    if(log.collectionLog.tabs[tab][entry].killCount)
                        //if it has a killCount property, add it to the killCount property of the groupedLog
                        this.groupedLog[tab][entry].killCount += log.collectionLog.tabs[tab][entry].killCount[0].amount;
                    if (!this.groupedLog[tab][entry])
                        this.groupedLog[tab][entry] = log.collectionLog.tabs[tab][entry];
                    else 
                        if (this.groupedLog[tab][entry].items.length === 0)
                            this.groupedLog[tab][entry].items.push(...log.collectionLog.tabs[tab][entry].items);
                        else {
                            log.collectionLog.tabs[tab][entry].items.forEach((item, index) => {
                                if ( this.groupedLog[tab][entry].items[index] )
                                    this.groupedLog[tab][entry].items[index].quantity += item.quantity;
                                 else 
                                    this.groupedLog[tab][entry].items.push(item);
                        })
                    }
                }
            }
        })
    }
}

export default LogCombiner;