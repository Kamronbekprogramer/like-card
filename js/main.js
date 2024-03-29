const API_URL = "https://fakestoreapi.com/users";
const productsSingle = document.querySelector(".users__single");
const notFound = document.querySelector(".not__found");
const wrapper = document.querySelector(".wrapper");


async function fetchData(api){
    let path = new URLSearchParams(window.location.search);
    let id = path.get("id");

    try {
        if (!id) {
            throw new Error("ID not found");
        }

        let getData = await fetch(`${api}/${id}`);
        let res = await getData.json();
        createCard(res);
    } catch (err) {
        console.log(err);
        document.querySelector(".not__found").style.display = "block";
    }
}

fetchData(API_URL);

function createCard(data){
    if (!Array.isArray(data)) { 
        throw new Error("Data is not an array");
    }

    let fragment = document.createDocumentFragment();
    data.forEach(product => {
        let card = document.createElement("div");
        card.innerHTML = `
        <div data-id="${product.id}">
                <img class="card__image" src="" alt="">
                <h2 class="card__title" title="${product.name.firstname} ${product.name.lastname}">${product.name.firstname} ${product.name.lastname}</h2>
                <p class="card__desc" title="${product.email}">${product.email}</p>
                <button name="product-wish">Like</button>
                <button>Cart</button>
            </div>
        `;
        fragment.appendChild(card);
    });
    wrapper.appendChild(fragment);
}

const singleRoute = (id) => {
    window.open(`/pages/users.html?id=${id}`, "_self");
};

const setWish = async (id) => {
    try {
        let getDa = await fetch(`${API_URL}/${id}`);
        let res = await getDa.json();
        let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
        if (res) {
            localStorage.setItem("wishes", JSON.stringify([...wishes, res]));
        }
    } catch (err) {
        console.log(err);
    }
};

wrapper.addEventListener("click", (e) => {
    let { name } = e.target;
    if (name === "product-image") {
        let id = e.target.closest("[data-id]").dataset.id;
        singleRoute(id);
    } else if (name === "product-wish") {
        let id = e.target.closest("[data-id]").dataset.id;
        setWish(id);
    }
});

// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__collection");
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show');
});
// ============= Navbar toggle END ================
