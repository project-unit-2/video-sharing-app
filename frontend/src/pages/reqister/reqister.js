import react from 'react';

const  Regiser = () => {
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
                placeholder="Enter your Email Address"
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
              />
            </div>
            <div>
              <button class="w-full rounded-md bg-indigo-600 text-white py-2  ">
                Sing up{" "}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
}
 
export default Regiser;