import { useState } from "react";
import TableRender from "./table"
import ShipSelect from './ships';

function Radar(props) {
    const [ship, setShip] = useState('')

    return <div className="your_radar">

        <TableRender ship={ship}/>

        <ShipSelect handleShipChange={setShip}/>
    
    </div>
}


export default Radar