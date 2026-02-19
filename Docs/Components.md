# Basic Set up

```
imports

interface Props{
  name: Type,
}

export default function Component({ props } : Props){
    //variables
    //functions
    //Hooks
    Return(
      //jsx
    );
};
```

# Hooks

## useState

to use this, `include { useState } from 'react';
syntax:

```
const [var, setVar] = useState(initial value);
```

then call `setVar(NewValue)` to change the value to var

you can move this state up to parent elements, and pass it down as props.
