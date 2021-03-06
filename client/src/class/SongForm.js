import React from "react";
import styledComponents from "styled-components";
import Button from "../style/Button";
import Form from 'react-bootstrap/Form'

class SongForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      songname:'',
      artist: ''
    }
  }


  handleChange=(e)=>{
    console.log('value:', e.target.value)
    console.log('name',e.target.name)
    this.setState({
      [e.target.name]:e.target.value
    })
  //  THIS WORKS:
  //   if(e.target.name === 'songname'){
  //     this.setState({
  //       songname:e.target.value
  //     })
  //   }
  //   if(e.target.name === 'artist'){
  //   this.setState({
  //     artist:e.target.value
  //   })
  // }
}
  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
    this.props.addSong(this.state)
  }



  render(){
    return(
      <div className="border">
        <h1>Class Song Form</h1>
        <form onSubmit={this.handleSubmit}>
          <p>class song name:</p>
          <input name='songname' value = {this.state.songname}onChange={this.handleChange}/>
          <p>class artist:</p>
          <input name='artist'value = {this.state.artist}onChange={this.handleChange}/>
          <Button>add</Button>
        </form>
      </div>
    )
  }
}

export default SongForm