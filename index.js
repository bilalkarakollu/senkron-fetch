import axios from "axios"


const getFetch = async (userId) => {
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    console.log(user)

    const {data:userPost} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    console.log("posts", userPost)
}

export default getFetch;


