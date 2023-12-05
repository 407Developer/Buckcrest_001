import React from 'react'
import './Insurance.css'

const Insurance = () => {
    return (
        <div className='insurance'>
            <form>
                <input type="radio" id="option1" name="options" value="option1" />
                <label for="option1">Express Delivery</label>

                <input type="radio" id="option2" name="options" value="option2" />
                <label for="option2">2000 Naira for Damage cover</label>
            </form>

        </div>
    )
}

export default Insurance