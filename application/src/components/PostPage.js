// PostPage.js
import React, { useState } from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import PostTypeSelector from './PostTypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import './PostPage.css'; 

const PostPage = () => {
  const [postType, setPostType] = useState(null); 

  return (
    <Container className="post-container">
      <Header as='h1'>New Post</Header>

      
      <PostTypeSelector postType={postType} setPostType={setPostType} />

      
      {postType === 'question' && <QuestionForm />}
      {postType === 'article' && <ArticleForm />}

      <Button type="submit" color="grey" fluid disabled={!postType}>Post</Button> 
    </Container>
  );
};

export default PostPage;
