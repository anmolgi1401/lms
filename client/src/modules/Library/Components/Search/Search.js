import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../../Action';

class Search extends Component{

    state = {
        search : ""
    }


    handleChange = (e) =>{
        this.setState({
            search: e.target.value
        });

        const data = this.state.search;
        this.props.search_result(data);
      

    }

    render(){
        return(
            <div>
                // <input type="text" onChange={this.handleChange} name="search" value={this.state.search} />            
            </div>
        )
    }
    
}


export default connect(null,Actions)(Search);