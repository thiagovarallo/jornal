import { useState } from "react";
import Cards from "../cards";
import axios from "axios";

const baseUrl = `https://newsapi.org/v2/top-headlines`

export function TopicsSection({subject} : {subject : string}) {

    const baseUrl = `https://newsapi.org/v2/top-headlines?apiKey=7420c10ffcef4573a05e58adba264b44&q=${subject}&pageSize=3`
    const [post, setPost] = useState([])

    useState(() => {
        axios.get(baseUrl, {
        headers : { Authorization: '7420c10ffcef4573a05e58adba264b44' }
        })
        .then((res) => {
            setPost(res.data.articles)
        })
    })
    
    console.log(subject)

    return(
        <section id={subject} className={`w-full min-h-[10rem] px-4 lg:px-44 before:content-['${subject}'] before:relative before:top-3 before:left-2 before:font-inter before:px-3 before:bg-slate-200 before:text-[18px] before:font-semibold before:text-primary`}>
           <div className="full h-full p-3 border-primary border-[1px] ">
            
                <div className="full h-full flex flex-col gap-3">
                    
                    {post.map((item, index) => (
                        <Cards key={index} post={item}/>
                    ))}

                </div>

           </div>
        </section>
    )
}