import { FETCH_USER } from '../Action/types'; 

export default ( state = null, action )=>{
    switch(action.type){

       case FETCH_USER :
           return  action.payload || false;
      
       default:
           return state;
    }
       
}   