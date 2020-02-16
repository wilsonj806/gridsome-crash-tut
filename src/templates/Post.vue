<template>
  <div class="post">
    <!-- Markdown content slots in here -->
    <h1>{{ $page.posts.title }}</h1>
    <h3>{{ $page.posts.author }}</h3>
    <p>{{ $page.posts.created_at }}</p>
    <p style="font-weight: 600;">Tags:</p>
    <div v-for="(tag, i) in $page.posts.tags" :key="i">
    <g-link :style="`background: ${tag.color}; border: 1px solid black`" :to="tag.path">{{ tag.id }}</g-link>
    </div>
    <VueRemarkContent>
      <template v-slot:ad>
        <Ad/>
      </template>
    </VueRemarkContent>
  </div>
</template>

<page-query>
query Posts($id: ID!) {
  posts(id: $id) {
    id
    author
    title
    path
    tags {
      id
      color
      path
    }
    created_at
  }
}
</page-query>

<script>
import Ad from '../components/Ad';

export default {
  components: {
    Ad
  }
}
</script>

<style scoped>
.post {
  margin: 0 auto;
  max-width: 65%;
}
</style>