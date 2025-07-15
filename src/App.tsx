import Page from "./components/sections/Page"

//Header

import Header from "./components/sections/Header"
import Hero from "./components/sections/Hero"
import Navbar from "./components/sections/Navbar"
import Review from "./components/sections/Review"
import Main from "./components/sections/Main"

//Main
import Logo from "./components/sections/Logo"
import Features from "./components/sections/Features"
import FAQs from "./components/sections/FAQs/FAQs"
import Testimonials from "./components/sections/Testimonial/Testimonials"

//Footer
import Footer from "./components/sections/Footer"

//Modal
import Modal from "./components/sections/Modal/Modal"
import SignupModal from "./components/sections/Modal/SignupModal"

//Context
import { ModalContextProvider } from "./contexts/ModalContext"
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext"

//Mobile menu
import MobileMenu from "./components/sections/MobileMenu/MobileMenu"

const App = () => {
  return (

    <MobileMenuContextProvider>

      <ModalContextProvider  >

        <Page>
          <Header>
            <Navbar />
            <Hero />
            <Review />
          </Header>

          <Main>
            <Logo />
            <Features />
            <FAQs />
            <Testimonials />
          </Main>

          <Footer />

          <Modal modal="sign-up" >

            <SignupModal />

          </Modal>

          <MobileMenu />
        </Page>

      </ModalContextProvider>

    </MobileMenuContextProvider>

  )
}

export default App
