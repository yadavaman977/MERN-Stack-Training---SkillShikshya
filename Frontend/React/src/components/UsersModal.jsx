
import { useState } from "react";

const UsersModal = ({
  editUser,
  onAdd,
  onUpdate,
  onClose,
}) => {
  // Form data
  const [name, setName] = useState(editUser?.name || "");
  const [username, setUsername] = useState(editUser?.username || "");
  const [email, setEmail] = useState(editUser?.email || "");
  const [city, setCity] = useState(editUser?.address?.city || "");
  const [phone, setPhone] = useState(editUser?.phone || "");
  const [website, setWebsite] = useState(editUser?.website || "");
  const [company, setCompany] = useState(
    editUser?.company?.name || ""
  );

  // Submit form
  const handleSubmit = (e) => {
    // Stop page refresh
    e.preventDefault();

    // Create user object
    const userData = {
      name,
      username,
      email,
      address: {
        city,
      },
      phone,
      website,
      company: {
        name: company,
      },
    };

    // If editUser exists → UPDATE
    if (editUser) {
      onUpdate({
        ...userData,
        id: editUser.id,
      });
    } else {
      // Otherwise → CREATE
      onAdd(userData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      {/* Modal */}
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">

        {/* Title */}
        <h2 className="text-xl font-bold mb-4">
          {editUser ? "Edit User" : "Add User"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            minLength="2"
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            minLength="3"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* City */}
          <input
            type="text"
            placeholder="City"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* Website */}
          <input
            type="url"
            placeholder="https://example.com"
            value={website}
            required
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* Company */}
          <input
            type="text"
            placeholder="Company Name"
            value={company}
            required
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {/* Buttons */}
          <div className="flex gap-2 pt-2">

            {/* Add / Update */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {editUser ? "Update" : "Add"}
            </button>

            {/* Cancel */}
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default UsersModal;
