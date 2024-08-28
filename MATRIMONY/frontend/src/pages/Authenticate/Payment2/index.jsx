import "./pay2.css";

const Pay2 = () => {
  return (
    <div className="anoop21">
      <div className="side1-8">
        <h1>Matrimony</h1>
        <h3>
          <i class="fa-solid fa-house"></i> Home
        </h3>
        <h3>
          {" "}
          <i class="fa-brands fa-facebook-messenger"></i> Message
        </h3>
        <h3>
          {" "}
          <i class="fa-solid fa-star"></i> Favorites
        </h3>
        <h3>
          <i class="fa-solid fa-bell"></i> Notifications
        </h3>
        <h3>
          {" "}
          <i class="fa-solid fa-gear"></i> Settings
        </h3>

        <h3 className="pro1-8">
          <i class="fa-solid fa-user"></i> Profile
        </h3>
      </div>
      <div className="pay22-1">
        <div className="nav22-1">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <h1>Add credit card</h1>
        <p className="p34">
          Name <br />
          <input type="text" name="" id="" />
        </p>

        <p className="p34">
          Credit card number <br />
          <input type="text" />
        </p>

        <button className="btn22-1">
          {" "}
          <img src="src/assets/Authentication/Vector.svg" alt="" />
          Scan card
        </button>
        <div className="flex1">
          <label htmlFor="">
            Express <input type="text" />
          </label>
          <label htmlFor="">
            CVV <input type="text" />
          </label>
        </div>
        <p className="p44">
          Debit cards are accepted at some locations and for some categories
        </p>
        <div className="image22-1">
          <img src="src/assets/Authentication/image 6.svg" alt="" />
          <img src="src/assets/Authentication/image 7.svg" alt="" />
          <img src="src/assets/Authentication/image 8.svg" alt="" />
          <img src="src/assets/Authentication/image 9.svg" alt="" />
        </div>
        <button className="btn44">ADD PAYMENT METHOD</button>
      </div>
    </div>
  );
};

export default Pay2;
