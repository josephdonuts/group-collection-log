const { Model } = require('objection')

class Hiscore extends Model {
    static get tableName() {
        return 'hiscores'
    }
}

module.exports = Hiscore