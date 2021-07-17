import React from "react";
import PropTypes from "prop-types";
import image from "./pictures/me.jpg";

const Profile = (props) => {
  const styleObject = {
    fullName: {
      paddingTop: 10,
      textAlign: "center",
      color: "white",
      fontSize: 25,
      fontFamily: "Geogia",
    },

    bio: {
      textAlign: "center",
      color: "blueviolet",
      fontSize: 20,
      textDecoration: "underline overline",
      fontFamily: "Geogia",
    },

    profession: {
      textAlign: "center",
      color: "white",
      textShadow: "2px 2px purple",
      fontSize: 23,
    },
    image: {
      paddingTop: 100,
      height: 250,
      width: 250,
      marginLeft: 550,
    },
    container: {
      backgroundColor: "rgb(214, 192, 235)",
      border: "5px solid white",
      height: 640,
      width: 1350,
    },
  };
  return (
    <div style={styleObject.container}>
      <>
        <img src={props.pic} style={styleObject.image} alt="imag" />

        {props.children}
      </>
      <div style={styleObject}>
        <div style={styleObject.fullName}>{props.fullName}</div>
        <div style={styleObject.bio}>{props.bio}</div>
        <div style={styleObject.profession}>{props.profession}</div>
      </div>
      {props.handleName(props.fullName)}
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
Profile.defaultProps = {
  fullName: "Malak Nakaa",
  bio: "Student at ISIMM",
  profession: "Software Engineer",
  pic: image,
};

export default Profile;
