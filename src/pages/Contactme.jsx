import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = ({ Mode }) => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceId = 'service_kvo9qtx';
    const templateId = 'template_qd3jdvw';
    const publicKey = 'a3CMlFTO1ZvT8Ckx2';

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ from_name: '', from_email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section
      name="Contact-me"
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-12 ${
        Mode ? 'bg-white text-black' : 'bg-[#171c28] text-white'
      }`}
    >
      <div className="text-center max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Reach out to me!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
       
       

        
        <div className="mb-8 w-full mt-5 max-w-md mx-auto">
          <div
            className={`p-6 rounded-lg shadow-lg ${
              Mode ? 'bg-gray-100' : 'bg-[#1a2238]'
            }`}
          >
            <div
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`p-3 rounded-md border ${
                  Mode
                    ? 'border-gray-300 bg-white text-black'
                    : 'border-gray-600 bg-[#2a3447] text-white'
                } hover:outline-none hover:ring-2 hover:ring-purple-400`}
                required
              />
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`p-3 rounded-md border ${
                  Mode
                    ? 'border-gray-300 bg-white text-black'
                    : 'border-gray-600 bg-[#2a3447] text-white'
                } hover:outline-none hover:ring-2 hover:ring-purple-400`}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className={`p-3 rounded-md border ${
                  Mode
                    ? 'border-gray-300 bg-white text-black'
                    : 'border-gray-600 bg-[#2a3447] text-white'
                } hover:outline-none hover:ring-2 hover:ring-purple-400 resize-none`}
                required
              ></textarea>
              <button
                type="submit"
                onClick={handleSubmit}
                className={`p-3 rounded-md font-semibold ${
                  Mode
                    ? 'bg-gray-500 hover:bg-purple-600 text-white'
                    : 'bg-gray-600 hover:bg-purple-600 text-white'
                } transition-colors`}
              >
                Send Message
              </button>
            </div>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.includes('successfully') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>

        {/* Placeholder for profile picture */}
        <div className="flex justify-center mb-8">
          <div className="w-40 h-40 rounded-full bg-gray-500 border-4 border-purple-500 flex items-center justify-center">
            <span className="text-white text-sm">Profile Picture</span>
          </div>
        </div>
        <footer className="text-sm">
          <p>
            Made by{' '}
            <span className="text-red-500">♥</span> Karan
          </p>
         
        </footer>
      </div>
    </section>
  );
};

export default ContactMe;