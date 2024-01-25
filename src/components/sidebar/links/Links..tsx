import React from 'react'

const Links = () => {

  const items = [
    "Home",
    "About",
    "Portfolio",
    "Service",
    "Contact",
  ]

  return (
    <div className='links'>
      {items.map(item => (
        <a href={`#${item}`} key={item}>{item}</a>
      ))}
    </div>
  );
};

export default Links;