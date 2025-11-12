import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function HackamateDetail() {
  const { id } = useParams();
  const [hackamate, setHackamate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHackamate();
  }, []);

  const fetchHackamate = async () => {
    const { data, error } = await supabase.from("Hackamate").select("*").eq("id", id).single();
    if (error) console.error(error);
    else setHackamate(data);
  };

  const handleDelete = async () => {
    await supabase.from("Hackamate").delete().eq("id", id);
    navigate("/Hackamate");
  };

  if (!hackamate) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <h1>Hackamate: {hackamate.name}</h1>
      <h2>Stats:</h2>
      <p><strong>Skill:</strong> {hackamate.skill}</p>
      <p><strong>Color:</strong> {hackamate.color}</p>
      <p><strong>Short Bio:</strong> {hackamate.bio}</p>

      <div className="actions">
        <Link to={`/hackamates/${id}/edit`} className="btn">Edit Hackamate</Link>
        <button onClick={handleDelete} className="btn danger">Delete</button>
      </div>
    </div>
  );
}
