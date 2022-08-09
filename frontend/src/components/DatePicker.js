import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState } from "react";

const DatePicker = ({ refStartDate, refEndDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelection = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    refStartDate.current = ranges.selection.startDate;
    refEndDate.current = ranges.selection.endDate;
  };
  return (
    <div>
      <DateRange
        // not working on safari
        // minDate={new Date("01-01-2017")}
        // maxDate={new Date()}
        ranges={[selectionRange]}
        onChange={handleSelection}
      />
    </div>
  );
};

export default DatePicker;
