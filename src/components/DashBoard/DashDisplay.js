import { Button, Card, Image } from 'semantic-ui-react'

function DashDisplay({ title, displayAmount, displayLink, btnColor }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header as='h3' size='huge' color='red'>Total {title}</Card.Header>
        <Card.Meta>{displayAmount}</Card.Meta>
        <Button color={btnColor}>
          View all {title}
        </Button>
      </Card.Content>
    </Card>
  )
}

export default DashDisplay