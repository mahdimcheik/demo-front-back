# Front-end

1. creation projet
2. installation dependencies
3. creation "input" and onChange to fetch data from the back-end

```js
<input type="text " onChange={getUser} />
```

```js
const getUser = async (e) => {
  console.log(" avant la http ");
  try {
    const response = await axios.get(
      `http://localhost:5000/?id=${e.target.value}`
    );
    setUser(response.data);
  } catch (err) {
    console.error(err.response.data);
    setUser(undefined);
  }
};
```

###

# back-end

1. creation server
2. npm init
3. installing express
4. installing cors pour securiser l'api
5. creating routing
6. start the back-end "npm run dev"
