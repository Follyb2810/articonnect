
import './Style.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import ArtisanRecom from './Components/ArtisanRecom';
import Footer from './Components/Footer';
import { Component } from 'react';
import Artisan from './Components/Articonnect';
import CardList from './Components/CardList';
// import Card from './Components/Card';
// import Card from './Components/Card';
// import Comment from './Components/Comment';
// import link from "react-router-dom"


class App extends Component {
      constructor(){
      super()
        this.state={
             art:Artisan,
             display:""
      }
    }
    Search =(e)=>{
       this.setState({display:e.target.value})
    }


  render(){
          const ArtFilter = this.state.art.filter(a=>{
            return (a.name.toLowerCase().includes(this.state.display.toLowerCase()))
          })

    return (
      <div className="App">
        <Header  from={this.Search}/>
        <Banner />
        <h2>Most Patronized Artisans</h2>
        {/* <Card/> */}
        <CardList    worker={ArtFilter}/>
        {/* <ArtisanRecom  worker={ArtFilter} /> */}
        {/* <Comment/> */}
        {/* <Card/> */}
        <Footer />
      </div>
    )
  }
}

export default App;

