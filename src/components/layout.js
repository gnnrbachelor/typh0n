import React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {

  let header = (
     <div
       style={{
         display: `grid`,
         gridTemplateColumns: `500px 200px`,
    }}
    >
      <h1
        style={{
          fontFamily: `Nosifer, cursive`,
          marginTop: 0,
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
      <a href="https://twitter.com/typh0n1an"><img src="https://dl.dropboxusercontent.com/s/9erwmuivkie355s/baphomet.gif?dl=0" alt="profile pic" class="profile" /></a>
      
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
