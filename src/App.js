import React, { useEffect, useState } from "react";
import "./App.scss";
import { Layout } from "antd";
import { fetchData, HEADINGS as H, getCampaignKeyFromUrl } from "./data";
import { Switch, Route, useLocation, useParams } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// campaignKey is the long id in the sheets URL
// https://docs.google.com/spreadsheets/d/CAMPAIGN_KEY

function App() {
  const location = useLocation();
  let { campaignKey } = useParams();

  //	Hack around params not being parsed?
  if (!campaignKey) {
    campaignKey = getCampaignKeyFromUrl(location.pathname);
  }

  const [data, setData] = useState({
    system: null,
    characters: []
  });

  useEffect(() => {
    //	Run once at the start

    //	Directly calling async functions in useEffect does not work
    (async () => {
      const newData = await fetchData(campaignKey);
      setData(newData);
    })();

    //	Then set interval
    const interval = setInterval(() => {
      //	Directly calling async functions in useEffect does not work
      (async () => {
        const newData = await fetchData(campaignKey);
        setData(newData);
      })();

      //	Every 3 minutes
    }, 3 * 60 * 1000);
    return () => clearInterval(interval);
  }, [campaignKey]);

  const characters = data.characters.filter(item => !!item[H.CHARACTER_NAME]);
  const config = data.config;

  return (
    <div className="App">
      <Layout>
        <Header characters={characters}></Header>

        <Layout>
          <Switch>
            {routes
              .filter(route => !!route.sidebar)
              .map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={
                    <Layout.Sider>
                      <route.sidebar characters={characters} config={config} />
                    </Layout.Sider>
                  }
                />
              ))}
          </Switch>

          <Layout.Content>
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={
                    <route.main characters={characters} config={config} />
                  }
                />
              ))}
            </Switch>
          </Layout.Content>
          <Layout.Footer className="textCenter">
            &copy; 2020 Joanna Walker |{" "}
            <FontAwesomeIcon icon={faGithub} fixedWidth />{" "}
            <a
              href="https://github.com/thinksentient/pbta-companion"
              target="_blank"
              rel="noopener noreferrer"
            >
              PBTA COmpanion on Github
            </a>{" "}
            |{" "}
            <a
              href="https://www.magpiegames.com/epyllion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Epyllion
            </a>
          </Layout.Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
