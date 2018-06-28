import React, { Component } from 'react'

export default class Body extends Component {

    componentWillMount(){
        if (navigator.geolocation) {
            console.log('Geolocation is supported!')
          }
          else {
            console.log('Geolocation is not supported for this Browser/OS.');
          }
          var startPos;
          var geoSuccess = function(position) {
            startPos = position;
            console.log(startPos)
            // document.getElementById('startLat').innerHTML = startPos.coords.latitude;
            // document.getElementById('startLon').innerHTML = startPos.coords.longitude;
          }
          var geoError = function(error) {
            console.log('Error occurred. Error code: ' + error.code)
          }
          navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        }
    


    render(){
        return(
            <div className="container jumbotron ">
            <div className="row">
                <div className="col">
                    <label className="center">HELLO WORLD</label>
                </div>
                <div className="col">
                    <label className="label">HELLO WORLD</label>
                </div>
            </div>
            </div>
        )
    }
}