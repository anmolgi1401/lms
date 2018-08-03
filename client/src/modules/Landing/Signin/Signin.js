import React, {Component} from 'react';
import Erp from '../../Erp';
import { withRouter } from 'react-router-dom';
class Signin extends Component{
    render(){
        return( 
            <div>
                <p>Signin</p>
                <Erp/>       
            </div>
        )
    }
}


export default withRouter(Signin);