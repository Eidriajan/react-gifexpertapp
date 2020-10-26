import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])
  // const [newCategory, setNewCategory] = useState('');

  // const handleAdd = (newCategory) => {
  //   setCategories([
  //     ...categories,
  //     newCategory
  //   ])
  // }
    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={setCategories} />
          <hr></hr>
          {/* <input type={'text'} onChange={e => setNewCategory(e.target.value)}></input>
          <button onClick={() => handleAdd(newCategory)}>Agregar</button> */}
          <ol>
            {categories.map(category => {
              return (
                // <li key={item}> {item} </li>
                <GifGrid 
                  key={category}
                  category={category}
                />
              )
            })}
          </ol>
        </>
    )
}

export default GifExpertApp
