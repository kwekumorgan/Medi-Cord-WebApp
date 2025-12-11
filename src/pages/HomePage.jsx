import SideNavigationBar from "../components/SideNavigationBar.jsx";
import HomeCard from "../components/HomeCard.jsx";
import TopBar from "../components/TopBar.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import "./HomePage.css";
import generalHealth from "../assets/generalhealth.png";
import dentist from "../assets/dentist.png";
import cardio from "../assets/cardio.png";
import eye from "../assets/eye.png";
import bone from "../assets/bone.png";
import couple from "../assets/man_woman.png";
import brain from "../assets/brain.png";
import food from "../assets/food.png";
import {useNavigate} from "react-router-dom";






function HomePage() {
  const navigate= useNavigate();
  return (
    
    <div className="homePageLayout">
      <div className="sideBarArea">
        <SideNavigationBar />
      </div>

      <div className="workSpace">
        <div className="topBarArea">
          <TopBar />
        </div>

        <div className="contentArea">
          <HomeCard />
        </div>

        <div className="categorySectionLayout">
          <div className="categorySection">
            <CategoryCard name="General Problems" image={generalHealth} />
            <CategoryCard name="Dentist" image={dentist} />

            <CategoryCard name="Ophthalmology" image={eye} />
            <CategoryCard name="Paediatric" image={couple} />

            <CategoryCard name="Neurology" image={brain} />
            <CategoryCard name="Orthopaedic" image={bone} />

            <CategoryCard name="Nutrition" image={food} />
            <CategoryCard name="Cardiology" image={cardio} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
