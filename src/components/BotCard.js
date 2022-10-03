import { set } from "date-fns";
import React, { useState } from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot,show ,handleDel,removeSelected,getClickedDetails,setList,list }) {

  function OnDel(id) {
    fetch(`http://localhost:8002/bots/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDel(id));
    console.log("to delete" + id);

  }
  function delSoldier(id){
    console.log('hh')
    setList(!list)
    console.log('tunakutoa soon' + id)

    removeSelected(id)
    
  }
function MyObj(obj){
  getClickedDetails(obj)
}


  // function AddArmy(my_army) {
  //   getArmy(my_army);
  // }
  // console.log(bot)
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={() =>{ show ? delSoldier(bot.id) :MyObj(bot)}}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              {show ? null :
                <button
                  className="ui mini red button"
                  onClick={() =>{OnDel(bot.id)}

                    // console.log("add code to connect event listener")
                  }
                >
                  x
                </button>
              }
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
