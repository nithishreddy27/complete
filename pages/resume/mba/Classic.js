import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Classic() {
  const user = useUser();
  const { details, setdetails } = useContext(ResumeContext);

  useEffect(() => {
    if (user) {
      setdetails({
        ...details,
        personal: {
          ...details.personal,
          email: user.email,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
        },
      });
    }
  }, [user]);

  const [open, setopen] = useState("semiopen");

  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  return (
    <>
      {details && user && (
        <div className="flex">
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-gray-400 to-gray-600">
              <button
                className="h-10 w-10 mx-auto block lg:hidden"
                onClick={toggleResume}
              >
                DETAILS
              </button>
              <div className="flex justify-center ">




                {/* Small Resume */}




                <div className=" align-middle justify-center ">
  <div className="bg-gray-200 w-[100%]  ">
       <div className="space-x-2 m-4 border-separate">
         <div className="flex pt-3 pb-2 border-b-4 bg-white border-solid text-black  ">
           <img className="w-[20%] h-[30] p-3 pb-5 pl-7" src="https://randomuser.me/api/portraits/women/71.jpg"></img>
           {/* personal detail */}
           <div className="m-auto">
             <p className=" text-center text-black text-4xl tracking-widest font-serif m-4 mt-5 ml-8">
               {details.personal.firstName} {details.personal.lastName}</p>
             <p className="  text-2xl  text-black font-thin  tracking-wider mb-3 ml-10 ">
               {details.personal.role}</p>
           </div>
         </div>
       </div>
       <div className="m-3">
         <div className="flex gap-3 ">
           <div className=" min-w-[50%]">
             <div className=" m-4 ">
                <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">PROFILE</p>
                <p className="text-sm p-1 pt-4">{details.personal.objective}</p>
             </div>
             <div>
             {/* <span className=" bg-gray-800 text-white pt-1 p-1 rounded-sm">PERSONAL</span> */}
             
             {/* HOBBIES */}
             {details.hobbies.length != 0 && (
               <div className="m-3">
                <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">HOBBIES</p>
                {details.hobbies.map((item) => (
                   <div key={item.name} className="p-1 font-serif text-base font-bold pl-4">
                    <li>{item.name}</li>
                    <p>{item.enabled}</p>
                   </div>
                 ))}
               </div>
             )}

             {/* LANGUAGES */}
             {details.languages.length != 0 && (
             <div className="m-3">
               <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">LANGUAGES</p>
               {details.languages.map((item) => (
                <div key={item.name} className="pt-2 pl-4">
                  <li className="font-bold text-lg font-serif tracking-wide">{item.name} - {item.fluency}</li>
                  <p>{item.enabled}</p>
                </div>
               ))}
             </div>
             )}

             {/* EDUCATION */}
             {details.education.length != 0 && (
             <div className="p-2 ">
               <p className="bg-gray-800 tracking-widest text-center rounded-md text-white p-1 m-1 ">EDUCATION</p>

               {details.education.map((item) => (
                 <div key={item.institution} className="text-base p-2 pl-4">
                   <p className="font-semibold text-lg">{item.institution}</p>
                   <p className="text-sm">
                     {" "}
                     [{item.startDate}] - [{item.endDate}]
                   </p>
                   <p>{item.fieldOfStudy}</p>
                   <p>{item.typeOfDegree} {item.gpa}</p>
                   <p>{item.summary.data}</p>
                   <p>{item.summary.enabled}</p>
                   <p>{item.enabled}</p>
                 </div>
               ))}
             </div>
             )}

              {/* SKILLS */}
             {details.skills.length != 0 && (
             <div className="p-2 ">
               <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1">SKILLS</p>
               {details.skills.map((item) => (
               <div key={item.name} className="pt-2 pl-4 font-serif">
                 <li className="text-base font-semibold p-2">{item.name} - {item.level}</li>
                 <p>{item.enabled}</p>
               </div>
               ))}
             </div>
             )}
           </div>

           {/* {details.languages.length != 0 && (
           <div className="  p-3">
             <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1">
               PROJECTS
             </p>
             {resume.projects.map((item) => (
               <div className="p-1 ">
                 <Link href={item.website}>
                   <p className="font-bold text-lg tracking-wider">
                     {item.name}
                   </p>
                 </Link>
                 <p>{item.summary.enabled}</p>
                 <p>{item.enabled}</p>
               </div>
             ))}
           </div>
         </div> */}
       
         </div>
        <div className="  min-w-[50%] ">

      {/* NETWORK */}
      <div className="m-4">
         <>
           <h1 className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md ">NETWORK</h1>
           <div>
             <p className=" font-semibold text-md tracking-wider">{details.personal.phone}</p>
             <p className=" font-semibold text-md tracking-wider">{details.personal.email}</p>
           </div>
         </>
        
        {/* INTERNSHIPS */}
         {details.work.length != 0 && (
         <>
           <p className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md ">INTERNSHIPS</p>
           {details.work.map((item) => (
             <div key={item.company} className="m-2">
               <Link href={`{item.website}$`}><span className="font-bold text-lg font-serif tracking-wide">{item.company}<span className=" font-bold font-sans text-xs ml-9">[{item.from}] - [{item.to}]</span> </span></Link>
               <p className=" font-medium">{item.designation}</p>
               <p  className="">{item.summary.data}</p> 
               <p className="text-sm">{item.summary.enabled}</p>
             </div>
           ))}
         </>
         )}

         {/* AWARDS */}
         <div>
         {details.awards.length != 0 && (
           <div className="mt-5">
             <p className="bg-gray-800 tracking-widest rounded-md text-center  text-white p-1 m-1 ">AWARDS</p>
             {details.awards.map((item) => 
             (<div key={item.name} className=" m-2">
                 <p className="font-bold font-serif text-lg tracking-wide">{item.name} <span className=" font-bold font-sans text-xs ml-9">[{item.date}]</span></p>
                 <p className="font-medium">Awarder : {item.awarder}</p>
                 <p className="text-sm">{item.summary.data}</p>
                 <p>{item.summary.enabled}</p>
                 <p>{item.enabled}</p>
               </div>
             ))}
           </div>
         )}

         {/* CERTIFICATIONS */}
         {details.certifications.length != 0 && (
           <div className="mt-5">
             <p className="bg-gray-800 tracking-widest rounded-md mt-2 text-center text-white p-1 m-1 ">CERTIFICATION</p>
             {details.certifications.map((item) => (
               <div key={item.title} className="pl-2 pt-1">
                 <p className="font-semibold font-serif text-lg">{item.title} <span className=" font-bold font-sans text-xs ml-9">[{item.date}]</span> </p>
                 <p>{item.issuer}</p>
                 <p>{item.summary.data}</p>
               </div>
             ))}
           </div>
         )}
       </div>
       
     </div>
   
       </div>
    </div>
  </div>
</div>
</div>    
              </div>
            </div>
          )}

          {open == "semiopen" && (
            <>
              <SideBar/>
                
              <div
                className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex justify-center ">


                  
                  {/* large resume */}

                  <div className=" w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row align-middle justify-center ">
  <div className="bg-gray-200 w-[100%]  ">
       <div className="space-x-2 m-4 border-separate">
         <div className="flex pt-3 pb-2 border-b-4 bg-white border-solid text-black  ">
           <img className="w-[20%] h-[30] p-3 pb-5 pl-7" src="https://randomuser.me/api/portraits/women/71.jpg"></img>
           {/* personal detail */}
           <div className="m-auto">
             <p className=" text-center text-black text-4xl tracking-widest font-serif m-4 mt-5 ml-8">
               {details.personal.firstName} {details.personal.lastName}</p>
             <p className="  text-2xl  text-black font-thin  tracking-wider mb-3 ml-10 ">
               {details.personal.role}</p>
           </div>
         </div>
       </div>
       <div className="m-3">
         <div className="flex gap-3 ">
           <div className=" min-w-[50%]">
             <div className=" m-4 ">
                <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">PROFILE</p>
                <p className="text-sm p-1 pt-4">{details.personal.objective}</p>
             </div>
             <div>
             {/* <span className=" bg-gray-800 text-white pt-1 p-1 rounded-sm">PERSONAL</span> */}
             
             {/* HOBBIES */}
             {details.hobbies.length != 0 && (
               <div className="m-3">
                <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">HOBBIES</p>
                {details.hobbies.map((item) => (
                   <div key={item.name} className="p-1 font-serif text-base font-bold pl-4">
                    <li>{item.name}</li>
                    <p>{item.enabled}</p>
                   </div>
                 ))}
               </div>
             )}

             {/* LANGUAGES */}
             {details.languages.length != 0 && (
             <div className="m-3">
               <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">LANGUAGES</p>
               {details.languages.map((item) => (
                <div key={item.name} className="pt-2 pl-4">
                  <li className="font-bold text-lg font-serif tracking-wide">{item.name} - {item.fluency}</li>
                  <p>{item.enabled}</p>
                </div>
               ))}
             </div>
             )}

             {/* EDUCATION */}
             {details.education.length != 0 && (
             <div className="p-2 ">
               <p className="bg-gray-800 tracking-widest text-center rounded-md text-white p-1 m-1 ">EDUCATION</p>

               {details.education.map((item) => (
                 <div key={item.institution} className="text-base p-2 pl-4">
                   <p className="font-semibold text-lg">{item.institution}</p>
                   <p className="text-sm">
                     {" "}
                     [{item.startDate}] - [{item.endDate}]
                   </p>
                   <p>{item.fieldOfStudy}</p>
                   <p>{item.typeOfDegree} {item.gpa}</p>
                   <p>{item.summary.data}</p>
                   <p>{item.summary.enabled}</p>
                   <p>{item.enabled}</p>
                 </div>
               ))}
             </div>
             )}

              {/* SKILLS */}
             {details.skills.length != 0 && (
             <div className="p-2 ">
               <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1">SKILLS</p>
               {details.skills.map((item) => (
               <div key={item.name} className="pt-2 pl-4 font-serif">
                 <li className="text-base font-semibold p-2">{item.name} - {item.level}</li>
                 <p>{item.enabled}</p>
               </div>
               ))}
             </div>
             )}
           </div>

           {/* {details.languages.length != 0 && (
           <div className="  p-3">
             <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1">
               PROJECTS
             </p>
             {resume.projects.map((item) => (
               <div className="p-1 ">
                 <Link href={item.website}>
                   <p className="font-bold text-lg tracking-wider">
                     {item.name}
                   </p>
                 </Link>
                 <p>{item.summary.enabled}</p>
                 <p>{item.enabled}</p>
               </div>
             ))}
           </div>
         </div> */}
       
         </div>
        <div className="  min-w-[50%] ">

      {/* NETWORK */}
      <div className="m-4">
         <>
           <h1 className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md ">NETWORK</h1>
           <div>
             <p className=" font-semibold text-md tracking-wider">{details.personal.phone}</p>
             <p className=" font-semibold text-md tracking-wider">{details.personal.email}</p>
           </div>
         </>
        
        {/* INTERNSHIPS */}
         {details.work.length != 0 && (
         <>
           <p className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md ">INTERNSHIPS</p>
           {details.work.map((item) => (
             <div key={item.company} className="m-2">
               <Link href={`{item.website}$`}><span className="font-bold text-lg font-serif tracking-wide">{item.company}<span className=" font-bold font-sans text-xs ml-9">[{item.from}] - [{item.to}]</span> </span></Link>
               <p className=" font-medium">{item.designation}</p>
               <p  className="">{item.summary.data}</p> 
               <p className="text-sm">{item.summary.enabled}</p>
             </div>
           ))}
         </>
         )}

         {/* AWARDS */}
         <div>
         {details.awards.length != 0 && (
           <div className="mt-5">
             <p className="bg-gray-800 tracking-widest rounded-md text-center  text-white p-1 m-1 ">AWARDS</p>
             {details.awards.map((item) => 
             (<div key={item.name} className=" m-2">
                 <p className="font-bold font-serif text-lg tracking-wide">{item.name} <span className=" font-bold font-sans text-xs ml-9">[{item.date}]</span></p>
                 <p className="font-medium">Awarder : {item.awarder}</p>
                 <p className="text-sm">{item.summary.data}</p>
                 <p>{item.summary.enabled}</p>
                 <p>{item.enabled}</p>
               </div>
             ))}
           </div>
         )}

         {/* CERTIFICATIONS */}
         {details.certifications.length != 0 && (
           <div className="mt-5">
             <p className="bg-gray-800 tracking-widest rounded-md mt-2 text-center text-white p-1 m-1 ">CERTIFICATION</p>
             {details.certifications.map((item) => (
               <div key={item.title} className="pl-2 pt-1">
                 <p className="font-semibold font-serif text-lg">{item.title} <span className=" font-bold font-sans text-xs ml-9">[{item.date}]</span> </p>
                 <p>{item.issuer}</p>
                 <p>{item.summary.data}</p>
               </div>
             ))}
           </div>
         )}
       </div>
       
     </div>
   
       </div>
    </div>
  </div>
</div>
</div>  


                  
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
