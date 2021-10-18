# Recoil

Recoil is a newish state management tool without the boilerplate of Redux and allows for flexible horizontal and vertical traversal as opposed to React's own base context API.

## Defining Recoil State

A single piece of state is known as an atom. To create a piece of state is simple:

```ts
import { atom } from 'recoil';

export const menusState = atom({
  key: 'menusState',
  default: []
});
```

To which after, you can use in your component like you would using React state:

```ts
import { useRecoilState } from 'recoil';
import { menusState } from "@/components/menus/state";

export default function SomeOtherComponent() {
  const [menus, setMenus] = useRecoilState(menusState);
  ...
}
```

## Creating Recoil Selectors

Sometimes, we want to manipulate state. We can use selectors for this for example, say we want to only get root menus.

```ts
import { selector } from 'recoil';

export const selectRootMenus = selector({
  key: 'selectRootMenus',
  get: ({ get }) => {
    const menuItems = get(menusState);
    return menuItems.filter((menu) => !menu.parentId);
  }
});
```

And then we can use in our component like so:

```ts
import { useRecoilValue } from 'recoil';
import { selectRootMenus } from "@/components/menus/state";

export default function SomeOtherComponent() {
  const menus = useRecoilValue(selectRootMenus);
  ...
}
```

## Passing arguments to selectors

You can also pass arguments to your selector like so:

```ts
import { selector } from 'recoil';

export const selectRootMenus = selector({
  key: 'selectMenusByPageId',
  get:
    (pageId) =>
    ({ get }) => {
      const menuItems = get(menusState);
      return menuItems.filter((menu) => menu.id === pageId);
    }
});
```

## Dev Tools

As of writing Recoil devtools are still in [beta](https://recoiljs.org/docs/guides/dev-tools/) however, [Atomos](https://www.getatomos.io/) is available to help you visualise your recoil state tree. Atomos is also available as a Chrome extension.

## Advanced Usage

For advanced usage and API documentation, please visit [RecoilJS](https://recoiljs.org/docs/introduction/getting-started/)
