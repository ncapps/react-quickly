import React from 'react';
import Link from './Link';

export default function Menu() {
  const menus = ['Home',
  'About',
  'Services',
  'Portfolio',
  'Contact us'];

  return (
    <>
      {menus.map((v,i) => <div key={i}><Link label={v} /></div>)}
    </>
  );
}