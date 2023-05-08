import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { useHistory } from 'react-router-dom';

function DocumentSummarizer() {
  const [document, setDocument] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/summarize', { document, category });
    setResults(response.data);
    history.push('/results');
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="document">
          <Form.Label>Document</Form.Label>
          <TextareaAutosize
            className="form-control"
            placeholder="Paste your document here"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category of interest"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Summarize</Button>
      </Form>
    </div>
  );
}