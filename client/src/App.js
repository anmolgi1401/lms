import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Route/Route';
import Header from './modules/Component/Header/Header';

class App extends Component {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            {AppRoutes.map((value,key)=>{
                                return(
                                    <Route exact path={value.path} component={value.component} />
                                )    
                            })}
                        </Switch>
                    </div>
                </BrowserRouter>
                   
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps,null)(App);