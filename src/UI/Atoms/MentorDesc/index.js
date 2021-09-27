import React from 'react'

export default function MentorDesc({detail, value}) {
    return (
        <div className="mt-3">
            <table>
                <tr>
                    <td className="w-24 font-bold">{detail}</td>
                    <td>{value}</td>
                </tr>
            </table>
        </div>
    )
}
