import { NavLink } from "react-router";
import rocketIcon from "../../assets-portfolio/rocket-icon.ico";
import "./HomeApp.css";
import "./responsive.css";

export function HomeApp() {
  return (
    <div className="portfolio">
      <title>Hoang Nguyen's Portfolio</title>
      <link rel="icon" type="image/svg+xml" href={rocketIcon} />

      {/* Header */}
      <header>
        <div className="container header__container">
          {/* Left column */}
          <div className="header__column--left">
            {/* Avatar */}
            <div className="header__img"></div>

            <div className="header__content--left">
              <h2 className="header__title">Hoang Nguyen</h2>
              <div className="header__badge_container">
                {/* leave some skills tags */}
                <div className="badge">Almost Fullstack Developer</div>
              </div>
              <p>
                My dream is want to be a <span>Junior Developer</span>
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="header__column--right">
            <h2 className="header__title">Contact Information</h2>
            <div className="email-display">
              <div>Email: <span>nguyenvhoang1004@gmail.com</span> or</div> <span>hnguyen275@student.gsu.edu</span>
            </div>
            <p>
              Phone Number: <span>7705893686</span>
            </p>
          </div>
        </div>
      </header>

      {/* About Me - Introduce myself */}

      <section className="aboutMe__container">
        {/* Motion pictures */}



        {/* Main Section */}
        <div className="aboutMe__container">
          <div className="aboutMe__content--container">
            <h1 className="section__title">Introduce Myself</h1>

          </div>
        </div>

      </section>

      <NavLink to="/EcommerceApp">
        <span>click here to direct to ecommerce project</span>
      </NavLink>
    </div>
  );
}
