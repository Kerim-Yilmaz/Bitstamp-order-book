
import config from '../config'

import {LIVE_ORDERS, LIVE_TRADES, ORDER_BOOK,CLEAR} from './actionTypes'




 const liveTrades= ()=> {
  return  dispatch => {
    try {
      let ws  = new WebSocket(config.websocket_url)
      var subscribeMsg = {
        "event": "bts:subscribe",
        "data": {
            "channel": "live_trades_btcusd"
        }
    };

      ws.onopen = function() {
        ws.send(JSON.stringify(subscribeMsg));
    };

        ws.onmessage = function(e) {
          let response = JSON.parse(e.data);
            return dispatch({type:LIVE_TRADES,payload:response.data})
      };

      ws.onclose = function() {
        //console.log('Websocket connection closed');
    };
    
      } catch (e) {
        console.log(e)
      }
   }

  }

  const orderBook = ()=>   {
   return dispatch => {
  try {
    let ws  = new WebSocket(config.websocket_url)
    var subscribeMsg = {
      "event": "bts:subscribe",
      "data": {
          "channel": "order_book_btcusd"
      }
  };

    ws.onopen = function() {
      ws.send(JSON.stringify(subscribeMsg));
  };

      ws.onmessage = function(e) {
        let response = JSON.parse(e.data);
          return dispatch({type:ORDER_BOOK,payload:response.data})
    };

    ws.onclose = function() {
      //console.log('Websocket connection closed');
  };
  } catch (e) {
    console.log(e)
  }

  }}
   
  const liveOrder = ()=>   {
    return dispatch => {
      try {
        let ws  = new WebSocket(config.websocket_url)
     var subscribeMsg = {
       "event": "bts:subscribe",
       "data": {
           "channel": "live_orders_btcusd"
       }
   };
 
     ws.onopen = function() {
       ws.send(JSON.stringify(subscribeMsg));
   };
 
       ws.onmessage = function(e) {
         let response = JSON.parse(e.data);
           return dispatch({type:LIVE_ORDERS,payload:response.data})
     };

     ws.onclose = function() {
      //console.log('Websocket connection closed');
  };
 
   

      } catch (e) {
        console.log(e)
      }
     }}


     const clearStore=()=> {
       return(dispatch=>{
         dispatch({type:CLEAR,payload:null})
       })

     }
    

  


export {liveTrades,orderBook,liveOrder,clearStore}

/*


var subscribeMsg = {
    "event": "bts:subscribe",
    "data": {
        "channel": "live_trades_btcusd"
    }
};
ws = new WebSocket("wss://ws.bitstamp.net");
ws.onopen = function() {
    ws.send(JSON.stringify(subscribeMsg));
};


ws.onmessage = function(evt) {
    response = JSON.parse(evt.data);
    switch (response.event) {
        case 'trade': {
            serializeTrade(response.data);
            break;
        }
    }

};
ws.onclose = function() {
    console.log('Websocket connection closed');
};




*/