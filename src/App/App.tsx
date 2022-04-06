import React, { Component } from "react";
import style from "./App.module.css";
import FlexHLayout from "./components/layouts/FlexHLayout/FlexHLayout";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, Link, useParams, useLocation, useHistory, withRouter } from "react-router-dom";

interface I_AppProps {
  AppName?: string;
}
class App extends Component<I_AppProps> {
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <FlexHLayout>
          <div className={style.header}>
            Meme Generator . react
            <br />
            <Link to="/">Home</Link>&nbsp;
            <Link to="/thumbnail">thumbnail</Link>&nbsp;
            <Link to="/editor">Nouveau</Link>&nbsp;
            <Link to="/editor/1">edit/1</Link>
          </div>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <div className={style.home}>Page d'accueil</div>
            </Route>
            <Route path="/editor" exact component={RoutedEditor}/>
            <Route path="/editor/:id" component={RoutedEditor}/>
            <Route path="/thumbnail">
              <MemeThumbnail />
            </Route>
            <Route path="/">
              <div className={style.Erreur}>Page Innexistante</div>
            </Route>
          </Switch>
        </FlexHLayout>
      </div>
    );
  }
}
function Editor(props:any) {
  console.log(props);
  return (
    <FlexWLayout>
      <div>
        <MemeViewer />
      </div>
      <MemeForm />
    </FlexWLayout>
  );
}
const RoutedEditor=withRouter(Editor);
export default App;
