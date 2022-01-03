import React, { useState, useEffect } from "react";

const CounDown = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  useEffect(() => {
    let interval;
    const startTimer = () => {
      const counDownDate = new Date("February 20, 2022").getTime();

      interval = setInterval(() => {
        const now = new Date().getTime();

        const distance = counDownDate - now;

        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        if (distance < 0) {
          //   stop Timer
          clearInterval(interval.current);
        } else {
          // update timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };

    const timer = startTimer();
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-wrap ml-4  mt-6 space-x-1 text-center">
      <h1 className="font-semibold text-4xl bg-yellow-400 rounded text-white px-1">
        {timerDays}
      </h1>
      <p className="text-2xl font-semibold">:</p>
      <h1 className="font-semibold text-4xl bg-yellow-400 rounded  text-white px-1">
        {timerHours}
      </h1>
      <p className="text-2xl font-semibold">:</p>
      <h1 className="font-semibold text-4xl bg-yellow-400 rounded  text-white px-1">
        {timerMinutes}
      </h1>
      <p className="text-2xl font-semibold">:</p>
      <h1 className="font-semibold text-4xl bg-yellow-400 rounded  text-white px-1">
        {timerSeconds}
      </h1>
    </div>
  );
};

export default CounDown;
