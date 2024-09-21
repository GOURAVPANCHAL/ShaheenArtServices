import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./counter.css";
const CounterSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("counter-section");
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="counter-section" className="container my-5">
      <div className="row text-center">
        <div className="col-md-3 col-sm-12">
          <div className="counterMain">
            <p className="counterNumber">
              {inView && <CountUp start={0} end={98} duration={3} />}
            </p>
            <p className="counterName">Projects</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="counterMain">
            <p className="counterNumber">
              {inView && <CountUp start={0} end={65} duration={3} />}
            </p>
            <p className="counterName">People</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="counterMain">
            <p className="counterNumber">
              {inView && <CountUp start={0} end={10} duration={3} />}
            </p>
            <p className="counterName">Years</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="counterMain">
            <p className="counterNumber">
              {inView && <CountUp start={0} end={15} duration={3} />}
            </p>
            <p className="counterName">Offices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
