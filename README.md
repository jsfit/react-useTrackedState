# react-usetrackedstate

<a href="https://www.npmjs.com/package/react-usetrackedstate"><img src="https://img.shields.io/static/v1?logo=npm&message=react-useTrackedState"></a>


## How to use

### Installation

```shell
$ npm i react-usetrackedstate
```
```shell
$ yarn add react-usetrackedstate
```

```javascript
import useTrackedState from 'react-usetrackedstate'
function MyComponent(){
  const counter = useTrackedState({ value: 0 })

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
<a href="https://codesandbox.io/s/react-usetrackedstate-bujiu">Codesandbox Example</a>
