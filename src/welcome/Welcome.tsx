import * as React from 'react';
import WelcomeProps from './types';

export default class Welcome extends React.Component<WelcomeProps, {}> {
    public render() {
        const { name }: WelcomeProps = this.props;

        return <div> Hello {name} welcome to react type script template </div>;
    }
}
