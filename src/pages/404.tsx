import * as React from "react"

import { Layout, Seo } from "../components"

const NotFoundPage = (): React.ReactElement => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Not a real page.</p>
  </Layout>
)

export default NotFoundPage
