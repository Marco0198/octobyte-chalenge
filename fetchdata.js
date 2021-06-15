function fetchdata() {
  fetch("https://fakestoreapi.com/products")
    .then((respond) => {
      if (!respond.ok) {
        console.log("Error");
      }
      return respond.json();
    })
    .then((data) => {
      console.log(data.data);
      const html = data
        .map((products) => {
          return `
          <div class="card">
          <img src= " ${products.image}" height="200" width="200"/>
          <div class="container">
                  <h4><b>${products.title}</b></h4>
                  <p>${products.category}</p>
                  <p>$${products.price}</p>
                  <span></span>
        </div>
        <button  id = " add-card" style='font-size:24px, margin-right: 50px' onclick =
          "addTocard()">Add Cart</button>
                  </div>
                  <div class="select">
                 	</div>
                   </section>
          `;
        })
        .join("");
      console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })

    .catch((error) => {
      +console.log(error);
    });
}
fetchdata();

function addTocard() {
  var noti = document.querySelector("h1");
  //var select = document.querySelector(".select");
  var button = document.getElementsByTagName("button");
  for (var but of button) {
    but.addEventListener("click", (e) => {
      var add = Number(noti.getAttribute("data-count") || 0);
      noti.setAttribute("data-count", add + 1);
      noti.classList.add("zero");
    });
  }
}
