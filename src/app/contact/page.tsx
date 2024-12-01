import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="container max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur-md shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Contact Us</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="inputBox">
              <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                First Name
              </label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                required 
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div className="inputBox">
              <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                Last Name
              </label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                required 
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="inputBox">
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/70"
              placeholder="Enter your email address"
            />
          </div>

          {/* Mobile */}
          <div className="inputBox">
            <label htmlFor="mobile" className="block text-sm font-medium text-white mb-2">
              Mobile
            </label>
            <input 
              type="tel" 
              id="mobile" 
              name="mobile" 
              required 
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/70"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Message */}
          <div className="inputBox">
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Type Your Message Here
            </label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows="4" 
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/70"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
