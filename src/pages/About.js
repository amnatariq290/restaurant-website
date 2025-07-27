import React from 'react';

const team = [
  {
    name: 'Chef Amna Tariq',
    role: 'Head Chef',
    image: 'https://i.ibb.co/y6W6bTv/chef1.jpg',
  },
  {
    name: 'Chef Bilal',
    role: 'Pastry Chef',
    image: 'https://i.ibb.co/Wv7THQD/chef2.jpg',
  },
  {
    name: 'Chef Ayesha',
    role: 'Sous Chef',
    image: 'https://i.ibb.co/Snb5Hxt/chef3.jpg',
  },
];

const About = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      {/* Restaurant Story */}
      <div className="mb-10 text-center">
        <p className="text-lg">
          Welcome to <strong>Food Heaven</strong> – where passion meets plate! Our story began with a dream to serve delicious, heartwarming meals made from the finest ingredients. We believe in quality, tradition, and a little bit of spice.
        </p>
      </div>

      {/* Team Section */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Meet Our Team</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded shadow p-4 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
