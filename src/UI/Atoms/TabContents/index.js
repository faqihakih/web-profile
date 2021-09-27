import React from 'react'
import { squadJson } from '../../../assets'
import { MentorDesc, SquadDesc } from '../../Organisms'

export default function TabContents({ openTab }) {
    return (
        <div>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                        {
                            squadJson.map((squad, index) => {
                                return (
                                    <div className={openTab === squad.id ? "block" : "hidden"} id={"link" + squad.id} key={index}>
                                        <SquadDesc title={squad.name} desc={squad.desc} />
                                        <MentorDesc />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
