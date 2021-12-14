import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import Card from '../components/Card/card';
import Search from '../components/Search/search';
import './pocetna.css';
import Button from '../components/button/button.js'
export default function Pocetna(){
  const [Restoran2,setRestoran] = useState('');
  const [review,setReview] = useState('');
  const [show,setShow] = useState(false);
  const [Restaurants,setRestaurant] = useState([]);

  //Activate on render of component show recomended restaurants-----------------------------
  const functg=()=> {
      
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setRestaurant(response.data);
    });
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setRestoran(response.data);
    });
  
  }
  useEffect(()=>{
    functg();
  }, []);

  function handleCallback(childData){
     
    Axios.get("http://localhost:3001/api/prezemi",{
      params:{
        rest:childData
      }
    }).then((response)=>{
        setRestaurant(response.data);
    
      });
      alert(childData);
  }



    return(
      <div>
 <div className="form">
     
     <h1>ДОБРОДОЈДОВТЕ НА НАШАТА ВЕБ СТРАНА ПРОНАЈДЕТЕ ГО ВАШИОТ РЕСТОРАН</h1>
      <Button />
 </div>
 <div className="one">


 <h1>Препораки на ресторани</h1>
<div className="haha">
 {
     Restaurants.map((val)=>{ 
       return( 
       <div className="wrapper">
       <Card  address={val.address} mastercard={val.mastercard} coins={val.coins} visa={val.visa} internet={val.internet} name={val.name} cuisine={val.cuisine} website={val.website} opening_hours={val.opening_hours}
       addr={val.addrcity}></Card>
       </div>)
     })

 }
 {
   show?
    Restoran2.map((val)=>{ 
      return( 
       <div className="wrapper">
       <Card  name={val.name}  address={val.address} mastercard={val.mastercard} coins={val.coins} visa={val.visa} cuisine={val.cuisine} website={val.website} opening_hours={val.opening_hours}
      internet={val.internet} addr={val.addrcity}></Card>
       </div>)
   }):null
 }
</div>
<div className="buttonGroup">
  <button className="buttonSearch" onClick={()=>setShow(true)}>Прикажи уште 5</button>
<button className="buttonSearch" onClick={()=>setShow(false)}>Сокриј</button>
</div>

</div>

      </div>
       
    )
    
}
