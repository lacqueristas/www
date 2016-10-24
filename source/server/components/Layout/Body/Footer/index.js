import React from "react"

export default function Footer () {
  return <footer style={{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>
    <p>
      <strong>Lacqueristas</strong> by <a href="https://www.kurtisrainboltgreene.name">Kurtis Rainbolt-Greene</a>. The source code is licensed <a href="http://opensource.org/licenses/isc-license.php">ISC</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
    </p>

    <p>
      <a href="https://github.com/lacqueristas/www">
        <icon className="fa fa-github" />
      </a>
    </p>
  </footer>
}
