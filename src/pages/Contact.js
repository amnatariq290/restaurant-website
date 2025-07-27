import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

      {/* Contact Info */}
      <div className="mb-8 text-center">
        <p><strong>Email:</strong> contact@foodheaven.com</p>
        <p><strong>Phone:</strong> +92 300 1234567</p>
        <p><strong>Address:</strong> 123 Food Street, Karachi, Pakistan</p>
      </div>

      {/* Contact Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded col-span-2"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded col-span-2"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border p-3 rounded col-span-2"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 text-white py-3 rounded col-span-2 hover:bg-red-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Google Map */}
      <div className="border rounded overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.986659128575!2d67.03125331500107!3d24.86073458405409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9c123abcdf%3A0xf93b83d882fbfa8!2sKarachi%20Center!5e0!3m2!1sen!2s!4v1661982349866!5m2!1sen!2s"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
