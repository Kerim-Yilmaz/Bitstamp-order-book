import moment from "moment";
import {useEffect} from "react";
import {Card, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {liveOrder} from "../store/actions";


const LiveOrders = () => {
    const dispatch = useDispatch()
    const orderData = useSelector(state => state.webSocketData.live_orders)
    useEffect(() => {
        dispatch(liveOrder());

    }, [dispatch])
    return (
        <>
        <Card>
            <Card.Header>
                <Card.Title as='h5'>
                    Piyasa Alım-Satımları
                </Card.Title>
            </Card.Header>
            <Table  striped size='sm'   hover >
                <thead>
                    <tr>
                        <th>Fiyat(USD)</th>
                        <th>Miktar(BTC)</th>
                        <th>İşlem Saati</th>
                    </tr>
                </thead>
                <tbody> {
                    orderData.map(res => {
                        const {amount,price,order_type,timestamp,id} = res
                        return (
                            <>
                                <tr key={id}>
                                    <td style={order_type?{color:'red'}:{color:'green'}}>{price}</td>
                                    <td>{amount}</td>
                                    <td>{moment(timestamp).format('hh:mm:ss')}</td>
                                </tr>
                            </>
                        )
                    })
                } 
                </tbody>
            </Table>
        </Card>
        </>

    )
}

export default LiveOrders

/* <div>
            
            {orderData ? orderData.map(res=> {
                return(
                    <>
                    <div key={res.id}>
                    price:{res.price} amount:{res.amount} tipi:{res.order_type ? `sell`:'buy'} {moment(res.date).format('DD-MM-YYYY hh:mm:ss')}
                    </div>
                    </>
                )
            }):null}
        </div>*/
