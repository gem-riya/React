import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Show = () => {
  const location = useLocation();
  const keyArr = Object.keys(localStorage);
  const user = location.state.user;
  return (
      <>
      <div class="p-3 mb-2 bg-success text-white">
      
    <div>
      {keyArr.map((obj) => {
        if (obj.includes(user)) {
          const arr = JSON.parse(localStorage.getItem(obj));
          const title = obj.substring(user.length);
          return (

              
            <div className="container ">
              <div className="card" style={{ width: "18rem" ,
              display: 'flex',
                    alignItems: 'right',
                    justifyContent: 'center',
                    marginTop:'5px',
                    float:"center"
              
              
              }}>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{title}</p>
                  

                  <div className="d-grid align-items-center ">
                    <button className="btn btn-primary">
                      <Link to={`/home/show/takeQuiz`} state={{ arr }}>
                        <span className="btn btn-secondary "  >ATTEMPT  </span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        
            
          );
        }
        return null;
      })}
    </div>
    </div>
    </>
  );
};

export default Show;
