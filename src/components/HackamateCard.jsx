import { useNavigate } from "react-router-dom";

export default function HackamateCard({ hackamate }) {
  const navigate = useNavigate();

  return (
    <div
      className="hackamate-card"
      style={{ border: `3px solid ${hackamate.color?.toLowerCase() || "#666"}` }}
      onClick={() => navigate(`/hackamates/${hackamate.id}`)}
    >
      <div>
        <img
            src={hackamate.imageUrl || "/Profile.png"}
            className="profile-pic"
            />
      </div>
      <p><strong>Name:</strong> {hackamate.name}</p>
      <p><strong>Skill:</strong> {hackamate.skill}</p>
      <p><strong>Color:</strong> {hackamate.color}</p>
      <p><strong>Bio:</strong> {hackamate.bio}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/hackamates/${hackamate.id}/edit`);
        }}
      >
        Edit Hackamate
      </button>
    </div>
  );
}
