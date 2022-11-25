import Artisan from "./Articonnect"
import Card from "./Card"

   const Look =()=>{
    return(

       <div>
           {
            Artisan.some((v,i)=>{
               return <Card   name ={Artisan[i].name}/>
            })
           }
           
       </div>
       
    )
   }


   export default Look;
   