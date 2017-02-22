import {observable, autorun, whyRun} from "mobx";

let message = observable({
  title: "Foo",
  author: {
    name: "Michel"
  },
  likes: [
    "John", "Sara"
  ]
})

autorun(() => {
  let a = message.author.name;
  whyRun()
})

// message.title = 'Brant';

message.author.name = 'Brant';