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
        <div class="box-form">
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
              <button className="ml-5">Add task</button>
              <button className="ml-4">Cancel</button>
            </div>
            <div class="lefyt">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="start">
          <button class="add"></button>
          <button class="Cancel"></button>
        </div>
      </form>
    </div>
  );
};

export default Counter;
