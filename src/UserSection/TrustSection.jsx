const TrustSection = () => {
  return (
    <section className="py-16 ">
      <div className="px-3 md:px-15 mx-auto  text-center">
        <h2 className="text-3xl font-bold mb-10">
          Trusted by Book <span className="text-[#74bb29]">Lovers</span> Nationwide
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className=" p-6 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-green-500">50K+</h3>
            <p className="mt-2 ">Books Delivered</p>
          </div>

          <div className=" p-6 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-blue-500">15K+</h3>
            <p className="mt-2 ">Happy Customers</p>
          </div>

          <div className=" p-6 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-orange-500">100+</h3>
            <p className="mt-2 ">Coverage Areas</p>
          </div>

          <div className=" p-6 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-purple-500">24/7</h3>
            <p className="mt-2 ">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;