import { useState } from "react"
import reservationServices from "../../services/reservation"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState('')
  const [date, setDate] = useState('')

  const navigate = useNavigate()

  const handleReservation = async (e) => {
    e.stopPropagation()
    e.preventDefault()

    try{
      const reservation = {
        name: name,
        phone: phone,
        email: email,
        numberOfPeople: people,
        dateTime: date
      }
  
      await reservationServices.add(reservation)
      toast.success('Created your reservation!')
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="p-5">
        {/* Name */}
        <div className="text-3xl font-bold text-white flex w-full" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Create a Reservation</div>

        {/* Form */}
        <div className="mt-5 w-full">
            <form action="">
                <input type="text" placeholder="First and Last Name" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Phone Number" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder="Email Address" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="number" placeholder="How many people are you? (1 to 4)" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" value={people} onChange={(e) => setPeople(e.target.value)} />
                <input type="datetime-local" placeholder="First and Last Name" className="border rounded-lg p-2 w-full mb-4 bg-gray-900 text-white" value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="submit" className="block px-10 py-2 mt-2 text-center text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-xl" onClick={handleReservation}>Create</button>
            </form>
        </div>
    </div>
  )
}

export default Form