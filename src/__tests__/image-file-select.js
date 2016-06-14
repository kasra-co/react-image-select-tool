import { expect } from "chai";
import ImageFileSelector from "../";
import React from "react";
import ReactDOMServer from "react-dom/server";

it( "should render the component to an HTML string", () => {
  let markup = ReactDOMServer.renderToString( <ImageFileSelector /> );
  expect( markup ).to.be.a( "string" );
  expect( markup ).to.match( /^\</ );
  expect( markup ).to.match( /<\/\w+>$/ );
});
