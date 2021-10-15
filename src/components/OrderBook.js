import {useEffect} from "react"
import {Card, Table} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {orderBook} from "../store/actions"


const OrderBook = () => {
    const orderbookData = useSelector(state => state.webSocketData.order_book)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(orderBook())
    }, [dispatch])
    return (
        <>
            <Card>
                <Card.Header>
                    <Card.Title>
                        Satış Emirleri
                    </Card.Title>
                </Card.Header>
                   
                     <Table size='sm' responsive hover striped>
                         <thead>
                             <tr>
                                 <th>Fiyat(USD)</th>
                                 <th>Miktar(BTC)</th>
                                 <th>Toplam</th>
                             </tr>
                         </thead>
                         <tbody> {' '} {
                             orderbookData.asks ? orderbookData.asks.map((a, b) => {
                                 
                                 return (
                                        <tr key ={b[0]}>
                                             <td style={{color: 'red'}}>{a[0]}</td>
                                             <td>{a[1] }</td>
                                             <td>{a[0] * a[1]}</td>
                                         </tr>
                                 )
                             }) : null
                         } </tbody>
                     </Table>
                     
            </Card>
            <Card>
                <Card.Header>
                    <Card.Title>
                        Alış Emirleri
                    </Card.Title>
                </Card.Header>
                    <Table responsive striped size='sm' hover>
                        <thead>
                            <tr>
                                <th>Fiyat(USD)</th>
                                <th>Miktar(BTC)</th>
                                <th>Toplam</th>
                            </tr>
                        </thead>
                        <tbody> {' '}{
                            orderbookData.bids ? orderbookData.bids.map((a, b) => {
                                return (
                                        <tr key={b[0]}>
                                            <td key={b[0]} style={{color: 'green'}}>{a[0]}</td>
                                            <td>{a[1]}</td>
                                            <td>{a[0]*a[1]}</td>
                                        </tr>
                                )
                            }) : null
                        } 
                        </tbody>
                    </Table>
            </Card>


        </>

    )
}

export default OrderBook
