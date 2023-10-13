import Header from "../Components/Header";

export const NoPage = ({ menu }) => {
    return (
      <>
      <Header menu={menu}/>
      <h1>Error 404</h1>
      <p>his page doesn't exist</p>
      </>
    )
  }
  