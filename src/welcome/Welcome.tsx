import * as React from 'react';
import WelcomeProps from './types';
import { StyledH1, StyledButton, StyledLabel } from './styled';

interface WelcomeState {
    count: number;
}

const counter = (add: boolean, initValue: number, by: number) => {
    return add ? initValue + by : initValue - 1;
};

export default class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    public constructor(props: WelcomeProps) {
        super(props);
        this.state = {
            count: 0
        };
    }

    public onClick = (add: boolean) => {
        this.setState(state => ({ count: counter(add, this.state.count, 1) }));
    };

    public render() {
        const { name }: WelcomeProps = this.props;

        return (
            <div>
                <StyledH1> Hello {name} welcome to react type script template </StyledH1>
                <StyledLabel> {this.state.count} </StyledLabel>
                <StyledButton onClick={() => this.onClick(true)}>Add </StyledButton>
                <StyledButton onClick={() => this.onClick(false)}>Reduce</StyledButton>
            </div>
        );
    }
}
