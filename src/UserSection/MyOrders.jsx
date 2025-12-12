import React, { useContext, useEffect, useState } from "react";
import instance from "../Axios/instance";
import { AuthContext } from "../Context/AuthContext";
import CancelIcon from "@mui/icons-material/Cancel";
const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    instance
      .get(`/myorders?email=${user.email}`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, [user.email]);
  const handlePayment = async (order) => {
    const res = await instance.post("/create-checkout-session", order);

    window.location.assign(res.data.url);
  };
  return (
    <div className="min-h-screen flex  justify-center  px-4">
      <div className="w-full   rounded-lg shadow-md p-6 animate__animated animate__fadeInDown">
        <h2 className="text-2xl font-semibold text-center mb-6 ">My Orders</h2>
        <div className="overflow-x-auto">
          <table className="table ">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th>Serial No.</th>
                <th> Book Name</th>
                <th>Address</th>
                <th>Order Date</th>
                <th>Price</th>
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr key={order._id} className="opacity-90 hover:opacity-100">
                    <td>
                      <span className="text-purple-600 font-bold">
                        {index + 1}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar"></div>
                        <div>
                          <div className="font-bold ">{order.bookName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="font-bold text-amber-600 ">
                        {order.address}
                      </span>
                    </td>
                    <td>
                      <span className="font-bold text-green-600">
                        {new Date(order.createdAt).toLocaleDateString()} –
                        {new Date(order.createdAt).toLocaleTimeString()}
                      </span>
                    </td>
                    <td>
                      <span className="font-bold text-purple-600 ">
                        {order.price}
                      </span>
                    </td>
                    <td>
                      {order.orderStatus === "delivered" ? (
                        <span className="text-green-500 font-bold">
                          Delivered
                        </span>
                      ) : order.orderStatus === "shipped" ? (
                        <span className="text-yellow-400 font-bold">
                          Shipped
                        </span>
                      ) : order.orderStatus === "pending" ? (
                        <span className="text-purple-400 font-bold">
                          Pending
                        </span>
                      ) : (
                        <span className="text-red-400 font-bold">Canceled</span>
                      )}
                    </td>
                    <td>
                      {order.paymentStatus === "paid" ? (
                        <span className="text-green-700 font-bold">Paid</span>
                      ) : (
                        <button
                          className={` text-black  bg-amber-300 px-1 rounded ${
                            order.orderStatus == "canceled"
                              ? "opacity-40 cursor-not-allowed"
                              : "hover:bg-red-400 hover:text-white"
                          }`}
                          onClick={() => {
                            handlePayment(order);
                          }}
                        >
                          Pay Now
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className={` ${
                          order.orderStatus !== "pending"
                            ? "opacity-40 cursor-not-allowed"
                            : "hover:text-red-500"
                        }`}
                        disabled={order.orderStatus !== "pending"}
                        onClick={() => {
                          if (order.orderStatus !== "pending") return;

                          const data = { orderStatus: "canceled" };

                          instance
                            .patch(`/order/${order._id}`, data)
                            .then((res) => {
                              if (res.data.modifiedCount) {
                                setOrders((prev) =>
                                  prev.map((o) =>
                                    o._id === order._id
                                      ? { ...o, orderStatus: "canceled" }
                                      : o
                                  )
                                );
                              }
                            })
                            .catch((err) => {
                              console.error("Cancel failed", err);
                            });
                        }}
                      >
                        <CancelIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
