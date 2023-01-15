import classes from './Users.module.css';


let Paginator = (props) => {
    let pageValue = Math.ceil(props.totalUsers / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pageValue; i++) {
        pages.push(i)
    }

    return (
    <div>
        {pages.map((page => {
            return <span key={page}
                className={page === props.currentPage ? classes.selectedPage : ''}
                onClick={(e) => { props.onSetCurrentPage(page); }}
            >{page}  </span>
        }))
        }
    </div>
    )
}

export default Paginator;