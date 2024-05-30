import React from 'react';
import Categories from './Categories';
import PopularCourses from './PopularCourses';
import Breadcrumb from './Breadcrumb';
const Courses = () => {
    return (
        <>
         <Breadcrumb page="Courses"/>
         <Categories />
         <PopularCourses />   
        </>
    );
}

export default Courses;
