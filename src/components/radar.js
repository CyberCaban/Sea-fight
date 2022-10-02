import { useState } from "react";
import TableRender from "./table"
import ShipSelect from './ships';

function Radar(props) {
    const [ship, setShip] = useState('')
    const [pulse, setPulse] = useState(0)
    const [falseDetection, setFalseDetection] = useState(1)

    return <div className="your_radar">

        <TableRender ship={ship} pulse={pulse} clearPulse={setPulse} FD={setFalseDetection}/>

        <ShipSelect handleShipChange={setShip} handleTableChange={setPulse} pulse={pulse} FD={falseDetection}/>
    
    </div>
}


export default Radar