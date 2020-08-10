import React from "react";
import "./footer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://placeimg.com/100/100/people"
          alt="user"
          className="user"
        />
        <div className="song_info">
          <h4>Album and song detail</h4>
          <p>useh</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="skip_prev" />
        <PlayCircleOutlineIcon className="footer_play" fontSize="large" />
        <SkipNextIcon className="skip_next" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider
              // value={value}
              // onChange={handleChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
