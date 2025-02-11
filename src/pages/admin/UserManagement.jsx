import React, { useState, useEffect } from 'react'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    role: 'viewer'
  })

  useEffect(() => {
    // Fetch users from backend
    const fetchUsers = async () => {
      // Implement API call
    }
    fetchUsers()
  }, [])

  const handleCreateUser = async (e) => {
    e.preventDefault()
    // Implement user creation logic
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">User Management</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Create New User</h2>
          <form onSubmit={handleCreateUser} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Username" 
              value={newUser.username}
              onChange={(e) => setNewUser({...newUser, username: e.target.value})}
              className="bg-gray-700 p-2 rounded"
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              className="bg-gray-700 p-2 rounded"
            />
            <select 
              value={newUser.role}
              onChange={(e) => setNewUser({...newUser, role: e.target.value})}
              className="bg-gray-700 p-2 rounded"
            >
              <option value="viewer">Viewer</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
            <button 
              type="submit" 
              className="bg-primary text-white p-2 rounded flex items-center justify-center"
            >
              <FaPlus className="mr-2" /> Create User
            </button>
          </form>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-700">
                  <td className="p-3">{user.username}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3 flex space-x-2">
                    <button className="text-blue-500"><FaEdit /></button>
                    <button className="text-red-500"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
