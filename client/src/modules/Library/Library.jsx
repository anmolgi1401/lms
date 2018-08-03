import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { LibraryRoutes } from '../../Route/Route';
import Footer from '../Component/Footer/Footer';
import Menubar from './Components/MenuBar/Menubar';


class Library extends Component{

    state = {

    } 

    render(){
        console.log(this.props)
        return(
            <div>
                <p>Library</p>
                <Menubar/>
                 <div>
                    <Switch>
                        {LibraryRoutes.map((item,key)=>{
                            return(
                                <Route path={item.path} component={item.component} />

                            )
                        })}
                    </Switch>
                    
                </div>
                <Footer />
            </div>
        )
    }
}   

export default withRouter(Library);