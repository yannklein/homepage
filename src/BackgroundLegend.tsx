const BackgroundLegend = () => {
  return (
  <div className="background-legend background-legend-show">
    <i className="fas fa-circle-notch"></i> each torus edge is one Github
    commit I did today |<i className="fas fa-space-shuttle"></i> shows my
    resident country |<i className="fas fa-circle"></i>
    <i className="fas fa-circle" style={{ fontSize: '10px' }}></i>
    <i className="fas fa-circle" style={{ fontSize: '8px' }}></i>
    shows the time in my current location |
    <i className="fas fa-square-full" style={{ fontSize: '6px' }}></i>
    <i className="fas fa-square-full"></i>
    <i className="fas fa-square-full" style={{ fontSize: '10px' }}></i>
    show the on-going tech event in my city, hover over it
  </div>
  );
};

export default BackgroundLegend;