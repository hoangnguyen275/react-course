import { Header } from "../components/Header";
import './Error404Page.css'

export function Error404Page(){
  return (
    <>
      <Header/>

      <div className="not-found-page">
        Page not found
      </div>
    </>
  );
}