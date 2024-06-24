"use client";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import MoviesGrid from "@/app/components/MoviesGrid";
import Pagination from "@/app/components/Pagination";
import Loading from "./Loading";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { getPage } from "../redux/actions/movieAction";

export default function CategorieComponent({ id }: any) {
    const [currentpage, setCurrentpage] = useState(1);
    const [categories, setCategories] = useState(null);
    const [pages, setPages] = useState(null);
    const dispatch = useAppDispatch();
    const isMounted = useRef(false);

    const fetchData = async () => {
        await dispatch(getPage(id, currentpage));
    };

    useEffect(() => {
        if (!isMounted.current) {
            fetchData();
            isMounted.current = true;
        }
    });

    const categorie = useAppSelector((state) => state.moviesReducer.movies);
    const page = useAppSelector((state) => state.moviesReducer.pageCount);

    useEffect(() => {
        setCategories(categorie);
        setPages(page);
    }, [categorie, page]);

    if (!categories) {
        return <Loading />;
    }
    return (
        <div className="pt-4 mb-10 container mx-auto mt-6">
            <MoviesGrid movies={categories} />
            <Pagination getPage={getPage} count={pages} currentpage={currentpage} id={id} />
        </div>
    );
}
