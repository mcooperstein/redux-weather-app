import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  // console.log('Action received: ', action)
  switch(action.type){
    case FETCH_WEATHER:
      return !action.payload.data ? state :[
        // putting new city at top of list
        action.payload.data,
        ...state
      ];
  }


  return state;
}
