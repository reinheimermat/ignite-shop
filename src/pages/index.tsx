import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$green300',
  fontFamily: 'Roboto, sans-serif',
  borderRadius: '4px',
  border: 0,
  padding: '8px 16px',
})

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
