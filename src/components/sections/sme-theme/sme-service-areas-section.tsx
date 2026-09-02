import { MapPin } from "lucide-react";

const states = [
  {
    name: "Karnataka",
    cities: [
      "Bengaluru", "Mysuru", "Hubballi", "Dharwad", "Mangaluru", 
      "Belagavi", "Kalaburagi", "Ballari", "Davanagere", "Shivamogga", 
      "Tumakuru", "Raichur", "Bidar", "Hosapete", "Hassan"
    ]
  },
  {
    name: "Maharashtra",
    cities: [
      "Mumbai", "Pune", "Nagpur", "Nashik", "Thane", 
      "Chhatrapati Sambhaji Nagar", "Solapur", "Kolhapur", "Amravati", "Navi Mumbai", 
      "Kalyan-Dombivli", "Vasai-Virar", "Mira-Bhayandar", "Bhiwandi", "Ulhasnagar"
    ]
  },
  {
    name: "Telangana",
    cities: [
      "Hyderabad", "Secunderabad", "Warangal", "Nizamabad", "Karimnagar", 
      "Khammam", "Ramagundam", "Mahbubnagar", "Nalgonda", "Siddipet", 
      "Sangareddy", "Medchal", "Malkajgiri", "Quthbullapur", "Kukatpally"
    ]
  },
  {
    name: "Andhra Pradesh",
    cities: [
      "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", 
      "Kakinada", "Rajahmundry", "Tirupati", "Kadapa", "Anantapur", 
      "Anakapalle", "Bheemunipatnam", "Vizianagaram", "Bobbili", "Srikakulam"
    ]
  }
];

export function SmeServiceAreasSection() {
  return (
    <section className="sr-only">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-sm font-semibold text-red-600 mb-4">
            <MapPin className="w-4 h-4" /> Nationwide Presence
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From our headquarters in Kalaburagi, we proudly serve startups, SMEs, and enterprises across South India and Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {states.map((state) => (
            <div key={state.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                {state.name}
              </h3>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
                {state.cities.map((city) => (
                  <li key={city} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1 h-1 rounded-full bg-red-400 mr-2 flex-shrink-0"></span>
                    <span className="truncate" title={city}>{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
