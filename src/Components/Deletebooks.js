import React from 'react';
import axios from 'axios';


class Delbooks extends React.Component{
    constructor(props){
        super()
        this.state={
            id:props.id
        }
    }


   

    render(){
        return{
          delbooks(){
            axios.delete('http://146.148.89.61:80/Store234/' +this.state.id).then((response)=>{
                console.log("This id has been deleted"+this.state.id);
              })
          }
        }
    }







}

export default Delbooks
