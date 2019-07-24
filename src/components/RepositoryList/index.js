import React from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const RepositoryList = ({
  edges
}) => {
  return edges.length > 0 && (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {edges.map(({ node }) => (
            <TableRow key={node.id}>
              <TableCell component="th" scope="row">
                {node.name}
              </TableCell>
              <TableCell align="right">{node.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


    </>

  )
}



export default RepositoryList;
