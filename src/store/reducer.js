
import {
  ORDER_BOOK,
  LIVE_ORDERS,
  LIVE_TRADES,
  CLEAR,
} from './actionTypes'


const initialState = {
  live_orders:[],
  live_trades:[],
  order_book : {},
};


const websocketReducer = (state =initialState, action) => {


  switch (action.type){

    case ORDER_BOOK:
      if(action.payload.asks || action.payload.bids){
     let asks=action.payload.asks.sort((a,b)=>{return b[0]-a[0]}).slice(88,100)
     let bids=action.payload.bids.sort((a,b)=>{return b[0]-a[0]}).slice(0,12);
      return {...state,order_book:{bids,asks}}
    }return{...state}
    
    case LIVE_TRADES:
      let tradesData = [];
      tradesData=[action.payload,...state.live_trades]
      if(tradesData.length>10) tradesData.pop();
    return {...state,live_trades:tradesData}
    
    case LIVE_ORDERS:
      let ordersData = [];
      ordersData=[action.payload,...state.live_orders]
      if(ordersData.length>27) ordersData.pop();
      return {...state,live_orders:ordersData};
    case CLEAR:
      return {initialState}

    default:
      return state
  }


};

export default websocketReducer