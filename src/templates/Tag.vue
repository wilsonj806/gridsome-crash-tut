<template>
  <div>
    <h1>{{$page.tag.id}}</h1>
    <pre>
      {{ $page.tag }}
    </pre>
    <div v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
    </div>
  </div>
</template>

<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    id
    belongsTo {
      edges {
        node {
          ...on Posts {
            id
          	title
            path
        	}
        }
      }
    }
  }
}
</page-query>
<script>
export default {

}
</script>

<style>

</style>