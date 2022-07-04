import { Button, Card, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function DashDisplay({ title, displayAmount, displayLink, btnColor, linkName }) {
  function showButton() {
    if (linkName !== '/') {
      return (
        <Button as={Link} to={linkName} color={btnColor}>
          View all {title}
        </Button>
      )
    } else {
      return <></>
    }
  }

  // console.log(linkName)
  return (
    <Card>
      <Card.Content>
        <Card.Header as='h3' size='huge' color='red'>Total {title}</Card.Header>
        <Header size='huge'>${displayAmount.toLocaleString('en-US')}</Header>
        {showButton()}
      </Card.Content>
    </Card>
  )
}

export default DashDisplay