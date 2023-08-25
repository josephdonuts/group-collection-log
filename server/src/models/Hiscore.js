const { Model } = require('objection')

class Hiscore extends Model {
    static get tableName() {
        return 'hiscores'
    }
    static async seed() {
        await Hiscore.query().insert([
            {id: '7', groupName: 'propanemoney', uniques: 802, prestige: false },
            {id: '4', groupName: 'dad squad', uniques: 729, prestige: false },
            {id: '1', groupName: 'ratscape', uniques: 627, prestige: true },
            {id: '5', groupName: 'boobie bois', uniques: 550, prestige: false },
            {id: '2', groupName: 'chile', uniques: 119, prestige: false },
            {id: '3', groupName: 'sub2', uniques: 15, prestige: true},
            {id: '6', groupName: 'corporeal', uniques: 0, prestige: true},
        ])
    }
}

module.exports = Hiscore