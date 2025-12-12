import React, { useEffect, useState, useContext } from "react";
import instance from "../Axios/instance";
import { AuthContext } from "../Context/AuthContext";
import CancelIcon from "@mui/icons-material/Cancel";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    instance
      .get(`/orders`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error fetching librarian orders:", err));
  }, [user?.email]);

  const handleStatusChange = (orderId, newStatus) => {
    instance
      .patch(`/order/${orderId}`, { orderStatus: newStatus })
      .then((res) => {
        if (res.data.modifiedCount) {
          setOrders((prev) =>
            prev.map((o) =>
              o._id === orderId ? { ...o, orderStatus: newStatus } : o
            )
          );
        }
      })
      .catch((err) => console.error("Status update failed:", err));
  };


  return (
    <div className="min-h-screen px-4 flex justify-center">
      <div className="w-full shadow-md rounded-lg p-6 ">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Orders for Your Books
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>User Email</th>
                <th>Address</th>
                <th>Order Date</th>
                <th>Price</th>
                <th>Payment Status</th>
                <th>Order Status</th>
                <th>Update Status</th>
               
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="hover:opacity-90">
                  <td>{index + 1}</td>

                  <td className="font-bold">{order.bookName}</td>

                  <td>{order.userEmail}</td>

                  <td>{order.address}</td>

                  <td className="text-green-600 font-semibold">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>

                  <td className="text-purple-600 font-semibold">
                    {order.price} BDT
                  </td>
                      <td>
                    <span
                      className={`font-bold ${
                        order.paymentStatus?.toLowerCase() === "paid"
                          ? "text-orange-500"
                          : "text-blue-500"
                      }`}
                    >
                      {order.paymentStatus
                        ? order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)
                        : ""}
                    </span>
                  </td> 
                  <td>
                    <span
                      className={`font-bold ${
                        order.orderStatus === "pending"
                          ? "text-orange-500"
                          : order.orderStatus === "shipped"
                          ? "text-blue-500"
                          : order.orderStatus === "delivered"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                    </span>
                  </td>

                  <td>
                    {order.orderStatus !== "canceled" && (
                      <select
                        className="select select-bordered select-sm"
                        value={order.orderStatus}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                      >
                        <option value="pending">Pending</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                      </select>
                    )}
                  </td>

                  
                </tr>
              ))}

              {orders.length === 0 && (
                <tr>
                  <td colSpan={10} className="text-center py-8 text-gray-500">
                    No orders found for your books.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;