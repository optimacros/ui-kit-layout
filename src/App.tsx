import { Header } from './layouts/Header/Header'
import styles from './styles/Workspace.module.css'

const elements = [
            {
                id: '1',
                icon: 'list',
                title: 'AM Landing (Applications)',
                disabled: false,
                open: () => console.log("click"),
            },
            {
                id: '2',
                title: 'Tasks manager',
                disabled: false,
                open: () => console.log("click"),
            },
            {
                id: '3',
                title: 'Task output',
                disabled: false,
                open: () => console.log("click"),
            },
            {
                id: '4',
                title: 'General parameters',
                disabled: false,
                open: () => console.log("click"),
            },
            {
                id: '5',
                title: 'Security Center',
                disabled: true,
            },
            {
                id: '6',
                title: `Help`,
                disabled: false,
                children: [
                    {
                        id: '7',
                        icon: 'help_outline',
                        title: `App Version`,
                        disabled: false,
                        open: () => console.log("click"),
                    },
                ],
            },
]
        
const userElements = [
            {
                id: '10',
                title: 'userName',
                icon: 'iconUser',
                disabled: false,
                children: [
                    {
                        id: '11',
                        icon: 'iconUser',
                        title: 'Profile',
                        disabled: false,
                        open: () => console.log("click"),
                    },
                    {
                        id: '12',
                        icon: 'help_outline',
                        title: 'App version',
                        disabled: false,
                        open: () => console.log("click"),
                    },
                    {
                        id: '13',
                        icon: 'settings',
                        title: 'Settings',
                        disabled: false,
                        open: () => console.log("click"),
                    },
                    {
                        id: '14',
                        icon: 'input',
                        title: 'Log Out',
                        disabled: false,
                        open: () => console.log("click"),
                    },
                ] },
        ]

function App() {
    return (
        <div className={styles.Wrapper}>
            <Header elementsMenu={elements} elementsUserMenu={userElements} />
        </div>
    )
}

export default App
