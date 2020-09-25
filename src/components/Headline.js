import React from 'react';
import './UserSearch.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Headline ({theme}) {
  return (
    <div className="">
      <h1 className={theme === 'dark' ? 'dark-theme-headline' : 'light-theme-headline'}>Github User Checker</h1>
      {/* <h2 className="h4">Search for a Github profile</h2> */}
    </div>
  );
}
