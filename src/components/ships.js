import { useState, useEffect } from "react";

function ShipSelect(props) {

    function shipUpd(shipType, count) {
        const Arr = shipBay.slice()
        switch (shipType.dataset.size) {
            case "4x":
                if (Arr[0].count>0 && props.FD!=1) {
                    Arr[0].count--
                    setShipBay(Arr)
                }
                break;
            case "3x":
                if (Arr[1].count>0 && props.FD!=1) {
                    Arr[1].count--
                    setShipBay(Arr)
                }
                break;
            case "2x":
                if (Arr[2].count>0 && props.FD!=1) {
                    Arr[2].count--
                    setShipBay(Arr)
                }
                break;
            case "1x":
                if (Arr[3].count>0 && props.FD!=1) {
                    Arr[3].count--
                    setShipBay(Arr)
                }
                break;
            default:
                break;
        }
    }
    
    function dragEndHandler(e){
        if (e.target.dataset.count!=0) {
            props.handleTableChange(1)
            e.target.classList.remove("opacity")
            shipUpd(e.target);
            console.log(e.target.dataset);
        }
    }

    function dragOverHandler(e, items){
        e.preventDefault()
    }

    function dropHandler(e){
        console.log(e);
    }

    function dragStartHandler(e, items){
        if (e.target.dataset.count!=0) {
            e.target.classList.add("opacity")
            props.handleShipChange(items)
            // console.log(e.target.dataset.count);   
        }else{
            return
        }
    }

    let [shipBay, setShipBay] = useState([
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
        }
    ])

    return (
        <div className='ship_select'>
            {shipBay.map((items, index) =>{
                // console.log(items);
                return (<div className={"bay bay_" + `${items.shipType}` + `${items.count}`} key={index}>
                    <div 
                        className={"ship ship_" + `${items.shipType}`} 
                        onDragStart={(e)=>{dragStartHandler(e, items)}}
                        onDragEnd={(e)=>{dragEndHandler(e, items)}} 
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