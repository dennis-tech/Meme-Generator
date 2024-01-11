import React from 'react'

export default function Header(){
  return (
    <header className='header'>
        <img src="/public/troll-face.png"  className='header__image' alt="troll"/>
        <h2 className='header__title'>Header component</h2>
        <h4 className='header__project'>React Course - Project 3</h4>
    </header>
  )
}
