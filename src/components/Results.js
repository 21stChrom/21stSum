import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Results({ results }) {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Page</th>
            <th>Chapter</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.category}</td>
              <td>{result.page}</td>
              <td>{result.chapter}</td>
              <td>{result.summary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/">Back to Summarizer</Link>
    </div>
  );
}
