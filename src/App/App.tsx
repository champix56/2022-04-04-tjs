import React, { Component } from "react";
import style from "./App.module.css";
import FlexHLayout from "./components/layouts/FlexHLayout/FlexHLayout";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";
interface I_AppProps {
  AppName?: string;
}
class App extends Component<I_AppProps> {
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <FlexHLayout>
          <div className={style.header}>Meme Generator . react</div>
          <Navbar/>
          <FlexWLayout>
            <div>
              <MemeViewer />
            </div>
            <MemeForm />
          </FlexWLayout>
        </FlexHLayout>
      </div>
    );
  }
}
export default App;
