import React,{ Component } from 'react';
import { FilterData } from '../../../../data/filterData';

class FilterMenu extends Component {

    state = {};
    
    addState = (value) => {
        this.props.click(value);
    }

    render(){
        return(
            <div>
                   
            </div>
        )
    }
}

export default FilterMenu;