import * as React from 'react';
import  { WelcomeProps } from './types';

export default class Welcome extends React.Component<WelcomeProps, {}> {
    constructor(props: WelcomeProps) {
        super(props);
    }

    render() {
        const {name} = this.props;

        return (
            <div> Hello {name} welcome to react type script template </div>
        )
    }
};