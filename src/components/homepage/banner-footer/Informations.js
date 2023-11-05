const Informations = () => {
  return (
    <div className="my-5">
      <div className="row mb-5 bg-light py-5">
        <div className="col text-center">
          <span className="fs-3">FREE SHIPPING</span>
          <p className="fw-light fs-5">Free shipping worlwide</p>
        </div>
        <div className="col text-center">
          <span className="fs-3">24 X 7 SERVICE</span>
          <p className="fw-light fs-5">Free shipping worlwide</p>
        </div>
        <div className="col text-center">
          <span className="fs-3">FESTIVEL OFFER</span>
          <p className="fw-light fs-5">Free shipping worlwide</p>
        </div>
      </div>
      <div className="row">
        <div className="col ps-4">
          <span className="fs-2 align-self-stretch">LET'S BE FRIENDS!</span>
          <p className="fw-light fs-5 align-self-stretch">
            Nisi nisi tempor consequat laboris nisi.
          </p>
        </div>
        <form className="col-5 d-inline-block ">
          <input
            placeholder="Enter your email address"
            className="ps-4 h-75 w-75"
          />
          <button className="bg-dark text-white fw-light h-75 w-25">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Informations;
