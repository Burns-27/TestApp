# Where to put

alongside each component, include a stories file, ex:

```
  components/
├─ Button/
│  ├─ Button.js | ts | jsx | tsx | vue | svelte
│  ├─ Button.stories.js | ts | jsx | tsx | svelte
```

# Component Story Format

## Default Export

controls how storybook lists your stories and provides info used y addons

```

import type { Meta } from '@storybook/react-vite';

import { "component" } from './"component"';

const meta = {
  component: "component",
} satisfies Meta<typeof "component">;

export default meta;
```

## Building a story

First you follow the export listed above, then you define the story using the following code under the export

```
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders `<Button primary label="Button" />`
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
```

Can use ^ to define stories with different appearance

# Not using Story book
