import React, {useState} from "react"


function TableRender(props){
  const [caption, setCaption] = useState("Place your ships")
  const Table = Array(10).fill(Array(10).fill(0))
  
  function tap(e){
    console.log(e.target.dataset);
    if (e.target.dataset.b === "false") {
      e.target.dataset.b = "true"
      e.target.className = "battlefield-cell battlefield-cell_busy"
    }else{
      e.target.dataset.b = "false"
      e.target.className = "battlefield-cell battlefield-cell_empty"
    }
  }

  function dragEndHandler(e) {
    console.log(e);
  }

  function dragOverHandler(e) {
    switch (props.ship) {
      case "2x":
        e.target.className = "battlefield-cell battlefield-cell_hover"
        e.target.nextSibling.className = "battlefield-cell battlefield-cell_hover"
        // console.log(e.target.nextSibling);
        break;

      case "3x":
        e.target.className = "battlefield-cell battlefield-cell_hover"
        e.target.nextSibling.className = "battlefield-cell battlefield-cell_hover"
        e.target.nextSibling.nextSibling.className = "battlefield-cell battlefield-cell_hover"
        // console.log(e.target.dataset);
        break;
      
      case "4x":
        e.target.className = "battlefield-cell battlefield-cell_hover"
        e.target.nextSibling.className = "battlefield-cell battlefield-cell_hover"
        e.target.nextSibling.nextSibling.className = "battlefield-cell battlefield-cell_hover"
        e.target.nextSibling.nextSibling.nextSibling.className = "battlefield-cell battlefield-cell_hover"
        // console.log(e.target.dataset);
        break;

      default:
        e.target.className = "battlefield-cell battlefield-cell_hover"
        break;
    }
  }

  function dragLeaveHandler(e) {
    switch (props.ship) {
      case "2x":
        e.target.className = "battlefield-cell battlefield-cell_empty"
        e.target.nextSibling.className = "battlefield-cell battlefield-cell_empty"
        // console.log(e.target.nextSibling);
        break;

      case "3x":
        e.target.className = "battlefield-cell battlefield-cell_empty"
        e.target.nextSibling.className = "battlefield-cell battlefield-cell_empty"
        e.target.nextSibling.nextSibling.className = "battlefield-cell battlefield-cell_empty"
        // console.log(e.target.dataset);
        break;
      
      case "4x":
        e.target.className = "battlefield-cell battlefield-cell_empty"
        e.target.nextSibling.className = "battlefield-cell battlefield-cell_empty"
        e.target.nextSibling.nextSibling.className = "battlefield-cell battlefield-cell_empty"
        e.target.nextSibling.nextSibling.nextSibling.className = "battlefield-cell battlefield-cell_empty"
        // console.log(e.target.dataset);
        break;

      default:
        e.target.className = "battlefield-cell battlefield-cell_empty"
        break;
    }
  }

  return (
      <table className='battlefield-table' border={1}>
      <caption className='changing_cap'>{caption}</caption>
      <tbody>
        {Table.map((items, Index) => {
          return (<tr key={Index} className='battlefield-row'>
            {items.map((subItems, sIndex)=>{
              return <td 
                key={sIndex} 
                className='battlefield-cell battlefield-cell_empty' 
                data-x={sIndex+1} 
                data-y={Index+1} 
                data-b={false} 
                onClick={(e) => tap(e)} 
                onDragOver={(e)=>{dragOverHandler(e)}} 
                onDragLeave={(e)=>{dragLeaveHandler(e)}}
                onDragEnd={(e)=>{dragEndHandler(e)}}
                >
                  {/* {props.ship} */}
              </td>
            })}
          </tr>)
        })}
      </tbody>
    </table>
  )
}

export default TableRender