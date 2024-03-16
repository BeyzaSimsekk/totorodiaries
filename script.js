//resimlerin ve blog yazılarım yazısının animasyonu
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
// let hill1 = document.getElementById('hill1');
// let hill4 = document.getElementById('hill4');
// let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value= window.scrollY;

    text.style.marginTop = value * 2 + 'px';
    leaf.style.top = value * -1 + 'px';
    leaf.style.left = value * 1 + 'px';
    // hill5.style.left = value * 1.5 + 'px';
    // hill4.style.left = value * -1.5 + 'px';
    // hill1.style.top = value * 1 + 'px';
});
//select bölümü --vazgeçtim, accordion ekleyeceğim.
// document.getElementById('selectblog').addEventListener('change', ()=> {
//     const selectedValue = this.value;
//     const selectedblogDiv = document.getElementById('selectedblog');

//     fetch(`blog_texts/${selectedValue}`)
//         .then(response => response.text())
//         .then(data => {
//             selectedblogDiv.innerHTML = `
//                 <h2>Seçilen Metin</h2>
//                 <p>${data}</p>
//             `;
//         })
//         .catch(error => {
//             console.error('Hata:', error);
//             selectedblogDiv.innerHTML = '<p>Hata oluştu. Metin alınamadı.</p>';
//         });
// });

//accordion bölümü --DÜZELTİLECEEK
// document.addEventListener("DOMContentLoaded", function() {
//     // Simulated data for blog posts
//     const blogPosts = [
//         { title: "Blog Post 1", content: "Content of Blog Post 1." },
//         { title: "Blog Post 2", content: "Content of Blog Post 2." },
//         { title: "Blog Post 3", content: "Content of Blog Post 3." }
//         // Add more blog posts as needed
//     ];

//     const accordionContainer = document.getElementById("accordion");

//     // Loop through the blog posts and create accordion items
//     for (let i = 0; i < blogPosts.length; i++) {
//         const blogPost = blogPosts[i];

//         const card = document.createElement("div");
//         card.classList.add("card");

//         const cardHeader = document.createElement("div");
//         cardHeader.classList.add("card-header");

//         const heading = document.createElement("h5");
//         heading.classList.add("mb-0");

//         const button = document.createElement("button");
//         button.classList.add("btn", "btn-link");
//         button.setAttribute("data-toggle", "collapse");
//         button.setAttribute("data-target", `#collapse${i}`);
//         button.setAttribute("aria-expanded", i === 0 ? "true" : "false");
//         button.setAttribute("aria-controls", `collapse${i}`);
//         button.textContent = blogPost.title;

//         heading.appendChild(button);
//         cardHeader.appendChild(heading);
//         card.appendChild(cardHeader);

//         const collapse = document.createElement("div");
//         collapse.id = `collapse${i}`;
//         collapse.classList.add("collapse");
//         collapse.setAttribute("aria-labelledby", `heading${i}`);
//         collapse.setAttribute("data-parent", "#accordion");

//         const cardBody = document.createElement("div");
//         cardBody.classList.add("card-body");
//         cardBody.textContent = blogPost.content;

//         collapse.appendChild(cardBody);
//         card.appendChild(collapse);

//         accordionContainer.appendChild(card);
//     }
// });

//scrollreveal animasyonu
const sr =ScrollReveal({
    distance:'65px',
    duration: 2000,
    delay: 450,
    reset : true
});

sr.reveal('.topline',{delay:200,origin:'top'});
sr.reveal('.multitext-p',{delay:200,origin:'top'});
sr.reveal('.multiT',{delay:200,origin:'top'});
sr.reveal('.imgbox',{delay:500,origin:'top'});
sr.reveal('.links i',{delay:200,origin:'right'});
sr.reveal('.logo0',{delay:30,origin:'left'});
sr.reveal('.navItems0',{delay:30,origin:'right'});
sr.reveal('.card',{delay:100,origin:'bottom'});
sr.reveal('#text',{delay:100,origin:'top'});
sr.reveal('.art-gallery',{delay:100,origin:'left'});
sr.reveal('.thumbnail',{delay:100,origin:'bottom'});


