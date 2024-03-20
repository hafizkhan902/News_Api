const key='d55397ca227948f6bd5010c9cc74dbbe';
const blogContainer=document.getElementById("blog-container");


async function fetchRandomNews(){
    try{
        const apiUrl= "https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey="+key;
        const response = await fetch(apiUrl);
        const data=await response.json();
        console.log(data);
        console.log(await data.articles);
        return await data.articles;
ß
    } catch(error){
        console.error("Error fetching random news",error);
        return [];
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;

        const title = document.createElement("h2");
        const truncatedTitle=article.title.length>30? article.title.slice(0,30)+"....":article.title;
        title.textContent=truncatedTitle;

        const description = document.createElement("p");
        description.textContent = article.description;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click',()=>{
            window.open(article.url,"_blank");
        })

        blogContainer.appendChild(blogCard); // Append the blog card to the container

    });
}



(async ()=>{
    try{
        const articles=await fetchRandomNews();
        displayBlogs(articles);
    } catch(error){
        console.log("error fetching random news ",error)
    }
})();

























// const url="https://newsapi.org/v2/everything?q=tesla&from=2024-02-18&sortBy=publishedAt&apiKey="+key;
// const blogCard=document.querySelectorAll('.blog-card');
// const header=blogCard[2].querySelector('h2');

// let newsApi=async ()=>{
//     let promise = await fetch(url);
//     let data=await promise.json();
//    let head1= header.innerText=data.articles[6].title;
//    console.log(data)
    
// }
// newsApi();