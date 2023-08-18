import './App.css';

function App() {
  return (
     <div>
      <aside>
        <div id="container">
          <div className="container1" id="container3">
            <p id="first">Frontend Mentor</p>
            <p id="second">Feedback Board</p>
          </div>

          <div className="container1" id="container4">
            <div id="btngroup1">
              <button id="allbtn">All</button>
              <button>UI</button>
              <button>UX</button>
            </div>
            <div id="btngroup2">
              <button id="encbtn">Enhancement</button>
              <button id="bugbtn">Bug</button>
            </div>
            <button id="featurebtn">Feature</button>
          </div>

          <div className="container1" id="container5">
            <p id="rm">Roadmap</p>
            <a href="">View</a>

            <div id="rmgroup1">
              <div id="oval1"></div>
              <p id="planned">Planned</p>
              <p className="countinrm">0</p>
            </div>

            <div id="rmgroup2">
              <div id="oval2"></div>
              <p id="inprogress">In-Progress</p>
              <p className="countinrm">0</p>
            </div>

            <div id="rmgroup3">
              <div id="oval3"></div>
              <p id="live">Live</p>
              <p className="countinrm">0</p>
            </div>
          </div>
        </div>
      </aside>

      <div id="container1">
        <img src="../images/bulb 2.svg" alt="bulblogo" />
        <p id="sg">0 Suggestions</p>
        <p id="srt">Sort by : <b>Most Upvotes</b></p>
        <img src="../images/Path 2.svg" alt="pathlogo" id="pathlogo" />
        <button id="startfb">+ Add Feedback</button>
      </div>
      <div id="container2"></div>
      
  </div>
  );
}

export default App;
