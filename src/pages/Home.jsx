import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Navbar/Header'
import RecentsPost from '../components/RecentPosts/RecentsPost'
import Category from '../components/Category/Category'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <RecentsPost />
    <Category />
    <Footer />
    </>
  )
}

export default Home