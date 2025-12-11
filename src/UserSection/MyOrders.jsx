import React, { useContext, useEffect, useState } from "react";
import instance from "../Axios/instance";
import { AuthContext } from "../Context/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(user.email);
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
  console.log("User Orders:", orders);
  return (
    <div className="min-h-screen flex  justify-center  px-4">
      <div className="w-full   rounded-lg shadow-md p-6 animate__animated animate__fadeInDown">
        <h2 className="text-2xl font-semibold text-center mb-6 ">My Orders</h2>
        <div className="overflow-x-auto">
          <table className="table ">
            <thead>
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
                  <tr key={order._id} className=" hover:scale-[1.01]">
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
                        {new Date(order.createdAt).toLocaleString()}
                      </span>
                    </td>
                    <td>
                      <span className="font-bold text-purple-600 ">
                        {order.price}
                      </span>
                    </td>
                    <td>
                      {order.orderStatus === "OK" ? (
                        <span className="text-green-500 font-bold">OK</span>
                      ) : (
                        <span className="text-red-500 font-bold">Pending</span>
                      )}
                    </td>
                    <td>
                      {order.paymentStatus === "paid" ? (
                        <span className="text-green-500 font-bold">Paid</span>
                      ) : (
                        <span className="text-red-500 font-bold">Unpaid</span>
                      )}
                    </td>
                    <td>
                      {order.orderStatus === "pending" ? (
                        <button
                          className="btn btn-ghost"
                          onClick={() => {
                            instance
                              .delete(`/order/${order._id}`)
                              .then((res) => {
                                if (res.data.deletedCount) {
                                  setOrders((prev) =>
                                    prev.filter((o) => o._id !== order._id)
                                  );
                                }
                              })
                              .catch((err) => {
                                console.error("Delete failed", err);
                              });
                          }}
                        >
                          Cancel
                        </button>
                      ) : (
                        ""
                      )}
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
