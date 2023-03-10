import UserResume from "../../model/UserResume";

export default async function handler(req,res){

    
    const pro = {
        personal: {
            firstName:"FNAME",
            lastName: "LANME",
            email: "one@gmail.com",
            role: "WEB DEVELPOER",
            image: "",
            dob: "1985-11-01",
            phone: "9", 
            objective:" Write Something ",
        },
        social: [
            {
              network: "Instagram",
              username: "tim_j",
              url: "https://www.instagram.com/tim_j/",
              enabled: true,
            },
        ],
        work: [
            {
              company: "Kell Tech",
              from: "2022-03-12",
              to: "2024-08-10",
              designation: "Senior Development Engineer",
              website: "http://www.kelltech.com",
              summary: {
                data: "- Utilized Cloud Foundry for efficient building on top of Kubernetes.\n- Supported testing and engineering processes.",
                enabled: true,
              },
              enabled: true,
            },
          ],
          education: [
            {
              institution: "University of Pennsylvania",
              fieldOfStudy: "Computer Science",
              typeOfDegree: "Master of Science",
              startDate: "2015-04-10",
              endDate: "2018-06-10",
              gpa: "7.5",
              summary: {
                data: "Completed MS in the field of Computer Science",
                enabled: true,
              },
              enabled: true,
            },
        ],
        awards: [
            {
              name: "Best performer Award",
              awarder: "Kell Tech",
              date: "2021-09-21",
              summary: {
                data: "Recieved an award for best performance for the term.",
                enabled: true,
              },
              enabled: true,
            },
        ],
        skills: [
            {
              name: "ReactJS",
              level: "Beginner",
              enabled: true,
            },
        ],
        languages: [
            {
              name: "English",
              fluency: "Professional",
              enabled: true,
            },
          ],
          hobbies: [
            {
              name: "Solving puzzles",
              enabled: true,
            },
            {
              name: "Travelling",
              enabled: true,
            },
          ],
    }


    const data = await UserResume.findOne({"personal.email":pro.personal.email})
    if(data){
        res.send({"user":"exist"}) 
    }
    else{
        await UserResume.create(pro)
        
        res.send({"done":"created"})
    }
    // console.log("data",data)
    // console.log("user created")
}