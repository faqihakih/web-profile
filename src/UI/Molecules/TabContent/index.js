import React from 'react'
import { TabTitle, TabContents } from '../../Atoms'
import { squadJson } from '../../../assets'


export default function TabContent() {
    const [openTab, setOpenTab] = React.useState(1)
    return (
        <div>
            <div className="flex flex-wrap pt-28">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        {
                            squadJson.map((squad, index) => {
                                return (
                                    <TabTitle openTab={openTab} setOpenTab={(value) => {
                                        setOpenTab(value)
                                    }} title={squad.name} openedTab={squad.id} setOpenedTab={squad.id} index={index} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <TabContents openTab={openTab} />
        </div>
    )
}
