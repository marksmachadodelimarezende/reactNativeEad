import React, { Component } from 'react'
import IndexApp from '../components/IndexApp'

class AboutScreen extends Component {
    render(){
        return(
            <IndexApp componentView='about' titleView='Sobre'/>
        );
    }
}
export default AboutScreen;