import './App.css';
import Navbar from './compoent/Navbar'; 
import { FaAngleDown } from "react-icons/fa"; 
import {options1} from './assest/data.js';
import Navigation from './compoent/Navigation.js';
import Card from './compoent/Card.js';
import Recomanded from './compoent/Recomanded.js';
import Footer from './compoent/Footer.js';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";


function App() {
  return (
    <div className=''>
    <div className="bg-[#212731]">
      <Navbar />
    </div>
    <div className='max-w-[1024px] mx-auto my-10 p-1'>
       <p className=' text-[48px]'>B-+est Website builders in the US</p>
       <div className='flex justify-between   border-t-2 border-b-2 border-[#E1E4E6] text-[#4B5665] p-2 my-5'>
        <div className='flex gap-5 flex-wrap'>
          <div className='flex gap-2'><div className=' rounded-full border-black border'>✔️ </div> <p> Last Updated - February 22, 2020</p></div>
          <div className='flex gap-2'><IoIosInformationCircleOutline className='text-2xl'/><p>Advertising Disclosure </p> </div>
        </div>
        <div className='flex items-center'> <p>Top-Relevant</p><FaAngleDown /></div>
       </div>
       <div className='flex justify-between text-[#4B5665] my-5 '>
        {
          options1.map((item,index)=>{
            return(
                <p key={item}>{item}</p>
            )
          })
        }
       </div>
<Navigation />
<div className='flex-col mx-auto items-center '>
  <Card tag={"Best Choice"} icon={<FaTrophy />} Bulider={"Bulider 1"} number={1} rating={[9.8,"Exceptional"]} texts={[' WixPro 72-Inch Responsive Website Builder-','Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)','[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.']}/>
  <Card tag={"Best Value"} icon={<IoDiamondSharp/>} Bulider={"Bulider"} number={2} rating={[9.5,"Excellent"]} texts={[' SiteCraft 68-Inch Ultimate Web Design Studio-',' Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)','[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.']}/>
  <Card  Bulider={"Bulider 1"} number={3}  rating={[9.3,"Exceptional"]} texts={[ 'WixPro 72-Inch Responsive Website Builder-',' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)','[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.']}/>
  <Card Bulider={"CDK"} number={4}  rating={[9.1,"Very Good"]} texts={[' CDK Resposive Builder:',' An extensive library of widgets and apps, and detailed step-by-step guides','']}/>


</div>

<div className='my-10'>
  <p className=' text-2xl my-10'>Related deals you might like for</p>
  <div className='flex justify-center gap-2 flex-wrap'>
  <Recomanded />
  <Recomanded />
  <Recomanded />
</div>

</div>
{/* <div className='flex justify-between items-center mx-5 my-10'>
  <p className=' max-w-[398px] text-3xl'>Sign up and get exclusive special deals</p>
  <div className='flex'>
    <input type="text"  />
    <button className=' bg-[#1B88F4] rounded p-2 text-white'>Sign Up</button>
  </div>
  
</div> */}
    </div>
    <Footer />
    </div>
  );
  
}

export default App;
