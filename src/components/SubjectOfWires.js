import React, { Component } from 'react'

class SubjectOfWires extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cases: [
                [
                    {
                        color: 'white',
                        cut: false
                    },
                    {
                        color: 'blue',
                        cut: false
                    },
                    {
                        color: 'blue',
                        cut: false
                    }
                ],
                [
                    {
                        color: 'blue',
                        cut: false
                    },
                    {
                        color: 'red',
                        cut: false
                    },
                    {
                        color: 'white',
                        cut: false
                    }
                ],
                [
                    {
                        color: 'blue',
                        cut: false
                    },
                    {
                        color: 'blue',
                        cut: false
                    },
                    {
                        color: 'red',
                        cut: false
                    }
                ],
                [
                    {
                        color: 'white',
                        cut: false
                    },
                    {
                        color: 'blue',
                        cut: false
                    },
                    {
                        color: 'red',
                        cut: false
                    }
                ]
            ]
        }

    }


    componentDidMount() {

    }

    render() {

        return (
            <div>
                hi
            </div>
        )
    }

}
