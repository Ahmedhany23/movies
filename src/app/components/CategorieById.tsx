"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import MoviesGrid from "@/app/components/MoviesGrid";
import Pagination from "@/app/components/Pagination";
import Loading from "./Loading";
export default function CategorieComponent({id}:any) {
    const [currentpage,setCurrentpage] = useState(null)
    const [categories, setCategories] = useState(null);
    const [pages,setPages] = useState(null);
    const getPage = async (page:any = 1) => {
        try {
          const res = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&with_genres=${id}&page=${page}`
          );
          let result = res.data.results;
          
          setCategories(result);
          setPages(res.data.results.length);
          setCurrentpage(page)
        } catch (error) {
          console.error("Failed to fetch movie details:", error);
        }
      };
      useEffect(()=>{
        
        getPage();
       
      },[])
      if(!categories){
        return <Loading/>
      }
      if(categories){
        return (
            <div className="pt-4 mb-10 container mx-auto mt-6  ">
              <MoviesGrid movies={categories}/>
              <Pagination getPage={getPage} count={pages} currentpage={currentpage} />
            </div>
            );
      }
  
    
  }