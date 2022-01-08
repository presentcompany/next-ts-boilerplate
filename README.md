# Next TS

## Boilerplate Libraries

The boilerplate contains the following libraries

| Dependency                                                       | Version | Use              |
| ---------------------------------------------------------------- | ------- | ---------------- |
| [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) | 4.2.1   | Accessibiliy     |
| [@chakra-ui/react](https://chakra-ui.com/docs/getting-started)   | 1.6.4   | Styling          |
| [@emotion/react](https://emotion.sh/docs/introduction)           | 11.4.0  | Styling          |
| [@emotion/styled](https://emotion.sh/docs/introduction)          | 11.3.0  | Styling          |
| [typescript](https://www.typescriptlang.org/docs/)               | 4.3.4   | Types            |
| [axios](https://axios-http.com/)                                 | 0.21.1  | Requests         |
| [recoil](https://recoiljs.org/docs/introduction/installation)    | 0.3.1   | State Management |
| [react-query](https://react-query.tanstack.com/overview)         | 3.17.2  | Queries          |
| [next-seo](https://github.com/garmeeh/next-seo)                  | 4.26.0  | SEO              |
| [react-hook-form](https://react-hook-form.com)                   | 7.9.0   | Forms            |

## Other Libraries

Other libraries that may be of use

| Dependency                                                                 | Version | Use                                      |
| -------------------------------------------------------------------------- | ------- | ---------------------------------------- |
| [@next-auth/react-query](https://github.com/nextauthjs/react-query#readme) | 0.0.9   | Authentication                           |
| [next-joi](https://github.com/codecoolture/next-joi)                       | 2.2.1   | Route Validation                         |
| [next-useragent](https://github.com/tokuda109/next-useragent)              | 2.6.0   | Device Useragent                         |
| [joi](https://joi.dev/)                                                    | 17.4.0  | Form Validation Schema (Node + Browser)  |
| [yup](https://github.com/jquense/yup)                                      | 17.4.0  | Form Validation Schema (Browser focused) |

## Getting Started

The template is running on Yarn and uses an **.nvmrc** file.

To get started:

- Run `nvm use` to ensure you're running the correct Node version
- Run `yarn` to install dependencies
- After dependencies have been installed, run `yarn dev` to get it up and running locally

## Scripts

| Script            | What it does                                                                  |
| ----------------- | ----------------------------------------------------------------------------- |
| dev               | starts the application in development mode w/ lint concurrently               |
| build             | creates an optimised production build of your application                     |
| start             | starts the application in production mode. run `build` first before doing so. |
| export            | generates the static pages                                                    |
| gen:sitemap       | generates sitemap                                                             |
| gen:theme-typings | generates theme typings for Chakra UI theme                                   |
| cy:test           | runs cypress tests                                                            |
| cy:open           | runs cypress tests in browser                                                 |
| test              | runs Jest tests once                                                          |
| test:watch        | runs Jest tests in watch mode for changed files only                          |
| test:watch-all    | runs Jest tests in watch mode for all files                                   |

## ENV

### PUBLIC ENV

Environment files will be divided into 2 eg. `.env.development` and `.env.production`. These files should contain the following as an example:

- NEXT_PUBLIC_APP_NAME=My Project
- NEXT_PUBLIC_APP_PREFIX=MP
- NEXT_PUBLIC_BASE_URL=http://localhost:3000
- NEXT_PUBLIC_API=http://my-api.com
- NEXT_PUBLIC_GA_TRACKING_ID=123456

**Note that prefix `NEXT_PUBLIC` is required to make it available in the browser.**

And remember: **DO NOT COMMIT NOR PUSH THESE ENV FILES WITH SECRETS!** Finally, refer to [NextJS Env Variables Docs](https://nextjs.org/docs/basic-features/environment-variables) for further information if required.

## File Structure

### Overall Structure

```
project
|   .babelrc
|   .eslintrc.js
|   .gitignore
|   .nvmrc
|   .prettierignore
|   prettier.config.js
|   package.json
|   README.md
└───api
└───components
└───hooks
└───pages
└───theme

```

### Detailed Structure

```
project
|   .babelrc
|   .eslintrc.js
|   .gitignore
|   .nvmrc
|   .prettierignore
|   prettier.config.js
|   package.json
|   README.md
|
└───api
|   |   useMenuQuery.ts
|   |   index.ts
|   |   ...
|
└───components
|   |
│   └───common (all common, shared components)
│   │   Anchors.tsx
│   │   Typography.tsx
│   │   Buttons.tsx
│   │   Input.tsx
│   │   Labels.tsx
|   |   ...
|   |
│   └───pages (page specific components)
|   │   └───Home
|   |   │   |   Aside
|   |   |   │   └───styled (Styled Components that are only used in Aside if required)
|   |   │   |   |   AsideToggle.tsx
|   |   │   |   |   Aside.tsx
|   |   │   |   |   index.tsx
|   |   │   |   |   ...
|   |   │   |   |
|   |   |   │   └───state (Recoil State if required)
|   |   │   |   |   atoms.ts
|   |   │   |   |   selectors.ts
|   |   │   |   |
|   |   |   │   ...etc
|   |   |   │   index.tsx (export Aside, etc.)
|   |   │
│   │   MatchMedia.tsx
│   │   Layout.tsx
│   │   index.tsx
│   │
└───hooks
│   │   useRequest.ts
│   │   useTheForce.ts
│   │   ...
└───pages
│   │   _app.tsx
│   │   _document.tsx
│   │   Contact.tsx
│   │   News.tsx
│   │   index.ts
|   |   ...
└───theme (Chakra)
|   |
│   └───foundations
│       │   breakpoints.ts
│       │   colors.ts
│       │   fonts.ts
│       │   ...
|   |
│   └───components
│       │   anchors.ts
│       │   buttons.ts
│       │   ...
|   |
│   └───layers
│       │   hover.ts
│       │   focus.ts
│       │   ...
|   index.ts

```

### Components

The components directory consists of 2 main directories namely: common and pages whereby **common** houses all common components and **pages** houses page specific components.

### Writing Styled Components

Chakra allows for inline styling for components but at times, styles can grow fairly large. You can opt to use Styled Components instead via the **"@emotion/styled"** library. Create a directory named **styled** in the same directory as your functional React component and create your styled components there. A Styled Component looks something like so:

```ts
import styled from '@emotion/styled';
import AnchorLink from '../../AnchorLink';

type NavOptionAnchorProps = {
  selected?: boolean;
};

const NavOptionAnchor = styled(AnchorLink)<NavOptionAnchorProps>`
  position: relative;

  &:hover {
    &::before {
      height: 3px;
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: ${(props) => (!!props.selected ? '3px' : 0)};
    background: white;
    transition: height 250ms ease-out;
  }
`;

export default NavOptionAnchor;
```

Naming conventions would be the same as for React components eg. pascal case with and extention of tsx. All Styled Components must be with parent named "S" to signify that it is a Styled Component and also for tree-shaking purposes. To do this, create an export barrel (eg. index.tsx) and export them like so:

```ts
import NavOptionContainer from './NavOptionContainer';
import NavOptionAnchor from './NavOptionAnchor';

export const S = {
  NavOptionContainer,
  NavOptionAnchor
};
```

Where after, you can use in your Functional Component like so:

```ts
...
  return (
    <S.NavOptionContainer>
      <NavOptionAnchor href="/">My Homepage</NavOptionAnchor href="/">
    </S.NavOptionContainer>
  )
...
```

### React Query

For tips on typing React Query, you can refer to this article [React Query And Typescript](https://tkdodo.eu/blog/react-query-and-type-script).

### Recoil

For state management, RecoilJS is used. Recoil states will be included within the same directory as the component that is using it. A piece of atom state and all its selectors to be within the same file. For example, below is a piece of atom state eg. `tableOfContentsState`. For this particular atom, we have a few selectors with a `with` prefix at the front followed by a description of what it is getting. The atom to be exported as default followed by, named exports of selectors.

```ts
import { atom, selector, selectorFamily } from 'recoil';

export default const tableOfContentsAtom = atom({
  key: 'tableOfContentsState',
  default: []
});

export const withTopLevelItems = selector({
  key: 'tableOfContentsTopLevelItems',
  get: ({ get }) => {
    const menuItems = get(tableOfContentsState);
    return menuItems.filter((m) => !m.parentId);
  }
});

export const withChildren = selectorFamily({
  key: 'tableOfContentsChildren',
  get:
    (openedParentIds) =>
    ({ get }) => {
      const menuItems = get(tableOfContentsState);
      const menuItemsCopy = cloneDeep(menuItems);
      const flatMenuItems = flatten(menuItemsCopy);

      return !!openedParentIds.length && !!flatMenuItems.length
        ? flatMenuItems.filter((menuItem) =>
            openedParentIds.some(
              (openedParentId) => menuItem?.parentId === openedParentId
            )
          )
        : [];
    }
});
```

Usage in another component may look like so:

```ts
import { useRecoilValue } from 'recoil';
import tableOfContentsAtom, { withTopLevelItems, withChildren } from "@/molecules/TableOfContents/state";

export default function SomeOtherComponent() {
  const tableOfContentsData = useRecoilValue(tableOfContentsAtom);
  const topLevelItems = useRecoilValue(withTopLevelItems);
  const childrenItems = useRecoilValue(withChildren);
  ...
}
```

### Dev Tools For Recoil

As of writing Recoil devtools are still in [beta](https://recoiljs.org/docs/guides/dev-tools/) however, [Atomos](https://www.getatomos.io/) is available to help you visualise your recoil state tree. Atomos is also available as a Chrome extension.

### Theme

Styles are powered by Chakra UI and Emotion for styled components. Important thing of note is that the **theme** directory will always be the single source of truth for style related things. Before creating a new component, consider whether if it needs to be defined in the theme directory and proceed accordingly.

The **theme** directory is where the Chakra-UI theme is found. As of writing it is comprised of 2 directories namely **components** and **foundations**. Below is a description what those directories house.

#### **Components**

The **theme/components** directory houses custom styles for components. An example would be the **theme/components/headings.ts** file. Here we create the base, variants or maybe sizing styles for those components.

#### **Foundations**

The **theme/foundations** directory is where custom style and or other configurations are kept. These configurations will then be used to override Chakra-UI's default theme.

## Notes And Other Instructions

### Setting Up Storybook

If you want to add Storybook to the project, simply run `npx sb init` and follow the prompts.

### Module Path Aliasing

There are 2 files of concern in regards to Module Path Aliasing which are **.eslintrc.js** and **tsconfig.json**. Both files are found at root and the path alias definitions are dictated by **tsconfig.json**.

```js
  // ./eslintrc.js
  // import/resolver will be required to resolve paths.
  // an empty object is passed to the "typescript" property to
  // instruct it to load from <rootdir>/tsconfig.json paths to eslint.

  "settings": {
    "import/resolver": {
      "typescript": {}
    },
  }
```

```js
  // ./tsconfig.json
  // in here, we define our paths under "compilerOptions"

  "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/components/*": ["components/*"],
        "@/hooks/*": ["hooks/*"],
        "@/theme/*": ["theme/*"]
        ...
      },
    ...
  }
  ...
```

### Custom Babel Config

You can add a custom babel config by simply creating a `babel.config.js` file. Example as follows:

```js
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react'
        }
      }
    ]
  ],
  plugins: [
    [
      '@emotion',
      {
        // *NOTE: sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        cssPropOptimization: true
      }
    ]
  ]
};
```

### Random errors

NextJS prebuilds a lot of content to a .next folder. This will often cause errors when changing a large amount of code. It can cause seemingly random errors.
To avoid this, delete the .next folder using `rm -rf .next`, or set up an alias using `alias redev='rm -rf .next && yarn dev'` in your .zshrc file. This will allow you to simply run `redev` instead of `yarn dev` and it will always clean out the .next folder.
