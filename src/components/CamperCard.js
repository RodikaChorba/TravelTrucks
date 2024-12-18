import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/CamperCard.css";

function CamperCard({ camper }) {
  return (
    <div className="camper-card">
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <Link to={`/catalog/${camper.id}`}>
        <button>Show more</button>
      </Link>
    </div>
  );
}

CamperCard.propTypes = {
  camper: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CamperCard;
