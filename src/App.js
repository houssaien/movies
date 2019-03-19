import React, { Component } from 'react'

import Header from './header'
import Liste from './liste'

import './App.css';
const newstab=[{
  id:'1',
  title:'Write stateless components',
  article: 'https://media.senscritique.com/media/000018313111/source_big/Io.jpg',
  rating: 8,
  },
  
  {
  id:'2',
  title:' Use Redux.js',
  article:'https://static.actu.fr/uploads/2019/01/affiche-creed-2-affiche-france-854x1138.jpg',
  rating: 7,
  },
  {
  id:'3',
  title:'. Use shallow rendering',
  article:'data:image/jpeg;base64,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',
  rating: 5,
  },
  {
  id:'4',
  title:'Use JSX, ES6, Babel, Webpack, and NPM',
  article:'https://media.senscritique.com/media/000018033529/source_big/Forgiven.jpg',
  rating: 4,
  }]
class App extends Component {
  constructor(props){
    super(props)
      this.state={
        rating: 1,
   news:newstab ,
   filtred:newstab   
      }
    }
  
  serach(keyword){
    let filter1=this.state.news.filter((el,i)=>{return el.title.toLocaleLowerCase().indexOf(keyword)>-1})
    this.setState({filtred:filter1})
  }

  serachrating1(val){
    let filter1=this.state.news.filter((el,i)=>{return el.rating === val})
    this.setState({filtred:filter1})
  }
  render() {

    return (
      <div className="App">
    
      
        
        <Header  searchname={(keyword)=>this.serach(keyword)} 
                 serachrating1={(val)=>this.serachrating1(val)}
        />
        <br/><br/>
        <Liste news={this.state.filtred}/>
      </div>
    );
  }
}

export default App;
