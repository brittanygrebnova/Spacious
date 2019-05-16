import React from 'react';

const NoDataHeader = () => {
  return (
    <h2 class="ui center aligned icon header">
      <i class="settings icon"></i>
      <div class="content">
        You're Not Logged In
        <div class="sub header">Go Back To The <a href="/">Home Page</a></div>
      </div>
    </h2>
  )
}

export default NoDataHeader
