async function get_info(){
    let response = await fetch('https://api.github.com/users/mjfru')
    let data = await response.json()
    console.log(data)
    // let git_info = document.getElementById('git_info')
    user_info.innerHTML = `
    <h4>${data.name} has ${data.followers} followers and follows ${data.following} other developers.</h4>
    <p>${data.name} has been a member since ${data.created_at}.</p>
    <img src="${data.avatar_url}" alt="${data.name}">
    `
}