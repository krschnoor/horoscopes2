import React, { Component } from "react";
import "./App.css";

export default class Horoscope extends Component {
  constructor() {
    super();

    // We want to make sure that the "onClick()"
    // handler is explicitly bound to this component
    // as it's context.
    //this.onClick = this.onClick.bind(this);
  }

  // When a list item is clicked, look up the name
  // of the item based on the "id" argument. This is
  // why we need access to the component through "this",
  // for the properties.

  render() {
    //src={require(sign.image)}

    
    const {sign,image,json,setDate, home} =  this.props

    console.log(json)
  
    return (

     

      <div class="text-center col-md-8  col-md-offset-2 container-fluid">
        {/* Creates a new handler function with
            the bound "id" argument. Notice that
            the context is left as null, since that
            has already been bound in the
            constructor. */}

       
          <div
            class="col-md-8  panel panel-default text-center"
            className="panel2"
          >
            <div
              class="panel-heading font-weight-bold"
              className="panel-header"
            >
              {sign}<label>--&nbsp;{json.date_range}</label>
            </div>

            <div class="panel-body" className="panel-body">
            <a href="#" onClick={()=>{setDate("yesterday")}}>Yesterday</a><label>&nbsp;</label><a href="#" onClick={()=>{setDate("today")}}>Today</a><label>&nbsp;</label><a href="#" onClick={()=>{setDate("tomorrow")}}>Tomorrow</a>
            <br/>
             <a href="#" onClick={()=>{home()}}>Horoscope List</a>
             <br/>
             <br/>
               <label className="horoscopetitle" >Horoscope for &nbsp; {json.current_date}</label>
               <br/>
              <img
                                
                src={process.env.PUBLIC_URL + "/images/" + image}
                alt="Logo"
              />
              <br />
              <br />
              <label className="horoscopetitle">Your Horoscope</label>
              <br/>
              <label className="horoscope">
                {json.description}
              </label>
              <br />
             <label className="horoscopetitle">Your Mood</label>
              <br/>
              <label>
                {json.mood}
              </label>
              <br />
              <label className="horoscopetitle">Your Color</label>
              <br/>
              <label>
                {json.color}
              </label>
              <br />
              <label className="horoscopetitle">Your Lucky Number</label>
              <br/>
              <label>
                {json.lucky_number}
              </label>
              <br />
              <label className="horoscopetitle">Your Lucky Time</label>
              <br/>
              <label>
                {json.lucky_time}
              </label>
              <br />
              <label className="horoscopetitle">Your Compatibility</label>
              <br/>
              <label>
                {json.compatibility}
              </label>
              <br />

              <br />
            </div>
          </div>
       
      </div>
    );
  }
}
