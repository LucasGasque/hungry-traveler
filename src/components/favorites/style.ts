import styled from 'styled-components'

interface ShadowProps{
    show: boolean
}

export const Shadow = styled.div<ShadowProps>`
    display: ${props => props.show ? 'grid' : 'none'};
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: rgba(51, 51, 51, 0.9);
    position: fixed;
    top: 0;
    z-index: 10;
    place-items: center;  
`

export const Container = styled.div`
    max-width: 500px;
    width: 95%;
    height: 288px;

    @media (min-width:768px){
        height: 400px;
    }
    
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary);
    height: 40px;
    border-radius: 10px 10px 0 0;
    
    h3{
        color: var(--gray-0);
        margin-left: 20px;
    }

`

export const Button = styled.div`
    color:var(--gray-0);
    margin-right: 20px;
    cursor: pointer;
    display: grid;
    place-items: center;

    :hover{
        transform: scale(110%);
    }

    :active{
        transform: scale(95%);
    }
`

export const Box = styled.div`
    background-color:var(--gray-0);
    height: 100%;
    border-radius: 0 0 10px 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    box-sizing: border-box;
`