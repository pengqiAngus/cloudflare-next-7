'use client'
export default function IndexComponent() {
   async function getUsers() {
     try {
       const res = await fetch(
         "https://my-first-worker.anguske2027.workers.dev/"
       );
       const msg = await res.json();
       alert("worker: " + msg);
     } catch (e) {
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