import React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {

  let header = (
     <div
       style={{
         display: `grid`,
         gridTemplateColumns: `3fr 1fr`,
    }}
    >
      <h1
        style={{
          fontFamily: `Special Elite, cursive`,
          fontSize: `3em`,
        }}
      >
          {title}
      </h1>
      <img src="https://dl.dropboxusercontent.com/s/en3lecnk7xa2k18/profile.gif?dl=0" alt="profile pic" class="profile" />
     </div>
    )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `600px`,
        padding: `3em`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
       <p>Contact me using <a href="https://keybase.io/gnnrbachelor">Keybase</a>.</p> 
      </footer>
    </div>
  )
}

export default Layout
