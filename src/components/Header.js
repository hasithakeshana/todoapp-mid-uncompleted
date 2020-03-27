import React, { Component } from 'react'

import Head from '../components/Head';

// https://media.giphy.com/media/RLuIIqkvjbHd5rqj0r/giphy.gif
//https://media.giphy.com/media/cmHXDKeyKQRwb9HNFF/giphy.gif
//https://media.giphy.com/media/jqGmvX3A3RTPp3M5Qg/giphy.gif

export class Header extends Component {
    render() {
        return (
            <div class="card text-center ">
            <div class="card-header bg- rgba(0, 188, 212, 0.7) rgba-cyan-strong">
              <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                <img src="https://media.giphy.com/media/Yrm1zxVt6jhdjhYdpf/giphy.gif" width="15%"></img>
                </li>
                
                
               
               
              </ul>
              
            </div>
            <div class="card-body aqua-gradient" >
            
            <div class="row">
                <div class="col-md-5">
                <img src="https://media.giphy.com/media/cmHXDKeyKQRwb9HNFF/giphy.gif" width="70%"></img>
                </div>
                
                <div class="col-md-5">
            <h1><font color="#0F0B2E">TODO APP</font></h1>
            <p>This application can add item to list and also can edit delete item from list. 
                Items can add complite items table.
            </p>
            </div></div>
           
           
            </div>
          </div>
        )
    }
}

export default Header;
