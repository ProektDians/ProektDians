
import React,{Component,useState,useEffect} from 'react';
import './card.css';
import slika1 from '../../background/slika1.jpg'
import slik from '../../background/R.jfif'
import slika2 from '../../background/slika2.jpg'
import { useHistory } from "react-router-dom";

export default function Card(props) {
const [result,setResult]=useState('');
function SelectImage(){
      const array = [slika1,slik,slika2];
      setResult(array[Math.floor(Math.random() * array.length)]);
      
    
      
}



  let history = useHistory();

  function handleClick() {
    history.push('/DisPage',{
      name:props.name,
      city:props.addr,
      terasa:props.terasa,
      cuisine:props.cuisine,
      opening_hours:props.opening_hours,
      internet:props.internet,
      website:props.website,
      phone:props.phone,
      smoking:props.smoking,
      invalidiziranost:props.wheelchair,
      mastercard:props.mastercard,
      visa:props.visa,
      coins:props.coins,
      address:props.address

    
    })
  }




useEffect(()=>{
  SelectImage();
}, []);


    return (
      <div className="card">
        <div className="cardbody">
          <img src={result} class="cardimage" />
            <h3 className="cardtitle">{props.name}</h3>
             {props.addr &&
            <p className="carddescription">Град:{props.addr}</p>
             }
              {props.terasa &&
            <p className="carddescription">Terasa:{props.terasa}</p>
             }
            {props.cuisine &&
            <p className="carddescription">Кујна:{props.cuisine}</p>
            }
             {props.opening_hours &&
           <p className="carddescription">Отворено:{props.opening_hours}</p>
            }
             {props.internet &&
            <p className="carddescription">Интернет:{props.internet}</p>
            }
            {props.website &&
            <p className="carddescription">Веб Сајт:{props.website}</p>
            }  
            
            {props.phone &&
            <p className="carddescription">Контакт Телефон:{props.phone}</p>
            }  
            {props.smoking ?(
            <p className="carddescription">Дозволено Пушење:{props.smoking}</p>
            ):(
              <p className="carddescription">No smoking</p>
            )
            }  
        </div>
        <button onClick={handleClick} className="cardbtn">Види ресторан</button>
      </div>
    );
  }