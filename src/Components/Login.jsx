import Been from "../assets/Been.png";
const LoginPage = () => {
  return (
    <div className="container-fluid container-md d-flex align-items-center justify-content-center login">
      <div className="row w-100 rounded overflow-hidden">

        <div className="col-md-6 d-flex justify-content-center align-items-center ">
          <div className="p-5 form-container">
            <h2 className="text-center mb-4">Login</h2>

            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email or Name</label>
                <input 
                  type="text" 
                  id="email" 
                  className="form-control" 
                  placeholder="Enter email or name" 
                  required 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="form-control" 
                  placeholder="Enter password" 
                  required 
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>

        <div className="col-md-6 p-0">
          <img 
            src={Been} 
            alt="Cartoon Character" 
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
