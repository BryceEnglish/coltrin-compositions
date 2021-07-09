import React from 'react'
import D20Spinner from './D20spinner'

const Intro = () => {
    return (
        <div className="intro">
            <h1 className="intro__content-header">
              Coltrin Compositions is tabletop music!
            </h1>
            <D20Spinner />
            <p className="intro__content">
              Whether you're delving into the depths of the Underdark, battling
              corporate cronies on Absalom Station, or attempting to stay sane
              in the face of Eldritch terrors, we have the soundtrack for your
              session! If Coltrin Compositions just doesn't seem to have the
              right track for your situation, we can make it! Comissions are
              always open.
            </p>
            <button className="intro__button btn-1">Get In Touch!</button>
        </div>
    )
}

export default Intro
