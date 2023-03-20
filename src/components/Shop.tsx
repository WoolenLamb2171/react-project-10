import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import AddItem from './AddItem'
import ItemsList from './ItemList'

export default function Shop() {
  const [item, setItem] = useState('')
  const [discription, setDescription] = useState('')
  const [items, setItems] = useState(() => {
    if (!JSON.parse(localStorage.getItem('items') || "")) {
      return []
    }
    return JSON.parse(localStorage.getItem('items') || "")
  })

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      name: item,
      desc: discription,
    }),
    headers: { 'Content-type': 'application/json' },
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
    if (items.length) {
      document.title = `${items.length} товаров`
    }
    if (!items.length) {
      document.title = 'Товары отсутствуют'
    }
  }, [items])

  const hendleSubmitButton = (event: any) => {
    if (!item || !discription) {
      alert('Пожалуйста, заполните все поля')
      event.preventDefault()
      return
    }

    event.preventDefault()
    setItems([...items, { id: uuid(), name: item, desc: discription }])

    fetch('https://learn.guidedao.xyz/api/student/products', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))

    setDescription('')
    setItem('')
  }

  const handleDeliteButton = (id: number) => {
    setItems((oldValues: any) => {
      return oldValues.filter((itm: any) => itm.id !== id)
    })
  }

  const handleItemChange = (event: any) => {
    setItem(event.target.value)
  }

  const handleDiscriptionChange = (event: any) => {
    setDescription(event.target.value)
  }

  return (
    <>
      <AddItem
        item={item}
        discription={discription}
        onSubmitButton={hendleSubmitButton}
        onItemChange={handleItemChange}
        onDiscriptionChange={handleDiscriptionChange}
      />

      {!items.length ? (
        <div>
          <p className="ui-title py-3 px-4">Добавьте первый товар</p>
        </div>
      ) : (
        <></>
      )}

      <ItemsList items={items} onDeliteButton={handleDeliteButton} />
    </>
  )
}
