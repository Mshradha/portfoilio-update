import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';
import { MdOutlineDoubleArrow } from "react-icons/md";

import { AiOutlineFolder } from "react-icons/ai";

import "./Achievement.css";

function AchievementCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    achievementCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();
  return (
    <Fade bottom>
      <div key={id} className={`achievement-card ${classes.achievementCard}`}>
        <div className="achievecard-content">
          <div className="achievecard-details1">
            <h2
              style={{
                color: theme.type === "light" ? theme.tertiary : "#212121",
              }}
            >
              <MdOutlineDoubleArrow style={{ marginRight: "2px" }} /> {title}
            </h2>
            <h5
              style={{
                color: theme.type === "light" ? theme.primary : "#212121",
              }}
            >
              {date}
            </h5>
            {/* <p style={{ color: theme.tertiary80 }}>{details}</p> */}
          </div>
          {/* <div
              className="achievecard-details2"
              style={{ color: theme.primary }}
            > */}

          {/* <div className="achievecard-field">
                {/* <AiOutlineFolder /> */}
          {/* <h5>{field}</h5> */}
          {/* </div> */}
          {/* </div> */}
        </div>
        {/* <div className="achievecard-imgcontainer">
            <img src={image} alt="" />
          </div> */}
      </div>
    </Fade>
  );
}

export default AchievementCard
