import React from "react";
// import toastedSesame from "../../assets/small/toasted-sesame-salad";
// import caesar from "../../assets/small/caesar-salad";
// import truffleCheeseBread from "../../assets/small/truffle-cheese-bread.png";
// import monthlyPie from "../../assets/small/loverBoy.png";
import romeo from "../../assets/small/password-generator.png";
import cassanova from "../../assets/small/workday-scheduler.png";
import angelFace from "../../assets/small/weather-dashboard.png";
import loverBoy from "../../assets/small/note-taker.png";
import honeyPie from "../../assets/small/budget-tracker.png";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Menu</h2>
        </div>
        <div>
          <h3 className="section-title secondary-border">PIE - 18"</h3>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://rocky-caverns-24754.herokuapp.com/">
                {" "}
                <img
                  src={honeyPie}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="HoneyPie"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>HONEY PIE - $26</h4>
              <p>
                evoo, honey, mozzarella, oregano, parmesan, pecorino romano, chili flake{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://stark-tundra-21699.herokuapp.com/">
                {" "}
                <img
                  src={loverBoy}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="LoverBoy"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>LOVER BOY - $28</h4>
              <p>
                red sauce, italian sausage, castelvetrano olive, calabrian chili, mozzarella, italian parsley{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://alexhscott.github.io/weather-dashboard/">
                {" "}
                <img
                  src={angelFace}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="AngelFace"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>ANGEL FACE - $28</h4>
              <p>
                evoo, mozarella, mushroom, caramelized onion, garlic, ricotta, honey, thyme{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://alexhscott.github.io/work-day-scheduler/">
                {" "}
                <img
                  src={cassanova}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="cassanova"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>CASSANOVA - $28</h4>
              <p>
                red sauce, mozzarella, pepperoni, jalapeno{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://alexhscott.github.io/work-day-scheduler/">
                {" "}
                <img
                  src={romeo}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Romeo"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>ROMEO - $28</h4>
              <p>
                bbq sauce, mozzarella, chicken, bacon, red onion, green onion, cilantro{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://alexhscott.github.io/password-generator/">
                {" "}
                <img
                  src={monthlyPie}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="MonthlyPie"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>MONTHLY PIE - MKT</h4>
              <p>
                rotating selection of ingredients{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="section-title secondary-border">DOUGH</h3>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://rocky-caverns-24754.herokuapp.com/">
                {" "}
                <img
                  src={truffleCheeseBread}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="TruffleCheeseBread"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>TRUFFLE CHEESE BREAD - $15</h4>
              <p>
                evoo, mozzarella, italian herbs, chili flake, truffle oil, honey{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="section-title secondary-border">GREEN</h3>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://rocky-caverns-24754.herokuapp.com/">
                {" "}
                <img
                  src={caesar}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Caesar"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>CAESAR - $12</h4>
              <p>
                house made caesar dressing, romaine, croutons, anchovy, parmesan, black pepper{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://stark-tundra-21699.herokuapp.com/">
                {" "}
                <img
                  src={toastedSesame}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="ToastedSesame"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>TOASTED SESAME - $12</h4>
              <p>
                bibb lettuce, sesame vinaigrette, scallions, soft boiled egg, toasted sesame pecans, soy ginger marinaded beech mushrooms, sesame seeds{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;