// const cheerio = require('cheerio');
// const axios = require('axios');

import cheerio from 'cheerio';
import axios from 'axios';

// pass group name as param to the back end route  api/vi/group/:groupName
// scrapeplayers(req.params.groupName)
// just return data or error 
// handles respnse in the router 
const scrapePlayers = async (groupName) => {
    const url = `https://secure.runescape.com/m=hiscore_oldschool_ironman/group-ironman/view-group?name=${groupName}`
    try {
        const { data } = await axios.get(url);
        console.log(data)
        const $ = cheerio.load(data);
        const table = $('table').eq(0).find('tbody').find('tr').find('td').find('a');
        const players = [];
        table.each((index, element) => {
            players.push($(element).text().trim());
        })
        for (let i = 0; i < players.length; i++) {
            players[i] = formatName(players[i]);
        }
        return players;
    } catch (error) {
        console.error(error)
        return error;
    }
}
const formatName = (player) => {
    const regex = /[^a-zA-Z0-9]/;
    const splitName = player.split('');
    for (let i = 0; i < splitName.length; i++) {
        if (splitName[i].match(regex)) {
            splitName[i] = ' ';
        }
    }
    return splitName.join('');
}
export default scrapePlayers;