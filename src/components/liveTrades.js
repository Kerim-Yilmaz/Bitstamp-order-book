import moment from 'moment'
import { useEffect } from 'react'
import { Card, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import {liveTrades,} from '../store/actions'

const LiveTrades = () => {
    const liveTrade = useSelector(state=> state.webSocketData.live_trades)
    const dispatch = useDispatch()

    useEffect(() => {

    dispatch(liveTrades());
    
    }, [dispatch])

    return (
        <>
        <Col md={12}>
    
         <Card>
            <Card.Header>
                <Card.Title>
                    Gerçekleşen İşlemler
                </Card.Title>
            </Card.Header>
           <Table striped size='sm' responsive hover >
                <thead>
                    <tr>
                        <th>İşlem Tipi</th>
                        <th>Fiyat(USD)</th>
                        <th>Miktar(BTC)</th>
                        <th>İşlem Saati</th>
                    </tr>
                </thead>
                <tbody> {
                   liveTrade? liveTrade.map(res => {
                       const{price,amount,id,timestamp,type}=res
                        return (
                            <>
                            {price ? 
                                <tr key={id}>
                                    <td style={type?{color:'red'}:{color:'green'}}>{type?'Sell(BTC)':'Buy(BTC)'}</td>
                                    <td style={type?{color:'red'}:{color:'green'}}>{price}</td>
                                    <td>{amount}</td>
                                    <td>{moment(parseInt(timestamp)).format('hh:mm:ss')}</td>
                                    
                                </tr>
                                :null}
                            </>
                        )
                    }):'Yükleniyor'
                } 
                </tbody>
            </Table>
            </Card>
        </Col>
        </>
    )
}

export default LiveTrades
