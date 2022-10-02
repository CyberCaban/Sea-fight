import { useState, useEffect } from "react";

function ShipSelect(props) {

    function shipUpd(shipType, count) {
        const Arr = shipBay
        switch (shipType.dataset.size) {
            case "4x":
                Arr[0].count--
                setShipBay(Arr)
                console.log(shipBay);
                break;
            case "3x":
                
                break;
            case "2x":
                
                break;
            case "1x":
                
                break;
            default:
                break;
        }
    }
    
    function dragEndHandler(e){
        e.target.classList.remove("opacity")
        console.log(e.target.dataset);
        shipUpd(e.target)
    }

    function dragOverHandler(e, items){
        e.preventDefault()
        // console.log(e, items);
    }

    function dropHandler(e){
        console.log(e);
        // e.preventDefault()
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
                // console.log(items);
                return (<div className={"bay bay_" + `${items.shipType}` + `${items.count}`} key={index}>
                    <div 
                        className={"ship ship_" + `${items.shipType}`} 
                        onDragStart={(e)=>{dragStartHandler(e, items)}} 
                        // onDragLeave={(e)=>{dragEndHandler(e)}} 
                        onDragEnd={(e)=>{dragEndHandler(e)}} 
                        onDragOver={(e)=>{dragOverHandler(e, items)}} 
                        onDrop={(e)=>{dropHandler(e, items)}} 
                        // onClick={()=>props.handleShipChange(items.shipType)}
                        data-size={items.shipType}
                        data-count={items.count}
                        draggable={true}>
                    </div>
                    <p>{items.count}</p>
                </div>)
            })}
        </div>
    )
}

export default ShipSelect