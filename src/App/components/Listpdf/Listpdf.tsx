import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import { connect } from "react-redux";
import { I_Image, I_Meme } from "../../interfaces/common";
import style from "./Listpdf.module.scss";
interface I_ListpdfProps {
  // func:Function;
  memes: Array<I_Meme>;
  images: Array<I_Image>;
}
const Listpdf: React.FC<I_ListpdfProps> = (props) => {
  return (
    <div className={style.Listpdf}>
      <PDFDownloadLink
        document={<DocumentPDF memes={props.memes} images={props.images} />}
        fileName="memes.pdf"
      >
        liens de DL
      </PDFDownloadLink>
      <br />
      <PDFViewer showToolbar={true}>
        <DocumentPDF memes={props.memes} images={props.images} />
      </PDFViewer>
    </div>
  );
};

const mapStateToProps = (state: any, own: any) => {
  return {
    ...own,
    ...state.ressources,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    // func:()=>{dispatch({})}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listpdf);

interface I_PDFDocumentProps {
  memes: Array<I_Meme>;
  images: Array<I_Image>;
}

const DocumentPDF: React.FC<I_PDFDocumentProps> = (props) => {
  return (
    <Document>
      <Page size={"A4"}>
        <View>
          <Text>Hello world</Text>
        </View>
      </Page>
    </Document>
  );
};
