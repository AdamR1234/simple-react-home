import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import CV from './cv.js';





class App extends Component {

  render() {
    return (
     <div>

      
         <section>

          <h2>Hi there!</h2> 

          This site was created using nothing but: <strong style={{fontSize:'1.2em'}}>React.JS</strong>
          ...<span style={{fontSize:"0.8em"}}>and HTML... </span>
           <span style={{fontSize:"0.6em"}}>and CSS... </span>
           <span style={{fontSize:"0.5em"}}>and Google search</span>
           <br /><br />

          I'm still in the learning phase of React so I'm unable to showcase
          any reacty transitional skills on this page.
          <br/><br/>

          In the meantime, please feel free to read my CV and check out my (university) projects.

         </section>
       
     
       
        <CV></CV>
        
        
       



     </div>
    );
  }
}

export default App;
