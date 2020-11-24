export const editPost = (data) => {
//debugger;
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/posts/${data.id}`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json '
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(newPost => console.log(newPost)) //why is payload returning null??
    }
}