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
      <Link to="/"><h1
        style={{
          fontFamily: `Special Elite, cursive`,
          fontSize: `3em`,
        }}
      >
          {title}
      </h1></Link>
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
       <p>Contact me on <a href="https://twitter.com/gunnar_bachelor">Twitter</a>.</p> 
      </footer>
    </div>
  )
}

export default Layout
