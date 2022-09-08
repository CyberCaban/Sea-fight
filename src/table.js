import React, {useState} from "react"

function Table(){
    const [caption, setCaption] = useState("Place your ships")
    const rowRender = () => {
        <tr className='battlefield-row'></tr>
    }

    return (
        <table className='battlefield-table' border={1}>
            <caption className='changing_cap'>{caption}</caption>
            <tbody>
                {rowRender}
            </tbody>
        </table>
    )
}

export default Table