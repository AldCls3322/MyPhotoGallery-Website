import React from 'react';

const Title = ({ user, signOut }) => {
  return (
    <div className="title">
      <div className="header">
        <h1>FireGram</h1>
        <img onClick={signOut} src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} />
      </div>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;