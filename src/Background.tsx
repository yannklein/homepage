const Background = () => {
  return (
    <>
      <div className="loading-mask">
        <img src="./assets/loading.svg" alt="loading" />
      </div>
      <div className="background"></div>
      <a href="#" target="_blank" className="event-cube-legend event-cube-legend-show">
        <p className="title"><i className="fas fa-calendar-day"></i></p>
        <p className="date"><i className="fas fa-clock"></i></p>
        <p className="place"><i className="fas fa-map-marker-alt"></i></p>
      </a>
      <div className="background-legend background-legend-show">
        <i className="fas fa-circle-notch"></i> each torus edge is one Github commit I did today |
        <i className="fas fa-space-shuttle"></i> shows my resident country |
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle" style={{fontSize: "10px"}}></i>
        <i className="fas fa-circle" style={{fontSize: "8px"}}></i>
        shows the time in my current location |
        <i className="fas fa-square-full" style={{fontSize: "6px"}}></i>
        <i className="fas fa-square-full"></i>
        <i className="fas fa-square-full" style={{fontSize: "10px"}}></i>
        show the on-going event in Tokyo tech, hover over it
      </div>
    </>
  );
};

export default Background;