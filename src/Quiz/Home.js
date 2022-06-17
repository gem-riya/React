import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const logout = () => {
    sessionStorage.removeItem("userInfo");
    navigate("/login");
    setIsLogin(false);
  };
  return (
    <>
      {!isLogin ? (
        navigate("/login")
      ) : (
        <div
          className="bg-image bg-co"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/yellow-rectangular-wooden-box-drawn-face-outline-with-chalk-blackboard_23-2147874007.jpg?w=2000')",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
         
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
   <button className="btn btn-danger" onClick={logout}>
          Sign Out 
   </button>
</div>
          <div className="row">
            <div className="col-sm-4 "></div>
            <div
              className="col-md-8 bg-white rounded"
              style={{ height: "50vh", width: "25vw", marginTop: "4vw" ,marginLeft: "20vw" }}
            >
              <div className="fw-bold fs-3 text-center text-success">
                QUIZ BUILDER APPLICATION 
              </div>
              <div
                className="d-flex flex-column justify-content-center "
                style={{ marginTop: "10vh" }}
              >
                <button className="btn btn-success">
                  <Link
                    to={`/home/QuestionsUpload`}
                    state={{ user: location.state.email }}
                  >
                    <span className="text-white ">Create</span>
                  </Link>
                </button>
                <br />
               

                <button type="button" className="btn btn-dark"> 

                  <Link
                    to={`/home/show`}
                    state={{ user: location.state.email }}
                  >
                    <span className="text-white">Show  Quiz</span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
