# Keystatic in Next.js

Note: Generated with `npm create @keystatic@latest`

This template shows how you can use Keystatic in a Next.js site that utilises
the `app` directory.

To setup:

```bash
pnpm i
```

To run:

```
pnpm dev
```

Admin UI: [http://127.0.0.1:3000/keystatic](http://127.0.0.1:3000/keystatic)

Homepage: [http://localhost:3000](http://localhost:3000)

# Main changes made

- Move source code to `/src`
- Add path alias `@/*` in `tsconfig.json`
- Configure NextJS to use page extensions and `withMarkdoc`
- Add folder structure `/common`
  - `/common/components` for common components
  - `/common/libs/keystatic` for Keystatic configuration
  - `/common/libs/markdoc` for Markdoc configuration
- Markdoc has been configured in the following way
  - Use custom tag (custom React component) `Button` which uses the common Button component
  - Use schemaPath so the config file is created in a custom directory
- Keystatic has been configured in the following way
  - 'Docs' collection to write a single `page.md` file in a folder i.e `/app/docs/[slug]/page.md`
  - 'Docs' collection to use `markdoc` with React component support (same Button component used in Markdoc config)

## What it does

1. Using `markdoc` NextJS integration, any `page.md` files created in `app` folder will auto-generate the route.
1. Using Keystatic CMS, we can create these `page.md` files in the Docs collection.
1. This closes the loop where Keystatic CMS will generate the `.md` files needed for Markdoc to auto-generate the route without needing `[slug].tsx` or `generateStaticParams`

## What's left

1. Customising the `.md` pages

- How do we use the yaml frontmatter for things like `generateMetadata`?
- Any other customisations like using `layout.tsx`

2. Trying out Keystatic's `github` or `cloud` mode

- How does the authentication work?
