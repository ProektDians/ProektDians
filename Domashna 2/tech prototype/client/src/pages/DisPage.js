import React from 'react'
import './DisPage.css';

import { useLocation } from 'react-router-dom';

export default function DisPage(props){
    let location = useLocation();
    const name = location.state.name;
    const cuisine = location.state.cuisine;
    const smoking = location.state.smoking;
    const opening_hours = location.state.opening_hours;
    const internet = location.state.internet;
    const terasa = location.state.terasa;
    const website = location.state.website;
    const city = location.state.city;
    const phone = location.state.phone;
    const invalidiziranost = location.state.invalidiziranost;
    const mastercard = location.state.mastercard
    const visa = location.state.visa;
    const coins = location.state.coins;
    const address = location.state.address;


    return(
        <div className="disPage">
     
             {name &&
            <h1 className="carddescription">Име:{name}</h1>
             }
             {city &&
             <h1 className="carddescription">Град:{city}</h1>

             }
             {address && 
             <h1 className="carddescription">Адреса:</h1>
            
             }
              {cuisine&&
            <h1 className="carddescription">Кујна:{cuisine}</h1>
             }
           {terasa && 
            <h1 className="carddescription">Тераса:{terasa}</h1>

           }
             {opening_hours &&
           <h1 className="carddescription">Отворено:{opening_hours}</h1>
            }
             {internet &&
            <h1 className="carddescription">Интернет:{internet}</h1>
            }
            {website &&
            <h1 className="carddescription">Веб Сајт:{website}</h1>
            }  
            {mastercard &&
                <h1 className="carddescription">Мастеркарт:{mastercard}</h1>
            }
            {visa &&
            <h1 className="carddescription">Виза:{visa}</h1>

            }
            {coins &&
            <h1 className="carddescription">Кеш:{coins}</h1>

            }
            {invalidiziranost &&
            <h1 className="carddescription">Пристап за инвалидизирани лица:{invalidiziranost}</h1>
            }  
            {phone &&
            <h1 className="carddescription">Контакт Телефон:{phone}</h1>
            }  
            {smoking ?(
            <h1 className="carddescription">Дозволено Пушење:{smoking}</h1>
            ):(
              <h1 className="carddescription">No smoking</h1>
            )
            }  
            

            
            
        </div>
    )
    
}
