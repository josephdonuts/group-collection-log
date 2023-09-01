const { Model } = require('objection')

class Hiscore extends Model {
    static get tableName() {
        return 'hiscores'
    }
    static async seed() {
        await Hiscore.query().insert([
            {groupName: 'propanemoney', uniques: 802, prestige: false },
            {groupName: 'dad squad', uniques: 729, prestige: false },
            {groupName: 'ratscape', uniques: 627, prestige: true },
            {groupName: 'boobie bois', uniques: 550, prestige: false },
            {groupName: 'chile', uniques: 119, prestige: false },
            {groupName: 'sub2', uniques: 15, prestige: true},
            {groupName: 'corporeal', uniques: 0, prestige: true},
        ])
    }
}

module.exports = Hiscore