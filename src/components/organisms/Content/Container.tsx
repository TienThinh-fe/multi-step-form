import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

const Container = styled(motion.div)`
  width: 80%;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

type ContainerProps = {
  children: React.ReactNode
}

export const ContentContainer = ({ children }: ContainerProps) => {
  return (
    <AnimatePresence>
      <Container
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
      >
        {children}
      </Container>
    </AnimatePresence>
  )
}
