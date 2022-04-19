<template>
  <figure>
    <cite
      v-if="getBlockType() === 'cite'">
      <slot name="cite"></slot>
      {{ content }}
    </cite>

    <q
      v-else-if="getBlockType() === 'q'">
      <slot name="q"></slot>
      {{ content }}
    </q>

    <blockquote
      v-else-if="getBlockType() === 'blockquote'">
      <slot name="blockquote"></slot>
      {{ content }}
    </blockquote>

    <code
      v-else-if="getBlockType() === 'code'">
      <slot name="code"></slot>
      {{ content }}
    </code>

    <pre
      v-else>
      <slot name="pre"></slot>
      {{ content }}
    </pre>
  </figure>
</template>
