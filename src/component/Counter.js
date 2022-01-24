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
            nameName=""
            cols="60"
            rows="5"
            placeholder="task name"
          ></textarea>
          {/* <textarea
            nameName="border-none"
            cols="60"
            rows="10"
            placeholder="description"
          ></textarea> */}
          <div class="action-btn">
            <div class="right">
              <button>Add task</button>
              <button></button>
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
