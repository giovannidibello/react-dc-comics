import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
// import './App.css'

function App(props) {

  // array di link
  const menuLinks = [
    { id: 1, name: "Characters", href: "#", current: false },
    { id: 2, name: "Comics", href: "#", current: true },
    { id: 3, name: "Movies", href: "#", current: false },
    { id: 4, name: "TV", href: "#", current: false },
    { id: 5, name: "Games", href: "#", current: false },
    { id: 6, name: "Collectibles", href: "#", current: false },
    { id: 7, name: "Videos", href: "#", current: false },
    { id: 8, name: "Fans", href: "#", current: false },
    { id: 9, name: "News", href: "#", current: false },
    { id: 10, name: "Shop", href: "#", current: false }
  ];

  return (
    <>
      <Header links={menuLinks} />
      <Main />
      <Footer />
    </>
  )
}

export default App
