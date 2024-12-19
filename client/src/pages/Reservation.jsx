import Navbar from "../components/navbar/Navbar"
import Form from "../components/reservation/Form"
import Map from "../components/reservation/Map"

const Reservation = () => {
  return (
    <div className="container">
        <Navbar />

        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
          <Form />
          <Map />
        </div>
    </div>
  )
}

export default Reservation