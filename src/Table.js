import React, { Component } from 'react';

const TableHeader = () => { // simple component
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
};

const TableBody = () => { // simple component
    return <tbody />;
};

class Table extends Component { // class component
    render() {
        const {characterData} = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
};

export default Table;