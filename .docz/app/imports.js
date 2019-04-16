export const imports = {
  'blogs/nothing.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "blogs-nothing" */ 'blogs/nothing.mdx'
    ),
}
