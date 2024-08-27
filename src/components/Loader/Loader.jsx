// import { Hairball, HairballPreset } from "react-loader-spinner/dist/beta";
import { Vortex } from "react-loader-spinner";
import style from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={style.loader}>
      {/* <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["rgb(245, 112, 11)", "rgb(122, 56, 6)"]}
      /> */}
      <Vortex
        visible={true}
        height="180"
        width="180"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default Loader;
