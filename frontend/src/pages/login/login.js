import react from 'react';

const Login = () => {
    return (
      <div class="bg-gray-100">
        <main class="min-h-screen flex flex-col items-center justify-center">
          <div class="space-y-3 my-5">
            <h1 class="text-3xl font-extrabold ">Sing in to your Account</h1>
            <p class="text-center">
              or
              <a
                class="text-indigo-600 border-b border-indigo-600"
              >
                {" "}
                reqister your account{" "}
              </a>
            </p>
          </div>
          <div class="max-w-md w-full mx-auto bg-white rounded-lg p-7 space-y-7 ">
            <div class="flex flex-col">
              <label class="mb-1 text-sm" for="email">
                {" "}
                Email Address{" "}
              </label>
              <input
                class="border rounded-md px-3 py-2"
                type="email"
                name="email"
                id="email"
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
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <button class="w-full rounded-md bg-indigo-600 text-white py-2  ">
                Sing in{" "}
              </button>
            </div>
            <div class="relative pb-2 text-center">
              <div class="absolute top-0 left-0 w-full border"></div>
              <div class="absolute -top-3 left-0 w-full text-center"></div>
              <span class="bg-white px-3 text-gray-600">or continue Via </span>
            </div>
            <div>
              <div class="grid grid-cols-3 gap-3 text-center text-2xl">
                <div class="border-2 rounded-md p-3 cursor-pointer hover:border-gray-700">
                  <i class="fab fa-facebook-square"></i>
                </div>

                <div class="border-2 rounded-md p-3 cursor-pointer hover:border-gray-700">
                  <i class="fab fa-twitter-square"></i>
                </div>

                <div class="border-2 rounded-md p-3 cursor-pointer hover:border-gray-700">
                  <i class="fab fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}
 
export default Login ;