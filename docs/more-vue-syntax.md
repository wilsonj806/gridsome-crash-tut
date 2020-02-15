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

## Vue Slots
### Syntax Overview
Vue slots function in a very similar way as the [Web Components spec](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md) for them. It also sort of works the same way as `props.children` in React only in Vue, it's closer to how you'd expect HTML to work as you can stick arrays and objects into a ReactNode.

Slots in Vue let us do some wacky composition stuff, and it gets turned up to eleven in Gridsome.

For example, given the below navigation link component:
```xml
  <navigation-link url="/profile">
    Your Profile
  </navigation-link>
```

Within the actual `<navigation-link>` component, we have:
```xml
  <a
    v-bind:href="url"
    class="nav-link"
  >
    <slot></slot>
  </a>
```

So the `<slot>` gets replaced with the "Your Profile" text.

### Compilation Scope
The slot has access to any data declared inside the `<navigation-link>` component, BUT will not have access to any data that is **passed into** to the `<navigation-link>`.

So in the above example, we **do not** have access to the "/profile" value passed into our navigation link.

See the [Vue slots docs](https://vuejs.org/v2/guide/components-slots.html) for more.