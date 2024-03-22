import React, { useState } from "react";
import "./App.css";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import dataset from "./datase";

// REGISTER ALL ELMENTS FROM CHART

Chart.register(CategoryScale);
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  BarElement
);

function App() {
  const [ischild, setischild] = useState(true);
  const [externalshow, setexternalshow] = useState(false);
  const [showplannig, setahowplanning] = useState(false);
  const [showdesign, setdesign] = useState(false);
  const [showmanufacture, setshowmanufacture] = useState(false);
  const [showsales, setshowsales] = useState(false);
  const [show_external, setshowexternal] = useState(false);
  const [showb2c, setshowb2c] = useState(false);
  const [data, setdata] = useState([]);
  const [dataname, setdataname] = useState("");
  const [level, setlevel] = useState(0);

  // FUNCTION FOR RESEARCH

  function show() {
    setexternalshow((prev) => !prev);
  }

  // FUNCTION FOR LEVEL STATE

  function levelstate() {
    if (level < 1) {
      setlevel((prev) => prev + 1);
    }
  }

  return (
    <div
      className={` w-screen transition-all delay-200 min-h-screen max-h-max text-white bg-purple-600 flex items-start p-10 justify-center flex-col gap-16 pt-52 pb-52 overflow-scroll main`}
    >
      {/* HEADDER */}

      <h1
        className={`w-full left-0 h-20 bg-transparent flex items-center justify-center text-3xl font-bold text-white fixed top-4`}
      >
        Lizmotors
        {/* MORE DETAILS */}
        <p
          className={`w-auto  h-auto  p-3 sm:top-4 sm:text-sm justify-center sm:left-2 sm:gap-0 rounded-md absolute left-40 text-[1.2rem] top-2 bg-white flex-col gap-2 flex items-center  text-black`}
        >
          <i className="fa-solid fa-arrow-right fa-sm sm:text-sm mb-1">
            details
          </i>
          <i class="fas fa-hand-pointer">click</i>
        </p>
      </h1>

      {/* RESEARCH */}
      <div
        className={`box top-[30%]  
          ${level == 0 ? " sm:left-[30%]" : ""} ${
          level == 1 ? `sm:left-[-20%] ` : ""
        } ${level == 2 ? " sm:left-[-100%]" : ""} ${
          level == 3 ? " sm:left-[-100%]" : ""
        } md:w-[130px] rea flex fixed cursor-pointer  `}
        onClick={() => (
          show(),
          showplannig ? setahowplanning(false) : null,
          showdesign ? setdesign(false) : null,
          showmanufacture ? setshowmanufacture(false) : null,
          showsales ? setshowsales(false) : null,
          levelstate()
        )}
        onMouseEnter={() => {
          setdata(dataset.research), setdataname("Research details");
        }}
        onMouseLeave={() => {
          setdata([]), setdataname("No hover");
        }}
      >
        <p className={`text`} id="rea">
          Research
        </p>

        {/* EXTERNAL */}
        <div
          className={`box  ${
            externalshow
              ? ""
              : (showsales ||
                  showdesign ||
                  showmanufacture ||
                  showmanufacture ||
                  showplannig) != true
              ? " sm:opacity-100"
              : "opacity-50"
          } ${level == 0 ? " sm:left-[100%]" : ""}  ${
            level == 1 ? " sm:left-[30%]" : ""
          } ${level == 2 ? "sm:left-[-20%]" : ""} ${
            level == 3 ? " sm:left-[-100%]" : ""
          }  external fixed left-[25%] top-[25%]`}
        >
          <p
            onClick={() => (level == 1 ? setlevel((prev) => prev + 1) : "")}
            className={`text ${
              externalshow ? "opacity-100" : " sm:opacity-100"
            }`}
            id="external"
          >
            External
          </p>

          {/* FIRST B2C */}
          <div
            className={`box ${
              level == 1 ? " sm:left-[90%]" : ""
            } sm:left-[100%] md:w-[130px] fixed left-[50%] top-[20%] ${
              externalshow ? " opacity-100 " : " sm:opacity-100"
            } ${level == 1 ? "sm:opacity-50" : ""} ${
              level == 2 ? " sm:left-[30%] opacity-100" : ""
            } ${level == 3 ? " sm:left-[-9%]" : ""} `}
          >
            <p
              className={`text`}
              onClick={() => (level == 2 ? setlevel(3) : "")}
            >
              B2C
            </p>
            <div
              className={`box ${
                level == 2 ? " sm:left-[70%] sm:opacity-50" : ""
              }
               sm:left-[100%] fixed left-[70%] top-[15%] ${
                 level == 3 ? " sm:left-[30%]" : ""
               } ${externalshow ? " opacity-100" : " sm:opacity-100"}`}
            >
              <p className={`text`} onClick={() => setlevel(0)}>
                Online
              </p>
            </div>
            <div
              className={`box ${
                level == 2 ? " sm:left-[70%] sm:opacity-50" : ""
              } sm:left-[100%]  ${
                level == 3 ? " sm:left-[30%]" : ""
              } fixed  left-[70%] top-[22%]  ${
                externalshow ? "opacity-100" : ""
              }  `}
            >
              <p className={`text`} onClick={() => setlevel(0)}>
                Interview
              </p>
            </div>
            <div
              className={`box ${
                level == 2 ? " sm:left-[70%] sm:opacity-50" : ""
              } sm:left-[100%]  ${
                level == 3 ? " sm:left-[30%]" : ""
              } fixed left-[70%] top-[29%] ${
                externalshow ? " opacity-100" : ""
              }  `}
            >
              <p className={`text`} onClick={() => setlevel(0)}>
                Public Data
              </p>
            </div>
            <div
              className={`box ${
                level == 2 ? " sm:left-[70%] sm:opacity-50" : ""
              } sm:left-[100%]  ${
                level == 3 ? " sm:left-[30%]" : ""
              } fixed left-[70%] top-[36%] ${
                externalshow ? " opacity-100" : ""
              }  `}
            >
              <p className={`text`} onClick={() => setlevel(0)}>
                Health
              </p>
            </div>
            {ischild == true ? (
              <p
                className={`w-[10px] px-3 h-full flex items-center justify-end text-black`}
              >
                <i class="fa-solid fa-arrow-right"></i>
              </p>
            ) : (
              ""
            )}
          </div>

          {/* SECOND B2C */}
          <div
            className={`box ${
              level == 1 ? " sm:left-[90%] sm:opacity-50" : ""
            } ${level == 2 ? " sm:left-[30%] opacity-100" : ""} ${
              level == 3 ? "sm:left-[-9%]" : ""
            } sm:left-[100%] md:w-[130px] fixed left-[50%] top-[28%] ${
              externalshow ? " opacity-100" : ""
            } `}
          >
            <p className={`text`}>B2C</p>
          </div>
          {ischild == true ? (
            <p
              className={`w-[10px] px-3 h-full flex items-center justify-end text-black`}
            >
              <i class="fa-solid fa-arrow-right"></i>
            </p>
          ) : (
            ""
          )}
        </div>

        {/* INTERNAL */}
        <div
          className={`box ${
            level == 1 ? " sm:left-[30%] sm:top-[32%]" : ""
          } sm:left-[100%] internal fixed left-[25%] top-[31%]  ${
            externalshow ? "  opacity-100" : " opacity-50"
          }`}
        >
          <p className={`text`} id="internal">
            Internal
          </p>
        </div>

        {ischild == true ? (
          <p
            className={`w-[10px] px-3 h-full flex items-center justify-end text-black`}
          >
            <i class="fas fa-hand-pointer"></i>
          </p>
        ) : (
          ""
        )}
      </div>

      {/* PLANNING */}

      <div
        className={`box ${level == 1 ? " sm:left-[-20%]" : ""} ${
          level == 0 ? " sm:left-[30%]" : ""
        } ${level == 2 ? "sm:left-[-100%]" : ""} ${
          level == 3 ? " sm:left-[-100%]" : ""
        } fixed md:w-[130px] planing  top-[42%]`}
        onClick={() => {
          setahowplanning((prev) => !prev),
            showsales ? setshowsales(false) : null,
            showdesign ? setdesign(false) : null,
            showmanufacture ? setshowmanufacture(false) : null,
            externalshow ? setexternalshow(false) : null,
            levelstate();
        }}
        onMouseEnter={() => {
          setdata(dataset.planning), setdataname("Planning details");
        }}
        onMouseLeave={() => {
          setdata([]), setdataname("No hover");
        }}
      >
        <p className={`text`}>Planning</p>
        {/* PRD */}
        <div
          className={`box ${
            level == 1 ? " sm:left-[30%] sm:top-[39%]" : ""
          } sm:left-[100%] fixed left-[25%] top-[37%] ${
            showplannig ? "" : " opacity-50"
          } prd `}
        >
          <p className={`text`}>PRD</p>
        </div>
        {/* SPECS */}
        <div
          className={`box ${
            level == 1 ? " sm:left-[30%] sm:top-[46%]" : ""
          } sm:left-[100%] spec fixed left-[25%] top-[43%] ${
            showplannig ? "" : " opacity-50"
          }`}
        >
          <p className={`text`}>Specs</p>
        </div>
        {ischild == true ? (
          <p
            className={`w-[10px] px-3 h-full flex items-center justify-end text-black`}
          >
            <i class="fas fa-hand-pointer"></i>
          </p>
        ) : (
          ""
        )}
      </div>

      {/* DESIGN */}
      <div
        className={`box ${level == 1 ? " sm:left-[-20%] sm:top-[57%]" : ""}${
          level == 0 ? " sm:left-[30%]" : ""
        } ${level == 2 ? "sm:left-[-100%]" : ""} ${
          level == 3 ? " sm:left-[-100%]" : ""
        } design md:w-[130px] fixed top-[52%]`}
        onClick={() => {
          setdesign((prev) => !prev),
            showplannig ? setahowplanning(false) : null,
            showsales ? setshowsales(false) : null,
            showmanufacture ? setshowmanufacture(false) : null,
            externalshow ? setexternalshow(false) : null,
            levelstate();
        }}
        onMouseEnter={() => {
          setdata(dataset.design), setdataname("Design details");
        }}
        onMouseLeave={() => {
          setdata([]), setdataname("No hover");
        }}
      >
        <p className={`text`}>Desiging</p>
        {/* HARDWARE */}
        <div
          className={`box ${
            level == 1 ? " sm:left-[30%] sm:top-[54%]" : ""
          } sm:left-[100%] fixed hard left-[25%] top-[49%] ${
            showdesign ? "" : " opacity-50"
          }`}
        >
          <p className={`text`}>Hardware</p>
        </div>
        {/* SOFTWARE */}
        <div
          className={`box ${
            level == 1 ? " sm:left-[30%] sm:top-[61%]" : ""
          } sm:left-[100%] fixed soft left-[25%] top-[55%] ${
            showdesign ? "" : " opacity-50"
          }`}
        >
          <p className={`text`}>Software</p>
        </div>
        {ischild == true ? (
          <p
            className={`w-[10px] px-3 h-full flex items-center justify-end text-black`}
          >
            <i class="fas fa-hand-pointer"></i>
          </p>
        ) : (
          ""
        )}
      </div>

      {/* MANUFACTURING */}
      <div
        className={`box ${level == 1 ? " sm:left-[-20%] sm:top-[69%]" : ""} ${
          level == 0 ? " sm:left-[30%]" : ""
        } ${level == 2 ? "sm:left-[-100%]" : ""} ${
          level == 3 ? " sm:left-[-100%]" : ""
        }  md:w-[145px] md:text-sm md:pl-1 manufac md:top-[65%] fixed top-[62%]`}
        onClick={() => {
          levelstate(),
            setshowmanufacture((prev) => !prev),
            showplannig ? setahowplanning(false) : null,
            showdesign ? setdesign(false) : null,
            showsales ? setshowsales(false) : null,
            externalshow ? setexternalshow(false) : null;
        }}
        onMouseEnter={() => {
          setdata(dataset.manufacture), setdataname("Manufacture details");
        }}
        onMouseLeave={() => {
          setdata([]), setdataname("No hover");
        }}
      >
        <p className={`text`}>Manufacturing</p>
        {/* MATERIAL */}
        <div
          className={`box ${
            level == 1
              ? " sm:left-[20%] sm:scale-x-50  sm:top-[68%] sm:scale-[0.8]"
              : ""
          } sm:left-[100%] fixed mat left-[25%] top-[61%] ${
            showmanufacture ? "" : " opacity-50"
          }`}
        >
          <p className={`text`}>Material</p>
        </div>
        {/* PRODUCTION */}
        <div
          className={`box ${
            level == 1 ? " sm:left-[52%] sm:top-[68%] sm:scale-[0.8]" : ""
          } sm:left-[100%] fixed prodc left-[25%] top-[67%] ${
            showmanufacture ? "" : " opacity-50"
          }`}
        >
          <p className={`text`}>Production</p>
        </div>
        {ischild == true ? (
          <p
            className={`w-[10px] px-3 h-full flex items-center justify-end text-black`}
          >
            <i class="fas fa-hand-pointer"></i>
          </p>
        ) : (
          ""
        )}
      </div>

      {/* SALES/MARKETING */}
      <div
        className={`box ${level == 1 ? " sm:left-[-20%] sm:top-[78%]" : ""} ${
          level == 0 ? " sm:left-[30%]" : ""
        } ${level == 2 ? "sm:left-[-100%]" : ""} ${
          level == 3 ? " sm:left-[-100%]" : ""
        } sales fixed md:h-auto md:gap-0 md:top-[75%] md:py-1 md:w-[130px] md:flex-wrap top-[72%]`}
        onClick={() => {
          setshowsales((prev) => !prev),
            showplannig ? setahowplanning(false) : null,
            showdesign ? setdesign(false) : null,
            showmanufacture ? setshowmanufacture(false) : null,
            externalshow ? setexternalshow(false) : null,
            levelstate();
        }}
        onMouseEnter={() => {
          setdata(dataset.sales), setdataname("Sales/Marketing details");
        }}
        onMouseLeave={() => {
          setdata([]), setdataname("No hover");
        }}
      >
        <p className={`text`}> Salex/Marketing</p>
        {/* ONLINE */}
        <div
          className={`box ${
            level == 1 ? " sm:left-[20%] sm:scale-[0.8] sm:top-[78%]" : ""
          } sm:left-[100%] fixed online left-[25%] top-[73%] ${
            showsales ? "" : " opacity-50"
          }`}
        >
          <p className={`text`}>Online</p>
        </div>
        {/* DEALEARSHIP */}
        <div
          className={`box ${
            level == 1 ? " sm:left-[60%] sm:scale-[0.8] sm:top-[78%]" : ""
          } sm:left-[100%] fixed deashp left-[25%] top-[79%]  ${
            showsales ? "" : " opacity-50"
          }`}
        >
          <p className={`text`}>Dealership</p>
        </div>
        {ischild == true ? (
          <p
            className={`w-[10px] px-3 h-auto  flex items-center justify-end text-black`}
          >
            <i class="fas fa-hand-pointer"></i>
          </p>
        ) : (
          ""
        )}
      </div>

      {/* SHOW LEVEL ONLY FOR MOBILE SCREEN */}

      <div
        className={` w-auto h-auto hidden sm:block text-xl text-purple-700 bg-white rounded-md fixed bottom-10 left-[30%] font-extrabold p-2`}
      >
        <p>Level :- {level}</p>
      </div>

      {/* CREATE BACK BUTTON */}
      <button
        onClick={() => setlevel((prev) => (prev != 0 ? prev - 1 : ""))}
        className={`outline-none w-16 h-16 rounded-full disabled:opacity-50 text-black bg-white fixed right-4 bottom-8 hidden sm:block`}
        disabled={level == 0 ? true : false}
      >
        <i class="fas fa-arrow-left fa-xl"></i>
      </button>

      {/* CREATE GRAPH/DETAILS BOX*/}

      <div
        className={`w-1/4 p-4 md:hidden sm:hidden min-h-[40%] bggre max-h-max fixed rounded-md right-8 bottom-4 bg-white`}
      >
        <Bar
          data={{
            labels: ["Positive", "Negative", "Comments"],
            datasets: data.length != 0 ? data : [],
          }}
        />

        <h2
          className={`w-full h-14 mt-4 bg-purple-400 flex items-center justify-center text-xl font-bold text-white`}
        >
          {dataname}
        </h2>
      </div>
    </div>
  );
}

export default App;
