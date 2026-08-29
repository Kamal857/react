import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "./App.css";
import Form from "./components/Form";


function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <Hero />
        <Form />
      </main>

      <Footer />
    </>
  );
}

export default App;