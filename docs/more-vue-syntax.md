# Additional Vue Syntax
## Overview
An overview of whatever additional syntax that's used in the tutorial I'm watching.

## Shorthand syntax
Vue actually has shorthand syntax for a whole bunch of stuff, one for `v-bind` and one for `v-on`.

Whereas before for binding a key value, we'd need:
```xml
  <div v-bind:key="3">
  </div>
```

We can just remove the `v-bind` portion and just identify the attribute we want to bind a value to like so:
```xml
  <div :key="3">
  </div>
```

Same with `v-on`:
```xml
  <!-- Longhand -->
  <form v-on:submit="submitForm">
  </form>

  <!-- Shorthand -->
  <form @submit="submitForm">
  </form>
```

See the docs on [Syntax Shorthand](https://vuejs.org/v2/guide/syntax.html#Shorthands) for more.