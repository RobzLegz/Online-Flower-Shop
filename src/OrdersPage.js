import React, { useEffect, useState } from 'react';
import EachOrder from './EachOrder';
import db from './firebase';
import "./OrdersPage.css";

const OrdersPage = () => {

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        db.collection("orders").orderBy("orderDate", "asc").onSnapshot((snapshot) => (
            setAllOrders(snapshot.docs.map((doc) => doc.data()))
        ))
    }, []);

    return (
        <div className="ordersPage">
            <div className="allOrderContainer">
                {allOrders.map((order) => (
                    <EachOrder
                        key={order.id} 
                        id={order.id} 
                        address={order.address} 
                        email={order.email} 
                        name={order.name}
                        phone={order.number}
                        actualOrder={order.order[0]?.title}
                        orderDate={order.orderDate}
                        orderValue={order.orderValue}
                    />
                ))}
            </div>
        </div>
    )
}

export default OrdersPage
