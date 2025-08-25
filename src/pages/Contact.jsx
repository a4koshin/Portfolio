import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const phoneNumber = "+252618404215";

  const handleMessage = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    if (name.length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }
    if (name.length > 50) {
      setError("Name must be less than 50 characters long.");
      return;
    }
    if (email.length > 100) {
      setError("Email must be less than 100 characters long.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      setError("Message must be at least 10 characters long.");
      return;
    }
    if (message.length > 500) {
      setError("Message must be less than 500 characters long.");
      return;
    }

    setError("");

    const url =
      `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Message: ${encodeURIComponent(message)}`;

    window.open(url, "_blank").focus();
  };

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mt-6 mb-24">
        <h1 className="text-2xl font-bold text-start text-blue-500">
          Reach Out
        </h1>
        <p className="sm:text-sm text-gray-600 text-start max-w-4xl text-base leading-relaxed md:text-start">
          I’m open to new projects and ideas. Reach out via email or social
          media—let’s create something amazing!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {error && (
          <p className="text-red-500 mb-4 font-medium text-center">{error}</p>
        )}
        <form onSubmit={handleMessage} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="name" className="mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Kooshin"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 outline-none border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 transition w-full"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="kooshin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 outline-none border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 transition w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-2 outline-none border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 transition w-full"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
