import React from "react";

const FAQ = (props) => {
    return (
        <div className="faq-container">
            <h2>FAQ:</h2>
            <h3>How do I upload a log?</h3>
            <ul>
                <span>
                    The group log only contains data from group members with an uploaded log from the collection log plugin on runelite.
                </span>
                <br />
                <br />
                <span>
                    To upload a log, click through every collection log tab with an asterisk (*), go to the collection log plugin on runelite, and click "Upload collection log data" or log out.
                </span>
            </ul>
        </div>
    )
}

export default FAQ;
