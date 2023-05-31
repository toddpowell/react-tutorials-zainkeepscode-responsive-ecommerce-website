import React from 'react'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        Logo
      </div>

      <div className={css.right}>
        <div className={css.menu}>

        </div>
        
        <input type="text" className={css.search} />

        <span>PNG icon of cart</span>
      </div>
    </div>
  )
}

export default Header