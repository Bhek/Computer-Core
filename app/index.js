import clock from "clock";

// Update the clock every minute
clock.granularity = "seconds";

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  console.log("Time change: " + evt.date);
}