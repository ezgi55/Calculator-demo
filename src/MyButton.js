import React from "react";
import PropTypes from "prop-types";

const eliminateZeros = (totalSofar) => {
  if (Number(totalSofar[0]) === 0) {
    return totalSofar.slice(1);
  }
  return totalSofar;
};
const MyButton = ({ setTotal, total, digit }) => {
  return (
    <button
      onClick={() => {
        setTotal(`${eliminateZeros(total)}${digit}`);
      }}
    >
      {digit}
    </button>
  );
};

MyButton.propTypes = {
  setTotal: PropTypes.func.isRequired,
  total: PropTypes.string,
  digit: PropTypes.number,
};

export default MyButton;
