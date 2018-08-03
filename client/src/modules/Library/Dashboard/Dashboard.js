import React,{ Component } from 'react';
import Search from '../Components/Search/Search';
import BookCard from '../Components/BookCard/BookCard';
import { connect } from 'react-redux';
import * as Actions from '../../../Action';
import { Route } from 'react-router-dom';
import MenuBar from '../Components/MenuBar/Menubar';
import Budges from '../Components/Budges/Budges';
import FilterMenu from '../Components/FilterMenu/FilterMenu';

class Dashboard extends Component{

    state = {
        filter : []
    }

    renderContent = () => {

        switch(this.props){
            case null:
                return ;
            case false : 
                return ;
            default :
                return 
        }
    }

    componentDidUpdate(prevprop){

    }

    updateFilterState = (type) =>{
        var oldState = this.state.filter;
        var newState = [...oldState,type];
        this.setState({
            filter:newState
        })
    }

    changeFilter = (key) => {
        var filter=this.state.filter;
        filter.slice(key,key+1);
        this.setState({
            filter: filter
        })
    }

    render(){
        return(
            <div>
                <Search />
                <FilterMenu click={this.updateFilterState} />
                {this.state.filter.map((filter,key)=>{
                    return(
                    <Budges type={filter} key={key} onClick={this.changeFilter(key)} />

                    )
                })}
               
            </div>
        )
    }
    
}

function mapStateToProps ( state ){
    return {
        search : state.search
    }
}

export default connect(mapStateToProps,Actions)(Dashboard);
