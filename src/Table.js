import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th></th>
        </tr>
        </thead>
    )
};
const TableBody = (props) => {
    const rows = props.characterDatsa.characters.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    });
    return (
        <tbody>{ rows }</tbody>
    )
};

class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody characterDatsa={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}

export default Table;