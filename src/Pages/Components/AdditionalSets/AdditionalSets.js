import React from "react";
import "./AdditionalSets.css"; 
export default function AdditionalSets(props) {
  const sets = [];

  for (let i = 0; i < props.count; i++) {
    sets.push(<div key={i} className="one-set">{props.title}</div>);
  }

  return <div className="Additional">{sets}</div>;
}