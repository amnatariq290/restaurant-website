import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${name} on ${date.toDateString()} at ${time} for ${guests} guests.`);
    // You can replace alert with saving to backend
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Reserve a Table</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">

        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border p-3 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          className="border p-3 rounded w-full"
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
          required
        />

        <select
          className="border p-3 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select Time</option>
          <option>12:00 PM</option>
          <option>1:00 PM</option>
          <option>2:00 PM</option>
          <option>6:00 PM</option>
          <option>7:00 PM</option>
          <option>8:00 PM</option>
        </select>

        <input
          type="number"
          min="1"
          max="20"
          placeholder="No. of Guests"
          className="border p-3 rounded"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-red-600 text-white py-3 rounded hover:bg-red-700 transition"
        >
          Book Table
        </button>
      </form>
    </div>
  );
};

export default Reservation;
