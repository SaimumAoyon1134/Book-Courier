import React, { useContext, useEffect, useState } from "react";
import instance from "../Axios/instance";
import Loading from "../Shared/Loading";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { isLoading } = useContext(AuthContext);
  useEffect(() => {
    instance
      .get("/allusers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleMakeLibrarian = (user) => {   
    
    Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  if (result.isConfirmed) {
    instance
      .patch(`/users/${user._id}`, {
        librarian: !user.librarian,
        admin: user.admin,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          const updatedUsers = users.map((u) => {
            if (u._id === user._id) {
              return { ...u, librarian: !u.librarian };
            }
            return u;
          });
          setUsers(updatedUsers);
        }
      })
      .catch((err) => console.log(err));
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
    
  };
    const handleMakeAdmin = (user) => {   
    console.log(user);
    Swal.fire({
  title: "Do you want to save the changes of Admin Role?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  if (result.isConfirmed) {
    instance
      .patch(`/users/${user._id}`, {
        librarian: user.librarian,
        admin: !user.admin,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          const updatedUsers = users.map((u) => {
            if (u._id === user._id) {
              return { ...u, admin: !u.admin };
            }
            return u;
          });
          setUsers(updatedUsers);
        }
      })
      .catch((err) => console.log(err));
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
    
  };
  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen flex  justify-center bg-gray-100 px-4">
      <div className="w-full  bg-white rounded-lg shadow-md p-6 animate__animated animate__fadeInDown">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          All Users
        </h2>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No.</th>
                <th> User Name</th>
                <th>User Email</th>
                <th>Librarian</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-100 hover:scale-[1.01]"
                  >
                    <td>
                      <span className="text-purple-600 font-bold">
                        {index + 1}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold ">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="font-bold text-amber-600 ">
                        {user.email}
                      </span>
                    </td>
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={user.librarian}
                          onClick={() => {
                            handleMakeLibrarian(user);
                          }}
                          readOnly
                        />
                      </label>
                    </td>
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={user.admin}
                          onClick={() => {
                            handleMakeAdmin(user);
                          }}
                          readOnly
                        />
                      </label>
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

export default Users;
