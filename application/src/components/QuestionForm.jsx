// QuestionForm.js
import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import './QuestionForm.css'; 

const QuestionForm = () => {
  return (
    <>
      <Header as='h2' className="question-form-header">What do you want to ask or share</Header>
      
      <Form className="question-form">
        <Form.Input 
          label="Title" 
          placeholder="Start your question with how, what, why, etc." 
          className="input-field"
        />
        <Form.TextArea 
          label="Describe your problem" 
          placeholder="Describe your problem in detail..."
          className="textarea-field"
        />
        <Form.Input 
          label="Tags" 
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" 
          className="input-field"
        />
      </Form>
    </>
  );
};

export default QuestionForm;
