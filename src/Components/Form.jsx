
const Form = ({formRef, handleSubmit}) => {
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm border border-gray-300">
      <h2 className="text-lg font-semibold text-center mb-4">Contact</h2>

      <label className="block text-sm mb-1">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
      />

      <label className="block text-sm mb-1">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
      />

      <label className="block text-sm mb-1">Message</label>
      <textarea
        placeholder="Your Message"
        name="massage"
        rows="4"
        className="w-full mb-4 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-700"
      ></textarea>

      <button
        type="submit"
        className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition duration-200 block mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default Form
