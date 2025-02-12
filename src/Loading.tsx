import "./Loading.css";
import loader from "./assets/loading.svg";

const Loading = () => {
  return (
    <div className="loading-mask">
      <img src={loader} alt="loading" />
    </div>
  );
};

export default Loading;