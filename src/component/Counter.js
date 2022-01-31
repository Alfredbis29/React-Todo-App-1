const Counter = () => {
  return (
    <div>
      <h1>Hello there and welcome</h1>
      <small>This is just a notice</small>
      {/* <h1 className="text-3xl font-bold text-yellow-300">Hello world!</h1> */}
      <button
        onClick={console.log("Start your store")}
        className="border-solid border-black bg-yellow-600 p-2 rounded ml-4"
      >
        Start
      </button>
      <br />

      <form action="">
        {
          <div className="w-50 h-50 p-5 rounded border-2 border-solid boder-gray m-10">
            <div>
              {/* <input
                placeholder="enter text"
                className="w-full focus:outline-none"
              /> */}
              <textarea
                placeholder="enter text"
                className="w-full focus:outline-none"
              ></textarea>
            </div>
            <div>
              <textarea
                placeholder="Description"
                className="w-full focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-content:space-between">
              <div>
                <button className="mt-5 bg-white text-[#D24C42] rounded border-gray border-2 h-18 w-18 ml-2">
                  Yesterday
                </button>
                <button className="mt-4 bg-[#f5f5f4] text-[#646464] border-gray border-2 h-18 w-14 rounded ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 stroke-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Inbox
                </button>
              </div>
              <div>
                {/* <span>
                  <ion-icon name="subway-outline"></ion-icon>
                </span>
                <span></span>
                <span>
                  <ion-icon name="subway-outline"></ion-icon>
                </span> */}
              </div>
            </div>
          </div>
        }
        <div class="start ml-7">
          <button className="border-2 border-gray bg-[#f87171] rounded ml-2 ">
            Addtask
          </button>
          <button className="border-2 border-gray bg-white ml-2 rounded text-center">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Counter;
