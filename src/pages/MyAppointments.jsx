import { useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

function MyAppointments() {
  // const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchMyAppointments();
  }, []);

  async function fetchMyAppointments() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found, user not logged in");
        return;
      }

      const res = await fetch(
        "https://doctor-appointment-backend-cyan.vercel.app/api/appointment/my-appointment",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      console.log(data.appointment);
      setAppointments(data.appointment || []);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  }

  return (
    <div className="max-w-5xl mx-auto mt-16 mb-20 px-4">
      <h2 className="text-3xl font-bold text-[#045f89] mb-8 text-center">
        My Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500 text-center">No appointments found.</p>
      ) : (
        <div className="space-y-6">
          {appointments.map((appt) => (
            <div
              key={appt._id}
              className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="md:w-2/3 p-6 flex flex-col justify-center text-left">
                <h3 className="text-2xl font-bold text-[#045f89] mb-2">
                  {appt.doctor?.name}
                </h3>
                <p className="text-gray-600 font-medium mb-1">
                  {appt.doctor?.specialty}
                </p>

                <div className="mt-2">
                  <p className="text-[#045f89] font-semibold">
                    📅 Date:{" "}
                    <span className="text-gray-700">
                      {new Date(appt.date).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-[#045f89] font-semibold mt-1">
                    🩺 Reason:{" "}
                    <span className="text-gray-700">{appt.reason}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyAppointments;
