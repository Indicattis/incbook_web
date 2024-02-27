import React, { ReactNode, useState } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabControllerProps {
  tabs: Tab[];
}

const TabController: React.FC<TabControllerProps> = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  
    const handleTabClick = (index: number) => {
      setActiveTabIndex(index);
    };
  
    return (
      <div>
        <div className='flex gap-1 text-sm'>
          {tabs.map((tab, index) => (
            <div
                className={`p-2 cursor-pointer ${index === activeTabIndex ? 'border-b-2 text-white border-gold' : 'text-gray'}`}
                key={index}
                onClick={() => handleTabClick(index)}
                style={{ fontWeight: index === activeTabIndex ? 'normal' : 'normal' }}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div>
          {tabs[activeTabIndex].content}
        </div>
      </div>
    );
  };
  

interface TabllerProps {
  tabContents: ReactNode[];
  tabLabels: string[];
}

const Tabller: React.FC<TabllerProps> = ({ tabContents, tabLabels }) => {
    const tabs: Tab[] = tabContents.map((content, index) => ({
      label: tabLabels[index] || `Aba ${index + 1}`,
      content: content,
    }));

  return (
    <div className='bg-dark p-5'>
      <TabController tabs={tabs} />
    </div>
  );
};

export default Tabller;