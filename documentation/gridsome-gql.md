# Gridsome and GraphQL
## Overview
Unlike Gatsby, Gridsome handles GraphQL slightly differently. Partly because it doesn't use the built in GUI that GraphQL has. Other than that querying works the same way as you'd expect GraphQL would work and with how the schema is set up.

## GraphQL GUI diffs
So Gridsome looks like it uses Apollo's GQL GUI, and it looks a bit different. It still functions the same way and you still write queries and mutations the same way.

The big difference is that the documentation for your Schema are *a pop out tab on the right!* In addition, you can't just click through the Schema explorer to build your query out, you need to type it all out!

## Querying it from Vue templates
The other big difference is that we query our data quite differently. Gatsby gives us a nice React hook, or we call `graphql` with our query.

Gridsome on the other hand, has us doing the below with a `<page-query>`:
```xml
  <page-query>
  query Documentation {
    allDocs: allDocumentation {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
  </page-query>
```

This functionally looks the same as page querying with the `graphql` call, only we don't need to export it. Once GraphQl returns our query, we can then access it via the `$page` property inside whatever element we want like the below:
```xml
  <div v-for="edge in $page.allDocs.edges" v-bind:key="edge.node.id">
    <g-link v-bind:to="edge.node.path">
    {{ edge.node.title }}
    </g-link>
  </div>
```

## Extra GraphQL things
### Aliasing
We can alias queries and mutations to allow for quicker/ easier access. It's done like so:
```gql
# Write your query or mutation here
query Documentation {
  allDocs: allDocumentation {
    edges {
      node {
        id
        title
        path
      }
    }
  }
  documentation(id:"6da4e62dbdedd7ee83139fa1a7abe3b8" ) {
    id
    path
    title
  }
}
```