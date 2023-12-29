// Higher Order Functions
// A higher order function is a function that does at least one
// of the following:
//  - ** Takes one or more functions as an argument (parameter)
//  - ** Returns a function as the result

import { posts } from "./posts.js";

posts.forEach((post) => {
  console.log(post);
});

const filteredPost = posts.filter((post) => {
  return post.code === "IDE";
});

console.log(filteredPost);

const mappedPost = posts.map((post) => {
  return post.mark * 7;
});

console.log(mappedPost);

const mapSum = mappedPost.reduce((carry, post) => {
  return carry + post;
});

console.log(mapSum);
