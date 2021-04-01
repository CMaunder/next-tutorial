import headerStyle from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>WEbdev Header</span>
                </h1>
            <p className={headerStyle.description}>
                Keep up to date with the latest web dev news.
            </p>
        </div>
    )
}

export default Header;