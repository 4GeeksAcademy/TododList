import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Control
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
            className="mb-3"
          />
          <Button onClick={handleAdd} variant="primary" className="mb-3">
            Add Task
          </Button>
          <ul className="list-unstyled">
            {tasks.map((task) => (
              <li key={task} className="mb-2">
                <Row>
                  <Col xs={10} className="text-break">
                    {task}
                  </Col>
                  <Col xs={2}>
                    <Button
                      onClick={() => handleDelete(tasks.indexOf(task))}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
