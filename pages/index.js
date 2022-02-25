import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      {/* {Header} */}
      <Header />
      <main className='flex'>
       
          <Sidebar/>
        
          <Feed />
        {/* {
          <Widgets />
        } */}
      </main>
    </div>
  )
}