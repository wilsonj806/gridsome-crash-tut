<template>
  <div class="post">
    <!-- Markdown content slots in here -->
    <h1>{{ $page.posts.title }}</h1>
    <h3>{{ $page.posts.author }}</h3>
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