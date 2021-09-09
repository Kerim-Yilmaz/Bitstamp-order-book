import { Card } from 'react-bootstrap';
import TradingViewWidget from 'react-tradingview-widget';

const AdvancedChart = () => {

    return (
        <Card style={{height:'550px'}}>
        
        <TradingViewWidget 
        
        symbol="BITSTAMP:BTCUSD"
        theme='light'
        locale="fr"
        style={{height:75}}
        autosize
      
       />
       
       </Card>
    )
}

export default AdvancedChart
