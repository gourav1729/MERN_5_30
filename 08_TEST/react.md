1) REACT LIFECYCLE METHODS

Lifecycle methods are special methods in class components that run during different phases:

Mounting (when component is created)

Updating (when component is updated)

Unmounting/CLEANUP (when component is removed)


➤ Main Methods:
constructor() → Initialization

componentDidMount() → Called after component is rendered.

componentDidUpdate() → Called when props/state change.

componentWillUnmount() → Cleanup work (like clear timers).


<!-- 
useEffect hooks -->


2) Class and Functional Components

Feature	  Class Component	Functional Component
Syntax	  class keyword	    Just a function
State	  this.state	        useState()
Lifecycle	Yes (with methods)	With hooks
Modern?	   Old way	          Recommended

3) useState and Hooks : useState allows you to create reactive variables inside functional components.

4) What are Keys in React? Can We Use Index as Key?
➤ Keys are unique identifiers used when rendering lists. Help React to identify which item changed/removed/added.
✅ Best: Use unique id ❌ Not recommended: Index, especially in dynamic lists (can cause bugs)


0  1  2  3  4  5  6  7 
10 12 13 14 50 70 20 100

5) Higher Order Components (HOC)
A function that takes a component and returns a new component with added functionality.


6) Performance Optimization in React
✅ Use React.memo()
✅ Use useMemo() and useCallback()
✅ Lazy load components  
✅ Split code
✅ Avoid prop drilling
✅ Use proper key in list rendering
✅ Minimize re-renders with shouldComponentUpdate or React.memo


7) Challenges in React
1. State management → Redux, Zustand
2. Forms → Formik, React Hook Form
3. Too many re-renders
4. PROP DRILLING > BUT WE HAVE SOLUTION OF CONTEXT 

8) What is React.memo()?
A higher order component that prevents re-rendering if props haven’t changed.

9) Conditional Rendering
if-else

ternary: isLoggedIn ? <Profile /> : <Login />

&& operator: isAdmin && <AdminPanel />

switch statements

10) All react hooks 

1. useEffect is a React Hook that lets you perform side effects in functional components. It’s the functional alternative to lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

Fetching data from an API

Subscribing to a service

Manually changing the DOM

Setting up a timer

Event listeners


useEffect(() => {})	Runs after every render
Use Case: Logging or animation update on every render


useEffect(() => {}, [])	Runs once (on mount)
Runs only once (like componentDidMount)
Use Case: Fetching API data, setting up event listeners, starting a timer on mount
Runs once after the component mounts.
Does not run again, even if state (message) changes.


useEffect(() => {}, [a, b])	Runs when a or b changes
provide simple examples and usecase
Use Case: Conditionally run effects like fetching data when a specific input changes. Search filter, form field monitoring


useRef() :
Returns a mutable ref object that persists across renders.
Used for accessing DOM elements or keeping mutable values without re-rendering.










