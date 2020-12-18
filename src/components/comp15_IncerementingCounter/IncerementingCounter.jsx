import React, { useEffect } from 'react'
import './IncerementingCounter.css'

const IncerementingCounter = () => {


    useEffect(()=>{

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})
    })

    return (
        <div className='wrapper'>
        <div className="counter-container">
      <i className="fab fa-twitter fa-3x"></i>
      <div className="counter" data-target="12000"></div>
      <span>Twitter Followers</span>
    </div>

    <div className="counter-container">
      <i className="fab fa-youtube fa-3x"></i>
      <div className="counter" data-target="5000"></div>
      <span>YouTube Subscribers</span>
    </div>

    <div className="counter-container">
      <i className="fab fa-facebook fa-3x"></i>
      <div className="counter" data-target="7500"></div>
      <span>Facebook Fans</span>
    </div>
    </div>
    )
}

export default IncerementingCounter
