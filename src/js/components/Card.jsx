function Card() {
  return (
    <div>
      <div className="card" style={{ width: "18rem"}}>
        <img src="https://placehold.org/500x325/" className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href="#" className="btn btn-primary">Boton</a>
        </div>
      </div>
    </div>
  );
}

export default Card;