import { Oval } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-60">
      <Oval height={100} width={100} color="#4fa94d" visible={true} />
    </div>
  );
};

export default Loader;
