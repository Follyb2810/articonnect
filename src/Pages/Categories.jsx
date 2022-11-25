import { Component } from "react";
import Artisan from "../Components/Articonnect";
import CatBanner from "../Components/CatBanner";
// import CatList from "../Components/CatList";
import Footer from "../Components/Footer"
import {HeaderWhite} from "../Components/HeaderWhite";
import CardList from "../Components/CardList";

 class Categories extends Component{
    
    constructor(){
        super()
          this.state ={
               searchWorker : Artisan,
                workerId:""
          }
    }

    ArtSearch =(w)=>{
        this.setState({workerId:w.target.value})

    }
     render(){
    const searchArtisan = this.state.searchWorker.filter(k=>{
            return (k.name.toLowerCase().includes(this.state.workerId.toLowerCase()))
            })
        return(
          <div>
              <HeaderWhite/>
                  <CatBanner to={this.ArtSearch} />
                  <h2>Base On Your Selection</h2>
                  <CardList    worker={searchArtisan}/>
                  {/* <CatList art={ArtFilter} />   */}
                   <Footer/>
          </div>
      )
  }
}
export default Categories;


//     constructor(){
//         super()
//           this.state={
//                art:Artisan,
//                display:""
//         }
//       }
//       Search =(e)=>{
//          this.setState({display:e.target.value})
//       }
    
//     render(){
//         const ArtFilter = this.state.art.filter(a=>{
//             return (a.name.toLowerCase().includes(this.state.display.toLowerCase()))
//           })
        
//         return(
//             <div>
//                 <HeaderWhite/>
//                     <CatBanner to={this.Search} />
//                     <h2>Base On Your Selection</h2>
//                     <CardList    worker={ArtFilter}/>
//                     {/* <CatList art={ArtFilter} />   */}
//                      <Footer/>
//             </div>
//         )
//     }
//  }
//  export default Categories;


 
