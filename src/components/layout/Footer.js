import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const date = new Date()

  return (
    <footer className="#1e88e5 blue darken-1 page-footer">
      <div className="footer-copyright">
        <div className="container">
          &copy; {date.getFullYear()} VibeTune
        </div>
      </div>
    </footer>
  )
}

export default Footer