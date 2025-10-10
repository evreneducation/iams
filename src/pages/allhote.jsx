import HotelPartners from "../components/hotelpartner";


export default function AllHotel(){
const hotels = [
  {
    name: "The Imperial New Delhi",
    distance: "2.5 km from venue",
    rating: "5",
    features: ["Free WiFi", "Swimming Pool", "Spa", "3 Restaurants"],
    image: "/venue/1.jpg",
  },
  {
    name: "Taj Palace",
    distance: "3.1 km from venue",
    rating: "5",
    features: ["Business Center", "Fitness Center", "4 Dining Options", "Airport Shuttle"],
    image: "/venue/2.jpg",
  },
  {
    name: "The Lalit New Delhi",
    distance: "4.2 km from venue",
    rating: "5",
    features: ["Conference Facilities", "Pool", "Multiple Cuisines", "24/7 Room Service"],
    image: "/venue/3.jpg",
  },
];

      return(<>
<HotelPartners hotels={hotels} />

      </>)
}

