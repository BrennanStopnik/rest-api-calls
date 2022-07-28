let getButton = document.querySelector("#get");
let postButton = document.querySelector("#post");
let putButton = document.querySelector("#put");
let deleteButton = document.querySelector("#delete");

let url = "https://62e2d1d2b54fc209b88102a3.mockapi.io/users";

// Get

getButton.addEventListener('click', async () => {
    try {   
        let res = await fetch(url);
        // let res = await fetch(`${url}/200`);  // How to get a specific user.
        if (res.status >= 200 && res.status <= 299){
            let data = await res.json();
            console.log(data);
        } else {
            throw Error(`${res.status} | ${res.statusText} `);
        }
    } catch (error){
        console.log(error);
    }
    
})

// Adding a new user or whatever you want 

postButton.addEventListener('click', async () => {
    let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            id: "6",
            phoneNumber: "123-123-2345",
            State: "North Carolina",
            userName: "Turd_Burglar_McGee"
        }),
        headers: { "Content-Type": "application/json"}
    });
})

// Updates to the information in a specific user as specified by the "${url}/9"

putButton.addEventListener('click', async () => {
    let res = await fetch(`${url}/9`, {
        method: "PUT",
        body: JSON.stringify({
            phoneNumber: "999-888-7765",
            State: "California",
            userName: "HasBro_XL"
        }),
        headers: { "Content-Type": "application/json"}
    });
    let data = await res.json();
    console.log(data);
})

// Deletes the user or whatever data you're looking for. Needs "${url}/8" endpoint.

deleteButton.addEventListener('click', async () => {
    let res = await fetch(`${url}/8`, {
        method: "DELETE",
    });
    let data = await res.json();
    console.log(data);
})
