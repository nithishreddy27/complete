import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useUser } from "../../lib/hooks";
import { useRouter } from "next/router";
import ResumeContext from "../../context/ResumeContext";
import { TbPlus } from "react-icons/tb";

const Home = (props) => {
    const { details, setdetails, setdemo, demo ,id,setid } = useContext(ResumeContext);
    const arr = props.done;
    const [open, setOpen] = useState(false);
    const l = [];
    const [type, setType] = useState("free");
    const [design, setDesign] = useState("all");
    const [role, setRole] = useState()
    const [checked, setchecked] = useState(false)
    
    const user = useUser();
    
    
    const router = useRouter()


    const q = router.query


    async function createResume(resumeId){

      var pro


      if(checked){
          var data = await fetch("/api/changePublic",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email : user.email }),
        })
      }
      else{
          pro = {
          id:resumeId,
          publicResume:false,
          personal: {
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
            email: user.email,
            role: role,
            image: "",
            dob: "1985-11-01",
            phone: user.phone.value,
            objective: "",
          },
          social: [
            // {
            //   network: "Instagram",
            //   username: "tim_j",
            //   url: "https://www.instagram.com/tim_j/",
            //   enabled: true,
            // },
          ],
          work: [
            // {
            //   company: "Kell Tech",
            //   from: "2022-03-12",
            //   to: "2024-08-10",
            //   designation: "Senior Development Engineer",
            //   website: "http://www.kelltech.com",
            //   summary: {
            //     data: "- Utilized Cloud Foundry for efficient building on top of Kubernetes.\n- Supported testing and engineering processes.",
            //     enabled: true,
            //   },
            //   enabled: true,
            // },
          ],
          education: [
            // {
            //   institution: "University of Pennsylvania",
            //   fieldOfStudy: "Computer Science",
            //   typeOfDegree: "Master of Science",
            //   startDate: "2015-04-10",
            //   endDate: "2018-06-10",
            //   gpa: "7.5",
            //   summary: {
            //     data: "Completed MS in the field of Computer Science",
            //     enabled: true,
            //   },
            //   enabled: true,
            // },
          ],
          awards: [
            // {
            //   name: "Best performer Award",
            //   awarder: "Kell Tech",
            //   date: "2021-09-21",
            //   summary: {
            //     data: "Recieved an award for best performance for the term.",
            //     enabled: true,
            //   },
            //   enabled: true,
            // },
          ],
          skills: [
            // {
            //   name: "ReactJS",
            //   level: "Beginner",
            //   enabled: true,
            // },
          ],
          languages: [
            // {
            //   name: "English",
            //   fluency: "Professional",
            //   enabled: true,
            // },
          ],
          hobbies: [
            // {
            //   name: "Solving puzzles",
            //   enabled: true,
            // },
            // {
            //   name: "Travelling",
            //   enabled: true,
            // },
          ],
          certifications: [
            // title: "Oracle Java Certifications Associate Professional",
            // date: "2014-09-18",
            // issuer: "Udemy",
            // summary: {
            //   data: "Completed a course on Java and built a project at the end of the course",
            //   enabled: true,
            // },
            // enabled: true,
          ],
          projects: [
            // {
            //   name: "Gaming AI",
            //   from: "2017-08-03",
            //   to: "2018-11-15",
            //   website: "http://github.com/gameai",
            //   summary: {
            //     data: "Worked with IT team to create an AI based gaming application for the modern gamers",
            //     enabled: true,
            //   },
            //   enabled: true,
            // },
          ],
        };
      }
        
        const body={
            email:user.email,
            resume:pro
        }
        console.log("in run",document.getElementById("publicResume").value)
        

        

        var data = await fetch("/api/testResume",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ resume : body }),
        })
        
        router.push("/resume")
    }
   
    useEffect(()=>{
      console.log('cj',checked)
    },[checked])

  return (
    
    <div>
      <div>
        <div className="border-b border-gray-300 py-2 fixed top-[-8px] w-[100%] z-40 bg-slate-50">
            <Navbar/>
        </div>
      </div>
      
      {user && (
        <div className="h-screen absolute top-[80px]">
          <h1 className="mt-10 p-2 font-bold text-gray-900 text-lg text-center sm:text-3xl md:text-4xl">
            welcome{" "}
            <b className="text-orange-600 tracking-wide">
              {user.profile.firstName} !
            </b>{" "}
            pick your template{" "}
          </h1>
          <div className="mb-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-md md:mt-2 md:text-lg md:max-w-3xl text-center">
            <p>
              Each resume template is expertly designed and follows the exact
              "resume rules" hiring{" "}
            </p>
            <p>
              managers look for.Stand out and get hired faster with field-tested
              resume template
            </p>
            <select
              id="tabs"
              name="tabs"
              className="md:hidden block w-full focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md mt-8"
            >
              <option>All templates</option>
              <option>Simple</option>
              <option>Creative</option>
              <option>Company</option>
              <option>MBA</option>
            </select>
          </div>
          <div className="hidden md:block">
            <nav className="my-10 flex">
              <a
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:border-gray-300 active:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer"
                onClick={() => setDesign("all")}
              >
                all templates
              </a>
              <a
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer"
                onClick={() => setDesign("simple")}
              >
                Simple
              </a>
              <a
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer"
                onClick={() => setDesign("creative")}
              >
                Creative
              </a>
              <a
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer"
                onClick={() => setDesign("company")}
              >
                Company
              </a>
              <a
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer"
                onClick={() => setDesign("mba")}
              >
                MBA
              </a>
            </nav>
          </div>

          <div className="grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mt-5 blur-[0.75px]">
                {/* <div className='rounded-md bg-black h-96 w-64 m-5 cursor-pointer relative'  key={data._id}>
            <div className=' text-4xl text-white font-semibold tracking-wider text-center '><span className='absolute z-40'>Name </span> </div>
            <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png" alt=""  className='h-[100%] w-[100%] opacity-50'/>

          </div> */}

            {arr.map((data) => {
              if (design == "all" || data.ResumeDesign == design) {
                l.push(data);
              }
            })}
            {
              // l.map((data)=>(
              //        <Link href={`resume/${data.ResumeDesign}/${data.ResumeName}`} className='rounded-md bg-black h-96 w-64 m-5 cursor-pointer relative' key={data._id} >
              //        <div className=' text-4xl text-white font-semibold tracking-wider text-center '><span className='absolute z-40'>{data.ResumeName} </span> </div>
              //        <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png" alt=""  className='h-[100%] w-[100%] opacity-50'/>

              //      </Link>
              l.map((data) => (
                <div key={data._id} onClick={()=>{
                  setid(data._id)
                  // runMe(data._id) 
                  }}>
                  <div  className="rounded-md bg-gray-100 h-auto  w-63 p-5 m-5 cursor-pointer relative">
                    <div className="opacity-80">
                      <img src={data.ResumeImage}/>
                    </div>
                    <div className="absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-200  bg-opacity-70 rounded-full p-1">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAVJJREFUWEftl+FNAzEMhb9OQDcoTECZoGwAbNANoBMAEwAbsEFhAzYANigbwAStXuVKEbqLz7lWOlXxv1MSv68vTuKOGFiMBsbDUQGdArfAJTA1p7+AD+AFWJW4X+rQHfDkCGqOwEJRAvRsznQREpDAOkcU6BpYJtm/gQdAW6XQ1un7PJlzA7x1JYoCqS4mlvwdEGBTCODKBrTm7BBA+vWflvgPUFH/tgiNrahPbPwicTHLFnEoLeScOztBnbaZfSwA1Z4bESDVxr1lfLRayQlE529zVSBvz6pDfR3SydB9oiO+j9Cd9AroUDRGbssiT0QUtvWU5oB06e0utqigN7/19s4Brb2sPccbtStQ4mp1yCux6lB1yHPAG681dPwOHfJx/WlraXJvWdqke/ZHx4vaD4kIap78OYwK/58vZ9SgKW+4QesrXrQ+0uQXCUQXDQ5oA5cjSCVYiqWCAAAAAElFTkSuQmCC" />
                    </div>
                    <div className=" text-2xl p-3 text-center   font-semibold">
                      {data.ResumeName}{" "}
                    </div>
                  </div>
                </div>
              ))
            }

            {/* <Link href={`resume/${data.ResumeDesign}/${data.ResumeName}`} className='  rounded-md bg-black h-96 w-64 m-5 cursor-pointer relative' key={data._id} >
             <div className=' text-4xl text-white font-semibold tracking-wider text-center '>
              hjedbfuethu4h
              <span className='absolute z-40'>{data.ResumeName} </span> 
             </div>
          
             <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png" alt=""  className='h-[100%] w-[100%] opacity-50'/>
     
           </Link> */}
          </div>
          <div className="text-gray-500 text-center my-[58%] text-3xl font-semibold">
                CREATE
                <div className=" flex justify-center "><TbPlus/></div>
                <input type="text" name="role" id="role" className='border' required placeholder='enter role' onChange={(event)=>{setRole(event.target.value)}}/>

               {/* <Link href="/resume/resumes">Submit</Link> */}
               <input type="checkbox" name="publicResume" id="publicResume" onChange={()=>{setchecked(!checked)
                }}/>
               <button className="mx-2" onClick={()=>{createResume(id)}}>Submit</button>
              </div>
        </div>



      )}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/Resume/searchResume");
  const data = await res.json();
  var o = data[0];
  // console.log("student",o.ResumeName)
  return {
    props: {
      done: data,
    },
  };
};
