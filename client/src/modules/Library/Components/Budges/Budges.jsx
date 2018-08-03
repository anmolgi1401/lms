import React,{Component} from 'react';

class Budges extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Budges;