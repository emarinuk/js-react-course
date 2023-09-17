function hello() {
  console.log("Hello World!")
}

hello();

// Arrow Function
const hello_arrow = (param1) => console.log(param1)

hello_arrow("Hey")

const foo = {
  num: 10,
  logNum: () => console.log(foo.num)
}

foo.logNum()
