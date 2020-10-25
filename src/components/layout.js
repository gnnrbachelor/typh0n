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
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <a href="https://twitter.com/typh0n1an"><img src="https://dl.dropboxusercontent.com/s/en3lecnk7xa2k18/profile.gif?dl=0" alt="profile pic" class="profile" /></a>
      
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
       <p>Follow me on Twitter. <a href="https://twitter.com/typh0n1an">@Typh0n1an</a></p> 
      </footer>
    </div>
  )
}

export default Layout
