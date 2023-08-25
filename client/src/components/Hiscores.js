import React, {useEffect, useState} from "react";

const Hiscores = (props) => {

    const [hiscores, setHiscores] = useState({})
    console.log(hiscores)
    const getHiscores = async () => {
        const response = await fetch(`/api/v1/hiscores`)
        const { hiscores } = await response.json()
        setHiscores(hiscores)
    }

    useEffect(() => {
        getHiscores()
    }, [])

    const tempArr = []
    for (const hiscore in hiscores) {
        tempArr.push(hiscores[hiscore])
    }

    //componentize this
    const hiscoresList = tempArr.map((hiscore, index) => {
        if (hiscore.uniques !== 0) {
            return (
                <li key={hiscore.id}>
                    <div className={`hiscores-span-${(index+1) % 2}`}>
                        <a href={`/group/log/${hiscore.groupName}`}>
                            {hiscore.prestige && <img className="prestige-icon" src="https://www.runescape.com/img/rsp777/hiscores/prestige_icon.svg" />}
                            {hiscore.groupName}
                        </a>
                        <span className="uniques-number"> {hiscore.uniques}</span>
                    </div>
                </li>
            )
        }
    })

    return (
        <div className="hiscores-container">
            <h1>Hiscores</h1>
            <ol className="hiscores-entry">
                {hiscoresList}
            </ol>
        </div>
    )
}

export default Hiscores;