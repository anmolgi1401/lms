import React from 'react';
import { AppRoutes } from '../../../Route/Route';
import { Link } from 'react-router-dom';
const header = () => {
    return (
        <div>
            <ul>
                {AppRoutes.map((value,key)=>{
                    return(
                        <li key = {key}><Link to={value.path} >{value.label}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}
export default header