import React from 'react'

export default function TabTitleTest({ openTab, setOpenTab, title , squadId}) {
    return (
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
                className={
                    "text-xs font-bold uppercase py-2  leading-normal " +
                    (openTab === squadId
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-black")
                }
                onClick={e => {
                    e.preventDefault();
                    setOpenTab(squadId);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
            >
                {title}
            </a>
        </li>
    )
}
