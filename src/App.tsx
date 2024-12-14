import { Tabs } from 'antd'
import Books from '../pages/Books/Books'

function App() {
    const tabs = [
        {
            label: 'Knjige',
            key: '1',
            children: <Books></Books>
        },
    ];
    return (
        <>
            <Tabs
                defaultActiveKey="1"
                centered
                items={tabs}
            />
        </>
    )
}

export default App
