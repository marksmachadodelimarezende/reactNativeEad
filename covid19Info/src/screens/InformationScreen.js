import React, { Component} from 'react';
import IndexApp from '../components/IndexApp'

class InformationScreen extends Component {
    render(){
        return(
            <IndexApp componentView='information' titleView='Informações'/>
        );
    }
}
export default InformationScreen;