

//import { ADD_COUNTING, MIN_COUNTING } from '../actions/counting';

export function calculateNum(state = { data: 0 }, action) { 
    console.log('calculateNum action.data = ', action.data)
    console.log('calculateNum action.type = ', action.type)
  switch (action.type) {
    case 'ADD_COUNTING':
      console.log('CASE ADD_COUNTING');
      return Object.assign({}, state, {
        data: action.data +1,
      });
    case 'MIN_COUNTING':
      console.log('CASE MIN_COUNTING');
      return Object.assign({}, state, {
        data: action.data - 1,
      });
    case 'MUL_COUNTING':
      console.log('CASE MUL_COUNTING');
      return Object.assign({}, state, {
        data: action.data * 5,
      });
    default:
      return state;
  }
}


// export function countingMin(state = { data: 0 }, action) { 
//     console.log('countingMin action.data : ', action.data)
//     switch (action.type) {
//       case 'MIN_COUNTING':
//         console.log('CASE MIN_COUNTING');
//         return Object.assign({}, state, {
//           data: action.data - 1,
//         });
//       default:
//         return state;
//     }
//   }