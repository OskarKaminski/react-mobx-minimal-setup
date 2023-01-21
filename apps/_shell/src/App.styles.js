import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`

export const Navigation = styled.div`
  text-transform: uppercase;
  background-color: #222;
  padding: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 800;
  line-height: 1.57;
  letter-spacing: 0.1em;
  
  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    margin: 0 20px;
    
    &.selected {
      text-decoration: underline;
    }
  }
 `