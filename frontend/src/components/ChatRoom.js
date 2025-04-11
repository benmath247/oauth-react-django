import React, { useState, useEffect, useRef } from 'react';
import { Card, Form, Button, Badge, ListGroup, InputGroup } from 'react-bootstrap';

const Chatroom = ({ username = "Guest" }) => {
    const [messages, setMessages] = useState([
        { id: 1, user: 'System', text: 'Welcome to the chatroom!', timestamp: new Date() }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [onlineUsers, setOnlineUsers] = useState(1);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        const message = {
            id: messages.length + 1,
            user: username,
            text: newMessage,
            timestamp: new Date()
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };

    return (
        <Card className="chat-room">
            <Card.Header className="d-flex justify-content-between align-items-center bg-primary text-white">
                <Card.Title className="mb-0">Chat Room</Card.Title>
                <Badge bg="light" text="dark">
                    Online: <span>{onlineUsers}</span>
                </Badge>
            </Card.Header>

            <Card.Body className="chat-container p-0">
                <div className="chat-messages p-3" style={{ height: '400px', overflowY: 'auto' }}>
                    <ListGroup variant="flush">
                        {messages.map((message) => (
                            <ListGroup.Item key={message.id} className="border-0 mb-2">
                                <div className={`d-flex ${message.user === username ? 'justify-content-end' : ''}`}>
                                    <div
                                        className={`rounded p-2 ${message.user === username ? 'bg-primary text-white' : 'bg-light'}`}
                                        style={{ maxWidth: '70%' }}
                                    >
                                        <div className="fw-bold small">
                                            {message.user === username ? 'You' : message.user}
                                            <span className="text-muted ms-2" style={{ fontSize: '0.7rem' }}>
                                                {message.timestamp.toLocaleTimeString()}
                                            </span>
                                        </div>
                                        <div>{message.text}</div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                        <div ref={messagesEndRef} />
                    </ListGroup>
                </div>
            </Card.Body>

            <Card.Footer>
                <Form onSubmit={handleSendMessage}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </InputGroup>
                </Form>
            </Card.Footer>
        </Card>
    );
};

export default Chatroom;