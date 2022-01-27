import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './prebaruvajne.css';
import Search from '../components/Search/search';
import Card from '../components/Card/card';
import Oglasi from '../components/pagination/oglasi';
import Pagination from '../components/pagination/pagination';

export default function Prebaruvajne(){
    const [Restaurants,setRestaurantsList] = useState([]);
    const [selektGrad, setSelektGrad] = useState(false);
    const [loading, setLoading] = useState(false);
    const [terasa,setTerasa] = useState('');
    const [smoking,setSmoking] = useState('');
    const [currentRestaurant, setCurrentPage] = useState(1);
    const [payOp,setPayOp] = useState([]);
    const [inter,setInter] = useState('');
    const [wheel,setWheel] = useState('');
    const [tel,setTel] = useState('');
    
    function handleCall(){
     
      Axios.get("http://localhost:3001/api/prezemi",{
        params:{
          rest:selektGrad,
          rest1:terasa,
          rest2:smoking,
          rest3:payOp,
          rest4:wheel,
          rest5:inter,
          rest6:tel
        }
      }).then((response)=>{
          setLoading(true);
          setRestaurantsList(response.data);
          setLoading(false);
          
      
        });
      }
      
      function handleCallback(grad){
      setSelektGrad(grad);
        
        
      }
      function toggle1(){
        if(terasa==='')
        {
        setTerasa('yes');
        }
        if(terasa==='yes')
        {
          setTerasa('');
        }
      }
     
      function toggle3(event){ 
        
        setSmoking(event.target.value);
        
      }
      
      function toggle4(event){
       
        
        if(payOp.includes(event.target.value))
        {
           alert("hello");
           var index = payOp.indexOf(event.target.value); 
           delete payOp[index];
          
        }else
        {
          alert("more");
          payOp.push(event.target.value);
        }
        alert(payOp);
        setPayOp(payOp);
      }
      function toggle5(event){
        if(inter==='')
        {
        setInter('yes');
        }
        if(inter==='yes')
        {
          setInter('');
        }
      }
      function toggle6(){
        if(wheel==='')
        {
          setWheel('yes');
        }
        if(wheel==='yes')
        {
          setWheel('');
        }
      }
      function toggle7(){
        if(tel==='')
        {
          setTel('yes');
        }
        if(tel==='yes')
        {
          setTel('');
        }
      }
     
      
      const RestaurantsPerPage = 5;
       // Get current posts
       const indexOfLastRestaurant = currentRestaurant * RestaurantsPerPage;
       const indexOfFirtsRestaurant = indexOfLastRestaurant - RestaurantsPerPage;
       const currentRestaurants = Restaurants.slice(indexOfFirtsRestaurant, indexOfLastRestaurant);
 

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  

    return(
      
      <div className="prebaruvajne">
        <div className="inputDrop">
            <div className="labela">
            <label>Одбери Град:</label>
            </div>
            <div className="OdberiGrad">
            <Search kaj={handleCallback} />
            </div>
            <div className="Odberi">
              <label>Одбери со тераса</label>
               <div className="Opis">
                 <label>Ima Terasa</label>
                 <input onChange={toggle1} type="checkbox" id="Terasa1" name="Terasa" 
                 value="Terasa" />
               </div>
            </div>
            <div className="Odberi">
              <label>Одбери дали е дозволено пушење</label>
               <div className="Opis">
                 <label>Надвор</label>
                 <input onChange={toggle3} type="radio" id="mySelect" name="RadioButton" 
                 value="outside" />
               </div>
               <div className="Opis">
                 <label>Одвоено</label>
                 <input onChange={toggle3} type="radio" id="mySelect" name="RadioButton" 
                 value="separated" />
               </div>
               <div className="Opis">
                 <label className="Nedoz">Недозволено</label>
                 <input onChange={toggle3} type="radio" id="mySelect" name="RadioButton" 
                 value="" />
               </div>
            </div>
            <div className="Odberi">
              <label>Одбери начин на плаќање</label>
               <div className="tera">
                 <label className="Prvo">VIZA</label>
                 <input onChange={toggle4} type="checkbox" id="vizaId" name="Vcard" 
                 value="Viza" />
                 <label>Mastercard</label>
                 <input onChange={toggle4} type="checkbox" id="mastercardId" name="Mcard" 
                 value="Mastercard" />
                 <label>Кеш</label>
                 <input onChange={toggle4} type="checkbox" id="KeshId" name="KeshPrice" 
                 value="Cash" />
               </div>
            </div>
            <div className="Odberi">
              <label>Дали да има Интернет</label>
               <div className="opis">
                 <label>Да</label>
                 <input onChange={toggle5} type="checkbox" id="InternetId" name="Inter" 
                 value="Int12" />
               </div>
            </div>
            <div className="Odberi">
              <label>Пристап за инвалидизирани лица</label>
               <div className="Opis">
                 <label>Да</label>
                 <input onChange={toggle6} type="checkbox" id="WheelchairId" name="wheel" 
                 value="WheelCheck" />
               </div>
            </div>
            <div className="Odberi">
              <label>Контакт телефон</label>
               <div className="Opis">
                 <label>Да</label>
                 <input onChange={toggle7} type="checkbox" id="kontakt1" name="Pkontakt" 
                 value="broj" />
               </div>
            </div>
        
            <button className="buttonSearch" onClick={handleCall}>Пребарувај</button>  

              
           
            

        </div>
      
       <div className="listing">
       <div className="listaRestorani">
         <Oglasi  Restaurants={currentRestaurants} loading={loading}></Oglasi>
         </div>  
      
     <div className="listing-page">
       <Pagination
        postsPerPage={RestaurantsPerPage}
        totalPosts={Restaurants.length}
        paginate={paginate}
      />
     </div>
       </div>

      </div>
                
    )
    

}