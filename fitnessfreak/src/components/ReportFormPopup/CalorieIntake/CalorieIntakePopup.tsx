import React from "react";
import "../popup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface CaloriIntakePopupProps {
  setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalorieIntakePopup: React.FC<CaloriIntakePopupProps> = ({
  setShowCalorieIntakePopup,
}) => {
  const color = "#ffc20e";

  const [date, setDate] = React.useState<Date>(new Date());
  const [timeValue, setTimeValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );

  const selectedDay = (val: Date) => {
    console.log(val);
  };

  return (
    <div className="popupout">
      <div className="popupbox">
        {/* CLOSE BUTTON */}
        <button
          className="close"
          onClick={() => setShowCalorieIntakePopup(false)}
        >
          <AiOutlineClose />
        </button>

        {/* DATE PICKER */}
        <div className="popup-field">
          <label className="popup-label">Select Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => {
              if (date) setDate(date);
              selectedDay(date as Date);
            }}
            dateFormat="MMMM d, yyyy"
            className="popup-datepicker"
          />
        </div>

        {/* FOOD ITEM INPUTS */}
        <div className="popup-field">
          <TextField
            fullWidth
            label="Food Item Name"
            variant="outlined"
            color="warning"
            size="small"
          />
        </div>

        <div className="popup-field">
          <TextField
            fullWidth
            label="Food Amount (in gms)"
            variant="outlined"
            color="warning"
            size="small"
          />
        </div>

        {/* TIME SELECTOR */}
        <div className="popup-field">
          <label className="popup-label">Select Time</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeClock
              value={timeValue}
              onChange={(newValue) => setTimeValue(newValue)}
            />
          </LocalizationProvider>
        </div>

        {/* SAVE BUTTON */}
        <Button
          variant="contained"
          color="warning"
          fullWidth
          className="popup-save-btn"
        >
          Save
        </Button>

        <div className="hrline"></div>

        {/* ITEMS LIST */}
        <div className="items">
          {[
            { name: "Apple", amount: 100 },
            { name: "Banana", amount: 200 },
            { name: "Rice", amount: 300 },
          ].map((item, idx) => (
            <div className="item" key={idx}>
              <h3>{item.name}</h3>
              <h3>{item.amount} gms</h3>
              <button>
                <AiFillDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalorieIntakePopup;