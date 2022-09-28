import React from 'react'

const TabStudio = () => <span>Studio about</span>

const TabProcess = () => <span>Process about</span>

const TabOther = () => <span>Other about</span>

const TabSwitch = (tab) => {
  switch (tab) {
    case 0:
      return <TabStudio />
    case 1:
      return <TabProcess />
    case 2:
      return <TabOther />
    default:
      return <TabStudio />
  }
}

export function Studio() {
  const [activeTab, setTab] = React.useState(0)
  const switchTab = (num) => {
    setTab(num)
  }
  return (
    <section className="section" id="studio">
      <div className="container">
        <div className="full_height">
          <div className="studio_container">
            <div className="studio_container_left">
              <span onClick={() => switchTab(0)}>Studio</span>
              <span onClick={() => switchTab(1)}>Process</span>
              <span onClick={() => switchTab(2)}>Other</span>
            </div>
            <div className="studio_container_right">{TabSwitch(activeTab)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
