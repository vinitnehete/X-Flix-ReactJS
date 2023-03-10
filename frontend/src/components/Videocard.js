import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Videocard.css";
import {useHistory} from "react-router-dom"

const Videocard = ({ video }) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/video/${video._id}`);
  }
  return (
    <Card
      onClick={handleClick}
      className="videocard"
      sx={{
        maxWidth: 345,
        backgroundColor: "#181818",
        borderColor: "#181818",
        boxShadow: 0,
      }}
    >
      <CardMedia
        component="img"
        height="70%"
        image={video.previewImage}
        alt="green iguana"
      />
      <CardContent sx={{ backgroundColor: "#181818", padding: 0 }}>
        <Typography
          align="left"
          sx={{
            color: "white",
            // display: 'inline',

            mx: 0.5,

            fontSize: 20,
            // fontSize: 14,
            padding: 0,
            margin: 0,
          }}
          variant="p"
          component="div"
        >
          {video.title}
        </Typography>
        <Typography
          sx={{ color: "white" }}
          align="left"
          padding={0}
          variant="body2"
          color="text.secondary"
        >
          {video.releaseDate}
        </Typography>
        <Typography
          sx={{ color: "white" }}
          align="right"
          padding={0}
          variant="body2"
          color="text.secondary"
        >
          {video.viewCount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Videocard;
