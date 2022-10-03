import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({army ,show ,removeSelected}) {
  //your bot army code here...
  const botContainer = army.map((bot) => {
    return <BotCard bot={bot} key={bot.id} show={show} removeSelected={removeSelected}/>;
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {botContainer}

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
