import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset the form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='lg:mx-16 mx-4 mt-8 lg:mb-0 mb-12 bg-orange-50 p-6 font-serif rounded-3xl '>
      <h2 className='text-orange-800 font-bold text-xl mb-4'>Contact Us</h2>
      {submitted && <p className='text-green-600 mb-4'>Thank you for your message! We'll get back to you soon.</p>}
      <form onSubmit={handleSubmit} className='space-y-4 '>
        <div>
          <label className='block text-orange-800 font-medium mb-2' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full p-2 border border-orange-300 rounded focus:outline-none'
          />
        </div>
        <div>
          <label className='block text-orange-800 font-medium mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full p-2 border border-orange-300 rounded focus:outline-none'
          />
        </div>
        <div>
          <label className='block text-orange-800 font-medium mb-2' htmlFor='message'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            className='w-full p-2 border border-orange-300 rounded h-32 focus:outline-none'
          />
        </div>
        <button
          type='submit'
          className='bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-600'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
