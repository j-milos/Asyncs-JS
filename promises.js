const posts=[
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body:'This is post two'}
]

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index)=>{
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000); 
}

 function createPost(post){
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            posts.push(post);
            const error=false;

            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong')
            }
         }, 2000);
    }); 
}
// createPost({title:'Post Three', body:'This is post three'})
// .then(getPosts) 
// Nema vise callbecka, nego sada koristimo .then umesto callbecka i nalazemo mu da izvrsi getPost funckiju
// Znaci prvo pokrece tajmer i cim odradi resolve onda zove funckiju getPosts
// .catch(err=>console.log(err));

// Uglavnom se srecemo sa responsom nego sto cemo da pravimo kao ovde, ali ovako se pravi(new Promise)





// Async / Await

// async function init(){
//    await createPost({title:'Post Three', body:'This is post three'});
//    getPosts();
// }

// init();

// Moramo da imamo funkciju koja je nazvana async ako hocemo da koristimo await
// Cekamo (await) da createPost bude gotovo da bi onda pozvali getPosts()







// Async / Await with fetch

async function fetchUsers(){
    const res= await fetch('https://jsonplaceholder.typicode.com/users')

    const data= await res.json();

    console.log(data);
}

fetchUsers();

// Lepsi nacin da se odradi promis da ne bi koristili .then , posebno kada imamo fetch onda izgleda dosta lepse jer imamo promenljive i sve ide jedno za drugim. Bolje je i od callback-a







// Promise.all

// const promise1=Promise.resolve('Hello world');
// const promise2=10;
// const promise3=new Promise((resolve, reject)=> setTimeout(resolve, 2000, 'Goodbye'));
// const promise4= fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json()); 

 // Prvi .then formatira u json a drugi .then vraca vrednost
// fetch Api koji obavalja ajax call ili http request koji vraca promis

// Promise.all([promise1, promise2, promise3,promise4]).then(values => console.log(values));

// Ako imamo dosta razlicitih promisa, da ne bi pisali .then .then .then... onda umesto toga pisemo promise.all
// Trebace mu koliko je najduzi promis da bi prikazao vrednosti(u nasem slucaju 2000(milisekundi))
