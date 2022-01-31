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
                placeholder="enter text"
                className="w-full focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-content:space-between">
              <div>
                <button className="mt-5 bg-white text-[#16a34a] rounded border-gray border-2 h-18 w-14 ml-2">
                  Today
                </button>
                <button className="mt-4 bg-[#f5f5f4] text-black border-gray border-2 h-18 w-14 rounded ml-2">
                  Inbox
                </button>
              </div>
              <div>
                <span>
                  <ion-icon name="subway-outline"></ion-icon>
                </span>
                <span></span>
                <span>
                  <ion-icon name="subway-outline"></ion-icon>
                </span>
              </div>
            </div>
          </div>
        }
        <div class="start">
          <button className="border-2 border-gray bg-[#f87171] rounded ml-3">
            Addtask
          </button>
          <button className="border-2 border-gray bg-white ml-3 rounded mt-3 text-center">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Counter;
