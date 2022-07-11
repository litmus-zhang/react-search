import React, { useState } from 'react'

export default function FilterItem()
{
    const [active, setActive ] = useState(false)
    return (
      <React.Fragment>
            <select className={active ? 'filter active' : "filter"}>
                <option>Option 0</option>
                <option>Option 1</option>
                <option>Option 2</option>
                </select>
            <style jsx="true">{`
            .filter {
                display: flex;
                width: max-content;
                height: 30px;
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 5px;
                align-items: center;
                cursor: pointer;
                background-color: #f5f5f5;
                font-family: inherit;
            }
            .filter.active {
                background-color: #111;
                color: #fff;
            }
            `}</style>
      </React.Fragment>
    
  )
}
