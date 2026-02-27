import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry, we couldn’t find what you were looking for.
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
