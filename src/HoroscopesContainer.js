import React, { Component } from "react";
import HoroscopesList from "./HoroscopesList";
import Horoscope from "./Horoscope";
import "./App.css";

export default class HoroscopesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
      selected: false,
      sign: null,
      date: "today",
      id: null
    };
  }
  // When a list item is clicked, look up the name
  // of the item based on the "id" argument. This is
  // why we need access to the component through "this",
  // for the properties.
  selectSign = id => {
   
    const { sign, image } = this.props.signs.find(i => i.id === id);
    
    var signlower = sign.toLowerCase();
   
    const URL =
      "https://aztro.sameerkumar.website/?sign=" + signlower + "&day=today";

    fetch(URL, {
      method: "POST"
    })
      .then(response => response.json())
      .then(json => {
        //this.setState({ json });
        this.setState({
          json:json,
          sign: sign,
          selected: true,
          image: image,
          id:id
        });
      });

   
  };



  setDate = (date) =>{
    
    const { sign, image, id } = this.state;
    
    var signlower = sign.toLowerCase();
   
    const URL =
      "https://aztro.sameerkumar.website/?sign=" + signlower + "&day=" + date;

    fetch(URL, {
      method: "POST"
    })
      .then(response => response.json())
      .then(json => {
        //this.setState({ json });
        this.setState({
          json:json,
          sign: sign,
          selected: true,
          image: image,
          date:date
        });
      });


  }



 home = () =>{

 this.setState({

 selected:false

 })

 }

  
  render() {
    const selectSign = this.selectSign;
    const signs = this.props.signs;
    const selected = this.state.selected;
    const state = this.state;
    const setDate = this.setDate;
    const home = this.home;

    console.log(this.state.json);
    


    if (!selected) {
      return <HoroscopesList selectSign={selectSign} signs={signs} />;
    } else {
      return <Horoscope home={home} setDate={setDate} {...state} />;
    }
  }
}
