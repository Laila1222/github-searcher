const URL = 'https://api.github.com/search/users?q=';

async function fetchUser (userName) {
  let response;

  response = await fetch (`${URL}${userName}`);
  if (response.status === 200) {
    return await response.json ();
  } else {
    return await response.statusText;
  }

  // if (response.status === 200) {
  //     return await response.json();
  // } else {
  //     return await response.statusText;
  // }
}

// async function fetchData (url) {
//    const response = await fetch (`${url}`);
//   //  console.log(response);
//    return await response.json()
// }

export {fetchUser};
