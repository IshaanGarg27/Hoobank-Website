import styles from "./style"
import {Navbar , Stats,Business ,Billing ,CardDeals , Testimonials,Clients,CTA, Footer, Hero} from './components'

function App() {
  return (
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>

        {/* Hero Section */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Hero />
          </div>
        </div>

        {/* Next Sections */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Stats/>
              <Business/>
              <Billing/>
              <CardDeals/>
              <Testimonials/>
              <Clients/>
              <CTA/>  {/* Call to action  */}
              <Footer/>
          </div>
        </div>

      </div>
  )
}

export default App
