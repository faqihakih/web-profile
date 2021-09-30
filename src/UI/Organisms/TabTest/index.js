import React from 'react'
import { squadJson } from '../../../assets';
import { TabContentTest, TabTitleTest } from '../../Molecules';

export default function TabTest() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex flex-wrap pt-28">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {
            squadJson.map((squad, index) => {
              return (
                <TabTitleTest openTab={openTab} setOpenTab={setOpenTab} squadId={squad.id} title={squad.name} key={index} />
              )
            })
          }
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {
                squadJson.map((squad, index) => {
                  return (
                    <TabContentTest openTab={openTab} titleMentor={squad.title} mentorName={squad.mentorName} exp={squad.exp} hobby={squad.hobby} quote={squad.quotes} describe={squad.desc} squadTitle={squad.name}  squadId={squad.id} key={index} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}