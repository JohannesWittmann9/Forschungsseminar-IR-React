import useScript from "../../hook/useScript";

const SearchEngine2 = () => {
  const gcse_url= "https://cse.google.com/cse.js?cx=83888686aa3ed4586"
  useScript(gcse_url);
  
  return (
    <div id="normal-se">
      <div className="gcse-search"></div>
    </div>
  );
};

export default SearchEngine2;
