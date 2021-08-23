# react-usetrackedstate

<a href="https://www.npmjs.com/package/react-usetrackedstate"><img src="https://img.shields.io/static/v1?logo=npm&message=react-useTrackedState"></a>


## How to use

### Installation

```shell
$ npm i react-usetrackedstate
```

```javascript
import useTrackedState from 'react-usetrackedstate'
function MyComponent(){
  const counter = useTrackedState(0)

  useEffect(() => {
    setInterval(() => {
      counter.value++;
    }, 1000);
  }, [])

  return (
      <p>{counter.value}</p>
  ) 
}
```
