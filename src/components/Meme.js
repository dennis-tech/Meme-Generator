import React from 'react'
import memesData from './memesData' 

export default function Meme(){

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeimages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  return (
    <main>
        <div className='form'>
            <input 
                type='text' 
                placeholder='Top text'
                className='form__input'
                value={meme.topText}
                name="topText"
                onChange={handleChange}
            />
            <input 
                type='text' 
                placeholder='Bottom text'
                className='form__input' 
                value={meme.bottomText}
                name="bottomText"
                onChange={handleChange}

            />
            <button 
                className='form__button'
                onClick={getMemeImage}
                >
                    Get a new meme image 🖼
            </button>
        </div>
        <div className='meme'>
          <img src={meme.randomImage} alt='Random' className='meme__image' />
          <h2 className="meme__text top">{meme.topText}</h2>
          <h2 className="meme__text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  )
}
