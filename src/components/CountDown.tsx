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

    & > .time-unit {
        color: #222;
    }
`;

function CountDown({from, to, onTimeout}: CountDownProps) {
    const [timeLeft, setTimeLeft] = useState<number>(from);

    useEffect(() => {
        if(timeLeft > to) {
            const timeout = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timeout);
        } else {
            onTimeout();
        }
    }, [timeLeft])

    return (
        <CountDownContainer warning={timeLeft < 30 && timeLeft >= 10}
                            serious={timeLeft < 10}>
            {timeLeft}<small className="time-unit">s</small>
        </CountDownContainer>
    )

}

export default CountDown;