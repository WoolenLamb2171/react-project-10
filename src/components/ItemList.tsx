import React from 'react'
import Item from './Item'

const ItemList = (props: any) => {
  const list = props.items.map((element: any) => {
    return (
      <li key={element.id} className="px-4">
        <Item info={element} />
        <button
          className="px-4  border rounded-2xl"
          onClick={() => props.onDeliteButton(element.id)}
        >
          Удалить
        </button>
      </li>
    )
  })

  return <ul className="ui-list">{list}</ul>
}

export default ItemList
