import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({bots,getArmy,handleDel,removeSelected}) {
  // Your code here
  const[list, setList]=useState(false)
  const[viewarmy, setViewArmy]=useState([])
  console.log(typeof(viewarmy))

  function getClickedDetails(obj){
    setViewArmy([obj])
    setList(!list)
    console.log(obj)
    
  }

  const botContainer = bots.map((bot) => {
  return <BotCard bot={bot} key={bot.id} handleDel={handleDel} getClickedDetails={getClickedDetails} setList={setList} list={list}/>
  });

  const botList = viewarmy.map((bot) => {
      return <BotSpecs bot={bot} getArmy={getArmy} setViewArmy={setViewArmy} setList={setList} list={list} />
    });
  return (
    <div className="ui four column grid">
      <div className="row">{list ? botList:botContainer}</div>
    </div>
  );
}

export default BotCollection;

