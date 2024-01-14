
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

function CityInfo() {
  return (
    <div>
      <h2>City Information</h2>
      <p>Here you can find information about the city.</p>
    </div>
  );
}

function FamousLandmark() {
  let { landmarkName } = useParams();
  return (
    <div>
      <h2>{landmarkName}</h2>
      <p>Here you can find information about {landmarkName}.</p>
    </div>
  );
}

function OtherLandmarks() {
  return (
    <div>
      <h2>Other Landmarks</h2>
      <ul>
        <li>
          <Link to="/other-landmarks/landmark1">Landmark 1</Link>
        </li>
        <li>
          <Link to="/other-landmarks/landmark2">Landmark 2</Link>
        </li>
        <li>
          <Link to="/other-landmarks/landmark3">Landmark 3</Link>
        </li>
      </ul>
    </div>
  );
}

function CityPhotos() {
  return (
    <div>
      <h2>City Photos</h2>
      <p>Here you can find photos of the city.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">City Info</Link>
            </li>
            <li>
              <Link to="/famous-landmark/landmark1">Famous Landmark</Link>
            </li>
            <li>
              <Link to="/other-landmarks">Other Landmarks</Link>
            </li>
            <li>
              <Link to="/city-photos">City Photos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/famous-landmark/:landmarkName">
            <FamousLandmark />
          </Route>
          <Route path="/other-landmarks">
            <OtherLandmarks />
          </Route>
          <Route path="/city-photos">
            <CityPhotos />
          </Route>
          <Route path="/">
            <CityInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
