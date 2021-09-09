import { Card } from 'react-bootstrap';
import TradingViewWidget from 'react-tradingview-widget';

const AdvancedChart = () => {

    return (
        <Card border='light' style={{height:'550px'}}>
        
        <TradingViewWidget 
        
        symbol="BITSTAMP:BTCUSD"
        theme='light'
        locale="tr"
        autosize
      
       />
       
       </Card>
    )
}

export default AdvancedChart
