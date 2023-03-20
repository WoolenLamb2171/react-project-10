import React, { useState } from 'react'

export default function Item(props: any) {
  const [total, setTotal] = useState(0)

  const { info } = props

  function handleAddClick() {
    setTotal(total + 1)
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1)
    }
  }

  if (!info) {
    return null
  }

  return (
    <div className="py-3 px-4">
      <div className="item-info">
        <h2 className="item-title">{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className='flex'>   
        <button
        className="border px-2"
        disabled={total === 0}
        onClick={handleRemoveClick}
        >
          -
        </button>

        <h3 className="px-1">{total ? total : ''}</h3>
        <button className="border px-2" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  )
}
