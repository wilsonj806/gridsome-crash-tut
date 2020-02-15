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