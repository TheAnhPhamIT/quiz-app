import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

type CountDownProps = {
    from: number;
    to: number;
    onTimeout: () => void;
}

const CountDownContainer = styled.span`
    font-weight: 800;
    color: ${(props: {warning: boolean, serious: boolean}) => {
        if(props.warning) return '#e67e22';
        if(props.serious) return '#e74c3c';
        return '#1abc9c';
    }};
`;

function CountDown(props: CountDownProps) {
    const [timeLeft, setTimeLeft] = useState<number>(props.from);

    useEffect(() => {
        console.log('here')
        const interval = setInterval(() => {
            if(timeLeft <= props.to) {
                clearInterval(interval);
                console.log(interval)
            }
            setTimeLeft(t => t - 1);
        }, 1000);
    }, [])

    return (
        <CountDownContainer warning={timeLeft < 30 && timeLeft >= 10}
                            serious={timeLeft < 10}>
            {timeLeft}
        </CountDownContainer>
    )

}

export default CountDown;