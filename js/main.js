// const API_URL = " https://fakestoreapi.com/users"
// const productsSingle = document.querySelector(".users__single")
// const notFound = document.querySelector(".not__found")

// async function fetchData(api){
//     let path = new URLSearchParams(window.location.search)
//     let id = path.get("id")

//     let getData = await fetch(`${api}/${id}`)
//     getData 
//     .json()
//     .then(res => {
//         createSingle(res)
//     })
//     .catch(err => {
//         console.log(err)
//         notFound.style.display = "block"
//     })
// }
// fetchData(API_URL)

// function createCard(data){
//     let fragment = document.createDocumentFragment()
//     data.forEach(rroduct => {
//         let card = document.createElement("div")
//         card.innerHTML = `
//         <div data-id=${users.id}">
//                 <img class="card__image" src="" alt="">
//                 <h2 class="card__title" title="${users.title}">${users.title}</h2>
//                 <p class="card__desc" title="${users.description}">${users.description}</p>
//                 <button>Like</button>
//                 <button>Cart</button>
//             </div>
//         `
//         fragment.appendChild(card)
//     })
//     wrapper.appendChild(fragment)
// }

// const singleRoate = (id) => {
//   window.open(`/pages/users.html?id=${id}`, "_self");
// };
// const setWish = async (id) => {
//   let getDa = await fetch(`${API_URL}/${id}`);
//   getData
//     .json()
//     .then((res) => {
//       let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
//       if (index > 0) {
//         localStorage.setItem("wishes", JSON.stringify([...wishes, res]));
//       }
//     })
//     .cath((err) => {
//       console.log(err);
//     });
// };
// wrapper.addEventListener("click", (e) => {
//   let { name } = e.target;
//   if (name === "product-image") {
//     let id = e.target.closest("[data-id]").dataset.id;
//     singleRoate(id);
//   } else if (name === product - wish) {
//     let id = e.target.closest("[data-id]").dataset.id;
//     setWish(id);
//   }
// });


// // ============= Navbar toggle START ================
// const navbarCollection = document.querySelector(".navbar__collection")
// const navbarMenu = document.querySelector(".navbar__menu")

// navbarMenu.addEventListener("click", ()=>{
//     navbarCollection.classList.toggle('show')
// })
// // ============= Navbar toggle END ================


// const API_URL = "https://fakestoreapi.com/users";
// const productsSingle = document.querySelector(".users__single");
// const notFound = document.querySelector(".not__found");
// const wrapper = document.querySelector(".wrapper"); // wrapper elementini aniqlang

// async function fetchData(api){
//     let path = new URLSearchParams(window.location.search);
//     let id = path.get("id");

//     try {
//         let getData = await fetch(`${api}/${id}`);
//         let res = await getData.json();
//         createCard(res); // createCard funksiyasini to'g'rilang
//     } catch (err) {
//         console.log(err);
//         notFound.style.display = "block";
//     }
// }
// fetchData(API_URL);

// function createCard(data){
//     let fragment = document.createDocumentFragment();
//     data.forEach(product => { // data o'rniga productsSingle ishlatilgan
//         let card = document.createElement("div");
//         card.innerHTML = `
//         <div data-id="${product.id}">
//                 <img class="card__image" src="" alt="">
//                 <h2 class="card__title" title="${product.title}">${product.title}</h2>
//                 <p class="card__desc" title="${product.description}">${product.description}</p>
//                 <button name="product-wish">Like</button> <!-- nomlarni tekshirib to'g'rilang -->
//                 <button>Cart</button>
//             </div>
//         `;
//         fragment.appendChild(card);
//     });
//     wrapper.appendChild(fragment); // wrapper elementiga qo'shish
// }

// const singleRoute = (id) => { // singleRoute nomli funksiyada o'zgaruvchi nomini to'g'rilang
//     window.open(`/pages/users.html?id=${id}`, "_self");
// };
// const setWish = async (id) => {
//   try { // catch qismi to'g'rilandi
//     let getDa = await fetch(`${API_URL}/${id}`);
//     let res = await getDa.json(); // getData o'rniga getDa ishlatilgan
//     let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
//     if (res) { // index o'zgaruvchisi aniqlanmagan, shuning uchun ichidagi shart to'g'rilandi
//       localStorage.setItem("wishes", JSON.stringify([...wishes, res]));
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
// wrapper.addEventListener("click", (e) => {
//   let { name } = e.target;
//   if (name === "product-image") {
//     let id = e.target.closest("[data-id]").dataset.id;
//     singleRoute(id); // singleRoute funksiyasini chaqirish nomi to'g'rilangan
//   } else if (name === "product-wish") { // nom to'g'rilandi
//     let id = e.target.closest("[data-id]").dataset.id;
//     setWish(id);
//   }
// });


// // ============= Navbar toggle START ================
// const navbarCollection = document.querySelector(".navbar__collection");
// const navbarMenu = document.querySelector(".navbar__menu");

// navbarMenu.addEventListener("click", () => {
//     navbarCollection.classList.toggle('show');
// });
// // ============= Navbar toggle END ================


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
        notFound.style.display = "block";
    }
}
fetchData(API_URL);

function createCard(data){
    if (!Array.isArray(data)) { // Ma'lumotlar massivi emaslikni tekshirish
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
