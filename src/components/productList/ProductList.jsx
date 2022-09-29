import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { dataSource } from '../../dataSource';

import "./productList.css"
import Footer from '../Footer/Footer';

const ProductList = () => {
  return (
    <div className="listContainer">
        <section className="listWrapper">
            <div className="tableContainer">
                <div className="top">
                    <h2>Product List</h2>
                </div>
                <div className="bottom">
                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead className="tableHead">
                            <TableRow>
                                <TableCell className="tableCell">Product ID</TableCell>
                                <TableCell className="tableCell">Product Name</TableCell>
                                <TableCell className="tableCell">Product Type</TableCell>
                                <TableCell className="tableCell">Product Price</TableCell>
                                <TableCell className="tableCell">Size</TableCell>
                                <TableCell className="tableCell">Width</TableCell>
                                <TableCell className="tableCell">Length</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {dataSource.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="tableCell">{row.id}</TableCell>
                                    <TableCell className="tableCell">{row.username}</TableCell>
                                    <TableCell className="tableCell">{row.email}</TableCell>
                                    <TableCell className="tableCell">{row.status}</TableCell>
                                    <TableCell className="tableCell">{row.age}</TableCell>
                                    <TableCell className="tableCell">{row.status}</TableCell>
                                    <TableCell className="tableCell">{row.age}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                 </TableContainer>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default ProductList