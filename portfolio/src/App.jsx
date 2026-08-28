import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "./App.css";


function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <Hero />
        <h1>My Website</h1>
        <p>Welcome to my React website.</p>
      </main>

      <Footer />
    </>
  );
}

export default App;