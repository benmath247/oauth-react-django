import React, { useState } from 'react';
import { Accordion, Card, ListGroup, Badge } from 'react-bootstrap';

const UserListAccordion = ({ users = [], onlineCount = 0 }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Card className="mb-3">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header
                        onClick={() => setIsOpen(!isOpen)}
                        className="d-flex justify-content-between align-items-center"
                    >
                        <div className="d-flex align-items-center">
                            <span className="me-2">Online Users</span>
                            <Badge bg="primary" pill>{onlineCount}</Badge>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className="p-0">
                        <ListGroup variant="flush">
                            {users.map((user) => (
                                <ListGroup.Item
                                    key={user.id}
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div>
                                        <span className="me-2">{user.name}</span>
                                        {user.isAdmin && (
                                            <Badge bg="warning" text="dark" pill>Admin</Badge>
                                        )}
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span
                                            className={`dot me-2 ${user.isOnline ? 'bg-success' : 'bg-secondary'}`}
                                            style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                display: 'inline-block'
                                            }}
                                        />
                                        {user.isTyping && (
                                            <span className="text-muted small">typing...</span>
                                        )}
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card>
    );
};

export default UserListAccordion;