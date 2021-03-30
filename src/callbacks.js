const posts = [{title: 'Post One', body: 'this is post one'},{title: 'Post Two', body: 'this is post two'}]

function getPosts() {
  setTimeout(() => {
    posts.forEach((post)=>(console.log(post.title)))
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000);
}
 createPost({title: 'Post Three', body: 'this is post three'}, getPosts)
export async function task1(callback) {

    const result = await setTimeout(() => {
      (console.log('task1'))
    }, 3000);

  callback();
}

