import Title from './Title'
import aboutImg from '../images/about.jpeg'
const About = () => {
  return (
    <section className='section' id='about'>
       <Title title ='about' subtitle='us' />
       
       <div className='section-center about-center'>
         <div className='about-img'>    
           <img src ={aboutImg} className='about-photo' alt= 'awesome beach' />

         </div>
         <article className='about-info'>
           <h3>Explore the Difference</h3>
           <p>Journey towards the world will gives you next level of energy in your life . Everything will comes from adventure only.
            From your birth to death adventure makes you learn more in your life lesson .
           
            </p>
            <h4>Journey  - Life - Loop - Enjoy </h4>

            <p>Journey towards the world will gives you next level of energy in your life . Everything will comes from adventure only.
            From your birth to death adventure makes you learn more in your life lesson .
           
            </p>
            <a href ='#' className='btn'>
            read more</a>
         </article>
       </div>
    
    </section>
  );
};


export default About;