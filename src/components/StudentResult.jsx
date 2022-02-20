import React from 'react';
import PropTypes from 'prop-types';
import StudentRow from './StudentRow'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  
  table: {
    minWidth: 650,
  },
});

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data, sort } = this.props;
    const rows = []
    data.map((student ,index) => {
      rows.push(
        <StudentRow
          student={student}
          rank={index}
          key={index}
          sort={sort}
        />)
    })

    return (

        <Table className='Table' size="small" aria-label="a dense table" >
          <TableHead>
            <TableRow>
              <TableCell >{sort ? 'Rank' : ''}</TableCell>
              <TableCell >Name</TableCell>
              <TableCell>Marks1</TableCell>
              <TableCell>Marks2</TableCell>
              <TableCell>Marks3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >{rows}</TableBody>
        </Table>
   
    );
  }
}

StudentTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default StudentTable;