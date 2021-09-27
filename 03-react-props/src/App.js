import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  let articles = [1, 2];

  return (
    <React.Fragment>
      <Header />
      {articles.map(function (count) {
        return (
          <Article
            key={`article-${count}`}
            serial={count}
            content={{
              title: `The Title ${count}`,
              content: `The Content ${count}`,
            }}
          />
        );
      })}

      {articles.map((count) => (
        <Article
          key={`article-arrow-${count}`}
          serial={count}
          content={{
            title: `The Arrow Title ${count}`,
            content: `The Arrow Content ${count}`,
          }}
        />
      ))}
      <Sidebar />
      <Footer />
    </React.Fragment>
  );
}

export default App;
