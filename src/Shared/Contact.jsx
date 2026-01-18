import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-500" />,
      title: "Our Location",
      content: "123 Book Street, Literary District, Dhaka, Bangladesh",
    },
    {
      icon: <FaPhone className="text-2xl text-primary-500" />,
      title: "Phone Number",
      content: "+880 1234 567890",
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary-500" />,
      title: "Email Address",
      content: "info@bookcourier.com",
    },
    {
      icon: <FaClock className="text-2xl text-primary-500" />,
      title: "Working Hours",
      content: "Mon-Sat: 9:00 AM - 8:00 PM",
    },
  ];

  return (
    <div className="min-h-screen px-3 md:px-15">
      {/* Hero Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl  mx-auto text-primary-100">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300  shadow-green-500/40 hover-enhanced"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold mb-2 ">
                  {info.title}
                </h3>
                <p >
                  {info.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 ">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium  mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium  mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium  mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn bg-[#68ba11] w-full py-3 px-6 rounded-lg font-semibold text-white hover:bg-primary-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 ">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <FaMapMarkerAlt className="text-2xl text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 ">
                      Visit Our Office
                    </h3>
                    <p className="">
                      123 Book Street, Literary District
                      <br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <FaPhone className="text-2xl text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 ">
                      Call Us
                    </h3>
                    <p className="">
                      Phone: +880 1234 567890
                      <br />
                      WhatsApp: +880 1234 567890
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <FaEnvelope className="text-2xl text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Email Us
                    </h3>
                    <p className="">
                      General: info@bookcourier.com
                      <br />
                      Support: support@bookcourier.com
                      <br />
                      Sales: sales@bookcourier.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <FaClock className="text-2xl text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 ">
                      Working Hours
                    </h3>
                    <p className="">
                      Monday - Friday: 9:00 AM - 8:00 PM
                      <br />
                      Saturday: 10:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 ">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3  rounded-full text-primary-500 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-neutral-600 transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 0 rounded-full text-primary-500 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-neutral-600 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3  rounded-full text-primary-500 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-neutral-600 transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3  rounded-full text-primary-500 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-neutral-600 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
   

      {/* Map Placeholder */}
    
    </div>
  );
};

export default Contact;
