import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import HackamateCard from "../components/HackamateCard";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const [hackamates, setHackamates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHackamates = async () => {
      const { data, error } = await supabase.from("Hackamate").select("*");
      if (error) console.error("Error fetching Hackamates:", error);
      else setHackamates(data || []);
    };
    fetchHackamates();
  }, []);

  if (hackamates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
        <h2 className="text-3xl mb-4">No Hackamates yet 😢</h2>
        <p className="mb-6 text-gray-400">
          Start building your dream hackathon crew!
        </p>
        <button
          onClick={() => navigate("/create")}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-lg hover:scale-105 transition-transform shadow-lg"
        >
          Create Your First Hackamate ✨
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen bg-gray-950 text-white">
      <h1 className="text-4xl mb-8 font-bold text-center text-purple-400">
        Your Hackamate Gallery 🚀
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {hackamates.map((h) => (
          <HackamateCard key={h.id} hackamate={h} />
        ))}
      </div>
    </div>
  );
}
