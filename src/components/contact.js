import { CONTACT_US_IMG } from "../utils/constants";

const Contact = () => {
  return (
    <div className="w-10/12 mx-auto mt-16 font-poppins">
      <img src={CONTACT_US_IMG} className=" w-[450px] float-right" />
      <h1 className="text-2xl my-2 font-poppins font-semibold">Contact Us</h1>
      <input type="text" placeholder="Name" className="w-3/12 border-2 border-gray-300 p-2 my-4 rounded-lg" required/><br/>
      <input type="text" placeholder="Email" className="w-3/12 border-2 border-gray-300 p-2 my-4 rounded-lg" required/><br/>
      <textarea placeholder="Message" className="w-3/12 h-[150px] border-2 border-gray-300 p-2 my-4 rounded-lg" required/><br/>
      <button className="w-1/12 my-4 bg-orange-500 text-white p-2 rounded-xl border hover:bg-white hover:border-orange-500 hover:text-black ">Submit</button>

    </div>
  );
}

export default Contact