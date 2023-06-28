import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    let navigate = useNavigate()

    const initialState = {
        searchText: ''
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        
        // use the formState information to change the url
        navigate(`${formState.searchText}`)

        setFormState(initialState)
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }


    return (
        <div className="home-div">
            <form onSubmit={handleSubmit}>
                <h1 htmlFor="searchBar">Search for a Drink</h1>
                <input type="text" id="searchText" onChange={handleChange} value={formState.searchText}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home