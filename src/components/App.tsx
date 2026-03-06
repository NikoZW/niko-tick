import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="flex justify-center items-center font-roboto bg-[#f1d4b3] min-h-screen flex-col ">
      <BackgroundHeading />

      <main
        className="relative w-243 h-159 bg-white rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.08)]
       grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"
      >
        <Header />

        <TodoList />

        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
export default App;
