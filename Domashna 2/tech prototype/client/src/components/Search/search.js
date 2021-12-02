import React, { Component } from 'react'
import Select from 'react-select'
import Axios from 'axios'

const options = [
  { value: 'Скопје', label: 'Скопје' },
  { value: 'Струга', label: 'Струга' },
  { value: 'Охрид', label: 'Охрид' },
  { value: 'Делчево', label: 'Делчево' },
  { value: 'Крива Паланка', label: 'Крива Паланка' },
  { value: 'Тетово', label: 'Тетово' },
  { value: 'Куманово', label: 'Куманово' },
  { value: 'Гостивар', label: 'Гостивар' },
  { value: 'Ресен', label: 'Ресен' },
  { value: 'Стар Дојран', label: 'Стар Дојран' }
]

export default function Search(props) {
  
 function handleChange (selectedOption){
    props.kaj(selectedOption.value);
  }
    return(
        
        <div className="searcInput">
            <Select  options={options} onChange={handleChange} />
        </div>
        
    )
  
}