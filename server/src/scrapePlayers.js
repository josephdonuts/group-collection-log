
import cheerio from 'cheerio';
import axios from 'axios';

const scrapePlayers = async (groupName) => {
    const url = `https://secure.runescape.com/m=hiscore_oldschool_ironman/group-ironman/view-group?name=${groupName}`
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const table = $('table').eq(0).find('tbody').find('tr').find('td').find('a');
        const players = [];
        const isPrestiged = $('.uc-scroll h3').find('img').attr('src') !== undefined;
        table.each((index, element) => {
            players.push($(element).text().trim());
        })
        for (let i = 0; i < players.length; i++) {
            players[i] = formatName(players[i]);
        }
        return { 
            isPrestiged: isPrestiged,
            players: players
        };
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