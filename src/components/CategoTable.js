import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CategoTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{ position: 'sticky', top: 0 }}>
          <TableRow>
            <TableCell>catNumber</TableCell>
            <TableCell>catName</TableCell>
            <TableCell>unitName</TableCell>
            <TableCell>brandName</TableCell>
            <TableCell>catCaliber</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.catNumber}</TableCell>
              <TableCell>{item.catName}</TableCell>
              <TableCell>{item.unitName}</TableCell>
              <TableCell>{item.brandName}</TableCell>
              <TableCell>{item.catCaliber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoTable;
