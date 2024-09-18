// ArticleForm.js
import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import './ArticleForm.css'; 

const ArticleForm = () => {
  return (
    <>
      <Header as='h2'>What do you want to ask or share</Header>
      
      
      
      <Form className="article-form">
        <Form.Input 
          label="Title" 
          placeholder="Enter a descriptive title" 
        />
        <Form.TextArea 
          label="Abstract" 
          placeholder="Enter a 1-paragraph abstract"
        />
        <Form.TextArea 
          label="Article Text" 
          placeholder="Enter the full article text"
        />
        <Form.Input 
          label="Tags" 
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java" 
        />
      </Form>
    </>
  );
};

export default ArticleForm;
