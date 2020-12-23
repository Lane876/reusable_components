import React, { useEffect } from "react";
import "./DrinkWater.css";

const DrinkWater = () => {



    useEffect(()=>{
        const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
    })


  return (
    <div className='container'>
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <div className="cup">
        <div className="remained" id="remained">
          <span id="liters"></span>
          <small>Remained</small>
        </div>

        <div className="percentage" id="percentage"></div>
      </div>

      <p className="text">Select how many glasses of water that you have drank</p>

      <div class="cups">
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
        <div className="cup cup-small">250 ml</div>
      </div>
    </div>
  );
};

export default DrinkWater;
