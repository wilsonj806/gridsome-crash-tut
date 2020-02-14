<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <h1>Hello, world!</h1>
    <div v-for="edge in $page.allDocs.edges" v-bind:key="edge.node.id">
      <g-link v-bind:to="edge.node.path">
      {{ edge.node.title }}
      </g-link>
    </div>

  </Layout>
</template>

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

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
h1 {
  color: pink;
}
</style>
