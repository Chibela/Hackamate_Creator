import { useState } from "react";
import { supabase } from "../supabaseClient";
import ColorPicker from "../components/ColorPicker";
import { useNavigate } from "react-router-dom";

export default function CreateHackamate() {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [color, setColor] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const { error } = await supabase
      .from("Hackamate")
      .insert([{ name, skill, color, bio }]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("❌ Failed to create Hackamate. Try again.");
    } else {
      setSuccess(true);
      // small delay before redirect
      setTimeout(() => navigate("/hackamates"), 1500);
    }
  };

  return (
    <div className="form-page">
      <h1>Create a Hackamate</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <ColorPicker selectedColor={color} setSelectedColor={setColor} />
        <textarea
          placeholder="Short Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button
          type="submit"
          className={`submit-btn ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Hackamate 🚀"}
        </button>

        {success && (
          <p className="success-message">✅ Hackamate created successfully!</p>
        )}
      </form>
    </div>
  );
}
