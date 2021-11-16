import react, { useState  } from 'react';
import axios from 'axios';

const  Regiser = () => {

  const [userName , setUserName]=useState("")
  const [email , setEmail]=useState("")
  const [password , setPassword]=useState("")

  const handleSumbit = async () =>{
    try{
    const res = await axios.post("/auth/register" , {
      userName,
      email,
      password,
    });
    console.log(res);
  }catch (err){
    console.log(err)
  }
  };

  
    return (
      <div class="bg-gray-100">
        <main class="min-h-screen flex flex-col items-center justify-center">
          <div class="space-y-3 my-5">
            <h1 class="text-3xl font-extrabold ">Sing up to new Account</h1>
          </div>
          <div class="max-w-md w-full mx-auto bg-white rounded-lg p-7 space-y-7 ">
            <div class="flex flex-col">
              <label for="email" class="mb-1 text-sm">
                User Name
              </label>
              <input
                class="border round-md px-3 py-2"
                type="text"
                name="username"
                placeholder="Enter your username..."
                value={userName}
                onChange={e=>setUserName(e.target.value)}
              />
            </div>
            <div class="flex flex-col">
              <label class="mb-1 text-sm" for="email">
                {" "}
                Email Address{" "}
              </label>
              <input
                class="border rounded-md px-3 py-2"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your Email Address"
                onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div class="flex flex-col">
              <label for="email" class="mb-1 text-sm">
                Password
              </label>
              <input
                class="border round-md px-3 py-2"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <div>
              <button class="w-full rounded-md bg-indigo-600 text-white py-2" onClick={handleSumbit}>
                Sing up{" "}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
}
 
export default Regiser;