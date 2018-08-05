import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ErpRoutes } from '../Route/Route';
import Sidebar from './Component/Sidebar/Sidebar';
class Erp extends Component {

    render(){
        console.log(this.props)

        
         return (
            
                <div>
                    <Sidebar/>
                       
                            {ErpRoutes.map((value,i)=>{
                                return(
                                    <Route path={value.path} component={value.component}/>
                                )
                            })}
                    
                </div>        
        
        )
    }
}

export default withRouter(Erp);
