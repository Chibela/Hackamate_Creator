import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import ColorPicker from "../components/ColorPicker";

export default function EditHackamate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [color, setColor] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetchHackamate();
  }, []);

  const fetchHackamate = async () => {
    const { data } = await supabase.from("Hackamate").select("*").eq("id", id).single();
    if (data) {
      setName(data.name);
      setSkill(data.skill);
      setColor(data.color);
      setBio(data.bio);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase.from("Hackamate").update({ name, skill, color, bio }).eq("id", id);
    navigate(`/hackamates/${id}`);
  };

  return (
    <div className="form-page">
      <h1>Edit Hackamate</h1>
      <form onSubmit={handleUpdate}>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
        <input value={skill} onChange={(e) => setSkill(e.target.value)} />
        <ColorPicker selectedColor={color} setSelectedColor={setColor} />
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        <button type="submit">Update Hackamate</button>
      </form>
    </div>
  );
}
