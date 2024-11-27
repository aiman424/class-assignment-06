import React from 'react'
import Header from "@/components/Header";
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Achievments from '@/components/Achievments';
import Courses from '@/components/Courses';
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <Section2/>
      <Section3/>
      <Achievments/>
      <Courses/>
      <Team/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home

