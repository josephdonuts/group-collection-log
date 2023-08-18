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
                console.log("---- TAB NAME ----", tab)
                for (const entry in log.collectionLog.tabs[tab]) {
                    console.log("  --  ", entry)
                    if (!this.groupedLog[tab][entry])
                        this.groupedLog[tab][entry] = log.collectionLog.tabs[tab][entry];
                    else {
                        //this.groupedLog[tab][entry].killCount += log.collectionLog.tabs[tab][entry].killCount.amount;
                        if (this.groupedLog[tab][entry].items.length === 0)
                            this.groupedLog[tab][entry].items.push(...log.collectionLog.tabs[tab][entry].items);
                        else {
                            this.groupedLog[tab][entry].items.forEach((item, index) => {
                                console.log("item", item)
                                if (item.name === this.groupedLog[tab][entry].items[index].name)
                                    item.amount += this.groupedLog[tab][entry].items[index].quantity;
                                else
                                    this.groupedLog[tab][entry].items.push(log.collectionLog.tabs[tab][entry].items[index]);
                            })
                        }
                    }
                }
            }
        })
    }
}

export default LogCombiner;