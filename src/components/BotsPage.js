import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [army, setArmy]=useState([])

  // console.log(army + 'squad yote tunayo')



  const [bots, setBot] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((r) => r.json())
      .then((data) => {
        setBot(data);
      });
  }, []);

  function getArmy(my_army){
    // console.log(my_army + 'umechaguliwa uingie squad budaa')
    if (army.includes(my_army))
    return army
    else
    setArmy([...army ,my_army])

  }

  function removeSelected(id){
    // console.log('atlast we can delete you soldier')
    const updatedSoldiers = army.filter(army => army.id !== id)
    setArmy(updatedSoldiers)
  }

  function handleDel(id){
    const updatedArmy = bots.filter(army => army.id !== id)
    setBot(updatedArmy)
  
    removeSelected(id)
    // console.log('umefika hapa tunafaa kukutoa kwa squad' + id)
  }

  return (
    <div>
      <YourBotArmy army={army} show={true} removeSelected={removeSelected} />
      <BotCollection getArmy={getArmy} bots={bots} show={false} handleDel={handleDel}/>
    </div>
  )
}

export default BotsPage;

