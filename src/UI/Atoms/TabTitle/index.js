import React from 'react'

export default function TabTitle({ openTab, setOpenTab, title, openedTab, setOpenedTab, index }) {
    return (
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={index}>
            <a
                className={
                    "text-xs font-bold uppercase py-2  leading-normal " +
                    (openTab === openedTab
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-black")
                }
                onClick={e => {
                    e.preventDefault();
                    setOpenTab(setOpenedTab);
                }}
                data-toggle="tab"
                href={"#link" + openedTab}
                role="tablist"
            >
                {title}
            </a>
        </li>
    )
};
