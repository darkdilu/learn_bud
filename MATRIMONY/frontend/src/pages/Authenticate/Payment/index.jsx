import "./pay.css";

const Payment = () => {
  return (
    <div className="anoop20">
      <div className="side1-7">
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

        <h3 className="pro1-7">
          <i class="fa-solid fa-user"></i> Profile
        </h3>
      </div>
      <div className="pay1123">
        <div className="nav333">
          <label htmlFor="">
            <i class="fa-solid fa-xmark"></i>
          </label>{" "}
          {/* <h3>jj</h3> */}
          <h3>Done</h3>
        </div>
        <div className="pay19">
          <h1>payment methods</h1>
          <p className="p1-1">
            choose desired payment type.we offer easy ways for payment on our
            app
          </p>
          <div className="pay10">
            <img src="src/assets/Authentication/pay1.svg" alt="" />
            <div className="pay11">
              <h3>********876</h3>
              <p>Expires 09/24</p>
            </div>
          </div>
          <div className="pay10">
            <img src="src/assets/Authentication/pay1.svg" alt="" />
            <div className="pay11">
              <h3>********876</h3>
              <p>Expires 09/24</p>
            </div>
          </div>
          <div className="pay10-1">
            <img src="src/assets/Authentication/pay2.svg" alt="" />
            <div className="pay11">
              <h3>********876</h3>

              <p>Expires 09/24</p>
            </div>
          </div>
          <h3 className="meth">CURRENT METHOD</h3>
          <div className="pay10-2">
            <img
              className="im"
              src="src/assets/Authentication/pay3.svg"
              alt=""
            />
            <div className="pay11">
              <h3>Cash payment</h3>
              <p>Default method</p>
            </div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <button>Add payment method</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
