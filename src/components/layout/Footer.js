import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const date = new Date()

  return (
    <footer className="#1e88e5 blue darken-1 page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col sl2 m6">
            <h5 className="white-text">About</h5>
            <ul>
              <li><Link className="grey-text text-lighten-3" to='/'>About Us</Link></li>
              <li><Link className="grey-text text-lighten-3" to='/'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          &copy; {date.getFullYear()} VibeTune
        </div>
      </div>
    </footer>
  )
}

export default Footer