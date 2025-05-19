import { useState } from "react";
import { USERS } from "../data/users";
import { Input } from "../components/ui/input";

export default function DataTable() {
  const [search, setSearch] = useState("");
  const filteredUsers = USERS.filter(user =>
    `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <Input
        placeholder="Search by name, email, or role"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />

      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}