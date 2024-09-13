import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
      educationCard: {
        backgroundColor: theme.primary,
        "&:hover": {
          backgroundColor: "black",
        },
      },
    }));

    const classes = useStyles();

    return (
      <Fade bottom>
        <div key={id} className={`education-card ${classes.educationCard}`}>
          <div
            className="educard-img"
            style={{ backgroundColor: theme.secondary }}
          >
            <img
              src={theme.type !== "light" ? eduImgBlack : eduImgBlack}
              alt=""
            />
          </div>
          <div className="education-details">
            <h6 style={{ color: "white" }}>
              {startYear}-{endYear}
            </h6>
            <h5
              style={{
                color: theme.type === "light" ? theme.secondary : "#212121",
              }}
            >
              {course}
            </h5>
            <p
              style={{
                color: theme.type === "light" ? theme.secondary : "#212121cc",
              }}
            >
              {institution}
            </p>
          </div>
        </div>
      </Fade>
    );
}

export default EducationCard
