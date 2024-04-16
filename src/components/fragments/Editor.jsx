import React, { useEffect, useState } from "react";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

// Load all plugins
import "froala-editor/js/plugins.pkgd.min.js";

// Require Editor CSS files.
import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
const Editor = ({ model, handleModelChange }) => {
  return (
    <div className="mt-7">
      <FroalaEditorComponent onModelChange={handleModelChange} tag="textarea" />
      {/* <div id="editor">
        <FroalaEditorView model={model} />
      </div> */}
    </div>
  );
};

export default Editor;
