import React from 'react';

export default function Link({ label }) {
  const url='/' + label.toLowerCase().trim().replace(' ', '-');

  return (
    <>
      <a href={url}>{label}</a>
      <br/>
    </>
  );
}