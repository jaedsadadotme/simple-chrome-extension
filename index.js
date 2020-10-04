const results = document.querySelector(".blog-content");
const api = "https://jaedsada.me/api/getName";

const getBlog = async (Tag) => {
    try {
      const response = await axios.get(`${api}`);
      let articles="";
      (response.data.datas).map(data=>{
        articles+=`
        <li>
        <a class="text-dark" target="_blank" href="https://jaedsada.me/${data.href}">
        ${data.name}
        <br>
        </a>
        <a class="text-dark" target="_blank" href="https://jaedsada.me/blogs/${data.title}">
        <span class="badge badge-info">${data.title}</span>
        </a>
        </li>
        `;
      })
      results.innerHTML=articles;
    }
    catch (error) {
      console.log("error",error)
    }
  };
window.onload = async function () { 
  await getBlog();
}
  // // declare a function to handle form submission
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   getposts(tags);

  // };
  // search.addEventListener("submit", e => handleSubmit(e));