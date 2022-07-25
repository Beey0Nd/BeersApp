const Navigation = ({pages, setPages}) => {
    const checkActive = (i) => {
        return pages.currentPage === i ? "active" : ""; 
    }

    const renderNavigation = () => {
        const arr = [];

        for(let i = 1; i <= pages.totalPages; i++) {
            arr.push(
                <button
                    onClick={() => setPages({
                        ...pages,
                        currentPage: i
                    })}
                    key={i} 
                    className={`navigation__button ${checkActive(i)}`}>
                        {i}
                </button>
            )
        }

        return arr;
    }

    return (
        <nav className="navigation">
            {renderNavigation()}
        </nav>
    )
}

export default Navigation;