import { elements, userElements, notification, foldersMock, workspacesMock, appManagersMock } from './constants'
import { Footer, Header, HeaderMenu, HeaderUserMenu, Sidebar } from 'components'
import { ToggleIcon } from 'components/ToggleIcon/ToggleIcon'

import style from './App.module.css'
import headerStyle from 'components/Header/Header.module.css'

const App = () => {
    return (
        <div className={style.App}>
            <div className={style.HeaderWrapper}>
                <Header>
                    <HeaderMenu
                        elements={elements}
                        className={headerStyle.HeaderMenu}
                    />

                    <HeaderUserMenu
                        elements={userElements}
                        notification={notification}
                    />

                    <ToggleIcon
                        wrapperClassName={headerStyle.ToggleIconWrapper}
                        iconClassName={headerStyle.ToggleIcon}
                    />
                </Header>
            </div>
            <div className={style.MainWrapper}>
                <div className={style.ContentWrapper}>
                    <main className={style.Main}>
                        <h1>MAIN CONTENT</h1>
                    </main>
                    <Footer appVersion="1.0.0">
                        &#xa9;Copyright Optimacros 2018 - {new Date().getFullYear()}
                    </Footer>
                </div>
                <div className={style.SidebarWrapper}>
                    <Sidebar
                        folders={foldersMock}
                        content={[workspacesMock, appManagersMock]}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
