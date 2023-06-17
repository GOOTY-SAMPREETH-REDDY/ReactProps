import React from "react";
import ReactDOM from "react-dom";
function Card(obj) {
  return (
    <div>
      <h1>My Contacts</h1>

      <h2>{obj.name}</h2>
      <img src={obj.src} alt="avatar_img" />
      <p>{obj.telno}</p>
      <p>{obj.mail}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Card
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      name="Beyonce"
      telno="+123 456 789"
      mail="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      mail="jack@nowhere.com"
      telno="+987 654 321"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    />

    <Card
      name="Chuck Norris"
      mail="gmail@chucknorris.com"
      telno="+918 372 574"
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    />
  </div>,
  document.getElementById("root")
);
