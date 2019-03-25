import React, { Component } from 'react'
import Header from './header'
import withLoadingSpinner from './withLoadingSpinner'
import Liste from './liste'

import './App.css';
const newstab=[{
  id:'1',
  title:'IO',
  article: 'https://media.senscritique.com/media/000018313111/source_big/Io.jpg',
  rating: 8,
  },
  
  {
  id:'2',
  title:'Creed 2',
  article:'https://static.actu.fr/uploads/2019/01/affiche-creed-2-affiche-france-854x1138.jpg',
  rating: 7,
  },
  {
  id:'3',
  title:'Aqua Man',
  article:'https://66.media.tumblr.com/fa202eb3365b89f8a5cb7e0073869ed6/tumblr_pjycd8YQvn1w27olr_1280.jpg',
  rating: 5,
  },
  {
  id:'4',
  title:'Dragon',
  article:'https://i2.wp.com/35.224.17.105/wp-content/uploads/2018/08/Dragon-647x1024.jpg?resize=647%2C1024',
  rating: 4,
  }]


  const dataLoader = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        const newstab = {
        
        }
        resolve(newstab)
      }, 2000)
    })
  }

 

class App extends Component {
  constructor(props){
    super(props)
      this.state={
       id:0,
        rating: 1,
        news:newstab ,
        //  filtred:newstab  ,
   
      }
    }
    
    addMovie=(x)=>
    {
           this.setState({
              news:this.state.news.concat(x),
              })
    }
    remove=(i)=>
    { 
        this.setState({
          news:this.state.news.filter((el,index)=>(index!=i))
        })
    }
  
  serach(keyword){
    let filter1=newstab.filter((el,i)=>{return el.title.toLocaleLowerCase().indexOf(keyword)>-1})
    this.setState({news:filter1})
  }

   
  serachrating1(val){
    let filter1=newstab.filter((el,i)=>{return el.rating === val})
    this.setState({news:filter1})
  }
  render() {
         console.log(this.state.news)
    return (
      <div className="App">
    
      
        
        <Header  searchname={(keyword)=>this.serach(keyword)} 
                 serachrating1={(val)=>this.serachrating1(val)}
                 addMovie={this.addMovie}

        />
        <br/><br/>
        <Liste news={this.state.news}
               remove={this.remove}/>
      </div>
    );
  }
}

export default withLoadingSpinner(dataLoader)(App)
