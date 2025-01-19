'use client'
export default function IndexComponent() {
   async function getUsers() {
     try {
       const res = await fetch(
         "/api/helloworld"
       );
       const msg = await res.json();
      alert("worker: " + msg.message);
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