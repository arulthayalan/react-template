import * as React from 'react';
import WelcomeProps from './types';
import { StyledH1, StyledButton } from './styled';

export default class Welcome extends React.Component<WelcomeProps, {}> {
    public render() {
        const { name }: WelcomeProps = this.props;

        return (
            <div>
                <StyledH1> Hello {name} welcome to react type script template </StyledH1>
                <StyledButton>Styled button </StyledButton>
            </div>
        );
    }
}
