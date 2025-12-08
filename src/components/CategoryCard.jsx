import "./CategoryCard.css";

function CategoryCard(props) {
  return (
    <div className="categoryCardLayout">
      <div className="categoryCardImageBackground">
        <img
          src={props.image}
          alt="categorycard Image "
          className="categoryCardImage"
        />
      </div>
      <div className='categooryCardText'>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
