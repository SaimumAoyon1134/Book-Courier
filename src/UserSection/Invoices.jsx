import React, { useContext, useEffect, useState } from "react";
import instance from "../Axios/instance";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Shared/Loading";

const Invoices = () => {
  const { user } = useContext(AuthContext);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading]=useState(true)

  useEffect(() => {
    if (!user?.email) return;

    instance
      .get(`/myorders?email=${user.email}`)
      .then((res) => {
        // only show paid orders
        const paidOrders = res.data.filter(
          (order) => order.paymentStatus === "paid"
        );
        setInvoices(paidOrders);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));

  }, [user?.email]);
  if (loading) {
    return (
      <Loading/>
    );
  }


  return (
    <div className="min-h-screen px-5 mb:px-10  flex justify-center ">
      <div className="w-full   py-5 rounded-xl shadow-lg animate__animated animate__fadeInUp">
        <h1 className="text-2xl font-bold text-center mb-6 ">
          Payment Invoices
        </h1>

        <div className="overflow-x-auto">
          <table className="table w-full ">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th>#</th>
                <th>Payment ID</th>
                <th>Book Name</th>
                <th>Amount (BDT)</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((inv, index) => (
                <tr key={inv._id} className="hover:bg-purple-50">
                  <td className="font-bold text-purple-600">{index + 1}</td>
                  <td className="font-semibold">{inv.paymentId}</td>
                  <td  className="font-semibold">{inv.bookName}</td>
                  <td className="font-semibold text-green-600">
                    {inv.price}
                  </td>
                  <td className="font-semibold">
                    {new Date(inv.createdAt).toLocaleDateString()} –
                    {new Date(inv.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {invoices.length === 0 && (
            <p className="text-center  mt-6">
              No payments found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invoices;