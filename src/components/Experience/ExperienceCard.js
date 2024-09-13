import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
  discription,
}) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary,
      "&:hover": {
        backgroundColor: theme.primary80,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`experience-card ${classes.experienceCard}`}>
        <div
          className="expcard-img"
          style={{ backgroundColor: theme.secondary }}
        >
          <img
            src={theme.type !== "light" ? expImgWhite : expImgBlack}
            alt=""
          />
        </div>
        <div className="experience-details">
          <h6 style={{ color: "white" }}>
            {startYear}-{endYear}
          </h6>
          <h4
            style={{
              color: theme.type === "light" ? theme.secondary : "#212121",
            }}
          >
            {jobtitle}
          </h4>
          <h5
            style={{
              color: theme.type === "light" ? theme.secondary : "#212121cc",
            }}
          >
            {company}
          </h5>
          {discription.map((ele) => {
            return (
              <ul key={ele.id} style={{ color: "whitesmoke" }}>
                <li>{ele.task}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard
