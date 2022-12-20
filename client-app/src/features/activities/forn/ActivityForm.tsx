import { act } from '@testing-library/react';
import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/layout/models/activity'

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;

}


export default function ActivityForm ({activity: selectedActivity, closeForm, createOrEdit}: Props) {
  
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    description: '',
    category: '', 
    date: '', 
    city: '', 
    venue: ''

  }

  const [activity, setActivty] = useState(initialState);
  
  function handleSubmit() {
    createOrEdit(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    const {name, value} = event?.target;
    setActivty({...activity, [name]: value})


  }

  return (
   <Segment clearing>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input placeholder='Title' value={activity.title} onChange={handleInputChange} name='title' />
            <Form.TextArea placeholder='Description' value={activity.description} onChange={handleInputChange} name='description' />
            <Form.Input placeholder='Category'  value={activity.category} nChange={handleInputChange} name='category'  />
            <Form.Input placeholder='Date' value={activity.date} nChange={handleInputChange} name='date'  />
            <Form.Input placeholder='Venue' value={activity.venue} nChange={handleInputChange} name='venue' />
            <Form.Input placeholder='City' value={activity.city} nChange={handleInputChange} name='city'  />
            <Button floated='right' positive type='submit' content='Submit'  />
            <Button onClick={closeForm} floated='right' type='button' content='Cancel'  />
        </Form>
   </Segment>
  )
}
