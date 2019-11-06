In each folder is a simple exercise please fork this repo and make the requested changes!

### Install requirements

You'll need the following to work with these exercises:

- nodejs [https://nodejs.org/en/](https://nodejs.org/en/)
- yarn [https://yarnpkg.com/lang/en/](https://yarnpkg.com/lang/en/)

### To Run

In each folder start by running 

`yarn add`

then after all packages are installed use

`yarn start` 

to run the app



# Test 1

The app is a simple counter - please refactor the App component to use a [React Hook](https://reactjs.org/docs/hooks-intro.html) and be a function instead of a class component

#####hint

```javascript
export default App = () => {

  const [counter, increment, decrement] = useCounter();

  return (
    <div></div>
  );
}
```

# Test 2

Integrate a new library into the project for selecting a date and time

library: (react datepicker)[https://reactdatepicker.com/]

# Test 3

Using the same date picker as Test 2 add a timer to the component to automatically add 1 second to the selected date time every second

Only start incrementing the date time AFTER they've selected a date time using the picker

#####hint **(there is a hidden bug in this hint)**

```javascript

const [currentDate, updateDate] = useState<Date>();

const addSecond = () => {
  if (!currentDate)
    return;

  updateDate(currentDate.setSeconds(currentDate.getSeconds() + 1));
}

setInterval(addSecond, 1);

return (
  <div></div>
)
```