import React from 'react'
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react'
import { Activity } from '../../../app/layout/models/activity'

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {
  return (<>
        <Card fluid>
        <Image title='category image' src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                <span>{activity.date.toString()}</span>
            </Card.Meta>
            <Card.Description>
                {activity.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <ButtonGroup widths='2'>
                <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit' />
                <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel' />
            </ButtonGroup>
        </Card.Content>
    </Card>
    </>
  )
}

export default ActivityDetails