import React from 'react';
import PropTypes from 'prop-types';
import WorldSvg from '../world-svg';

const WorldData = (props) => {
  const { worldData } = props;
  const { today_confirmed: confirmed = 0 } = worldData;

  return (
    <div className="homeHeader d-flex">
      <div className="home-left d-flex col">
        <div className="covid-title mainTitle">
          <WorldSvg />
        </div>
      </div>
      <div className="home-right d-flex col">
        <div className="d-flex col worldData">
          <h1 className="heading subTitle">Total cases:</h1>
          <p className="cases">{Intl.NumberFormat().format(confirmed)}</p>
        </div>
      </div>
    </div>
  );
};

export default WorldData;

WorldData.propTypes = {
  worldData: PropTypes.shape({
    today_confirmed: PropTypes.number,
    today_deaths: PropTypes.number,
  }).isRequired,
};
