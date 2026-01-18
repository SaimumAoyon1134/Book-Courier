import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaLifeRing,
  FaHeadset,
  FaBook,
  FaTicketAlt,
  FaSearch,
  FaChevronRight,
  FaPhone,
  FaComments,
  FaMailBulk,
} from "react-icons/fa";

const HelpSupport = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const [searchTerm, setSearchTerm] = useState("");

  // FAQ data
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "How do I create an account?",
          a: "You can create an account by clicking on the 'Sign Up' button at the top right corner of our website. Fill in your details and verify your email address to complete registration.",
        },
        {
          q: "What are your delivery areas?",
          a: "We currently deliver across all major cities in Bangladesh. You can check if your location is covered during checkout.",
        },
        {
          q: "How can I track my order?",
          a: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can use this number on our tracking page to monitor your delivery status.",
        },
      ],
    },
    {
      category: "Orders & Payments",
      questions: [
        {
          q: "How do I place an order?",
          a: "Simply browse our catalog, select the books you want, add them to your cart, and proceed to checkout. Follow the prompts to complete your order.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept various payment methods including Cash on Delivery (COD), online banking, mobile banking (bkash, nagad, rocket), debit/credit cards, and net banking.",
        },
        {
          q: "Can I modify or cancel my order?",
          a: "Yes, you can modify or cancel your order before it's shipped. Once the order is in transit, cancellation is not possible, but you can return the item after delivery.",
        },
      ],
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "You can return any book within 7 days of delivery if it's damaged, defective, or not as described. Items must be in original condition with all tags and packaging.",
        },
        {
          q: "How long does it take to process refunds?",
          a: "Refunds are processed within 5-7 business days after we receive and inspect the returned item. The refund will be credited to your original payment method.",
        },
        {
          q: "Who pays for return shipping?",
          a: "Return shipping costs depend on the reason for return. If the item is damaged or incorrect, we cover return shipping. Otherwise, the customer bears the cost.",
        },
      ],
    },
    {
      category: "Account & Security",
      questions: [
        {
          q: "How do I reset my password?",
          a: "Click on 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your inbox to reset your password.",
        },
        {
          q: "Is my personal information secure?",
          a: "Yes, we use industry-standard security measures to protect your personal and payment information. We never share your data with third parties without consent.",
        },
        {
          q: "How do I update my account information?",
          a: "Log in to your account, go to 'My Profile', and click on 'Edit Profile' to update your personal information, shipping address, and payment details.",
        },
      ],
    },
  ];

  // Support options
  const supportOptions = [
    {
      icon: <FaHeadset className="text-2xl text-primary-500" />,
      title: "Live Chat Support",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      contact: "Available 9:00 AM - 8:00 PM (Sat-Thu)",
    },
    {
      icon: <FaPhone className="text-2xl text-primary-500" />,
      title: "Phone Support",
      description: "Call our customer service hotline",
      action: "Call Now",
      contact: "+880 1234 567890",
    },
    {
      icon: <FaMailBulk className="text-2xl text-primary-500" />,
      title: "Email Support",
      description: "Send us an email for non-urgent inquiries",
      action: "Send Email",
      contact: "support@bookcourier.com",
    },
    {
      icon: <FaComments className="text-2xl text-primary-500" />,
      title: "Community Forum",
      description: "Get help from other users and experts",
      action: "Visit Forum",
      contact: "24/7 Community Support",
    },
  ];

  // Popular articles
  const popularArticles = [
    "How to Place an Order",
    "Tracking Your Delivery",
    "Return & Refund Process",
    "Creating an Account",
    "Payment Methods & Security",
    "Managing Your Wishlist",
    "Using Coupons & Discounts",
    "Updating Your Profile",
  ];

  // Filter FAQs based on search term
  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (qa) =>
          qa.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          qa.a.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help & Support
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
              We're here to help you with any questions or issues you may have.
              Find answers or contact our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-10 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-neutral-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for help topics, articles, or solutions..."
                className="w-full pl-10 pr-4 py-4 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-6 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === "faq"
                  ? "bg-primary-500 text-white"
                  : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
              }`}
            >
              <div className="flex items-center">
                <FaQuestionCircle className="mr-2" />
                FAQs
              </div>
            </button>
            <button
              onClick={() => setActiveTab("support")}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === "support"
                  ? "bg-primary-500 text-white"
                  : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
              }`}
            >
              <div className="flex items-center">
                <FaLifeRing className="mr-2" />
                Support Options
              </div>
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === "articles"
                  ? "bg-primary-500 text-white"
                  : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
              }`}
            >
              <div className="flex items-center">
                <FaBook className="mr-2" />
                Help Articles
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          {activeTab === "faq" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-neutral-800 dark:text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                  Find answers to common questions about our services
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                {searchTerm ? (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-white">
                      Search Results
                    </h3>
                    {filteredFaqs.length === 0 ? (
                      <div className="text-center py-10">
                        <p className="text-neutral-600 dark:text-neutral-300">
                          No results found for "{searchTerm}". Try a different
                          search term.
                        </p>
                      </div>
                    ) : (
                      filteredFaqs.map((category, catIndex) => (
                        <div key={catIndex} className="mb-8">
                          <h4 className="text-lg font-bold mb-4 text-neutral-800 dark:text-white">
                            {category.category}
                          </h4>
                          {category.questions.map((qa, qaIndex) => (
                            <div key={qaIndex} className="mb-4">
                              <div className="collapse collapse-plus bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
                                <input
                                  type="radio"
                                  name={`faq-search-${catIndex}-${qaIndex}`}
                                />
                                <div className="collapse-title text-lg font-medium text-neutral-800 dark:text-white">
                                  {qa.q}
                                </div>
                                <div className="collapse-content text-neutral-600 dark:text-neutral-300">
                                  <p>{qa.a}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))
                    )}
                  </div>
                ) : (
                  faqs.map((category, catIndex) => (
                    <div key={catIndex} className="mb-12">
                      <h3 className="text-xl font-bold mb-6 text-neutral-800 dark:text-white">
                        {category.category}
                      </h3>
                      {category.questions.map((qa, qaIndex) => (
                        <div key={qaIndex} className="mb-4">
                          <div className="collapse collapse-plus bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
                            <input
                              type="radio"
                              name={`faq-${catIndex}-${qaIndex}`}
                            />
                            <div className="collapse-title text-lg font-medium text-neutral-800 dark:text-white">
                              {qa.q}
                            </div>
                            <div className="collapse-content text-neutral-600 dark:text-neutral-300">
                              <p>{qa.a}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "support" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-neutral-800 dark:text-white">
                  Contact Support
                </h2>
                <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                  Choose the best way to get help from our support team
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    className="card bg-white dark:bg-neutral-800 shadow-xl rounded-xl hover-enhanced"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="card-body p-8">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">{option.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">
                            {option.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                            {option.description}
                          </p>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                            {option.contact}
                          </p>
                          <button className="btn btn-primary">
                            {option.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="mt-16 max-w-4xl mx-auto">
                <div className="card bg-white dark:bg-neutral-800 shadow-xl rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-white">
                    Submit a Ticket
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        placeholder="Brief description of your issue"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      >
                        <option value="">Select a category</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Issue</option>
                        <option value="payment">Payment Problem</option>
                        <option value="delivery">Delivery Concern</option>
                        <option value="account">Account Issue</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        placeholder="Describe your issue in detail..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-full py-3 px-6 rounded-lg font-semibold text-white hover:bg-primary-600 transition-colors"
                    >
                      Submit Ticket
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "articles" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-neutral-800 dark:text-white">
                  Help Articles
                </h2>
                <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                  Browse our collection of helpful articles and guides
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    className="card bg-white dark:bg-neutral-800 shadow-xl rounded-xl hover-enhanced"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="card-body p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-neutral-800 dark:text-white">
                          {article}
                        </h3>
                        <FaChevronRight className="text-neutral-400 mt-1" />
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-300 mt-2 text-sm">
                        Learn how to {article.toLowerCase()} effectively
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          5 min read
                        </span>
                        <span className="badge badge-primary">Guide</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Article Categories */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8 text-neutral-800 dark:text-white">
                  Browse by Category
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Getting Started",
                      count: 12,
                      icon: <FaBook className="text-xl" />,
                    },
                    {
                      name: "Orders & Payments",
                      count: 8,
                      icon: <FaTicketAlt className="text-xl" />,
                    },
                    {
                      name: "Delivery & Shipping",
                      count: 6,
                      icon: <FaHeadset className="text-xl" />,
                    },
                    {
                      name: "Returns & Refunds",
                      count: 5,
                      icon: <FaQuestionCircle className="text-xl" />,
                    },
                  ].map((category, index) => (
                    <motion.div
                      key={index}
                      className="card bg-white dark:bg-neutral-800 shadow-md rounded-xl p-6 hover-enhanced"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-primary-500">{category.icon}</div>
                        <span className="badge badge-secondary">
                          {category.count}
                        </span>
                      </div>
                      <h4 className="font-bold text-neutral-800 dark:text-white">
                        {category.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions or
              concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn btn-accent bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                Live Chat
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                Call Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpSupport;
