import React, { useState, useEffect } from "react";
import "./../../CSS/clock.css";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("Dec 20 ,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (destination < 0) {
        clearInterval(interval.current);
      } 
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
<div class="clock__wrapper flex items-center gap-3">
  <div class="clock__data flex items-center gap-3">
    <div class="text-center">
      <h1 class="text-black font-bold text-2xl mb-2">{ days }</h1>
      <h5 class="text-black font-bold text-sm">Days</h5>
    </div>
    <span class="text-black font-bold text-2xl">:</span>
  </div>
  <div class="clock__data flex items-center gap-3">
    <div class="text-center">
      <h1 class="text-black font-bold text-2xl mb-2">{ hours }</h1>
      <h5 class="text-black font-bold text-sm">Hours</h5>
    </div>
    <span class="text-black font-bold text-2xl">:</span>
  </div>
  <div class="clock__data flex items-center gap-3">
    <div class="text-center">
      <h1 class="text-black font-bold text-2xl mb-2">{ minutes }</h1>
      <h5 class="text-black font-bold text-sm">Minutes</h5>
    </div>
    <span class="text-black font-bold text-2xl">:</span>
  </div>
  <div class="clock__data flex items-center gap-3">
    <div class="text-center">
      <h1 class="text-black font-bold text-2xl mb-2">{ seconds }</h1>
      <h5 class="text-black font-bold text-sm">Seconds</h5>
    </div>
  </div>
</div>
  );
};

export default Clock;
