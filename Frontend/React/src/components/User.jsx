import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../api/userapi";
import UserModal from "./Modals/UserModal";
import { ThemeContext } from "./context/ThemeContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const User = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const {
    data: users = [],
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Users fetched successfully!");
    }

    if (isError) {
      toast.error("Failed to fetch users");
    }
  }, [isSuccess, isError]);

  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: (newUser) => {
      queryClient.setQueryData(["users"], (oldUsers = []) => [
        { ...newUser, id: newUser.id || Date.now() },
        ...oldUsers,
      ]);
      toast.success("User added successfully");
      closeModal();
    },
    onError: () => toast.error("Failed to add user"),
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["users"], (oldUsers = []) =>
        oldUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user,
        ),
      );
      toast.success("User updated successfully");
      closeModal();
    },
    onError: () => toast.error("Failed to update user"),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (deletedId) => {
      queryClient.setQueryData(["users"], (oldUsers = []) =>
        oldUsers.filter((user) => user.id !== deletedId),
      );
      toast.success("User deleted successfully");
    },
    onError: () => toast.error("Failed to delete user"),
  });

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [users, search],
  );

  function closeModal() {
    setShowModal(false);
    setSelectedUser(null);
  }

  function handleSave(user) {
    if (selectedUser) {
      updateMutation.mutate(user);
    } else {
      addMutation.mutate(user);
    }
  }

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      } min-h-screen px-5 pt-30`}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        <input
          type="search"
          placeholder="Search users..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="rounded border px-3 py-2 text-black"
        />
        <button
          onClick={() => setShowModal(true)}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Add User
        </button>
      </div>

      {isLoading && <p>Loading users...</p>}
      {isError && <p className="text-red-500">Failed to fetch users.</p>}

      {!isLoading && !isError && (
        <>
          <div
            className={`overflow-x-auto rounded-md border shadow-sm ${
              isDark
                ? "border-slate-700 bg-slate-950 text-white"
                : "border-slate-200 bg-white text-black"
            }`}
          >
            <Table className={isDark ? "bg-slate-950 text-white" : "bg-white text-black"}>
              <TableHeader className={isDark ? "bg-slate-900" : "bg-slate-50"}>
                <TableRow className={isDark ? "border-slate-700" : "border-slate-200"}>
                  <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>ID</TableHead>
                  <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Name</TableHead>
                  <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Username</TableHead>
                  <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Email</TableHead>
                  <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>City</TableHead>
                  <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Phone</TableHead>
                  <TableHead className={isDark ? "text-slate-200" : "text-slate-700"}>Company</TableHead>
                  <TableHead className={isDark ? "text-right text-slate-200" : "text-right text-slate-700"}>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    className={isDark ? "border-slate-700 hover:bg-slate-900" : "border-slate-200 hover:bg-slate-100"}
                  >
                    <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{user.id}</TableCell>
                    <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{user.name}</TableCell>
                    <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{user.username}</TableCell>
                    <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{user.email}</TableCell>
                    <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{user.address?.city}</TableCell>
                    <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{user.phone}</TableCell>
                    <TableCell className={isDark ? "text-slate-200" : "text-slate-700"}>{user.company?.name}</TableCell>
                    <TableCell className="text-right">
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setShowModal(true);
                        }}
                        className={`mr-2 rounded bg-yellow-500 px-3 py-2 ${isDark ? "text-black" : "text-black"}`}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteMutation.mutate(user.id)}
                        className="rounded bg-red-500 px-3 py-2 text-white"
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}

      {showModal && (
        <UserModal
          editUser={selectedUser}
          onAdd={handleSave}
          onUpdate={handleSave}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default User;
