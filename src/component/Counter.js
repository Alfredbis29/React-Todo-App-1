const Counter = () => {
  return (
    <div>
      <h1>Hello there and welcome</h1>
      <small>This is just a notice</small>
      <h1 className="text-3xl font-bold text-yellow-300">Hello world!</h1>
      <button
        onClick={console.log("Start your store")}
        className="border-solid border-black bg-yellow-600 p-2 rounded ml-4"
      >
        Start
      </button>
      <br />

      <form action="">
        <div>
          <textarea
            className="border-solid border-gray border-2 rounded mt-5 ml-5"
            cols="80"
            rows="5"
            placeholder="e.g by gift tomorrow at 6pm"
          ></textarea>
          {/* <textarea
            nameName="border-none"
            cols="60"
            rows="10"
            placeholder="description"
          ></textarea> */}
          <div class="action-btn">
            <div class="right">
              <button className="ml-5 bg-white text-[#16a34a] rounded border-gray border-2 h-18 w-14">
                Today
              </button>
              <button className="ml-4 bg-[#f5f5f4] text-black border-gray border-2 h-18 w-14 rounded">
                Inbox
              </button>
            </div>
            <div class="lefyt">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
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
