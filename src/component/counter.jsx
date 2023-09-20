import React, { Component } from 'react'

class Counter extends Component {
    state ={count:7,
    tags:['tag1','tag2','tag3']};
    render() { 
       
        
     


        return( <React.Fragment>
            
            <h1>hello world</h1>
            <p>this is your first project</p>
            <ul>
                {this.state.tags.map(tag=> <li>{tag}</li>)}

            </ul>
            
        </React.Fragment>);// whats inside of a return visiblein root segment
        // instead of div can be replaced with <React.Fragment> insted <div>
    }

 

   






}
 
export default Counter;
