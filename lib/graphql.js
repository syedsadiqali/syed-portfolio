async function gql(query, variables = {}) {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "alisyed") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
					dateAdded
                }
            }
        }
    }
`;

export { gql, GET_USER_ARTICLES };
