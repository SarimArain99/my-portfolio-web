function contact() {
  return (
    <form className="flex flex-col justify-center relative top-28 py-10 border border-black sm:mx-10 mx-5 sm:px-10 px-2 bg-gray-50 rounded-lg shadow-xl mb-20" action="https://api.web3forms.com/submit" method="POST">
      <div className="flex flex-col mb-6">
      <input type="hidden" name="access_key" value="97b9413e-2ea8-4b21-921b-f87d710755d6"/>
        <label htmlFor="name" className="text-lg font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="fullName"
          placeholder="Enter Your Full Name"
          className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 duration-500 outline-none"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="email" className="text-lg font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 duration-500 outline-none"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="subject" className="text-lg font-medium mb-2">
          Subject
        </label>
        <textarea
        name="subject"
          id="subject"
          placeholder="Write Subject"
          className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 duration-500 outline-none"
        ></textarea>
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="message" className="text-lg font-medium mb-2">
          Message
        </label>
        <textarea
        name="message"
          id="message"
          placeholder="Write Message"
          className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 duration-500 outline-none"
        ></textarea>
      </div>
      <button className="bg-orange-500 text-white font-semibold w-32 h-12 rounded-lg shadow-md hover:bg-orange-400 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ">
        Submit
      </button>
    </form>
  );
}

export default contact;
