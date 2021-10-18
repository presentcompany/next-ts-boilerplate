# Styled Components

For React and NextJS projects, CSS styling is handled via styled components along with UI library Chakra UI.

## An example

Assuming the directory is as follows:

```
MyCustomComponent
│ └───styled
| │ └───MyStyledComponent.tsx
| │ └───index.tsx
│ │ MyCustomComponent.tsx
│ │ index.tsx
```

In MyCustomComponent, we will have the following:

```ts
import { ReactElement } from 'react';
import { S } from './styled';

type MyCustomComponentProps = {
  value: string;
};

export function MyCustomComponent({
  value
}: MyCustomComponentProps): ReactElement {
  return <S.MyStyledComponent>{value}</S.MyStyledComponent>;
}
```

While in the styled directory, as convention, styled components should be exported under the "S" variable to denote that it is a styled component.

```ts
// styled/index.tsx

import { MyStyledComponent } from './MyStyledComponent';

export const S = {
  MyStyledComponent
};
```

## Writing Styled Components with Emotion

As the Chakra UI library is built on top of Emotion, Emotion is opted to be used for creating styled components. There are a few ways to write styled components.

### Template String Literal

As implied, this is simply just using template string literal syntax.

```ts
// styled/MyStyledComponent.tsx

import styled from '@emotion/styled';
import { theme } from '@/theme/index';

export const MyStyledComponent = styled.div`
  display: block;
  margin: 0 auto;
  padding: 1em;
  max-width: 100%;
  width: 100%;
  background: ${theme.colors.brand['500]};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 2em;
  }
`;
```

### Object Based

This method will involve returning the styles as an object. Note that if it involves complex media queries, do not use this method.

```ts
// styled/MyStyledComponent.tsx

import styled from '@emotion/styled';

export const MyStyledComponent = styled.div(({ theme }) => ({
  display: 'block',
  margin: '0 auto',
  padding: ['1em', '1em', '2em'],
  maxWidth: '100%',
  width: '100%',
  background: theme.colors.brand['500],
}));
```

For passing custom props to your styled components, below is an example:

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
