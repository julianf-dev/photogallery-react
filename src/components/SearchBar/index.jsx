import { useState } from "react"
import { FaBeer } from 'react-icons/fa';
import style from './searchBar.module.scss'

export const SearchBar = () => {
    
    const [search, setSearch] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.input.value
        setSearch(value)
    }
  return (
    <header>
        <form onSubmit={handleSubmit} className={style.form}>
            <input className={style.form__boxestype} type="text" placeholder="Search some photos.."/>
            <button className={style.form__boxestype} type="submit"><FaBeer/></button>
        </form>
    </header>
  )
}
