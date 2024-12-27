import { useState } from "react";
import "./home.css";
import { AppleWatcheSEData } from "../home/data"; // Assuming the data file is called "data.js"

const Home = () => {
  const [started, setStarted] = useState(false);
  const [activeLabel, setActiveLabel] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);

  const handleGetStartedClick = () => {
    setStarted(true);
  };

  const handleLabelClick = (label) => {
    if (activeLabel === label) {
      setActiveLabel(null); // Reset label if already active
    } else {
      setActiveLabel(label); // Set active label
    }
  };

  const handleOptionClick = (type, item) => {
    switch (type) {
      case "size":
        setSelectedSize(item);
        break;
      case "case":
        setSelectedCase(item);
        break;
      case "band":
        setSelectedBand(item);
        break;
      default:
        break;
    }
  };

  const CustomizationButton = ({
    label,
    options,
    activeOption,
    handleClick,
  }) => (
    <button
      className={`watch-button ${activeLabel === label ? "active" : ""}`}
      onClick={() => handleLabelClick(label)}
    >
      <svg
        height="25"
        viewBox="0 0 19 25"
        width="19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m0 0h19v25h-19z" fill="none"></path>
        <path
          d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z"
          fill="#1d1d1f"
        ></path>
      </svg>
      {activeLabel !== label && <span>{label}</span>}
      {activeLabel === label && (
        <ul className="unstyled-lists">
          {options.map((option) => (
            <li
              key={option.id}
              className="size-list"
              onClick={() => handleOptionClick(label, option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </button>
  );

  return (
    <div>
      <div className="top-aligner">
        <img
          src="https://res.cloudinary.com/defcbzxfm/image/upload/v1735280783/Apple%20watch%20clone/Home/page1_1.jpg"
          alt="apple watch"
          className="apple-watch"
        />
        {started && (
          <>
            <span>
              <span className="collection-name">Collections</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 10 10"
                className="arrow-icon"
              >
                <path d="M4.6725 6.635L2.0175 3.968A.445.445 0 0 1 1.895 3.664.4331.4331 0 0 1 2.322 3.225h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458.0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1-.123.3L5.3275 6.635a.4451.4451 0 0 1-.327.14.464.464 0 0 1-.328-.14z" />
              </svg>
            </span>
            <button className="save-button">Save</button>
          </>
        )}
      </div>

      <div className="container">
        {!started && (
          <>
            <span className="apple-watch-text">
              <span className="studio-name">Apple Watch Studio</span>
              <span className="customize-words">Choose a case.</span>
              <span className="customize-words">Pick a band.</span>
              <span className="customize-words">Create your own style.</span>
            </span>
            <button
              className="get-start-button"
              onClick={handleGetStartedClick}
            >
              Get started
            </button>
          </>
        )}

        <div className={`watch-align ${started ? "reduced" : ""}`}>
          <img
            src="https://res.cloudinary.com/defcbzxfm/image/upload/v1735280783/Apple%20watch%20clone/Home/page1_2.jpg"
            className={`band-image ${started ? "reduced" : ""}`}
            alt="band"
          />
          <img
            src="https://res.cloudinary.com/defcbzxfm/image/upload/v1735280784/Apple%20watch%20clone/Home/page1_3.png"
            className={`case-image ${started ? "reduced" : ""}`}
            alt="case"
          />
        </div>
      </div>

      {started && (
        <>
          <div className="watch-buttons">
            <div>
              <span>APPLE WATCH SERIES 10</span>
              <h1>APPLE WATCH SERIES 10</h1>
              <h2>46mm Jet Black Aluminum Case with Black Solo Loop</h2>
              <p>From $429</p>
            </div>
          </div>
          <div className="watch-buttons">
            <div>
              <CustomizationButton
                label="size"
                options={AppleWatcheSEData.size}
                activeOption={selectedSize}
                handleClick={handleOptionClick}
              />
              <CustomizationButton
                label="case"
                options={AppleWatcheSEData.cases}
                activeOption={selectedCase}
                handleClick={handleOptionClick}
              />
              <CustomizationButton
                label="band"
                options={AppleWatcheSEData.bands}
                activeOption={selectedBand}
                handleClick={handleOptionClick}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
