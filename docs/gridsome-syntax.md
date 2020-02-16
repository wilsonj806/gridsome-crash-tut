# Gridsome Syntax
## Overview
Gridsome lets you do some funky stuff. This is an overview of some of the syntax you'll find within the markdown and the Vues files.

The example used in this file is based on the content inside [introduction.md](../posts/introduction.md) and [index.md](../posts/index.md)

## Slots and markdown
Gridsome's Vue-remark plugin lets you use slots in conjunction with your Markdown pages. Looks like so:
```xml
  <template>
    <VueRemarkContent>
      <template v-slot:ad>
        <Ad/>
      </template>
    </VueRemarkContent>
  </template>
```

And then in the markdown:
```md
  Words words words
  <slot name="ad"/>
  Words words words
```

See the `introduction.md` file linked above along with `Post.vue` for an example of usage.

## Custom Layouts
You can also add a custom layout to your Markdown file, and in order to do that you need to specify it like so:
```md
---
  title: aaaa
  layout: ~/layouts/Sidebar.vue
---
```
Where `Sidebar.vue` is where we have a layout with a side bar like so:
```xml
  <template>
    <div>
    <div class="sidebar">
      <slot/>
    </div>
    <div class="sidebar2">
      <div style="border: 2px solid black">
        waaaa
      </div>
    </div>
    </div>
  </template>
```

And then when we render it, it'd render a component tree resembling the below:
```xml
<template>
  <div class="post">
    <!-- INJECTED AS THE PARENT OF THE REMARK CONTENT -->
    <Sidebar>
      <VueRemarkContent/>
    </Sidebar>
  </div>
</template>
```
Where our Sidebar component is rendered first, then our Remark content gets slotted into our Sidebar.

## Prop injection
NOTE: If you add a custom component to your markdown, YOU MUST ALSO SPEC "layout" WITH THE NESTED COMPONENT PROPERTY IN SUBSEQUENT MARKDOWN FILES.
- this is as of @gridsome/vue-remark v0.1.9

Props can be injected in a similar way but looks like so:
```md
---
title: My Post
author: Jane doe
layout:
  component: ~/layouts/Focus.vue
  props:
    color: pink
---
```
Where here, layout actually expands out into an object with nested values *component* and *props*. Props here is the list of props we want to inject into our custom layout(Focus.vue here) and component is the layout component we're using.

## Tagging and Referencing Nodes
Tagging collections is a bit more involved than what the tutorial series I'm using says it is. First let's go back to our `gridsome.config.js` file.

Adding a new Tag type is straight-forwards, but our Posts type won't know about our Tag type. So we need to relate Tags to Posts via the "refs" key like so:
```js
  {
    // again similar to Webpack loader configs
    use: '@gridsome/vue-remark',
    options: {
      // GraphQL type name
      typeName: 'Posts',
      // where to find your MD files
      baseDir: './posts',

      // URL to navigate to
      pathPrefix: '/posts',

      // Vue template location
      template: './src/templates/Post.vue',

      refs: {
        tags: 'Tag'
      }
    }
  },
```
This is analogous to adding a foreign key in SQL and lets you access Tags documents when you query for Posts like so:
```xml
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
    }
    created_at
  }
}
</page-query>
```

Then if we want to query the opposite thing, find Posts with the queried tag, we use the below:
```xml
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
```
Where we need to actually add `belongsTo` into our query and then a `... on Posts` deeper into that query tree.