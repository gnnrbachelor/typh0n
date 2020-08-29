import React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
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
      <img src="https://dl.dropboxusercontent.com/s/9erwmuivkie355s/baphomet.gif?dl=0" alt="profile pic" class="profile" />
      
     </div>
    )
  } else {
    header = (
    <div
      style={{
         display: `grid`,
         gridTemplateColumns: `500px 200px`,
    }}
    >

      <h3
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
      </h3>
       <a href="https://twitter.com/typh0n1an">@Typh0n1an</a>
     </div>
    )
  }
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
