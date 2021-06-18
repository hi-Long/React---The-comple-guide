import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../hooks/use-http';

const NewTask = (props) => {
  const { isLoading, error, makeRequest } = useHttp()

  const enterTaskHandler = async (taskText) => {
    const requestConfig = {
      url: 'https://custom-hook-2406b-default-rtdb.firebaseio.com/task.json',
      method: 'post',
      data: { text: taskText }
    }

    const createTaskHandler = (data, taskText) => {
      const createdTask = {
        id: data.name,
        text: taskText
      }
      props.onAddTask(createdTask)
    }

    makeRequest(requestConfig, createTaskHandler)
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
