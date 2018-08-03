import { SEARCH_RESULT } from '../Action/types'; 

export default ( state = null, action )=>{
    switch(action.type){

       case SEARCH_RESULT :
           return  action.payload || false;
      
       default:
           return state;
    }       
}   

