import fetch from "node-fetch";
import axios from "axios";

/*
    const getUsers = (number)=>{
    return new Promise(async(resolve, reject)=>{
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");

        resolve(data);
    });
};
*/

const getUser = (number) =>{
    return new Promise(async(resolve,reject)=>{
        const{data} = await axios("https://jsonplaceholder.typicode.com/users/1");
        resolve(data);
    });
};

const getPost = (number) =>{
    return new Promise(async(resolve,reject)=>{
        const{data} = await axios("https://jsonplaceholder.typicode.com/posts/1");
        resolve(data);
    });
};

Promise.all([getUser(1), getPost(1)])
      .then(console.log)
      .catch(console.log);


// (async () =>{
//     const user = await getUser(1);
//     const post = await getPost(1);

//     console.log(user);
//     console.log(post);

// })();
