import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../state/actionCreators";

const AllSmurfs = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div className="">
      <h2>All Smurfs</h2>
      <div>
        {props.smurfs.map(smurf => {
          return (
            <div className="" key={smurf.id}>
              <div className='cardInfo'>
                <h4>{smurf.name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  state => state,
  { getSmurfs }
)(AllSmurfs);
