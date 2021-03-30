const posts = [{title: 'Post One', body: 'this is post one'},{title: 'Post Two', body: 'this is post two'}]

function getPosts() {
  setTimeout(() => {
    posts.forEach((post)=>(console.log(post.title)))
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve()

      } else {
        reject('Error')
      }

    }, 2000);
  })
}

//single promise
// createPost({ title: 'Post Three', body: 'this is post three' })
//   .then(getPosts)
//  .catch(err => console.log(err))

// Async / Await
// async function init() {
//   await createPost({ title: 'Post Three', body: 'this is post three' })

//   getPosts();
// }

// init();

// Aync / Await / Fetch

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

fetchUsers();

 // Promis.all
// const promise1 = Promise.resolve('promise1');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//   setTimeout(resolve, 2000, 'Goodbye'))
//   const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

//   Promise.all([promise1, promise2, promise3, promise4]).then(values=>console.log(values))
