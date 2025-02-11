import React, { useState, useEffect } from 'react'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'

const WebsiteManager = () => {
  const [websites, setWebsites] = useState([])
  const [newWebsite, setNewWebsite] = useState({
    name: '',
    domain: '',
    template: ''
  })

  useEffect(() => {
    // Fetch websites from backend
    const fetchWebsites = async () => {
      // Implement API call
    }
    fetchWebsites()
  }, [])

  const handleCreateWebsite = async (e) => {
    e.preventDefault()
    // Implement website creation logic
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Website Management</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Create New Website</h2>
          <form onSubmit={handleCreateWebsite} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Website Name" 
              value={newWebsite.name}
              onChange={(e) => setNewWebsite({...newWebsite, name: e.target.value})}
              className="bg-gray-700 p-2 rounded"
            />
            <input 
              type="text" 
              placeholder="Domain" 
              value={newWebsite.domain}
              onChange={(e) => setNewWebsite({...newWebsite, domain: e.target.value})}
              className="bg-gray-700 p-2 rounded"
            />
            <select 
              value={newWebsite.template}
              onChange={(e) => setNewWebsite({...newWebsite, template: e.target.value})}
              className="bg-gray-700 p-2 rounded"
            >
              <option value="">Select Template</option>
              <option value="portfolio">Portfolio</option>
              <option value="ecommerce">E-commerce</option>
              <option value="blog">Blog</option>
            </select>
            <button 
              type="submit" 
              className="bg-primary text-white p-2 rounded flex items-center justify-center"
            >
              <FaPlus className="mr-2" /> Create Website
            </button>
          </form>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Websites</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Domain</th>
                <th className="p-3 text-left">Template</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {websites.map((website) => (
                <tr key={website.id} className="border-b border-gray-700">
                  <td className="p-3">{website.name}</td>
                  <td className="p-3">{website.domain}</td>
                  <td className="p-3">{website.template}</td>
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

export default WebsiteManager
