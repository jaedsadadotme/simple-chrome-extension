const results = document.querySelector(".blog-content");
const api = "xxx";

const getBlog = async () => {
    try {
      const response = await axios.get(`${api}`);
      let articles="";
      (response.data.datas).map(data=>{
        articles+=`xxx`;
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