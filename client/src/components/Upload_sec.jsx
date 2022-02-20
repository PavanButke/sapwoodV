import React from 'react'
import PropTypes from 'prop-types';
import StudentRow from './StudentRow';
import { Typography } from "@material-ui/core";

import UploadImages from "../services.js/upload-file.service";
import './Student.css'

function upload_sec() {
  return (
    <div className="container">
      <div className="mg20">
        <Typography variant="h5">Upload</Typography>
        <Typography variant="h6">Material UI Image Upload with Preview</Typography>
      </div>  <UploadImages  />
    </div>
    

  )
}
StudentRow.propTypes = {
    student: PropTypes.object.isRequired
  };

export default upload_sec;
