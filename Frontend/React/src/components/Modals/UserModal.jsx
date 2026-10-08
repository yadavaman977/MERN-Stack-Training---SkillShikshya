import { useState } from "react";

const UserModal = ({ editUser, onAdd, onUpdate, onClose }) => {
	const [name, setName] = useState(editUser?.name || "");
	const [username, setUsername] = useState(editUser?.username || "");
	const [email, setEmail] = useState(editUser?.email || "");
	const [city, setCity] = useState(editUser?.address?.city || "");
	const [phone, setPhone] = useState(editUser?.phone || "");
	const [website, setWebsite] = useState(editUser?.website || "");
	const [company, setCompany] = useState(editUser?.company?.name || "");

	function handleSubmit(event) {
		event.preventDefault();

		const user = {
			name,
			username,
			email,
			address: { city },
			phone,
			website,
			company: { name: company },
		};

		if (editUser) {
			onUpdate({ ...user, id: editUser.id });
		} else {
			onAdd(user);
		}
	}

	return (
		<div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 p-4">
			<div className="max-h-screen w-96 overflow-y-auto rounded-lg bg-white p-6 text-black shadow-lg">
				<h2 className="mb-4 text-xl font-bold">
					{editUser ? "Edit User" : "Add User"}
				</h2>

				<form onSubmit={handleSubmit} className="space-y-3">
					<input
						type="text"
						placeholder="Name"
						value={name}
						minLength={2}
						required
						onChange={(event) => setName(event.target.value)}
						className="w-full rounded border p-2"
					/>
					<input
						type="text"
						placeholder="Username"
						value={username}
						minLength={3}
						required
						onChange={(event) => setUsername(event.target.value)}
						className="w-full rounded border p-2"
					/>
					<input
						type="email"
						placeholder="Email"
						value={email}
						required
						onChange={(event) => setEmail(event.target.value)}
						className="w-full rounded border p-2"
					/>
					<input
						type="text"
						placeholder="City"
						value={city}
						required
						onChange={(event) => setCity(event.target.value)}
						className="w-full rounded border p-2"
					/>
					<input
						type="text"
						placeholder="Phone"
						value={phone}
						required
						onChange={(event) => setPhone(event.target.value)}
						className="w-full rounded border p-2"
					/>
					<input
						type="url"
						placeholder="https://example.com"
						value={website}
						required
						onChange={(event) => setWebsite(event.target.value)}
						className="w-full rounded border p-2"
					/>
					<input
						type="text"
						placeholder="Company Name"
						value={company}
						required
						onChange={(event) => setCompany(event.target.value)}
						className="w-full rounded border p-2"
					/>

					<div className="flex gap-2 pt-2">
						<button
							type="submit"
							className="rounded bg-blue-500 px-4 py-2 text-white"
						>
							{editUser ? "Update" : "Add"}
						</button>
						<button
							type="button"
							onClick={onClose}
							className="rounded bg-gray-500 px-4 py-2 text-white"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserModal;
