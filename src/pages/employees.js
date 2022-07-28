import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Employees = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulEmployeeInfo {
            edges {
              node {
                name,
                favoriteFood,
                favoriteHorse
              }
            }
          }
    }
  `)
=  return (
    <div>
        {data.allContentfulEmployeeInfo.edges.map(e => <div key={e.node.name}>{e.node.name}</div>)}
    </div>
  )
}

export default Employees