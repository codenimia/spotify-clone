import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, settoken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      settoken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("user", user);
      });
    }
    console.log("This is Token", _token);
  }, []);
  return (
    <div className="App">
      {token ? <h1> this is played page</h1> : <Login />}
    </div>
  );
}

export default App;
