import React from "react";
import { useSelector } from 'react-redux';

const About = () => {
  let data = useSelector((state) => state.count.value)
  return (
    <section>
      <div>
        <h1 style={{ textAlign: "center", color: "red", fontSize: "40px" }}>
          React Redux (Abut Page)
          <div>{data}</div>
        </h1>
      </div>
    </section>
  );
};

export default About;
