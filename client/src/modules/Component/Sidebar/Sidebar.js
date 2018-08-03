import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { ErpRoutes } from '../../../Route/Route';

class Sidebar extends Component{
    render(){
        return(
            <div>
                <ul>
                    {ErpRoutes.map((value,key)=>{
                        return(
                            <li key={key}> <Link to={value.path}> {value.label} </Link></li>

                        )
                    })}
                </ul>                
            </div>
        )
    }
    
}

export default Sidebar;