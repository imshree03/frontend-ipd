import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container ">
      <div className="main_container">
        <div className="col_1">
          <div className="row">
            <p>For Best</p>
            <p>
              <span>Medical</span> and <span>Health</span>{" "}
            </p>
            <p>Care</p>
          </div>

          <p>Join us and be a life saver for each other.</p>
          <div className="btn1">
            <button>
              <Link to="/upload">Try Now</Link>
            </button>
            <button>See Now</button>
          </div>
        </div>
        <div className="col_2">
          <div className="sqaure"></div>
          <div className="doctorImg">
            <img
              className="img1"
              src="/public/image/asset 0.jpeg"
              alt=""
              style={{ width: "354px", height: "180px" }}
            />
            <img
              className="img2"
              src="/public/image/asset 1.jpeg"
              alt=""
              style={{ width: "234px", height: "204px" }}
            />
            <img
              className="img3"
              src="/public/image/asset 2.jpeg"
              alt=""
              style={{ width: "234px", height: "204px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
