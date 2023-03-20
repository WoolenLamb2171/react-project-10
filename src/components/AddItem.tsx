import React from 'react'

const AddItem = (props: any) => {
  return (
    <form className="px-4 py-3" onSubmit={props.onSubmitButton}>
      <div className="py-3 flex flex-col">
        <label htmlFor="itemName">Название товар:</label>
        <input
          value={props.item}
          onChange={props.onItemChange}
          type="text"
          id="itemName"
          placeholder="Название товара"
          className="border rounded "
        />
      </div>
      <div className="py-3 flex flex-col">
        <label htmlFor="discription">Описание товара:</label>
        <input
          value={props.discription}
          onChange={props.onDiscriptionChange}
          id="discription"
          type="text"
          placeholder="Описание товара"
          className="border rounded "
        />
      </div>
      <div className="py-3 px-4">
        <input
          type="submit"
          className="py-1 px-3 border rounded-2xl"
          value="Добавить"
        />
      </div>
    </form>
  )
}

export default AddItem
