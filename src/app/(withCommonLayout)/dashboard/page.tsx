import React from 'react';

const DashboardPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
          <nav className="space-y-4">
            <a href="#profile" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
              Profile
            </a>
            <a href="#settings" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
              Settings
            </a>
            <a href="#analytics" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
              Analytics
            </a>
            <a href="#support" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
              Support
            </a>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Welcome, User!</h1>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Logout
            </button>
          </div>
  
          {/* Profile Card */}
          <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Profile Overview</h2>
            <div className="flex items-center space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"
                alt="User Avatar"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb">Dipongkar Roy</h3>
                <p className="text-gray-600">developer@gmail.com</p>
              </div>
            </div>
          </section>
  
          {/* Stats Section */}
          <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Total Projects</h3>
              <p className="text-3xl font-bold text-blue-500 mt-2">8</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Tasks Completed</h3>
              <p className="text-3xl font-bold text-green-500 mt-2">24</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Messages</h3>
              <p className="text-3xl font-bold text-yellow-500 mt-2">12</p>
            </div>
          </section>
        </main>
      </div>
    );
};

export default DashboardPage;