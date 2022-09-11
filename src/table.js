import React, {useState} from "react"

function tap(e){
    if (e.target.dataset.b === "false") {
        e.target.dataset.b = "true"
        e.target.className = "battlefield-cell battlefield-cell_busy"
    }else{
        e.target.dataset.b = "false"
        e.target.className = "battlefield-cell battlefield-cell_empty"
    }
}

function TableRender(){
    const [caption, setCaption] = useState("Place your ships")
    const Table = Array(10).fill(Array(10).fill(0))
    
    return (
        <table className='battlefield-table' border={1}>
          <caption className='changing_cap'>{caption}</caption>
        <tbody>
          {Table.map((items, Index) => {
            return (<tr key={Index} className='battlefield-row'>
              {items.map((subItems, sIndex)=>{
                return <td key={sIndex} className='battlefield-cell battlefield-cell_empty' data-x={sIndex+1} data-y={Index+1} data-b={false} onClick={(e) => tap(e)}>
                    
                </td>
              })}
            </tr>)
          })}
        </tbody>
      </table>
    )
}

export default TableRender