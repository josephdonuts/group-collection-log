/* eslint-disable no-console */
import { connection } from "../boot.js"
import Hiscore from "../models/Hiscore.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("seeding hiscores")
    await Hiscore.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder