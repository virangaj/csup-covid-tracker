import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
import { icon } from "leaflet";
import CountUp from "react-countup";
function InfoBox({ title, cases, total, active, isRed, icon, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
         {icon} {cases}
     
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
           {/* <CountUp
            start={0}
            end={total}
            duration={2.5}
            separator=","
          /> */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
