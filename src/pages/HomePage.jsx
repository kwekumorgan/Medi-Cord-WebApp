import SideNavigationBar from "../components/SideNavigationBar.jsx";
import HomeCard from "../components/HomeCard.jsx";
import TopBar from "../components/TopBar.jsx"
function HomePage(){
    return(
        <div className='homePageLayout'>
            <div className='sideBarArea'>
            <SideNavigationBar/>
            </div>
            <div className='topBarArea'>
            <TopBar/>
            </div>

            <div className='contentArea'>
            <HomeCard/>
            </div>
          
       </div>
       

    );
}

export default HomePage;