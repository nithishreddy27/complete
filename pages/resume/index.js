import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useUser } from "../../lib/hooks";
import ResumeContext from "../../context/ResumeContext";
import { TbPlus } from "react-icons/tb";
import { useRouter } from "next/router";

export default function Index(props) {
  const { details, setdetails, setdemo, demo, id, setid } =
    useContext(ResumeContext);

  const data = props.done;
  const router = useRouter()
  // console.log("done",data)
  const user = useUser()
  useEffect(()=>{
    setid(null)
  },[0])


  async function changePublic(resumeId){
    const body={
      email:user.email,
      resumeId:resumeId
    }    
    await fetch("/api/changePublic",{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body : body }),
    })
    router.reload()
  }


  async function deleteResume(index){
   
    console.log("index",index)
    const body={
      email:user.email,
      index:index
    }   
    console.log(body)
    await fetch("/api/testResume",{
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({body}),
  })
  router.reload()
  }

  return (
    <>
      {user && (
        

        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4  mx-auto place-items-center mt-4 pt-4">
          <div className=" cursor-pointer">
            <div className="box  my-7 mx-12 h-[90mm] w-[70mm] border-4 border-dashed border-gray-300 ">
              <div className="text-gray-500 text-center my-[58%] text-3xl font-semibold">
                {/* CREATE */}
               <Link href="/resume/resumes">Create</Link>
                <div className=" flex justify-center "><TbPlus/></div>


                {/* <input type="text" name="role" id="role" className='border' required placeholder='enter role'/> */}

              </div>
            </div>


            {data.map((item)=>(
              <div key={item._id}> 
                {user.email == item.email && (

                    <div className=''>
            {item.resume.map((resume,index)=>(
              <>
                {resume.publicResume == "false" && (

                    <div className='box relative my-7 mx-12 h-[90mm] w-[70mm] bg-black border-[4px] border-orange-500' key={resume._id}>
                    <span>
                  <img className="w-full h-full object-cover object-center opacity-60 hover:opacity-40" src="https://www.provast.io/_next/image?url=https%3A%2F%2Fwww.callcentrehelper.com%2Fimages%2Fstories%2F2022%2F01%2Fhands-holding-cvs.gif&w=2048&q=75" />
                </span>
                <Link href={`/resume/${resume.id}?index=${index}`} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold whitespace-nowrap transition-all duration-500">
                  {resume.personal.role}
                </Link>
                <button onClick={()=>{changePublic(resume._id)}} className="mx-5">Make public</button>
                <button onClick={()=>{deleteResume(index)}}>Delete Resume</button>
                  </div>
                  
                  )}


                {resume.publicResume == "true" && (
                  <>
                    <h1 className="text-center">Public</h1>

                  <div className='box relative mb-7 mx-12 h-[90mm] w-[70mm] bg-black border-[4px] border-orange-500' key={resume._id}>
                  <span>
                  <img className="w-full h-full object-cover object-center opacity-60 hover:opacity-40" src="https://www.provast.io/_next/image?url=https%3A%2F%2Fwww.callcentrehelper.com%2Fimages%2Fstories%2F2022%2F01%2Fhands-holding-cvs.gif&w=2048&q=75" />
                  </span>
                  <Link href={`/resume/${resume.id}?index=${index}`} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold whitespace-nowrap transition-all duration-500">
                  {resume.personal.role}
                  </Link>
                  <button onClick={()=>{deleteResume(index)}}>Delete Resume</button>

                </div>
                  </>

                )}
                </>
  ))}
               </div>
                )}
              </div>))}
        <style>
                          {`
          .box:hover span { 
          transform: translate(-50%, -100%);
          } `}
        </style>
                     
          </div>
        </div>
      
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/testResume/search");
  const data = await res.json();
  // console.log("data in server",data);
  return {
    props: {
      done: data,
    },
  };
};
