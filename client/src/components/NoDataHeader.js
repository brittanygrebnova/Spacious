import React from 'react';

const NoDataHeader = () => {
  return (
    <h2 className="ui center aligned icon header">
      <i className="settings icon"></i>
      <div className="content">
        You're Not Logged In
        <div className="sub header">Go Back To The <a href="/">Home Page</a></div>
      </div>
    </h2>
  )
}

export default NoDataHeader
