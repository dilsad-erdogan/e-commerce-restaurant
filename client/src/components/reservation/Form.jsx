
const Form = () => {
  return (
    <div className="p-5">
        {/* Name */}
        <div className="text-3xl font-bold text-white flex w-full" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Create a Reservation</div>

        {/* Form */}
        <div className="mt-5 w-full">
            <form action="">
                <input type="text" placeholder="First and Last Name" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" />
                <input type="text" placeholder="Phone Number" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" />
                <input type="text" placeholder="Email Address" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" />
                <input type="number" placeholder="How many people are you? (1 to 4)" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" />
                <input type="datetime-local" placeholder="First and Last Name" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" />
                <button type="submit" className="block px-10 py-2 mt-2 text-center text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-xl">Create</button>
            </form>
        </div>
    </div>
  )
}

export default Form