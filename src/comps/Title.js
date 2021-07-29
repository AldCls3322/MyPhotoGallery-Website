import React from 'react';

const Title = ({ user, signOut }) => {
  return (
    <div className="title">
      <div className="header">
        <h1>RebirthLens</h1>
        <img onClick={signOut} src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} />
      </div>
      <h2>Our Gallery</h2>
      <p>This website is from my first experiences using firebase, I wish to dedicate this photo gallery for the community that finds the link and I invite you to add a picture yourself. </p>
      <p className="repo-link">If you wish to get the code used in this project, cilck </p>
      <a href="https://github.com/AldCls3322/MyPhotoGallery-Website" target="_blank">here</a>
    </div>
  )
}

export default Title;