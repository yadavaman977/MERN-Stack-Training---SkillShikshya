import { useEffect, useState } from "react";
import UsersModal from "./UsersModal";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const GetUsers = () => {
  // Store users
  const [users, setUsers] = useState([]);

  // Search text
  const [search, setSearch] = useState("");

  // Modal
  const [showModal, setShowModal] = useState(false);

  // User to edit
  const [editUser, setEditUser] = useState(null);

  // Run when page loads
  useEffect(() => {
    const controller = new AbortController();

    fetch(API_URL, { signal: controller.signal })
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch users", error);
        }
      });

    return () => controller.abort();
  }, []);

  // Search users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  // CREATE
  const addUser = async (newUser) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    setUsers([...users, data]);
    setShowModal(false);
  };

  // UPDATE
  const updateUser = async (updatedUser) => {
    const response = await fetch(`${API_URL}/${updatedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    const data = await response.json();

    setUsers(users.map((user) => (user.id === data.id ? data : user)));

    setShowModal(false);
    setEditUser(null);
  };

  // DELETE
  const deleteUser = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    setUsers(users.filter((user) => user.id !== id));
  };

  // Open Add
  const openAddModal = () => {
    setEditUser(null);
    setShowModal(true);
  };

  // Open Edit
  const openEditModal = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">User Management</h1>

        <button
          onClick={openAddModal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-64 mb-4"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">City</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Website</th>
              <th className="border p-2">Company</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.username}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.address.city}</td>
                <td className="border p-2">{user.phone}</td>
                <td className="border p-2">{user.website}</td>
                <td className="border p-2">{user.company.name}</td>

                <td className="border p-2">
                  {/* Edit */}
                  <button
                    onClick={() => openEditModal(user)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <UsersModal
          editUser={editUser}
          onAdd={addUser}
          onUpdate={updateUser}
          onClose={() => {
            setShowModal(false);
            setEditUser(null);
          }}
        />
      )}
    </div>
  );
};

export default GetUsers;
