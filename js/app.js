// VANILLA JAVASCRIPT
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
   
    let input_val = document.querySelector("input.input").value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${input_val}`, 'true');
    
    xhr.onload = () => {
        const user_data = JSON.parse(xhr.responseText);
        input_val === user_data.login ? search() : not_found();

        function search() {
            document.getElementById("output").innerHTML = `

                <div class="d-grid mt-4 mb-4">
                    <div class="first_col">
                        <img src="${user_data.avatar_url}" class="w-100 h-100">
                    </div>
                    <div class="snd_col">
                    <h3 class="text-uppercase font-weight-600 text-white m-0 letter-spacing-2">ID: ${user_data.id}</h3>
                    <h2 class="text-capitalize font-weight-400 text-white letter-spacing-2 m-0">Name: ${user_data.login}</h2>
                    <h2 class=" font-weight-400 text-white letter-spacing-2 m-0">URL: ${user_data.url}</h2>
                    </div>
                </div>

                `
        }

        function not_found() {
            document.getElementById("output").innerHTML = `
                    <h2 class="text-uppercase text-dark font-weight-400">User Not Found!</h2>
                    `
        }
        }
    xhr.send();
    e.preventDefault();
});