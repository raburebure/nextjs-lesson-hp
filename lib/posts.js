const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// jsonplaceholderから全てのデータを取得
export async function getAllPostData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

// idを取得
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 個別のデータを取得
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();
  return {
    post,
  };
}
