import React from 'react'
import FooterList from './FooterList'

const Footer = () => {
  return (
    <footer>
      <h2>HOPE HOUSE FOUNDATION</h2>
      <div>
        <h3>Pages</h3>
        <ul>
          <FooterList url="#" text='testing'/>
        </ul>
      </div>
      <div>
        <h3></h3>
        <ul>
        </ul>
      </div>
      <div>
        <h3></h3>
        <ul>
        </ul>
      </div>
      <div>
        <p>&copy; 2024 Indonesia Hope House Foundation. All right reserved.</p>
      </div>
    </footer>
  )
}

export default Footer