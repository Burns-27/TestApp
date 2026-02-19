Using Vitest and React test library for building tests

# installation

run these commands to install vite test and dependencies

```
npm install --save-dev @testing-library/react @testing-library/dom

npm install -D vitest
```

set up your config file

vitest.config.ts

```
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test:{
    enviroment:"jsdom"
  }
})
```

# test file

create file for each component you wish to test- component.test.tsx
include the imports and basic test contruction, then build your test within that.

## Imports

```
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import {expect, describe, it} from 'vitest'
import Component from './Component'
import "@testing-library/jest-dom/vitest";
```

optional for when needing to simulate a userEvent  
`import userEvent from "@testing-library/jest-dom/vitest";`

if you are needing to test a function, change the import from vitest to include fn

## basic test construction

```
describe("Component",()=>{
  it("description of test",()=>{
    //User declaration if needed
    Render(component)
    Elements
    Tests
  })
})
```

## Rendering Components

within your test, you need to render the component you wish to preform your test on.
you can pass on props, or leave them out to test for default values.
use the same rendering notation you would rendering it in another file.

## Elements

elements are the individual peices of the component you are going to use in testing, and what value you will be testing.
when identifying an element, if you are sure that it exists, or it is 100% always supposed to exist, use the getBy method of screen. if you want to ensure that it exists, or doesnt, use queryGetBy method.

to identify element:
-for form inputs `getByLabelText("text")`
-for things with role `getByRole("role", {name:/name/i})`

## Tests

The tests themesleves can have events, but all will have Expects.
Events are user inputs that you can simulate.
Expects are how you verify that the correct result

### Events

for simulating a user event, make the describe function async

include `const user = userEvent.setup()` before rendering components

then you can use the following code to replicate user input during a test

```
await user.event(options)
```

info for different events can be found [here](https://testing-library.com/docs/user-event/intro)

#### Common events

Click/touch a element

```
pointer([
  {keys:'[MouseLeft]', target: element}
])
```

key for touching '[TouchA]'

### Expects

Expect is where you are testing a element on the dom to have a specific result, being displayed, hosting a specific value, etc.

methods for comparison can be found [here](https://vitest.dev/api/expect.html)

### Mocks

to mock a return from an API, include this before the it of the test

```
beforeEach(()=>(
  global.fetch = vi.fn();
))
afterEach(()=>(
  vi.resetAllMock()
))
```

then inside your test,

```
global.fetch.mockResolvedValuesOnce({
  json: async()=>({Test Object}),
})
```

you can test for the waiting value, then also include

```
await waitFor(()=>(
  Expects
))
```

so that it tests for the resolved test

## testing Hooks

in your inclues, renderHook instead of regular render from testing-library/react

```
  const { result } = renderHook(()=>hookfunction(value));
  expect(result.current.var).tobe(value);
```

you can then test based off the hook itself from
act, or if including within a larger component, use regular events that are supposed to call it, and use result.current to get the value.
