import { useState } from "react";

function ShipSelect(params) {
    
      function dragEndHandler(e, items){
        console.log(e, items);
      }
      function dragOverHandler(e){
        e.preventDefault()
        console.log(e);
      }
      function dropHandler(e){
        e.preventDefault()
        console.log(e);
      }

    const dragStartHandler = (e) => {
        console.log(e);
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
                return (<div className={"bay bay_" + `${index+1}` + 'x' + `${4-index}`}>
                    <div 
                    className={"ship ship_" + `${4-index}` + 'x'} 
                    onDragStart={(e)=>{dragStartHandler(e, items)}} 
                    onDragLeave={(e)=>{dragEndHandler(e)}} 
                    onDragEnd={(e)=>{dragEndHandler(e)}} 
                    onDragOver={(e)=>{dragOverHandler(e)}} 
                    onDrop={(e)=>{dropHandler(e, items)}} 
                    draggable={true}></div>
                    <p>{index+1}</p>
                </div>)
            })}









            {/* <div className="ship_bay">
                <div className="bay bay_4x1">
                    <div className="ship ship_4x"></div>
                    <p>1</p>
                </div>
                <div className="bay bay_3x2">
                    <div className="ship ship_3x"></div>
                    <p>2</p>
                </div>
                <div className="bay bay_2x3">
                    <div className="ship ship_2x"></div>
                    <p>3</p>
                </div>
                <div className="bay bay_1x4">
                    <div onDragStart={dragStartHandler} onDragLeave={(e)=>{dragEndHandler(e)}} onDragEnd={(e)=>{dragEndHandler(e)}} onDragOver={(e)=>{dragOverHandler(e)}} onDrop={(e)=>{dropHandler(e)}} draggable={true} className="ship ship_1x"></div>
                    <p>4</p>
                </div>
            </div> */}
        </div>
    )
}

export default ShipSelect