import { useEffect } from "react";
import {Col, Container, Row} from "react-bootstrap";
import { useDispatch } from "react-redux";
import AdvancedChart from "./components/advancedChart";
import LiveOrders from "./components/liveOrders";
import LiveTrades from "./components/liveTrades";
import OrderBook from "./components/OrderBook";
import { clearStore } from "./store/actions";


function App() {

    const dispatch = useDispatch()


    useEffect(() => {
        
        return () => {
            dispatch(clearStore());
        }
    }, [dispatch])


    return (

        <>
            <Container fluid >
                <Row>
                    <Col md={3}>
                        <OrderBook/>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <AdvancedChart/>
                        </Row>
                        <Row>
                            <LiveTrades/> 
                        </Row>
                    </Col>
                    <Col md={3}>
                       <LiveOrders/> 
                       
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
