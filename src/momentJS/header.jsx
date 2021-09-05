import React from "react";

export default function Header({ value, setValue }) {
  const currMonthName = () => {
    return value.format("MMMM");
  };

  const currYear = () => {
    return value.format("YYYY");
  };

  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };

  const nextMonth = () => {
    return value.clone().add(1, "month");
  };

  const thisMonth = () => {
    return value.isSame(new Date(), "month");
  };

  return (
    <div>
      <div className="header">
        <div
          className="previos"
          onClick={() => !thisMonth() && setValue(prevMonth())}
        >
          {!thisMonth() && String.fromCharCode(171)}
        </div>
        <div className="current">
          {currMonthName()}
          {currYear()}
        </div>
        <div className="next" onClick={() => setValue(nextMonth())}>
          {String.fromCharCode(187)}
        </div>
      </div>
    </div>
  );
}
