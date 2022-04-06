import React, { Component } from "react";
import style from "./App.module.css";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import  MemeThumbnail  from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";
interface I_AppProps {
  AppName?: string;
}
class App extends Component<I_AppProps> {
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        {JSON.stringify(this.state)}
        <MemeThumbnail/>
        <FlexWLayout>
          <div>
            <MemeViewer/>
          </div>
          <MemeForm/>
        </FlexWLayout>
      </div>
    );
  }
}
export default App;
