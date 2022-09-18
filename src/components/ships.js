import { useState } from "react";

function ShipSelect(props) {
    
    function dragEndHandler(e){
        e.target.classList.remove("opacity")
        console.log(e);
    }

    function dragOverHandler(e, items){
        e.preventDefault()
        // console.log(e, items);
    }

    function dropHandler(e){
        e.preventDefault()
        // console.log(e);
    }

    function dragStartHandler(e, items){
        e.target.classList.add("opacity")
        props.handleShipChange(items.shipType)
        // console.log(e);
    }

    const [shipBay, setShipBay] = useState([
        {
            shipType:'4x',
            count:1
        },
        {
            shipType:'3x',
            count:2
        },
        {
            shipType:'2x',
            count:3
        },
        {
            shipType:'1x',
            count:4
        },
    ])
    
    return (
        <div className='ship_select'>
            {shipBay.map((items, index) =>{
                console.log(items);
                return (<div className={"bay bay_" + `${items.shipType}` + `${items.count}`} key={index}>
                    <div 
                        className={"ship ship_" + `${items.shipType}`} 
                        onDragStart={(e)=>{dragStartHandler(e, items)}} 
                        onDragLeave={(e)=>{dragEndHandler(e)}} 
                        onDragEnd={(e)=>{dragEndHandler(e)}} 
                        onDragOver={(e)=>{dragOverHandler(e, items)}} 
                        onDrop={(e)=>{dropHandler(e, items)}} 
                        // onClick={()=>props.handleShipChange(items.shipType)}
                        draggable={true}>
                    </div>
                    <p>{items.count}</p>
                </div>)
            })}
        </div>
    )
}

export default ShipSelect