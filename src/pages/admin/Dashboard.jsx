import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/admin/websites" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold mb-4">Websites</h2>
            <p>Manage and monitor your websites</p>
          </Link>
          
          <Link to="/admin/users" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <p>User management and permissions</p>
          </Link>
          
          <Link to="/admin/analytics" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p>View site performance and insights</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
