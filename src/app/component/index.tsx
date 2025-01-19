'use client'
export default function IndexComponent() {
   async function getUsers() {
     try {
       const res = await fetch(
         "https://cloudflare-next-7.pages.dev/api/helloworld"
       );
       const msg = await res.json();
       alert("worker: " + msg);
     } catch (e) {
         console.log(e);
         
       return 123;
     }
   }
    getUsers();
    return <>
        <div>
            hello
        </div>
        </>
}