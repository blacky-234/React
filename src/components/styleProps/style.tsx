import { ContainerProps } from "components/types/style.types";

export const Container = (props: ContainerProps) => {
    return (
        <div style={props.style}>
            
        </div>
    )
}


/*
Usage:

<Container style={{width: '100%', height: '100vh', backgroundColor: 'red'}}></Container>


*/