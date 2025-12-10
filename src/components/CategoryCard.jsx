import "./CategoryCard.css";

function CategoryCard(props) {
  return (
    <div className="categoryCardLayout" onClick={props.onClick} tabIndex="0">
      <div className="categoryCardImageBackground">
        <img
          src={props.image}
          alt="categorycard Image "
          className="categoryCardImage"
        />
      </div>
      <div className="categooryCardText">
        <p className="categoryText">{props.name}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
